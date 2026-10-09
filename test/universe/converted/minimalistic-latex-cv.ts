// Converted from test/universe/corpus/minimalistic-latex-cv.typ by scripts/convert-suite.ts — do not edit.
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
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const entry = define('entry')
    .named('date', T.any, null)
    .named('location', T.any, null)
    .named('name', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const cv_with = define('with')
    .named('lang', T.any, null)
    .named('metadata', T.any, null)
    .named('name', T.any, null)
    .named('photo', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/minimalistic-latex-cv:0.1.1', [cv, entry]),
    show(
      cv_with({
        name: 'Your Name',
        metadata: { email: 'your@email.com', telephone: '+123456789' },
        photo: image(path('photo.jpeg')),
        lang: 'en',
      }),
    ),
    m.heading(1, 'Professional Experience'),
    m.lines(
      inline(entry({ title: 'Job Title', name: 'Company', date: 'Start - End', location: 'City, Country' })),
      m.list(m.item([strong(inline`Keyword:`), space, lorem(25)])),
    ),
    m.lines(
      inline(entry({ title: 'Job Title', name: 'Company', date: 'Start - End', location: 'City, Country' })),
      m.list(m.item([strong(inline`Keyword:`), space, lorem(25)])),
    ),
    m.lines(
      inline(entry({ title: 'Job Title', name: 'Company', date: 'Start - End', location: 'City, Country' })),
      m.list(m.item([strong(inline`Keyword:`), space, lorem(25)])),
    ),
    m.heading(1, 'Education'),
    m.lines(
      inline(entry({ title: 'Degree Title', name: 'Institution' })),
      m.list(
        m.item([strong(inline`Coursework:`), space, lorem(20)]),
        m.item([strong(inline`Thesis title:`), space, lorem(6)]),
      ),
    ),
    m.lines(
      inline(entry({ title: 'Degree Title', name: 'Institution' })),
      m.list(
        m.item([strong(inline`Coursework:`), space, lorem(20)]),
        m.item([strong(inline`Thesis title:`), space, lorem(6)]),
      ),
    ),
    m.heading(1, 'Skills'),
    inline(strong(inline`Skill 1:`), space, lorem(10)),
    inline(strong(inline`Skill 2:`), space, lorem(10)),
    inline(strong(inline`Skill 3:`), space, lorem(10)),
    m.heading(1, 'Languages'),
    inline(strong(inline`Language 1:`), space, lorem(2)),
    inline(strong(inline`Language 2:`), space, lorem(2)),
  )
}
