import { Question } from '@/types/quiz';

export const fatherSet03: Question[] = [
  {
    id: "k3-21",
    questionText: "『急がば回れ』という言葉の語源となったのは、滋賀県にある何という場所を渡るルートのこと？",
    questionSpeech: "いそがば まわれ と いう ことば の ごげん と なった のは、しがけん に ある なに と いう ばしょ を わたる るーと の こと？",
    choices: [
      { id: "a", text: "天橋立", speech: "あまの はしだて", isCorrect: false },
      { id: "b", text: "瀬田の唐橋", speech: "せた の からはし", isCorrect: true },
      { id: "c", text: "錦帯橋", speech: "きんたいきょう", isCorrect: false },
      { id: "d", text: "日本橋", speech: "にほんばし", isCorrect: false },
    ],
    explanation: "琵琶湖を船で渡る近道よりも、遠回りでも橋（瀬田の唐橋）を渡る方が確実で安全だ、という和歌が由来です。",
    explanationSpeech: "びわこ を ふね で わたる ちかみち よりも、とおまわり でも はし、せた の からはし を わたる ほう が かくじつ で あんぜん だ、という わか が ゆらい です。"
  },
  {
    id: "k3-22",
    questionText: "思いがけない縁で導かれることを指す『牛に引かれて……参り』。伏せ字に入るお寺の名前は？",
    questionSpeech: "おもいがけない えん で みちびかれる こと を さす、うし に ひかれて なになに まいり。ふせじ に はいる おてら の なまえ は？",
    choices: [
      { id: "a", text: "善光寺", speech: "ぜんこうじ", isCorrect: true },
      { id: "b", text: "清水寺", speech: "きよみずでら", isCorrect: false },
      { id: "c", text: "成田山", speech: "なりたさん", isCorrect: false },
      { id: "d", text: "金閣寺", speech: "きんかくじ", isCorrect: false },
    ],
    explanation: "欲深い老婆が、牛に奪われた布を追いかけて信州の善光寺まで行き、信仰心に目覚めたという伝説からです。",
    explanationSpeech: "よくぶかい ろうば が、うし に うばわれた ぬの を おいかけて、しんしゅう の ぜんこうじ まで いき、しんこうしん に めざめた という でんせつ から です。"
  },
  {
    id: "k3-23",
    questionText: "『風が吹けば桶屋が儲かる』という格言。風で土埃が舞い目を悪くする人が増え、その次に増えるとされた職業は？",
    questionSpeech: "かぜ が ふけば おけや が もうかる と いう かくげん。かぜ で つちぼこり が まい め を わるく する ひと が ふえ、その つぎ に ふえる と された しょくぎょう は？",
    choices: [
      { id: "a", text: "大工", speech: "だいく", isCorrect: false },
      { id: "b", text: "医者", isCorrect: false },
      { id: "c", text: "三味線弾き", speech: "しゃみせん ひき", isCorrect: true },
      { id: "d", text: "魚屋", speech: "さかなや", isCorrect: false },
    ],
    explanation: "三味線の皮に猫の皮が必要になり、猫が減るとネズミが増え、桶がかじられる……という風筋の通った（？）論理です。",
    explanationSpeech: "しゃみせん の かわ に ねこ の かわ が ひつよう に なり、ねこ が へる と ねずみ が ふえ、おけ が かじられる、という ふうすじ の とおった ろんり です。"
  },
  {
    id: "k3-24",
    questionText: "『あばたもえくぼ』という言葉。「あばた」とは、本来どのような状態を指す言葉？",
    questionSpeech: "あばた も えくぼ と いう ことば。あばた とは、ほんらい どのようあ じょうたい を さす ことば？",
    choices: [
      { id: "a", text: "天然痘などの治りあとの凹み", speech: "てんねんとう など の なおりあと の へこみ", isCorrect: true },
      { id: "b", text: "日焼けした肌", speech: "ひやけ した はだ", isCorrect: false },
      { id: "c", text: "笑った時にできるシワ", speech: "わらった とき に できる しわ", isCorrect: false },
      { id: "d", text: "赤く腫れたニキビ", speech: "あかく はれた にきび", isCorrect: false },
    ],
    explanation: "恋をすると、相手の欠点（あばた）さえも、可愛い「えくぼ」のように見えてしまうという例えです。",
    explanationSpeech: "こい を する と、あいて の けってん、あばた さえ も、かわいい えくぼ の ように みえて しまう という たとえ です。"
  },
  {
    id: "k3-25",
    questionText: "『能ある鷹は爪を隠す』。この言葉の本当の意味として、最も適切なものはどれ？",
    questionSpeech: "のう ある たか は つめ を かくす。この ことば の ほんとう の いみ として、もっとも てきせつな もの は どれ？",
    choices: [
      { id: "a", text: "怖がりの人ほど強がる", speech: "こわがり の ひと ほど つよがる", isCorrect: false },
      { id: "b", text: "道具の手入れを怠らない", speech: "どうぐ の ていれ を おこたらない", isCorrect: false },
      { id: "c", text: "実力のある人ほど才能を自慢しない", speech: "じつりょく の ある ひと ほど さいのう を じまん しない", isCorrect: true },
      { id: "d", text: "チャンスが来るまで寝て待つ", speech: "ちゃんす が くる まで ねて まつ", isCorrect: false },
    ],
    explanation: "鷹が獲物を狙う際、鋭い爪を隠して油断させる様子から、本当の賢者は才をひけらかさないという意味になりました。",
    explanationSpeech: "たか が えもの を ねらう さい、するどい つめ を かくして ゆだん させる ようす から、ほんとう の けんじゃ は さい を ひけらかさない という いみ に なりました。"
  },
  {
    id: "k3-26",
    questionText: "流行歌はその時代の世相を反映している、という意味の言葉は『歌は世につれ、世は歌に……』？",
    questionSpeech: "りゅうこうか は その じだい の せそう を はんえい している、という いみ の ことば は、うた は よ に つれ、よ は うた に、なになに？",
    choices: [
      { id: "a", text: "のれ", speech: "のれ", isCorrect: false },
      { id: "b", text: "ふれ", speech: "ふれ", isCorrect: false },
      { id: "c", text: "つれ", speech: "つれ", isCorrect: true },
      { id: "d", text: "まれ", speech: "まれ", isCorrect: false },
    ],
    explanation: "歌が世の中の変化に従うように、世の中も歌に影響されて変わっていく、という意味の名言です。",
    explanationSpeech: "うた が よのなか の へんか に したがう ように、よのなか も うた に えいきょう されて かわっていく、という いみ の めいげん です。"
  },
  {
    id: "k3-27",
    questionText: "『百聞は一見にしかず』。この後に続く、行動の重要性を説いた一節は、本来どれ？",
    questionSpeech: "ひゃくぶん は いっけん に しかず。この あと に つづく、こうどう の じゅうようせい を といた いっせつ は、ほんらい どれ？",
    choices: [
      { id: "a", text: "一見は一生の宝", speech: "いっけん は いっしょう の たから", isCorrect: false },
      { id: "b", text: "一見は一考にしかず", speech: "いっけん は いっこう に しかず", isCorrect: true },
      { id: "c", text: "一見は百笑にしかず", speech: "いっけん は ひゃくしょう に しかず", isCorrect: false },
      { id: "d", text: "一見は一食にしかず", speech: "いっけん は いっしょく に しかず", isCorrect: false },
    ],
    explanation: "見るだけでなく「考える」ことが大切で、さらにその次は「実行する」ことが大切だ、と続きます。",
    explanationSpeech: "みる だけ でなく かんがえる こと が たいせつ で、さらに その つぎ は じっこう する こと が たいせつ だ、と つづきます。"
  },
  {
    id: "k3-28",
    questionText: "『藪をつついて蛇を出す』と同じ意味で、余計なことをして災いを受けることを指す言葉は？",
    questionSpeech: "やぶ を つついて へび を だす と おなじ いみ で、よけいな こと を して わざわい を うける こと を さす ことば は？",
    choices: [
      { id: "a", text: "火に油を注ぐ", speech: "ひ に あぶら を そそぐ", isCorrect: false },
      { id: "b", text: "棚からぼたもち", speech: "たな から ぼたもち", isCorrect: false },
      { id: "c", text: "隣の芝生は青い", speech: "となり の しばふ は あおい", isCorrect: false },
      { id: "d", text: "寝た子を起こす", speech: "ねたこ を おこす", isCorrect: true },
    ],
    explanation: "静かにしている状態をわざわざ乱して、自分にとって悪い結果を招くことを戒める言葉です。",
    explanationSpeech: "しずかに している じょうたい を わざわざ みだして、じぶん に とって わるい けっか を まねく こと を いましめる ことば です。"
  },
  {
    id: "k3-29",
    questionText: "『後悔先に立たず』。この言葉が教えてくれる教訓は、次のうちどれ？",
    questionSpeech: "こうかい さき に たたず。この ことば が おしえて くれる きょうくん は、つぎ の うち どれ？",
    choices: [
      { id: "a", text: "済んだことを悔やんでも始まらない", speech: "すんだ こと を くやんでも はじまらない", isCorrect: true },
      { id: "b", text: "海へ行くのは後回しにする", speech: "うみ へ いく のは あとまわし に する", isCorrect: false },
      { id: "c", text: "失敗は成功の母である", speech: "しっぱい は せいこう の はは である", isCorrect: false },
      { id: "d", text: "急がば回るのが良い", speech: "いそがば まわる のが よい", isCorrect: false },
    ],
    explanation: "事が起きてから悔やんでも遅いので、事前によく考えて行動しなさい、という教えです。",
    explanationSpeech: "こと が おきて から くやんでも おそい ので、じぜん に よく かんがえて こうどう しなさい、という おしえ です。"
  },
  {
    id: "k3-30",
    questionText: "『弘法も筆の誤り』と同じ意味で、名人でも失敗することがあるという意味の言葉は？",
    questionSpeech: "こうぼう も ふで の あやまり と おなじ いみ で、めいじん でも しっぱい する こと が ある と いう いみ の ことば は？",
    choices: [
      { id: "a", text: "まな板の上の鯉", speech: "まないた の うえ の こい", isCorrect: false },
      { id: "b", text: "河童（かっぱ）の川流れ", speech: "かっぱ の かわながれ", isCorrect: true },
      { id: "c", text: "捕らぬ狸の皮算用", speech: "とらぬ たぬき の かわざんよう", isCorrect: false },
      { id: "d", text: "海老で鯛を釣る", speech: "えび で たい を つる", isCorrect: false },
    ],
    explanation: "泳ぎの得意な河童でも流されることがあるように、どんな達人でもミスはあるものだ、という励ましの意味です。",
    explanationSpeech: "およぎ の とくいな かっぱ でも ながされる こと が ある ように、どんな たつじん でも みす は ある もの だ、という はげまし の いみ です。"
  },
];