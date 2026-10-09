// Converted from test/universe/corpus/zettyp-core.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  assert,
  codeBlock,
  define,
  doc,
  importFile,
  inline,
  let_,
  m,
  ref,
  repr,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const evaluate = define('evaluate').pos('arg1', T.any).returns(T.any).external()
  const load = define('load').returns(T.any).external()
  const publish = define('publish')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('editor', T.any, null)
    .returns(T.any)
    .external()
  const [projectDecl, project] = let_('project', load())
  const [resultDecl, result] = let_('result', evaluate(project))
  return doc(
    importFile('.zettypst/lib.typ', [evaluate, load, publish]),
    m.lines(
      projectDecl,
      inline(
        assert.eq(unsafeRaw.code<any>`project.issues`, []),
        space,
        resultDecl,
        space,
        assert.eq(
          { message: repr(unsafeRaw.code<any>`result.execution.output`) },
          unsafeRaw.code<any>`result.execution.output.status`,
          'success',
        ),
        space,
        publish({ editor: false }, project, unsafeRaw.code<any>`result.flow`, unsafeRaw.code<any>`result.execution`),
      ),
    ),
    show(
      ref,
      (it, ctx) => unsafeRaw.code<any>`{
  if it.element != none and it.element.func() == heading {
    link(it.target)[[#it.element.body]]
  } else {
    it
  }
}`,
    ),
    inline(unsafeRaw.code<any>`for note in project.notes {
  note.body
}`),
  )
}
