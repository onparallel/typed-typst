// Converted from test/universe/corpus/tieflied.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, inline, let_, linebreak, luma, pct, space } from '../../../src/index.ts'

export default () => {
  const annotation = define('annotation').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const author = define('author').pos('arg1', T.any).named('color', T.any, null).returns(T.any).external()
  const bridge = define('bridge').pos('arg1', T.content).returns(T.any).external()
  const chorus = define('chorus').pos('arg1', T.content).returns(T.any).external()
  const song = define('song')
    .pos('arg1', T.content)
    .named('author', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const songbook = define('songbook')
    .pos('arg1', T.content)
    .named('settings', T.any, null)
    .named('songbook-author', T.any, null)
    .named('title', T.any, null)
    .named('title-page', T.any, null)
    .returns(T.any)
    .external()
  const verse = define('verse').pos('arg1', T.content).returns(T.any).external()
  const [johnNewtonDecl, johnNewton] = let_('john-newton', author({ color: luma(pct(95)) }, 'John Newton'))
  return doc(
    importPackage('@preview/tieflied:0.2.2', [annotation, author, bridge, chorus, song, songbook, verse]),
    johnNewtonDecl,
    inline(
      songbook(
        {
          title: 'Totally real and valid songs',
          songbookAuthor: 'Tiefseetauchner',
          titlePage: true,
          settings: { showAnnotations: true, pagePerSong: true },
        },
        inline(
          space,
          song(
            { author: johnNewton, title: 'Amazing Grace' },
            inline(
              space,
              verse(inline`${space}Amazing grace, How sweet the sound${linebreak()} That saved a wretch like me.${linebreak()}
I once was lost, but now I am found,${linebreak()} Was blind, but now I see.${space}`),
              space,
            ),
          ),
          space,
          song(
            { author: 'Tiefseetauchner', title: 'Thankfully bad' },
            inline(
              space,
              verse(inline`${space}Wonderful sounds${linebreak()} Surround my brain${linebreak()} When the seratonin${linebreak()}
Comes to fame${space}`),
              space,
              chorus(inline`${space}Eating chicken and fries${linebreak()} I drink icecream ${linebreak()} Drinking icecream
and fries${linebreak()} I like to chicken to dream${space}`),
              space,
              verse(inline`${space}In the file transfer${linebreak()} Lies the truth${linebreak()} Of what you found${linebreak()}
In your youth${space}`),
              space,
              verse(inline`${space}For Jesus walked${linebreak()} Across a bridge (presumably)${linebreak()} Over the brook
Chidron${linebreak()} And presumably itched${space}`),
              space,
              bridge(inline`${space}The fries dies bies tries${linebreak()} I rap text like a bad packet${linebreak()} My
TCP connection dies${linebreak()} And my cat, she makes a real racket.${space}`),
              space,
              chorus(inline`${space}Eating chicken and fries${linebreak()} I drink icecream ${linebreak()} Drinking icecream
and fries${linebreak()} I like to chicken to dream${space}`),
              space,
              annotation(
                '[Outro]',
                inline`${space}I like cake,${linebreak()} And chicken,${linebreak()} In a cake${linebreak()} With bricks${linebreak()}
Yeah${space}`,
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
  )
}
