// Converted from test/universe/corpus/strath-maestrum.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  figure,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  pagebreak,
  path,
  raw,
  ref,
  set,
  show,
  space,
  table,
} from '../../../src/index.ts'

export default () => {
  const report = define('report')
    .pos('arg1', T.any)
    .named('abstract', T.content, [])
    .named('author', T.content, [])
    .named('class', T.content, [])
    .named('coverpage-image', T.any, null)
    .named('date', T.content, [])
    .named('header-image', T.any, null)
    .named('number', T.content, [])
    .named('supervisor', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/strath-maestrum:0.0.1', [report]),
    show((body, ctx) =>
      report(
        {
          class: inline`ME123: Introduction to Example Topic`,
          title: inline`Title of Interim Report`,
          author: inline`Joe Bloggs`,
          number: inline`202512345`,
          supervisor: inline`Dr Jane Doe`,
          date: inline(datetime.today().display('[day]/[month]/[year]')),
          abstract: inline(lorem(100)),
          coverpageImage: null,
          headerImage: null,
        },
        body,
      ),
    ),
    heading({ depth: 1 }, inline('Introduction')),
    heading({ depth: 2 }, inline('Sub-section')),
    heading({ depth: 3 }, inline('Sub-sub-section')),
    heading({ depth: 1 }, inline('Literature Review')),
    heading({ depth: 1 }, inline('Methodology')),
    inline(
      labelled(
        [
          figure(
            { caption: inline`How to insert a caption` },
            table(
              { columns: 3 },
              inline(),
              inline`Step`,
              inline`Comment`,
              inline`1`,
              inline`Add a ${raw('caption')} argument to ${raw('#figure')}`,
              inline`The ${raw('show')} rule sets the caption position`,
              inline`2`,
              inline`Add the caption text in square brackets`,
              inline`Add a ${raw('<tag>')} after the figure to reference it later`,
            ),
          ),
          space,
        ],
        label('tableexample'),
      ),
    ),
    m.lines(
      heading({ depth: 1 }, inline('Results')),
      inline(
        labelled(
          [
            figure(
              {
                caption: inline`The Caption pop out window from the References Tab in Microsoft Word ${ref(label('source'))}`,
              },
              image(path('MSWord.png')),
            ),
            space,
          ],
          label('screenshot'),
        ),
      ),
    ),
    heading({ depth: 1 }, inline('Discussion')),
    heading({ depth: 1 }, inline('Conclusion')),
    inline(
      pagebreak(),
      space,
      show(bibliography, set(heading, { numbering: '1.1.' })),
      space,
      bibliography({ title: inline`References` }, path('bib.yml')),
    ),
  )
}
