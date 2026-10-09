// Converted from test/universe/corpus/tudelft-prime-presentation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  blocks,
  center,
  cm,
  define,
  doc,
  em,
  enum_,
  external,
  grid,
  horizon,
  importPackage,
  inline,
  let_,
  linebreak,
  list,
  m,
  math,
  parbreak,
  place,
  pt,
  red,
  scale,
  set,
  show,
  space,
  strong,
  text,
  times,
  underline,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const primeSlides = external('prime-slides')
  const programme_slide = define('programme_slide')
    .pos('arg1', T.content)
    .named('book_sections', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide').pos('arg1', T.content).named('slide-type', T.any, null).returns(T.any).external()
  const poll_answers = define('poll_answers')
    .pos('arg1', T.content)
    .named('cols', T.any, null)
    .named('column-gutter', T.any, null)
    .named('correct_answer', T.any, null)
    .named('row-gutter', T.any, null)
    .named('students', T.any, null)
    .returns(T.any)
    .external()
  const definitions = define('definitions')
    .pos('arg1', T.content)
    .named('text-size', T.any, null)
    .returns(T.any)
    .external()
  const theorem = define('theorem').pos('arg1', T.content).returns(T.any).external()
  const MOOCblue = external('MOOCblue')
  const MOOCred = external('MOOCred')
  const definition = define('definition').pos('arg1', T.content).returns(T.any).external()
  const pause = external('pause')
  const color_2 = define('color').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const practice_slide = define('practice_slide').pos('arg1', T.content).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).returns(T.any).external()
  const MOOCorange = external('MOOCorange')
  const tudelftColors = external('tudelft-colors')
  const wrapup_slide = define('wrapup_slide')
    .pos('arg1', T.content)
    .named('book_sections', T.any, null)
    .named('topic', T.any, null)
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide')
    .pos('arg1', T.content)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const primeSlides_with = define('with')
    .named('background', T.any, null)
    .named('logo', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(primeSlides)
  const tudelftColors_primary = external('primary', tudelftColors)
  const [studentsDecl, students] = let_('students', false)
  const [cypher_squareDecl, cypher_square] = let_(
    'cypher_square',
    blocks(
      parbreak(),
      inline(
        grid(
          {
            stroke: { thickness: pt(1.5), paint: MOOCorange },
            columns: times([em(1.5)], 7),
            rows: times([em(1), em(1), em(0.4)], 4),
            columnGutter: em(0),
            rowGutter: em(0),
            align: add(center, horizon),
          },
          inline`A`,
          inline`B`,
          inline`C`,
          inline`D`,
          inline`E`,
          inline`F`,
          inline`G`,
          inline`1`,
          inline`2`,
          inline`3`,
          inline`4`,
          inline`5`,
          inline`6`,
          inline`7`,
          grid.cell({ colspan: 7 }, inline()),
          inline`H`,
          inline`I`,
          inline`J`,
          inline`K`,
          inline`L`,
          inline`M`,
          inline`N`,
          inline`8`,
          inline`9`,
          inline`10`,
          inline`11`,
          inline`12`,
          inline`13`,
          inline`14`,
          grid.cell({ colspan: 7 }, inline()),
          inline`O`,
          inline`P`,
          inline`Q`,
          inline`R`,
          inline`S`,
          inline`T`,
          inline`U`,
          inline`15`,
          inline`16`,
          inline`17`,
          inline`18`,
          inline`19`,
          inline`20`,
          inline`21`,
          grid.cell({ colspan: 7 }, inline()),
          inline`V`,
          inline`W`,
          inline`X`,
          inline`Y`,
          inline`Z`,
          inline(),
          inline(),
          inline`22`,
          inline`23`,
          inline`24`,
          inline`25`,
          inline`26`,
          inline(),
          inline(),
          grid.cell({ colspan: 7 }, inline()),
        ),
        space,
        v(em(-0.5)),
        space,
        align(center, text({ size: pt(18) }, inline`${strong(inline`Table.`)} Character encoding`)),
      ),
    ),
  )
  return doc(
    m.lines(
      importPackage('@preview/tudelft-prime-presentation:0.1.3', [
        primeSlides,
        programme_slide,
        slide,
        poll_answers,
        definitions,
        theorem,
        MOOCblue,
        MOOCred,
        definition,
        pause,
        color_2,
        practice_slide,
        remark,
        MOOCorange,
        tudelftColors,
        wrapup_slide,
        titleSlide,
      ]),
      unsafeRaw.markup`#import "@preview/fletcher:0.5.7" as fletcher: diagram, node, edge`,
      unsafeRaw.markup`#import fletcher.shapes: diamond`,
    ),
    show(math.equation, set(text, { font: 'Lete Sans Math' })),
    m.lines(
      set(math.mat, { delim: '[' }),
      set(math.vec, { delim: '[' }),
      set(enum_, { spacing: em(2) }),
      set(list, { spacing: em(1.2) }),
    ),
    set(math.mat, { columnGap: em(1) }),
    studentsDecl,
    show(
      primeSlides_with({
        title: 'Linear Algebra Lecture 5',
        subtitle: 'Matrix operations',
        background: 'background/background.png',
        logo: 'Linear Algebra/Logos/intersection_planes.png',
      }),
    ),
    m.lines(
      m.heading(2, 'Programme'),
      inline(
        programme_slide(
          { book_sections: [2.1] },
          blocks(
            parbreak(),
            m.list(
              m.item(['Matrix addition and scalar multiplication']),
              m.item(['Matrix multiplication']),
              m.item(['Transpose of a matrix']),
            ),
            parbreak(),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Polling questions using Vevox'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            m.list(
              m.item(['Go to vevox.app and enter the session ID:']),
              m.item(['No personal informations is required']),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Matrix addition and scalar multiplication'),
    m.lines(
      m.heading(2, 'Matrix addition'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`Let ${unsafeRaw.math`A=mat(1,1; 3,5)`} and ${unsafeRaw.math`B = mat(2&, -2&; 4, -1; -2, 3)`},`,
            inline`compute ${unsafeRaw.math`A+B`} if possible.`,
            inline(
              poll_answers(
                { cols: 1, correct_answer: 3, students: students },
                blocks(
                  m.enum(
                    m.numbered(1, [unsafeRaw.math`mat(3&, -1&; 7, 4; -2,3)`]),
                    m.numbered(2, [unsafeRaw.math`mat(2&, -2&;5, 0; 1, 8)`]),
                    m.numbered(3, ['Not defined']),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix addition and scalar multiplication'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`Let ${unsafeRaw.math`A = mat(1,1;3,5)`} and ${unsafeRaw.math`B=mat(2, -2; 4, -1)`},`,
            inline`compute ${unsafeRaw.math`2A-B`} if possible.`,
            inline(
              poll_answers(
                { cols: 1, rowGutter: em(2), correct_answer: 1, students: students },
                blocks(
                  m.enum(
                    m.numbered(1, [unsafeRaw.math`mat(0&, 4&; 2, 11)`]),
                    m.numbered(2, [unsafeRaw.math`mat(-2&, -6&;-2, 12)`]),
                    m.numbered(3, ['Not defined']),
                  ),
                ),
              ),
            ),
            parbreak(),
          ),
        ),
      ),
    ),
    m.heading(2, 'Some special types of matrics'),
    inline(
      slide(
        { slideType: 'definition' },
        inline(
          space,
          definitions(
            { textSize: pt(23) },
            inline`${space}An ${unsafeRaw.math`m times n`} matrix ${unsafeRaw.math`A`} is called a: ${list({ indent: em(1), spacing: em(1.1) }, list.item(inline`${underline(inline`zero matrix`)} if all entries are zeros.`), list.item(inline`${underline(inline`square matrix`)} if ${unsafeRaw.math`m = n`}.`))}
The ${underline(inline`main diagonal`)} of a square matrix consists of the entries ${unsafeRaw.math`a_(i i)`}.${linebreak()}
A square matrix is called ${unsafeRaw.math`a(n)`}: ${list(
              { indent: em(1), spacing: em(1.1) },
              list.item(inline`${underline(inline`diagonal matrix`)} if all off-diagonal entries are zeros.`),
              list.item(
                inline`${underline(inline`identity matrix`)} if its a diagonal matrix with 1's on the main diagonal.`,
              ),
              list.item(inline`${underline(inline`lower/upper triangular matrix`)} if all entries above/below the main diagonal
are zeros.`),
            )}${space}`,
          ),
          space,
        ),
      ),
    ),
    m.lines(
      m.heading(2, text({ size: pt(30) }, 'Properties of matrix addition and scalar multiplication')),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            theorem(inline`${space}Let ${unsafeRaw.math`A`}, ${unsafeRaw.math`B`} and ${unsafeRaw.math`C`} be matrices
of the same size and let ${unsafeRaw.math`r`} and ${unsafeRaw.math`s`} be scalars, then: ${enum_({ numbering: 'a.', indent: em(1), spacing: em(0.95) }, enum_.item(inline(unsafeRaw.math`A+ B = B+A`)), enum_.item(inline(unsafeRaw.math`(A+B)+C = A + (B+C)`)), enum_.item(inline(unsafeRaw.math`A+0 = A`)), enum_.item(inline(unsafeRaw.math`r(A+B) = r A + r B`)), enum_.item(inline(unsafeRaw.math`(r+s)A = r A + s A`)), enum_.item(inline(unsafeRaw.math`r(s A) = (r s)A`)))}${space}`),
            space,
          ),
        ),
      ),
    ),
    m.heading(1, 'Matrix multiplication'),
    m.lines(
      m.heading(2, 'Composition of linear transformations'),
      inline(
        slide(
          { slideType: 'definition' },
          blocks(
            inline(
              theorem(inline`${space}Given two linear transformations ${unsafeRaw.math`T:bb(R)^p->bb(R)^n`} and ${unsafeRaw.math`S:bb(R)^n -> bb(R)^m`},
then the composition ${unsafeRaw.math`S compose T :bb(R)^p -> bb(R)^m`}, defined by ${unsafeRaw.math.block`(S compose T)(upright(bold(x))) = S(T(upright(bold(x)))),`}
is also a linear transformation.${space}`),
            ),
            inline(
              place(
                { dx: cm(9), dy: cm(0.8) },
                unsafeRaw.code<any>`diagram(
      //Diamonds
      node((0,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer : -1),
      node((1,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer : -1),
      node((2,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer: -1),
      
      node((0,-.35),$bb(R)^p$, fill: none), // Upper label R^p
      node((0,0), "", shape: circle, radius: 1mm ,fill : MOOCred, name: <A>), // dot
      node((0,.35),$upright(bold(x))$, fill: none), // Lower label x
      edge(<A>,<B>,"->",bend: 45deg)[$T$], // Arrow
      node((1,-.35),$bb(R)^n$, fill: none), // Upper label
      node((1,0),"",shape: circle, radius: 1mm ,fill : MOOCred, name: <B>), // dot
      node((1,.35),$T(upright(bold(x)))$, fill: none), //Lower label
      edge(<B>,<C>,"->", bend: 45deg)[$S$], // Arrow
      node((2,-.35),$bb(R)^m$, fill: none), // Upper Label
      node((2,0),"",shape: circle, radius: 1mm ,fill : MOOCred, name: <C>), // dot
      node((2.4,.35),$S(T(upright(bold(x))))$, fill: none), // Lower Label
      edge(<A>,<C>, "->", bend: -45deg)[$S compose T$], // Arrow
    )`,
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix multiplication'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            definition(inline`${space}Let ${unsafeRaw.math`A`} be an ${unsafeRaw.math`m times n`} matrix and ${unsafeRaw.math`B`}
an ${unsafeRaw.math`n times p`} matrix. The ${strong(inline`product`)} ${unsafeRaw.math`A B`}
of ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`} (in that order) is equal to the standard matrix
of the composite mapping ${unsafeRaw.math`S compose T`}, where ${unsafeRaw.math`S(upright(bold(x))) = A upright(bold(x))`}
and ${unsafeRaw.math`T(upright(bold(x)))=B upright(bold(x)).`}${linebreak()} ${linebreak()}
(In particular, ${unsafeRaw.math`A B`} is an ${unsafeRaw.math`m times p`} matrix).${space}`),
            space,
            place(
              { dx: cm(9), dy: cm(0.8) },
              unsafeRaw.code<any>`diagram(
      node((0,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer : -1),
      node((1,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer : -1),
      node((2,0),shape: diamond,stroke: MOOCblue, fill : MOOCblue.lighten(20%), width: 2cm, height : .8cm, layer: -1),
      
      node((0,-.35),$bb(R)^p$, fill: none), // Upper label
      node((0,0), "", shape: circle, radius: 1mm ,fill : MOOCred, name: <A>),
      node((0,.35),$upright(bold(x))$, fill: none), // Lower label
      edge(<A>,<B>,"->",bend: 45deg)[$T$], // Arrow
      node((1,-.35),$bb(R)^n$, fill: none), // Upper label
      node((1,0),"",shape: circle, radius: 1mm ,fill : MOOCred, name: <B>),
      node((1,.35),$B upright(bold(x))$, fill: none), //Lower label
      edge(<B>,<C>,"->", bend: 45deg)[$S$], // Arrow
      node((2,-.35),$bb(R)^m$, fill: none), // Upper Label
      node((2,0),"",shape: circle, radius: 1mm ,fill : MOOCred, name: <C>),
      node((2.4,.35),$A(B upright(bold(x)))$, fill: none), // Lower Label
      edge(<A>,<C>, "->", bend: -45deg)[$S compose T$], // Arrow
    )`,
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Function composition'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`Given ${unsafeRaw.math`T`} and ${unsafeRaw.math`S`} as below. Does ${unsafeRaw.math`(T compose S)`}
exist?`,
            inline(
              unsafeRaw.math.block`T(vec(x_1 ,x_2)) = vec(x_1+x_2, x_1-x_2, -x_1+x_2)`,
              space,
              unsafeRaw.math.block`S(vec(y_1, y_2, y_3) ) = vec(y_1-y_2, y_2+y_3)`,
            ),
            inline(
              poll_answers(
                { cols: 1, correct_answer: 2, students: students },
                blocks(m.enum(m.numbered(1, ['No']), m.numbered(2, ['Yes']))),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'Matrix Multiplication'),
    inline(
      slide(
        { slideType: 'polling' },
        blocks(
          inline`${unsafeRaw.math`S: bb(R)^2 -> bb(R)^3`} is linear with matrix ${unsafeRaw.math`A`}.${linebreak()}
${unsafeRaw.math`T: bb(R)^4 -> bb(R)^2`} is linear with matrix ${unsafeRaw.math`B`}.${linebreak()}
Which statement on ${unsafeRaw.math`A B`} is correct?`,
          inline(
            poll_answers(
              { cols: 1, rowGutter: em(0.8), correct_answer: 3, students: students },
              blocks(
                m.enum(
                  m.numbered(1, [
                    unsafeRaw.math`A B`,
                    space,
                    'does not exist, because',
                    linebreak(),
                    space,
                    unsafeRaw.math`S compose T`,
                    space,
                    'does not exist.',
                  ]),
                  m.numbered(2, [
                    unsafeRaw.math`A B`,
                    space,
                    'does not exist, because',
                    linebreak(),
                    space,
                    unsafeRaw.math`T compose S`,
                    space,
                    'does not exist.',
                  ]),
                  m.numbered(3, [
                    unsafeRaw.math`A B`,
                    space,
                    'does exist, and it',
                    linebreak(),
                    space,
                    'is a',
                    space,
                    unsafeRaw.math`3 times 4`,
                    space,
                    'matrix.',
                  ]),
                  m.numbered(4, [
                    unsafeRaw.math`A B`,
                    space,
                    'does exist, and it',
                    linebreak(),
                    space,
                    'is a',
                    space,
                    unsafeRaw.math`4 times 3`,
                    space,
                    'matrix.',
                  ]),
                ),
              ),
            ),
          ),
          parbreak(),
        ),
      ),
    ),
    m.lines(m.heading(2, 'Questions?'), inline(slide({ slideType: 'questions' }, inline()))),
    m.heading(2, 'Recall the matrix-vector product'),
    inline(
      slide(
        { slideType: 'definition' },
        inline`${space}${definition(
          blocks(
            inline`The product of a ${underline(inline`matrix`)} ${unsafeRaw.math`A`} with ${unsafeRaw.math`n`}
columns and a vector ${unsafeRaw.math`upright(bold(x))`} with ${unsafeRaw.math`n`} entries is
defined by`,
            inline(
              unsafeRaw.math
                .block`mat( upright(bold(a))_1, upright(bold(a))_2, dots.c, upright(bold(a))_n ) vec(upright(bold(x))_1,upright(bold(x))_2, dots.v, upright(bold(x))_n) = x_1 upright(bold(a))_1 + x_2 upright(bold(a))_2 + dots.c + x_n upright(bold(a))_n.`,
            ),
          ),
        )}
${pause} This can be extended to a matrix-matrix product.${space}`,
      ),
    ),
    m.lines(
      m.heading(2, 'Computing', ' ', unsafeRaw.math`A B`, ': column rule'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            theorem(inline`${space}If ${unsafeRaw.math`A`} is an ${unsafeRaw.math`m times n`} matrix, and ${unsafeRaw.math`B`}
is an ${unsafeRaw.math`n times p`} matrix with columns ${unsafeRaw.math`upright(bold(b))_1`},
${unsafeRaw.math`dots`}, ${unsafeRaw.math`upright(bold(b))_p`}, then the product ${unsafeRaw.math`A B`}
is the ${unsafeRaw.math`m times p`} matrix whose columns are ${unsafeRaw.math`A upright(bold(b))_1`},
${unsafeRaw.math`dots`}, ${unsafeRaw.math`A upright(bold(b))_p`}.${linebreak()} ${linebreak()}
That is, ${unsafeRaw.math.block`A B = A mat(upright(bold(b))_1, upright(bold(b))_2, dots, upright(bold(b))_p) = mat(A upright(bold(b))_1, A upright(bold(b))_2, dots, A upright(bold(b))_p)`}${space}`),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix multiplication'),
      inline(
        slide(
          { slideType: 'polling' },
          inline`${space}Compute ${unsafeRaw.math`A B`} if possible where ${linebreak()} ${linebreak()} ${unsafeRaw.math`A = mat(-5, 3;-4 , 1)`}
and ${unsafeRaw.math`B = mat(1&, -1&, 2; 2, 6, 0)`}. ${v(em(3))} ${poll_answers({ correct_answer: 3, rowGutter: em(2), students: students }, blocks(m.enum(m.numbered(1, [unsafeRaw.math`mat(-1&, 4; -34, 0)`]), m.numbered(3, [unsafeRaw.math`mat(1&, -6; 23, -2; -10, 8)`]), m.numbered(2, [unsafeRaw.math`mat(1& , 23&, -10&; -6,-2,-8)`]), m.numbered(4, ['Not defined']))))}${space}`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix Multiplication'),
      inline(
        slide(
          { slideType: 'polling' },
          inline`${space}If ${unsafeRaw.math`A`} is a ${unsafeRaw.math`6 times 5`} matrix and ${unsafeRaw.math`B`}
is a ${unsafeRaw.math`5 times 2`} matrix, ${linebreak()} what is the size of ${unsafeRaw.math`A B`},
if defined? ${v(em(1))} ${poll_answers({ rowGutter: em(2), columnGutter: em(6), correct_answer: 2, students: students }, blocks(m.enum(m.numbered(1, [unsafeRaw.math`6 times 5`]), m.numbered(5, [unsafeRaw.math`6 times 2`]), m.numbered(2, [unsafeRaw.math`5 times 6`]), m.numbered(6, [unsafeRaw.math`2 times 6`]), m.numbered(3, [unsafeRaw.math`5 times 2`]), m.numbered(7, [unsafeRaw.math`5 times 5`]), m.numbered(4, [unsafeRaw.math`2 times 5`]), m.numbered(8, ['Not defined']))))}${space}`,
        ),
      ),
    ),
    m.heading(2, 'Computing', ' ', unsafeRaw.math`A B`, ': row-column rule'),
    inline(
      slide(
        { slideType: 'definition' },
        blocks(
          inline`Entry ${unsafeRaw.math`(i,j)`} of ${unsafeRaw.math`A B`} equals ${unsafeRaw.math`op("row")_i (A) upright(bold(b))_j`}
${unsafeRaw.math.block`(A B)_(i j) = color(a_(i 1),MOOCblue) color(b_(1 j),#red) + color(a_(i 2),MOOCblue)color(b_(2 j),#red) + dots.c + color(a_(i n),MOOCblue)color(b_(n j),#red)`}`,
          inline(unsafeRaw.math.block`mat(
      a_(1 1),dots.c,  , a_(1 j), ,dots.c, ,a_(1 n);
      dots.v ,       , , dots.v,  ,      , ,  dots.v;
      color(a_(i 1),MOOCblue) , color(dots.c,MOOCblue), , color(a_(i j),MOOCblue) ,  , color(dots.c,MOOCblue), , color(a_(i n),MOOCblue);
      dots.v , , ,dots.v , , , ,dots.v;
      a_(m 1) , dots.c , , a_(m j) , , dots.c , , a_(m n)
    )
    mat(
      b_(1 1),dots.c,  , color(b_(1 j),#red), ,dots.c, ,b_(1 p);
      dots.v ,       , , color(dots.v,#red),  ,      , ,  dots.v;
      b_(i 1), dots.c, , color(b_(i j),#red) ,  , dots.c, , b_(i p);
      dots.v , , ,color(dots.v, #red) , , , ,dots.v;
      b_(n 1) , dots.c , , color(b_(n j),#red) , , dots.c , , b_(n p)
    )`),
        ),
      ),
    ),
    m.heading(2, 'Matrix Multiplication'),
    inline(
      slide(
        { slideType: 'polling' },
        blocks(
          inline`Determine ${unsafeRaw.math`(A B)_(3,2)`} if possible,${linebreak()} ${v(em(0.3))} where ${unsafeRaw.math`A = mat( 1&, 2&, 3&, 4&; 4, 3, 2, 1; -1, -2, -3, -4)`}${linebreak()}`,
          inline`and ${unsafeRaw.math`B = mat(1&, 0& ; 0, 1; 1, 0; 1, -1)`}`,
          inline(
            poll_answers(
              { rowGutter: em(1.5), columnGutter: em(4), correct_answer: 4, students: students },
              blocks(
                m.enum(
                  m.numbered(1, [unsafeRaw.math`-2`]),
                  m.numbered(4, [unsafeRaw.math`1`]),
                  m.numbered(2, [unsafeRaw.math`-1`]),
                  m.numbered(5, [unsafeRaw.math`2`]),
                  m.numbered(3, [unsafeRaw.math`0`]),
                  m.numbered(6, ['Not defined']),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix multiplication'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            parbreak(),
            inline`Given ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`} as below. Does ${unsafeRaw.math`A B`} exist?${linebreak()}
If so, what is the third row of ${unsafeRaw.math`A B`}? ${unsafeRaw.math.block`A = mat(-1&,  7&;
              0,  4;
              3, -2) #h(2em) 
    B = mat( 0&, 1&; 
             -1, 2 )`} ${poll_answers({ correct_answer: 4, cols: 1, students: students }, blocks(m.enum(m.numbered(1, ['No']), m.numbered(2, ['Yes, and the third row equals', space, unsafeRaw.math`mat(7, 13)`]), m.numbered(3, ['Yes, and the third row equals', space, unsafeRaw.math`mat(-4, 8)`]), m.numbered(4, ['Yes, and the third row equals', space, unsafeRaw.math`mat(2, -1)`]))))}`,
          ),
        ),
      ),
    ),
    m.lines(m.heading(2, 'Questions?'), inline(slide({ slideType: 'questions' }, inline()))),
    m.lines(
      m.heading(2, 'Properties of matrix multiplication'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            theorem(inline`${space}Let ${unsafeRaw.math`A`} be an ${unsafeRaw.math`m times n`} matrix, and let ${unsafeRaw.math`B`}
and ${unsafeRaw.math`C`} be matrices with sizes for which the indicated sums and products are
defined. Then: ${enum_({ numbering: 'a.', indent: em(1), spacing: em(1) }, inline(unsafeRaw.math`A(B C) = (A B)C`), inline(unsafeRaw.math`A(B+C) = A B + A C`), inline(unsafeRaw.math`(B+C)A = B A + C A`), inline`${unsafeRaw.math`r(A B) = (r A)B = A(r B)`} for any scalar ${unsafeRaw.math`r`}.`, inline(unsafeRaw.math`I_m A = A = A I_n`))}${space}`),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix multiplication'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`Given ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`} as below.${linebreak()} Which statement
is correct? ${unsafeRaw.math.block`A=mat(0&, 1&;-1, 0) #h(1em) B =mat(0,1;1,0)`}${linebreak()}`,
            inline(
              poll_answers(
                { rowGutter: em(1.4), correct_answer: 2, cols: 1, students: students },
                blocks(
                  m.enum(
                    m.numbered(1, [unsafeRaw.math`A B = B A`]),
                    m.numbered(2, [unsafeRaw.math`A B = -B A`]),
                    m.numbered(3, ['None of the above.']),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Warning'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            enum_(
              { numbering: 'a.', indent: em(1) },
              inline`The identity ${unsafeRaw.math`A B = B A`} is ${underline(inline`not true`)} in general.`,
              inline`If ${unsafeRaw.math`A B = A C`}, then in general is ${underline(inline`not true`)} that ${unsafeRaw.math`B = C`}
!`,
              inline`If ${unsafeRaw.math`A B = 0`}, then in general it is ${underline(inline`not true`)} that ${unsafeRaw.math`A=0`}
or ${unsafeRaw.math`B=0`} !`,
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Practice'),
      inline(
        practice_slide(
          blocks(
            m.lines(
              m.list(m.item(['Matrix addition and scalar multiplication']), m.item(['Matrix multiplication'])),
              inline`${linebreak()} ${unsafeRaw.math`section`} 2.1: 5, 7, 8, 9`,
            ),
            inline`You are now able to ${list(
              { indent: em(1), spacing: em(0.8) },
              list.item(inline`add two matrices, if defined, and multiply a matrix by a scalar;`),
              list.item(inline`calculate the product of two matrices, if defined, using three techniques;`),
              list.item(inline`relate properties of a matrix product ${unsafeRaw.math`A B`} to properties of the individual
matrices ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`}.`),
            )}`,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Powers of a matrix'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            definition(
              blocks(
                inline`If ${unsafeRaw.math`A`} is an ${unsafeRaw.math`n times n`} matrix and if ${unsafeRaw.math`k`}
is a positive integer, then ${unsafeRaw.math.block`A^k = underbrace(A A dots.c A,k "factors").`}`,
                inline`For k = 0 we define ${unsafeRaw.math`A^0 = I`}.`,
              ),
            ),
            space,
            pause,
            space,
            remark(
              inline(
                space,
                unsafeRaw.math.block`(A B)^k = underbrace((A B)dot.c(A B)dot.c dots.c dot.c (A B),k "times")`,
                space,
              ),
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Rotation'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`Let ${unsafeRaw.math`A`} be the standard matrix of the${linebreak()} counterclockwise rotation
over an angle ${unsafeRaw.math`phi`}.${linebreak()} Then ${unsafeRaw.math`A^2`} is given by:${linebreak()}
${linebreak()}`,
            inline(
              poll_answers(
                { columnGutter: em(2), rowGutter: em(2), correct_answer: 2, students: students },
                blocks(
                  m.enum(
                    m.numbered(1, [unsafeRaw.math.block`mat(2cos phi, -2sin phi; 2sin phi, 2cos phi)`]),
                    m.numbered(3, [unsafeRaw.math.block`mat(cos 2phi, -sin 2phi; sin 2phi, cos 2phi)`]),
                    m.numbered(2, [unsafeRaw.math.block`mat(cos phi^2, -sin phi^2; sin phi^2, cos phi^2)`]),
                    m.numbered(4, [unsafeRaw.math.block`mat(cos^2phi , sin^2 phi; sin^2 phi, cos^2 phi)`]),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Rotation'),
      inline(
        slide(
          { slideType: 'academic reasoning' },
          blocks(
            inline`Is the following statement true or false?${linebreak()}`,
            inline`Let ${unsafeRaw.math`A`} be the standard matrix of the transformation that rotates clockwise
over ${unsafeRaw.math`180 / n`} degrees in ${unsafeRaw.math`bb(R)^2`}, where ${unsafeRaw.math`n gt.eq 2`}
is a positive integer.${linebreak()} Then ${unsafeRaw.math`A^n = - I_2.`}${linebreak()} ${linebreak()}`,
            inline(
              poll_answers(
                { cols: 1, correct_answer: 1, rowGutter: em(1.7), students: students },
                blocks(m.enum(m.numbered(1, ['True']), m.numbered(2, ['False']))),
              ),
            ),
          ),
        ),
      ),
    ),
    cypher_squareDecl,
    m.lines(
      m.heading(2, 'Encryption'),
      inline(
        slide(
          { slideType: 'example' },
          blocks(
            m.lines(
              set(text, { size: pt(24) }),
              m.list(
                m.item([
                  'Suppose you want to send an important',
                  space,
                  linebreak(),
                  space,
                  'message to one specific person so that if',
                  linebreak(),
                  space,
                  'the message is intercepted, it can not',
                  space,
                  linebreak(),
                  space,
                  'easily be decrypted.',
                ]),
                m.item([
                  'Then you should make it impossible to',
                  space,
                  linebreak(),
                  space,
                  'read for others, thus encrypt the message.',
                ]),
              ),
              inline(linebreak()),
            ),
            inline(
              grid(
                {
                  stroke: { thickness: pt(2), paint: tudelftColors_primary },
                  columns: times([em(1.7)], 16),
                  rows: times([em(1)], 2),
                  columnGutter: em(0),
                  rowGutter: em(0),
                  align: add(center, horizon),
                },
                inline`C`,
                inline`O`,
                inline`M`,
                inline`P`,
                inline`U`,
                inline`T`,
                inline`E`,
                inline`R`,
                inline(),
                inline`S`,
                inline`C`,
                inline`I`,
                inline`E`,
                inline`N`,
                inline`C`,
                inline`E`,
                inline`3`,
                inline`15`,
                inline`13`,
                inline`16`,
                inline`21`,
                inline`20`,
                inline`5`,
                inline`18`,
                inline`0`,
                inline`19`,
                inline`3`,
                inline`9`,
                inline`5`,
                inline`14`,
                inline`3`,
                inline`5`,
              ),
              space,
              place({ dx: cm(18), dy: cm(-12) }, scale({ x: cm(8.79), y: cm(8.79) }, cypher_square)),
            ),
          ),
        ),
      ),
    ),
    m.heading(2, 'Encryption'),
    inline(
      grid(
        {
          stroke: { thickness: pt(2), paint: tudelftColors_primary },
          columns: times([em(1.7)], 16),
          rows: times([em(1)], 2),
          columnGutter: em(0),
          rowGutter: em(0),
          align: add(center, horizon),
        },
        inline`C`,
        inline`O`,
        inline`M`,
        inline`P`,
        inline`U`,
        inline`T`,
        inline`E`,
        inline`R`,
        inline(),
        inline`S`,
        inline`C`,
        inline`I`,
        inline`E`,
        inline`N`,
        inline`C`,
        inline`E`,
        inline(color_2('3', red)),
        inline(color_2('15', red)),
        inline(color_2('13', red)),
        inline(color_2('16', red)),
        inline`21`,
        inline`20`,
        inline`5`,
        inline`18`,
        inline`0`,
        inline`19`,
        inline`3`,
        inline`9`,
        inline`5`,
        inline`14`,
        inline`3`,
        inline`5`,
      ),
    ),
    inline(unsafeRaw.math.block`M = text("Message") = 
        mat(#color("3",red), 21, 0, 5;
            #color("15", red),20, 19, 14;
            #color("13",red), 5, 3, 3;
            #color("16", red), 18, 9, 5 ) 
            #h(5em) K = text("Key") = 
            mat( 1, 1, 1, 1;
                 0 ,1, 1, 1;
                 0, 0, 1, 1;
                 0, 0, 0, 1)`),
    inline(unsafeRaw.math.block`text("Encrypted message") = K M = 
          mat(        
            47, 64, 31, 27;
            44, 43, 31, 22;
            29, 23, 12, 8;
            16, 8, 9, 5
          )`),
    m.heading(2, 'Encryption'),
    inline(unsafeRaw.math.block`text("Key") = 
            mat( 1, 1, 1, 1;
                 0 ,1, 1, 1;
                 0, 0, 1, 1;
                 0, 0, 0, 1)
           #h(24em)`),
    inline(
      unsafeRaw.math.block`#text("Encrypted message:" ) mat(
  16,30,43,50,15,22,29,46; 
15,14,30,30,15,21,20,30,;
1,9,21,21,14,5,1,21;
1, 9 , 1, 7 , 0 , 0 , 1, 7
) #h(6em)`,
      space,
      v(em(1)),
      space,
      strong(inline`What was the original message?`),
      space,
      place({ dx: cm(12.33), dy: cm(-16.5) }, scale({ x: cm(7), y: cm(7) }, cypher_square)),
    ),
    m.lines(m.heading(2, 'Questions?'), inline(slide({ slideType: 'questions' }, inline()))),
    m.heading(1, 'Transpose of matrix'),
    m.lines(
      m.heading(2, 'The transpose of a matrix'),
      inline(
        slide(
          { slideType: 'definition' },
          blocks(
            inline`${definition(inline`${space}For any ${unsafeRaw.math`m times n`} matrix ${unsafeRaw.math`A`} the ${underline(inline`transpose`)}
of ${unsafeRaw.math`A`}, denoted by ${unsafeRaw.math`A^T`}, is the matrix of size ${unsafeRaw.math`n times m`}
whose columns are formed from the corresponding rows of ${unsafeRaw.math`A`}.${space}`)} Example:`,
            inline(unsafeRaw.math.block`mat(2&, -1&; 3, -2; 4, 5)^T  = mat( 2&, 3&, 4; -1, -2, 5)`),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix transpose properties'),
      inline(
        slide(
          { slideType: 'polling' },
          inline`${space}Given two ${unsafeRaw.math`m times n`} matrices ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`}.${linebreak()}
Which of the statements are correct? ${enum_({ numbering: '(i)', spacing: cm(1.3) }, inline`${unsafeRaw.math`(A^T)^T = A`};`, inline(unsafeRaw.math`(A+B)^T = A^T + B^T`))}
${v(em(0.5))} ${poll_answers({ cols: 1, rowGutter: em(1.4), correct_answer: 1, students: students }, blocks(m.enum(m.numbered(1, ['(i) is true, (ii) is true,']), m.numbered(2, ['(i) is true, (ii) is false,']), m.numbered(3, ['(i) is false, (ii) is true,']), m.numbered(4, ['(i) is false, (ii) is false']))))}${space}`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Matrix product and transpose'),
      inline(
        slide(
          { slideType: 'polling' },
          blocks(
            inline`For matrices ${linebreak()}`,
            inline`${unsafeRaw.math`A= mat(1, 2;3,4)`} and ${unsafeRaw.math`B=mat(1&,2&;-1,1)`}${linebreak()}`,
            'which statement is correct?',
            inline`(i) ${unsafeRaw.math`(A^2)^T = (A^T)^2`}; (ii) ${unsafeRaw.math`(A B)^T = A^T B^T`}`,
            inline(
              poll_answers(
                { cols: 1, rowGutter: em(1.2), correct_answer: 2, students: students },
                blocks(
                  m.enum(
                    m.numbered(1, ['(i) is true, (ii) is true,']),
                    m.numbered(2, ['(i) is true, (ii) is false,']),
                    m.numbered(3, ['(i) is false, (ii) is true,']),
                    m.numbered(4, ['(i) is false, (ii) is false']),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Properties of the transpose of a matrix'),
      inline(
        slide(
          { slideType: 'definition' },
          inline(
            space,
            theorem(
              blocks(
                inline`Let ${unsafeRaw.math`A`} and ${unsafeRaw.math`B`} be matrices such that the operations are defined.${linebreak()}`,
                inline(
                  enum_(
                    { numbering: 'a.', spacing: em(1) },
                    inline(unsafeRaw.math`(A^T)^T=A`),
                    inline(unsafeRaw.math`(A+B)^T=A^T + B^T`),
                    inline`${unsafeRaw.math`(r A)^T = r A^T`} for any scalar ${unsafeRaw.math`r`}`,
                    inline(unsafeRaw.math`(A B)^T = B^T A^T`),
                  ),
                ),
              ),
            ),
            space,
          ),
        ),
      ),
    ),
    m.lines(m.heading(2, 'Questions?'), inline(slide({ slideType: 'questions' }, inline()))),
    m.lines(
      m.heading(2, 'Practice'),
      inline(
        practice_slide(
          blocks(
            m.lines(
              m.list(m.item(['Transpose of a matrix'])),
              inline`${v(em(3))} ${unsafeRaw.math`section`}2.1: 15, 17, 19, 20, 23, 27, 29 ${v(em(4))} You are now
able to ${list({ indent: em(1.5) }, inline`transpose a matrix`)}`,
            ),
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Wrap up and next lecture'),
      inline(
        wrapup_slide(
          { topic: 'Invertibility of matrices', book_sections: [2.2, 2.3] },
          blocks(
            m.lines(
              inline`Practice the topics of this lecture to: ${set(list, { spacing: cm(0.6), indent: em(1) })} ${set(text, { size: pt(23) })}
${v(cm(-0.2))}`,
              m.list(
                m.item(['add two matrices, if defined, and multiply a matrix by a scalar;']),
                m.item(['calculate the product of two matrices, if defined, using three techniques;']),
                m.item([
                  'relate properties of a matrix product',
                  space,
                  unsafeRaw.math`A B`,
                  space,
                  'to properties of the individual matrices',
                  space,
                  unsafeRaw.math`A`,
                  space,
                  'and',
                  space,
                  unsafeRaw.math`B`,
                  ';',
                ]),
                m.item(['transpose a matrix;']),
                m.item(['apply the calculation rules related to the aforementioned learning goals.']),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(titleSlide({ title: 'See you next lecture', subtitle: '' }, inline())),
  )
}
