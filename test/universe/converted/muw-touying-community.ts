// Converted from test/universe/corpus/muw-touying-community.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  block,
  blocks,
  center,
  codeBlock,
  define,
  doc,
  em,
  external,
  fr,
  grid,
  image,
  importPackage,
  inline,
  left,
  linebreak,
  m,
  par,
  parbreak,
  path,
  pct,
  pt,
  set,
  show,
  smartquote,
  space,
  strong,
  sym,
  text,
  top,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const configCommon = define('config-common').named('slide-level', T.any, null).returns(T.any).external()
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('institution', T.content, [])
    .named('organization', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const muwSlides = external('muw-slides')
  const titleSlideDunkelblau = define('title-slide-dunkelblau').returns(T.any).external()
  const titleSlideWhite = define('title-slide-white').returns(T.any).external()
  const focusSlideGreen = define('focus-slide-green')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external()
  const focusSlideCoral = define('focus-slide-coral')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .returns(T.any)
    .external()
  const imagingSlide = define('imaging-slide')
    .pos('arg1', T.content)
    .named('picture', T.any, null)
    .named('picture-width', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const muw_colors = external('muw_colors')
  const muwBox = define('muw-box')
    .pos('arg1', T.any)
    .named('fill', T.any, null)
    .named('height', T.any, null)
    .named('inset', T.any, null)
    .returns(T.any)
    .external()
  const muwSlides_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('image', T.any, null)
    .named('page-numbering-start', T.any, null)
    .returns(T.any)
    .external(muwSlides)
  return doc(
    m.lines(
      importPackage('@preview/touying:0.6.1', [configCommon, configInfo]),
      importPackage('@preview/muw-touying-community:0.1.0', [
        muwSlides,
        configCommon,
        configInfo,
        titleSlideDunkelblau,
        titleSlideWhite,
        focusSlideGreen,
        focusSlideCoral,
        imagingSlide,
        muw_colors,
        muwBox,
      ]),
    ),
    set(text, { lang: 'en' }),
    show(
      muwSlides_with(
        { pageNumberingStart: 3, image: (it) => codeBlock([], align(center, it)) },
        configCommon({ slideLevel: 2 }),
        configInfo({
          title: inline`Title slide with a blue/white background`,
          author: inline`Univ. Prof. Dr. Peter Strasser`,
          institution: inline`Universitätsklinik für XY`,
          organization: inline`Medizinische Universität Wien`,
        }),
      ),
    ),
    inline(titleSlideDunkelblau()),
    inline(titleSlideWhite()),
    m.lines(
      m.heading(2, 'Slide „Titel und Inhalt“ (Title and Content)'),
      m.list(
        m.item(['Enter text here']),
        m.item([
          'You can place a chart, picture,',
          space,
          sym.dots.h,
          space,
          text(
            { size: pt(16) },
            blocks(
              m.list(
                m.item([
                  'Up to 5 text levels',
                  space,
                  text(
                    { size: pt(15) },
                    blocks(
                      m.list(
                        m.item([
                          'Indents increase level by level, font size decreases',
                          space,
                          text(
                            { size: pt(14) },
                            blocks(
                              m.list(
                                m.item([
                                  'Should the text be too long for your slide, the font size is reduced automatically',
                                  space,
                                  text(
                                    { size: pt(13) },
                                    blocks(
                                      m.list(m.item(['Note: Please try not to write too much copy onto your slides'])),
                                    ),
                                  ),
                                ]),
                              ),
                            ),
                          ),
                        ]),
                      ),
                    ),
                  ),
                ]),
              ),
            ),
          ),
        ]),
      ),
    ),
    m.lines(m.heading(1, 'Section Header'), 'Version – white background'),
    inline(focusSlideGreen(inline`Section Header`, inline`Version – green background`)),
    inline(focusSlideCoral(inline`Section Header`, inline`Version – coral background`)),
    inline(
      imagingSlide(
        {
          title: inline`Slide „Titel und Inhalt – schwarz" (Title and content – black)`,
          picture: image(path('example_brain_mri.png')),
          pictureWidth: pt(123),
        },
        blocks(
          m.list(
            m.item(['Especially for images in radiology']),
            m.item([
              'Enter explanation text – e.g. what can be seen in the picture',
              space,
              text(
                { size: pt(16) },
                blocks(
                  m.list(m.item(['Placeholder can be moved / enlarged /', space, sym.dots.h, space, 'as required'])),
                ),
              ),
            ]),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Slide „Titel, Subtitel und Inhalt“ (Title, subtitle and content)'),
      m.heading(3, 'Enter subtitle here'),
      m.list(m.item(['Enter text, charts, pictures, … here'])),
    ),
    m.lines(
      m.heading(2, 'Slide „Bild mit Bildunterschrift“ (Picture and Caption)'),
      inline(image({ width: pct(92) }, path('example_wide_picture.jpg'))),
    ),
    inline(
      text(
        { size: pt(12) },
        inline`Default text colour black; can be changed to blue. Highlights: please use ${strong(inline`bold`)}
characters.`,
      ),
    ),
    m.lines(
      m.heading(2, 'Slide „Zwei Inhalte“ (Two content)'),
      inline(
        grid(
          { columns: [auto, auto], columnGutter: em(3) },
          blocks(
            m.list(
              m.item(
                m.lines(
                  inline`Left column for content ${linebreak()}`,
                  m.list(m.item(['Can contain text, charts, pictures, …'])),
                ),
              ),
            ),
          ),
          blocks(
            m.list(
              m.item(
                m.lines(
                  inline`Right column for content ${linebreak()}`,
                  m.list(m.item(['Can contain text, charts, pictures, …'])),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Slide „Vergleich“ (Comparison)'),
      inline(
        grid(
          { columns: [auto, auto], columnGutter: em(3) },
          blocks(
            m.lines(
              inline(
                text(
                  { size: pt(20), font: 'georgia', fill: unsafeRaw.code<any>`muw_colors.colors.hellblau` },
                  inline`Headline for left column`,
                ),
                space,
                linebreak(),
              ),
              m.list(
                m.item(m.lines('Left column for content', m.list(m.item(['Can contain text, charts, pictures, …'])))),
              ),
            ),
          ),
          blocks(
            m.lines(
              inline(
                text(
                  { size: pt(20), font: 'georgia', fill: unsafeRaw.code<any>`muw_colors.colors.hellblau` },
                  inline`Headline for left column`,
                ),
                space,
                linebreak(),
              ),
              m.list(
                m.item(m.lines('Right column for content', m.list(m.item(['Can contain text, charts, pictures, …'])))),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Slide „Titel, Inhalt und Infobox“ (Title, content and infobox)'),
      inline(
        grid(
          { columns: [auto, auto], columnGutter: em(4) },
          inline(
            space,
            text(
              { size: pt(17) },
              blocks(
                m.list(
                  m.item([
                    'Main content of the slide',
                    space,
                    text(
                      { size: pt(16) },
                      blocks(
                        m.list(
                          m.item([
                            'Formatting as in other slide layouts',
                            space,
                            text(
                              { size: pt(15) },
                              blocks(
                                m.list(
                                  m.item([
                                    'Up to 5 text levels',
                                    space,
                                    text(
                                      { size: pt(14) },
                                      blocks(m.list(m.item(['Can contain text, picture, charts, …']))),
                                    ),
                                  ]),
                                ),
                              ),
                            ),
                          ]),
                        ),
                      ),
                    ),
                  ]),
                ),
              ),
            ),
            space,
          ),
          inline(
            space,
            muwBox(
              { height: pct(81), inset: em(1) },
              blocks(
                m.lines(
                  set(text, { fill: unsafeRaw.code<any>`muw_colors.colors.black`, size: pt(14), weight: 'regular' }),
                  set(align, { alignment: add(left, top) }),
                  m.list(
                    m.item(
                      m.lines(
                        'Infobox content',
                        m.list(
                          m.item(
                            m.lines(
                              'Font size smaller than in other slide layouts (14pt or smaller)',
                              m.list(
                                m.item(
                                  m.lines(
                                    'Up to 5 text levels',
                                    m.list(m.item(['Can contain text, picture, charts, …'])),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                parbreak(),
              ),
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(
        2,
        'Slide „Titel, Inhalt und Infobox',
        smartquote({ double: true }),
        ' ',
        '(Title, content and infobox)',
      ),
      inline(
        grid(
          { columns: [fr(7), fr(7)], columnGutter: em(4) },
          inline(
            space,
            block(
              blocks(
                m.lines(
                  set(par, { justify: true, leading: em(1.3), spacing: em(1) }),
                  inline(
                    text(
                      { size: pt(17) },
                      blocks(
                        m.list(
                          m.item([
                            'Main content of the slide',
                            space,
                            text(
                              { size: pt(16) },
                              blocks(
                                m.list(
                                  m.item([
                                    'Formatting as in other slide layouts',
                                    space,
                                    text(
                                      { size: pt(15) },
                                      blocks(
                                        m.list(
                                          m.item([
                                            'Up to 5 text levels',
                                            space,
                                            text(
                                              { size: pt(14) },
                                              blocks(m.list(m.item(['Can contain text, picture, charts, …']))),
                                            ),
                                          ]),
                                        ),
                                      ),
                                    ),
                                  ]),
                                ),
                              ),
                            ),
                          ]),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            space,
          ),
          inline(
            space,
            block(
              { inset: em(-1) },
              blocks(
                m.lines(
                  set(par, { justify: false, leading: em(1.3), spacing: em(1) }),
                  inline(
                    muwBox(
                      { height: pct(81), inset: em(1), fill: unsafeRaw.code<any>`muw_colors.colors.hellblau-3` },
                      blocks(
                        m.lines(
                          set(text, {
                            fill: unsafeRaw.code<any>`muw_colors.colors.black`,
                            size: pt(14),
                            weight: 'regular',
                          }),
                          set(align, { alignment: add(left, top) }),
                          m.list(
                            m.item(
                              m.lines(
                                'Infobox content',
                                m.list(
                                  m.item(
                                    m.lines(
                                      'Font size smaller than in other slide layouts (14pt or smaller)',
                                      m.list(
                                        m.item(
                                          m.lines(
                                            'Up to 5 text levels',
                                            m.list(m.item(['Can contain text, picture, charts, …'])),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(
        2,
        'Slide „Titel, Inhalt und Infobox',
        smartquote({ double: true }),
        ' ',
        '(Title, content and infobox)',
      ),
      inline(
        grid(
          { columns: [fr(7), fr(8)], columnGutter: em(4) },
          inline(
            space,
            block(
              blocks(
                m.lines(
                  set(par, { justify: false, leading: em(1.3), spacing: em(1) }),
                  inline(
                    text(
                      { size: pt(17) },
                      blocks(
                        m.list(
                          m.item([
                            'Version with a cropped picture',
                            space,
                            text(
                              { size: pt(16) },
                              blocks(
                                m.list(
                                  m.item([
                                    'Formatting as in other slide layouts',
                                    space,
                                    text(
                                      { size: pt(15) },
                                      blocks(
                                        m.list(
                                          m.item([
                                            'Up to 5 text levels',
                                            space,
                                            text(
                                              { size: pt(14) },
                                              blocks(m.list(m.item(['Can contain text, picture, charts, …']))),
                                            ),
                                          ]),
                                        ),
                                      ),
                                    ),
                                  ]),
                                ),
                              ),
                            ),
                          ]),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            space,
          ),
          inline(
            space,
            block(
              { inset: em(-0.5) },
              inline(space, muwBox({ inset: em(0) }, image(path('example_infobox_picture.jpg'))), space),
            ),
            space,
          ),
        ),
      ),
    ),
  )
}
