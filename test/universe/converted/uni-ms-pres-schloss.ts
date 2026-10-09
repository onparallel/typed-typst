// Converted from test/universe/corpus/uni-ms-pres-schloss.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  block,
  blocks,
  center,
  counter,
  define,
  dict,
  doc,
  em,
  external,
  figure,
  footnote,
  gray,
  horizon,
  image,
  importPackage,
  inline,
  label,
  labelled,
  link,
  lorem,
  m,
  path,
  pct,
  pt,
  raw,
  ref,
  rgb,
  set,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const presTheme = external('pres-theme')
  const ezToday = external('ez-today')
  const confEquations = define('conf-equations').pos('arg1', T.any).returns(T.any).external()
  const titleSlide = define('title-slide').named('subtitle', T.content, []).returns(T.any).external()
  const outlineSlide = define('outline-slide').named('multipage', T.any, null).returns(T.any).external()
  const headerSlide = define('header-slide').pos('arg1', T.content).returns(T.any).external()
  const slide = define('slide')
    .pos('arg1', T.content)
    .named('block-height', T.any, null)
    .named('heading', T.content, [])
    .returns(T.any)
    .external()
  const itemByItem = define('item-by-item')
    .pos('arg1', T.content)
    .named('mode', T.any, null)
    .named('start', T.any, null)
    .returns(T.any)
    .external()
  const only = define('only').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const toolbox = external('toolbox')
  const lapis = external('lapis')
  const lightGrey = external('light-grey')
  const presTheme_with = define('with')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('text-lang', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(presTheme)
  const ezToday_today = define('today').named('lang', T.any, null).returns(T.any).external(ezToday)
  const toolbox_sideBySide = define('side-by-side')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external(toolbox)
  return doc(
    importPackage('@preview/uni-ms-pres-schloss:0.1.0', [
      presTheme,
      ezToday,
      confEquations,
      titleSlide,
      outlineSlide,
      headerSlide,
      slide,
      itemByItem,
      only,
      toolbox,
      lapis,
      lightGrey,
    ]),
    show(
      presTheme_with({
        author: inline`Your Name`,
        title: inline`Presentation Title`,
        date: ezToday_today({ lang: 'en' }),
        textLang: 'en',
      }),
    ),
    inline(show((document_2, ctx) => confEquations(document_2))),
    inline(titleSlide({ subtitle: inline`a possible subtitle` })),
    inline(outlineSlide({ multipage: false })),
    inline(headerSlide(inline`Header slide`)),
    inline(slide({ heading: inline`Basic Slide` }, inline(space, lorem(84), space))),
    inline(headerSlide(inline`Some examples of content`)),
    inline(
      slide(
        { heading: inline`Code` },
        inline(
          space,
          raw(
            { block: true, lang: 'py' },
            'import torch\n\nif (torch.cuda.is_available()):\n{\n  print("cuda is there wohoo!")\n}\nbreak; # Oh no Java! // lelolalu\n\nvariable = variable * 100.000 +- >< | && \n',
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { heading: inline`Let's make some bullet points` },
        blocks(
          inline`${itemByItem({ mode: gray }, blocks(m.list(m.item([lorem(1), space, itemByItem({ start: 2, mode: gray }, blocks(m.list(m.item([lorem(2)]))))]))))}
${itemByItem({ start: 3, mode: gray }, blocks(m.list(m.item([lorem(3)]), m.item([lorem(5)]), m.item([lorem(7)]))))}
you can also use one-by-one, only, alternatives and mote like this:`,
          inline(
            only(dict({ beginning: 6 }), blocks(m.enum(m.item([lorem(7)])))),
            space,
            only(dict({ beginning: 7 }), blocks(m.enum(m.item([lorem(11)])))),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { heading: inline`How to use equations` },
        inline`${space}You can define equations like this: ${unsafeRaw.math`a + b != c`}. These equations are
numbered when you add a label: ${labelled([unsafeRaw.math.block`a^2 + b^2 = c^2`, space], label('pythagoras'))}
${ref(label('pythagoras'))} references Pythagoras' theorem. A proof can be found in ${ref(label('gerwig2021satz'))}.${space}`,
      ),
    ),
    inline(
      slide(
        { heading: inline`Multi-Column-slide` },
        inline(space, toolbox_sideBySide(inline(lorem(42)), inline(lorem(27)), inline(lorem(35))), space),
      ),
    ),
    inline(
      slide(
        { blockHeight: pct(80) },
        inline`${space}${figure(
          {
            caption: inline`Example image${footnote(inline`Thanks to ${link('https://www.svgrepo.com/')} for the inspiration and Florian Bohlken for this
remade image`)}`,
          },
          inline(image({ height: pct(70) }, path('example-image.svg'))),
        )} You can
also combine footnotes and images. With footnotes, adjust ${raw('block-height')} to avoid unwanted
page breaks.${space}`,
      ),
    ),
    inline(headerSlide(inline`Useful features and hints`)),
    inline(
      slide(
        blocks(
          inline`Don't know how to write this mathematical symbol in Typst? Check this website:`,
          inline(
            align(
              center,
              inline(
                space,
                block(
                  { stroke: add(pt(2.5), lapis), fill: lightGrey, radius: em(0.5), inset: em(0.5) },
                  blocks(
                    m.lines(
                      set(text, { fill: rgb(0, 0, 255, 255) }),
                      set(align, { alignment: add(center, horizon) }),
                      inline(link('https://detypify.quarticcat.com/')),
                    ),
                  ),
                ),
                space,
              ),
            ),
          ),
          inline`What else is possible with polylux? ${align(center, inline(space, block({ stroke: add(pt(2.5), lapis), fill: lightGrey, radius: em(0.5), inset: em(0.5) }, blocks(m.lines(set(text, { fill: rgb(0, 0, 255, 255) }), set(align, { alignment: add(center, horizon) }), inline(link('https://polylux.dev/book/getting-started/getting-started.html'))))), space))}`,
          inline`How can I generate a handout from my presentation? (Turn animations off.) ${align(center, inline(space, block({ stroke: add(pt(2.5), lapis), fill: lightGrey, radius: em(0.5), inset: em(0.5) }, blocks(m.lines(set(text, { fill: lapis }), set(align, { alignment: add(center, horizon) }), inline`Add this command near the beginning of your file ${raw({ block: true, lang: 'typ' }, '#enable-handout-mode(true)')}`))), space))}`,
        ),
      ),
    ),
    inline(
      slide(
        { heading: inline`"Animations"` },
        inline`${space}Did you notice it? On the previous slide, we used this command: ${align(center, inline(space, block({ stroke: add(pt(2.5), lapis), fill: lightGrey, radius: em(0.5), inset: em(0.5) }, blocks(m.lines(set(text, { fill: rgb(0, 0, 255, 255) }), set(align, { alignment: add(center, horizon) }), inline(raw({ block: true, lang: 'typ' }, '#show: later'))))), space))}
to reveal these boxes one after another. There are many more helper functions here: ${align(center, inline(space, block({ stroke: add(pt(2.5), lapis), fill: lightGrey, radius: em(0.5), inset: em(0.5) }, blocks(m.lines(set(text, { fill: rgb(0, 0, 255, 255) }), set(align, { alignment: add(center, horizon) }), inline(link('https://polylux.dev/book/dynamic/helper.html'))))), space))}${space}`,
      ),
    ),
    inline(headerSlide(inline`Bibliography`)),
    m.lines(inline(counter('logical-slide').step()), m.heading(1, 'Bibliography')),
    inline(bibliography({ style: 'ieee' }, path('example.bib'))),
  )
}
