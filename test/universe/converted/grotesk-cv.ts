// Converted from test/universe/corpus/grotesk-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  codeBlock,
  data,
  define,
  doc,
  external,
  image,
  importPackage,
  let_,
  m,
  path,
  pct,
  show,
  toml,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const cv_with = define('with')
    .pos('arg1', T.any)
    .named('left-pane', T.any, null)
    .named('left-pane-proportion', T.any, null)
    .named('photo', T.any, null)
    .named('right-pane', T.any, null)
    .named('use-photo', T.any, null)
    .returns(T.any)
    .external(cv)
  const [metaDecl, meta] = let_('meta', toml(path('./info.toml')))
  const [photoDecl, photo] = let_(
    'photo',
    image(
      { width: pct(100), height: pct(100) },
      unsafePath(unsafeRaw.code<any>`"./img/" + meta.personal.profile_image`),
    ),
  )
  const importSections = define('import-sections')
    .pos('sections', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  for section in sections {
    include {
      "content/" + section + ".typ"
    }
  }
}`,
    )
  const [leftPaneDecl, leftPane] = let_('left-pane', data(['profile', 'experience', 'education']))
  const [rightPaneDecl, rightPane] = let_('right-pane', data(['skills', 'languages', 'other_experience', 'references']))
  return doc(
    metaDecl,
    m.lines(importPackage('@preview/grotesk-cv:1.0.5', [cv]), photoDecl),
    importSections.decl,
    leftPaneDecl,
    rightPaneDecl,
    show(
      cv_with(
        {
          photo: photo,
          usePhoto: true,
          leftPane: importSections(leftPane),
          rightPane: importSections(rightPane),
          leftPaneProportion: unsafeRaw.code<any>`eval(meta.layout.left_pane_width)`,
        },
        meta,
      ),
    ),
  )
}
