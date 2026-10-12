// Converted from test/universe/corpus/min-manual.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  add,
  auto,
  blue,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  outline,
  pagebreak,
  path,
  pt,
  raw,
  read,
  ref,
  show,
  space,
  strong,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const manual = external('manual')
  const extract = define('extract').pos('arg1', T.any).named('from', T.any, null).returns(T.any).external()
  const arg = define('arg').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const url = define('url').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const pkg = define('pkg').pos('arg1', T.any).returns(T.any).external()
  const univ = define('univ').pos('arg1', T.any).returns(T.any).external()
  const pip = define('pip').pos('arg1', T.any).returns(T.any).external()
  const crate = define('crate').pos('arg1', T.any).returns(T.any).external()
  const gh = define('gh').pos('arg1', T.any).returns(T.any).external()
  const callout = define('callout')
    .pos('arg1', T.content)
    .named('background', T.any, null)
    .named('icon', T.any, null)
    .named('text', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const manual_with = define('with')
    .named('authors', T.any, null)
    .named('description', T.any, null)
    .named('license', T.any, null)
    .named('logo', T.any, null)
    .named('package', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(manual)
  return doc(
    importPackage('@preview/min-manual:0.3.0', [manual, extract, arg, url, pkg, univ, pip, crate, gh, callout]),
    show(
      manual_with({
        title: 'Package Name',
        description: 'Short description, no longer than two lines.',
        authors: 'Author <@author>',
        package: 'pkg-name:0.4.2',
        license: 'MIT',
        logo: image(path('assets/logo.png')),
      }),
    ),
    inline(v(fr(1)), space, outline(), space, v(fr(1.2)), space, pagebreak()),
    heading({ depth: 1 }, inline('Code Extraction')),
    inline(extract({ from: read(path('manual.typ')) }, 'feature')),
    heading({ depth: 1 }, inline('Arguments')),
    inline(
      arg('name: <- type | type | type <required>', inline`${space}Required argument.${space}`),
      space,
      arg('name: <- type | type | type', inline`${space}Optional argument.${space}`),
      space,
      arg('name: -> type | type | type', inline`${space}Possible output types.${space}`),
      space,
      arg(
        'name: <- type | type | type -> type | type <required>',
        inline`${space}Possible input and output types.${space}`,
      ),
      space,
      arg('```typ #feature(name)``` -> type | type | type', inline`${space}Syntax highlight.${space}`),
      space,
      arg('```typ #set feature(name)```', inline`${space}No input nor output types.${space}`),
      space,
      arg(
        'name: <- type | type | type | type | type | type | type | type | type | type | type | type | type | type | type | type <required>',
        inline`${space}Long list of input types.${space}`,
      ),
      space,
      arg(
        'name: -> type | type | type | type | type | type | type | type | type | type | type | type | type | type | type | type <required>',
        inline`${space}Long list of output types.${space}`,
      ),
      space,
      arg(
        'name: <- type | type | type | type | type | type | type | type -> type | type | type | type | type | type | type | type <required>',
        inline`${space}Long list of input and output types.${space}`,
      ),
    ),
    inline(pagebreak()),
    heading({ depth: 1 }, inline('Paper-friendly Links')),
    inline(
      url(
        'https://typst.app',
        inline`This link is clickable on screens and generates a footnote for print visibility.`,
      ),
    ),
    heading({ depth: 1 }, inline('Package URLs')),
    inline(
      grid(
        { columns: [auto, auto], gutter: em(1) },
        inline(strong(inline`LuaRocks:${space}`)),
        pkg('https://luarocks.org/modules/alerque/decasify'),
        inline(strong(inline`Typst Universe:`)),
        univ('decasify'),
        inline(strong(inline`Python PyPi:${space}`)),
        pip('decasify'),
        inline(strong(inline`Rust crate:${space}`)),
        crate('decasify'),
        inline(strong(inline`GitHub repo:${space}`)),
        gh('alerque/decasify'),
      ),
    ),
    heading({ depth: 1 }, inline('Terminal Simulation')),
    inline(
      raw(
        { block: true, lang: 'term' },
        "user@host:~$ cd projects/\nuser@host:~/projects$ sudo su\nPassword:\nroot@host:~/projects# rm foo\nrm: cannot remove 'foo': No such file or directory",
      ),
    ),
    heading({ depth: 1 }, inline('Code Example')),
    inline(raw({ block: true, lang: 'eg' }, 'A #emph[Typst] code *example*')),
    m.lines(
      heading({ depth: 1 }, inline('Level 1')),
      heading({ depth: 2 }, inline('Level 2')),
      heading({ depth: 3 }, inline('Level 3')),
      heading({ depth: 4 }, inline('Level 4')),
      heading({ depth: 5 }, inline('Level 5')),
      heading({ depth: 6 }, inline('Level 6')),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Heading References')), label('ref'))),
    inline`This is tye ${ref(label('ref'))} section, and the next one is the ${ref(label('callout'))} section.`,
    inline(labelled(heading({ depth: 1 }, inline('Callout')), label('callout'))),
    inline(callout(inline`Simple default callout.`)),
    inline(callout({ title: 'Title' }, inline`Callout with title`)),
    inline(
      callout(
        { background: blue, text: white, icon: 'exclamation-triangle' },
        inline`${space}Blue callout with white text and custom icon.`,
      ),
    ),
    inline(
      callout(
        {
          title: 'Note',
          text: { title: { fill: blue } },
          background: {
            fill: null,
            stroke: { left: add(pt(3), blue) },
            outset: { left: em(1), bottom: em(0.45) },
            inset: { left: pt(0) },
          },
        },
        inline`GitHub-ish customized callout.`,
      ),
    ),
    inline(pagebreak()),
    heading({ depth: 1 }, inline('Page Space')),
    inline(lorem(50)),
    inline(lorem(70)),
    inline(lorem(50)),
    inline(lorem(70)),
    inline(lorem(50)),
    inline(lorem(70)),
    inline(lorem(24)),
  )
}
