import { Question } from '@/types/quiz';

export const fatherSet01: Question[] = [
  {
    id: "s1-1",
    questionText: "桶狭間の戦いで、織田信長が奇襲によって打ち破った『海道一の弓取り』と称された大名は誰？",
    choices: [
      { id: "a", text: "今川 義元", isCorrect: true },
      { id: "b", text: "武田 信玄", isCorrect: false },
      { id: "c", text: "上杉 謙信", isCorrect: false },
      { id: "d", text: "足利 義昭", isCorrect: false },
    ],
    explanation: "圧倒的な大軍を率いていた今川軍を、信長は豪雨の中の奇襲で破り、一躍名を上げました。"
  },
  {
    id: "s1-2",
    questionText: "豊臣秀吉が、美濃（岐阜県）を攻める拠点として短期間で築いたと言われる城の通称は？",
    choices: [
      { id: "a", text: "安土城", isCorrect: false },
      { id: "b", text: "墨俣一夜城", isCorrect: true },
      { id: "c", text: "石垣山一夜城", isCorrect: false },
      { id: "d", text: "小田原城", isCorrect: false },
    ],
    explanation: "川の上流から材木を流して運び、あっという間に城を組み立てて敵を驚かせたという伝説です。"
  },
  {
    id: "s1-3",
    questionText: "武田信玄が旗印に掲げた『孫子の兵法』の一節『風林火山』。このうち『火』が意味する行動は？",
    choices: [
      { id: "a", text: "動かざること、火の如く", isCorrect: false },
      { id: "b", text: "情熱を燃やすこと、火の如く", isCorrect: false },
      { id: "c", text: "侵略すること、火の如く", isCorrect: true },
      { id: "d", text: "敵を照らすこと、火の如く", isCorrect: false },
    ],
    explanation: "「疾きこと風の如く、徐かなること林の如く、侵掠（しんりゃく）すること火の如く、動かざること山の如し」の一節です。"
  },
  {
    id: "s1-4",
    questionText: "『独眼竜』の異名を持ち、仙台藩の初代藩主となった戦国武将は誰？",
    choices: [
      { id: "a", text: "真田 幸村", isCorrect: false },
      { id: "b", text: "毛利 元就", isCorrect: false },
      { id: "c", text: "島津 義弘", isCorrect: false },
      { id: "d", text: "伊達 政宗", isCorrect: true },
    ],
    explanation: "幼少期に右目を失明しながらも、奥州（今の東北地方）の覇者となった知略家です。"
  },
  {
    id: "s1-5",
    questionText: "徳川家康が、豊臣家を滅ぼし天下統一を盤石なものとした『大坂の陣』。この時、冬と夏の陣の間に結ばれたのは？",
    choices: [
      { id: "a", text: "和議", isCorrect: true },
      { id: "b", text: "同盟", isCorrect: false },
      { id: "c", text: "降伏", isCorrect: false },
      { id: "d", text: "隠居", isCorrect: false },
    ],
    explanation: "一度は和議を結びましたが、外堀を埋められるなどの攻防の末、再び夏の陣が勃発しました。"
  },
  {
    id: "s1-6",
    questionText: "上杉謙信が、宿敵である武田信玄の領地が塩不足で困っている時に、塩を送って助けたという逸話から生まれた言葉は？",
    choices: [
      { id: "a", text: "塩をまく", isCorrect: false },
      { id: "b", text: "敵に塩を送る", isCorrect: true },
      { id: "c", text: "手塩にかける", isCorrect: false },
      { id: "d", text: "青菜に塩", isCorrect: false },
    ],
    explanation: "争っていても相手の弱みにつけこまず、苦境を救うという武士道の美談として伝わっています。"
  },
  {
    id: "s1-7",
    questionText: "『三本の矢』の教えで、一族の団結を説いたとされる、中国地方の覇者は誰？",
    choices: [
      { id: "a", text: "尼子 経久", isCorrect: false },
      { id: "b", text: "宇喜多 直家", isCorrect: false },
      { id: "c", text: "毛利 元就", isCorrect: true },
      { id: "d", text: "大内 義隆", isCorrect: false },
    ],
    explanation: "一本の矢は折れやすいが、三本束ねれば折れないという教え。実際は書状で団結を説いたと言われています。"
  },
  {
    id: "s1-8",
    questionText: "織田信長が推進した、城下町の商業を自由にするための経済政策を何と呼ぶ？",
    choices: [
      { id: "a", text: "刀狩", isCorrect: false },
      { id: "b", text: "検地", isCorrect: false },
      { id: "c", text: "参勤交代", isCorrect: false },
      { id: "d", text: "楽市・楽座", isCorrect: true },
    ],
    explanation: "独占的な座の特権を廃止し、誰でも商売ができるようにして街を活性化させました。"
  },
  {
    id: "s1-9",
    questionText: "明智光秀が本能寺の変の後、秀吉に敗れるまでのわずかな天下を指す言葉は？",
    choices: [
      { id: "a", text: "三日天下", isCorrect: true },
      { id: "b", text: "一夜天下", isCorrect: false },
      { id: "c", text: "一期一会", isCorrect: false },
      { id: "d", text: "諸行無常", isCorrect: false },
    ],
    explanation: "山崎の戦いで秀吉に敗れるまでの約13日間という短い期間だったことからこう呼ばれます。"
  },
  {
    id: "s1-10",
    questionText: "徳川家康が幼少期、今川氏や織田氏のもとで過ごした、忍耐を強いられた時期の身分は？",
    choices: [
      { id: "a", text: "家老", isCorrect: false },
      { id: "b", text: "人質", isCorrect: true },
      { id: "c", text: "隠居", isCorrect: false },
      { id: "d", text: "軍師", isCorrect: false },
    ],
    explanation: "この幼少期の苦労が、後の「鳴くまで待とう」という家康の忍耐強い性格を形成したと言われています。"
  },
];