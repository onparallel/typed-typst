// Converted from test/universe/corpus/pku-thesis-pass.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  data,
  define,
  doc,
  em,
  heading,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  let_,
  m,
  path,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const config = define('config')
    .named('achievement-outlined', T.any, null)
    .named('always-start-odd', T.any, null)
    .named('author-en', T.any, null)
    .named('author-zh', T.any, null)
    .named('bib-cn-first', T.any, null)
    .named('bib-file', T.any, null)
    .named('bib-pinyin-override', T.any, null)
    .named('bib-style', T.any, null)
    .named('bib-version', T.any, null)
    .named('blind', T.any, null)
    .named('blind-id', T.any, null)
    .named('clean-declaration', T.any, null)
    .named('codly-args', T.any, null)
    .named('degree-type', T.any, null)
    .named('direction', T.any, null)
    .named('first-line-indent', T.any, null)
    .named('first-major', T.any, null)
    .named('header-text', T.any, null)
    .named('latexref-prefixes', T.any, null)
    .named('logo', T.any, null)
    .named('major-en', T.any, null)
    .named('major-zh', T.any, null)
    .named('month', T.any, null)
    .named('outline-depth', T.any, null)
    .named('override-bib', T.any, null)
    .named('preview', T.any, null)
    .named('school', T.any, null)
    .named('student-id', T.any, null)
    .named('supervisor-en', T.any, null)
    .named('supervisor-zh', T.any, null)
    .named('supplements', T.any, null)
    .named('system', T.any, null)
    .named('thesis-name', T.any, null)
    .named('title-en', T.any, null)
    .named('title-zh', T.any, null)
    .named('use-latexref', T.any, null)
    .named('word-count', T.any, null)
    .named('wordmark', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external()
  const [cfgDecl, cfg] = let_(
    'cfg',
    config({
      authorZh: '张三',
      authorEn: 'San Zhang',
      studentId: '23000xxxxx',
      blindId: 'L2023XXXXX',
      thesisName: '博士研究生学位论文',
      headerText: '北京大学博士学位论文',
      titleZh: '北京大学学位论文 \nTypst 模板使用指南',
      titleEn: 'A Guide to Using the Typst Template for \nPeking University Theses',
      school: '信息科学技术学院',
      firstMajor: '计算机科学与技术',
      majorZh: '计算机软件与理论',
      majorEn: 'Computer Software and Theory',
      direction: '程序设计语言与编译技术',
      supervisorZh: '李四 教授',
      supervisorEn: 'Prof. Si Li',
      degreeType: 'academic',
      year: 2026,
      month: 6,
      system: 'windows',
      blind: false,
      preview: true,
      firstLineIndent: em(2),
      alwaysStartOdd: false,
      cleanDeclaration: true,
      outlineDepth: 3,
      wordCount: true,
      achievementOutlined: true,
      supplements: { 成果表: '攻读学位期间发表的论文' },
      useLatexref: true,
      latexrefPrefixes: ['fig:', 'tbl:', 'eqt:'],
      codlyArgs: data({}),
      logo: path('assets/pkulogo.pdf'),
      wordmark: path('assets/pkuword.pdf'),
      overrideBib: false,
      bibFile: path('ref.bib'),
      bibStyle: 'numeric',
      bibVersion: '2015',
      bibCnFirst: true,
      bibPinyinOverride: data({}),
    }),
  )
  return doc(
    importPackage('@preview/pku-thesis-pass:0.3.1', [config]),
    cfgDecl,
    unsafeRaw.markup`#show: cfg.setup`,
    inline(unsafeRaw.code<any>`(cfg.cover)()`),
    inline(unsafeRaw.code<any>`(cfg.copyright)()`),
    inline(unsafeRaw.code<any>`(cfg.abstract-zh)(
  keywords-zh: ("Typst", "模板", "学位论文", "北京大学")
)[#include "content/abstract-zh.typ"]`),
    inline(unsafeRaw.code<any>`(cfg.abstract-en)(
  keywords-en: ("Typst", "Template", "Thesis", "Peking University")
)[#include "content/abstract-en.typ"]`),
    inline(unsafeRaw.code<any>`(cfg.outline)()`),
    inline(unsafeRaw.code<any>`(cfg.list-of-figures)()`),
    inline(unsafeRaw.code<any>`(cfg.list-of-tables)()`),
    inline(unsafeRaw.code<any>`(cfg.list-of-equations)()`),
    inline(unsafeRaw.code<any>`(cfg.list-of-code)()`),
    inline(unsafeRaw.code<any>`(cfg.notation)[#include "content/notation.typ"]`),
    m.lines(unsafeRaw.markup`#show: cfg.body-wrap`, unsafeRaw.markup`#show: cfg.bibliography`),
    inline(labelled(heading({ depth: 1 }, inline('快速开始')), label('quickstart'))),
    includeFile('content/ch01-quickstart.typ'),
    inline(labelled(heading({ depth: 1 }, inline('模板配置')), label('config'))),
    includeFile('content/ch02-config.typ'),
    inline(labelled(heading({ depth: 1 }, inline('Typst 基本功能')), label('basics'))),
    includeFile('content/ch03-basics.typ'),
    inline(labelled(heading({ depth: 1 }, inline('进阶使用技巧')), label('advanced'))),
    includeFile('content/ch04-advanced.typ'),
    inline(labelled(heading({ depth: 1 }, inline('常见问题与解决方案')), label('faq'))),
    includeFile('content/ch05-faq.typ'),
    inline(unsafeRaw.code<any>`(cfg.appendix)()`),
    inline(labelled(heading({ depth: 1 }, inline('关于 Typst')), label('about'))),
    includeFile('content/appendix-about.typ'),
    inline(unsafeRaw.code<any>`(cfg.achievement)[#include "content/achievement.typ"]`),
    inline(unsafeRaw.code<any>`(cfg.acknowledgements)[#include "content/acknowledgements.typ"]`),
    inline(unsafeRaw.code<any>`(cfg.declaration)()`),
  )
}
