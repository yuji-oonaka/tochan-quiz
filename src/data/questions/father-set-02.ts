import { Question } from '@/types/quiz';

export const fatherSet02: Question[] = [
  {
    id: "g2-11",
    questionText: "本州の中で、太平洋と日本海の両方に直接面している県はどこ？",
    questionSpeech: "ほんしゅう の なか で、たいへいよう と にほんかい の りょうほう に ちょくせつ めんしている けん は どこ？",
    choices: [
      { id: "a", text: "岡山県", speech: "おかやまけん", isCorrect: false },
      { id: "b", text: "兵庫県", speech: "ひょうごけん", isCorrect: true },
      { id: "c", text: "鳥取県", speech: "とっとりけん", isCorrect: false },
      { id: "d", text: "滋賀県", speech: "しがけん", isCorrect: false },
    ],
    explanation: "兵庫県は、北は日本海、南は瀬戸内海（太平洋側）に面している、本州で数少ない県の一つです。",
    explanationSpeech: "ひょうごけん は、きた は にほんかい、みなみ は せとないかい。たいへいよう がわ に めんしている、ほんしゅう で かずすくない けん の ひとつ です。"
  },
  {
    id: "g2-12",
    questionText: "関東地方にある県のうち、海に全く面していない「海なし県」は、栃木・群馬とあと一つはどこ？",
    questionSpeech: "かんとう ちほう に ある けん の うち、うみ に まったく めんしていない、うみなし けん は、とちぎ。ぐんま と あと ひとつ は どこ？",
    choices: [
      { id: "a", text: "埼玉県", speech: "さいたまけん", isCorrect: true },
      { id: "b", text: "千葉県", speech: "ちばけん", isCorrect: false },
      { id: "c", text: "茨城県", speech: "いばらきけん", isCorrect: false },
      { id: "d", text: "神奈川県", speech: "かながわけん", isCorrect: false },
    ],
    explanation: "埼玉・栃木・群馬の3県は、関東の中でも海に面していない内陸の県です。",
    explanationSpeech: "さいたま、とちぎ、ぐんま の さんけん は、かんとう の なか でも うみ に めんしていない ないりく の けん です。"
  },
  {
    id: "g2-13",
    questionText: "四国四県のうち、唯一「瀬戸内海」に面していない、南側に位置する県はどこ？",
    questionSpeech: "しこく よんけん の うち、ゆいいつ、せとないかい に めんしていない、みなみがわ に いちする けん は どこ？",
    choices: [
      { id: "a", text: "徳島県", speech: "とくしまけん", isCorrect: false },
      { id: "b", text: "愛媛県", speech: "えひめけん", isCorrect: false },
      { id: "c", text: "高知県", speech: "こうちけん", isCorrect: true },
      { id: "d", text: "香川県", speech: "かがわけん", isCorrect: false },
    ],
    explanation: "高知県は南側の太平洋に広く面しており、四国山地を挟んで瀬戸内海とは反対側に位置しています。",
    explanationSpeech: "こうちけん は みなみがわ の たいへいよう に ひろく めんしており、しこく さんち を はさんで せとないかい とは はんたいがわ に いち しています。"
  },
  {
    id: "g2-14",
    questionText: "九州地方の中で、一番面積が「小さい」県はどこでしょうか？",
    questionSpeech: "きゅうしゅう ちほう の なか で、いちばん めんせき が ちいさい けん は どこ でしょうか？",
    choices: [
      { id: "a", text: "長崎県", speech: "ながさきけん", isCorrect: false },
      { id: "b", text: "大分県", speech: "おおいたけん", isCorrect: false },
      { id: "c", text: "福岡県", speech: "ふくおかけん", isCorrect: false },
      { id: "d", text: "佐賀県", speech: "さがけん", isCorrect: true },
    ],
    explanation: "九州で最も面積が広いのは鹿児島県ですが、最も小さいのは有明海に面した佐賀県です。",
    explanationSpeech: "きゅうしゅう で もっとも めんせき が ひろい のは かごしまけん ですが、もっとも ちいさい のは ありあけかい に めんした さがけん です。"
  },
  {
    id: "g2-15",
    questionText: "隣り合う「島根県」と「鳥取県」。このうち、地図上で見て「西側（山口県寄り）」にあるのはどっち？",
    questionSpeech: "となりあう しまねけん と とっとりけん。このうち、ちずじょう で みて、にしがわ。やまぐちけん より に ある のは どっち？",
    choices: [
      { id: "a", text: "鳥取県", speech: "とっとりけん", isCorrect: false },
      { id: "b", text: "島根県", speech: "しまねけん", isCorrect: true },
      { id: "c", text: "山口県", speech: "やまぐちけん", isCorrect: false },
      { id: "d", text: "広島県", speech: "ひろしまけん", isCorrect: false },
    ],
    explanation: "西から「島根」「鳥取」の順に並んでいます。「ね・と（島根・鳥取）」と覚えるのが有名です。",
    explanationSpeech: "にし から、しまね、とっとり の じゅん に ならんでいます。ね、と、と おぼえる のが ゆうめい です。"
  },
  {
    id: "g2-16",
    questionText: "東北地方の中で、最も面積が広く、四国4県がまるごと入ってしまうほどの広さを持つ県は？",
    questionSpeech: "とうほく ちほう の なか で、もっとも めんせき が ひろく、しこく よんけん が まるごと はいってしまう ほど の ひろさ を もつ けん は？",
    choices: [
      { id: "a", text: "岩手県", speech: "いわてけん", isCorrect: true },
      { id: "b", text: "青森県", speech: "あおもりけん", isCorrect: false },
      { id: "c", text: "秋田県", speech: "あきたけん", isCorrect: false },
      { id: "d", text: "山形県", speech: "やまがたけん", isCorrect: false },
    ],
    explanation: "岩手県は日本の都道府県で北海道に次いで2番目に広く、本州では最大の面積を誇ります。",
    explanationSpeech: "いわてけん は にほん の とどうふけん で ほっかいどう に ついで にばんめ に ひろく、ほんしゅう では さいだい の めんせき を ほこります。"
  },
  {
    id: "g2-17",
    questionText: "日本の標準時の基準となる「東経135度」の線が通る、明石市がある県は？",
    questionSpeech: "にほん の ひょうじゅんじ の きじゅん と なる、とうけい ひゃくさんじゅうごど の せん が とおる、あかしし が ある けん は？",
    choices: [
      { id: "a", text: "大阪府", speech: "おおさかふ", isCorrect: false },
      { id: "b", text: "京都府", speech: "きょうとふ", isCorrect: false },
      { id: "c", text: "兵庫県", speech: "ひょうごけん", isCorrect: true },
      { id: "d", text: "奈良県", speech: "ならけん", isCorrect: false },
    ],
    explanation: "明石市にある天文科学館の真上を、日本の時間の基準となる経線が通っています。",
    explanationSpeech: "あかしし に ある てんもん かがくかん の まうえ を、にほん の じかん の きじゅん と なる けいせん が とおっています。"
  },
  {
    id: "g2-18",
    questionText: "富士山の「南側」に位置し、駿河湾に面している県はどこ？",
    questionSpeech: "ふじさん の みなみがわ に いちし、するがわん に めんしている けん は どこ？",
    choices: [
      { id: "a", text: "山梨県", speech: "やまなしけん", isCorrect: false },
      { id: "b", text: "静岡県", speech: "しずおかけん", isCorrect: true },
      { id: "c", text: "長野県", speech: "ながのけん", isCorrect: false },
      { id: "d", text: "神奈川県", speech: "かながわけん", isCorrect: false },
    ],
    explanation: "富士山を挟んで、北側が山梨県、南側が静岡県となります。海がある方が静岡県です。",
    explanationSpeech: "ふじさん を はさんで、きたがわ が やまなしけん、みなみがわ が しずおかけん と なります。うみ が ある ほう が しずおかけん です。"
  },
  {
    id: "g2-19",
    questionText: "世界一長い吊り橋「明石海峡大橋」を渡って、本州（神戸市）から最初に行くことができる島はどこ？",
    questionSpeech: "せかいいち ながい つりばし、あかし かいきょう おおはし を わたって、ほんしゅう。こうべし から さいしょ に いく こと が できる しま は どこ？",
    choices: [
      { id: "a", text: "小豆島", speech: "しょうどしま", isCorrect: false },
      { id: "b", text: "佐渡島", speech: "さどしま", isCorrect: false },
      { id: "c", text: "隠岐諸島", speech: "おきしょとう", isCorrect: false },
      { id: "d", text: "淡路島", speech: "あわじしま", isCorrect: true },
    ],
    explanation: "神戸と淡路島を結んでいるのが明石海峡大橋で、その先は大鳴門橋を通って四国へ繋がっています。",
    explanationSpeech: "こうべ と あわじしま を むすんでいる のが あかし かいきょう おおはし で、その さき は おおなるときょう を とおって しこく へ つながっています。"
  },
  {
    id: "g2-20",
    questionText: "次のうち、日本で唯一「3つの海（日本海・太平洋・津軽海峡）」に面している県はどこ？",
    questionSpeech: "つぎ の うち、にほん で ゆいいつ、みっつ の うみ。にほんかい、たいへいよう、つがる かいきょう に めんしている けん は どこ？",
    choices: [
      { id: "a", text: "青森県", speech: "あおもりけん", isCorrect: true },
      { id: "b", text: "北海道", speech: "ほっかいどう", isCorrect: false },
      { id: "c", text: "秋田県", speech: "あきたけん", isCorrect: false },
      { id: "d", text: "岩手県", speech: "いわてけん", isCorrect: false },
    ],
    explanation: "青森県は東に太平洋、西に日本海、そして北に津軽海峡と、3つの異なる海に囲まれています。",
    explanationSpeech: "あおもりけん は ひがし に たいへいよう、にし に にほんかい、そして きた に つがる かいきょう と、みっつ の ことなる うみ に かこまれています。"
  },
];