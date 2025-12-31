import { Question } from '@/types/quiz';

export const fatherSet08: Question[] = [
  {
    id: "g8-71",
    questionText: "日本で一番「長い」川は信濃川（しなのがわ）ですが、では、日本で一番「流域面積（雨が集まる範囲）」が広い川はどれ？",
    choices: [
      { id: "a", text: "四万十川（しまんとがわ）", isCorrect: false },
      { id: "b", text: "利根川（とねがわ）", isCorrect: true }, // 正解：b
      { id: "c", text: "石狩川（いしかりがわ）", isCorrect: false },
      { id: "d", text: "最上川（もがみがわ）", isCorrect: false },
    ],
    explanation: "利根川は「坂東太郎」の異名を持ち、関東平野を潤す日本最大の流域面積を誇る河川です。"
  },
  {
    id: "g8-72",
    questionText: "日本にある47都道府県のうち、隣り合っている（境界線を接している）県が「8つ」と最も多い県はどこでしょうか？",
    choices: [
      { id: "a", text: "岐阜県", isCorrect: false },
      { id: "b", text: "埼玉県", isCorrect: false },
      { id: "c", text: "京都府", isCorrect: false },
      { id: "d", text: "長野県", isCorrect: true }, // 正解：d
    ],
    explanation: "信州（長野県）は、群馬・山梨・静岡・愛知・岐阜・富山・新潟・埼玉の8県に囲まれています。"
  },
  {
    id: "g8-73",
    questionText: "富士山は日本で最も高い山ですが、では「日本で二番目」に高い山（標高3,193m）は、南アルプスにある何という山？",
    choices: [
      { id: "a", text: "北岳（きただけ）", isCorrect: true }, // 正解：a
      { id: "b", text: "槍ヶ岳（やりがたけ）", isCorrect: false },
      { id: "c", text: "奥穂高岳（おくほたかだけ）", isCorrect: false },
      { id: "d", text: "阿蘇山（あそさん）", isCorrect: false },
    ],
    explanation: "山梨県にある北岳は、富士山に次ぐ日本第2の高峰として登山家にも人気の山です。"
  },
  {
    id: "g8-74",
    questionText: "日本で唯一、県名に「山」という漢字が入っているのに、海に全く面していない（内陸にある）県はどこでしょうか？",
    choices: [
      { id: "a", text: "和歌山県", isCorrect: false },
      { id: "b", text: "山口県", isCorrect: false },
      { id: "c", text: "山形県", isCorrect: false },
      { id: "d", text: "山梨県", isCorrect: true }, // 正解：d
    ],
    explanation: "山梨は四方を高い山に囲まれた「海なし県」ですが、名産のアワビの煮貝（煮貝）など独自の食文化があります。"
  },
  {
    id: "g8-75",
    questionText: "北海道を除いた日本本土の中で、島を除いた「海岸線の長さ」が最も長いと言われる、島々が多い県はどこ？",
    choices: [
      { id: "a", text: "長崎県", isCorrect: true }, // 正解：a
      { id: "b", text: "千葉県", isCorrect: false },
      { id: "c", text: "高知県", isCorrect: false },
      { id: "d", text: "岩手県", isCorrect: false },
    ],
    explanation: "長崎県は五島列島や九十九島など、非常に多くの島や入り組んだリアス海岸を持つため、海岸線が極めて長くなっています。"
  },
  {
    id: "g8-76",
    questionText: "本州・四国・九州・北海道の主要な4つの島を除いて、日本で「一番面積が大きい島」はどこでしょうか？",
    choices: [
      { id: "a", text: "淡路島（あわじしま）", isCorrect: false },
      { id: "b", text: "屋久島（やくしま）", isCorrect: false },
      { id: "c", text: "佐渡島（さどがしま）", isCorrect: true }, // 正解：c
      { id: "d", text: "隠岐諸島（おきしょとう）", isCorrect: false },
    ],
    explanation: "新潟県の佐渡島は、東京23区の約1.5倍もの面積があり、かつては金山でも栄えました。"
  },
  {
    id: "g8-77",
    questionText: "東北地方にある日本最大の火山湖「十和田湖（とわだこ）」。この湖の真ん中を県境が通っている、2つの県はどこ？",
    choices: [
      { id: "a", text: "山形県と秋田県", isCorrect: false },
      { id: "b", text: "岩手県と宮城県", isCorrect: false },
      { id: "c", text: "福島県と山形県", isCorrect: false },
      { id: "d", text: "青森県と秋田県", isCorrect: true }, // 正解：d
    ],
    explanation: "青森と秋田の県境に位置しており、長年境界が未確定でしたが、2008年にようやく正式に決まりました。"
  },
  {
    id: "g8-78",
    questionText: "日本全国で唯一、都道府県名に「岡」という漢字が使われていない「地方」は、次のうちどれでしょうか？",
    choices: [
      { id: "a", text: "四国地方", isCorrect: true }, // 正解：a（愛媛・香川・徳島・高知）
      { id: "b", text: "九州地方", isCorrect: false }, // 福岡
      { id: "c", text: "中部地方", isCorrect: false }, // 静岡
      { id: "d", text: "近畿地方", isCorrect: false }, // 和歌山
    ],
    explanation: "静岡、岡山、福岡など、名前に「岡」がつく県は多いですが、四国4県には一つも含まれていません。"
  },
  {
    id: "g8-79",
    questionText: "日本で最も高い場所にある駅「野辺山（のべやま）駅」がある、八ヶ岳（やつがたけ）山麓の高原がある県はどこ？",
    choices: [
      { id: "a", text: "群馬県", isCorrect: false },
      { id: "b", text: "長野県", isCorrect: true }, // 正解：b
      { id: "c", text: "岐阜県", isCorrect: false },
      { id: "d", text: "山梨県", isCorrect: false },
    ],
    explanation: "JR小海線の野辺山駅は標高1,345mに位置し、JR線の中で最も高い場所にある駅として有名です。"
  },
  {
    id: "g8-80",
    questionText: "日本の最西端に位置し、天気が良ければ台湾が見えることもある「与那国島（よなぐにじま）」は何県？",
    choices: [
      { id: "a", text: "沖縄県", isCorrect: true }, // 正解：a
      { id: "b", text: "鹿児島県", isCorrect: false },
      { id: "c", text: "長崎県", isCorrect: false },
      { id: "d", text: "東京都", isCorrect: false },
    ],
    explanation: "日本の西の果て、沖縄県八重山諸島にあり、美しい海と力強い自然が残る島です。"
  },
];