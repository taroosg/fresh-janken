import { useState } from "preact/hooks";

export default function Omikuji() {
  const getOmikuji = () => ['大吉', '中吉', '小吉', '凶', '大凶'][~~(Math.random() * 5)];

  const [omikujiResult, setOmikujiResult] = useState('...');

  return (
    <>
      <button onClick={() => setOmikujiResult(getOmikuji())}>おみくじをひく</button>
      <p>今日の運勢は{omikujiResult}です</p>
    </>
  );
}
