// Converted from test/universe/corpus/min-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  assume,
  blocks,
  codeBlock,
  datetime,
  define,
  doc,
  emph,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  m,
  minus,
  path,
  show,
  space,
  sym,
  underline,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const entry = define('entry')
    .named('location', T.any, null)
    .named('organization', T.any, null)
    .named('skills', T.content, [])
    .named('time', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const list_2 = define('list').pos('arg1', T.content).returns(T.any).external()
  const linkedin = define('linkedin').pos('arg1', T.any).returns(T.any).external()
  const letter = define('letter').pos('arg1', T.content).named('to', T.any, null).returns(T.any).external()
  const resume_with = define('with')
    .named('address', T.any, null)
    .named('birth', T.any, null)
    .named('email', T.any, null)
    .named('info', T.any, null)
    .named('name', T.any, null)
    .named('phone', T.any, null)
    .named('photo', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/min-resume:0.2.0', [resume, entry, list_2, linkedin, letter]),
    show(
      resume_with({
        name: 'John B. Goode Workmann',
        title: 'Work Specialist',
        photo: image(path('assets/photo.png')),
        info: 'Relevant personal info',
        birth: [1997, 5, 19],
        address: 'Public address',
        email: 'workmann@email.com',
        phone: '+1 (000) 000-0000',
      }),
    ),
    m.heading(1, 'Objective'),
    'To be hired and work hard to (hopefully) earn some money.',
    m.heading(1, 'Professional Experience'),
    inline(
      entry({
        title: 'Chief Work Officer',
        organization: 'Macrosoft Corp',
        location: 'Bluemond (WA)',
        time: [2024, 2],
        skills: blocks(
          m.list(
            m.item(['Did more stuff']),
            m.item(['Applied the things I learned']),
            m.item(['Learned even more']),
            m.item(['Accomplished so much more']),
          ),
        ),
      }),
      space,
      entry({
        title: 'Proactivity Manager',
        organization: 'Amazônia LLC',
        location: 'Earttle (WA)',
        time: { from: [2023, 4, 1], to: [2023, 8, 2] },
        skills: blocks(
          m.list(m.item(['Did some stuff']), m.item(['Learned some things']), m.item(['Accomplished some goals'])),
        ),
      }),
    ),
    m.heading(1, 'Education'),
    inline(
      entry({
        title: 'PhD in Grinding',
        organization: 'Hardvar University',
        time: { from: [2022, 3, 13], to: [2025, 1, 11] },
        skills: blocks(
          m.list(
            m.item(['Learned stuff']),
            m.item(['Studied things']),
            m.item(['Researched some learned stuff']),
            m.item(['Thesis on interesting things']),
          ),
        ),
      }),
    ),
    m.heading(1, 'Qualification'),
    m.list(
      m.item([
        underline(inline`Really Useful Qualification`),
        '. MI Tech. Valid until',
        space,
        codeBlock([], add(assume<'int'>(datetime.today().year()), 3)),
      ]),
      m.item([
        underline(inline`Very Professional Course`),
        '. Ucademy,',
        space,
        codeBlock([], datetime.today().year()),
      ]),
      m.item([
        'Cool Certification. Genghis Academy,',
        space,
        codeBlock([], minus(assume<'int'>(datetime.today().year()), 1)),
      ]),
    ),
    m.heading(1, 'Skills'),
    inline(
      list_2(
        blocks(
          m.list(
            m.item(['Knows things']),
            m.item(['Smile often']),
            m.item(['Talks to a lot of people']),
            m.item(['Get things done']),
            m.item(['Fast coffee and bathroom breaks']),
          ),
        ),
      ),
    ),
    m.heading(1, 'Additional Information'),
    m.list(
      m.item(['Available to work 24/7']),
      m.item(['Available to do some tiresome business travels']),
      m.item(['Know some extra things']),
      m.item(['Did some extra work']),
      m.item(['Awarded as', space, emph(inline`Best Employee Ever ${datetime.today().year()}`)]),
    ),
    inline(linkedin('username')),
    inline(
      letter(
        { to: 'Googol LLC\nMount View (CA)' },
        blocks(
          'Dear Hiring Manager, or to whom it may concern,',
          inline`Please hire me. I work. A lot. Some say too much, but I think they are the ones who peripherally
don’t like working... I mean, you can’t call yourself a hard worker and refuse to work on Sundays
if your boss asks you to work on Saturdays. If they ask of you much, make sure you give them
too much --- that’s my life philosophy.`,
          inline`I’m also very attentive to details: I once set an out-of-office reply saying I would not be
checking emails while on holiday. Then I spent most of the holiday checking whether it was working
properly. I like to ensure everything runs like clockwork --- except for my sleep cycle, which
is a long-lost battle, but nothing two cups of coffee in the morning can’t fix.`,
          inline`I thrive under pressure, survive on caffeine, and only need to rest occasionally. If you need
someone who will work weekends, holidays, and possibly in their dreams --- I am your person.`,
          inline`I promise to bring unstoppable energy, a questionable work-life balance, and a genuine passion
for making your company even greater and wealthier. Please, let me prove that exhaustion is
just another word for "commitment."`,
          inline`Eagerly,${linebreak()} John B. Goode Workmann.`,
        ),
      ),
    ),
  )
}
