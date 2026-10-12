// Converted from test/universe/corpus/porygon.typ by scripts/convert-suite.ts — do not edit.
import { T, define, doc, importPackage, inline, json, let_, m, unsafePath, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const showCv = define('show-cv').pos('arg1', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', json(unsafePath(unsafeRaw.code<any>`path_json`)))
  return doc(
    importPackage('@preview/porygon:0.1.1', [showCv]),
    m.lines(
      let_('path_json', unsafeRaw.code<any>`sys.inputs.at("CV_JSON", default: "cv_data.json")`)[0],
      dataDecl,
      inline(showCv(data_2)),
    ),
  )
}
