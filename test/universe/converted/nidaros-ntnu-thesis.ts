// Converted from test/universe/corpus/nidaros-ntnu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  blocks,
  center,
  cm,
  define,
  doc,
  em,
  external,
  figure,
  horizon,
  importPackage,
  inline,
  label,
  labelled,
  m,
  pagebreak,
  path,
  pct,
  pt,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ntnuThesis = external('ntnu-thesis')
  const titlePage = define('title-page')
    .named('author', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('date', T.any, null)
    .named('department', T.any, null)
    .named('faculty', T.any, null)
    .named('programme', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const frontMatter = define('front-matter').pos('arg1', T.content).returns(T.any).external()
  const frontChapter = define('front-chapter').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const contents = define('contents').returns(T.any).external()
  const mainMatter = define('main-matter')
    .pos('arg1', T.content)
    .named('short-title', T.content, [])
    .returns(T.any)
    .external()
  const references = define('references').pos('arg1', T.content).returns(T.any).external()
  const appendices = define('appendices').pos('arg1', T.content).returns(T.any).external()
  const ntnuThesis_with = define('with')
    .named('author', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(ntnuThesis)
  return doc(
    importPackage('@preview/nidaros-ntnu-thesis:0.1.0', [
      ntnuThesis,
      titlePage,
      frontMatter,
      frontChapter,
      contents,
      mainMatter,
      references,
      appendices,
    ]),
    show(ntnuThesis_with({ title: inline`The title of your master's thesis`, author: 'Your Name' })),
    inline(
      titlePage({
        author: 'Your Name',
        title: "The title of your master's thesis should be written here",
        subtitle: 'Any undertitle is written here',
        programme: "Master's thesis in Physics and Mathematics",
        supervisor: 'Supervisor Name',
        coSupervisor: 'Co-supervisor Name',
        date: 'June 2026',
        faculty: 'Faculty of Natural Sciences',
        department: 'Department of Physics',
      }),
    ),
    inline(
      frontMatter(
        blocks(
          inline(
            frontChapter(
              'Abstract',
              blocks(
                'Write an abstract/summary of your thesis, and state your main findings here.',
                'A summary should be included in both English and a second language if this is applicable.',
              ),
            ),
          ),
          inline(pagebreak()),
          inline(
            frontChapter(
              'Preface',
              inline`${space}Write the preface of your thesis here. You may include acknowledgements and thanks as
part of your preface.${space}`,
            ),
          ),
          inline(pagebreak()),
          inline(contents()),
          inline(
            frontChapter(
              'Abbreviations',
              blocks(
                'List abbreviations in alphabetic order:',
                m.list(
                  m.item([strong(inline`EDA`), space, 'Exploratory Data Analysis']),
                  m.item([strong(inline`GNSS`), space, 'Global Navigation Satellite System']),
                  m.item([strong(inline`NTNU`), space, 'Norwegian University of Science and Technology']),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      mainMatter(
        { shortTitle: inline`The title` },
        blocks(
          m.heading(1, 'Introduction'),
          m.heading(2, 'Motivation'),
          inline`This is the beginning of your thesis. Cite sources with ${raw('@knuth1984texbook')} and reference
figures with labels.`,
          m.heading(2, 'Project Description'),
          'Typst lets you write chapters, sections, figures, equations, tables, citations, and references with compact markup.',
          m.heading(3, 'Stakeholders'),
          'Add your thesis text here.',
          m.heading(1, 'Theory'),
          m.heading(2, 'Equations'),
          'Numbered equations follow the current chapter:',
          inline(unsafeRaw.math.block`integral_0^1 x^2 dif x = 1 / 3`),
          m.heading(2, 'Tables and Footnotes'),
          inline(
            labelled(
              [
                figure(
                  { caption: inline`Dynamic feature statistics with outliers` },
                  table(
                    { columns: 3 },
                    inline`Feature`,
                    inline`Mean`,
                    inline`Std. dev.`,
                    inline`Speed`,
                    inline`12.4`,
                    inline`2.1`,
                    inline`Altitude`,
                    inline`108.0`,
                    inline`14.3`,
                  ),
                ),
                space,
              ],
              label('tab-stats'),
            ),
          ),
          inline`See ${ref(label('tab-stats'))} for a compact table.`,
          m.heading(2, 'A Single Figure'),
          inline(
            labelled(
              [
                figure(
                  { caption: inline`Illustration of latitude and longitude` },
                  rect(
                    { width: pct(70), height: cm(5), stroke: pt(0.8), inset: em(1) },
                    inline(space, align(add(center, horizon), inline`Figure placeholder`), space),
                  ),
                ),
                space,
              ],
              label('fig-latlong'),
            ),
          ),
          inline`See ${ref(label('fig-latlong'))} for a figure reference.`,
          m.heading(2, 'Citations'),
          inline`This sentence cites ${ref(label('knuth1984texbook'))}.`,
          m.heading(1, 'Methods'),
          m.heading(2, 'Section One'),
          'Method text goes here.',
          m.heading(3, 'Subsection One'),
          'More method text goes here.',
          m.heading(3, 'Subsection Two'),
          'More method text goes here.',
          m.heading(2, 'Section Two'),
          'Add more thesis content here.',
          m.heading(1, 'Results'),
          m.heading(2, 'More Figures'),
          inline(
            labelled(
              [
                figure(
                  { caption: inline`Trajectory angle` },
                  rect(
                    { width: pct(72), height: cm(5), stroke: pt(0.8), inset: em(1) },
                    inline(space, align(add(center, horizon), inline`Result figure placeholder`), space),
                  ),
                ),
                space,
              ],
              label('fig-trajectory'),
            ),
          ),
          m.heading(1, 'Discussion'),
          m.heading(2, 'Future Work'),
          'Discuss limitations, implications, and future work.',
          m.heading(1, 'Conclusions'),
          'Conclude your thesis here.',
          inline(
            references(
              inline(space, bibliography({ title: 'References', style: 'ieee' }, path('bibliography.bib')), space),
            ),
          ),
        ),
      ),
    ),
    inline(
      appendices(
        blocks(
          m.heading(1, 'Github Repository'),
          'Add appendix material here.',
          m.heading(1, 'Sidenote Statistics'),
          'Add additional tables, figures, or notes here.',
        ),
      ),
    ),
  )
}
