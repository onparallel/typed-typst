// Converted from test/universe/corpus/impressive-impression.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  block,
  blocks,
  call,
  center,
  codeBlock,
  contentBlock,
  data,
  datetime,
  define,
  doc,
  em,
  emph,
  external,
  fr,
  grid,
  horizon,
  image,
  importFile,
  importPackage,
  inline,
  left,
  let_,
  linebreak,
  link,
  m,
  par,
  parbreak,
  path,
  pt,
  right,
  set,
  smartquote,
  space,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const cv = define('cv')
    .named('pages-content', T.any, null)
    .named('paper', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const cropImage = external('crop-image')
  const colorizeSvgString = external('colorize-svg-string')
  const dotRatings = external('dot-ratings')
  const makePill = define('make-pill').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const makeAsidePersona = define('make-aside-persona')
    .pos('arg1', T.any)
    .named('image', T.any, null)
    .named('pronouns', T.any, null)
    .named('short-description', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const makeAsideGrid = define('make-aside-grid')
    .rest('args', T.any)
    .named('align', T.any, null)
    .named('columns', T.any, null)
    .named('rows', T.any, null)
    .named('theme', T.any, null)
    .returns(T.any)
    .external()
  const makeMainContentBlock = external('make-main-content-block')
  const makeMainContentBlockWithTimeline = external('make-main-content-block-with-timeline')
  const themeHelper = define('theme-helper').pos('arg1', T.any).returns(T.any).external()
  const flag = define('flag').pos('arg1', T.any).returns(T.any).external()
  const faIconFactory = define('fa-icon-factory').pos('arg1', T.any).returns(T.any).external()
  const faIconFactoryStack = define('fa-icon-factory-stack').pos('arg1', T.any).returns(T.any).external()
  const theme = external('theme')
  const faIcon = external('fa-icon')
  const faStack = external('fa-stack')
  const nth = define('nth').pos('arg1', T.any).named('sup', T.any, null).returns(T.any).external()
  const dotRatings_with = define('with')
    .named('color-active', T.any, null)
    .named('color-inactive', T.any, null)
    .named('size', T.any, null)
    .named('spacing', T.any, null)
    .returns(T.any)
    .external(dotRatings)
  const makeMainContentBlock_with = define('with')
    .named('theme', T.any, null)
    .returns(T.any)
    .external(makeMainContentBlock)
  const makeMainContentBlockWithTimeline_with = define('with')
    .named('theme', T.any, null)
    .returns(T.any)
    .external(makeMainContentBlockWithTimeline)
  const [nameDecl, name] = let_('name', 'Dirk Gently')
  const [pronounsDecl, pronouns] = let_('pronouns', 'he/him')
  const [profileImageDecl, profileImage] = let_('profile-image', image(path('assets/profile.jpg')))
  const [shortDescriptionDecl, shortDescription] = let_(
    'short-description',
    inline`${space}Holistic Detective & Interconnectedness Specialist${space}`,
  )
  const [thDecl, th] = let_('th', themeHelper(theme))
  const [iconerStackDecl, iconerStack] = let_('iconer-stack', faIconFactoryStack(theme))
  const [iconerDecl, iconer] = let_('iconer', faIconFactory(theme))
  const [dotRatingsDecl, dotRatings_2] = let_(
    'dot-ratings',
    dotRatings_with({
      size: pt(6.5),
      spacing: pt(3.5),
      colorActive: call(th, 'primary-accent-color'),
      colorInactive: unsafeRaw.code<any>`th("faint-text-color").transparentize(65%)`,
    }),
  )
  const linker = define('linker')
    .pos('dest', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let body-wrapped = [#text(body, fill: th("primary-accent-color"))#h(0.2em)#box(iconer("link", size: 0.7em), height: 0.8em)]
  return link(dest, body-wrapped)
}`,
    )
  const linkerPdf = define('linker-pdf')
    .pos('dest', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let body-prefixed = [#fa-icon("file-pdf")#h(0.2em)#body]
  return linker(dest, body-prefixed)
}`,
    )
  const readAndColorizeSvg = define('read-and-colorize-svg')
    .pos('path', T.any)
    .pos('color', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let svg-content = read(path)
  let colored-svg = colorize-svg-string(svg-content, color)
  return colored-svg
}`,
    )
  const [makeMainContentBlockDecl, makeMainContentBlock_2] = let_(
    'make-main-content-block',
    makeMainContentBlock_with({ theme: theme }),
  )
  const [makeMainContentBlockWithTimelineDecl, makeMainContentBlockWithTimeline_2] = let_(
    'make-main-content-block-with-timeline',
    makeMainContentBlockWithTimeline_with({ theme: theme }),
  )
  const [mainContent1Decl, mainContent1] = let_(
    'main-content-1',
    blocks(
      m.lines(
        m.heading(2, 'Introduction'),
        inline(
          block(
            blocks(
              m.lines(
                set(par, { justify: true }),
                'Holistic detective with an unwavering commitment to exploring the fundamental interconnectedness of all things. I combine an unconventional investigative approach with a keen intuition for improbable solutions, engaging confidently with the realms of the paranormal, temporal anomalies, and missing cats.',
              ),
              'My experience spans peculiar cases involving time travel, quantum uncertainty, and reluctant clients. I thrive in unpredictable environments, leveraging resilience and a penchant for eccentric problem-solving to uncover answers that others overlook.',
            ),
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Work Experience'),
        inline(
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://holisticdetective.com', 'Holistic Detective Agency')) },
            data([inline`Present`, inline`2018`]),
            'Founder & Chief Detective',
            blocks(
              m.lines(
                'Established and operated a one-of-a-kind agency dedicated to solving mysteries via the interconnectedness of all things.',
                m.list(
                  m.item([
                    'Successfully resolved cases involving missing cats, haunted computers, and spontaneously appearing sofas.',
                  ]),
                  m.item([
                    'Developed proprietary “luck-based” investigative techniques and pioneered random taxi route methodologies.',
                  ]),
                ),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://en.wikipedia.org/wiki/Cambridge', 'Various Clients')) },
            data([inline`2018`, inline`2017`]),
            'Quantum Cat Retrieval Specialist – Freelance',
            blocks(
              m.list(
                m.item([
                  'Assisted clients in locating pets lost to quantum uncertainty and other improbable circumstances.',
                ]),
                m.item([
                  'Collaborated with physicists and veterinarians to develop the Schrödinger Protocol for ambiguous animal recovery.',
                ]),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://www.cam.ac.uk/', 'St. Cedd’s College')) },
            data([inline`2017`, inline`2015`]),
            'Temporal Anomaly Investigator – Contractor',
            blocks(
              m.list(
                m.item([
                  'Investigated and contained time loops, paradoxes, and chronologically misplaced furniture within the college precincts.',
                ]),
                m.item([
                  'Published',
                  space,
                  smartquote({ double: true }),
                  emph(inline`A Holistic Guide to Sofa Extraction from Impossible Spaces`),
                  smartquote({ double: true }),
                  space,
                  '(unofficial circulation).',
                ]),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://en.wikipedia.org/wiki/London', 'London')) },
            data([inline`2016`, inline`2014`]),
            'Unconventional Technology Consultant – Part-Time',
            blocks(
              m.list(
                m.item([
                  'Provided troubleshooting for haunted answering machines, sentient software, and vintage electronics.',
                ]),
                m.item(['Implemented holistic diagnostics, improving technology-cohabitation harmony by 47%.']),
              ),
            ),
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Education'),
        inline(
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://www.cam.ac.uk/', 'University of Cambridge')) },
            data([inline`2014`, inline`2015`]),
            'MSc in Applied Holistic Sciences',
            blocks(
              m.lines(
                'Specialised in advanced interconnectedness analytics, time anomaly mitigation, and cross-dimensional case studies.',
                m.list(
                  m.item([
                    'Research thesis:',
                    space,
                    smartquote({ double: true }),
                    emph(inline`The Practical Applications of Quantum Uncertainty in Everyday Detection.`),
                    smartquote({ double: true }),
                  ]),
                  m.item(['Elected chair of the Society for Random Investigations and Improvised Solutions.']),
                ),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://www.cam.ac.uk/', 'University of Cambridge')) },
            data([inline`2011`, inline`2014`]),
            'BA (Hons) in Holistic Detection',
            blocks(
              m.lines(
                inline`Developed a rigorous understanding of the fundamental interconnectedness of all things.${linebreak()}`,
                m.list(
                  m.item(['Focus on quantum paradoxes, time travel theory, and sofa geometry.', linebreak()]),
                  m.item(['President of the Pizza Appreciation Society, founding member of the Parapsychology Club.']),
                ),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://www.longroad.ac.uk/', 'Long Road College')) },
            data([inline`2008`, inline`2011`]),
            'A-Levels',
            blocks(
              m.lines(
                'Philosophy, Physics, and Strange Occurrences',
                m.list(
                  m.item(['Achieved top marks in unorthodox reasoning and creative logic.']),
                  m.item(['Winner of the “Most Unlikely Solution” award (two consecutive years).']),
                  m.item(['Organised the annual Quantum Cat Hide-and-Seek competition.']),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
  const [asideContent1Decl, asideContent1] = let_(
    'aside-content-1',
    blocks(
      inline(
        makeAsidePersona(
          { pronouns: pronouns, shortDescription: shortDescription, image: profileImage, theme: theme },
          name,
        ),
      ),
      inline(
        makeAsideGrid(
          { theme: theme },
          call(iconerStack, 'calendar'),
          inline`March ${nth({ sup: true }, 17)}, 1958`,
          call(iconerStack, 'map-marker-alt'),
          inline`Cambridge, UK`,
          call(iconerStack, 'globe'),
          inline(link('https://holisticdetective.co.uk', 'holisticdetective.co.uk')),
          call(iconerStack, 'phone'),
          inline(link('tel:+44 800 PARADOX', inline`+44 800 PARADOX`)),
          call(iconerStack, 'at'),
          inline(link('mailto:dirk@holisticdetective.co.uk', 'dirk@holisticdetective.co.uk')),
        ),
      ),
      m.lines(
        m.heading(2, 'Social Network'),
        inline(
          makeAsideGrid(
            { theme: theme },
            call(iconer, 'linkedin'),
            inline(link('https://linkedin.com/in/JeppeKlitgaard', 'dirkgently')),
            call(iconer, 'github'),
            inline(link('https://github.com/JeppeKlitgaard', 'HolisticDirk')),
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Languages'),
        inline(
          makeAsideGrid(
            {
              columns: 3,
              rows: pt(12),
              align: [add(horizon, center), add(horizon, left), add(horizon, right)],
              theme: theme,
            },
            flag('GB'),
            inline`English`,
            call(dotRatings_2, 5, 5),
            flag('FR'),
            inline`French-ish`,
            call(dotRatings_2, 4, 5),
            flag('GR'),
            inline`Ancient Greek`,
            call(dotRatings_2, 3, 5),
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Hard Skills'),
        inline(
          makeAsideGrid(
            { columns: 2, theme: theme },
            call(iconer, 'project-diagram'),
            inline`Interconnection Detection`,
            call(iconer, 'hourglass-half'),
            inline`Time Paradox Wrangling`,
            call(iconer, 'cat'),
            inline`Quantum Cat Rescue`,
            call(iconer, 'dice'),
            inline`Luck-as-a-Service`,
            call(iconer, 'rocket'),
            inline`Interdimensional Travel`,
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Soft Skills'),
        inline(
          makeAsideGrid(
            { columns: 2, theme: theme },
            call(iconer, 'lightbulb'),
            inline`Intuitive Hunching`,
            call(iconer, 'sun'),
            inline`Stubborn Optimism`,
            call(iconer, 'hat-wizard'),
            inline`Charming Eccentricity`,
            call(iconer, { solid: true }, 'comment-dots'),
            inline`Persurasive Rambling`,
          ),
        ),
      ),
    ),
  )
  const [todayDecl, today] = let_('today', datetime.today())
  const [dayDecl, day] = let_('day', nth({ sup: true }, today.display('[day padding:none]')))
  const [monthDecl, month] = let_('month', today.display('[month repr:long]'))
  const [yearDecl, year] = let_('year', today.display('[year]'))
  const [mainContent2Decl, mainContent2] = let_(
    'main-content-2',
    blocks(
      m.lines(
        m.heading(2, 'Awards'),
        inline(
          contentBlock(
            blocks(
              set(par, { spacing: em(0), leading: em(0.3) }),
              inline(
                call(
                  makeMainContentBlockWithTimeline_2,
                  { supplement: inline`Self-Awarded`, titleAsHeading: false, timelineLineGap: pt(0) },
                  inline`2021`,
                  inline`Lifetime Achievement in Holistic Detection`,
                  inline(),
                ),
                space,
                call(
                  makeMainContentBlockWithTimeline_2,
                  {
                    supplement: inline`British Association of Unorthodox`,
                    titleAsHeading: false,
                    timelineLineGap: pt(0),
                  },
                  inline`2018`,
                  'Holistic Detective of the Year',
                  inline(),
                ),
                space,
                call(
                  makeMainContentBlockWithTimeline_2,
                  {
                    supplement: inline`Society for Applied Serendipity`,
                    titleAsHeading: false,
                    timelineLineGap: pt(0),
                  },
                  inline`2020`,
                  'Outstanding Coincidence Resolution',
                  inline(),
                ),
                space,
                call(
                  makeMainContentBlockWithTimeline_2,
                  {
                    supplement: inline`Royal Society of Furniture Physics`,
                    titleAsHeading: false,
                    timelineLineGap: pt(0),
                  },
                  inline`2015`,
                  inline`${nth({ sup: true }, 2)} Place, Annual Sofa Relocation Challenge`,
                  inline(),
                ),
              ),
            ),
          ),
        ),
      ),
      m.lines(
        inline(v(em(-0.8))),
        m.heading(2, 'Other Certifications'),
        inline(
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline`UK Council of Multiversal Affairs`, timelineLineGap: pt(0) },
            inline`2013`,
            inline`Certified Interdimensional Liaison`,
            inline`A*(a*) grade`,
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline`Temporal Anomaly Bureau` },
            inline`2018`,
            inline`Chronological Irregularity Investigator`,
            inline`Registration valid until January ${nth(3)}, 2318.`,
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Association and Voluntary Work'),
        inline(
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline`Sofa Displacement Prevention Society` },
            data([inline`2020`, inline`2019`]),
            'Chair of the Board',
            inline`${space}Leads strategic initiatives to address and investigate the mysterious phenomena of sofas
becoming inexplicably stuck in stairwells and hallways across the UK.${space}`,
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline`Society for Safe Timekeeping` },
            data([inline`Present`, inline`2020`]),
            'Temporal Confusion Helpline Advisor',
            blocks(
              m.lines(
                'Offers comfort and pragmatic (if peculiar) solutions to individuals experiencing minor chronological disturbances.',
                m.list(m.item(['Provides advice on time loops, déjà vu, and misplaced temporal objects.'])),
              ),
            ),
          ),
          space,
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline(link('https://www.camden.gov.uk/', 'Camden Borough Historical Society')) },
            data([inline`2018`, inline`2016`]),
            'Midnight Ghost Walk Guide',
            inline`${space}Led educational (and occasionally interactive) tours on local hauntings and spectral
residents.${space}`,
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'References'),
        inline(
          call(
            makeMainContentBlockWithTimeline_2,
            { supplement: inline`Pet Extraordinaire`, timelineLineGap: pt(0) },
            inline`2023`,
            'Honourable Lord Marmaduke Whiskerson III',
            inline`${space}"${emph(inline`Impeccable pet recovery, albeit numerous unexpected surcharges`)}"${linebreak()}
Letter of recommendation available upon request.${space}`,
          ),
        ),
      ),
      inline(
        call(
          makeMainContentBlockWithTimeline_2,
          { supplement: inline`Chair, Institute for Chronological Mishaps`, timelineLineGap: pt(0) },
          inline`2020`,
          'Dr Thelma Quibble',
          inline`${space}"${emph(inline`While he may be chronologically impaired, his insights into time-related phenomena are unparalleled.`)}"${linebreak()}
Letter of recommendation available here: ${linkerPdf('https://timetraveler.wiki/', 'dr_quibble.pdf')}${space}`,
        ),
      ),
      m.lines(
        m.heading(2, 'Other Documents'),
        inline(
          contentBlock(
            blocks(
              set(text, { size: pt(9) }),
              inline(
                grid(
                  { columns: 2, align: [left, left], columnGutter: em(2), rowGutter: pt(6) },
                  inline`Chronological Irregularity Inspector Certificate`,
                  linkerPdf('https://www.google.com/', 'cert_chron_irreg.pdf'),
                  inline`Interdimensional Relations Diploma`,
                  linkerPdf('https://www.google.com/', 'diploma_inter_rels.pdf'),
                ),
              ),
              parbreak(),
            ),
          ),
        ),
      ),
      inline(
        v(fr(1)),
        space,
        grid(
          { columns: [fr(1), fr(2), fr(1)], align: [add(center, horizon), add(center, horizon), add(center, horizon)] },
          codeBlock([
            todayDecl,
            dayDecl,
            monthDecl,
            yearDecl,
            text({ fill: call(th, 'secondary-text-color'), weight: 'semibold' }, inline`${month} ${day}, ${year}`),
          ]),
          inline(space, image({ height: em(3) }, path('assets/signature.svg')), space),
          text({ fill: call(th, 'secondary-text-color'), weight: 'semibold' }, name),
        ),
      ),
    ),
  )
  const [pillDecl, pill] = let_('pill', (body) => makePill(body, theme))
  const [asideContent2Decl, asideContent2] = let_(
    'aside-content-2',
    blocks(
      inline(makeAsidePersona({ shortDescription: shortDescription, theme: theme }, name)),
      m.lines(
        m.heading(2, 'Detection Techniques'),
        inline(
          makeAsideGrid(
            { columns: 3, align: [add(horizon, center), add(horizon, left), add(horizon, right)], theme: theme },
            call(iconer, 'taxi'),
            inline`Taxi Logic`,
            call(dotRatings_2, 5, 5),
            call(iconer, 'cat'),
            inline`Cat Sense`,
            call(dotRatings_2, 4, 5),
            call(iconer, 'hourglass-half'),
            inline`Time Reversal`,
            call(dotRatings_2, 4, 5),
            call(iconer, 'pizza-slice'),
            inline`Pizza Stakeout`,
            call(dotRatings_2, 5, 5),
            call(iconer, 'project-diagram'),
            inline`Clue Weaving`,
            call(dotRatings_2, 3, 5),
            call(iconer, 'ghost'),
            inline`Paranormal`,
            call(dotRatings_2, 2, 5),
            call(iconer, 'lightbulb'),
            inline`Hunch Jumping`,
            call(dotRatings_2, 4, 5),
            call(iconer, 'dice'),
            inline`Dumb Luck`,
            call(dotRatings_2, 5, 5),
            call(iconer, 'question'),
            inline`Wild Guessing`,
            call(dotRatings_2, 3, 5),
          ),
        ),
      ),
      m.lines(
        m.heading(2, 'Problem Solving Skills'),
        inline(
          makeAsideGrid(
            { columns: 3, align: [add(horizon, center), add(horizon, left), add(horizon, right)], theme: theme },
            call(iconer, 'microchip'),
            inline`Tech Taming`,
            call(dotRatings_2, 3, 5),
            call(iconer, 'hammer'),
            inline`Percussive`,
            call(dotRatings_2, 4, 5),
            call(iconer, 'ruler'),
            inline`Non-Euclidean`,
            call(dotRatings_2, 2, 5),
            call(iconer, 'power-off'),
            inline`Rebooting`,
            call(dotRatings_2, 5, 5),
          ),
        ),
      ),
      m.lines(m.heading(2, 'Case Portfolio'), pillDecl),
      inline(
        call(pill, 'Wandering Cat'),
        space,
        call(pill, 'Poltergeists'),
        space,
        call(pill, 'Tea Time Paradox'),
        space,
        call(pill, 'Ghosts'),
        space,
        call(pill, 'Sofa Teleportation'),
        space,
        call(pill, 'Dodos'),
        space,
        call(pill, 'Haunted Hog'),
        space,
        call(pill, 'Rickshaws'),
        space,
        call(pill, 'Vanishing Pizza'),
        space,
        call(pill, 'Time Loops'),
        space,
        call(pill, 'Ghost Wi-Fi'),
        space,
        call(pill, 'Haunts'),
        space,
        call(pill, 'Perpetual Coincidence'),
        space,
        call(pill, 'Broken Time'),
        space,
        call(pill, 'Raining Fish'),
        space,
        call(pill, 'Evasive Shadow'),
        space,
        call(pill, 'Psychic Postcard'),
        space,
        call(pill, 'Cat Relocation'),
        space,
        call(pill, 'Burial Sites'),
        space,
        call(pill, 'Mythical Creatures'),
      ),
    ),
  )
  return doc(
    importPackage('@preview/impressive-impression:0.2.1', [
      cv,
      cropImage,
      colorizeSvgString,
      dotRatings,
      makePill,
      makeAsidePersona,
      makeAsideGrid,
      makeMainContentBlock,
      makeMainContentBlockWithTimeline,
      themeHelper,
    ]),
    m.lines(importFile('utils.typ', [flag, faIconFactory, faIconFactoryStack]), importFile('theme.typ', [theme])),
    m.lines(importPackage('@preview/fontawesome:0.5.0', [faIcon, faStack]), importPackage('@preview/nth:1.0.1', [nth])),
    m.lines(nameDecl, pronounsDecl, profileImageDecl, shortDescriptionDecl),
    thDecl,
    m.lines(iconerStackDecl, iconerDecl, dotRatingsDecl),
    linker.decl,
    linkerPdf.decl,
    readAndColorizeSvg.decl,
    m.lines(makeMainContentBlockDecl, makeMainContentBlockWithTimelineDecl),
    mainContent1Decl,
    asideContent1Decl,
    mainContent2Decl,
    asideContent2Decl,
    inline(
      cv({
        theme: theme,
        paper: 'a4',
        pagesContent: [
          { left: asideContent1, main: mainContent1 },
          { left: asideContent2, main: mainContent2 },
        ],
      }),
    ),
  )
}
