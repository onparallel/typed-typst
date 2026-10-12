// Converted from test/universe/corpus/community-gzqy-thesis.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  bibliography,
  define,
  doc,
  external,
  heading,
  importPackage,
  inline,
  label,
  path,
  ref,
  show,
} from '../../../src/index.ts'

export default () => {
  const communityGzqyThesis = external('community-gzqy-thesis')
  const thesisBibliography = define('thesis-bibliography').pos('arg1', T.any).returns(T.any).external()
  const thesisAcknowledgement = define('thesis-acknowledgement').pos('arg1', T.content).returns(T.any).external()
  const communityGzqyThesis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-zh', T.content, [])
    .named('advisor', T.any, null)
    .named('keywords-en', T.any, null)
    .named('keywords-zh', T.any, null)
    .named('major', T.any, null)
    .named('month', T.any, null)
    .named('student-id', T.any, null)
    .named('student-name', T.any, null)
    .named('title', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(communityGzqyThesis)
  return doc(
    importPackage('@preview/community-gzqy-thesis:0.1.0', [
      communityGzqyThesis,
      thesisBibliography,
      thesisAcknowledgement,
    ]),
    show(
      communityGzqyThesis_with({
        title: '论文题目',
        major: 'XXXXXXX',
        advisor: 'XXX',
        studentId: '202XXXXXXXXX',
        studentName: 'XXX',
        year: '2026',
        month: '6',
        abstractZh: inline`在此填写中文摘要内容。摘要应简明扼要地概括论文的主要内容，包括研究目的、方法、结果和结论。`,
        keywordsZh: ['关键词1', '关键词2', '关键词3'],
        abstractEn: inline`Write your English abstract here.`,
        keywordsEn: ['keyword1', 'keyword2', 'keyword3'],
      }),
    ),
    heading({ depth: 1 }, inline('绪论')),
    heading({ depth: 2 }, inline('研究背景')),
    '在此编写研究背景内容。',
    heading({ depth: 3 }, inline('小节标题')),
    inline`在此编写小节内容。引用参考文献示例 ${ref(label('wang2023python'))} ${ref(label('zhang2024dl'))}。`,
    heading({ depth: 2 }, inline('研究意义')),
    '在此编写研究意义。',
    heading({ depth: 1 }, inline('相关技术')),
    heading({ depth: 2 }, inline('技术一')),
    '在此介绍相关技术。',
    heading({ depth: 2 }, inline('技术二')),
    '在此介绍相关技术。',
    heading({ depth: 1 }, inline('系统设计与实现')),
    heading({ depth: 2 }, inline('总体设计')),
    '在此描述系统总体设计。',
    heading({ depth: 2 }, inline('详细设计')),
    '在此描述系统详细设计。',
    heading({ depth: 1 }, inline('系统测试')),
    heading({ depth: 2 }, inline('测试环境')),
    '在此描述测试环境。',
    heading({ depth: 2 }, inline('测试结果')),
    '在此描述测试结果与分析。',
    heading({ depth: 1 }, inline('总结与展望')),
    '在此总结全文并展望未来工作。',
    inline(thesisBibliography(bibliography({ title: null, style: 'gb-7714-2015-numeric' }, path('refs.bib')))),
    inline(thesisAcknowledgement(inline`在此编写致谢内容。`)),
  )
}
