// Converted from test/universe/corpus/imprecv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  center,
  cm,
  codeBlock,
  define,
  dict,
  doc,
  external,
  importPackage,
  inline,
  let_,
  page,
  path,
  pt,
  set,
  show,
  space,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const cvinit = external('cvinit')
  const setrules = external('setrules')
  const showrules = external('showrules')
  const cvheading = define('cvheading').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const cvwork = define('cvwork').pos('arg1', T.any).returns(T.any).external()
  const cveducation = define('cveducation').pos('arg1', T.any).returns(T.any).external()
  const cvaffiliations = define('cvaffiliations').pos('arg1', T.any).returns(T.any).external()
  const cvprojects = define('cvprojects').pos('arg1', T.any).returns(T.any).external()
  const cvawards = define('cvawards').pos('arg1', T.any).returns(T.any).external()
  const cvcertificates = define('cvcertificates').pos('arg1', T.any).returns(T.any).external()
  const cvpublications = define('cvpublications').pos('arg1', T.any).returns(T.any).external()
  const cvskills = define('cvskills').pos('arg1', T.any).returns(T.any).external()
  const cvreferences = define('cvreferences').pos('arg1', T.any).returns(T.any).external()
  const endnote = define('endnote').pos('arg1', T.any).returns(T.any).external()
  const [cvdataDecl, cvdata] = let_('cvdata', yaml(path('template.yml')))
  const [uservarsDecl, uservars] = let_(
    'uservars',
    dict({
      headingfont: 'Linux Libertine',
      bodyfont: 'Linux Libertine',
      fontsize: pt(10),
      linespacing: pt(6),
      sectionspacing: pt(0),
      showAddress: true,
      showNumber: true,
      showTitle: true,
      headingsmallcaps: false,
      sendnote: false,
    }),
  )
  const customrules = define('customrules')
    .pos('doc', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [set(page, { paper: 'us-letter', numbering: '1 / 1', numberAlign: center, margin: cm(1.25) })],
        p['doc'],
      ),
    )
  const cvinit_2 = define('cvinit')
    .pos('doc', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`doc = setrules(uservars, doc)`,
        unsafeRaw.code<any>`doc = showrules(uservars, doc)`,
        unsafeRaw.code<any>`doc = customrules(doc)`,
        p['doc'],
      ]),
    )
  return doc(
    importPackage('@preview/imprecv:1.0.1', [
      cvinit,
      setrules,
      showrules,
      cvheading,
      cvwork,
      cveducation,
      cvaffiliations,
      cvprojects,
      cvawards,
      cvcertificates,
      cvpublications,
      cvskills,
      cvreferences,
      endnote,
    ]),
    cvdataDecl,
    uservarsDecl,
    customrules.decl,
    cvinit_2.decl,
    show((doc_2, ctx) => cvinit_2(doc_2)),
    inline(
      cvheading(cvdata, uservars),
      space,
      cvwork(cvdata),
      space,
      cveducation(cvdata),
      space,
      cvaffiliations(cvdata),
      space,
      cvprojects(cvdata),
      space,
      cvawards(cvdata),
      space,
      cvcertificates(cvdata),
      space,
      cvpublications(cvdata),
      space,
      cvskills(cvdata),
      space,
      cvreferences(cvdata),
      space,
      endnote(uservars),
    ),
  )
}
