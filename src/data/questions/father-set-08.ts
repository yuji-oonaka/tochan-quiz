import { Question } from '@/types/quiz';

export const fatherSet08: Question[] = [
  {
    id: "g8-71",
    questionText: "日本で一番「長い」川は信濃川（しなのがわ）ですが、では、日本で一番「流域面積（雨が集まる範囲）」が広い川はどれ？",
    questionSpeech: "にほん で いちばん ながい かわ は、しなのがわ ですが、では、にほん で いちばん、りゅういき めんせき。あめ が あつまる はんい、が ひろい かわ は どれ？",
    choices: [
      { id: "a", text: "四万十川（しまんとがわ）", speech: "しまんとがわ", isCorrect: false },
      { id: "b", text: "利根川（とねがわ）", speech: "とねがわ", isCorrect: true },
      { id: "c", text: "石狩川（いしかりがわ）", speech: "いしかりがわ", isCorrect: false },
      { id: "d", text: "最上川（もがみがわ）", speech: "もがみがわ", isCorrect: false },
    ],
    explanation: "利根川は「坂東太郎」の異名を持ち、関東平野を潤す日本最大の流域面積を誇る河川です。",
    explanationSpeech: "とねがわ は、ばんどう たろう。の いみょう を もち、かんとう へいや を うるおす、にほん さいだい の りゅういき めんせき を ほこる かせん です。"
  },
  {
    id: "g8-72",
    questionText: "日本にある47都道府県のうち、隣り合っている（境界線を接している）県が「8つ」と最も多い県はどこでしょうか？",
    questionSpeech: "にほん に ある よんじゅうなな とどうふけん の うち、となりあっている。きょうかいせん を せしている、けん が やっつ と、もっとも おおい けん は どこ でしょうか？",
    choices: [
      { id: "a", text: "岐阜県", speech: "ぎふけん", isCorrect: false },
      { id: "b", text: "埼玉県", speech: "さいたまけん", isCorrect: false },
      { id: "c", text: "京都府", speech: "きょうとふ", isCorrect: false },
      { id: "d", text: "長野県", speech: "ながのけん", isCorrect: true },
    ],
    explanation: "信州（長野県）は、群馬・山梨・静岡・愛知・岐阜・富山・新潟・埼玉の8県に囲まれています。",
    explanationSpeech: "しんしゅう。ながのけん は、ぐんま、やまなし、しずおか、あいち、ぎふ、とやま、にいがた、さいたま、の はっけん に かこまれています。"
  },
  {
    id: "g8-73",
    questionText: "富士山は日本で最も高い山ですが、では「日本で二番目」に高い山（標高3,193m）は、南アルプスにある何という山？",
    questionSpeech: "ふじさん は にほん で もっとも たかい やま ですが、では、にほん で にばんめ に たかい やま。ひょうこう さんぜん ひゃく きゅうじゅう さん めーとる、は、みなみ あるぷす に ある なんと いう やま？",
    choices: [
      { id: "a", text: "北岳（きただけ）", speech: "きただけ", isCorrect: true },
      { id: "b", text: "槍ヶ岳（やりがたけ）", speech: "やりがたけ", isCorrect: false },
      { id: "c", text: "奥穂高岳（おくほたかだけ）", speech: "おくほたかだけ", isCorrect: false },
      { id: "d", text: "阿蘇山（あそさん）", speech: "あそさん", isCorrect: false },
    ],
    explanation: "山梨県にある北岳は、富士山に次ぐ日本第2の高峰として登山家にも人気の山です。",
    explanationSpeech: "やまなしけん に ある きただけ は、ふじさん に つぐ にほん だいに の こうほう として、とざんか にも にんき の やま です。"
  },
  {
    id: "g8-74",
    questionText: "日本で唯一、県名に「山」という漢字が入っているのに、海に全く面していない（内陸にある）県はどこでしょうか？",
    questionSpeech: "にほん で ゆいいつ、けんめい に やま と いう かんじ が はいっている のに、うみ に まったく めんしていない、ないりく に ある けん は どこ でしょうか？",
    choices: [
      { id: "a", text: "和歌山県", speech: "わかやまけん", isCorrect: false },
      { id: "b", text: "山口県", speech: "やまぐちけん", isCorrect: false },
      { id: "c", text: "山形県", speech: "やまがたけん", isCorrect: false },
      { id: "d", text: "山梨県", speech: "やまなしけん", isCorrect: true },
    ],
    explanation: "山梨は四方を高い山に囲まれた「海なし県」ですが、名産のアワビの煮貝（煮貝）など独自の食文化があります。",
    explanationSpeech: "やまなし は しほう を たかい やま に かこまれた、うみなし けん ですが、めいさん の あわび の にがい。など どくじ の しょくぶんか が あります。"
  },
  {
    id: "g8-75",
    questionText: "北海道を除いた日本本土の中で、島を除いた「海岸線の長さ」が最も長いと言われる、島々が多い県はどこ？",
    questionSpeech: "ほっかいどう を のぞいた にほん ほんど の なか で、しま を のぞいた、かいがんせん の ながさ、が もっとも ながい と いわれる、しまじま が おおい けん は どこ？",
    choices: [
      { id: "a", text: "長崎県", speech: "ながさきけん", isCorrect: true },
      { id: "b", text: "千葉県", speech: "ちばけん", isCorrect: false },
      { id: "c", text: "高知県", speech: "こうちけん", isCorrect: false },
      { id: "d", text: "岩手県", speech: "いわてけん", isCorrect: false },
    ],
    explanation: "長崎県は五島列島や九十九島など、非常に多くの島や入り組んだリアス海岸を持つため、海岸線が極めて長くなっています。",
    explanationSpeech: "ながさきけん は、ごとう れっとう や、くじゅうくしま など、ひじょう に おおい しま や、いりくんだ りあす かいがん を もつ ため、かいがんせん が きわめて ながく なっています。"
  },
  {
    id: "g8-76",
    questionText: "本州・四国・九州・北海道の主要な4つの島を除いて、日本で「一番面積が大きい島」はどこでしょうか？",
    questionSpeech: "ほんしゅう、しこく、きゅうしゅう、ほっかいどう の しゅような よっつ の しま を のぞいて、にほん で いちばん めんせき が おおきい しま は どこ でしょうか？",
    choices: [
      { id: "a", text: "淡路島（あわじしま）", speech: "あわじしま", isCorrect: false },
      { id: "b", text: "屋久島（やくしま）", speech: "やくしま", isCorrect: false },
      { id: "c", text: "佐渡島（さどがしま）", speech: "さどがしま", isCorrect: true },
      { id: "d", text: "隠岐諸島（おきしょとう）", speech: "おきしょとう", isCorrect: false },
    ],
    explanation: "新潟県の佐渡島は、東京23区の約1.5倍もの面積があり、かつては金山でも栄えました。",
    explanationSpeech: "にいがたけん の さどがしま は、とうきょう にじゅうさんく の やく いってんごばい もの めんせき が あり、かつて は きんざん でも さかえました。"
  },
  {
    id: "g8-77",
    questionText: "東北地方にある日本最大の火山湖「十和田湖（とわだこ）」。この湖の真ん中を県境が通っている、2つの県はどこ？",
    questionSpeech: "とうほく ちほう に ある にほん さいだい の かざんこ、とわだこ。この みずうみ の まんなか を けんきょう が とおっている、ふっつ の けん は どこ？",
    choices: [
      { id: "a", text: "山形県と秋田県", speech: "やまがたけん と あきたけん", isCorrect: false },
      { id: "b", text: "岩手県と宮城県", speech: "いわてけん と みやぎけん", isCorrect: false },
      { id: "c", text: "福島県と山形県", speech: "ふくしまけん と やまがたけん", isCorrect: false },
      { id: "d", text: "青森県と秋田県", speech: "あおもりけん と あきたけん", isCorrect: true },
    ],
    explanation: "青森と秋田の県境に位置しており、長年境界が未確定でしたが、2008年にようやく正式に決まりました。",
    explanationSpeech: "あおもり と あきた の けんきょう に いち しており、ながねん きょうかい が みかくてい でした が、にせんはちねん に ようやく せいしき に きまりました。"
  },
  {
    id: "g8-78",
    questionText: "日本全国で唯一、都道府県名に「岡」という漢字が使われていない「地方」は、次のうちどれでしょうか？",
    questionSpeech: "にほん ぜんこく で ゆいいつ、とどうふけん めい に、おか。と いう かんじ が つかわれていない ちほう は、つぎ の うち どれ でしょうか？",
    choices: [
      { id: "a", text: "四国地方", speech: "しこく ちほう", isCorrect: true },
      { id: "b", text: "九州地方", speech: "きゅうしゅう ちほう", isCorrect: false },
      { id: "c", text: "中部地方", speech: "ちゅうぶ ちほう", isCorrect: false },
      { id: "d", text: "近畿地方", speech: "きんき ちほう", isCorrect: false },
    ],
    explanation: "静岡、岡山、福岡など、名前に「岡」がつく県は多いですが、四国4県には一つも含まれていません。",
    explanationSpeech: "しずおか、おかやま、ふくおか など、なまえ に おか が つく けん は おおい です が、しこく よんけん には ひとつ も ふくまれて いません。"
  },
  {
    id: "g8-79",
    questionText: "日本で最も高い場所にある駅「野辺山（のべやま）駅」がある、八ヶ岳（やつがたけ）山麓の高原がある県はどこ？",
    questionSpeech: "にほん で もっとも たかい ばしょ に ある えき、のべやまえき が ある、やつがたけ さんろく の こうげん が ある けん は どこ？",
    choices: [
      { id: "a", text: "群馬県", speech: "ぐんまけん", isCorrect: false },
      { id: "b", text: "長野県", speech: "ながのけん", isCorrect: true },
      { id: "c", text: "岐阜県", speech: "ぎふけん", isCorrect: false },
      { id: "d", text: "山梨県", speech: "やまなしけん", isCorrect: false },
    ],
    explanation: "JR小海線の野辺山駅は標高1,345mに位置し、JR線の中で最も高い場所にある駅として有名です。",
    explanationSpeech: "じぇーあーる こうみせん の のべやまえき は、ひょうこう せんさんびゃく よんじゅうご めーとる に いち し、じぇーあーる せん の なか で もっとも たかい ばしょ に ある えき として ゆうめい です。"
  },
  {
    id: "g8-80",
    questionText: "日本の最西端に位置し、天気が良ければ台湾が見えることもある「与那国島（よなぐにじま）」は何県？",
    questionSpeech: "にほん の さいせいたん に いち し、てんき が よければ たいわん が みえる こと も ある、よなぐにじま は なにけん？",
    choices: [
      { id: "a", text: "沖縄県", speech: "おきなわけん", isCorrect: true },
      { id: "b", text: "鹿児島県", speech: "かごしまけん", isCorrect: false },
      { id: "c", text: "長崎県", speech: "ながさきけん", isCorrect: false },
      { id: "d", text: "東京都", speech: "とうきょうと", isCorrect: false },
    ],
    explanation: "日本の西の果て、沖縄県八重山諸島にあり、美しい海と力強い自然が残る島です。",
    explanationSpeech: "にほん の にし の はて、おきなわけん やえやま しょとう に あり、うつくしい うみ と ちからづよい しぜん が のこる しま です。"
  },
];