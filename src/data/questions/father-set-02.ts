import { Question } from '@/types/quiz';

export const fatherSet02: Question[] = [
  {
    id: "g2-11",
    questionText: "本州の中で、太平洋と日本海の両方に直接面している県はどこ？",
    choices: [
      { id: "a", text: "岡山県", isCorrect: false },
      { id: "b", text: "兵庫県", isCorrect: true },
      { id: "c", text: "鳥取県", isCorrect: false },
      { id: "d", text: "滋賀県", isCorrect: false },
    ],
    explanation: "兵庫県は、北は日本海、南は瀬戸内海（太平洋側）に面している、本州で数少ない県の一つです。"
  },
  {
    id: "g2-12",
    questionText: "関東地方にある県のうち、海に全く面していない「海なし県」は、栃木・群馬とあと一つはどこ？",
    choices: [
      { id: "a", text: "埼玉県", isCorrect: true },
      { id: "b", text: "千葉県", isCorrect: false },
      { id: "c", text: "茨城県", isCorrect: false },
      { id: "d", text: "神奈川県", isCorrect: false },
    ],
    explanation: "埼玉・栃木・群馬の3県は、関東の中でも海に面していない内陸の県です。"
  },
  {
    id: "g2-13",
    questionText: "四国四県のうち、唯一「瀬戸内海」に面していない、南側に位置する県はどこ？",
    choices: [
      { id: "a", text: "徳島県", isCorrect: false },
      { id: "b", text: "愛媛県", isCorrect: false },
      { id: "c", text: "高知県", isCorrect: true },
      { id: "d", text: "香川県", isCorrect: false },
    ],
    explanation: "高知県は南側の太平洋に広く面しており、四国山地を挟んで瀬戸内海とは反対側に位置しています。"
  },
  {
    id: "g2-14",
    questionText: "九州地方の中で、一番面積が「小さい」県はどこでしょうか？",
    choices: [
      { id: "a", text: "長崎県", isCorrect: false },
      { id: "b", text: "大分県", isCorrect: false },
      { id: "c", text: "福岡県", isCorrect: false },
      { id: "d", text: "佐賀県", isCorrect: true },
    ],
    explanation: "九州で最も面積が広いのは鹿児島県ですが、最も小さいのは有明海に面した佐賀県です。"
  },
  {
    id: "g2-15",
    questionText: "隣り合う「島根県」と「鳥取県」。このうち、地図上で見て「西側（山口県寄り）」にあるのはどっち？",
    choices: [
      { id: "a", text: "鳥取県", isCorrect: false },
      { id: "b", text: "島根県", isCorrect: true },
      { id: "c", text: "山口県", isCorrect: false },
      { id: "d", text: "広島県", isCorrect: false },
    ],
    explanation: "西から「島根」「鳥取」の順に並んでいます。「ね・と（島根・鳥取）」と覚えるのが有名です。"
  },
  {
    id: "g2-16",
    questionText: "東北地方の中で、最も面積が広く、四国4県がまるごと入ってしまうほどの広さを持つ県は？",
    choices: [
      { id: "a", text: "岩手県", isCorrect: true },
      { id: "b", text: "青森県", isCorrect: false },
      { id: "c", text: "秋田県", isCorrect: false },
      { id: "d", text: "山形県", isCorrect: false },
    ],
    explanation: "岩手県は日本の都道府県で北海道に次いで2番目に広く、本州では最大の面積を誇ります。"
  },
  {
    id: "g2-17",
    questionText: "日本の標準時の基準となる「東経135度」の線が通る、明石市がある県は？",
    choices: [
      { id: "a", text: "大阪府", isCorrect: false },
      { id: "b", text: "京都府", isCorrect: false },
      { id: "c", text: "兵庫県", isCorrect: true },
      { id: "d", text: "奈良県", isCorrect: false },
    ],
    explanation: "明石市にある天文科学館の真上を、日本の時間の基準となる経線が通っています。"
  },
  {
    id: "g2-18",
    questionText: "富士山の「南側」に位置し、駿河湾に面している県はどこ？",
    choices: [
      { id: "a", text: "山梨県", isCorrect: false },
      { id: "b", text: "静岡県", isCorrect: true },
      { id: "c", text: "長野県", isCorrect: false },
      { id: "d", text: "神奈川県", isCorrect: false },
    ],
    explanation: "富士山を挟んで、北側が山梨県、南側が静岡県となります。海がある方が静岡県です。"
  },
  {
    id: "g2-19",
    questionText: "世界一長い吊り橋「明石海峡大橋」を渡って、本州（神戸市）から最初に行くことができる島はどこ？",
    choices: [
      { id: "a", text: "小豆島", isCorrect: false },
      { id: "b", text: "佐渡島", isCorrect: false },
      { id: "c", text: "隠岐諸島", isCorrect: false },
      { id: "d", text: "淡路島", isCorrect: true },
    ],
    explanation: "神戸と淡路島を結んでいるのが明石海峡大橋で、その先は大鳴門橋を通って四国へ繋がっています。"
  },
  {
    id: "g2-20",
    questionText: "次のうち、日本で唯一「3つの海（日本海・太平洋・津軽海峡）」に面している県はどこ？",
    choices: [
      { id: "a", text: "青森県", isCorrect: true },
      { id: "b", text: "北海道", isCorrect: false },
      { id: "c", text: "秋田県", isCorrect: false },
      { id: "d", text: "岩手県", isCorrect: false },
    ],
    explanation: "青森県は東に太平洋、西に日本海、そして北に津軽海峡と、3つの異なる海に囲まれています。"
  },
];