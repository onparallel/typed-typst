// Converted from test/universe/corpus/bean-upm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  emph,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  m,
  path,
  pct,
  raw,
  ref,
  show,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const upmReport = external('upm-report')
  const upmReport_with = define('with')
    .named('abstract-en', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('author', T.any, null)
    .named('bibliography-file', T.any, null)
    .named('bibliography-style', T.any, null)
    .named('date', T.any, null)
    .named('degree-name', T.any, null)
    .named('keywords-en', T.any, null)
    .named('report-type', T.any, null)
    .named('school-abbr', T.any, null)
    .named('school-address', T.any, null)
    .named('school-name', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(upmReport)
  return doc(
    importPackage('@preview/bean-upm:0.1.0', [upmReport]),
    show(
      upmReport_with({
        title: 'This is an Example Thesis Title That You Should Replace',
        author: 'Jane Example Student',
        supervisor: 'Prof. Example McSupervisor',
        date: datetime({ year: 2025, month: 6, day: 15 }),
        university: 'Universidad Politécnica de Madrid',
        schoolName: 'E.T.S. de Ingeniería de Sistemas Informáticos',
        schoolAddress: 'Campus Sur UPM, Carretera de Valencia (A-3), km. 7\n28031, Madrid, España',
        schoolAbbr: 'ETSISI',
        reportType: "Bachelor's thesis",
        degreeName: 'Grado en Ingeniería del Software',
        acknowledgements: 'Thanks to my family, friends, and colleagues for their support.',
        abstractEn:
          'This thesis explores the fascinating world of example topics. It provides insights and analysis on various aspects of the subject matter, aiming to contribute to the existing body of knowledge.',
        keywordsEn: 'example, thesis, typst, template',
        bibliographyFile: '../template/references.bib',
        bibliographyStyle: 'ieee',
      }),
    ),
    m.heading(1, 'Introduction'),
    'Hello! This is where your introduction goes. Replace this text with your actual introduction.',
    inline`You can cite things like this ${ref(label('fakebook2024'))}, and it will appear in your bibliography
at the end.`,
    m.heading(2, 'A Subsection'),
    'You can have subsections too. Put your real content here instead of this placeholder text.',
    'Here go some images and tables to show in the lists:',
    inline(
      figure({ caption: inline`This is my figure caption` }, image({ width: pct(80) }, path('assets/placeholder.png'))),
    ),
    inline(
      figure(
        { caption: inline`This is my figure caption 2` },
        image({ width: pct(80) }, path('assets/placeholder.png')),
      ),
    ),
    inline(
      figure(
        { caption: inline`This is my figure caption 3` },
        image({ width: pct(80) }, path('assets/placeholder.png')),
      ),
    ),
    inline(
      figure(
        { caption: inline`This is my figure caption 4` },
        image({ width: pct(80) }, path('assets/placeholder.png')),
      ),
    ),
    inline(
      figure(
        { caption: inline`This is my table caption` },
        table(
          { columns: 3 },
          inline`Header 1`,
          inline`Header 2`,
          inline`Header 3`,
          inline`Data 1`,
          inline`Data 2`,
          inline`Data 3`,
        ),
      ),
    ),
    inline(
      figure(
        { caption: inline`This is my table caption 2` },
        table(
          { columns: 3 },
          inline`Header 1`,
          inline`Header 2`,
          inline`Header 3`,
          inline`Data 1`,
          inline`Data 2`,
          inline`Data 3`,
        ),
      ),
      space,
      figure(
        { caption: inline`This is my table caption 3` },
        table(
          { columns: 3 },
          inline`Header 1`,
          inline`Header 2`,
          inline`Header 3`,
          inline`Data 1`,
          inline`Data 2`,
          inline`Data 3`,
        ),
      ),
      space,
      figure(
        { caption: inline`This is my table caption 4` },
        table(
          { columns: 3 },
          inline`Header 1`,
          inline`Header 2`,
          inline`Header 3`,
          inline`Data 1`,
          inline`Data 2`,
          inline`Data 3`,
        ),
      ),
    ),
    m.heading(2, 'Lists Work Too'),
    inline`Here's how to make a list:`,
    m.list(m.item(['First item goes here']), m.item(['Second item goes here']), m.item(['Third item is also here'])),
    'And numbered lists:',
    m.enum(m.item(['Step one of something']), m.item(['Step two of something']), m.item(['Step three of something'])),
    m.heading(1, 'Literature Review'),
    inline`This is where you'd discuss what other people have written about your topic ${ref(label('anotherfakebook2023'))}.`,
    inline`You can have ${strong(inline`bold text`)} and ${emph(inline`italic text`)} and even ${raw('code snippets')}
if you need them.`,
    m.heading(1, 'Methodology'),
    'Explain how you did your work here. This section should describe your approach in detail.',
    m.heading(2, 'Your Subsection Title'),
    'Replace this with your actual methodology content.',
    m.heading(1, 'Results'),
    'Present your findings in this chapter. You could include tables, figures, and analysis here.',
    m.heading(1, 'Discussion'),
    inline`Discuss what your results mean and compare them with other work ${ref(label('yetanotherfake2022'))}.`,
    m.heading(1, 'Conclusions'),
    'Summarize your work and its contributions here.',
    m.heading(2, 'Future Work'),
    'Describe what could be done next to extend this work.',
  )
}
