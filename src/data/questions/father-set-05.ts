import { Question } from '@/types/quiz';

export const fatherSet05: Question[] = [
  {
    id: "s5-41",
    questionText: "「世界の王」こと王貞治選手が生み出した、片足で立って打つ独特な打法は何？",
    choices: [
      { id: "a", text: "ひしゃく投げ", isCorrect: false },
      { id: "b", text: "一本足打法", isCorrect: true },
      { id: "c", text: "背面跳び", isCorrect: false },
      { id: "d", text: "千手観音打ち", isCorrect: false },
    ],
    explanation: "一本足でバランスをとるこの打法で、世界記録となる通算868本の本塁打を放ちました。"
  },
  {
    id: "s5-42",
    questionText: "1964年の東京五輪で金メダルを獲得し、「東洋の魔女」と呼ばれた女子競技は何？",
    choices: [
      { id: "a", text: "バレーボール", isCorrect: true },
      { id: "b", text: "卓球", isCorrect: false },
      { id: "c", text: "水泳", isCorrect: false },
      { id: "d", text: "体操", isCorrect: false },
    ],
    explanation: "驚異的なレシーブ力を武器にソ連を破り、日本中に空前のバレーボールブームを巻き起こしました。"
  },
  {
    id: "s5-43",
    questionText: "プロ野球界で「ミスター・ジャイアンツ」の愛称で親しまれ、背番号3が永久欠番の選手は？",
    choices: [
      { id: "a", text: "金田 正一", isCorrect: false },
      { id: "b", text: "野村 克也", isCorrect: false },
      { id: "c", text: "長嶋 茂雄", isCorrect: true },
      { id: "d", text: "張本 勲", isCorrect: false },
    ],
    explanation: "勝負強い打撃と華やかな守備で、戦後の日本を明るく照らした国民的スターです。"
  },
  {
    id: "s5-44",
    questionText: "大相撲の本場所で、力士が1場所の間に戦う日数は現在何日間？",
    choices: [
      { id: "a", text: "10日間", isCorrect: false },
      { id: "b", text: "7日間", isCorrect: false },
      { id: "c", text: "30日間", isCorrect: false },
      { id: "d", text: "15日間", isCorrect: true },
    ],
    explanation: "昔は10日間でしたが、昭和24年（1949年）から現在の15日制（一月場所）になりました。"
  },
  {
    id: "s5-45",
    questionText: "1964年の東京オリンピックの開会式が行われた、記念すべき月日は？",
    choices: [
      { id: "a", text: "10月10日", isCorrect: true },
      { id: "b", text: "8月15日", isCorrect: false },
      { id: "c", text: "1月1日", isCorrect: false },
      { id: "d", text: "4月1日", isCorrect: false },
    ],
    explanation: "晴天の確率が高いとして選ばれたこの日は、後に「体育の日（現在のスポーツの日）」となりました。"
  },
  {
    id: "s5-46",
    questionText: "野球で、バッターが誰もランナーがいない状態でホームランを打った場合、点数は？",
    choices: [
      { id: "a", text: "2点", isCorrect: false },
      { id: "b", text: "1点", isCorrect: true },
      { id: "c", text: "3点", isCorrect: false },
      { id: "d", text: "4点", isCorrect: false },
    ],
    explanation: "打った本人だけがホームに帰るため1点。これを「ソロホームラン」と呼びます。"
  },
  {
    id: "s5-47",
    questionText: "高校野球の聖地として知られ、兵庫県西宮市にある球場の名前は何？",
    choices: [
      { id: "a", text: "後楽園球場", isCorrect: false },
      { id: "b", text: "神宮球場", isCorrect: false },
      { id: "c", text: "平和台球場", isCorrect: false },
      { id: "d", text: "阪神甲子園球場", isCorrect: true },
    ],
    explanation: "大正13年（1924年）に完成した歴史ある球場で、春と夏の高校野球全国大会が行われます。"
  },
  {
    id: "s5-48",
    questionText: "ゴルフにおいて、ティーショット（1打目）が直接カップに入るプレーを何と呼ぶ？",
    choices: [
      { id: "a", text: "ホールインワン", isCorrect: true },
      { id: "b", text: "ホームラン", isCorrect: false },
      { id: "c", text: "ストライク", isCorrect: false },
      { id: "d", text: "満貫", isCorrect: false },
    ],
    explanation: "プロでも一生に一度あるかないかの幸運な一打。入った後は記念品を贈る習慣などもあります。"
  },
  {
    id: "s5-49",
    questionText: "マラソンの走行距離「42.195キロメートル」。この端数がついた理由に関係している国は？",
    choices: [
      { id: "a", text: "アメリカ", isCorrect: false },
      { id: "b", text: "日本", isCorrect: false },
      { id: "c", text: "イギリス", isCorrect: true },
      { id: "d", text: "エジプト", isCorrect: false },
    ],
    explanation: "1908年のロンドン大会で、王族がバルコニーから見やすいようスタート地点をずらしたのがきっかけです。"
  },
  {
    id: "s5-50",
    questionText: "水泳のメドレー競技。背泳ぎ、平泳ぎ、バタフライ、あと一つの泳ぎ方は何？",
    choices: [
      { id: "a", text: "犬かき", isCorrect: false },
      { id: "b", text: "潜水", isCorrect: false },
      { id: "c", text: "自由形", isCorrect: true },
      { id: "d", text: "立ち泳ぎ", isCorrect: false },
    ],
    explanation: "個人メドレーでは「バタフライ→背→平→自由」の順で、4つの泳法を一人で泳ぎます。"
  },
];