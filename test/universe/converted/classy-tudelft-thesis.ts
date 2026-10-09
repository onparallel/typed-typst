// Converted from test/universe/corpus/classy-tudelft-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bibliography,
  blue,
  datetime,
  define,
  doc,
  external,
  heading,
  image,
  importPackage,
  includeFile,
  inline,
  link,
  m,
  olive,
  outline,
  path,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const zero = external('zero')
  const base = external('base')
  const makecoverpage = define('makecoverpage')
    .named('img', T.any, null)
    .named('name', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const maketitlepage = define('maketitlepage')
    .named('cover-description', T.content, [])
    .named('daily-supervisor', T.content, [])
    .named('defense-date', T.any, null)
    .named('name', T.any, null)
    .named('project-duration', T.content, [])
    .named('publicity-statement', T.any, null)
    .named('student-number', T.any, null)
    .named('subtitle', T.content, [])
    .named('thesis-committee', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const switchPageNumbering = external('switch-page-numbering')
  const appendix = external('appendix')
  const num = external('num')
  const numrange = external('numrange')
  const qty = external('qty')
  const qtyrange = external('qtyrange')
  const base_with = define('with')
    .named('cite-color', T.any, null)
    .named('language', T.any, null)
    .named('main-font', T.any, null)
    .named('math-font', T.any, null)
    .named('name', T.any, null)
    .named('ref-color', T.any, null)
    .named('region', T.any, null)
    .named('rightheader', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(base)
  return doc(
    importPackage('@preview/classy-tudelft-thesis:0.1.0', [
      base,
      makecoverpage,
      maketitlepage,
      switchPageNumbering,
      appendix,
    ]),
    m.lines(
      unsafeRaw.markup`#import "@preview/physica:0.9.6": *`,
      importPackage('@preview/unify:0.7.1', [num, numrange, qty, qtyrange]),
      importPackage('@preview/zero:0.5.0', zero),
    ),
    show(
      base_with({
        title: 'My document',
        name: 'Your Name',
        rightheader: 'Your name',
        mainFont: 'Stix Two Text',
        mathFont: 'Stix Two Math',
        refColor: olive,
        citeColor: blue,
        language: 'en',
        region: 'GB',
      }),
    ),
    inline(
      makecoverpage({
        img: image(path('img/cover-image.jpg')),
        title: inline`Title of Thesis`,
        subtitle: inline`Subtitle`,
        name: inline`Your Name`,
      }),
    ),
    inline(
      maketitlepage({
        title: inline`Title of Thesis`,
        subtitle: inline`Subtitle`,
        name: 'Your Name',
        defenseDate: add(datetime.today().display('[weekday] [month repr:long] [day], [year]'), ' at 10:00'),
        studentNumber: 1234567,
        projectDuration: inline`Starting month and year - Ending month and year`,
        dailySupervisor: inline`Your Daily supervisor`,
        thesisCommittee: [
          inline`Supervisor 1`,
          inline`TU Delft, Supervisor`,
          inline`Committee member 2`,
          inline`TU Delft`,
          inline`Committee member 3`,
          inline`TU Delft.`,
        ],
        coverDescription: inline`Photo by ${link('https://unsplash.com/@thejoltjoker?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Johannes Andersson')}
on ${link('https://unsplash.com/photos/two-brown-deer-beside-trees-and-mountain-UCd78vfC8vU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash', 'Unsplash')}.${space}`,
        publicityStatement: null,
      }),
    ),
    inline(heading({ numbering: null }, inline`Preface`)),
    inline(heading({ numbering: null }, inline`Abstract`)),
    inline(outline()),
    show(switchPageNumbering),
    inline(
      includeFile('./sections/0default-template.typ'),
      space,
      includeFile('./sections/1introduction.typ'),
      space,
      includeFile('./sections/2theory.typ'),
      space,
      includeFile('./sections/3methods.typ'),
      space,
      includeFile('./sections/4results.typ'),
      space,
      includeFile('./sections/5conclusion.typ'),
    ),
    inline(bibliography({ title: inline`References`, style: 'american-physics-society' }, path('references.bib'))),
    show(appendix),
    includeFile('./sections/6appendix.typ'),
  )
}
