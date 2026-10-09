// Converted from test/universe/corpus/simple-cvut-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  lorem,
  m,
  path,
  pt,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const report = external('report')
  const report_with = define('with')
    .named('author', T.any, null)
    .named('bib', T.any, null)
    .named('branch', T.any, null)
    .named('date', T.any, null)
    .named('logo', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .named('toc-title', T.any, null)
    .named('username', T.any, null)
    .returns(T.any)
    .external(report)
  return doc(
    importPackage('@preview/simple-cvut-report:0.2.0', [report]),
    set(text, { lang: 'cs', region: 'cz', size: pt(12) }),
    show(
      report_with({
        title: 'Semestrální práce',
        subtitle: 'Dokumentace',
        author: 'Jan Novák',
        username: 'novakja2',
        tocTitle: 'Obsah',
        branch: 'Obor Softwarové inženýrství a technologie',
        date: 'Květen 2026',
        logo: image(path('assets/cvut-logo.svg')),
        bib: null,
      }),
    ),
    m.lines(m.heading(1, 'Úvod'), inline(lorem(67))),
  )
}
