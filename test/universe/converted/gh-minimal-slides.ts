// Converted from test/universe/corpus/gh-minimal-slides.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  linebreak,
  m,
  raw,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const gh = external('gh')
  const gh_register = define('register')
    .named('accent', T.any, null)
    .named('density', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external(gh)
  const gh_coverSlide = define('cover-slide')
    .named('badges', T.any, null)
    .named('footer-left', T.any, null)
    .named('footer-right', T.any, null)
    .named('kicker', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(gh)
  const gh_sectionSlide = define('section-slide')
    .named('number', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(gh)
  const gh_contentSlide = define('content-slide')
    .pos('arg1', T.content)
    .named('title', T.content, [])
    .returns(T.any)
    .external(gh)
  const gh_closingSlide = define('closing-slide')
    .named('links', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(gh)
  return doc(
    m.lines(
      unsafeRaw.markup`#import "@preview/touying:0.7.3": *`,
      importPackage('@preview/gh-minimal-slides:0.1.0', gh),
    ),
    show(gh_register.with({ theme: 'light', accent: 'blue', density: 'comfy' })),
    inline(
      gh_coverSlide({
        kicker: '# README.md',
        title: inline`Your deck${linebreak()} in a readme.`,
        badges: ['v0.1.0', ['MIT', 'accent'], ['build: passing', 'success']],
        footerLeft: '@you · 2026',
        footerRight: '↓ scroll  ·  → next',
      }),
    ),
    inline(gh_sectionSlide({ number: '01', title: inline`Getting started` })),
    inline(
      gh_contentSlide(
        { title: inline`What you get` },
        blocks(
          m.list(
            m.item(['Light + dark themes, six accents, two density presets.']),
            m.item([
              'Markdown-flavored slide bodies —',
              space,
              raw('-'),
              space,
              'lists,',
              space,
              raw('+'),
              space,
              'enums, fenced code blocks.',
            ]),
            m.item(['Helpers for tables, stats, alerts, tasks — see the API in the README.']),
          ),
        ),
      ),
    ),
    inline(
      gh_contentSlide(
        { title: inline`Edit this file` },
        blocks(
          m.enum(
            m.item(['Replace this body with your own content.']),
            m.item([
              'Swap',
              space,
              raw('accent:'),
              space,
              'and',
              space,
              raw('theme:'),
              space,
              'in the',
              space,
              raw('register.with(...)'),
              space,
              'call above.',
            ]),
            m.item([
              'Run',
              space,
              raw('typst compile main.typ'),
              space,
              '(or watch with',
              space,
              raw('typst watch main.typ'),
              ').',
            ]),
          ),
        ),
      ),
    ),
    inline(
      gh_closingSlide({
        title: inline`Thanks.`,
        links: ['github.com/xingjian-zhang/gh-minimal-slides', 'typst.app/universe'],
      }),
    ),
  )
}
