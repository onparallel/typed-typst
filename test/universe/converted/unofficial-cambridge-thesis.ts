// Converted from test/universe/corpus/unofficial-cambridge-thesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  auto,
  bibliography,
  blocks,
  define,
  doc,
  external,
  heading,
  image,
  importPackage,
  inline,
  label,
  lorem,
  m,
  outline,
  parbreak,
  path,
  pct,
  ref,
  show,
  space,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const appendix = external('appendix')
  const camDarkBlue = external('cam-dark-blue')
  const camSlate4 = external('cam-slate-4')
  const camTheisis = external('cam-theisis')
  const declaration = define('declaration').returns(T.any).external()
  const mainBody = external('main-body')
  const preamble = define('preamble').pos('arg1', T.content).returns(T.any).external()
  const camTheisis_with = define('with')
    .named('author', T.any, null)
    .named('college', T.any, null)
    .named('college-crest', T.any, null)
    .named('crest', T.any, null)
    .named('degree-title', T.any, null)
    .named('department', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(camTheisis)
  return doc(
    importPackage('@preview/unofficial-cambridge-thesis:0.0.1', [
      appendix,
      camDarkBlue,
      camSlate4,
      camTheisis,
      declaration,
      mainBody,
      preamble,
    ]),
    show(
      camTheisis_with({
        title: 'University Of Cambridge Thesis Template',
        subtitle: 'A Simple Template For Cambridge Theses',
        author: 'Matthew Ord',
        crest: image({ width: pct(100) }, path('./assets/placeholder.svg')),
        collegeCrest: null,
        department: 'Department of Physics',
        college: 'Your College',
        degreeTitle: 'Doctor of Philosophy',
      }),
    ),
    inline(
      preamble(
        blocks(
          parbreak(),
          inline(declaration()),
          m.lines(heading({ depth: 1 }, inline('Acknowledgements')), inline`And I would like to acknowledge ...`),
          m.lines(heading({ depth: 1 }, inline('Abstract')), inline(lorem(100))),
          inline(lorem(100)),
          inline(lorem(100)),
          inline(lorem(100)),
          inline(lorem(100)),
          inline(outline({ title: inline`Table of Contents`, indent: auto, depth: 3 })),
          parbreak(),
        ),
      ),
    ),
    show(mainBody),
    m.lines(heading({ depth: 1 }, inline('Introduction')), inline(lorem(100), space, unsafeRaw.math.block`E = m C^2`)),
    inline(unsafeRaw.math.block`E = m C^2`),
    inline(lorem(100), space, ref(label('harry'))),
    m.lines(heading({ depth: 2 }, inline('Test')), inline(lorem(100))),
    inline(lorem(100)),
    m.lines(heading({ depth: 3 }, inline('Test')), inline(lorem(1000))),
    m.lines(heading({ depth: 2 }, inline('Test')), inline(lorem(100))),
    inline(lorem(100)),
    m.lines(heading({ depth: 1 }, inline('Sectionz')), inline(lorem(100), space, unsafeRaw.math.block`E = m C^2`)),
    inline(lorem(100)),
    m.lines(heading({ depth: 2 }, inline('Test')), inline(lorem(100))),
    inline(lorem(100)),
    m.lines(heading({ depth: 3 }, inline('Test')), inline(lorem(1000))),
    m.lines(heading({ depth: 2 }, inline('Test')), inline(lorem(100))),
    inline(lorem(100)),
    show(appendix),
    heading({ depth: 1 }, inline('First Appendix')),
    inline(lorem(100)),
    inline(lorem(100)),
    heading({ depth: 2 }, inline('Appendix Subsection')),
    inline(lorem(100)),
    heading({ depth: 3 }, inline('Appendix Sub-Subsection')),
    inline(lorem(100)),
    heading({ depth: 1 }, inline('Second Appendix')),
    inline(lorem(100)),
    inline(bibliography(path('bibliography.yml'))),
  )
}
