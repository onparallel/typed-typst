// Converted from test/universe/corpus/modern-sustech-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  figure,
  footnote,
  heading,
  image,
  importFile,
  inline,
  label,
  labelled,
  m,
  path,
  pct,
  ref,
  show,
  space,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const genericStyle = external('generic-style')
  const cover = external('cover')
  const declarations = external('declarations')
  const titlePage = define('title-page').returns(T.any).external()
  const abstract = define('abstract').pos('arg1', T.content).named('lang', T.any, null).returns(T.any).external()
  const outline_2 = external('outline')
  const bodyMatterStyle = external('body-matter-style')
  const conclusion = external('conclusion')
  const figures = define('figures')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('kind', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external()
  const appendixStyle = external('appendix-style')
  const attachmentStyle = external('attachment-style')
  return doc(
    importFile('bachelor.config.typ', [
      genericStyle,
      cover,
      declarations,
      titlePage,
      abstract,
      outline_2,
      bodyMatterStyle,
      conclusion,
      figures,
      appendixStyle,
      attachmentStyle,
    ]),
    show(genericStyle),
    inline(cover),
    inline(declarations),
    inline(titlePage()),
    inline(
      abstract(
        blocks(
          '小说以一个“狂人”的视角，写出了他的所见所闻，一针见血地指出当时中国文化的朽坏。日记前言以文言文书写，为日记作者的一位友人所写。日记作者之前患了“迫害狂”的病，他已痊愈。',
          '日记则以白话文书写，为作者患病时的所见所闻。作者写道历史上满写的“仁义道德”四个字，透过字缝里却全是“吃人”两个字，也写道古书中（或扭曲历史传说、凭空想象出来的）人吃人事件。作者畏惧村上的人，以为他们要把他吃了。接着，他也认定他大哥准备和村人合伙吃他。他想起才五岁就逝世的妹妹，认为是被大哥吃了，而自己也无意地从大哥准备的饭菜中吃了妹妹的肉。',
        ),
      ),
    ),
    inline(
      abstract(
        { lang: 'en' },
        blocks(
          inline`The story begins with a note from the narrator written in Classical Chinese, describing his
reunion with an old friend. Having heard that the friend's brother was ill, he visits them,
but discovers that the brother has recovered and taken up an official post. The rest of the
story consists of 13 fragments the narrator has copied from a diary the brother kept while "mad",
written in vernacular Chinese.`,
          inline`The diary reveals that he suffered a "persecution complex", and became suspicious of everyone's
actions, including people's stares, a doctor's treatment, his brother's behavior, and even dogs
barking. He came to believe that the people in his village had a grudge against him and were
cannibals who carried the intent of consuming him. Reading a history book, the "madman" saw
the words "eat people" written between the lines, as commentary placed in classical Chinese
texts. As his "madness" progressed, he experiences psychosis thinking the villagers are attempting
to force him into suicide, that his brother ate his sister and that he might have done so as
well. He attempts to persuade the villagers to "change from the heart", but concludes that people
have been eating each other for millennia. The last chapter concludes with a plea to "save the
children".`,
        ),
      ),
    ),
    inline(outline_2),
    show(bodyMatterStyle),
    m.lines(
      m.heading(1, '引言'),
      inline`某君昆仲。今隐其名，皆余昔日在中学校时良友；分隔多年，消息渐阙。日前偶闻其一大病；适归故乡，迂道往访，则仅晤一人，言病者其弟也。劳君远道来视，然已早愈，赴某地候补矣。因大笑，出示日记二册，谓可见当日病状，不妨献诸旧友。持归阅一过，知所患盖“迫害狂”${labelled(footnote(inline`中文引号必须打出对应字符，不能像英文引号一样留给 Typst 处理。`), label('fn:quote'))}之类。语颇错杂无伦次，又多荒唐之言；亦不著月日，惟墨色字体不一，知非一时所书。间亦有略具联络者，今撮录一篇，以供医家研究，记中语误，一字不易；惟人名虽皆村人，不为世间所知，无关大体，亦悉易去。至于书名，则本人愈后所题，不复改也。七年四月二日识。`,
    ),
    inline`行间可以放 ${unsafeRaw.math`e = m c^2`} 公式，一般会拿出来。
${unsafeRaw.math.block`e & = m c^2 #<eq:me> \\
  integral e^(-x/2) dif x & = ?`}
据说这个形式的${ref(label('eq:me'))} 是误传……往下翻到${ref(label('ch:diary'))}。`,
    inline(
      labelled(
        [figure({ caption: inline`本论文的封面` }, image({ height: pct(40) }, path('assets/cover.png'))), space],
        label('fg:cover'),
      ),
    ),
    inline`${ref(label('fg:cover'))} 是学士学位论文的封面，此模版还有硕士和博士论文的。`,
    inline(labelled(heading({ depth: 1 }, inline('日记')), label('ch:diary'))),
    m.lines(m.heading(2, '其一'), inline`今天晚上，很好的月光${ref(label('LuXun1918'))}。`),
    inline`我不见他，已是三十多年；今天见了，精神分外爽快。才知道以前的三十多年，全是发昏；然而须十分小心。不然，那赵家的狗${ref({ supplement: inline`67-69` }, label('Cheng1992'))}，何以看我两眼呢？`,
    '我怕得有理。',
    m.lines(
      m.heading(2, '其二'),
      '今天全没月光，我知道不妙。早上小心出门，赵贵翁的眼色便怪：似乎怕我，似乎想害我。还有七八个人，交头接耳的议论我。又怕我看见。一路上的人，都是如此。其中最凶的一个人，张着嘴，对我笑了一笑；我便从头直冷到脚跟，晓得他们布置，都已妥当了。',
    ),
    inline`我可不怕，仍旧走我的路${ref(label('Qian1981'))}。前面一伙小孩子，也在那里议论我；眼色也同赵贵翁一样，脸色也都铁青。我想我同小孩子有什么仇${ref(label('Wang2014'))}，他也这样。忍不住大声说：“你告诉我！”
${ref(label('fn:quote'))}${symbol('他')}们可就跑了。`,
    '我想：我同赵贵翁有什么仇，同路上的人又有什么仇；只有廿年以前，把古久先生的陈年流水簿子，踹了一脚，古久先生很不高兴。赵贵翁虽然不认识他，一定也听到风声，代抱不平；约定路上的人，同我作冤对。但是小孩子呢？那时候，他们还没有出世，何以今天也睁着怪眼睛，似乎怕我，似乎想害我。这真教我怕，教我纳罕而且伤心。',
    inline`我明白了。这是他们娘老子教的${ref(label('Lee1987'))}！`,
    inline(conclusion),
    inline`${ref({ supplement: inline`不能想了` }, label('tb:hoc'))}。`,
    inline`四千年来时时吃人的地方，${ref(label('tb:hoc-time'))}，今天才明白，我也在其中混了多年；大哥正管着家务，妹子恰恰死了，他未必不和在饭菜里，暗暗给我们吃。`,
    inline`我未必无意之中，不吃了我妹子的几片肉，现在也轮到我自己：${ref(label('tb:hoc-char'))}`,
    '有了四千年吃人履历的我，当初虽然不知道，现在明白，难见真的人！',
    inline(
      figures(
        { caption: inline`吃人履历`, label: label('tb:hoc'), kind: table, columns: 2 },
        figure(
          { caption: inline`按时间` },
          table(
            { columns: 3 },
            table.hline(),
            table.header(inline`时间`, inline`标准`, inline`强度`),
            table.hline(),
            inline`四千年前`,
            inline`?`,
            unsafeRaw.math`x`,
            inline`“现在”`,
            inline`?`,
            unsafeRaw.math`y/2`,
            inline`2026年`,
            inline`?`,
            unsafeRaw.math`log(z)`,
            table.hline(),
          ),
        ),
        label('tb:hoc-time'),
        figure(
          { caption: inline`按人物` },
          table(
            { columns: 3 },
            table.hline(),
            table.header(inline`人物`, inline`标准`, inline`强度`),
            table.hline(),
            inline`“我”`,
            inline`?`,
            unsafeRaw.math`x`,
            inline`大哥`,
            inline`?`,
            unsafeRaw.math`y/2`,
            inline`妹子`,
            inline`?`,
            unsafeRaw.math`#calc.round(calc.atan(0.5).rad(), digits: 3) "rad"`,
            table.hline(),
          ),
        ),
        label('tb:hoc-char'),
      ),
    ),
    inline(bibliography(path('ref.bib'))),
    show(appendixStyle),
    m.heading(1, '附录'),
    m.lines(m.heading(2, '其十三'), '没有吃过人的孩子，或者还有？'),
    '救救孩子……',
    m.heading(2, '版权'),
    m.lines(
      m.heading(3, '美国'),
      '1996年1月1日，这部作品在原著作国家或地区属于公有领域，之前在美国从未出版，其作者1936年逝世，在美国以及版权期限是作者终身加80年以下的国家以及地区，属于公有领域。',
    ),
    m.lines(
      m.heading(3, '中国'),
      '本作品现时在大中华两岸地区因著作权保护条款过期而处于公有领域。根据《中华人民共和国著作权法》第二十一条第二款（司法管辖区为中国大陆，不包括香港和澳门）和中华民国的《著作权法》第三十三条（目前司法管辖区为台澎金马地区），所有著作权持有者为法人的作品，在首次发表50年后，或者从创作之日起50年未发表，即进入公有领域。其他适用作品则在作者死亡后50年进入公有领域。',
    ),
    show(attachmentStyle),
    m.lines(
      m.heading(1, '致谢'),
      '《鲁迅全集》由鲁迅先生纪念委员会于1938年出版。编辑委员会成员有蔡元培、马裕藻、许寿裳、沈兼士、茅盾、周作人、许广平等，实际负责工作的是郑振铎和王任叔，工作人员则有唐弢、谢澹如、胡仲持等。',
    ),
  )
}
