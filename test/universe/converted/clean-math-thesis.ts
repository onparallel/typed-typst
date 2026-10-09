// Converted from test/universe/corpus/clean-math-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  pct,
  show,
} from '../../../src/index.ts'

export default () => {
  const template = external('template')
  const color1 = external('color1')
  const color2 = external('color2')
  const color3 = external('color3')
  const template_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('body-font', T.any, null)
    .named('cover-color', T.any, null)
    .named('cover-font', T.any, null)
    .named('deadline', T.any, null)
    .named('degree', T.any, null)
    .named('equate-settings', T.any, null)
    .named('equation-numbering-pattern', T.any, null)
    .named('heading-color', T.any, null)
    .named('institute', T.any, null)
    .named('institute-logo', T.any, null)
    .named('link-color', T.any, null)
    .named('program', T.any, null)
    .named('supervisor1', T.any, null)
    .named('supervisor2', T.any, null)
    .named('title', T.any, null)
    .named('uni-logo', T.any, null)
    .named('university', T.any, null)
    .returns(T.any)
    .external(template)
  return doc(
    importPackage('@preview/clean-math-thesis:0.4.0', [template]),
    importFile('customization/colors.typ', [color1, color2, color3]),
    show(
      template_with({
        author: 'Stuart Dent',
        title: 'My Very Fancy and Good-Looking Thesis About Interesting Stuff',
        supervisor1: 'Prof. Dr. Sue Persmart',
        supervisor2: 'Prof. Dr. Ian Telligent',
        degree: 'Example',
        program: 'Example-Studies',
        university: 'Example University',
        institute: 'Example Institute',
        deadline: datetime.today().display(),
        uniLogo: image({ width: pct(50) }, path('images/logo_placeholder.svg')),
        instituteLogo: image({ width: pct(50) }, path('images/logo_placeholder.svg')),
        bodyFont: 'Libertinus Serif',
        coverFont: 'Libertinus Serif',
        abstract: includeFile('chapter/abstract.typ'),
        equateSettings: { breakable: true, subNumbering: true, numberMode: 'label' },
        equationNumberingPattern: '(1.1)',
        coverColor: color1,
        headingColor: color2,
        linkColor: color3,
      }),
    ),
    m.lines(
      includeFile('chapter/introduction.typ'),
      includeFile('chapter/dummy_chapter.typ'),
      includeFile('chapter/conclusions_outlook.typ'),
      includeFile('chapter/appendix.typ'),
    ),
    inline(bibliography(path('References.bib'))),
    includeFile('chapter/declaration.typ'),
  )
}
