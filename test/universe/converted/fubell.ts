// Converted from test/universe/corpus/fubell.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  importPackage,
  includeFile,
  m,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const appendix = external('appendix')
  const thesis_with = define('with')
    .named('abstract-en', T.any, null)
    .named('abstract-zh', T.any, null)
    .named('acknowledgement-en', T.any, null)
    .named('acknowledgement-zh', T.any, null)
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('bibliography-file', T.any, null)
    .named('college', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('doi', T.any, null)
    .named('font-profile', T.any, null)
    .named('institute', T.any, null)
    .named('keywords', T.any, null)
    .named('lang', T.any, null)
    .named('student-id', T.any, null)
    .named('title', T.any, null)
    .named('university', T.any, null)
    .named('watermark', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/fubell:0.2.1', [thesis, appendix]),
    show(
      thesis_with({
        university: { zh: '國立臺灣大學', en: 'National Taiwan University' },
        college: { zh: '文學院', en: 'College of Liberal Arts' },
        institute: { zh: '語言學研究所', en: 'Graduate Institute of Linguistics' },
        title: {
          zh: '以 Typst 排版系統撰寫國立臺灣大學論文',
          en: 'Writing NTU Thesis with the Typst Typesetting System',
        },
        author: { zh: '王小明', en: 'Xiao-Ming Wang' },
        advisor: { zh: '陳大文 博士', en: 'Da-Wen Chen, Ph.D.' },
        studentId: 'R12345678',
        degree: 'master',
        fontProfile: 'submission',
        date: { yearZh: '115', yearEn: '2026', monthZh: '2', monthEn: 'February' },
        keywords: { zh: ['排版', '論文模板', 'Typst'], en: ['typesetting', 'thesis template', 'Typst'] },
        abstractZh: includeFile('sections/abstract-zh.typ'),
        abstractEn: includeFile('sections/abstract-en.typ'),
        acknowledgementZh: includeFile('sections/acknowledgement-zh.typ'),
        acknowledgementEn: includeFile('sections/acknowledgement-en.typ'),
        bibliographyFile: bibliography(path('bibliography/refs.bib')),
        watermark: null,
        doi: null,
        lang: 'zh',
      }),
    ),
    includeFile('sections/chapters/introduction.typ'),
    m.lines(show(appendix), includeFile('sections/appendices/appendix-a.typ')),
  )
}
