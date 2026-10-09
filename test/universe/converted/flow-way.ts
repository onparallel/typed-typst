// Converted from test/universe/corpus/flow-way.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  raw,
  show,
  smartquote,
} from '../../../src/index.ts'

export default () => {
  const flow = external('flow')
  const flow_with = define('with')
    .named('affiliation', T.any, null)
    .named('authors', T.any, null)
    .named('breaks', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('toc', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(flow)
  return doc(
    importPackage('@preview/flow-way:0.2.0', [flow]),
    show(
      flow_with({
        title: 'Flow-Way Template',
        subtitle: 'A simple Typst template',
        authors: ['John Doe', 'Jane Smith'],
        affiliation: 'My Company',
        toc: true,
        breaks: true,
        year: 2025,
      }),
    ),
    m.heading(1, 'Introduction'),
    'This is a sample document demonstrating the Flow-Way template.',
    'The title of the current section is displayed in the header of each page.',
    m.heading(2, 'Lists'),
    'The lists are styled according to the main colour of the template, that you can customize.',
    m.list(m.item(['First item']), m.item(['Second item']), m.item(['Third item'])),
    m.enum(m.item(['First item']), m.item(['Second item']), m.item(['Third item'])),
    m.heading(2, 'Code'),
    inline`Here is an example of inline code: ${raw('let x = 10')}. For code blocks:`,
    inline(raw({ block: true, lang: 'rs' }, 'fn main() {\n  println!("Hello, world!");\n}')),
    m.heading(2, 'Images'),
    'Here is an example of a figure included in the document:',
    inline(
      labelled(
        figure(
          { caption: inline`Some code` },
          raw({ block: true, lang: 'rs' }, 'fn main() {\n  println("Figure!");\n}'),
        ),
        label('example'),
      ),
    ),
    m.heading(1, 'That', smartquote({ double: false }), 's it!'),
    inline(lorem(300)),
  )
}
