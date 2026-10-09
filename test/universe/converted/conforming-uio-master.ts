// Converted from test/universe/corpus/conforming-uio-master.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, let_, lorem, m, show } from '../../../src/index.ts'

export default () => {
  const uioThesis = external('uio-thesis')
  const uioThesis_with = define('with')
    .named('abstract', T.any, null)
    .named('author', T.any, null)
    .named('department', T.any, null)
    .named('faculty', T.any, null)
    .named('preface', T.any, null)
    .named('print', T.any, null)
    .named('study-programme', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(uioThesis)
  const [abstractDecl, abstract] = let_(
    'abstract',
    blocks(
      m.lines(m.heading(1, 'Abstract'), inline(lorem(100))),
      m.lines(m.heading(1, 'Sammendrag'), inline(lorem(100))),
    ),
  )
  const [prefaceDecl, preface] = let_('preface', lorem(150))
  return doc(
    importPackage('@preview/conforming-uio-master:1.0.1', [uioThesis]),
    m.lines(abstractDecl, prefaceDecl),
    show(
      uioThesis_with({
        title: 'Your Title',
        subtitle: 'Your Slightly longer subtitle',
        author: 'Your Name',
        supervisor: 'Your Supervisor',
        studyProgramme: 'Your study programme',
        department: 'Your department',
        faculty: 'Your faculty',
        abstract: abstract,
        preface: preface,
        print: false,
      }),
    ),
    m.lines(
      m.heading(1, 'Introduction'),
      m.heading(2, 'Background'),
      inline(lorem(150)),
      m.heading(3, 'Foreground'),
      inline(lorem(80)),
    ),
    m.lines(m.heading(2, 'Theory'), m.heading(3, 'Quantum mechanics'), m.heading(3, 'Set theory')),
    m.lines(m.heading(1, 'Methods'), m.heading(2, 'My first method')),
  )
}
