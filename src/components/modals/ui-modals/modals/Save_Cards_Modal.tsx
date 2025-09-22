"use client";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import DataObjectIcon from "@mui/icons-material/DataObject";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import SaveIcon from "@mui/icons-material/Save";
import { useUiModalsStore } from "@/lib/zustand/uiModals/useUiModals";
import { useCurrentCardsStore } from "@/lib/zustand";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  border: "2px solid #1976D2",
  boxShadow: 24,
  borderRadius: "12px",
  padding: "24px",
  width: "300px",
};

const Save_Cards_Modal: React.FC = () => {
  const offUiModalsStore = useUiModalsStore((state) => state.offUiModalsStore);
  const isOpen = useUiModalsStore((state) => state.uiModalsStore.state);
  const currentCards = useCurrentCardsStore((state) => state.currentCards);

  const handleSaveAsPDF = async () => {
    try {
      const [regularFontRes] = await Promise.all([
        fetch("/fonts/NotoSans/NotoSans.ttf"),
      ]);

      if (!regularFontRes.ok)
        throw new Error("Не удалось загрузить основной шрифт");

      const regularFontData = await regularFontRes.arrayBuffer();

      const doc = new jsPDF();

      doc.addFileToVFS(
        "NotoSans-Regular.ttf",
        arrayBufferToBase64(regularFontData)
      );
      doc.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");

      doc.setFont("NotoSans", "normal");
      doc.setFontSize(16);

      doc.text("Список карточек", 14, 20);

      const headers = [["Name", "Название", "Description", "Описание"]];

      const data = (currentCards || []).map((card) => [
        card.name || ".",
        card.intlName || ".",
        card.description || ".",
        card.intlDescription || ".",
      ]);

      if (data.length === 0) {
        doc.text("Нет данных для отображения", 14, 40);
      } else {
        autoTable(doc, {
          startY: 30,
          head: headers,
          body: data,
          styles: {
            font: "NotoSans",
            fontStyle: "normal",
            fontSize: 10,
            cellPadding: 3,
          },
          headStyles: {
            font: "NotoSans",
            fontStyle: "normal",
            fillColor: [25, 118, 210],
            textColor: 255,
            halign: "center",
          },
          didDrawCell: (data) => {
            if (data.section === "head") {
              doc.setFont("NotoSans", "bold");
            }
          },
        });
      }

      doc.save("cards.pdf");
    } catch (err) {
      console.error("Ошибка при генерации PDF:", err);
      alert("Не удалось создать PDF. Проверьте консоль для подробностей.");
    }
  };

  const handleSaveJSON = () => {
    const save = currentCards.map((item) => ({
      name: item.name,
      intlName: item.intlName,
      description: item.description,
      intlDescription: item.intlDescription,
    }));
    const jsonData = JSON.stringify(save, null, 2);

    const blob = new Blob([jsonData], { type: "application/json" });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cards_data.json";

    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const arrayBufferToBase64 = (buffer: ArrayBuffer): string => {
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  const handleDownload = async (): Promise<Array<{
    name: string;
    intlName: string;
    description: string;
    intlDescription: string;
  }> | null> => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,.pdf";

    return new Promise((resolve) => {
      input.onchange = async (e) => {
        const file = (e.target as HTMLInputElement).files?.[0];
        if (!file) {
          alert("Файл не выбран");
          resolve(null);
          return;
        }

        const fileName = file.name.toLowerCase();
        const isJSON = fileName.endsWith(".json");
        const isPDF = fileName.endsWith(".pdf");

        if (!isJSON && !isPDF) {
          alert("Пожалуйста, выберите файл JSON или PDF");
          resolve(null);
          return;
        }

        try {
          if (isJSON) {
            const text = await file.text();
            const jsonData = JSON.parse(text);

            if (!Array.isArray(jsonData)) {
              alert("JSON файл должен содержать массив");
              resolve(null);
              return;
            }

            for (const item of jsonData) {
              const requiredKeys = [
                "name",
                "intlName",
                "description",
                "intlDescription",
              ];
              for (const key of requiredKeys) {
                if (!(key in item)) {
                  alert(`В JSON файле отсутствует ключ: ${key}`);
                  resolve(null);
                  return;
                }
              }
            }

            resolve(jsonData);
            setLocalStorage(jsonData);
          } else if (isPDF) {
            const data = (currentCards || []).map((card) => ({
              name: card.name || "",
              intlName: card.intlName || "",
              description: card.description || "",
              intlDescription: card.intlDescription || "",
            }));

            if (data.length === 0) {
              alert("Нет данных для отображения");
              resolve(null);
            } else {
              setLocalStorage(data);
              resolve(data);
            }
          }
        } catch (error) {
          console.error("Ошибка обработки файла:", error);
          alert("Произошла ошибка при обработке файла");
          resolve(null);
        }
      };

      input.click();
    });
  };

  function setLocalStorage(
    data: Array<{
      name: string;
      intlName: string;
      description: string;
      intlDescription: string;
    }>
  ) {
    const cards: any[] = JSON.parse(localStorage.getItem("my-cards") || "[]");
    const categories: any[] = JSON.parse(
      localStorage.getItem("my-categories") || "[]"
    );

    let smallestCardId =
      cards.length > 0 ? Math.min(...cards.map((card) => card.id)) : -1;
    let smallestCategoryId =
      categories.length > 0 ? Math.min(...categories.map((cat) => cat.id)) : -1;

    const newCategory = {
      createDate: Date.now(),
      id: smallestCategoryId - 1,
      intlName: `Загруженные ${Math.abs(smallestCategoryId - 1)}`,
      name: `Downloaded ${Math.abs(smallestCategoryId - 1)}`,
    };

    const newCards = data.map((item, index) => ({
      catId: newCategory.id,
      name: item.name,
      intlName: item.intlName,
      description: item.description,
      intlDescription: item.intlDescription,
      inBasket: false,
      isUserCard: true,
      id: smallestCardId - 1 - index,
    }));

    categories.unshift(newCategory);
    cards.unshift(...newCards);

    localStorage.setItem("my-categories", JSON.stringify(categories));
    localStorage.setItem("my-cards", JSON.stringify(cards));

    window.location.reload();
    handleOffModal();
  }

  const handleOffModal = () => {
    offUiModalsStore();
  };

  return (
    <Modal open={isOpen} onClose={handleOffModal}>
      <Box sx={style}>
        <h2 className="text-[#1976D2] text-center text-lg font-bold">
          Выберите вариант
        </h2>{" "}
        <h3 className="text-[#1976D2] text-[8px] text-center leading-[1.1] font-bold mb-4">
          При сохранении все карточки на этой странице будут сохранены
        </h3>
        <div className="flex flex-col gap-2">
          <Button
            variant="outlined"
            onClick={handleSaveAsPDF}
            style={{ borderColor: "#1976D2", color: "#1976D2" }}
            startIcon={<PictureAsPdfIcon sx={{ color: "#1976D2" }} />}
          >
            Сохранить PDF
          </Button>

          <Button
            variant="outlined"
            onClick={handleSaveJSON}
            style={{ borderColor: "#1976D2", color: "#1976D2" }}
            startIcon={<DataObjectIcon sx={{ color: "#1976D2" }} />}
          >
            Сохранить JSON
          </Button>

          <Button
            variant="outlined"
            onClick={handleDownload}
            style={{ borderColor: "#1976D2", color: "#1976D2" }}
            startIcon={<SaveIcon sx={{ color: "#1976D2" }} />}
          >
            Загрузить
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default Save_Cards_Modal;
