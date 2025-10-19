import Not_Found_Main from "@/pages-components/not-found-page/Not_Found_Main";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>Страница не найдена</title>
      </Head>
      <Not_Found_Main />
    </>
  );
}
