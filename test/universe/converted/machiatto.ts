// Converted from test/universe/corpus/machiatto.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  bottom,
  datetime,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  left,
  let_,
  lorem,
  m,
  path,
  raw,
  read,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const doc_2 = external('doc')
  const minitoc = define('minitoc').returns(T.any).external()
  const def = define('def').pos('arg1', T.any).named('title', T.any, null).returns(T.any).external()
  const note = define('note').pos('arg1', T.any).returns(T.any).external()
  const codeFile = define('code-file')
    .named('file-content', T.any, null)
    .named('fill', T.any, null)
    .named('lang', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const terminal = define('terminal').pos('arg1', T.any).named('title', T.any, null).returns(T.any).external()
  const infoBox = define('info-box').pos('arg1', T.content).returns(T.any).external()
  const codeSnippet = define('code-snippet')
    .named('file-content', T.any, null)
    .named('fill', T.any, null)
    .named('lang', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('to', T.any, null)
    .returns(T.any)
    .external()
  const doc_with = define('with')
    .named('ack', T.content, [])
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('license', T.any, null)
    .named('paper-size', T.any, null)
    .named('preface', T.any, null)
    .named('title', T.any, null)
    .named('toc', T.any, null)
    .returns(T.any)
    .external(doc_2)
  const [licenseDecl, license] = let_(
    'license',
    blocks(
      m.lines(
        inline(heading({ outlined: false }, 'License')),
        m.list(
          m.item([
            'The goal of this page is to discuss your licensing or copyright terms, as we usually reccamond publications to be under a creative commons license. Examples are CC BY-NC-SA 4.0 or CC BY-NC-ND 4.0.',
          ]),
          m.item(['If you use any AI to help with your work, please add an AI disclosure']),
        ),
      ),
      inline(
        align(
          add(left, bottom),
          inline(
            space,
            table(
              { stroke: null, columns: 2 },
              inline(strong(inline`Author:`)),
              inline`Mustafif Khan`,
              inline(strong(inline`Editor:`)),
              inline`Mustafif Khan`,
              inline(strong(inline`Publish Date:`)),
              inline(datetime.today().display()),
              inline(strong(inline`Published by:`)),
              inline`Mustafif Khan | MoKa Reads`,
              inline(strong(inline`ISBN:`)),
              inline`A number`,
            ),
            space,
          ),
        ),
      ),
    ),
  )
  const [prefaceDecl, preface] = let_(
    'preface',
    inline`${space}${heading({ outlined: false }, 'Preface')} ${strong(inline`Chapter 1 Machiatto Template`)}:
${lorem(40)}${space}`,
  )
  const [helloCDecl, helloC] = let_('hello-c', read(path('hello.c')))
  return doc(
    m.lines(
      importPackage('@preview/machiatto:0.2.0', [doc_2, minitoc, def, note, codeFile, terminal, infoBox, codeSnippet]),
      licenseDecl,
    ),
    prefaceDecl,
    show(
      doc_with({
        author: 'Mustafif',
        title: 'Machiatto Template',
        paperSize: 'a4',
        ack: inline`${space}This will contain all of those who you would like to thank${space}`,
        license: license,
        preface: preface,
        toc: true,
        bibliography: null,
      }),
    ),
    m.heading(1, 'Machiatto Template'),
    inline`${strong(inline`This is a summary of what will be covered in the summary`)}: ${lorem(100)} ${minitoc()}`,
    m.heading(2, 'A section'),
    inline(lorem(100)),
    inline(def({ title: lorem(5) }, lorem(50))),
    inline(lorem(50)),
    inline(note(lorem(50))),
    m.heading(2, 'Another section'),
    inline(lorem(40)),
    helloCDecl,
    inline(codeFile({ title: 'hello.c', fileContent: helloC, lang: 'C', fill: unsafeRaw.code<any>`color.aqua` })),
    inline(lorem(20)),
    inline(
      terminal({ title: 'Terminal' }, raw({ block: true, lang: 'bash' }, '$ clang hello.c\n$ ./a.out\nHello, World!')),
    ),
    inline`${infoBox(inline`${space}This is an informational note that highlights helpful content.${space}`)}
This is useful for code snippets, allowing you to choose the line range to show from your source
file. ${codeSnippet({ title: 'hello.c', fileContent: helloC, subtitle: 'snippet', lang: 'C', fill: unsafeRaw.code<any>`color.aqua`, to: 3 })}`,
  )
}
