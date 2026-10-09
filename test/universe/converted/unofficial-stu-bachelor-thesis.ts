// Converted from test/universe/corpus/unofficial-stu-bachelor-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  codeBlock,
  define,
  dict,
  doc,
  external,
  image,
  importPackage,
  includeFile,
  inline,
  let_,
  path,
  show,
} from '../../../src/index.ts'

export default () => {
  const templateMain = external('template-main')
  const templateMain_with = define('with').pos('arg1', T.any).returns(T.any).external(templateMain)
  const [textContentDecl, textContent] = let_(
    'text-content',
    codeBlock([
      includeFile('chapter_1.typ'),
      includeFile('chapter_2.typ'),
      includeFile('chapter_3.typ'),
      includeFile('chapter_4.typ'),
    ]),
  )
  return doc(
    inline(
      codeBlock([
        importPackage('@preview/unofficial-stu-bachelor-thesis:0.1.0', [templateMain]),
        textContentDecl,
        show(
          templateMain_with(
            dict({
              title: '汕头大学学位论文格式模板',
              'title-en': 'Shantou University Dissertation Format Template',
              gradeandmajor: '电子信息工程　2021级',
              'student-id': '2021123456',
              author: '张三',
              college: '工学院',
              department: '电子工程系',
              supervisor: '李四教授',
              stu_logo: image({ width: cm(5.51), height: cm(1.73) }, path('figures/STU_logo.jpg')),
              abstract: blocks(
                '学位论文是学生从事科研工作、工程实践的成果的主要表现，集中表明了作者在工作、实践中获得的新的发明、理论或见解，是学生申请学生、硕士或博士学位的重要依据，也是科研领域中的重要文献资料和社会的宝贵财富。',
                '为了提高学生学位论文的质量，做到学位论文在内容和格式上的规范化与统一化，特制作本模板。',
              ),
              keywords: ['学位论文', '论文格式', '规范化', '模板'],
              'abstract-en': blocks(
                inline`A dissertation is a primary manifestation of students' achievements in scientific research work
and engineering practice. It systematically demonstrates the author's new inventions, theories
or insights obtained through research and practice. It serves as an important basis for students
to apply for bachelor's, master's or doctoral degrees, and is also an important literature resource
in the scientific research field and a valuable asset to society.`,
                inline`In order to improve the quality of students' dissertations and achieve standardization and unification
of dissertations in both content and format, this template has been specially created.`,
              ),
              'keywords-en': ['dissertation', 'dissertation format', 'standardization', 'template'],
              acknowledgements: codeBlock([], includeFile('acknowledgements.typ')),
              bib: bibliography({ style: 'gb-7714-2005-numeric', title: null }, path('ref.bib')),
            }),
          ),
        ),
        textContent,
      ]),
    ),
  )
}
