// Converted from test/suite/corpus/tags-grouping.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  context,
  define,
  doc,
  hide,
  inline,
  label,
  link,
  m,
  par,
  pt,
  quote,
  ref,
  set,
  show,
  space,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const case_2 = define('case')
    .pos('body', T.any)
    .pos('output', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`context {
  // Get a unique key for the case.
  let key = here()
  let tagged(s, it) = {
    metadata((key, "<" + s + ">"))
    it
    metadata((key, "</" + s + ">"))
  }

  // Note: This only works for locatable elements because otherwise the
  // metadata tags won't be sandwiched by other tags and not forced into the
  // paragraph grouping.
  show par: tagged.with("p")
  show link: tagged.with("a")
  show ref: tagged.with("ref")
  body

  context test(
    // Finds only metadata keyed by \`key\`, which is unique for this case.
    query(metadata)
      .filter(e => e.value.first() == key)
      .map(e => e.value.last())
      .join(),
    output
  )
}`,
    )
  return doc(
    m.lines(set(text, { size: pt(0) }), show(hide), show(ref, inline`Ref`)),
    case_2.decl,
    m.lines(
      show(par, quote),
      show(quote, (it, ctx_2) => it.body),
    ),
    inline(case_2(inline(ref(label('ref')), space, link('A', inline`A`)), '<p><ref></ref><a></a></p>')),
    inline(case_2(inline(ref(label('ref')), space, link('A', inline`A${space}`)), '<p><ref></ref><a></a></p>')),
    inline(case_2(inline(link('A', inline`A`), space, ref(label('ref'))), '<p><a></a><ref></ref></p>')),
    inline(case_2(inline(link('A', inline`${space}A`), space, ref(label('ref'))), '<p><a></a><ref></ref></p>')),
    inline(case_2(link('A', inline`A`), '<p><a></a></p>')),
  )
}
