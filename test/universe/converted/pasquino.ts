// Converted from test/universe/corpus/pasquino.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  colbreak,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  linebreak,
  lorem,
  m,
  path,
  pct,
  pt,
  set,
  show,
  space,
  text,
} from '../../../src/index.ts'

export default () => {
  const poster = external('poster')
  const section = define('section').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const poster_with = define('with')
    .named('authors', T.any, null)
    .named('info', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(poster)
  return doc(
    importPackage('@preview/pasquino:0.1.0', [poster, section]),
    show(
      poster_with({
        title: inline`Rule-based system and forward chaining for${linebreak()} investigating incidents on Linux servers`,
        authors: ['Kevin T. Oloughlin', 'Paula R. Hoff'],
        info: [inline`Course: Expert Systems 2026`, inline`Prof. Leo T. Garcia`],
        theme: 'blue',
      }),
    ),
    inline(section({ title: 'Introduction' }, blocks(inline(lorem(50)), inline(lorem(90))))),
    inline(
      section({ title: 'Objectives' }, blocks(m.enum(m.item([lorem(30)]), m.item([lorem(30)]), m.item([lorem(30)])))),
    ),
    inline(
      section(
        { title: 'Methodology' },
        inline(
          space,
          figure(
            { caption: inline`Forward chaining visualization` },
            image({ width: pct(90) }, path('images/method.png')),
          ),
          space,
          lorem(80),
          space,
        ),
      ),
    ),
    inline(
      section(
        { title: 'References' },
        blocks(
          m.lines(
            set(text, { size: pt(26) }),
            m.list(
              m.item(['Giarratano, J. C., & Riley, G. D. (2005). Expert Systems: Principles and Programming.']),
              m.item(['Nemeth, E., et al. (2017). UNIX and Linux System Administration Handbook.']),
              m.item(['Russell, S. J., & Norvig, P. (2021). Artificial Intelligence: A Modern Approach.']),
              m.item(['Buchanan, B. G., & Shortliffe, E. H. (1984). Rule-Based Expert Systems.']),
            ),
          ),
        ),
      ),
    ),
    inline(colbreak()),
    inline(
      section(
        { title: 'Design' },
        inline(
          space,
          figure(
            { caption: inline`Architecture of the forward chaining system` },
            image({ width: pct(100) }, path('images/architecture.png')),
          ),
          space,
        ),
      ),
    ),
    inline(
      section(
        { title: 'Results' },
        inline(
          space,
          figure({ caption: inline`WebApp for the inference system` }, image(path('images/result.png'))),
          space,
        ),
      ),
    ),
    inline(
      section(
        { title: 'Conclusions' },
        blocks(m.list(m.item([lorem(25)]), m.item([lorem(25)]), m.item([lorem(25)]), m.item([lorem(25)]))),
      ),
    ),
  )
}
