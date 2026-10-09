// Converted from test/universe/corpus/kdl-unofficial-template.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  bibliography,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const kdl = external('kdl')
  const kdl_template = external('template', kdl)
  return doc(
    importPackage('@preview/kdl-unofficial-template:0.1.1', kdl),
    show(kdl_template),
    inline(unsafeRaw.code<any>`kdl.pages.title.with(
  title: "A tall tale",
  author: "Baron von Münchhausen",
  size: 64pt, // optional
)()`),
    inline(unsafeRaw.code<any>`kdl.pages.blank`, space, unsafeRaw.code<any>`kdl.pages.blank`),
    m.lines(
      includeFile('./chapters/01-intro.typ'),
      inline(unsafeRaw.code<any>`kdl.pages.toc`, space, includeFile('./chapters/02-pre-gen.typ')),
    ),
    inline(bibliography({ full: true, style: 'pensoft' }, path('./assets/bibliography.bib'))),
  )
}
