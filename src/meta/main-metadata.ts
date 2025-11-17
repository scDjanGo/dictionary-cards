
import { Metadata } from "next";

export const Main_Metadata: Metadata = {
  title: "Easy English — Учите английский легко и с удовольствием",
  description:
    "Easy English — это платформа для изучения английского языка с интерактивными упражнениями, карточками слов, тестами и игровыми методами. Освойте английский быстро, интересно и эффективно!",
  keywords: [
    "английский язык",
    "изучение английского",
    "карточки слов",
    "учить английский онлайн",
    "английский для начинающих",
    "обучение английскому",
    "онлайн курсы английского",
    "лексика и грамматика",
  ],
  authors: [{ name: "Easy English Team" }],
  openGraph: {
    title: "Easy English — Учите английский легко и с удовольствием",
    description:
      "Изучайте английский язык с помощью интерактивных инструментов Easy English. Карточки, упражнения, тесты и игры — всё, чтобы выучить английский быстро и весело!",
    url: "https://easyenglish.com",
    siteName: "Easy English",
    images: [
      {
        url: "https://easyenglish.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Easy English — Изучай английский с удовольствием",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Easy English — Учите английский легко",
    description:
      "Интерактивная платформа для изучения английского языка. Практикуйтесь каждый день с карточками, тестами и играми!",
    images: ["https://easyenglish.com/og-image.jpg"],
  },
};
