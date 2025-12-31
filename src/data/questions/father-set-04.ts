import { Question } from '@/types/quiz';

export const fatherSet04: Question[] = [
  {
    id: "f4-31",
    questionText: "香川県が「うどん県」なのは、ある3つの材料が揃っていたからです。塩、醤油、あと一つは何？",
    questionSpeech: "かがわけん が うどんけん なのは、ある みっつ の ざいりょう が そろっていた から です。しお、しょうゆ、あと ひとつ は なに？",
    choices: [
      { id: "a", text: "小麦", speech: "こむぎ", isCorrect: true },
      { id: "b", text: "蕎麦", speech: "そば", isCorrect: false },
      { id: "c", text: "お米", speech: "おこめ", isCorrect: false },
      { id: "d", text: "トウモロコシ", speech: "とうもろこし", isCorrect: false },
    ],
    explanation: "雨が少なく米作りに向かない香川では、小麦の栽培が盛んでした。そこに瀬戸内の塩と醤油が加わりました。",
    explanationSpeech: "あめ が すくなく、こめづくり に むかない かがわ では、こむぎ の さいばい が さかん でした。そこに せとうち の しお と しょうゆ が くわわりました。"
  },
  {
    id: "f4-32",
    questionText: "静岡県の牧之原が茶産地になったのは、幕末にある人々が茶園を開拓したからです。誰？",
    questionSpeech: "しずおかけん の まきのはら が ちゃさんち に なった のは、ばくまつ に ある ひとびと が ちゃえん を かいたく した から です。だれ？",
    choices: [
      { id: "a", text: "近江の商人たち", speech: "おうみ の しょうにん たち", isCorrect: false },
      { id: "b", text: "徳川家に仕えた武士たち", speech: "とくがわけ に つかえた ぶし たち", isCorrect: true },
      { id: "c", text: "海外からの宣教師", speech: "かいがい から の せんきょうし", isCorrect: false },
      { id: "d", text: "地元の漁師たち", speech: "じもと の りょうし たち", isCorrect: false },
    ],
    explanation: "明治維新で職を失った徳川の旧臣たちが、刀を鍬に持ち替えて荒野を切り拓き、大茶園を築き上げました。",
    explanationSpeech: "めいじいしん で しょく を うしなった、とくがわ の きゅうしん たち が、かたな を くわ に もちかえて こうや を きりひらき、だいちゃえん を きずきあげました。"
  },
  {
    id: "f4-33",
    questionText: "愛媛のみかん栽培で重要な「3つの太陽」。空からの光、海からの反射光、あと一つは？",
    questionSpeech: "えひめ の みかんさいばい で じゅうような、みっつ の たいよう。そら から の ひかり、うみ から の はんしゃこう、あと ひとつ は？",
    choices: [
      { id: "a", text: "月の光", speech: "つき の ひかり", isCorrect: false },
      { id: "b", text: "電灯", speech: "でんとう", isCorrect: false },
      { id: "c", text: "石垣からの反射光", speech: "いしがき から の はんしゃこう", isCorrect: true },
      { id: "d", text: "ヘッドライト", speech: "へっどらいと", isCorrect: false },
    ],
    explanation: "急斜面の段々畑にある石垣が太陽の熱を蓄え、光を反射することで、みかんがより甘く育ちます。",
    explanationSpeech: "きゅうしゃめん の だんだんばたけ に ある いしがき が、たいよう の ねつ を たくわえ、ひかり を はんしゃ すること で、みかん が より あまく そだちます。"
  },
  {
    id: "f4-34",
    questionText: "京都の「にしんそば」。海から遠い京都で、なぜ北海道産のニシンが名物になった？",
    questionSpeech: "きょうと の にしんそば。うみ から とおい きょうと で、なぜ ほっかいどう さん の にしん が めいぶつ に なった？",
    choices: [
      { id: "a", text: "京都の川で獲れた", speech: "きょうと の かわ で とれた", isCorrect: false },
      { id: "b", text: "氷で冷やして運んだ", speech: "こおり で ひやして はこんだ", isCorrect: false },
      { id: "c", text: "空飛ぶ船で運んだ", speech: "そら とぶ ふね で はこんだ", isCorrect: false },
      { id: "d", text: "干物にして運んだから", speech: "ひもの に して はこんだ から", isCorrect: true },
    ],
    explanation: "昔は輸送に時間がかかったため、北海道で獲れたニシンを乾燥させて日持ちするようにして運びました。",
    explanationSpeech: "むかし は ゆそう に じかん が かかった ため、ほっかいどう で とれた にしん を、かんそう させて ひもち する ように して はこびました。"
  },
  {
    id: "f4-35",
    questionText: "江戸前寿司の「江戸前」とは、本来どのような意味？",
    questionSpeech: "えどまえ ずし の えどまえ とは、ほんらい どのようあ いみ？",
    choices: [
      { id: "a", text: "江戸の目の前の海で獲れた", speech: "えど の めのまえ の うみ で とれた", isCorrect: true },
      { id: "b", text: "江戸時代より前に生まれた", speech: "えどじだい より まえ に うまれた", isCorrect: false },
      { id: "c", text: "将軍様より前に食べた", speech: "しょうぐんさま より まえ に たべた", isCorrect: false },
      { id: "d", text: "お店の前に並んで食べた", speech: "おみせ の まえ に ならんで たべた", isCorrect: false },
    ],
    explanation: "当時は東京湾（江戸の目の前の海）で獲れた新鮮な魚を使うことが「江戸前」の誇りでした。",
    explanationSpeech: "とうじ は とうきょうわん。えど の めのまえ の うみ で とれた、しんぜんな さかな を つかう こと が、えどまえ の ほこり でした。"
  },
  {
    id: "f4-36",
    questionText: "伊勢神宮で親しまれる「伊勢うどん」。非常に太くて柔らかいのが特徴ですが、なぜ？",
    questionSpeech: "いせじんぐう で したしまれる いせうどん。ひじょう に ふとくて やわらかい のが とくちょう ですが、なぜ？",
    choices: [
      { id: "a", text: "茹でる時間を間違えた", speech: "ゆでる じかん を まちがえた", isCorrect: false },
      { id: "b", text: "長旅の参拝客の胃に優しくするため", speech: "ながたび の さんぱいきゃく の い に やさしく する ため", isCorrect: true },
      { id: "c", text: "技術がなかった", speech: "ぎじゅつ が なかった", isCorrect: false },
      { id: "d", text: "箸で切りやすくするため", speech: "はし で きりやすく する ため", isCorrect: false },
    ],
    explanation: "全国から歩いてやってくる参拝客の疲れを癒やすため、消化が良く、すぐに提供できる柔らかい麺になりました。",
    explanationSpeech: "ぜんこく から あるいて やってくる さんぱいきゃく の つかれ を いややす ため、しょか が よく、すぐに ていきょう できる やわらかい めん に なりました。"
  },
  {
    id: "f4-37",
    questionText: "秋田県の名物「きりたんぽ」。元々はどのような人たちが食べていたのが始まり？",
    questionSpeech: "あきたけん の めいぶつ きりたんぽ。もともとは どのようあ ひとびと が たべていた のが はじまり？",
    choices: [
      { id: "a", text: "海で働く海女さん", speech: "うみ で はたらく あまさん", isCorrect: false },
      { id: "b", text: "お城の殿様", speech: "おしろ の とのさま", isCorrect: false },
      { id: "c", text: "山で働くマタギ", speech: "やま で はたらく またぎ", isCorrect: true },
      { id: "d", text: "寺の修行僧", speech: "てら の しゅぎょうそう", isCorrect: false },
    ],
    explanation: "厳しい寒さの中、山に入るマタギたちが携行食としてご飯を潰して棒に刺し、鍋に入れて食べたのが始まりです。",
    explanationSpeech: "きびしい さむさ の なか、やま に はいる またぎ たち が、けいこうしょく として ごはん を つぶして ぼう に さし、なべ に いれて たべた のが はじまり です。"
  },
  {
    id: "f4-38",
    questionText: "「わさび」が美味しく育つために、最も欠かせない自然条件は何？",
    questionSpeech: "わさび が おいしく そだつ ため に、もっとも かかせない しぜん じょうけん は なに？",
    choices: [
      { id: "a", text: "一年中降り続く雨", speech: "いちねんじゅう ふりつづく あめ", isCorrect: false },
      { id: "b", text: "強い日差し", speech: "つよい ひざし", isCorrect: false },
      { id: "c", text: "たっぷりの肥料", speech: "たっぷり の ひりょう", isCorrect: false },
      { id: "d", text: "きれいで冷たい「流れる水」", speech: "きれいで つめたい ながれる みず", isCorrect: true },
    ],
    explanation: "わさびはデリケートな植物で、酸素をたっぷり含んだ清らかな湧き水が常に流れている場所で育ちます。",
    explanationSpeech: "わさび は でりけーとな しょくぶつ で、さんそ を たっぷり ふくんだ きよらかな わきみず が、つね に ながれている ばしょ で そだちます。"
  },
  {
    id: "f4-39",
    questionText: "富山県の名産「ます寿司」。器の中に、魚の身と一緒に敷き詰められている葉っぱは何？",
    questionSpeech: "とやまけん の めいさん ますずし。うつわ の なか に、さかな の み と いっしょ に しきつめられている はっぱ は なに？",
    choices: [
      { id: "a", text: "熊笹", speech: "くまざさ", isCorrect: true },
      { id: "b", text: "桜の葉", speech: "さくら の は", isCorrect: false },
      { id: "c", text: "蓮の葉", speech: "はす の は", isCorrect: false },
      { id: "d", text: "銀杏の葉", speech: "いちょう の は", isCorrect: false },
    ],
    explanation: "笹には殺菌作用があるため保存食の役割を果たし、さらに爽やかな香りを寿司に移してくれます。",
    explanationSpeech: "ささ には さつきん さよう が ある ため、ほぞんしょく の やくわり を はたし、さらに さわやかな かおり を すし に うつして くれます。"
  },
  {
    id: "f4-40",
    questionText: "名古屋の名物「ひつまぶし」。最後の一杯は、どのような食べ方をするのが一般的？",
    questionSpeech: "なごや の めいぶつ ひつまぶし。さいご の いっぱい は、どのようあ たべかた を する のが いっぱんてき？",
    choices: [
      { id: "a", text: "マヨネーズをかける", speech: "まよねーず を かける", isCorrect: false },
      { id: "b", text: "お茶や出汁をかける", speech: "おちゃ や だし を かける", isCorrect: true },
      { id: "c", text: "ご飯だけ残す", speech: "ごはん だけ のこす", isCorrect: false },
      { id: "d", text: "一口で全部食べる", speech: "ひとくち で ぜんぶ たべる", isCorrect: false },
    ],
    explanation: "一杯目はそのまま、二杯目は薬味で、三杯目はお茶漬けにするのが、贅沢な楽しみ方です。",
    explanationSpeech: "いっぱいめ は そのまま、にはいめ は やくみ で、さんばいめ は おちゃづけ に する のが、ぜいたくな たのしみかた です。"
  },
];