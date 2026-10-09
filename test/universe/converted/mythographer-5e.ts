// Converted from test/universe/corpus/mythographer-5e.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  blocks,
  columns,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  importPackage,
  inline,
  linebreak,
  link,
  m,
  orange,
  parbreak,
  pct,
  raw,
  rect,
  red,
  rgb,
  show,
  smartquote,
  space,
  strong,
  table,
  text,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const dndTemplate = external('dnd-template')
  const defaultConfig = define('default-config').named('lang', T.any, null).returns(T.any).external()
  const titlePage = define('title-page')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const showOutline = define('show-outline').returns(T.any).external()
  const flexHeading = define('flex-heading').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const dndDropcap = define('dnd-dropcap')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const dndFeat = define('dnd-feat').pos('arg1', T.content).returns(T.any).external()
  const dndItem = define('dnd-item').pos('arg1', T.content).returns(T.any).external()
  const dndSpell = define('dnd-spell')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.content)
    .returns(T.any)
    .external()
  const dndArea = define('dnd-area').pos('arg1', T.content).returns(T.any).external()
  const dndReadaloud = define('dnd-readaloud').pos('arg1', T.content).returns(T.any).external()
  const dndSidebar = define('dnd-sidebar')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('config', T.any, null)
    .returns(T.any)
    .external()
  const dndComment = define('dnd-comment').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const easyColors = define('easy-colors')
    .named('primary', T.any, null)
    .named('secondary', T.any, null)
    .named('tertiary', T.any, null)
    .named('text-fill', T.any, null)
    .returns(T.any)
    .external()
  const colors = external('colors')
  const dndImageHeadingPart = define('dnd-image-heading-part')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('title-unstyled', T.content, [])
    .returns(T.any)
    .external()
  const dndImageHeadingSection = define('dnd-image-heading-section')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const dndTemplate_with = define('with')
    .rest('args', T.any)
    .named('is-first', T.any, null)
    .returns(T.any)
    .external(dndTemplate)
  const colors_PhbTan = external('PhbTan', colors)
  return doc(
    importPackage('@preview/mythographer-5e:0.0.2', [
      dndTemplate,
      defaultConfig,
      titlePage,
      showOutline,
      flexHeading,
      dndDropcap,
      dndFeat,
      dndItem,
      dndSpell,
      dndArea,
      dndReadaloud,
      dndSidebar,
      dndComment,
      easyColors,
      colors,
      dndImageHeadingPart,
      dndImageHeadingSection,
    ]),
    show(dndTemplate_with(defaultConfig({ lang: 'en' }))),
    inline(
      titlePage({
        title: inline`The Dark Typst`,
        authors: [{ name: inline`Sa1g`, organization: inline(link('github.com/sa1g/dnd-typst-template')) }],
        date: datetime.today().display(),
      }),
    ),
    inline(showOutline()),
    m.heading(1, 'Layout'),
    m.heading(2, flexHeading(inline`Chapters (${raw('==')})`, inline`Chapters`)),
    inline(
      columns(
        2,
        blocks(
          inline(
            dndDropcap(
              inline`T`,
              inline`his package is heavily inspired`,
              inline`${space}by the excellent work of the ${link('https://github.com/rpgtex', inline(strong(inline`rpgTex`)))}
team and their ${link('https://github.com/rpgtex/DND-5e-LaTeX-Template', inline(strong(inline`LaTeX D&D template`)))}.
Like its predecessor, this template is designed to help you create beautifully typeset documents
for the fifth edition of the world's greatest roleplaying game. It begins by adjusting Typst's
default section formatting to a style more familiar to readers. The chapter formatting is displayed
above.`,
            ),
          ),
          m.lines(m.heading(3, 'Section (', raw('==='), ')'), 'Sections divide chapters into major thematic groups.'),
          m.lines(m.heading(4, 'Subsection (', raw('===='), ')'), 'Subsections further organize content for clarity.'),
          m.lines(
            m.heading(5, 'Subsubsection (', raw('===='), ')'),
            'Subsubsections represent the deepest level of division that still uses a block header. Deeper levels display headers inline.',
          ),
          m.lines(
            m.heading(6, 'Paragraph'),
            inline`The paragraph format is rarely used in the core rulebooks but remains available as an alternative
to the "normal" style. It can be set with ${raw('======')} or the ${raw('dnd-par')} function.`,
          ),
          m.lines(
            m.heading(7, 'Subparagraph'),
            inline`The subparagraph format, which includes a paragraph indent, will likely feel more familiar to
readers. It can be set with ${raw('=======')} or ${raw('dnd-subpar')}.`,
          ),
          m.lines(
            m.heading(3, 'Special Sections'),
            inline`This module also provides dedicated functions for multi-line section headers commonly found
in rulebooks: ${raw('dnd-feat')} for feats, ${raw('dnd-item')} for magic items and traps, and
${raw('dnd-spell')} for spells.`,
          ),
          inline(
            dndFeat(
              blocks(
                m.lines(
                  m.heading(1, 'Typesetting Savant'),
                  m.heading(2, 'Typst'),
                  inline`You have acquired a package that aids in typesetting source material for one of your favorite
games. You have advantage on Intelligence checks to typeset new content. On a failed check,
you can seek assistance online at the package's website.`,
                ),
              ),
            ),
          ),
          inline(
            dndItem(
              blocks(
                m.lines(
                  m.heading(1, 'Foo', smartquote({ double: false }), 's Quill'),
                  m.heading(2, 'Wondrous item, rare'),
                  'The quill has 3 charges. While holding it, you can use an action to expend 1 charge, causing the quill to leap from your hand and draft a contract suited to your situation. The quill regains 1d3 expended charges daily at dawn.',
                ),
              ),
            ),
          ),
          inline(
            dndSpell(
              inline`Beautiful Typesetting`,
              inline`4th level illusion`,
              inline`1 action`,
              inline`5 feet`,
              inline`S, M`,
              inline`Until dispelled`,
              blocks(
                inline`You transform a written message of any length into an exquisite scroll. Each creature within
range that can see the scroll must succeed on a Wisdom saving throw or be charmed by you for
the spell's duration.`,
                'While charmed in this way, a creature cannot look away from the scroll or willingly move farther from it. A charmed creature can repeat the Wisdom saving throw at the end of each of its turns, ending the effect on itself on a success.',
              ),
            ),
          ),
          m.lines(
            m.heading(3, 'Map Regions'),
            inline`The ${raw('dnd-area')} function formats map regions. Numbering is automatic and resets with
each new ${raw('dnd-area')} block.`,
          ),
          inline(
            dndArea(
              blocks(
                m.lines(m.heading(1, 'Village of Hommlet'), 'A small, welcoming village.'),
                m.lines(m.heading(2, 'Inn of the Welcome Wench'), inline`The village's central gathering place.`),
                m.lines(
                  m.heading(2, 'Blacksmith', smartquote({ double: false }), 's Forge'),
                  inline`The local blacksmith's workshop.`,
                ),
                m.lines(
                  m.heading(1, 'Foo', smartquote({ double: false }), 's Castle'),
                  inline`Foo's modest residence, constructed of mud and sticks.`,
                ),
                m.lines(m.heading(2, 'Moat'), 'A shallow ditch crossed by a single plank.'),
                m.lines(
                  m.heading(2, 'Entrance'),
                  'A five-foot opening leads to a dirt floor, dimly lit by a hole in the roof above.',
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Text Boxes'),
      inline(
        columns(
          2,
          blocks(
            inline`This module provides three distinct environments to visually set apart text and draw the reader’s
attention. The ${raw('dnd-readaloud')} environment is used for passages meant to be read aloud
by the Game Master.`,
            inline(
              dndReadaloud(inline`${space}As you approach this module, you sense that the blood and tears of generations have
gone into its making. A welcoming warmth embraces you as you type your first words.${space}`),
            ),
            inline(
              dndSidebar(
                inline`${space}Behold the DndSidebar!${space}`,
                inline`${space}The ${raw('dnd-sidebar')} is designed for supplementary content, such as sidebars. It
does not break across columns and works best when used with a figure environment to float it
to a page corner, allowing surrounding text to wrap around it.${space}`,
              ),
            ),
            m.lines(
              m.heading(3, 'As an Aside'),
              inline`The other two environments are ${raw('dnd-comment')} and ${raw('dnd-sidebar')}. The ${raw('dnd-comment')}
environment is breakable and can be safely used inline within the main text flow.`,
            ),
            inline`${dndComment(
              inline`This is a Comment Box!`,
              inline`${space}A ${raw('dnd-comment')} provides minimal visual highlighting for text. While it lacks
the ornamentation of ${raw('dnd-sidebar')}, it can be cleanly broken across columns.${space}`,
            )}
In contrast, the ${raw('dnd-sidebar')} is not breakable and is ideally positioned as a floated
element, as shown below.`,
            m.lines(
              m.heading(3, 'Tables'),
              inline`The ${raw('DndTable')} style automatically colors even-numbered rows and defaults to the width
of a text line.`,
            ),
            inline(
              figure(
                { caption: inline`Nice Table` },
                table(
                  { columns: [auto, fr(1)] },
                  table.header(inline`Table head`, inline`Table head`),
                  inline`January`,
                  inline`The Great Gatsby`,
                  inline`February`,
                  inline`To Kill a Mockingbird`,
                  inline`March`,
                  inline`1984`,
                  inline`April`,
                  inline`The Catcher in the Rye`,
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Monsters and NPCs'),
      inline(
        columns(
          2,
          blocks(
            'The dnd-monster environment is used to format monster and NPC stat blocks. The module provides a variety of helper functions to simplify populating these stat blocks.',
            'While creating monster stat blocks is one of the more complex aspects of this template, we have strived to make the process as straightforward as possible.',
            'Monster sheets can be configured as either single-column or multi-column layouts, depending on your preference.',
            'The layout generally works well up to three columns, though occasional overshoot in the final column may occur.',
          ),
        ),
        space,
        v(fr(1)),
        space,
        raw({ lang: 'typst' }, '#dnd-monster(json("unicorn.json"), correction-factor: 1.06)'),
      ),
    ),
    m.lines(
      m.heading(2, 'Style and Colors'),
      inline(
        columns(
          2,
          blocks(
            inline`${dndDropcap(
              inline`S`,
              inline`tyle and color settings can be adjusted dynamically`,
              inline`${space}to suit your needs. You can apply custom configurations directly within functions like
${raw('dnd-area')}, ${raw('dnd-comment')}, ${raw('dnd-dropcap')}, ${raw('dnd-feat')}, ${raw('dnd-item')},
${raw('dnd-readaloud')}, ${raw('dnd-sidebar')}, ${raw('dnd-spell')}, ${raw('dnd-monster')},
and others.`,
            )} This is accomplished by passing a configuration object to the function, similar
to how you would configure the template using ${raw('dnd-template.with')}. If you wish to define
custom styles or colors, examine ${raw('config.typ')} in the template and start with ${raw('default-config')}
and ${raw('easy-colors')}—these will assist you in creating your own unique theme.`,
            m.lines(
              show(
                dndTemplate_with(
                  { isFirst: false },
                  easyColors({ primary: rgb(100, 160, 40), secondary: rgb(140, 180, 20), tertiary: colors_PhbTan }),
                ),
              ),
              m.heading(3, 'Color Example'),
              inline`As shown above, the color scheme has been thematically altered. This was achieved by modifying
the ${raw('easy-colors')} configuration within ${raw('dnd-template')} for this section.`,
            ),
            inline(
              dndComment(
                inline`This is a Comment Box!`,
                inline`${space}A ${raw('dnd-comment')} is a box for minimal highlighting of text. It lacks the ornamentation
of ${raw('dnd-sidebar')}, but it can be broken across columns.${space}`,
              ),
            ),
            inline(
              dndReadaloud(inline`${space}As you approach this module, you sense that the blood and tears of generations have
gone into its making. A welcoming warmth embraces you as you type your first words.${space}`),
            ),
            inline(
              dndSidebar(
                inline`${space}Behold the DndSidebar!${space}`,
                inline`${space}The ${raw('dnd-sidebar')} is used as a sidebar. It does not break across columns and
is best paired with a figure environment to float it to a page corner, allowing surrounding
text to wrap around it.${space}`,
              ),
            ),
            inline`Colors can also be applied inline. Below is an example: ${dndSidebar(
              { config: easyColors({ textFill: white, tertiary: rgb(100, 0, 60) }) },
              inline`${space}Behold the DndSidebar!${space}`,
              blocks(
                parbreak(),
                inline`The ${raw('dnd-sidebar')} is used as a sidebar. It does not break across columns and is best
paired with a figure environment to float it to a page corner, allowing surrounding text to
wrap around it.`,
              ),
            )} A future release will introduce more streamlined inline support for text
color injection, making the process cleaner and more intuitive.`,
          ),
        ),
      ),
    ),
    show(dndTemplate_with({ isFirst: false })),
    inline(
      dndImageHeadingPart(
        { titleUnstyled: inline`Custom Images` },
        rect({ fill: orange, height: pct(100), width: pct(100) }),
        inline`Stylized${linebreak()} Level 1 Heading${linebreak()} ${text({ size: em(0.5) }, inline`The orange background simulates an image ${footnote(inline`It's not a real image to reduce the size of the template.`)}`)}${v(em(7))}`,
      ),
    ),
    inline(
      columns(
        2,
        inline(
          space,
          dndDropcap(
            inline`U`,
            inline`sing functions like ${raw('dnd-image-heading-section')}`,
            blocks(
              inline`and ${raw('dnd-image-heading-part')}, you can easily overlay or place images behind your ${raw('level-1')}
(=) and ${raw('level-2')} (==) headings.`,
              inline`Due to Typst's internal layout behavior, a full-page image requires its own dedicated page.
Therefore, the template only supports full-page images for level-1 headings.`,
            ),
          ),
          space,
        ),
      ),
      space,
      dndImageHeadingSection(rect({ fill: red, height: em(20), width: em(62) }), 2, inline`A New Beginning'`),
      space,
      columns(
        2,
        blocks(
          inline(strong(inline`The red rectangle simulates an image.`)),
          'Note that the chapter counter resets between parts, following the convention used in official D&D publications.',
          m.lines(
            m.heading(3, 'Image Credits'),
            inline`The sample background image is sourced from ${link('https://lostandtaken.com/', inline`Lost and Taken`)}.`,
          ),
        ),
      ),
    ),
  )
}
