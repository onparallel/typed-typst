// Converted from test/universe/corpus/sudo-docs.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  external,
  importPackage,
  inline,
  left,
  lorem,
  m,
  pagebreak,
  raw,
  rgb,
  right,
  show,
  smartquote,
  space,
  strong,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const project = external('project')
  const img = define('img')
    .pos('arg1', T.any)
    .named('alt', T.any, null)
    .named('desc', T.any, null)
    .named('pos', T.any, null)
    .named('width', T.any, null)
    .returns(T.any)
    .external()
  const adtCard = define('adt-card')
    .named('desc', T.content, [])
    .named('funcs', T.content, [])
    .named('image', T.any, null)
    .named('impl', T.content, [])
    .named('name', T.any, null)
    .returns(T.any)
    .external()
  const algoCard = define('algo-card')
    .named('complexity', T.content, [])
    .named('desc', T.content, [])
    .named('image', T.any, null)
    .named('name', T.any, null)
    .named('pseudo', T.content, [])
    .named('use-cases', T.content, [])
    .named('working', T.content, [])
    .returns(T.any)
    .external()
  const project_with = define('with')
    .named('affiliation', T.any, null)
    .named('author', T.any, null)
    .named('lang', T.any, null)
    .named('logo', T.any, null)
    .named('main-color', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('toc', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    m.lines(
      importPackage('@preview/sudo-docs:0.1.0', [project, img, adtCard, algoCard]),
      show(
        project_with({
          title: 'sudo_docs Template',
          subtitle: 'for beautiful computer science notes',
          author: ['John Smith', 'Jane Doe'],
          affiliation: 'example university',
          year: 'A.Y. 2025-2026',
          toc: true,
          lang: 'en',
          mainColor: rgb('#4d1d14'),
          logo: 'logo.png',
        }),
      ),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      inline`Welcome to ${strong(inline`sudo_docs`)}, a minimalist, cs-centric Typst template designed for
Computer Science students who also happen to like having clean, colorful notes.`,
    ),
    inline`This document demonstrates the visual style and capabilities of the template. The font used
for the text is ${strong(inline`IBM Plex Mono`)}, giving it a distinctive "terminal" look, while
the code blocks use ${strong(inline`Fira Code`)} (or ${strong(inline`Cascadia Code`)}) for better
readability.`,
    m.lines(
      m.heading(2, 'How to use this template'),
      inline`To use this template, simply import it at the top of your ${raw('.typ')} file:`,
    ),
    inline`${raw({ block: true, lang: 'typst' }, '// Use * to import the project function, img, and the custom cards\n#import "sudodocs.typ": *\n\n#show: project.with(\n  title: "My Project",\n  author: "My Name",\n  toc: true,\n  is-appendix: false, // set to true to reset counters for appendices\n  main-color: rgb("#4d1d14") // optional custom color\n  lang: "en" // "en" for English, "it" for Italian\n)')}
The template natively supports multiple languages (currently English "en" and Italian "it").
By changing the lang parameter in the project setup, Typst will automatically adjust hyphenation
rules, translate default elements (such as turning "Table of Contents" into "Indice"), and seamlessly
translate all the internal labels of the CS "Identity Cards" (${raw('#adt-card')} and ${raw('#algo-card')}).`,
    m.lines(
      m.heading(3, 'Table of Contents & Sections'),
      inline`If you have a large document and want your Table of Contents to stop before a certain section
(like an Appendix), simply write the ${raw('<new-section>')} label anywhere in your file where
the main content ends. The TOC will automatically stop tracking headings past that point. If
you want to create a dedicated appendix document with its own TOC and reset page numbers, you
can just set ${raw('is-appendix: true')} in the project configuration.`,
    ),
    m.lines(
      m.heading(2, 'Lists'),
      'The lists are styled according to the main color of the template, that is customable at line 13 through a RGB code.',
    ),
    m.list(m.item(['First item']), m.item(['Second item']), m.item(['Third item'])),
    m.enum(m.numbered(1, ['First item']), m.numbered(2, ['Second item']), m.numbered(3, ['Third item'])),
    m.heading(2, 'Code'),
    inline`Here is an example of inline code: var x int. For code blocks: ${raw({ block: true, lang: 'go' }, 'func main() {\n    fmt.Println("hello world")\n}')}`,
    'The code block has a stroke that matches the main color of the template that you can modify.',
    m.heading(2, 'Image alignment'),
    'This is a short tutorial on how to use the img function:',
    inline`The image automatically centers if you don't specify any parameters; ${img({ width: cm(4), alt: 'alt text here', desc: 'centered image' }, 'logo.png')}`,
    inline`You can align an image to the left using the pos (position) and width parameters. You can define
size and position easily instead of using typst functions easily. ${img({ width: cm(4), pos: left }, 'logo.png')}
${img({ width: cm(4), pos: right }, 'logo.png')}`,
    'Description for images is only available for centered images due to space requirements.',
    'This is an easy way to add images of graphs, data or add specific smaller images such as icons or small doodles from your classes.',
    m.lines(
      m.heading(
        2,
        'CS',
        ' ',
        smartquote({ double: true }),
        'Identity Cards',
        smartquote({ double: true }),
        ' ',
        '(ADT & Algorithms)',
      ),
      inline`This template includes two special functions designed specifically for Computer Science notes:
${adtCard} and ${algoCard}. They create beautiful, structured summary boxes that automatically
match your main-color for data structures and algorithms. You can create your own by forking
this template's repo and modifying the lib.typ file and changing this function's name and parameters.`,
    ),
    m.lines(
      m.heading(3, 'Abstract Data Type (ADT) Card'),
      'Use this to summarize Data Structures. All parameters except name are optional. You can easily embed visuals using the image parameter alongside the custom img function. Snippet di codice',
    ),
    inline(
      adtCard({
        name: 'Dictionary (Map / Hash Table)',
        desc: inline`A collection of ${strong(inline`key-value`)} pairs, where each key is unique.`,
        image: img({ width: cm(4) }, 'logo.png'),
        impl: blocks(m.list(m.item(['Hash Tables']), m.item(['Balanced Binary Search Trees']))),
        funcs: blocks(
          m.list(
            m.item([raw('insert(k, v)'), ': Inserts a pair.']),
            m.item([raw('search(k)'), ': Returns the value.']),
          ),
        ),
      }),
    ),
    inline(
      raw(
        { block: true, lang: 'typst' },
        '#adt-card(\n  name: "Dictionary (Map / Hash Table)",\n  desc: [A collection of *key-value* pairs, where each key is unique.],\n  image: img("logo.png", width: 6cm), // Adds a nice picture inside the card!\n  impl: [\n    - Hash Tables\n    - Balanced Binary Search Trees\n  ],\n  funcs: [\n    - `insert(k, v)`: Inserts a pair.\n    - `search(k)`: Returns the value.\n  ]\n)',
      ),
    ),
    m.lines(
      m.heading(3, 'Algorithm Card'),
      'Use this for Algorithms. It automatically creates a 2-column grid for complexity and use-cases to save vertical space, and beautifully formats your pseudo code blocks. Snippet di codice',
    ),
    inline(
      algoCard({
        name: 'Merge Sort',
        image: img({ width: cm(4) }, 'logo.png'),
        desc: inline`A stable sorting algorithm based on the ${strong(inline`Divide and Conquer`)} paradigm.`,
        working: blocks(
          m.enum(
            m.numbered(1, [strong(inline`Divide:`), space, 'Split the array in half.']),
            m.numbered(2, [strong(inline`Conquer:`), space, 'Solve sub-problems.']),
            m.numbered(3, [strong(inline`Combine:`), space, 'Merge sub-arrays.']),
          ),
        ),
        complexity: blocks(
          m.list(
            m.item([strong(inline`Time:`), space, unsafeRaw.math`O(n log n)`]),
            m.item([strong(inline`Space:`), space, unsafeRaw.math`O(n)`]),
          ),
        ),
        useCases: blocks(m.list(m.item(['Sorting Linked Lists']), m.item(['External Sorting']))),
        pseudo: inline(
          space,
          raw(
            { block: true, lang: 'python' },
            'function MergeSort(A):\n  if length(A) <= 1: \n    return A\n  // ... recursive logic here',
          ),
          space,
        ),
      }),
    ),
    inline(pagebreak()),
    inline`${raw({ block: true, lang: 'typst' }, '#algo-card(\n  name: "Merge Sort",\n  desc: [A stable sorting algorithm based on the *Divide and Conquer* paradigm.],\n  working: [\n    1. *Divide:* Split the array in half.\n    2. *Conquer:* Solve sub-problems.\n    3. *Combine:* Merge sub-arrays.\n  ],\n  complexity: [\n    - *Time:* $O(n log n)$\n    - *Space:* $O(n)$\n  ],\n  use-cases: [\n    - Sorting Linked Lists\n    - External Sorting\n  ],\n  pseudo: [')}python
function MergeSort(A): if length(A) <= 1: return A ${raw({ block: true }, '  ]\n)')}`,
    m.lines(m.heading(1, 'Done!'), inline(lorem(30))),
  )
}
