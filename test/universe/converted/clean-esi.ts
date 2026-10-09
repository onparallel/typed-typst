// Converted from test/universe/corpus/clean-esi.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  contentBlock,
  define,
  doc,
  external,
  heading,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  set,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const tableOfContents = define('table-of-contents').returns(T.any).external()
  const listOfFigures = define('list-of-figures').returns(T.any).external()
  const listOfTables = define('list-of-tables').returns(T.any).external()
  const mainContent = define('main-content').pos('arg1', T.content).returns(T.any).external()
  const partDivider = define('part-divider')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const numberedPart = define('numbered-part').pos('arg1', T.content).returns(T.any).external()
  const appendixContent = define('appendix-content').pos('arg1', T.content).returns(T.any).external()
  const thesis_with = define('with')
    .named('authors', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('defense-date', T.any, null)
    .named('degree-type', T.any, null)
    .named('host-organization', T.any, null)
    .named('jury', T.any, null)
    .named('logo', T.any, null)
    .named('option', T.any, null)
    .named('promotion', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/clean-esi:0.1.0', [
      thesis,
      tableOfContents,
      listOfFigures,
      listOfTables,
      mainContent,
      partDivider,
      numberedPart,
      appendixContent,
    ]),
    show(
      thesis_with({
        title: 'Your Thesis Title',
        authors: ['Surname Name'],
        supervisor: 'Dr. Supervisor Name (ESI)',
        coSupervisor: ['Dr. Co-supervisor Name (Host Organization)'],
        option: 'Computer Systems and Software (SL)',
        degreeType: 'State Engineer Diploma in Computer Science',
        hostOrganization: 'Host Organization',
        promotion: '2025/2026',
        defenseDate: 'DD/MM/YYYY',
        jury: [
          ['Dr. President Name', 'ESI', 'President'],
          ['Dr. Reviewer Name', 'ESI', 'Reviewer'],
          ['Dr. Examiner Name', 'ESI', 'Examiner'],
        ],
        logo: null,
      }),
    ),
    m.lines(
      includeFile('frontmatter/dedication.typ'),
      includeFile('frontmatter/acknowledgments.typ'),
      includeFile('frontmatter/abstracts.typ'),
    ),
    inline(tableOfContents(), space, listOfFigures(), space, listOfTables()),
    includeFile('frontmatter/abbreviations.typ'),
    inline(
      mainContent(
        blocks(
          inline(
            contentBlock(
              blocks(m.lines(set(heading, { numbering: null }), includeFile('chapters/00-introduction.typ'))),
            ),
          ),
          inline(
            partDivider(
              'Part I',
              'State of the Art',
              inline`${space}A short paragraph summarising what this part covers.${space}`,
            ),
            space,
            numberedPart(blocks(includeFile('chapters/01-state-of-the-art.typ'))),
          ),
          inline(
            partDivider(
              'Part II',
              'Contributions',
              inline`${space}A short paragraph summarising the contributions presented in this part.${space}`,
            ),
            space,
            numberedPart(blocks(includeFile('chapters/02-contribution.typ'))),
          ),
          inline(
            contentBlock(blocks(m.lines(set(heading, { numbering: null }), includeFile('chapters/99-conclusion.typ')))),
          ),
          inline(bibliography({ style: 'apa' }, path('refs.bib'))),
          inline(appendixContent(blocks(includeFile('appendices/a-supplementary.typ')))),
        ),
      ),
    ),
  )
}
