// Converted from test/universe/corpus/orange-book.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  blocks,
  bottom,
  codeBlock,
  context,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  heading,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  ref,
  rgb,
  show,
  space,
  strong,
  sym,
  table,
  top,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const book = external('book')
  const part = define('part').pos('arg1', T.any).returns(T.any).external()
  const chapter = define('chapter')
    .pos('arg1', T.any)
    .named('image', T.any, null)
    .named('l', T.any, null)
    .returns(T.any)
    .external()
  const myBibliography = define('my-bibliography').pos('arg1', T.any).returns(T.any).external()
  const appendices = external('appendices')
  const makeIndex = define('make-index').named('title', T.any, null).returns(T.any).external()
  const index = define('index').pos('arg1', T.any).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const notation = define('notation').pos('arg1', T.content).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const proposition = define('proposition').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const exercise = define('exercise').pos('arg1', T.content).returns(T.any).external()
  const problem = define('problem').pos('arg1', T.content).returns(T.any).external()
  const vocabulary = define('vocabulary').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const scr = external('scr')
  const updateHeadingImage = define('update-heading-image').named('image', T.any, null).returns(T.any).external()
  const book_with = define('with')
    .named('author', T.any, null)
    .named('copyright', T.content, [])
    .named('cover', T.any, null)
    .named('date', T.any, null)
    .named('image-index', T.any, null)
    .named('lang', T.any, null)
    .named('list-of-figure-title', T.any, null)
    .named('list-of-table-title', T.any, null)
    .named('lowercase-references', T.any, null)
    .named('main-color', T.any, null)
    .named('part-style', T.any, null)
    .named('subtitle', T.any, null)
    .named('supplement-chapter', T.any, null)
    .named('supplement-part', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(book)
  const appendices_with = define('with')
    .pos('arg1', T.any)
    .named('hide-parent', T.any, null)
    .returns(T.any)
    .external(appendices)
  const solution = define('solution')
    .named('name', T.any, null)
    .pos('body', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  context{
    thmbox("solution","Solution",
    stroke: (left: 4pt + green),
    radius: 0em,
    inset: 0.65em,
    namefmt: x => [*--- #x.*],
    separator: h(0.2em),
    titlefmt: x => text(fill: green, weight: "bold", x),
    fill: green.lighten(90%), 
    base_level: 1)(name:name, body)
  }
}`,
    )
  return doc(
    importPackage('@preview/orange-book:0.7.1', [
      book,
      part,
      chapter,
      myBibliography,
      appendices,
      makeIndex,
      index,
      theorem,
      definition,
      notation,
      remark,
      corollary,
      proposition,
      example,
      exercise,
      problem,
      vocabulary,
      scr,
      updateHeadingImage,
    ]),
    show(
      book_with({
        title: 'Exploring the Physical Manifestation of Humanity’s Subconscious Desires',
        subtitle: 'A Practical Guide',
        date: datetime.today,
        author: 'Goro Akechi',
        mainColor: rgb('#F36619'),
        lang: 'en',
        cover: image(path('./background.svg')),
        imageIndex: image(path('./orange1.jpg')),
        listOfFigureTitle: 'List of Figures',
        listOfTableTitle: 'List of Tables',
        supplementChapter: 'Chapter',
        supplementPart: 'Part',
        partStyle: 0,
        copyright: blocks(
          'Copyright © 2023 Flavio Barisi',
          'PUBLISHED BY PUBLISHER',
          inline(link('https://github.com/flavio20002/typst-orange-template', 'TEMPLATE-WEBSITE')),
          inline`Licensed under the Apache 2.0 License (the “License”). You may not use this file except in compliance
with the License. You may obtain a copy of the License at ${link('https://www.apache.org/licenses/LICENSE-2.0')}.
Unless required by applicable law or agreed to in writing, software distributed under the License
is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied. See the License for the specific language governing permissions and limitations
under the License.`,
          inline(emph(inline`First printing, July 2023`)),
        ),
        lowercaseReferences: false,
      }),
    ),
    solution.decl,
    inline(part('Part One Title')),
    inline(
      chapter({ image: image(path('./orange2.jpg')), l: 'chap1' }, 'Sectioning Examples'),
      space,
      index('Sectioning'),
    ),
    m.lines(m.heading(2, 'Section Title'), inline(index('Sectioning!Sections'))),
    inline(
      lorem(50),
      space,
      footnote(inline`Footnote example text...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor
arcu luctus, imperdiet urna iaculis, mattis eros. Pellentesque iaculis odio vel nisl ullamcorper,
nec faucibus ipsum molestie.`),
    ),
    inline(lorem(50)),
    m.lines(m.heading(3, 'Subsection Title'), inline(index('Sectioning!Subsections'))),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    m.lines(m.heading(4, 'Subsubsection Title'), inline(index('Sectioning!Subsubsections'))),
    inline(lorem(100)),
    m.lines(
      m.heading(5, 'Paragraph Title'),
      inline(index('Sectioning!Paragraphs'), space, lorem(50), space, lorem(50), space, lorem(50)),
    ),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(lorem(50)),
    inline(
      heading({ level: 2, numbering: null, outlined: false }, 'Unnumbered Section'),
      space,
      heading({ level: 3, numbering: null, outlined: false }, 'Unnumbered Subsection'),
      space,
      heading({ level: 4, numbering: null, outlined: false }, 'Unnumbered Subsubsection'),
    ),
    m.lines(
      inline(updateHeadingImage({ image: image(path('./orange2.jpg')) })),
      m.heading(1, 'In-text Element Examples'),
    ),
    m.lines(
      m.heading(2, 'Referencing Publications'),
      inline`${index('Citation')} This statement requires citation ${ref(label('Smith:2022jd'))}; this one
is more specific ${ref({ supplement: inline`page.${sym.space.nobreak}162` }, label('Smith:2021qr'))}.`,
      m.heading(2, 'Link Examples'),
      inline`${index('Links')} This is a URL link: ${link('https://www.latextemplates.com', inline`LaTeX Templates`)}.
This is an email link: ${link('mailto:example@example.com', inline`example@example.com`)}. This
is a monospaced URL link: ${link('https://www.LaTeXTemplates.com')}.`,
      m.heading(2, 'Lists'),
      inline`${index('Lists')} Lists are useful to present information in a concise and/or ordered way.`,
      m.heading(3, 'Numbered List'),
      inline(index('Lists!Numbered List')),
      m.enum(
        m.item(
          m.lines(
            'First numbered item',
            m.enum(
              m.item(['First indented numbered item']),
              m.item(
                m.lines(
                  'Second indented numbered item',
                  m.enum(
                    m.item(['First second-level indented numbered item']),
                    m.item(['Second second-level indented numbered item']),
                  ),
                ),
              ),
            ),
          ),
        ),
        m.numbered(2, ['Second numbered item']),
        m.numbered(3, ['Third numbered item']),
      ),
      m.heading(3, 'Bullet Point List'),
      inline(index('Lists!Bullet Points')),
      m.list(
        m.item(
          m.lines(
            'First bullet point item',
            m.list(
              m.item(['First indented bullet point item']),
              m.item(
                m.lines(
                  'Second indented bullet point item',
                  m.list(m.item(['First second-level indented bullet point item'])),
                ),
              ),
            ),
          ),
        ),
        m.item(['Second bullet point item']),
        m.item(['Third bullet point item']),
      ),
      m.heading(3, 'Descriptions and Definitions'),
      inline(index('Lists!Descriptions and Definitions')),
      m.terms(m.term(['Name'], ['Definition']), m.term(['Word'], ['Definition']), m.term(['Comment'], ['Elaboration'])),
      m.heading(2, 'International Support'),
      inline`àáâäãåèéêëìíîïòóôöõøùúûüÿýñçˇcšž ${linebreak()} ÀÁÂÄÃÅÈÉÊËÌÍÎÏÒÓÔÖÕØÙÚÛÜŸÝÑ ${linebreak()} ßÇŒÆ
ˇCŠŽ`,
      m.heading(2, 'Ligatures'),
      'fi fj fl ffl ffi Ty',
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Referencing Chapters')), label('heading1'))),
      inline`${index('Referencing')} This statement references to another chapter ${ref(label('chap1'))}.
This statement references to another heading ${ref(label('heading1'))}. This statement references
to another heading ${ref(label('heading2'))}.`,
    ),
    inline(part('Part Two Title')),
    inline(chapter({ image: image(path('./orange2.jpg')) }, 'Mathematics')),
    m.lines(
      m.heading(2, 'Theorems'),
      inline(index('Theorems')),
      inline(labelled(heading({ depth: 3 }, inline('Several equations')), label('heading2'))),
      inline`${index('Theorems!Several equations')} This is a theorem consisting of several equations. ${theorem(
        { name: 'Name of the theorem' },
        inline`${space}In ${unsafeRaw.math`E=bb(R)^n`} all norms are equivalent. It has the properties: ${unsafeRaw.math.block`abs(norm(bold(x)) - norm(bold(y))) <= norm(bold(x-y))`}
${unsafeRaw.math.block`norm(sum_(i=1)^n bold(x)_i) <= sum_(i=1)^n norm(bold(x)_i) quad "where" n "is a finite integer"`}${space}`,
      )}`,
    ),
    m.lines(
      m.heading(3, 'Single Line'),
      inline`${index('Theorems!Single Line')} This is a theorem consisting of just one line. ${theorem(inline`${space}A set ${unsafeRaw.math`scr(D)(G)`} in dense in ${unsafeRaw.math`L^2(G)`}, ${unsafeRaw.math`|dot|_0`}.${space}`)}`,
      m.heading(2, 'Definitions'),
      inline`${index('Definitions')} A definition can be mathematical or it could define a concept. ${definition(
        { name: 'Definition name' },
        inline`${space}Given a vector space ${unsafeRaw.math`E`}, a norm on ${unsafeRaw.math`E`} is an application,
denoted ${unsafeRaw.math`norm(dot)`}, ${unsafeRaw.math`E`} in ${unsafeRaw.math`bb(R)^+ = [0,+∞[`}
such that: ${unsafeRaw.math.block`norm(bold(x)) = 0 arrow.r.double bold(x) = bold(0)`} ${unsafeRaw.math.block`norm(lambda bold(x)) = abs(lambda) dot norm(bold(x))`}
${unsafeRaw.math.block`norm(bold(x) + bold(y)) lt.eq norm(bold(x)) + norm(bold(y))`}${space}`,
      )}`,
      m.heading(2, 'Notations'),
      inline(index('Notations')),
    ),
    m.lines(
      inline(
        notation(
          blocks(
            m.lines(
              inline`Given an open subset ${unsafeRaw.math`G`} of ${unsafeRaw.math`bold(R)^n`}, the set of functions
${unsafeRaw.math`phi`} are: ${v({ weak: true }, em(0.5))}`,
              m.enum(
                m.item(['Bounded support', space, unsafeRaw.math`G`, ';']),
                m.item(['Infinitely differentiable;']),
              ),
              inline`${v({ weak: true }, em(0.5))} a vector space is denoted by ${unsafeRaw.math`scr(D)(G)`}.`,
            ),
          ),
        ),
      ),
      m.heading(2, 'Remarks'),
      inline`${index('Remarks')} This is an example of a remark.`,
    ),
    inline(
      remark(inline`${space}The concepts presented here are now in conventional employment in mathematics. Vector
spaces are taken over the field ${unsafeRaw.math`bb(K)=bb(R)`}, however, established properties
are easily extended to ${unsafeRaw.math`bb(K)=bb(C)`}.${space}`),
    ),
    m.lines(
      m.heading(2, 'Corollaries'),
      inline(
        index('Corollaries'),
        space,
        corollary(
          { name: 'Corollary name' },
          inline`${space}The concepts presented here are now in conventional employment in mathematics. Vector
spaces are taken over the field ${unsafeRaw.math`bb(K)=bb(R)`}, however, established properties
are easily extended to ${unsafeRaw.math`bb(K)=bb(C)`}.${space}`,
        ),
      ),
      m.heading(2, 'Propositions'),
      inline(index('Propositions')),
      m.heading(3, 'Several equations'),
      inline(index('Propositions!Several equations')),
    ),
    m.lines(
      inline(
        proposition(
          { name: 'Proposition name' },
          inline`${space}It has the properties: ${unsafeRaw.math.block`abs(norm(bold(x)) - norm(bold(y))) <= norm(bold(x-y))`}
${unsafeRaw.math.block`norm(sum_(i=1)^n bold(x)_i) <= sum_(i=1)^n norm(bold(x)_i) quad "where" n "is a finite integer"`}${space}`,
        ),
      ),
      m.heading(3, 'Single Line'),
      inline(index('Propositions!Single Line')),
    ),
    m.lines(
      inline(
        proposition(inline`${space}Let ${unsafeRaw.math`f,g in L^2(G)`}; if ${unsafeRaw.math`forall phi in scr(D) (G)`},
${unsafeRaw.math`(f,phi)_0=(g,phi)_0`} then ${unsafeRaw.math`f = g`}.${space}`),
      ),
      m.heading(2, 'Examples'),
      inline(index('Examples')),
      m.heading(3, 'Equation Example'),
      inline(
        index('Examples!Equation'),
        space,
        example(
          blocks(
            inline`Let ${unsafeRaw.math`G=\\(x in bb(R)^2:|x|<3\\)`} and denoted by: ${unsafeRaw.math`x^0=(1,1)`};
consider the function:`,
            inline(unsafeRaw.math.block`f(x) = cases(
    e^(abs(x)) quad & "si" |x-x^0| lt.eq 1 slash 2,
    0 & "si" |x-x^0| gt 1 slash 2
  )`),
            inline`The function ${unsafeRaw.math`f`} has bounded support, we can take ${unsafeRaw.math`A={x in bb(R)^2:|x-x^0| lt.eq 1 slash 2+ epsilon}`}
for all ${unsafeRaw.math`epsilon in lr(\\] 0\\;5 slash 2-sqrt(2) \\[, size: #70%)`}.`,
          ),
        ),
      ),
    ),
    m.lines(m.heading(3, 'Text Example'), inline(index('Examples!Text'))),
    inline(
      example(
        { name: 'Example name' },
        inline`${space}Aliquam arcu turpis, ultrices sed luctus ac, vehicula id metus. Morbi eu feugiat velit,
et tempus augue. Proin ac mattis tortor. Donec tincidunt, ante rhoncus luctus semper, arcu lorem
lobortis justo, nec convallis ante quam quis lectus. Aenean tincidunt sodales massa, et hendrerit
tellus mattis ac. Sed non pretium nibh. Donec cursus maximus luctus. Vivamus lobortis eros et
massa porta porttitor.${space}`,
      ),
    ),
    m.lines(
      m.heading(2, 'Exercises'),
      inline(
        index('Exercises'),
        space,
        exercise(inline`${space}This is a good place to ask a question to test learning progress or further cement ideas
into students' minds.${space}`),
      ),
      m.heading(2, 'Problems'),
      inline(index('Problems')),
    ),
    inline(problem(inline`${space}What is the average airspeed velocity of an unladen swallow?${space}`)),
    m.lines(m.heading(2, 'Vocabulary'), inline(index('Vocabulary'))),
    inline`Define a word to improve a students' vocabulary.`,
    inline(vocabulary({ name: 'Word' }, inline`${space}Definition of word.${space}`)),
    m.lines(
      inline(
        chapter(
          { image: image(path('./orange3.jpg')) },
          'Presenting Information and Results with a Long Chapter Title',
        ),
      ),
      m.heading(2, 'Table'),
      inline`${index('Table')} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor
arcu luctus, imperdiet urna iaculis, mattis eros. Pellentesque iaculis odio vel nisl ullamcorper,
nec faucibus ipsum molestie. Sed dictum nisl non aliquet porttitor. Etiam vulputate arcu dignissim,
finibus sem et, viverra nisl. Aenean luctus congue massa, ut laoreet metus ornare in. Nunc fermentum
nisi imperdiet lectus tincidunt vestibulum at ac elit. Nulla mattis nisl eu malesuada suscipit.`,
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Table caption.` },
            table(
              { columns: [auto, auto, auto], inset: pt(10), align: horizon },
              inline(strong(inline`Treatments`)),
              inline(strong(inline`Response 1`)),
              inline(strong(inline`Response 2`)),
              inline`Treatment 1`,
              inline`0.0003262`,
              inline`0.562`,
              inline`Treatment 2`,
              inline`0.0015681`,
              inline`0.910`,
              inline`Treatment 3`,
              inline`0.0009271`,
              inline`0.296`,
            ),
          ),
          space,
        ],
        label('table'),
      ),
    ),
    inline`Referencing ${ref(label('table'))} in-text using its label.`,
    m.lines(m.heading(2, 'Figure'), inline(index('Figure'))),
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent porttitor arcu luctus, imperdiet urna iaculis, mattis eros. Pellentesque iaculis odio vel nisl ullamcorper, nec faucibus ipsum molestie. Sed dictum nisl non aliquet porttitor. Etiam vulputate arcu dignissim, finibus sem et, viverra nisl. Aenean luctus congue massa, ut laoreet metus ornare in. Nunc fermentum nisi imperdiet lectus tincidunt vestibulum at ac elit. Nulla mattis nisl eu malesuada suscipit.',
    inline(
      labelled(
        [figure({ caption: inline`Figure caption.` }, image({ width: pct(50) }, path('creodocs_logo.svg'))), space],
        label('figure'),
      ),
    ),
    inline`Referencing ${ref(label('figure'))} in-text using its label and referencing ${ref(label('figure1'))}
in-text using its label.`,
    inline(
      labelled(
        [
          figure(
            { placement: top, caption: inline`Floating table.` },
            table(
              { columns: [auto, auto, auto], inset: pt(10), align: horizon },
              inline(strong(inline`Treatments`)),
              inline(strong(inline`Response 1`)),
              inline(strong(inline`Response 2`)),
              inline`Treatment 1`,
              inline`0.0003262`,
              inline`0.562`,
              inline`Treatment 2`,
              inline`0.0015681`,
              inline`0.910`,
              inline`Treatment 3`,
              inline`0.0009271`,
              inline`0.296`,
            ),
          ),
          space,
        ],
        label('table1'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { placement: bottom, caption: inline`Floating figure.` },
            image({ width: pct(100) }, path('creodocs_logo.svg')),
          ),
          space,
        ],
        label('figure1'),
      ),
    ),
    inline(myBibliography(bibliography(path('sample.bib')))),
    inline(makeIndex({ title: 'Index' })),
    show(appendices_with({ hideParent: false }, 'Appendices')),
    inline(chapter({ image: image(path('./orange2.jpg')) }, 'Appendix Chapter Title')),
    m.heading(2, 'Appendix Section Title'),
    inline(lorem(50)),
    inline(
      labelled(
        [figure({ caption: inline`Figure caption.` }, image({ width: pct(50) }, path('creodocs_logo.svg'))), space],
        label('figure_appendix'),
      ),
    ),
    inline(chapter({ image: image(path('./orange2.jpg')) }, 'Appendix Chapter Title')),
    m.heading(2, 'Appendix Section Title'),
    inline(lorem(50)),
    inline(
      labelled(
        [figure({ caption: inline`Figure caption.` }, image({ width: pct(50) }, path('creodocs_logo.svg'))), space],
        label('figure_appendix2'),
      ),
    ),
  )
}
