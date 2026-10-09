// Converted from test/universe/corpus/simply-ysu-touying.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, datetime, define, doc, external, importPackage, inline, m, show } from '../../../src/index.ts'

export default () => {
  const ysuTheme = external('ysu-theme')
  const configInfo = define('config-info')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('short-title', T.content, [])
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const titleSlide = define('title-slide').named('extra', T.content, []).returns(T.any).external()
  const outlineSlide = define('outline-slide').returns(T.any).external()
  const tblock = define('tblock').pos('arg1', T.content).named('title', T.content, []).returns(T.any).external()
  const ysuTheme_with = define('with')
    .pos('arg1', T.any)
    .named('aspect-ratio', T.any, null)
    .returns(T.any)
    .external(ysuTheme)
  return doc(
    importPackage('@preview/simply-ysu-touying:0.1.0', [ysuTheme, configInfo, titleSlide, outlineSlide, tblock]),
    show(
      ysuTheme_with(
        { aspectRatio: '16-9' },
        configInfo({
          title: inline`燕山大学 Touying 演示模板`,
          shortTitle: inline`YSU Touying 模板`,
          subtitle: inline`面向中文学术汇报的新版 Typst 幻灯片主题`,
          author: inline`张三`,
          institution: inline`燕山大学\\ 信息科学与工程学院`,
          date: datetime.today(),
        }),
      ),
    ),
    inline(titleSlide({ extra: inline`适用于课程汇报、组会、开题、中期检查与学术报告。` })),
    inline(outlineSlide()),
    m.heading(1, '模板概览'),
    m.heading(2, '第一页'),
    inline(
      tblock(
        { title: inline`使用说明` },
        blocks(
          m.list(
            m.item(['本模板基于 Touying 构建，适用于中文学术展示。']),
            m.item(['中文默认使用楷体，英文默认使用 Times New Roman。']),
            m.item(['可继续扩展页眉、页脚、分节页和内容块样式。']),
          ),
        ),
      ),
    ),
  )
}
