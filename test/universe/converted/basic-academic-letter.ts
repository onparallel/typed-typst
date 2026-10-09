// Converted from test/universe/corpus/basic-academic-letter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  image,
  importPackage,
  inline,
  linebreak,
  link,
  lorem,
  path,
  pct,
  pt,
  rgb,
  show,
} from '../../../src/index.ts'

export default () => {
  const basicAcademicLetter = external('basic-academic-letter')
  const basicAcademicLetter_with = define('with')
    .named('closing', T.any, null)
    .named('logo-img', T.any, null)
    .named('main-color', T.any, null)
    .named('per-email', T.any, null)
    .named('per-homepage', T.any, null)
    .named('per-name', T.any, null)
    .named('per-school', T.any, null)
    .named('per-title', T.any, null)
    .named('per-university', T.any, null)
    .named('phone', T.content, [])
    .named('salutation', T.any, null)
    .named('school', T.content, [])
    .named('signature-img', T.any, null)
    .named('site', T.content, [])
    .named('university', T.content, [])
    .named('website', T.content, [])
    .returns(T.any)
    .external(basicAcademicLetter)
  return doc(
    importPackage('@preview/basic-academic-letter:0.2.0', [basicAcademicLetter]),
    show(
      basicAcademicLetter_with({
        mainColor: rgb('#641C78'),
        logoImg: image({ width: pct(80) }, path('assets/logo.jpg')),
        signatureImg: image({ height: pt(30) }, path('assets/signature.png')),
        school: inline`School of Information Science and ${linebreak()} Technology,`,
        university: inline`Tsinghua University`,
        site: inline`FIT Building, Haidian District ${linebreak()} Beijing 100084, P.R.China`,
        phone: inline`+86 10 62795873`,
        website: inline(link('https://www.sist.tsinghua.edu.cn/')),
        perName: 'Dr XXX',
        perHomepage: 'https://www.sist.tsinghua.edu.cn/sisten/Faculty.htm',
        perTitle: 'Professor',
        perSchool: 'School of Information Science and Technology',
        perUniversity: 'Tsinghua University',
        perEmail: 'xxx@tsinghua.edu.cn',
        salutation: 'To the Admission Committee,',
        closing: 'Sincerely,',
      }),
    ),
    inline`It is my pleasure to recommend XXX for your doctoral programme. ${lorem(90)}`,
    inline(lorem(70)),
    inline(lorem(90)),
    inline(lorem(30)),
    inline(lorem(50)),
    'Please feel free to contact me if you require further information.',
  )
}
