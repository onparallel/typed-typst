// Converted from test/universe/corpus/modern-ruc-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
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
  const project = external('project')
  const project_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-zh', T.content, [])
    .named('acknowledgement', T.any, null)
    .named('advisor', T.any, null)
    .named('appendix', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('date', T.any, null)
    .named('encoding', T.any, null)
    .named('grade', T.any, null)
    .named('keywords-en', T.any, null)
    .named('keywords-zh', T.any, null)
    .named('major', T.any, null)
    .named('school', T.any, null)
    .named('score', T.any, null)
    .named('student-id', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(project)
  return doc(
    importPackage('@preview/modern-ruc-thesis:0.1.3', [project]),
    show(
      project_with({
        title: '对毕业论文模板的研究',
        subtitle: '以Typst模板为例',
        author: '张三',
        school: '信息学院',
        major: '计算机科学与技术',
        grade: '2022级',
        studentId: '2022000000',
        advisor: '李四',
        score: '90分',
        date: '2026年3月10日',
        encoding: 'RUC-BK-050101-2021000000',
        abstractZh: blocks(
          '这里是中文摘要。在对论文进行总结的基础上，用简单、明确、易懂、精辟的语言对全文内容加以概括，提取论文的主要信息。',
          '摘要通常包含研究背景、目的、方法、结果和结论。',
        ),
        keywordsZh: ['关键词1', '关键词2', '关键词3'],
        abstractEn: blocks(
          'This is abstract. Use simple, clear, understandable, incisive language to summarize the full text content, extract the main information of the paper.',
          'The abstract usually contains the research background, purpose, methods, results, and conclusions.',
        ),
        keywordsEn: ['Keyword1', 'Keyword2', 'Keyword3'],
        acknowledgement: includeFile('acknowledgement.typ'),
        appendix: includeFile('appendix.typ'),
        bibliography: bibliography(path('refs.bib')),
      }),
    ),
    m.lines(includeFile('chapters/chapter1.typ'), includeFile('chapters/chapter2.typ')),
  )
}
