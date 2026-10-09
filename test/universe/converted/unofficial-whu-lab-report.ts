// Converted from test/universe/corpus/unofficial-whu-lab-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  m,
  pagebreak,
  path,
  raw,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const whuReport = external('whu-report')
  const appendixStyle = external('appendix-style')
  const teacherComment = define('teacher-comment').returns(T.any).external()
  const whuReport_with = define('with')
    .named('category', T.any, null)
    .named('course-name', T.any, null)
    .named('date', T.any, null)
    .named('deadline', T.any, null)
    .named('grade', T.any, null)
    .named('instructor', T.any, null)
    .named('major', T.any, null)
    .named('school', T.any, null)
    .named('semester', T.any, null)
    .named('show-declaration', T.any, null)
    .named('signature', T.any, null)
    .named('student-id', T.any, null)
    .named('student-name', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(whuReport)
  return doc(
    importPackage('@preview/unofficial-whu-lab-report:0.1.1', [whuReport, appendixStyle, teacherComment]),
    show(
      whuReport_with({
        school: '武汉大学计算机学院',
        category: '本科生课程设计报告',
        title: '实验报告标题',
        major: '你的专业',
        courseName: '课程名称',
        instructor: '教师姓名',
        studentId: '你的学号',
        studentName: '你的姓名',
        semester: '2025-2026-3',
        deadline: '2026年7月18日',
        grade: false,
        date: '二○二六年七月',
        showDeclaration: true,
        signature: image(path('signature.png')),
      }),
    ),
    m.heading(1, '概述'),
    'kiwiizzz 苦于 ML 实验报告，利用空余时间完成了这个模板的设计；而 zoomy14112 在此基础上进行了优化和改进，使之尽可能贴近武汉大学计算机学院本科生课程设计报告的排版规范，并添加了新功能。',
    inline`段落空两格需要在${strong(inline`标题后`)}换行后进行。`,
    m.heading(2, '公式'),
    inline`公式呈现紫色。例如，${unsafeRaw.math`lambda = 36 + 6 sqrt(114)`}。以及，`,
    inline(
      unsafeRaw.math
        .block`f(x) f(x + lambda y) f(x + 3/2 f(2y)) = x (x + lambda y) f(x + 2y) + f(x) f(y) f(x + lambda y).`,
    ),
    m.heading(2, '代码段'),
    inline`内联代码用红色字体，为了拟合 ${raw('Markdown Preview')} 的效果。`,
    '代码块内容如下：',
    inline(raw({ block: true, lang: 'py' }, 'def train_target():\n    acc += 0.1\n    print("sota")')),
    m.heading(2, '表格'),
    inline(
      figure(
        { caption: inline`实验结果对比` },
        table(
          { columns: 3 },
          inline(strong(inline`方法`)),
          inline(strong(inline`准确率`)),
          inline(strong(inline`F1`)),
          inline`BERT`,
          inline`92.3%`,
          inline`0.89`,
          inline`RoBERTa`,
          inline`94.1%`,
          inline`0.91`,
          inline`Ours`,
          inline`95.6%`,
          inline`0.93`,
        ),
      ),
    ),
    m.lines(inline(pagebreak(), space, show(appendixStyle)), m.heading(1, '附录')),
    '附录的调用需要如下实现：',
    inline(raw({ block: true, lang: 'typ' }, '#pagebreak()\n#show: appendix-style\n= 附录\n== 代码段')),
    '附录编号会自动切换为 A.1, A.2, … 的格式。',
    inline(pagebreak()),
    inline(teacherComment()),
  )
}
