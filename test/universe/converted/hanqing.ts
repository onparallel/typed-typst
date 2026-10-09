// Converted from test/universe/corpus/hanqing.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, m, rgb, show } from '../../../src/index.ts'

export default () => {
  const manual = external('manual')
  const entry = define('entry')
    .pos('arg1', T.any)
    .named('badge', T.any, null)
    .named('content', T.content, [])
    .named('content-header', T.any, null)
    .named('description', T.content, [])
    .named('items', T.any, null)
    .named('items-header', T.any, null)
    .named('notes', T.any, null)
    .named('notes-header', T.any, null)
    .returns(T.any)
    .external()
  const manual_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('chapter-header', T.any, null)
    .named('menu-header', T.any, null)
    .named('title', T.any, null)
    .named('toc-type', T.any, null)
    .returns(T.any)
    .external(manual)
  return doc(
    importPackage('@preview/hanqing:0.1.1', [manual, entry]),
    show(
      manual_with({
        title: '管理手册',
        author: '技术文档中心',
        accentColor: rgb('#2E5A8C'),
        tocType: 'numbly',
        menuHeader: '目  录',
        chapterHeader: '章节',
      }),
    ),
    m.heading(1, '项目概述'),
    inline(
      entry(
        {
          description: inline`本手册旨在规范项目管理流程，确保各项工作有序开展。`,
          badge: '主责部门：项目管理办公室',
          itemsHeader: '关键要点',
          items: [
            { amount: '目标一', name: '建立统一的管理规范和标准' },
            { amount: '目标二', name: '明确各岗位职责与协作流程' },
            { amount: '目标三', name: '提供可操作的执行指南' },
            { amount: '目标四', name: '建立持续改进的反馈机制' },
          ],
          contentHeader: '实施步骤',
          content: blocks(
            m.enum(
              m.numbered(1, ['成立项目管理委员会，明确组织架构和决策机制。']),
              m.numbered(2, ['制定管理制度文件，经审批后正式发布。']),
              m.numbered(3, ['组织全员培训，确保制度落地执行。']),
              m.numbered(4, ['建立定期审查机制，持续优化管理流程。']),
            ),
          ),
          notesHeader: '工作提示',
          notes: '本手册为内部管理文件，请妥善保管，不得外传。各章节可根据实际需要灵活调整。',
        },
        '项目背景与目标',
      ),
    ),
    m.heading(1, '实施指南'),
    inline(
      entry(
        {
          description: inline`建立全流程质量控制体系，确保交付成果符合标准要求。`,
          badge: '主责部门：质量管理部',
          itemsHeader: '管理规则',
          items: [
            { amount: '规则一', name: '所有交付物须经质量评审后方可发布' },
            { amount: '规则二', name: '关键节点须留存书面审核记录' },
            { amount: '规则三', name: '质量问题须在规定时限内完成整改' },
          ],
          contentHeader: '规则解析',
          content: blocks(
            m.enum(
              m.numbered(1, ['质量评审应在交付物完成后 3 个工作日内组织。']),
              m.numbered(2, ['审核记录应包含审核人、审核日期、审核意见及整改要求。']),
              m.numbered(3, ['一般问题整改时限为 5 个工作日，重大问题须 24 小时内响应。']),
            ),
          ),
          notesHeader: '工作提示',
          notes: '建议使用信息化工具进行质量全流程跟踪，提高管理效率。',
        },
        '质量管理流程',
      ),
    ),
  )
}
