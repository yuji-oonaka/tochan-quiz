import { Question } from '@/types/quiz';

export const fatherSet10: Question[] = [
  {
    id: "s10-91",
    questionText: "慶長5年（1600年）、天下分け目の「関ヶ原の戦い」が実際にわずか半日ほどで決着がついたとされる、その月日は？",
    choices: [
      { id: "a", text: "1月1日", isCorrect: false },
      { id: "b", text: "8月15日", isCorrect: false },
      { id: "c", text: "12月25日", isCorrect: false },
      { id: "d", text: "9月15日", isCorrect: true }, // 正解：d
    ],
    explanation: "旧暦の9月15日。朝から始まった戦いは、小早川秀秋の寝返りなどもあり、午後には東軍の勝利が決まっていました。"
  },
  {
    id: "s10-92",
    questionText: "1603年、徳川家康が朝廷から任命され、江戸幕府を正式に開いた際に授かった官職の名前は何？",
    choices: [
      { id: "a", text: "征夷大将軍", isCorrect: true }, // 正解：a
      { id: "b", text: "関白", isCorrect: false },
      { id: "c", text: "太政大臣", isCorrect: false },
      { id: "d", text: "執権", isCorrect: false },
    ],
    explanation: "源頼朝以来、武士の頂点を示すこの職に就くことで、家康は名実ともに天下の主となりました。"
  },
  {
    id: "s10-93",
    questionText: "三代将軍・徳川家光が確立した、諸大名に江戸と領地を一年おきに行き来させた制度を何と呼ぶ？",
    choices: [
      { id: "a", text: "刀狩", isCorrect: false },
      { id: "b", text: "検地", isCorrect: false },
      { id: "c", text: "参勤交代", isCorrect: true }, // 正解：c
      { id: "d", text: "楽市・楽座", isCorrect: false },
    ],
    explanation: "大名に多額の費用を使わせ、家族を人質として江戸に置くことで、反乱を防ぎ幕府の権威を保ちました。"
  },
  {
    id: "s10-94",
    questionText: "鎖国（さこく）下の日本において、唯一オランダや中国との貿易が許されていた、長崎にある人工の島はどこ？",
    choices: [
      { id: "a", text: "淡路島", isCorrect: false },
      { id: "b", text: "出島", isCorrect: true }, // 正解：b
      { id: "c", text: "佐渡島", isCorrect: false },
      { id: "d", text: "軍艦島", isCorrect: false },
    ],
    explanation: "扇型の小さな島「出島」を通じて、西洋の医学や科学（蘭学）などの新しい知識が日本に入ってきました。"
  },
  {
    id: "s10-95",
    questionText: "大坂の陣において、真田幸村（信繁）が徳川軍を迎え撃つために大坂城の南側に築いた出城の通称は？",
    choices: [
      { id: "a", text: "一夜城", isCorrect: false },
      { id: "b", text: "伏見城", isCorrect: false },
      { id: "c", text: "五稜郭", isCorrect: false },
      { id: "d", text: "真田丸", isCorrect: true }, // 正解：d
    ],
    explanation: "鉄砲隊を配したこの要塞で、幸村は徳川の大軍を翻弄し、その武名を後世にまで残しました。"
  },
  {
    id: "s10-96",
    questionText: "徳川家康を「東照大権現（とうしょうだいごんげん）」という神として祀っている、栃木県にある豪華絢爛な神社は？",
    choices: [
      { id: "a", text: "日光東照宮", isCorrect: true }, // 正解：a
      { id: "b", text: "出雲大社", isCorrect: false },
      { id: "c", text: "伊勢神宮", isCorrect: false },
      { id: "d", text: "靖国神社", isCorrect: false },
    ],
    explanation: "「見ざる・言わざる・聞かざる」の彫刻でも有名。家康は死後、神となって江戸の平和を見守るとされました。"
  },
  {
    id: "s10-97",
    questionText: "江戸時代、葛飾北斎（かつしかほくさい）らが描いた、庶民の暮らしや風景を題材にした鮮やかな多色刷りの版画は？",
    choices: [
      { id: "a", text: "水墨画", isCorrect: false },
      { id: "b", text: "油絵", isCorrect: false },
      { id: "c", text: "浮世絵", isCorrect: true }, // 正解：c
      { id: "d", text: "壁画", isCorrect: false },
    ],
    explanation: "『富嶽三十六景』などは海外の芸術家にも大きな影響を与え、今も世界中で高く評価されています。"
  },
  {
    id: "s10-98",
    questionText: "江戸時代末期、九州で起きたキリシタン弾圧に対する大規模な一揆「島根・天草一揆」で、総大将となった少年は誰？",
    choices: [
      { id: "a", text: "一休さん", isCorrect: false },
      { id: "b", text: "天草 四郎", isCorrect: true }, // 正解：b
      { id: "c", text: "源 義経", isCorrect: false },
      { id: "d", text: "宮本 武蔵", isCorrect: false },
    ],
    explanation: "わずか16歳ほどで数万人の民衆を率いたと言われ、多くの伝説に包まれた悲劇のリーダーです。"
  },
  {
    id: "s10-99",
    questionText: "1867年、15代将軍・徳川慶喜（よしのぶ）が政権を朝廷に返上し、江戸幕府の終焉を告げた出来事を何と呼ぶ？",
    choices: [
      { id: "a", text: "文明開化", isCorrect: false },
      { id: "b", text: "廃藩置県", isCorrect: false },
      { id: "c", text: "明治維新", isCorrect: false },
      { id: "d", text: "大政奉還", isCorrect: true }, // 正解：d
    ],
    explanation: "この英断により、260年余り続いた徳川の世が終わり、日本は近代国家へと歩み始めました。"
  },
  {
    id: "s10-100",
    questionText: "【最終問題】徳川家康が開き、幕末まで続いた江戸時代の平和な期間は、おおよそ「何年間」でしょうか？",
    choices: [
      { id: "a", text: "約260年間", isCorrect: true }, // 正解：a
      { id: "b", text: "約100年間", isCorrect: false },
      { id: "c", text: "約500年間", isCorrect: false },
      { id: "d", text: "約10年間", isCorrect: false },
    ],
    explanation: "1603年から1867年まで。世界史的にも稀な、大きな戦争のない平和な文化が花開いた時代でした。全100問達成、お疲れ様でした！"
  },
];