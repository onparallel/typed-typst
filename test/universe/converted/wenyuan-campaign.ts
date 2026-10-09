// Converted from test/universe/corpus/wenyuan-campaign.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  blocks,
  bottom,
  center,
  define,
  doc,
  em,
  emph,
  external,
  figure,
  footnote,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  m,
  outline,
  pagebreak,
  path,
  pct,
  place,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const makeTitle = define('make-title')
    .pos('arg1', T.content)
    .named('anything-after', T.content, [])
    .named('author', T.content, [])
    .named('date', T.content, [])
    .named('page-background', T.any, null)
    .named('subtitle', T.content, [])
    .returns(T.any)
    .external()
  const colours = external('colours')
  const dropParagraph = define('drop-paragraph')
    .pos('arg1', T.content)
    .named('small-caps', T.any, null)
    .returns(T.any)
    .external()
  const bump = define('bump').returns(T.any).external()
  const namedpar = define('namedpar').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const namedparBlock = define('namedpar-block').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const beginItem = define('begin-item').pos('arg1', T.content).returns(T.any).external()
  const item = external('item')
  const readaloud = define('readaloud').pos('arg1', T.content).returns(T.any).external()
  const commentBox = define('comment-box').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const fancyCommentBox = define('fancy-comment-box')
    .pos('arg1', T.content)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const sctitle = define('sctitle').pos('arg1', T.content).returns(T.any).external()
  const dndtable = define('dndtable').rest('args', T.any).named('columns', T.any, null).returns(T.any).external()
  const beginStat = define('begin-stat').pos('arg1', T.content).returns(T.any).external()
  const stat = external('stat')
  const setThemeColour = define('set-theme-colour').pos('arg1', T.any).returns(T.any).external()
  const conf_with = define('with').returns(T.any).external(conf)
  const colours_dmglavender = external('dmglavender', colours)
  const item_smalltext = define('smalltext').pos('arg1', T.content).returns(T.any).external(item)
  const item_flavourtext = define('flavourtext').pos('arg1', T.content).returns(T.any).external(item)
  const stat_statheading = define('statheading')
    .pos('arg1', T.any)
    .named('desc', T.any, null)
    .returns(T.any)
    .external(stat)
  const stat_mainstats = define('mainstats')
    .named('ac', T.any, null)
    .named('hp-dice', T.any, null)
    .returns(T.any)
    .external(stat)
  const stat_ability = define('ability')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .returns(T.any)
    .external(stat)
  const stat_skill = define('skill').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(stat)
  const stat_challenge = define('challenge').pos('arg1', T.any).returns(T.any).external(stat)
  const stat_stroke = define('stroke').returns(T.any).external(stat)
  const stat_dice = define('dice').pos('arg1', T.any).returns(T.any).external(stat)
  return doc(
    importPackage('@preview/wenyuan-campaign:0.1.2', [
      conf,
      makeTitle,
      colours,
      dropParagraph,
      bump,
      namedpar,
      namedparBlock,
      beginItem,
      item,
      readaloud,
      commentBox,
      fancyCommentBox,
      sctitle,
      dndtable,
      beginStat,
      stat,
      setThemeColour,
    ]),
    show(conf_with()),
    inline(
      makeTitle(
        {
          subtitle: inline`A sample wenyuan-campaign document`,
          author: inline`燕文院 Yanwenyuan`,
          date: inline`2024`,
          pageBackground: rect({ fill: colours_dmglavender, width: pct(100), height: pct(100) }),
          anythingAfter: inline`ver. 0.1.2`,
        },
        inline`The Holy Path`,
      ),
    ),
    inline(outline({ indent: em(1) })),
    m.heading(1, 'A New Adventure'),
    inline(
      dropParagraph(
        { smallCaps: 'This package is designed to aid you in' },
        inline`${space}writing ${emph(inline`ahem`)} possibly beautiful typeset documents for the fifth edition
of the world's greatest roleplaying game (or any roleplaying game, for that matter). It starts
by adjusting the section formatting from the defaults in typst to something a bit more familiar
to the reader. The chapter formatting is displayed above.${space}`,
      ),
    ),
    inline`${bump()} Most of this text is copied from ${link('https://www.overleaf.com/latex/templates/d-and-d-5e-latex-template/vmfdkjfhfynv.pdf', inline`The DnD 5e LaTeX book`)}
but adjusted for typst, to give an example of how this works.`,
    inline`Top level titles are placed at the top as ${emph(inline`chapter titles`)}. Please ensure you
pagebreak before a new chapter title else it will be placed wonky.`,
    inline`This module uses various fonts (${link('https://github.com/yanwenywan/typst-packages/tree/master/wenyuan-campaign/0.1.0/template/fonts', inline`Download them here`)}):`,
    m.list(
      m.item([strong(inline`TeX Gyre Bonum`), space, 'is the main body and title text.']),
      m.item([
        strong(inline`Scaly Sans`),
        space,
        'is the sans-serif font that is used in comments. (',
        strong(inline`Scaly Sans Caps`),
        space,
        'for small caps)',
      ]),
      m.item([strong(inline`Royal Initalen`), space, 'is the drop-caps title font.']),
      m.item([strong(inline`KingHwa_OldSong`), space, 'is the CJK font.']),
    ),
    inline`${raw('droplet')} is needed for the drop caps.`,
    m.heading(2, 'Section'),
    'Sections break up chapters into large groups of associated text. These are second level titles.',
    m.heading(3, 'Subsection'),
    'Subsections further break down the information for the reader. These are third level titles.',
    m.heading(4, 'Subsubsection'),
    'Subsubsections are the furthest division of text that still have a block header. These are fourth level titles. Titles below these are not styled, use at your own risk. Note that these and below will not appear in the outline.',
    inline(
      namedpar(
        'Paragraph',
        inline`${space}The ${raw('namedPar(title)[]')} function creates a named paragraph, formatted how you'd
expect it to be in the books. If this paragraph is below a block, then the auto-indenting wont
work (due to typst's seeming lack of universal indent, PR if I'm wrong), use ${raw('bump()')}
at the start to bump it up.${space}`,
      ),
    ),
    inline(
      namedparBlock(
        'Paragraph',
        inline`If you like your named paragraphs to not be indented, use ${raw('namedParBlock()')}. This is
a block though and requires the subsequent paragraph to be bumped.`,
      ),
    ),
    m.heading(2, 'Special Sections'),
    inline`This module also includes the ${raw('beginItem[]')} environment for items and spells, with commands
under the ${raw('item')} name. The two main commands of note are ${raw('item.smalltext[]')}
and ${raw('item.flavourtext[]')}. Named paragraphs are done with 3rd level headings.`,
    inline(
      beginItem(
        blocks(
          m.heading(1, 'Automatic Titling Machine'),
          inline(item_smalltext(inline`Magic item, rare, requires attunement`)),
          inline(
            item_flavourtext(inline`${space}A wondrous machine of strange make, rusted yet somehow running smoothly. When put into
a block on its own, it opens up a whole new world of styling.${space}`),
          ),
          'Automatic titling machines are scope-dependent mechanical devices that recreates show rules to make new environments for its text.',
          m.lines(
            m.heading(3, 'Automatic titling'),
            inline`Once per scope, the automatic titling machine silently can run a ${raw('show')} command from
a submodule, letting you use typst structures in new and interesting ways.`,
          ),
        ),
      ),
    ),
    inline(
      beginItem(
        blocks(
          m.heading(1, 'Beautiful Typesetting'),
          inline(item_smalltext(inline`4nd-level illusion`)),
          m.lines(
            m.heading(3, 'Casting time'),
            inline`1 action ${linebreak()}`,
            m.heading(3, 'Range'),
            inline`5 feet ${linebreak()}`,
            m.heading(3, 'Components'),
            inline`M (an existing document) ${linebreak()}`,
            m.heading(3, 'Duration'),
            'Until the document is read',
          ),
          'You are able to transform a written message of any length into a beautiful scroll. All creatures within range that can see the scroll must make a wisdom saving throw or be charmed by you until the spell ends.',
          'While the creature is charmed by you, they cannot take their eyes off the scroll and cannot willingly move away from the scroll. Also, the targets can make a wisdom saving throw at the end of each of their turns. On a success, they are no longer charmed.',
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(1, 'Text Boxes'),
    'This module has several text boxes for you to use. Different block environments can be used for different effect.',
    inline(
      readaloud(
        blocks(
          inline`This is the ${raw('readAloud(content)')} environment. Truly, a mysterious place that prompts
the imagination.`,
          'Supposedly, paragraphs do not indent here. I guess that is true.',
        ),
      ),
    ),
    m.heading(2, 'Besides, Becomments'),
    'Besides the readaloud, there are a couple other things which may be useful. Such as the comment box:',
    inline(
      commentBox(
        { title: 'This is a comment box!' },
        inline`${space}A ${raw('commentBox(title: [], content)')} is a box for minimal highlighting of text.
It lacks the ornamentation of ${raw('fancyCommentBox')}. This is also themable.${space}`,
      ),
    ),
    inline`${bump()} If you want to go extra fancy, you can use the fancyCommentBox. This is a recreation
of the ${raw('DndSidebar')} of the latex module, but because of typst's flexibility, this should
handle being breakable no problem. If you want, you can choose to float it too like any other
block.`,
    inline(
      fancyCommentBox(
        { title: 'This is a fancy comment box!' },
        blocks(
          'This comment box is decorated to look fancier than usual.',
          'The LaTeX DndSidebar is a float element, but this one is inline. You should be able to place it though.',
        ),
      ),
    ),
    m.heading(2, 'Tables and More Tables'),
    inline`By default tables have no stroke. You can make a DnD-style table by using ${raw('#dndtable()')},
the ${emph(inline`exact same way`)} you'd make a regular table.${footnote(inline`In a dndtable, you cannot set the stroke, fill, or inset.`)}
Due to a current limitation in typst, the header row is not automatically bolded, you will have
to do that yourself.`,
    inline(
      sctitle(inline`Make a nice title with ${raw('sctitle')}`),
      space,
      dndtable(
        { columns: [auto, fr(1)] },
        table.header(inline(strong(inline`d2`)), inline(strong(inline`Items`))),
        inline`1`,
        inline`An apple`,
        inline`2`,
        inline`Certain death`,
      ),
    ),
    inline`It is recommended to ${raw('#place')} figures (like ${ref(label('snakecaller'))}) with ${raw('float: true, scope: "parent"')}
for best results, as that spans columns.`,
    inline(
      place(
        { float: true, scope: 'parent' },
        add(bottom, center),
        inline(
          space,
          labelled(
            [
              figure(
                { caption: inline`The Snakecallers of Ashralan` },
                image({ width: pct(100) }, path('snakecaller-guild.png')),
              ),
              space,
            ],
            label('snakecaller'),
          ),
          space,
        ),
      ),
    ),
    inline(pagebreak()),
    m.heading(1, 'Monsters and NPCs'),
    inline`Some time ago I made a simple statblocks module ${link('https://github.com/yanwenywan/typst-packages/tree/master/dndstatblock', inline`which you can find here`)}.
This is included in the project under the ${strong(inline(raw('stat')))} name. Use ${raw('beginStat[]')}
to start.`,
    inline(
      beginStat(
        blocks(
          inline(stat_statheading({ desc: 'Medium humanoid, neutral evil' }, 'Snakecaller Acolyte')),
          inline(stat_mainstats({ ac: '10 (natural armour)', hpDice: '2d8' })),
          inline(stat_ability(10, 10, 11, 10, 14, 11)),
          inline(
            stat_skill('Skills', inline`Insight +4, Persuasion +2, Religion +2`),
            space,
            linebreak(),
            space,
            stat_skill('Senses', inline`Passive perception 12`),
            space,
            linebreak(),
            space,
            stat_skill('Languages', inline`Common, Snake-tongue`),
            space,
            linebreak(),
            space,
            stat_skill('Challenge', stat_challenge(1)),
          ),
          inline(stat_stroke()),
          m.lines(
            m.heading(3, 'Dark Devotion'),
            'The snakecaller acolyte has advantage on saving throws against being charmed or frightened.',
          ),
          m.lines(
            m.heading(3, 'Speak with Snakes'),
            'A snakecaller acolyte can speak with snakes within 30 ft., and can utter a one word command as an action. The snake must obey unless it would directly hurt itself.',
          ),
          m.lines(
            m.heading(3, 'Titanic Might'),
            inline`As a bonus action, a snakecaller acolye can expend a spell slot to cause its melee weapon attacks
to magically deal an extra ${stat_dice('3d6')} poison damage to a target on hit. This benefit
lasts until the end of the turn.`,
          ),
          m.lines(
            m.heading(3, 'Spellcasting'),
            'A cult acolyte is a 2nd level spellcaster. Its spellcasting ability is wisdom (spell save DC 12, +4 to hit with spell attacks). It has the following spells prepared:',
          ),
          inline`Cantrips (at will): ${emph(inline`guidance, light, thaumaturgy`)}${linebreak()} 1st level (3
slots): ${emph(inline`bane, cure wounds, guiding bolt, sanctuary`)}`,
          m.heading(2, 'Actions'),
          m.lines(
            m.heading(3, 'Poison Dagger'),
            inline`${emph(inline`Melee weapon attack:`)} +2 to hit, reach 5 ft., one target. Hit: ${stat_dice('1d4')}
piercing damage. On a hit, the target must make a constitution saving throw (DC 12) and on a
fail be poisoned.`,
          ),
          inline(emph(inline`Adapted from: Cult Acolyte`)),
        ),
      ),
    ),
    inline`Use of it is generally the same as the full statblock module, except all commands must be prepended
with the ${raw('stat')} qualifier. The initialisation, however, has been modified to fit into
another document.`,
    inline(pagebreak()),
    m.heading(1, 'Colours'),
    inline`Colours are awful, awful things? You might object: but they are pretty! And I would agree. However,
there is one very tiny niggle with them: you can change the theme colour.${footnote(inline`Please express surprise.`)}`,
    inline`Typst's layouting system is stateless, i.e. you cannot have global variables that change throughout
the document. The only way you can do that is by using ${raw('state')} and ${raw('context')},
which comes with a very strict set of limitations that has made developing this rather much
harder.`,
    'As such, there is less freedom with colours in my typst module (sorry).',
    inline(setThemeColour(colours_dmglavender)),
    inline`By using the ${raw('setThemeColour(color)')} command you can set the colour to any colour you
want. This will affect the colours of tables, comments, and fancy comments. Whilst you can pick
any colour, I recommend the colours included in the package:`,
    inline(
      dndtable(
        { columns: fr(1) },
        table.header(inline(strong(inline`Colour`))),
        inline(raw('colours.phbgreen')),
        inline(raw('colours.phbcyan')),
        inline(raw('colours.phbmauve')),
        inline(raw('colours.phbtan')),
        inline(raw('colours.dmglavender')),
        inline(raw('colours.dmgcoral')),
        inline(raw('colours.dmgslategrey (-ay)')),
        inline(raw('colours.dmglilac')),
      ),
    ),
    inline`The table above has been set to ${raw('dmglavender')}. The default theme colour is ${raw('phbgreen')}.`,
    inline(
      fancyCommentBox(
        blocks(
          inline`"It's lavender, darling" she said, "very sophisticated. You wouldn't know about it."`,
          inline`"It's clearly... pinkish." her friend retorted.`,
        ),
      ),
    ),
  )
}
