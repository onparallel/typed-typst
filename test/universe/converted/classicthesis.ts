// Converted from test/universe/corpus/classicthesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  auto,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  importPackage,
  inline,
  raw,
  show,
  space,
  strong,
  table,
} from '../../../src/index.ts'

export default () => {
  const classicthesis = external('classicthesis')
  const part = define('part').pos('arg1', T.any).named('preamble', T.content, []).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const classicthesis_with = define('with')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(classicthesis)
  return doc(
    importPackage('@preview/classicthesis:0.1.0', [classicthesis, part, definition, theorem, example, remark]),
    show(
      classicthesis_with({
        title: 'Your Book Title',
        subtitle: 'A Subtitle for Your Work',
        author: 'Your Name',
        date: '2025',
      }),
    ),
    inline(
      part(
        {
          preamble: inline`${space}This part introduces the fundamentals. You can add a preamble to each part that appears
on the part title page.${space}`,
        },
        'Getting Started',
      ),
    ),
    heading({ depth: 1 }, inline('Introduction')),
    inline`This is your first chapter. ClassicThesis uses spaced small caps for chapter and section headings,
following the typographic principles outlined in Robert Bringhurst's ${emph(inline`The Elements of Typographic Style`)}.`,
    heading({ depth: 2 }, inline('Your First Section')),
    inline`Here's some example text. Notice how the section heading uses elegant spaced small caps.`,
    heading({ depth: 3 }, inline('A Subsection')),
    'Subsections use italic text for a subtle hierarchy.',
    inline(
      definition(
        { title: 'Important Concept' },
        inline`${space}A definition block with a distinctive left border. Use this to define key terms in your
work.${space}`,
      ),
    ),
    inline(
      theorem(
        { title: 'Main Result' },
        inline`${space}A theorem block for stating important results. The numbering is automatic.${space}`,
      ),
    ),
    inline(
      example(
        { title: 'Practical Application' },
        inline`${space}An example block with a subtle gray background. Use this to illustrate concepts with
concrete examples.${space}`,
      ),
    ),
    inline(
      remark(inline`${space}A remark block for additional observations or notes that don't fit the formal structure
of theorems and definitions.${space}`),
    ),
    heading({ depth: 2 }, inline('Code Examples')),
    inline`Inline code looks like ${raw('this')}, and code blocks are formatted cleanly:`,
    inline(
      raw(
        { block: true, lang: 'python' },
        'def hello_world():\n    """A simple function."""\n    print("Hello, ClassicThesis!")',
      ),
    ),
    heading({ depth: 2 }, inline('Tables and Figures')),
    inline(
      figure(
        { caption: inline`A sample table with clean styling.` },
        table(
          { columns: [auto, auto, auto] },
          table.header(
            inline(strong(inline`Item`)),
            inline(strong(inline`Description`)),
            inline(strong(inline`Value`)),
          ),
          inline`Alpha`,
          inline`First item`,
          inline`100`,
          inline`Beta`,
          inline`Second item`,
          inline`200`,
          inline`Gamma`,
          inline`Third item`,
          inline`300`,
        ),
      ),
    ),
    inline(part('Advanced Topics')),
    heading({ depth: 1 }, inline('Another Chapter')),
    'Continue your document with more chapters. Each chapter starts on a new page with the elegant ClassicThesis heading style.',
    heading({ depth: 2 }, inline('References and Citations')),
    'Add your bibliography and citations as needed.',
    heading({ depth: 1 }, inline('Conclusion')),
    'Wrap up your work with a conclusion chapter.',
  )
}
