// Converted from test/universe/corpus/cycle-ensaj.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, image, importPackage, inline, linebreak, m, path, space } from '../../../src/index.ts'

export default () => {
  const coverPage = define('cover-page')
    .named('code', T.any, null)
    .named('contributors', T.content, [])
    .named('degree', T.any, null)
    .named('dep', T.any, null)
    .named('field', T.any, null)
    .named('jury', T.content, [])
    .named('module', T.any, null)
    .named('subject-image', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const achrafCodeBlock = define('achraf-code-block').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  return doc(
    importPackage('@preview/cycle-ensaj:0.1.0', [coverPage, achrafCodeBlock]),
    inline(
      coverPage({
        title: 'Design and Implementation of a Scalable DevOps CI/CD Pipeline for Modern Microservices Architectures',
        subjectImage: image(path('devops_5266248.png')),
        module: 'Architecture microservice et DevOps',
        field: 'Computer Science and Emerging Technologies',
        degree: 'State Engineer Diploma',
        contributors: inline`${space}SAADALI ACHRAF ${linebreak()} Student Engineer${space}`,
        jury: inline`${space}Prof. X ${linebreak()} Prof. Y${space}`,
        code: 'ABCDE-1234',
        dep: 'Prof. Z',
      }),
    ),
    m.heading(1, 'Introduction'),
    m.heading(1, 'Literature Review'),
    m.heading(1, 'Methodology'),
    m.heading(1, 'Results and Discussion'),
    m.heading(1, 'Conclusion'),
    inline(
      achrafCodeBlock(
        'public class CodeFragment {\n\n    public static void main(String[] args) {\n\n        System.out.println("This is Achraf , Greeting you  << Hi >> ");\n\n        System.out.println("Use chatgpt-like code Blocks in your Report ");\n\n    }\n\n}',
        'JAVA',
      ),
    ),
    inline(achrafCodeBlock('SELECT * FROM ENSAJ WHERE NAME ="SAADALI ACHRAF";', 'SQL')),
  )
}
