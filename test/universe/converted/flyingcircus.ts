// Converted from test/universe/corpus/flyingcircus.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  black,
  block,
  blocks,
  blue,
  bottom,
  box,
  circle,
  cm,
  codeBlock,
  colbreak,
  columns,
  contentBlock,
  define,
  dict,
  doc,
  em,
  emph,
  external,
  fr,
  h,
  heading,
  hide,
  image,
  importPackage,
  inches,
  inline,
  json,
  left,
  let_,
  line,
  linebreak,
  link,
  list,
  lorem,
  ltr,
  luma,
  m,
  pagebreak,
  par,
  path,
  pct,
  place,
  pt,
  raw,
  repeat,
  right,
  set,
  show,
  smartquote,
  space,
  stack,
  strong,
  sym,
  table,
  text,
  top,
  underline,
  unsafeRaw,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const cetz = external('cetz')
  const FlyingCircus = external('FlyingCircus')
  const FCPlane = define('FCPlane')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('BoxAnchor', T.any, null)
    .named('BoxText', T.any, null)
    .named('Img', T.any, null)
    .named('Nickname', T.any, null)
    .returns(T.any)
    .external()
  const FCParseLink = define('FCParseLink').pos('arg1', T.any).returns(T.any).external()
  const HiddenHeading = define('HiddenHeading').pos('arg1', T.content).returns(T.any).external()
  const FCVehicleSimple = define('FCVehicleSimple').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const FCWeapon = define('FCWeapon')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('Img', T.any, null)
    .returns(T.any)
    .external()
  const FCVehicleFancy = define('FCVehicleFancy')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .named('BoxAnchor', T.any, null)
    .named('BoxText', T.any, null)
    .named('Img', T.any, null)
    .named('TextVOffset', T.any, null)
    .returns(T.any)
    .external()
  const FCShip = define('FCShip')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('Img', T.any, null)
    .named('Ship', T.any, null)
    .returns(T.any)
    .external()
  const FCPlaybook = define('FCPlaybook')
    .named('Character', T.content, [])
    .named('Intimacy', T.content, [])
    .named('Moves', T.content, [])
    .named('Name', T.any, null)
    .named('Questions', T.content, [])
    .named('Starting', T.content, [])
    .named('StatNames', T.any, null)
    .named('Stats', T.content, [])
    .named('Subhead', T.any, null)
    .named('Triggers', T.content, [])
    .named('Vents', T.content, [])
    .returns(T.any)
    .external()
  const FCPSection = define('FCPSection').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const KochFont = define('KochFont').pos('arg1', T.content).named('size', T.any, null).returns(T.any).external()
  const FCPStatTable = define('FCPStatTable')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external()
  const FCPRule = define('FCPRule').returns(T.any).external()
  const FCShortNPC = define('FCShortNPC')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('img', T.any, null)
    .named('img_scale', T.any, null)
    .named('img_shift_dx', T.any, null)
    .named('img_shift_dy', T.any, null)
    .returns(T.any)
    .external()
  const FCShortAirship = define('FCShortAirship').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const FlyingCircus_with = define('with')
    .named('Author', T.any, null)
    .named('CoverImg', T.any, null)
    .named('Dedication', T.content, [])
    .named('Desciption', T.any, null)
    .named('Title', T.any, null)
    .named('body-only', T.any, null)
    .returns(T.any)
    .external(FlyingCircus)
  const [titleDecl, title_2] = let_('title', 'Sample Flying Circus Book')
  const [authorDecl, author] = let_('author', 'Tetragramm')
  const [myplanelinkDecl, myplanelink] = let_(
    'myplanelink',
    'https://tetragramm.github.io/PlaneBuilder/index.html?json=AAEAjATAdA7MCwAhAhgZwJYGMAEj0AcAbZAOwFNgBAK4WgMFsfqcZBfZoHQAlACwHsSybAFl+AF34AnAEbIArtgBaYMNgAcABl75gAJGABcYACBa1GkzYAIVhw4B-h8FsAoex8-ngPAUNES0nKKKmpaOsAAwADq0QCSPnyCwmKSsgrKqhraurRmlACCUABmxQACAAmMAJBUAPwAAbSNzU32bEwWTp5mHL1RXvb9PZ2mjLa2HhPskXaj3p6zNZaDy6ssAKCe1BZsFuszTJMHSxwA4CdMpwf21JHUdPuMO-uvHk83B0A',
  )
  const MaybeImage = define('MaybeImage')
    .pos('img', T.any)
    .rest('args', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`if (img != none) {
  [
    #set image(..args)
    #img
  ]
}`,
    )
  const FCWeaponHeader = define('FCWeaponHeader')
    .pos('weapon', T.any)
    .named('Img', T.any, null)
    .pos('DescriptiveText', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          box({ width: pt(0), height: pt(0) }, hide(blocks(m.heading(2, unsafeRaw.code<any>`weapon.Name`)))),
        ),
        MaybeImage(p['Img']),
        codeBlock([
          set(text, { fill: luma(100) }),
          set(block, { spacing: em(0.1) }),
          text({ size: pt(20) }, inline(unsafeRaw.code<any>`weapon.Name`)),
          h(fr(1)),
          unsafeRaw.code<any>`weapon.Price`,
          line({ length: pct(100), stroke: luma(100) }),
        ]),
        p['DescriptiveText'],
        v(em(-1)),
      ]),
    )
  const dark_cell = define('dark_cell')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) => table.cell({ fill: black }, text({ fill: white }, p['body'])))
  const vehicle_modification = define('vehicle_modification')
    .pos('name', T.any)
    .named('price', T.any, null)
    .returns(T.any)
    .body((p) =>
      box(
        { width: pct(100) },
        blocks(
          m.lines(
            set(par, { leading: em(-1) }),
            set(block, { spacing: em(0.1) }),
            inline(p['name'], space, h(fr(1)), space, unsafeRaw.code<any>`if (price != none) { [#price;þ] }`),
          ),
          inline(line({ length: pct(100) })),
        ),
      ),
    )
  const [ship_statsDecl, ship_stats] = let_('ship_stats', {
    Name: 'Macchi Frigate',
    Speed: 5,
    Handling: 15,
    Hardness: 9,
    Soak: 0,
    Strengths: '-',
    Weaknesses: '-',
    Weapons: [
      { Name: 'x2 Light Howitzer', Fore: 'x1', Left: 'x2', Right: 'x2', Rear: 'x1' },
      { Name: 'x6 Pom-Pom Gun', Fore: 'x2', Left: 'x3', Right: 'x3', Rear: 'x2', Up: 'x6' },
      { Name: 'x2 WMG', Left: 'x1', Right: 'x1' },
    ],
    DamageStates: ['', '-1 Speed', '-3 Guns', '-1 Speed', '-3 Guns', 'Sinking'],
  })
  const dotfill = define('dotfill')
    .returns(T.any)
    .body((p) => codeBlock([], box({ width: fr(1) }, repeat(inline`.`))))
  const [BraunYADecl, BraunYA] = let_('BraunYA', {
    Name: 'Braun YA Post Runner',
    Nickname: 'Precious Lifelines',
    Price: 17,
    Used: 8,
    Upkeep: 1,
    Speeds: inline`23 - 15 - 12 - 8`,
    Handling: 90,
    Structure: 21,
    Notes: inline`1 Crew. 2 Engines. Low radiator. Small cargo space. 20 Fuel Uses.`,
  })
  const [AirDestroyerDecl, AirDestroyer] = let_('AirDestroyer', {
    Name: 'Jörmungandr-class Air Destroyer',
    Nickname: 'Ship of the Line',
    Speed: 12,
    Lift: 60,
    Handling: 40,
    Toughness: 100,
    Notes: inline`Luftane. 100-250 crew. x6 Engines. Armoured Skin 2, Armour 4/5+.${linebreak()} x8 Flak Cannons.
Large number of machine gun turrets.${linebreak()} Pushes Weather Flak against attackers.`,
  })
  return doc(
    m.lines(
      importPackage('@preview/flyingcircus:4.0.0', [
        FlyingCircus,
        FCPlane,
        FCParseLink,
        HiddenHeading,
        FCVehicleSimple,
        FCWeapon,
        FCVehicleFancy,
        FCShip,
        FCPlaybook,
        FCPSection,
        KochFont,
        FCPStatTable,
        FCPRule,
        FCShortNPC,
        FCShortAirship,
      ]),
      importPackage('@preview/cetz:0.4.2', cetz),
    ),
    m.lines(titleDecl, authorDecl),
    show(
      FlyingCircus_with({
        Title: title_2,
        Author: author,
        CoverImg: image(path('images/Cover.png')),
        Desciption: 'My Custom Setting',
        bodyOnly: false,
        Dedication: blocks(
          inline`Look strange? You probably don't have the fonts installed.`,
          inline`Download the fonts from ${link('https://github.com/Tetragramm/flying-circus-typst-template/archive/refs/heads/Fonts.zip', inline`HERE`)}.
Install them on your computer, upload them to the Typst web-app (anywhere in the project is
fine) or use the Typst command line option --font-path to include them.`,
        ),
      }),
    ),
    myplanelinkDecl,
    inline(
      FCPlane(
        {
          Nickname: 'Bring home the bacon!',
          Img: image(path('images/Bergziegel_image.jpg')),
          BoxText: dict({ Role: 'Fast Bomber', 'First Flight': '1601', Strengths: 'Fastest Bomber' }),
          BoxAnchor: 'north-west',
        },
        FCParseLink(myplanelink),
        blocks(
          inline(
            emph(
              inline`This text is where the description of the plane goes. Formatting is pretty simple. This is italic.`,
            ),
          ),
          inline(underline(inline`Words get underlined.`)),
          inline`Leave an ${strong(inline`empty`)} line or it will be the same paragraph`,
          m.enum(
            m.item(m.lines('numbered list', m.enum(m.item(['Sub-Lists!'])))),
            m.item(
              m.lines(
                'Things! But you can have multiple lines for an item by indenting the next one, or just one long line.',
                m.list(m.item(['Sub-items!'])),
              ),
            ),
          ),
          m.list(m.item(['Unnumbered list'])),
          inline`Break the column where you want it with ${raw('#colbreak()')}`,
          inline`Images can be added by doing ${raw('#image(path)')}. The FC functions do fancy stuff though,
and may override some arguments when you pass an image into them using an argument.`,
          inline`Find the full documentation for Typst on the website ${link('https://typst.app/docs', inline(text({ fill: blue }, inline`HERE`)))}`,
        ),
      ),
    ),
    inline(pagebreak(), space, HiddenHeading(blocks(m.heading(1, 'Vehicles'))), space, set(heading, { offset: 1 })),
    inline(FCVehicleSimple(json(path('Sample Vehicle_stats.json')), inline(lorem(120)))),
    inline(
      contentBlock(
        blocks(
          m.lines(
            set(heading, { outlined: false }),
            inline(
              FCWeapon(
                { Img: image(path('images/Rifle.png')) },
                {
                  Name: 'Rifle/Carbine',
                  Cells: { Hits: 1, Damage: 2, AP: 1, Range: 'Extreme', Test: 'Hello' },
                  Price: 'Scrip',
                  Tags: 'Manual',
                },
                inline`${space}Note that you can set the text in the cell boxes to whatever you want.${space}`,
              ),
            ),
          ),
          inline(
            FCWeapon(
              dict({
                Name: 'Machine-Gun (MG)',
                Cells: dict({ Hits: 4, Damage: 2, AP: 1, 'Ammo Count': 10 }),
                Price: '2þ',
                Tags: 'Rapid Fire, Jam 1/2',
              }),
              inline`${space}Note that you can set the text in the cell boxes to whatever you want using the dictionary.${space}`,
            ),
          ),
        ),
      ),
    ),
    m.lines(MaybeImage.decl, FCWeaponHeader.decl),
    m.lines(
      dark_cell.decl,
      inline(
        FCWeaponHeader(dict({ Name: 'My Test Weapon', Price: '5þ' }), lorem(40)),
        space,
        table(
          { columns: [fr(3), fr(2), fr(1), fr(2), fr(1), fr(2), fr(1), fr(2), fr(2)] },
          table.cell({ colspan: 9 }, inline`Braced, blah blah`),
          inline`Ball`,
          dark_cell(inline`Hits`),
          inline`1`,
          dark_cell(inline`Damage`),
          inline`5`,
          dark_cell(inline`AP`),
          inline`2`,
          dark_cell(inline`Range`),
          inline`Extreme`,
          inline`Incendiary`,
          dark_cell(inline`Hits`),
          inline`1`,
          dark_cell(inline`Damage`),
          inline`5`,
          dark_cell(inline`AP`),
          inline`1`,
          dark_cell(inline`Range`),
          inline`Extreme`,
          table.cell({ colspan: 9 }, inline`Incendiary. On a hit, lights aircraft on fire.`),
        ),
      ),
    ),
    inline(
      FCVehicleFancy(
        {
          Img: image(path('images/Wandelburg.jpg')),
          TextVOffset: inches(6.2),
          BoxText: dict({ Role: 'Fast Bomber', 'First Flight': '1601', Strengths: 'Fastest Bomber' }),
          BoxAnchor: 'north-east',
        },
        json(path('Sample Vehicle_stats.json')),
        blocks(
          'The project to build the first armoured attack vehicle in the Gotha Empire spanned nearly three decades. Largely considered a low priority during the war with the UWF, the fierce fighting against the Macchi Republics suddenly accelerated the project, which went from concept sketch to deployment in six short months.',
          'This development was accompanied by intense secrecy: the project was code-named “Wandering Castle”, which gave the impression it was a Leviathan-building enterprise.',
          'Used for the first time in the Battle of Reggiane in 1593, the Type 1 reflects the idea that the tank ought to be a sort of mobile form of the concrete pillboxes coming into use at the time. Though suffering frequent breakdowns, plagued with difficulties getting its main gun on target, and very vulnerable in the mountains, it was successful enough that it soon became the most-produced tank of the war.',
          'After the first six months the official name of the vehicle was changed from its codename to “Self-Propelled Assault Vehicle Type 1”, known by the acronym “SbRd-AnZg Ausf I”. This development was ignored by everyone outside of official communications.',
        ),
        inline(lorem(100)),
      ),
    ),
    inline(
      FCVehicleFancy(json(path('Sample Vehicle_stats.json')), inline(), inline(lorem(100))),
      space,
      vehicle_modification.decl,
      space,
      vehicle_modification({ price: 5 }, 'Hello'),
      space,
      vehicle_modification('Priceless'),
    ),
    ship_statsDecl,
    m.lines(
      set(heading, { offset: 0 }),
      inline(
        FCShip(
          { Img: image(path('images/Macchi Frigate.png')), Ship: ship_stats },
          inline`${space}Though remembered for large bombardment ships and airship tenders, the majority of the
Seeheer was in fact these mid-sized frigates. These ships were designed for patrolling the seas
for enemy airships and to escort Macchi cargo ships along the coast. They proved a deadly threat
to landing barge attacks in the Caproni islands, as it was found their anti- aircraft guns were
also effective against surface targets.${space}`,
          inline`${space}160 crew${space}`,
        ),
      ),
    ),
    inline(HiddenHeading(blocks(m.heading(1, 'Playbooks'))), space, set(heading, { offset: 1 })),
    inline(
      FCPlaybook({
        Name: 'A Worker',
        Subhead: 'Industrial Town',
        Character: blocks(
          inline(
            block(
              blocks(
                m.lines(
                  set(par, { justify: true }),
                  inline(
                    emph(inline`The Old World might be gone, but many of its technological wonders persist, and to keep them
going, those towns that can still support industry work double-hard. Many people, be they refugees
from the old cities or poor folks from across the world, come to these places in hopes of steady
work. They'll find it, more often than not, but that labour is frequently backbreaking and the
compensation paltry. Compared to that, who wouldn't want to take to the skies?`),
                  ),
                ),
              ),
            ),
            space,
            FCPSection('Name', inline`Choose, or write your own`),
            space,
            emph(inline`Anthony, Dietrich, Gunter, Hans, Hermann, Jan, Klaus, Werner, Willy`),
          ),
          inline(emph(inline`Bertha, Emma, Gertrud, Hilda, Ilse, Ingrid, Karla, Mercédès`)),
          inline(h(fr(1)), emph(inline`Moser, Scheffler, Hamann, Muller, Schmidt, Weber, Becker, Bauer`)),
          m.lines(
            inline`Age Range: ${emph(inline`Youth (16-22), Adult (23-30)`)} ${FCPSection('Current Residence', 'Choose, or write your own')}
${emph(inline`Choose a town from another playbook, though it is far behind you now.`)} ${FCPSection('People', 'Choose all that apply')}
${emph(inline`Städter, Himmilvolk, Rishonim, or any other.`)} ${FCPSection('Expectations', 'Tell the table or write it out')}
This is an archetypical image of a Worker. What resonates with you? What doesn't?`,
            m.list(
              m.item([emph(inline`Masculine, feminine, or nonbinary.`)]),
              m.item([emph(inline`Responsible, organized, hardworking, never complains. Always tired.`)]),
              m.item([emph(inline`Worn, sore, gone to seed. Hands rough, stained, often scarred.`)]),
              m.item([emph(inline`Simple, drab, cheap clothing, hard-wearing enough for the job ahead.`)]),
            ),
            inline(v(fr(1)), space, FCPSection('Character History', inline`Choose all that apply`)),
          ),
          inline`${v(fr(1))} I was taught to fly by... ${columns({ gutter: pt(0) }, 2, blocks(m.lines(m.list(m.item([sym.dots.h, 'an expensive training course.']), m.item([sym.dots.h, 'an instructor when I was conscripted.'])), inline(colbreak()), m.list(m.item([sym.dots.h, 'a family member, passing it on.']), m.item([sym.dots.h, 'nobody, I', smartquote({ double: false }), 'm just winging it.'])))))}`,
          inline`${v(fr(1))} I left my home because...`,
          inline(
            columns(
              { gutter: pt(0) },
              3,
              blocks(
                m.lines(
                  m.list(m.item([sym.dots.h, 'jobs dried up.']), m.item([sym.dots.h, 'I got hurt and fired.'])),
                  inline(colbreak()),
                  m.list(m.item([sym.dots.h, 'it was killing me.']), m.item([sym.dots.h, 'I want something better.'])),
                  inline(colbreak()),
                  m.list(m.item([sym.dots.h, 'they learned I was queer.']), m.item([sym.dots.h, 'I broke the law.'])),
                ),
              ),
            ),
          ),
          inline`${v(fr(1))} I fly so I can make some money and so I can...`,
          inline(
            columns(
              { gutter: pt(0) },
              2,
              blocks(
                m.lines(
                  m.list(
                    m.item([sym.dots.h, 'make sure my kids have it better.']),
                    m.item([sym.dots.h, 'do something with my life.']),
                    m.item([sym.dots.h, 'maybe retire, ever.']),
                    m.item([sym.dots.h, 'pay off some serious debts.']),
                  ),
                  inline(colbreak()),
                  m.list(
                    m.item([sym.dots.h, 'finally get on that adventure.']),
                    m.item([sym.dots.h, 'break free of my obligations.']),
                    m.item([sym.dots.h, 'escape the town I', smartquote({ double: false }), 've been stuck in.']),
                    m.item([sym.dots.h, 'find a reason to keep going.']),
                  ),
                ),
              ),
            ),
          ),
        ),
        Questions: blocks(
          m.lines(
            inline(FCPSection('Questions', inline`Write your answers, and speak them`)),
            m.list(
              m.item(
                m.lines(
                  'What were you, before you were another anonymous worker?',
                  m.list(
                    m.item([
                      underline(inline`Take 2 Personal Moves`),
                      space,
                      'from another playbook (or 1 Student move) to represent this origin, or two additional Worker moves if this is all you',
                      smartquote({ double: false }),
                      've ever known.',
                    ]),
                  ),
                ),
              ),
              m.item(['What was your dream job, as a child? What job did you actually end up working?']),
              m.item(['Where are your family staying, if not with you?']),
            ),
            inline`${v(fr(1))} ${FCPSection('Trust', inline`Ask and record answers`)} You trust everyone. They're
your co-workers, you're not here for drama. ${v(fr(1))}`,
          ),
        ),
        Starting: blocks(
          m.lines(
            set(list, { marker: inline`○` }),
            set(columns, { gutter: pt(0) }),
            inline(
              KochFont({ size: pt(18) }, inline`Start With...`),
              space,
              FCPSection('Assets', inline`Choose 3`),
              space,
              columns(
                2,
                blocks(
                  m.lines(
                    m.list(
                      m.item(['A plane large enough to carry your family.']),
                      m.item(['A simple, robust sidearm.']),
                      m.item(['A membership in a large union.']),
                    ),
                    inline(colbreak()),
                    m.list(
                      m.item(['Two co-workers with special skills.']),
                      m.item(['A house somewhere relatively safe.']),
                      m.item(['A set of solid boots.']),
                    ),
                  ),
                ),
              ),
            ),
          ),
          inline(
            FCPSection('Dependents', inline`Choose 2`),
            space,
            columns(
              2,
              blocks(
                m.lines(
                  m.list(
                    m.item(['A spouse without meaningful income.']),
                    m.item(['A parent, now old and infirm.']),
                    m.item(['A number of small children.']),
                  ),
                  inline(colbreak()),
                  m.list(
                    m.item(['A sibling, unable to work.']),
                    m.item(['A close friend, disabled.']),
                    m.item(['An apprentice, learning your trade.']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            FCPSection('Planes', inline`Choose 1, or a plane worth up to 15þ`),
            space,
            columns(
              2,
              blocks(
                m.lines(
                  m.list(m.item(['Theler KanonenKobra MB (Used)']), m.item(['König-Werke Adler-N (Used)'])),
                  inline(colbreak()),
                  m.list(m.item(['Kreuzer Skorpion (Used)']), m.item(['Markgraf Volksfestung A (Used)'])),
                ),
              ),
            ),
          ),
          inline(
            FCPSection('Familiar Vices', inline`Choose 3`),
            space,
            columns(
              4,
              blocks(
                m.lines(
                  m.list(m.item(['Drinking']), m.item(['Opiates'])),
                  inline(colbreak()),
                  m.list(m.item(['Tobacco']), m.item(['Cannabis'])),
                  inline(colbreak()),
                  m.list(m.item(['Music']), m.item(['Bickering'])),
                  inline(colbreak()),
                  m.list(m.item(['Reading']), m.item(['Sleeping'])),
                ),
              ),
            ),
          ),
        ),
        Stats: blocks(
          inline(
            FCPStatTable('Jobber', "Let's get paid and go home.", { Hard: '+1', Keen: '+1', Calm: '+1', Daring: '+1' }),
          ),
          inline(
            FCPStatTable('New Lease on Life', 'Beats going back to the mines!', {
              Hard: '+2',
              Keen: '-1',
              Calm: '-1',
              Daring: '+2',
              Wild: '-',
            }),
          ),
          inline(colbreak()),
          inline(
            FCPStatTable('Worn Down', 'Just punching the clock.', { Hard: '+2', Keen: '+2', Calm: '+2', Daring: '-4' }),
          ),
          inline(
            FCPStatTable('Safety Inspector', 'No point taking extra risks.', {
              Hard: '-2',
              Keen: '+2',
              Calm: '+4',
              Daring: '-2',
            }),
          ),
        ),
        StatNames: ['Hard', 'Keen', 'Calm', 'Daring'],
        Triggers: blocks(
          m.lines(
            inline(
              place({ dx: cm(1.6), dy: cm(-0.3) }, inline(emph(inline`Start with 3 Stress`))),
              space,
              dotfill.decl,
              space,
              FCPSection('Triggers', inline()),
            ),
            m.list(
              m.item(['If you took a life', dotfill(), space, '1 Stress']),
              m.item(['If there was combat', dotfill(), space, '1 Stress']),
              m.item(['If your plane got shot', dotfill(), space, '1 Stress']),
              m.item(['If you were wounded', dotfill(), space, '2 Stress']),
              m.item(['If a comrade was wounded', dotfill(), space, '2 Stress']),
              m.item(['If your plane stopped working', dotfill(), space, '2 Stress']),
              m.item(['If you had to wingwalk', dotfill(), space, '1 Stress']),
              m.item(['If the job got out of hand', dotfill(), space, '2 Stress']),
            ),
          ),
        ),
        Vents: blocks(
          m.lines(
            inline(FCPSection('Vents', inline())),
            m.list(
              m.item(['Complain about your circumstances to a comrade.']),
              m.item(['Buy something nice for yourself.']),
              m.item(['Complain about pay to a comrade.']),
              m.item(['Stir up trouble with the employees.']),
              m.item(['Deliberately trigger End of Night by maxing out your Vice track.']),
            ),
          ),
        ),
        Intimacy: blocks(
          inline`${FCPSection('Intimacy Move', inline`Start with this Move`)} ${strong(inline`Share the Burden`)}:
${emph(inline`When you are intimate with comrades`)}, the Stress of all the characters participating
can be freely redistributed between them. If there are any NPC participants, 1 Stress is also
removed from each PC.`,
          inline`${emph(inline`If you use this move in the air`)}, 1 additional Stress is removed from each character.`,
        ),
        Moves: blocks(
          m.lines(
            inline(FCPSection('Personal Moves', inline`Take Breadwinner and choose 3 more`)),
            m.list(
              m.item(
                [
                  'Breadwinner: Instead of personal upkeep, you have two Dependents. Write their names, and mark 1 on one and 2 on the other. Each Routine, during Expenses, choose to pay 0, 1, or 2 Thaler for each Dependent. If you pay 0, erase one mark. If you pay 2, mark their track and describe what special thing you do for them to make their lives easier.',
                ],
                'A Dependent at 2 Marks removes 1 Stress per routine. A Dependent losing a Mark gives 1 Stress, and at 0 Marks they cause 2 Stress per routine.',
              ),
            ),
          ),
          inline`${stack({ dir: ltr, spacing: em(0.5) }, box({ width: pct(30), stroke: { bottom: pt(1) } }, inline(circle({ radius: pt(5), stroke: null }))), circle({ radius: pt(5) }), circle({ radius: pt(5) }), circle({ radius: pt(10), stroke: null }), box({ width: pct(30), stroke: { bottom: pt(1) } }, inline(circle({ radius: pt(5), stroke: null }))), circle({ radius: pt(5) }), circle({ radius: pt(5) }))}
${FCPRule()} ${contentBlock(blocks(m.lines(set(list, { marker: '●', spacing: em(1) }), m.list(m.item([strong(inline`There for You`), ':', space, emph(inline`When you Get Real`), ', your target always loses 1 extra Stress.'])), set(list, { marker: '○' }), m.list(m.item([strong(inline`Get it Done`), ': Each Routine, hold 3. Spend that hold to score a partial hit on any roll, without rolling first.']), m.item([strong(inline`Time Out`), ':', space, emph(inline`When you intervene in a dispute`), ',', space, underline(inline`roll +Calm`), '. On a hit, the conflict cannot escalate to violence. 16+, everyone names a compromise they would be willing to make.']), m.item([strong(inline`Hard Drinking`), ': You may reroll two dice in the End of Night roll.']), m.item([strong(inline`Old Reliable`), ': After 3 Routines in the same plane, without it being modified or upgraded, the plane gains +8 Toughness and +3 Reliability. This is once per plane, and the bonus is removed if the plane is modified.']), m.item([strong(inline`No Drama`), ': The first time each Routine that somebody Vents with you as the victim, instead of Stress you take 2 XP directly.']), m.item([strong(inline`Open Mind`), ':', space, emph(inline`When you perform a Move Exchange`), ', both sides can learn as many moves as they have XP for from one another, instead of just 1. Other playbook moves cost 1 less XP to learn, and this character can teach any move they', smartquote({ double: false }), 've learned.']), m.item([strong(inline`Domestic Bliss`), ': While you have 0 Stress, take +1 ongoing to all rolls outside of air combat.'])))))}
${FCPRule()} ${FCPSection('Other Moves & Notes', inline`Start with 1 Mastery Move and 3þ`)}
All your XP costs are doubled.`,
          inline(
            place(
              add(bottom, right),
              inline(
                space,
                stack(
                  { dir: ltr, spacing: em(0.2) },
                  KochFont(inline`Other Progress`),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                ),
                space,
                stack(
                  { dir: ltr, spacing: em(0.2) },
                  KochFont(inline`Mastery Progress`),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                  circle({ radius: pt(6) }),
                ),
                space,
              ),
            ),
          ),
        ),
      }),
    ),
    BraunYADecl,
    inline(
      FCShortNPC(
        {
          img: image(path('images/Bergziegel_image.jpg')),
          img_scale: 1.5,
          img_shift_dx: pct(-10),
          img_shift_dy: pct(-10),
        },
        BraunYA,
        inline`Undoubtedly the most common sort of aircraft in the skies of Himmilgard are post runners, a
ragtag mixture of disarmed obsolete fighters and purpose-built mail planes like this one.`,
      ),
    ),
    AirDestroyerDecl,
    inline(
      FCShortAirship(
        AirDestroyer,
        inline`The most common form of Air Destroyer in the war, forming the basis of the Gotha Empire's zeppelin
fleet. A warlord repairing a downed Jörmungandr can threaten an entire region.`,
      ),
    ),
  )
}
