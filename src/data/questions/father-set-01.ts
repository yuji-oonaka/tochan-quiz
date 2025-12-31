import { Question } from '@/types/quiz';

export const fatherSet01: Question[] = [
  {
    id: "s1-1",
    questionText: "桶狭間の戦いで、織田信長が奇襲によって打ち破った『海道一の弓取り』と称された大名は誰？",
    questionSpeech: "おけはざま の たたかい で、おだ のぶなが が きしゅう によって うちやぶった、かいどう いち の ゆみとり と しょうされた だいみょう は だれ？",
    choices: [
      { id: "a", text: "今川 義元", speech: "いまがわ よしもと", isCorrect: true },
      { id: "b", text: "武田 信玄", speech: "たけだ しんげん", isCorrect: false },
      { id: "c", text: "上杉 謙信", speech: "うえすぎ けんしん", isCorrect: false },
      { id: "d", text: "足利 義昭", speech: "あしかが よしあき", isCorrect: false },
    ],
    explanation: "圧倒的な大軍を率いていた今川軍を、信長は豪雨の中の奇襲で破り、一躍名を上げました。",
    explanationSpeech: "あっとうてきな たいぐん を ひきいていた いまがわぐん を、のぶなが は ごうう の なか の きしゅう で やぶり、いちやく な を あげました。"
  },
  {
    id: "s1-2",
    questionText: "豊臣秀吉が、美濃（岐阜県）を攻める拠点として短期間で築いたと言われる城の通称は？",
    questionSpeech: "とよとみ ひでよし が、みの。ぎふけん を せめる きょてん として、たんきかん で きずいた と いわれる しろ の つうしょう は？",
    choices: [
      { id: "a", text: "安土城", speech: "あづちじょう", isCorrect: false },
      { id: "b", text: "墨俣一夜城", speech: "すのまた いちやじょう", isCorrect: true },
      { id: "c", text: "石垣山一夜城", speech: "いしがきやま いちやじょう", isCorrect: false },
      { id: "d", text: "小田原城", speech: "おだわらじょう", isCorrect: false },
    ],
    explanation: "川の上流から材木を流して運び、あっという間に城を組み立てて敵を驚かせたという伝説です。",
    explanationSpeech: "かわ の じょうりゅう から ざいもく を ながして はこび、あっというま に しろ を くみたてて、てき を おどろかせた という でんせつ です。"
  },
  {
    id: "s1-3",
    questionText: "武田信玄が旗印に掲げた『孫子の兵法』の一節『風林火山』。このうち『火』が意味する行動は？",
    questionSpeech: "たけだ しんげん が はたじるし に かかげた そんし の へいほう の いっせつ ふうりんかざん。このうち ひ が いみ する こうどう は？",
    choices: [
      { id: "a", text: "動かざること、火の如く", speech: "うごかざること、ひ の ごとく", isCorrect: false },
      { id: "b", text: "情熱を燃やすこと、火の如く", speech: "じょうねつ を もやす こと、ひ の ごとく", isCorrect: false },
      { id: "c", text: "侵略すること、火の如く", speech: "しんりゃく すること、ひ の ごとく", isCorrect: true },
      { id: "d", text: "敵を照らすこと、火の如く", speech: "てき を てらす こと、ひ の ごとく", isCorrect: false },
    ],
    explanation: "「疾きこと風の如く、徐かなること林の如く、侵掠すること火の如く、動かざること山の如し」の一節です。",
    explanationSpeech: "はやきこと かぜ の ごとく、しずかなること はやし の ごとく、しんりゃく すること ひ の ごとく、うごかざること やま の ごとし、の いっせつ です。"
  },
  {
    id: "s1-4",
    questionText: "『独眼竜』の異名を持ち、仙台藩の初代藩主となった戦国武将は誰？",
    questionSpeech: "どくがんりゅう の いみょう を もち、せんだいはん の しょだい はんしゅ と なった せんごく ぶしょう は だれ？",
    choices: [
      { id: "a", text: "真田 幸村", speech: "さなだ ゆきむら", isCorrect: false },
      { id: "b", text: "毛利 元就", speech: "もうり もとなり", isCorrect: false },
      { id: "c", text: "島津 義弘", speech: "しまづ よしひろ", isCorrect: false },
      { id: "d", text: "伊達 政宗", speech: "だて まさむね", isCorrect: true },
    ],
    explanation: "幼少期に右目を失明しながらも、奥州（今の東北地方）の覇者となった知略家です。",
    explanationSpeech: "ようしょうき に みぎめ を しつめい しながらも、おうしゅう。いま の とうほく ちほう の はしゃ と なった ちりゃくか です。"
  },
  {
    id: "s1-5",
    questionText: "徳川家康が、豊臣家を滅ぼし天下統一を盤石なものとした『大坂の陣』。この時、冬と夏の陣の間に結ばれたのは？",
    questionSpeech: "とくがわ いえやす が、とよとみけ を ほろぼし てんか とういつ を ばんじゃくな もの と した おおさか の じん。このとき、ふゆ と なつ の じん の あいだ に むすばれた の は？",
    choices: [
      { id: "a", text: "和議", speech: "わぎ", isCorrect: true },
      { id: "b", text: "同盟", speech: "どうめい", isCorrect: false },
      { id: "c", text: "降伏", speech: "こうふく", isCorrect: false },
      { id: "d", text: "隠居", speech: "いんきょ", isCorrect: false },
    ],
    explanation: "一度は和議を結びましたが、外堀を埋められるなどの攻防の末、再び夏の陣が勃発しました。",
    explanationSpeech: "いちど は わぎ を むすびました が、そとぼり を うめられる など の こうぼう の すえ、ふたたび なつ の じん が ぼっぱつ しました。"
  },
  {
    id: "s1-6",
    questionText: "上杉謙信が、宿敵である武田信玄の領地が塩不足で困っている時に、塩を送って助けたという逸話から生まれた言葉は？",
    questionSpeech: "うえすぎ けんしん が、しゅくてき である たけだ しんげん の りょうち が しおぶそく で こまっている とき に、しお を おくって たすけた という いつわ から うまれた ことば は？",
    choices: [
      { id: "a", text: "塩をまく", speech: "しお を まく", isCorrect: false },
      { id: "b", text: "敵に塩を送る", speech: "てき に しお を おくる", isCorrect: true },
      { id: "c", text: "手塩にかける", speech: "てしお に かける", isCorrect: false },
      { id: "d", text: "青菜に塩", speech: "あおな に しお", isCorrect: false },
    ],
    explanation: "争っていても相手の弱みにつけこまず、苦境を救うという武士道の美談として伝わっています。",
    explanationSpeech: "あらそって いても あいて の よわみ に つけこまず、くきょう を すくう という ぶしどう の びだん として つたわっています。"
  },
  {
    id: "s1-7",
    questionText: "『三本の矢』の教えで、一族の団結を説いたとされる、中国地方の覇者は誰？",
    questionSpeech: "さんぼん の や の おしえ で、いちぞく の だんけつ を といた と される、ちゅうごく ちほう の はしゃ は だれ？",
    choices: [
      { id: "a", text: "尼子 経久", speech: "あまご つねひさ", isCorrect: false },
      { id: "b", text: "宇喜多 直家", speech: "うきた なおいえ", isCorrect: false },
      { id: "c", text: "毛利 元就", speech: "もうり もとなり", isCorrect: true },
      { id: "d", text: "大内 義隆", speech: "おおうち よしたか", isCorrect: false },
    ],
    explanation: "一本の矢は折れやすいが、三本束ねれば折れないという教え。実際は書状で団結を説いたと言われています。",
    explanationSpeech: "いっぽん の や は おれやすい が、さんぼん たばねれば おれない という おしえ。じっさい は しょじょう で だんけつ を といた と いわれています。"
  },
  {
    id: "s1-8",
    questionText: "織田信長が推進した、城下町の商業を自由にするための経済政策を何と呼ぶ？",
    questionSpeech: "おだ のぶなが が すいしん した、じょうかまち の しょうぎょう を じゆう に する ため の けいざい せいさく を なんと よぶ？",
    choices: [
      { id: "a", text: "刀狩", speech: "かたながり", isCorrect: false },
      { id: "b", text: "検地", speech: "けんち", isCorrect: false },
      { id: "c", text: "参勤交代", speech: "さんきん こうたい", isCorrect: false },
      { id: "d", text: "楽市・楽座", speech: "らくいち らくざ", isCorrect: true },
    ],
    explanation: "独占的な座の特権を廃止し、誰でも商売ができるようにして街を活性化させました。",
    explanationSpeech: "どくぜんてきな ざ の とっけん を はいし し、だれでも しょうばい が できる ように して、まち を かっせいか させました。"
  },
  {
    id: "s1-9",
    questionText: "明智光秀が本能寺の変の後、秀吉に敗れるまでのわずかな天下を指す言葉は？",
    questionSpeech: "あけち みつひで が ほんのうじ の へん の あと、ひでよし に やぶれる まで の わずかな てんか を さす ことば は？",
    choices: [
      { id: "a", text: "三日天下", speech: "みっか てんか", isCorrect: true },
      { id: "b", text: "一夜天下", speech: "いちや てんか", isCorrect: false },
      { id: "c", text: "一期一会", speech: "いちご いちえ", isCorrect: false },
      { id: "d", text: "諸行無常", speech: "しょぎょう むじょう", isCorrect: false },
    ],
    explanation: "山崎の戦いで秀吉に敗れるまでの約13日間という短い期間だったことからこう呼ばれます。",
    explanationSpeech: "やまざき の たたかい で ひでよし に やぶれる まで の、やく じゅうさんにち かん という みじかい きかん だった こと から、こう よばれます。"
  },
  {
    id: "s1-10",
    questionText: "徳川家康が幼少期、今川氏や織田氏のもとで過ごした、忍耐を強いられた時期の身分は？",
    questionSpeech: "とくがわ いえやす が ようしょうき、いまがわし や おだし の もと で すごした、にんたい を しいいられた じき の みぶん は？",
    choices: [
      { id: "a", text: "家老", speech: "かろう", isCorrect: false },
      { id: "b", text: "人質", speech: "ひとじち", isCorrect: true },
      { id: "c", text: "隠居", speech: "いんきょ", isCorrect: false },
      { id: "d", text: "軍師", speech: "ぐんし", isCorrect: false },
    ],
    explanation: "この幼少期の苦労が、後の「鳴くまで待とう」という家康の忍耐強い性格を形成したと言われています。",
    explanationSpeech: "この ようしょうき の くろう が、のちの、なく まで まとう という いえやす の にんたいづよい せいかく を けいせい した と いわれています。"
  },
];