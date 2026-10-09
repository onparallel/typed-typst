// Converted from test/universe/corpus/not-tudabeamer-2023.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  datetime,
  define,
  doc,
  emoji,
  external,
  importPackage,
  inches,
  inline,
  m,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const notTudabeamer2023Theme = external('not-tudabeamer-2023-theme')
  const configInfo = define('config-info')
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('department', T.content, [])
    .named('institute', T.content, [])
    .named('logo', T.any, null)
    .named('short-author', T.any, null)
    .named('short-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const notTudabeamer2023Theme_with = define('with').pos('arg1', T.any).returns(T.any).external(notTudabeamer2023Theme)
  return doc(
    importPackage('@preview/not-tudabeamer-2023:0.2.1', [notTudabeamer2023Theme, configInfo, titleSlide, outlineSlide]),
    show(
      notTudabeamer2023Theme_with(
        configInfo({
          title: inline`Title`,
          shortTitle: inline`Title`,
          subtitle: inline`Subtitle`,
          author: 'Author',
          shortAuthor: 'Author',
          date: datetime.today(),
          department: inline`Department`,
          institute: inline`Institute`,
          logo: text({ fallback: true, size: inches(0.75) }, emoji.cat.face),
        }),
      ),
    ),
    inline(titleSlide()),
    inline(outlineSlide()),
    m.heading(1, 'Section'),
    m.heading(2, 'Subsection'),
    m.list(
      m.item(['Some text']),
      m.item(
        m.lines(
          'More text',
          m.list(
            m.item(
              m.lines(
                'This is pretty small, you may want to change it',
                m.list(m.item(m.lines('nested', m.list(m.item(m.lines('bullet', m.list(m.item(['points'])))))))),
              ),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, 'Another Section'),
    m.heading(2, 'Another Subsection'),
    m.list(
      m.item(['Some text']),
      m.item(m.lines('More text', m.list(m.item(['This is pretty small, you may want to change it'])))),
    ),
    m.heading(1, 'Another Section 2'),
    m.heading(1, 'Another Section 3'),
    m.heading(1, 'Another Section 4'),
    m.heading(1, 'Another Section 5'),
    m.heading(1, 'Another Section 6'),
    m.heading(1, 'Another Section 7'),
  )
}
