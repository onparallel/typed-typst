// Converted from test/universe/corpus/casual-szu-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  datetime,
  define,
  doc,
  em,
  emoji,
  external,
  figure,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  m,
  path,
  pct,
  pt,
  quote,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const template_with = define('with')
    .named('class', T.content, [])
    .named('course-title', T.content, [])
    .named('experiment-date', T.any, null)
    .named('experiment-title', T.content, [])
    .named('faculty', T.content, [])
    .named('features', T.any, null)
    .named('instructor', T.content, [])
    .named('major', T.content, [])
    .named('reporter', T.content, [])
    .named('student-id', T.content, [])
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/casual-szu-report:0.1.0', [template]),
    show(
      template_with({
        courseTitle: inline`养鸡学习`,
        experimentTitle: inline`养鸡`,
        faculty: inline`养鸡学院`,
        major: inline`智能养鸡`,
        instructor: inline`鸡老师`,
        reporter: inline`鸡`,
        studentId: inline`4144010590`,
        class: inline`养鸡99班`,
        experimentDate: datetime({ year: 1983, month: 9, day: 27 }),
        features: { Bibliography: 'template/refs.bib' },
      }),
    ),
    m.heading(1, '实验目的与要求'),
    m.heading(2, 'First'),
    inline(lorem(42)),
    m.heading(3, 'Second'),
    '此開卷第一回也。作者自云曾歷過一番夢幻之後，故將真事隱去，而借「通靈」說此《石頭記》一書也，故曰「甄士隱」云云。但書中所記何事何人？自己又云：今風塵碌碌，一事無成，忽念及當日所有之女子，一一細考較去，覺其行止見識皆出我之上，我堂堂鬚眉，誠不若彼裙釵。我實愧則有餘，悔又無益，大無可如何之日也！當此日，欲將已往所賴天恩祖德錦衣紈袴之時，飫甘饜肥之日，背父兄教育之恩，負師友規訓之德，以致今日一技無成，半生潦倒之罪，編述一集，以告天下。知我之負罪固多，然閨閣中歷歷有人，萬不可因我之不肖自護己短，一并使其泯滅也。所以蓬牖茅椽，繩床瓦灶，並不足妨我襟懷。況那晨風夕月，階柳庭花，更覺得潤人筆墨。我雖不學無文，又何妨用假語村言敷衍出來，亦可使閨閣昭傳，復可破一時之悶，醒同人之目，不亦宜乎？故曰「賈雨村」云云。更於篇中間用「夢」「幻」等字，卻是此書本旨，兼寓提醒閱者之意。',
    m.heading(1, '实验内容'),
    inline`Transformer is all you need. ${ref(label('vaswani2023attentionneed'))}`,
    inline(lorem(42)),
    m.heading(1, '实验仪器'),
    m.enum(
      m.item(['1']),
      m.item(['2']),
      m.item(m.lines('3', m.enum(m.item(m.lines('3.1', m.enum(m.item(['3.1.1']))))))),
    ),
    inline(lorem(42)),
    m.heading(1, '实验原理'),
    inline(
      labelled(
        [figure({ caption: inline`2 Rabbits` }, image({ width: pct(60) }, path('img/AnimalWell.png'))), space],
        label('AnimalWell'),
      ),
    ),
    '感盤古開闢，三皇治世，五帝定倫，世界之間，遂分為四大部洲：曰東勝神洲，曰西牛賀洲，曰南贍部洲，曰北俱蘆洲。這部書單表東勝神洲。海外有一國土，名曰傲來國。國近大海，海中有一座名山，喚為花果山。此山乃十洲之祖脈，三島之來龍，自開清濁而立，鴻濛判後而成。真個好山！有詞賦為證。賦曰：',
    '勢鎮汪洋，威寧瑤海。勢鎮汪洋，潮湧銀山魚入穴；威寧瑤海，波翻雪浪蜃離淵。水火方隅高積上，東海之處聳崇巔。丹崖怪石，削壁奇峰。丹崖上，彩鳳雙鳴；削壁前，麒麟獨臥。峰頭時聽錦雞鳴，石窟每觀龍出入。林中有壽鹿仙狐，樹上有靈禽玄鶴。瑤草奇花不謝，青松翠柏長春。仙桃常結果，修竹每留雲。一條澗壑籐蘿密，四面原堤草色新。正是百川會處擎天柱，萬劫無移大地根。',
    inline`如${ref(label('AnimalWell'))}`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Some formulas` },
            table(
              { columns: [em(2), auto, auto], inset: pt(10), align: horizon },
              table.header(inline(), inline(strong(inline`Area`)), inline(strong(inline`Parameters`))),
              emoji.bagel,
              unsafeRaw.math.block`pi h (D^2 - d^2) / 4`,
              inline`${space}${unsafeRaw.math`h`}: height ${linebreak()} ${unsafeRaw.math`D`}: outer radius ${linebreak()}
${unsafeRaw.math`d`}: inner radius${space}`,
              emoji.sandwich,
              unsafeRaw.math.block`sqrt(2) / 12 a^3`,
              inline`${unsafeRaw.math`a`}: edge length`,
            ),
          ),
          space,
        ],
        label('SomeFormulas'),
      ),
    ),
    m.heading(1, '实验步骤'),
    inline`Ciallo～(∠・ω< )⌒☆. 如${ref(label('SomeFormulas'))}`,
    m.heading(1, '结果记录与分析'),
    inline(lorem(42)),
    m.heading(1, '实验结论'),
    inline(lorem(42)),
    inline(
      quote(
        { block: true, attribution: inline`Czesław Miłosz` },
        inline`${space}Irony is the glory of slaves.${space}`,
      ),
    ),
  )
}
