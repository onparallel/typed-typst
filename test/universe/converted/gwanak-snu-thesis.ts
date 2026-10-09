// Converted from test/universe/corpus/gwanak-snu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  linebreak,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const snuThesis = external('snu-thesis')
  const snuThesis_with = define('with')
    .named('abstract-en', T.any, null)
    .named('abstract-ko', T.any, null)
    .named('academic-en', T.any, null)
    .named('academic-ko', T.any, null)
    .named('acknowledgement', T.any, null)
    .named('advisor', T.any, null)
    .named('advisor-display', T.any, null)
    .named('appendices', T.any, null)
    .named('approval-date', T.any, null)
    .named('approval-language', T.any, null)
    .named('author', T.any, null)
    .named('author-display', T.any, null)
    .named('bibliography', T.any, null)
    .named('body-language', T.any, null)
    .named('committee', T.any, null)
    .named('cover-language', T.any, null)
    .named('degree', T.any, null)
    .named('fonts', T.any, null)
    .named('grad-date-en', T.any, null)
    .named('grad-date-ko', T.any, null)
    .named('keywords-en', T.any, null)
    .named('keywords-ko', T.any, null)
    .named('major-en', T.any, null)
    .named('major-ko', T.any, null)
    .named('school-en', T.any, null)
    .named('school-ko', T.any, null)
    .named('student-number', T.any, null)
    .named('submission-date', T.any, null)
    .named('title', T.content, [])
    .named('title-alt', T.content, [])
    .returns(T.any)
    .external(snuThesis)
  return doc(
    importPackage('@preview/gwanak-snu-thesis:0.1.0', [snuThesis]),
    show(
      snuThesis_with({
        bodyLanguage: 'en',
        coverLanguage: 'en',
        approvalLanguage: 'ko',
        degree: 'phd',
        academicKo: '공학',
        academicEn: 'Engineering',
        schoolKo: '대학원',
        schoolEn: 'Graduate School of Engineering',
        majorKo: '컴퓨터공학부',
        majorEn: 'Computer Science and Engineering Major',
        title: inline`${space}Data-Centric Continual Learning ${linebreak()} for Urban Mobility Forecasting${space}`,
        titleAlt: inline`${space}도시 이동성 예측을 위한 ${linebreak()} 데이터 중심 연속 학습 연구${space}`,
        author: 'Minseo Park',
        authorDisplay: 'Minseo Park',
        studentNumber: '2026-12345',
        advisor: '정지도',
        advisorDisplay: '정 지 도',
        gradDateKo: '2026년 8월',
        gradDateEn: 'August 2026',
        submissionDate: '2026년 6월',
        approvalDate: '2026년 7월',
        committee: { chair: '김위원장', viceChair: '오부위원장', members: ['한교통', '윤데이터'] },
        abstractKo: includeFile('sections/abstract-ko.typ'),
        abstractEn: includeFile('sections/abstract-en.typ'),
        keywordsKo: ['연속 학습', '도시 이동성', '시계열 예측', '데이터 중심 인공지능'],
        keywordsEn: ['continual learning', 'urban mobility', 'time-series forecasting', 'data-centric AI'],
        acknowledgement: includeFile('sections/acknowledgement.typ'),
        bibliography: bibliography({ style: 'apa', title: null }, path('bibliography/references.bib')),
        appendices: [{ title: inline`Additional drift detection checks`, body: includeFile('sections/appendix.typ') }],
        fonts: ['NanumMyeongjo'],
      }),
    ),
    m.lines(includeFile('sections/chapters/1-introduction.typ'), includeFile('sections/chapters/2-methods.typ')),
  )
}
