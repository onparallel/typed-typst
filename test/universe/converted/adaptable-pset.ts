// Converted from test/universe/corpus/adaptable-pset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  emoji,
  enum_,
  external,
  importPackage,
  inline,
  let_,
  m,
  pagebreak,
  set,
  show,
  smartquote,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const homework = external('homework')
  const prob = define('prob').rest('args', T.any).named('title', T.any, null).returns(T.any).external()
  const homework_with = define('with')
    .named('author', T.any, null)
    .named('collaborators', T.any, null)
    .named('course-id', T.any, null)
    .named('due-time', T.any, null)
    .named('instructor', T.any, null)
    .named('semester', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(homework)
  const [titleDecl, title_2] = let_('title', 'HW5f')
  const [authorDecl, author] = let_('author', 'Stephen Xu')
  const [collaboratorsDecl, collaborators] = let_('collaborators', inline())
  const [courseIdDecl, courseId] = let_('course-id', 'Math 172: Galois Theory')
  const [instructorDecl, instructor] = let_('instructor', 'Prof. Thonkers')
  const [semesterDecl, semester] = let_('semester', 'Spring 2024')
  const [dueTimeDecl, dueTime] = let_('due-time', 'Jun 14 at 1:00')
  return doc(
    importPackage('@preview/adaptable-pset:0.2.0', [homework, prob]),
    m.lines(titleDecl, authorDecl, collaboratorsDecl, courseIdDecl, instructorDecl, semesterDecl, dueTimeDecl),
    show(
      homework_with({
        title: title_2,
        author: author,
        collaborators: collaborators,
        courseId: courseId,
        instructor: instructor,
        semester: semester,
        dueTime: dueTime,
      }),
    ),
    set(enum_, { numbering: 'a)' }),
    inline(
      prob(
        { title: '24.3.7' },
        blocks(
          m.lines(
            inline`Let ${unsafeRaw.math`alpha = sqrt(2+sqrt(2)) in CC`}.`,
            m.enum(
              m.numbered(1, ['Compute', space, unsafeRaw.math`f = min_QQ (alpha)`, '.']),
              m.numbered(2, [
                'Find',
                space,
                unsafeRaw.math`E subset.eq CC`,
                space,
                'such that',
                space,
                unsafeRaw.math`E`,
                space,
                'is the splitting field for',
                space,
                unsafeRaw.math`f`,
                space,
                'over',
                space,
                unsafeRaw.math`QQ`,
                '. Compute',
                space,
                unsafeRaw.math`|E:QQ|`,
                '.',
              ]),
              m.numbered(3, [
                'Show that',
                space,
                unsafeRaw.math`"Gal"(E\\/QQ)`,
                space,
                'contains an element of order',
                space,
                unsafeRaw.math`4`,
                '.',
              ]),
            ),
          ),
        ),
      ),
    ),
    m.enum(
      { tight: false },
      m.numbered(1, [
        'Consider',
        space,
        unsafeRaw.math`alpha^2 - sqrt(2) = 2`,
        '. Rearranging, we obtain',
        space,
        unsafeRaw.math`alpha^2 = 2 + sqrt(2)`,
        '. We thus have',
        space,
        unsafeRaw.math`alpha^4 = (2 + sqrt(2))^2 => alpha^4 - 4sqrt(2) -6 = 0`,
        '. We can rewrite',
        space,
        unsafeRaw.math`4sqrt(2)+6`,
        space,
        'in terms of',
        space,
        unsafeRaw.math`alpha^2`,
        ', obtaining',
        space,
        unsafeRaw.math`4sqrt(2) +6 = 4alpha^2 -2`,
        '. Therefore',
        space,
        unsafeRaw.math`alpha^4 -4 alpha^2 +2`,
        '. As such we obtain a potential minimal polynomial',
        space,
        unsafeRaw.math`x^4 - 4x^2 +2`,
        '. Using Eisenstein',
        smartquote({ double: false }),
        's, we see it',
        smartquote({ double: false }),
        's irreducible and monic with',
        space,
        unsafeRaw.math`alpha`,
        space,
        'as a root. Therefore',
        space,
        unsafeRaw.math`f = x^4-4x^2+2`,
        '.',
      ]),
      m.numbered(2, [
        'We can find the roots as',
        space,
        unsafeRaw.math`plus.minus sqrt(2+sqrt(2)), plus.minus sqrt(2-sqrt(2))`,
        '. We note that because they share the same minimal polymial,',
        space,
        unsafeRaw.math`|E:QQ| = deg(min_QQ (alpha)) = 4`,
        ', and we have that',
        space,
        unsafeRaw.math`E = QQ(sqrt(2+sqrt(2)),sqrt(2-sqrt(2)))`,
        '.',
      ]),
      m.numbered(
        3,
        [
          'Consider the automorphism',
          space,
          unsafeRaw.math`sigma in "Gal"(E\\/QQ)`,
          space,
          'such that',
          space,
          unsafeRaw.math`phi(alpha) = beta`,
          ', where',
          space,
          unsafeRaw.math`beta = sqrt(2-sqrt(2))`,
          '. Consider',
        ],
        inline(
          unsafeRaw.math
            .block`phi(sqrt(2)) = phi(sqrt(alpha beta)) = phi(alpha^2 - 2) = phi(alpha)^2 - phi(2) = beta^2 - 2  = -sqrt(2)`,
        ),
        inline`Using this, we see that we can use ${unsafeRaw.math`sigma`} recursively to obtain ${unsafeRaw.math`beta, alpha, -alpha, -beta`}.
We thus show that ${unsafeRaw.math`sigma`} is an element of order ${unsafeRaw.math`4`} in ${unsafeRaw.math`"Gal"(E\\/QQ)`}.
${emoji.heart}`,
      ),
    ),
    inline(pagebreak({ weak: true })),
    inline(
      prob(
        { title: 'New Problem' },
        inline`${space}Content 1 from part 1${space}`,
        inline`${space}Content 2 from part 2${space}`,
      ),
    ),
    m.enum(
      { tight: false },
      m.numbered(1, ['Answering question posed from part 1.']),
      m.numbered(2, ['Answering question posed from part 2.']),
    ),
  )
}
