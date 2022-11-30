import { Handlers } from "$fresh/server.ts";

interface JankenResult {
  userHand: string;
  computerHand: string;
  winLose: string;
}

const getComputerHand = () => [0, 1, 2][~~(Math.random() * 3)];

const getWinLose = (userHand: number | undefined, computerHand: number) => [
  ['draw', 'win', 'lose'],
  ['lose', 'draw', 'win'],
  ['win', 'lose', 'draw'],
][userHand ?? 0][computerHand];

const getJankenHand = (jankenIndex: number) => ['グー', 'チョキ', 'パー'][jankenIndex];

export const handler: Handlers<JankenResult> = {
  async GET(_, ctx) {
    const result: JankenResult = {
      userHand: '待機中',
      computerHand: '待機中',
      winLose: '待機中',
    };
    return ctx.render(result);
  },
  async POST(req, ctx) {
    const formData = await req.formData();
    const userHandIndex = Number(formData.get("user_hand"));
    const userHand = getJankenHand(userHandIndex);
    const computerHandIndex = getComputerHand();
    const computerHand = getJankenHand(computerHandIndex);
    const winLose = getWinLose(userHandIndex, computerHandIndex);
    const result = { userHand, computerHand, winLose };
    return ctx.render(result);
  },
};

export default function Janken_page({ data }: { data: JankenResult }) {
  return (
    <>
      <h1>じゃんけんのページ</h1>
      <h2>じゃんけんをする</h2>
      <form action="#" method="POST">
        <select name="user_hand" id="">
          <option value="0">グー</option>
          <option value="1">チョキ</option>
          <option value="2">パー</option>
        </select>
        <button type="submit">送信</button>
      </form>
      <h2>結果</h2>
      <p>自分の手：{data.userHand}</p>
      <p>相手の手：{data.computerHand}</p>
      <p>結果：{data.winLose}</p>
    </>
  );
}
