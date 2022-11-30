import Omikuji from "../islands/omikuji.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Omikuji_page() {

  return (
    <>
      <Head>
        <title>Omikuji</title>
      </Head>
      <h1>おみくじのページ</h1>
      <Omikuji />
    </>
  );
}
