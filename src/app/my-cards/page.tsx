import My_Cards_Component from "@/pages/my-cards/My_Cards_Component";
import My_Categories_Accordion from "@/pages/my-cards/My_Categories_Accordion";

export default function page() {
  return (
    <div>
      <My_Categories_Accordion />

      <My_Cards_Component />
    </div>
  );
}
