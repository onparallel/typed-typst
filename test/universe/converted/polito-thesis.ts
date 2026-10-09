// Converted from test/universe/corpus/polito-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  blocks,
  blue,
  counter,
  define,
  doc,
  em,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  outline,
  page,
  path,
  raw,
  rect,
  red,
  ref,
  right,
  set,
  show,
  smartquote,
  space,
  strong,
  table,
  text,
} from '../../../src/index.ts'

export default () => {
  const politoBlack = external('polito-black')
  const politoBlue = external('polito-blue')
  const politoOrange = external('polito-orange')
  const politoThesis = external('polito-thesis')
  const opinionatedPolitoStyle = external('opinionated-polito-style')
  const politoThesis_with = define('with')
    .named('academic-year', T.any, null)
    .named('appendix', T.content, [])
    .named('bibliography', T.any, null)
    .named('cover-font', T.any, null)
    .named('custom-outline', T.content, [])
    .named('degree-name', T.any, null)
    .named('graduation-session', T.any, null)
    .named('heading-font', T.any, null)
    .named('student-name', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisors', T.any, null)
    .named('text-font', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(politoThesis)
  return doc(
    importPackage('@preview/polito-thesis:0.1.3', [
      politoBlack,
      politoBlue,
      politoOrange,
      politoThesis,
      opinionatedPolitoStyle,
    ]),
    show(
      politoThesis_with({
        title: inline`Tesi di Laurea`,
        subtitle: inline`With support for English and Italian`,
        degreeName: 'Typst Engineering',
        academicYear: '2025/2026',
        graduationSession: 'May 2026',
        studentName: 'Mario Rossi',
        supervisors: [
          blocks(m.lines(set(align, { alignment: right }), inline`Mario Rossi${linebreak()} (Politecnico di Torino)`)),
          blocks(m.lines(set(align, { alignment: right }), inline`Maria Bianchi ${linebreak()} (Company)`)),
        ],
        coverFont: 'Poppins',
        headingFont: 'Poppins',
        textFont: 'Libertinus Serif',
        bibliography: bibliography(path('test.bib')),
        customOutline: inline(
          space,
          counter(page).update(1),
          space,
          show(heading, set(text, { size: em(2) })),
          space,
          set(page, { numbering: 'i' }),
          space,
          outline(),
          space,
        ),
        appendix: blocks(
          m.heading(1, 'Appendix'),
          m.lines(inline(labelled(heading({ depth: 2 }, inline('Lorem')), label('appendix'))), inline(lorem(300))),
          m.lines(m.heading(2, 'Lorem2'), inline(lorem(30))),
        ),
      }),
    ),
    show(opinionatedPolitoStyle),
    m.heading(1, 'How to use this package'),
    inline`Please refer to this page on how to use Politecnico's image propertly, which are the suggested
fonts and where to download them (see below for more information about using different fonts
in typst):`,
    m.lines(
      show(link, set(text, { fill: blue })),
      inline(link('https://www.polito.it/ateneo/chi-siamo/immagine-coordinata-e-marchio')),
    ),
    inline(
      strong(inline`By default mandatory missing fields of the cover page will default to a ${text({ fill: red }, inline`red warning`)}.
In case you want to remove the whole field (for example you do not want to show the graduation
session) you can set it to ${raw('none')} (e.g. ${raw('graduation-session: none')})`),
    ),
    'Speficy the following fields:',
    m.list(
      m.item([raw('title'), ': The title of your thesis']),
      m.item([raw('subtitle'), ': Optional subtitle']),
      m.item([raw('student-name'), ': Name of the student/author']),
      m.item([
        raw('lang'),
        ': language of the document',
        space,
        smartquote({ double: true }),
        'en',
        smartquote({ double: true }),
        space,
        'or',
        space,
        smartquote({ double: true }),
        'it',
        smartquote({ double: true }),
      ]),
      m.item([raw('student-gender'), ': Optional gender of the student used only if', space, raw('lang = "it"')]),
      m.item([raw('degree-name'), ': Name of your degree']),
      m.item([
        raw('supervisors'),
        ': List of the supervisors (relatori), must always be a list even if there is a single name. For example',
        space,
        raw('("Mario Rossi", )'),
      ]),
      m.item([
        raw('academic-year'),
        ':',
        space,
        smartquote({ double: true }),
        '20xx/20xx',
        smartquote({ double: true }),
      ]),
      m.item([
        raw('graduation-session'),
        ': Month and year of the graduation session. Set this to',
        space,
        raw('none'),
        space,
        'to remove this line from the cover.',
      ]),
      m.item([
        raw('for-print'),
        ': Optional, if',
        space,
        raw('true'),
        space,
        'the left margin of the page will be increased to account for binding',
      ]),
      m.item([
        raw('bibliography'),
        ': Optional, result of the',
        space,
        raw('bibliography()'),
        space,
        'function of typst, this allows proper stilying of the bibliography.',
      ]),
      m.item([
        raw('custom-outline'),
        ': Optional, if not present defaults to the table of contents. If present, the user can specify anything that is placed between the title and the first chapter',
      ]),
      m.item([
        raw('appendix'),
        ': Optional, can be used to create an appendix with different heading numbering before the bibliography.',
      ]),
    ),
    inline(labelled(heading({ depth: 2 }, inline('Fonts')), label('fonts'))),
    'Fonts for the following elements can be customized independently, for example:',
    m.list(
      m.item([raw('cover-font'), ':', space, raw('"Poppins"'), ',']),
      m.item([raw('heading-font'), ':', space, raw('"Poppins"'), ',']),
      m.item([raw('text-font'), ':', space, raw('"Libertinus Serif"')]),
    ),
    inline`${strong(inline`Refer to the following link to know how to install new fonts`)}:`,
    inline(link('https://typst.app/docs/reference/text/text/#parameters-font')),
    m.heading(2, 'Opinionated stilying'),
    m.lines(
      inline`Add ${raw('#show: opinionated-polito-style')} at the top of your document to apply the following
changes to the document:`,
      m.list(
        m.item(['Equation numbering resets after each chapter']),
        m.item(['First line of each paragraph is indented']),
        m.item(['Remove numbering from level 4 headings']),
        m.item(['Automatic figure placement (to the top and bottom of the pages)']),
      ),
    ),
    m.heading(2, 'Colors'),
    m.lines(
      'You can import the default suggested colors from this same template as',
      m.list(
        m.item([text({ fill: politoBlack }, raw('polito-black'))]),
        m.item([text({ fill: politoBlue }, raw('polito-blue'))]),
        m.item([text({ fill: politoOrange }, raw('polito-orange'))]),
      ),
    ),
    inline`Check them out in ${ref(label('fig:colors'))}`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Available colors.` },
            table(
              { stroke: null, columns: 3, columnGutter: em(1), rowGutter: em(1) },
              rect({ fill: politoBlack }),
              rect({ fill: politoBlue }),
              rect({ fill: politoOrange }),
              inline(raw('polito-black')),
              inline(raw('polito-blue')),
              inline(raw('polito-orange')),
            ),
          ),
          space,
        ],
        label('fig:colors'),
      ),
    ),
    m.heading(2, 'Example sub-chapter'),
    m.heading(4, 'A level 4 heading'),
    inline(lorem(40), space, ref(label('andersonTheoryDirtySuperconductors1959'))),
    m.lines(m.heading(3, lorem(10)), inline(lorem(15))),
    m.heading(1, 'Another chapter'),
    inline`Check out the ${ref(label('appendix'))}`,
    inline(lorem(500)),
  )
}
