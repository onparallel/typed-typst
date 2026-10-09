// Converted from test/universe/corpus/tgm-hit-sew-lecture.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  block,
  bottom,
  codeBlock,
  datetime,
  define,
  doc,
  document,
  em,
  emph,
  external,
  footnote,
  fr,
  green,
  grid,
  importPackage,
  inline,
  label,
  left,
  link,
  m,
  path,
  pct,
  quote,
  raw,
  red,
  ref,
  right,
  set,
  show,
  space,
  strong,
  sym,
  title,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const template = define('template')
    .named('footer-right', T.content, [])
    .named('header-center', T.content, [])
    .named('header-left', T.content, [])
    .named('license', T.any, null)
    .returns(T.any)
    .external()
  const licenses = external('licenses')
  const colorbox = define('colorbox').pos('arg1', T.content).named('color', T.any, null).returns(T.any).external()
  const zebraw = define('zebraw').pos('arg1', T.any).named('numbering', T.any, null).returns(T.any).external()
  const lines = define('lines').pos('arg1', T.any).returns(T.any).external()
  const pinitCodeFrom = define('pinit-code-from')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('color', T.any, null)
    .named('offset', T.any, null)
    .named('pin', T.any, null)
    .named('width', T.any, null)
    .returns(T.any)
    .external()
  const meander = external('meander')
  const licenses_ccBy40 = external('cc-by-4-0', licenses)
  const zebraw_with = define('with').named('line-range', T.any, null).returns(T.any).external(zebraw)
  const meander_reflow = define('reflow').pos('arg1', T.any).returns(T.any).external(meander)
  const licenses_ccBySa40 = external('cc-by-sa-4-0', licenses)
  const licenses_ccZero10 = external('cc-zero-1-0', licenses)
  return doc(
    importPackage('@preview/tgm-hit-sew-lecture:0.1.0', [
      template,
      licenses,
      colorbox,
      zebraw,
      lines,
      pinitCodeFrom,
      meander,
    ]),
    set(document, {
      title: inline`Template for SEW lecture documents`,
      author: 'Clemens Koza',
      date: datetime({ year: 2025, month: 11, day: 28 }),
    }),
    show(
      template({
        headerLeft: inline`SEW X. Jahrgang`,
        headerCenter: inline`Template`,
        footerRight: inline`TGM-HIT`,
        license: licenses_ccBy40,
      }),
    ),
    inline(bibliography(path('bibliography.bib'))),
    inline(title()),
    inline`This template is intended to simplify crafting well-presented learning resources for our software
engineering students. The examples here are meant to be read along with the document's source
code, e.g. in the web app or using Tinymist's preview. Typst code snippets will only be presented
in rare circumstances.`,
    'I recommend using semantic line breaks when writing, since it makes versioning easier:',
    inline(
      quote(
        { block: true },
        inline`${space}When writing text with a compatible markup language, add a line break after each substantial
unit of thought. ${footnote(inline(link('https://github.com/sembr/specification')))}${space}`,
      ),
    ),
    m.heading(1, 'Attention'),
    inline`Among the tools in this template is the ${raw('colorbox')}, an opinionated wrapper around ${raw('showybox')}${footnote(inline(link('https://typst.app/universe/package/showybox')))}.
You can pass a named ${raw('color: ...')} argument (which sets all relevant showybox colors),
as well as all arguments accepted by showybox itself, to customize it.`,
    inline(
      colorbox(inline`${space}Color boxes are great to ${strong(inline`summarize`)} and ${strong(inline`focus attention`)}
on key concepts.${space}`),
    ),
    inline`I don't prescribe a color philosophy, but red is useful to call out Don'ts, e.g.:`,
    inline(
      colorbox(
        { color: red },
        inline`${space}${strong(inline`Don't overdo`)} color boxes. In moderation, interrupting the text helps
keep attention, but: ${strong(inline`if everything is highlighted, nothing is!`)}${space}`,
      ),
    ),
    inline`I like to add ${strong(inline`emphasis`)} so that the bold parts form a ${strong(inline`shortened message`)}
on their own; useful for getting points across even when students only ${strong(inline`skim`)}
the document.`,
    m.heading(1, 'Code'),
    inline`Code snippets are highlighted using ${raw('zebraw')}${footnote(inline(link('https://typst.app/universe/package/zebraw')))},
with a bit of styling applied. You can also select a subset of lines, as these two examples
show:`,
    inline(
      grid(
        { columns: [fr(1), fr(1)], gutter: em(1) },
        raw(
          { block: true, lang: 'java' },
          'public class Main {\n  public static void main(String[] args){\n    System.out.println("Hello World!");\n  }\n}',
        ),
        codeBlock(
          [show(zebraw_with({ lineRange: lines('2-4') }))],
          raw(
            { block: true, lang: 'java' },
            'public class Main {\n  public static void main(String[] args){\n    System.out.println("Hello World!");\n  }\n}',
          ),
        ),
      ),
    ),
    inline`${raw('zebraw')} specifies ranges in ${unsafeRaw.math`["lower", "upper")`} form (i.e. half-open
as usual in programming). To make this more convenient, the ${raw('lines()')} function accepts
strings like ${raw('"2-4, 6, 9-11"')} that produces the appropriate ranges---but note that
multiple ranges are not supported until pull request ${link('https://github.com/hongjr03/typst-zebraw/pull/32', inline`typst-zebraw#32`)}
lands. Only strings like ${raw('"2-4"')} will work for now. If you want to use disjoint ranges
right now, install the development branches of this template and ${raw('zebraw')}, e.g. using
${raw('typship')}${footnote(inline(link('https://github.com/sjfhsjfh/typship')))}:`,
    inline(
      zebraw(
        { numbering: false },
        raw(
          { block: true, lang: 'sh' },
          'typship download https://github.com/TGM-HIT/typst-sew-lecture -c zebraw-next\ntypship download https://github.com/SillyFreak/typst-zebraw -c issue/multiple-range',
        ),
      ),
    ),
    inline`You would then import the template from the ${raw('@local')} namespace:`,
    inline(
      zebraw({ numbering: false }, raw({ block: true, lang: 'typ' }, '#import "@local/tgm-hit-sew-lecture:0.1.0')),
    ),
    m.heading(2, 'Notes in code'),
    inline`This template adds some handling for putting notes onto code, powered by ${raw('pinit')}${footnote(inline(link('https://typst.app/universe/package/pinit')))}:
write ${raw('PINn')} somewhere (replacing ${raw('n')} by a number), and it will form an anchor
for your notes. You should just take care of two things:`,
    m.list(
      m.item([
        'notes must appear on the same page as the anchors, so wrapping the code block in',
        space,
        raw('block(breakable: false)'),
        space,
        'is recommended, and',
      ]),
      m.item([
        'the',
        space,
        raw('PINn'),
        space,
        'is part of the code when syntax highlighting happens, so avoid making it part of another token:',
        space,
        raw({ lang: 'java' }, 'int foo;'),
        space,
        'and',
        space,
        raw({ lang: 'java' }, 'intPIN1 PIN2foo;'),
        space,
        'look differently.',
      ]),
    ),
    inline(
      block(
        { breakable: false },
        codeBlock([
          raw(
            { block: true, lang: 'java' },
            'public class Main {PIN1\n  public static void main(String[] args) {PIN2\n    System.out.println("Hello World!");PIN3\n  }\n\n  intPIN4 PIN5foo;\n}',
          ),
          pinitCodeFrom(1, inline`Boring`),
          pinitCodeFrom(2, inline`Boilerplate`),
          pinitCodeFrom(
            { color: green.darken(pct(20)), width: pct(45) },
            3,
            inline`${space}What it's all about (if your note is longer than a line, you can specify a ${raw('width')}
to avoid overflowing the page!)${space}`,
          ),
          pinitCodeFrom(
            { color: red.darken(pct(20)), pin: [-1, -0.1, add(top, right)], offset: [5, -1, left] },
            4,
            inline`not great: not a keyword`,
          ),
          pinitCodeFrom(
            { color: red.darken(pct(20)), pin: [1, 0.1, add(bottom, right)], offset: [4, 1, left] },
            5,
            inline`This color is used for upper-case identifiers (e.g. constants)---also wrong!`,
          ),
        ]),
      ),
    ),
    inline`The ${raw('pin-code-from')} function works a bit differently from ${raw('pinit')}'s ${raw('pinit-point-from')},
in that its ${raw('pin')} etc. parameters accept a pair of ${emph(inline`numbers`)} instead
of there being separate ${raw('pin-dx')} and ${raw('pin-dy')} numbers accepting ${emph(inline`lengths`)}.
The distances are specified in terms of the monospace font grid: 1 in x direction is equal to
~4.8pt, for example. The ${raw('pin')} and ${raw('offset')} arrays can further contain an alignment
as a third parameter. For example, ${raw('top+left')} would make the arrow start or end at that
corner of the letter. More details can be found in the manual.`,
    inline`The pinning functionality is tuned for this template: changing the font or other parts of the
raw block geometry will result in the pins not fitting anymore---beware!`,
    m.heading(1, 'Wrapping text around figures'),
    inline`This is not really a feature of this template, just a tutorial on using ${raw('meander')}${footnote(inline(link('https://typst.app/universe/package/meander')))}
for what I found useful in my documents.`,
    inline(
      meander_reflow(unsafeRaw.code<any>`{
  import meander: *

  placed(top+right, boundary: contour.margin(left: 4mm, bottom: 4mm), block(width: 30%)[
    #figure(
      rect(),
      caption: [A rectangle. The figure caption wraps thanks to the fixed width.]
    ) <fig:rect>
  ])

  container()

  content[
    A useful parameter for wrapping figures is \`placed(boundary: contour.margin(..), ..)\`.
    The \`boundary\` defines how text should avoid the placed figure, and \`contour.margin()\` is a simple such boundary that adds a bit of space around your figure.
    I also like to put my figures into fixed-width \`block()\`s.
    It means that the text may be slightly narrower than necessary to fit the figure, but it makes the layout more robust when writing long figure captions.
  ]
}`),
    ),
    m.heading(2, 'Wrapping text over pagebreaks'),
    inline(
      meander_reflow(unsafeRaw.code<any>`{
  import meander: *

  container(height: 1.3cm)
  pagebreak()

  placed(top+right, boundary: contour.margin(left: 4mm, bottom: 4mm), block(width: 30%)[
    #figure(
      rect(),
      caption: [Another rectangle, at the to of the page.]
    ) <fig:rect2>
  ])

  container()

  content[
    One final trick with \`meander\` is using multiple containers when the wrapping content overflows a page.
    This is an example of that: the paragraph starts on this page, but flows down onto the next one.
    We also want @fig:rect2 to wrap around that paragraph, to appear at the top of the new page.

    We can't just _not_ make the first paragraph part of the \`meander.reflow()\` call, since then the figure wouldn't be at the top of the page, but we also can't have all content in a single Meander \`container()\`.

    However, meander allows multiple containers with explicit pagebreaks in between, and the content will flow between these!
    It's not fully automatic---you have to specify the space left on the page as the height of the first container---but it can achieve this layout.
  ]
}`),
    ),
    m.heading(1, 'Bibliography'),
    inline`This template uses the "chicago-notes" bibliography style. The bibiliography itself is not rendered,
but you can still add citations, like here${ref(label('arrgh'))}, and will get a footnote.`,
    m.heading(1, 'License'),
    inline`The ${raw('licenses')} dictionary contains clickable links to various creative commons licenses,
displayed as the corresponding icon (powered by ${raw('ccicons')}${footnote(inline(link('https://typst.app/universe/package/ccicons')))}):
${licenses_ccBySa40}, ${licenses_ccZero10}. If you specify a license through the template, it
will be shown in the footer by default.`,
    inline`This document itself is CC-BY, but under normal circumstances (replacing the text with your
own material) that license will not apply to you. The scaffolding alone (calling ${raw('set document()')}
etc.) is too trivial to entail copyright.`,
    m.heading(1, 'Customization'),
    'Some customization knobs are provided, but feel free to fork this template (MIT licensed) if you need more freedom.',
    m.heading(2, 'Font'),
    inline`The template uses Noto Sans by default. Changing the font is supported, but the code note feature
may be impacted: the ${raw('pinit-code-from()')} function configures line spacing that makes
multiline notes line up with code lines. The used measurements would need to change, which is
only supported via forking. Likewise, changing the raw font via ${raw('show raw: set text(..)')}
will mess up the monospace grid measurements that ${raw('pin-code-from()')} is based on.`,
    m.heading(2, 'Header & footer'),
    'Both header and footer are divided into three equal-width parts; some of them have default values which you can find in the manual. The template further overrides some of these defaults, so that the outcome is this:',
    m.list(
      m.item(['Header: course/audience description; short version of the title; date-based version number']),
      m.item(['Footer: copyright note including author, year and license; page number; institution']),
    ),
    'You are of course free to use any other header/footer content you like.',
  )
}
