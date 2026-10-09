// Converted from test/universe/corpus/brilliant-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  codeBlock,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  let_,
  m,
  path,
  show,
  toml,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const hBar = external('h-bar')
  const cv_with = define('with').pos('arg1', T.any).named('profile-photo', T.any, null).returns(T.any).external(cv)
  const [metadataDecl, metadata_2] = let_(
    'metadata',
    toml(unsafePath(unsafeRaw.code<any>`"profile_" + profile + "/metadata.toml"`)),
  )
  const importModules = define('import-modules')
    .pos('modules', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  for module in modules {
    include {
      "profile_" + profile + "/" + module + ".typ"
    }
  }
}`,
    )
  return doc(
    importPackage('@preview/brilliant-cv:4.1.1', [cv, hBar]),
    m.lines(unsafeRaw.markup`#let profile = sys.inputs.at("profile", default: "en")`, metadataDecl),
    importModules.decl,
    show(cv_with({ profilePhoto: image(path('assets/avatar.png')) }, metadata_2)),
    inline(importModules(['education', 'professional', 'projects', 'certificates', 'publications', 'skills'])),
  )
}
