// Converted from test/universe/corpus/nova-pset.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  enum_,
  external,
  importPackage,
  inline,
  let_,
  m,
  rgb,
  set,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const homework = external('homework')
  const q = define('q').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const b = define('b').returns(T.any).external()
  const Q = define('Q').returns(T.any).external()
  const homework_with = define('with')
    .named('accent-color', T.any, null)
    .named('assignment', T.any, null)
    .named('author', T.any, null)
    .named('class', T.any, null)
    .named('due-time', T.any, null)
    .named('instructor', T.any, null)
    .named('logo', T.any, null)
    .named('paper-size', T.any, null)
    .named('semester', T.any, null)
    .returns(T.any)
    .external(homework)
  const [classDecl, class_2] = let_('class', 'math 347h')
  const [assignmentDecl, assignment] = let_('assignment', 'Homework 4')
  const [authorDecl, author] = let_('author', 'Samyak Jain')
  const [logoDecl, logo] = let_('logo', null)
  const [instructorDecl, instructor] = let_('instructor', 'Prof. Fernandough')
  const [semesterDecl, semester] = let_('semester', 'Fall 2025')
  const [dueTimeDecl, dueTime] = let_('due-time', 'September 25, 2025')
  return doc(
    importPackage('@preview/nova-pset:0.1.0', [homework, q, b, Q]),
    m.lines(classDecl, assignmentDecl, authorDecl, logoDecl, instructorDecl, semesterDecl, dueTimeDecl),
    show(
      homework_with({
        class: class_2,
        assignment: assignment,
        author: author,
        logo: logo,
        instructor: instructor,
        semester: semester,
        dueTime: dueTime,
        paperSize: 'us-letter',
        accentColor: rgb('#1c2b39'),
      }),
    ),
    set(enum_, { numbering: 'a)' }),
    inline(
      q(
        { title: 'Problem 1' },
        inline`${space}Prove that the composition of two surjective functions is surjective.${space}`,
      ),
    ),
    inline`${b()} Suppose that ${unsafeRaw.math`f : A -> B`} and ${unsafeRaw.math`g : B -> C`} are surjective
functions. Then the composition ${unsafeRaw.math`g compose f : A -> C`} is ${unsafeRaw.math`g compose f (a) = g(f(a))`}.
We claim that ${unsafeRaw.math`g(f(a))`} is surjective, or that`,
    inline(unsafeRaw.math.block`forall c in C, exists a in A "such that" g(f(a)) = c`),
    inline`Let ${unsafeRaw.math`c in C`} be arbitrary. Because ${unsafeRaw.math`g`} is surjective, we know
that`,
    inline(unsafeRaw.math.block`forall c in C, exists b in B "such that" g(b) = c`),
    inline`So there exists a ${unsafeRaw.math`b in B`} such that ${unsafeRaw.math`g(b) = c`}. Then, because
${unsafeRaw.math`f`} is surjective, we know that`,
    inline(unsafeRaw.math.block`forall b in B, exists a in A "such that" f(a) = b`),
    inline`So there exists an ${unsafeRaw.math`a in A`} such that ${unsafeRaw.math`f(a) = b`}. Then ${unsafeRaw.math`g(f(a)) = g(b) = c`}.
This means that the composition ${unsafeRaw.math`g compose f`} is surjective.`,
    inline(Q()),
  )
}
