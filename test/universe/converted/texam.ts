// Converted from test/universe/corpus/texam.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  importPackage,
  inline,
  m,
  pagebreak,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const texam = external('texam')
  const examQuestion = define('exam-question')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const tasks = define('tasks').pos('arg1', T.content).named('columns', T.any, null).returns(T.any).external()
  const texam_with = define('with')
    .named('allowed-materials', T.any, null)
    .named('brouillon', T.any, null)
    .named('course-code', T.any, null)
    .named('date', T.any, null)
    .named('duration', T.any, null)
    .named('pnf-points', T.any, null)
    .named('school', T.any, null)
    .named('teacher', T.any, null)
    .named('teacher-initials', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(texam)
  return doc(
    m.lines(
      importPackage('@preview/texam:0.1.0', [texam, examQuestion]),
      importPackage('@preview/taskize:0.2.5', [tasks]),
    ),
    show(
      texam_with({
        school: "Nom de l'école",
        courseCode: '3M',
        title: 'Évaluation de mathématiques',
        date: '1 janvier 2026',
        teacher: 'Prénom Nom',
        teacherInitials: 'PN',
        duration: '45 minutes',
        allowedMaterials: 'Aucun',
        pnfPoints: 2,
        brouillon: true,
      }),
    ),
    inline(
      examQuestion(
        1,
        4,
        blocks(
          'Factoriser les expressions suivantes.',
          inline(tasks(blocks(m.enum(m.item([unsafeRaw.math`x^2 - 5x + 6`]), m.item([unsafeRaw.math`4x^2 - 9`]))))),
        ),
      ),
    ),
    inline(pagebreak()),
    inline(
      examQuestion(
        2,
        6,
        blocks(
          inline`Résoudre dans ${unsafeRaw.math`RR`} les équations suivantes.`,
          inline(
            tasks(blocks(m.enum(m.item([unsafeRaw.math`2x^2 - 7x + 3 = 0`]), m.item([unsafeRaw.math`|3x - 1| = 5`])))),
          ),
        ),
      ),
    ),
    inline(pagebreak()),
    inline(
      examQuestion(
        3,
        3,
        blocks(
          inline`Soit ${unsafeRaw.math`f(x) = x^3 - 3x`}.`,
          inline(
            tasks(
              { columns: 3 },
              blocks(
                m.enum(
                  m.item(['Calculer', space, unsafeRaw.math`f'(x)`, '.']),
                  m.item(['Étudier le signe de', space, unsafeRaw.math`f'(x)`, '.']),
                  m.item(['En déduire les variations de', space, unsafeRaw.math`f`, '.']),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
  )
}
