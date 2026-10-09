// Converted from test/universe/corpus/scribbling-hm.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  figure,
  footnote,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  lorem,
  m,
  pagebreak,
  path,
  raw,
  ref,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const studyName = external('study-name')
  const todo = define('todo').pos('arg1', T.content).returns(T.any).external()
  const abbreviationsList = external('abbreviations-list')
  const variablesList = external('variables-list')
  const thesis_with = define('with')
    .named('abbreviations-list', T.any, null)
    .named('abstract', T.any, null)
    .named('abstract-translation', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bib', T.any, null)
    .named('birth-date', T.any, null)
    .named('blocking', T.any, null)
    .named('draft', T.any, null)
    .named('examiner-gender', T.any, null)
    .named('gender', T.any, null)
    .named('language', T.any, null)
    .named('layout-mode', T.any, null)
    .named('semester', T.any, null)
    .named('student-id', T.any, null)
    .named('study-group', T.any, null)
    .named('study-name', T.any, null)
    .named('submission-date', T.any, null)
    .named('supervisors', T.any, null)
    .named('title', T.any, null)
    .named('title-translation', T.any, null)
    .named('variables-list', T.any, null)
    .returns(T.any)
    .external(thesis)
  const studyName_IFB = external('IFB', studyName)
  return doc(
    importPackage('@preview/scribbling-hm:0.1.12', [thesis, studyName, todo]),
    m.lines(importFile('abbreviations.typ', [abbreviationsList]), importFile('variables.typ', [variablesList])),
    show(
      thesis_with({
        title: lorem(15),
        titleTranslation: lorem(12),
        language: 'de',
        studyName: studyName_IFB,
        submissionDate: datetime.today(),
        studentId: 12345678,
        author: 'Erika Mustermann',
        supervisors: 'Prof. Dr. Max Mustermann',
        semester: 'WiSe 2025/26',
        studyGroup: 'IF7',
        birthDate: datetime({ year: 2000, day: 1, month: 1 }),
        abstract: null,
        abstractTranslation: null,
        blocking: true,
        gender: 'w',
        examinerGender: 'm',
        bib: bibliography({ title: null }, path('references.bib')),
        abbreviationsList: abbreviationsList,
        variablesList: variablesList,
        appendix: includeFile('appendix.typ'),
        draft: true,
        layoutMode: 'bound',
      }),
    ),
    m.lines(
      m.heading(1, 'Section'),
      m.heading(2, 'Subsection'),
      inline`This ${ref(label('typst'))} ${ref(label('typst_doc'))} formatting is defined in the variables
list. It is processed by a ${ref(label('cpu'))}. Another sentence using ${ref(label('cpu'))}.
${footnote(inline`A third ${ref(label('cpu'))} sentence maybe?`)}`,
    ),
    inline(todo(inline`Mehr Text`)),
    'Bullet points are indented by default:',
    m.list(
      m.item(['first']),
      m.item(m.lines('second', m.list(m.item(['first']), m.item(['second'])))),
      m.item(['third']),
    ),
    'Numbered lists too:',
    m.enum(
      m.item(['first']),
      m.item(m.lines('second', m.enum(m.item(['first']), m.item(['second'])))),
      m.item(['third']),
    ),
    inline(lorem(20)),
    inline(
      figure(
        { caption: inline`"Hello World" in Rust` },
        raw({ block: true, lang: 'rust' }, 'fn main() {\n    println!("Hello World!");\n}'),
      ),
    ),
    m.lines(m.heading(1, 'Another Section'), inline(lorem(40))),
    inline(pagebreak()),
    inline(lorem(200), space, pagebreak()),
    inline(lorem(200)),
  )
}
