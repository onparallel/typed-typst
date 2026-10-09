// Converted from test/universe/corpus/tyniverse.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  call,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  link,
  m,
  raw,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const homework = external('homework')
  const homework_template = define('template')
    .named('course', T.any, null)
    .named('number', T.any, null)
    .named('student-infos', T.any, null)
    .returns(T.any)
    .external(homework)
  const homework_complexQuestion = external('complex-question', homework)
  const [questionDecl, question] = let_('question', homework_complexQuestion)
  return doc(
    importPackage('@preview/tyniverse:0.2.3', [homework]),
    show(
      homework_template.with({
        course: 'tyniverse Example',
        number: 1,
        studentInfos: [{ name: 'Author of tyniverse', id: 'GitHub: @Fr4nk1inCs' }],
      }),
    ),
    questionDecl,
    inline(call(question, inline`${space}What is tyniverse?${space}`)),
    m.lines(
      inline`tyniverse is a collection of ${link('https://typst.app', inline`Typst`)} presets to provide
a starting point for your writing. As of now, it provides presets for:`,
      m.terms(
        m.term([raw('set-font()')], ['Chinese & English font support.']),
        m.term([raw('typesetting')], ['A typesetting preset.']),
        m.term([raw('template')], ['A template for writing a document.']),
        m.term(
          [raw('homework')],
          [
            'Homework template with',
            space,
            raw('simple-question'),
            space,
            'and',
            space,
            raw('complex-question'),
            space,
            'frame to write your homework.',
          ],
        ),
        m.term([raw('cheatpaper')], ['A cheatpaper template.']),
      ),
    ),
    inline(call(question, inline`${space}How to use tyniverse?${space}`)),
    inline`Simply import it from ${link('https://typst.app/universe', inline`Typst Universe`)}: ${raw({ block: true, lang: 'typst' }, '#import "@preview/tyniverse:0.2.3": homework')}`,
  )
}
