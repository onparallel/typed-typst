// Converted from test/universe/corpus/cthesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  dict,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  lorem,
  m,
  path,
  pct,
  pt,
  rect,
  ref,
  set,
  show,
  strong,
  table,
  text,
} from '../../../src/index.ts'

export default () => {
  const cthThesis = external('cth-thesis')
  const appendix = external('appendix')
  const caption = define('caption').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const cthThesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstracts', T.any, null)
    .named('acknowledgments', T.any, null)
    .named('advisor', T.any, null)
    .named('authors', T.any, null)
    .named('co-examiner', T.any, null)
    .named('cover', T.any, null)
    .named('department', T.any, null)
    .named('examiner', T.any, null)
    .named('gu', T.any, null)
    .named('keywords', T.any, null)
    .named('nomenclature', T.any, null)
    .named('preface', T.any, null)
    .named('print', T.any, null)
    .named('program', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(cthThesis)
  return doc(
    importPackage('@preview/cthesis:0.1.0', [cthThesis, appendix, caption]),
    set(text, { lang: 'en' }),
    show(
      cthThesis_with({
        title: 'Unofficial Thesis Template for Chalmers University of Technology',
        type: 'master',
        gu: true,
        subtitle: 'Optional Subtitle',
        authors: ['First Author', 'Second Author'],
        program: '[program]',
        department: '[department]',
        abstracts: { en: lorem(75), sv: lorem(75) },
        keywords: ['chalmers', 'typst', 'thesis', 'template'],
        supervisors: ["[supervisor's name]"],
        examiner: "[examiner's name]",
        advisor: "[optional advisor's name]",
        coExaminer: "[optional co-examiner's name]",
        cover: { image: inline(), description: '[optional cover image]' },
        preface: lorem(75),
        acknowledgments: lorem(75),
        year: datetime.today().year(),
        abbreviations: { CTH: 'Chalmers Tekniska Högskola', GU: 'Göteborgs Universitet' },
        nomenclature: dict({
          'Category A': { A1: lorem(5), A2: lorem(5) },
          'Category B': { B1: lorem(5), B2: lorem(5) },
        }),
        print: false,
      }),
    ),
    m.lines(m.heading(1, 'Introduction'), inline(lorem(30))),
    m.lines(
      m.heading(2, 'Figures'),
      inline(
        figure(
          {
            caption: caption(
              inline`Example figure with a long description and reference ${ref(label('ChalmersUniversityWebsite'))}.`,
              inline`Example figure with a short description.`,
            ),
          },
          rect({ width: pct(50), height: pt(100), stroke: { dash: 'dashed' } }),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Tables'),
      inline(
        figure(
          { caption: 'Example table' },
          table(
            { columns: 2 },
            inline(strong(inline`Column A`)),
            inline(strong(inline`Column B`)),
            inline`1`,
            inline(lorem(5)),
            inline`2`,
            inline(lorem(6)),
          ),
        ),
      ),
    ),
    inline(bibliography(path('references.yaml'))),
    m.lines(show(appendix), m.heading(1, 'Appendix')),
  )
}
