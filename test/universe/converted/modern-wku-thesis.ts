// Converted from test/universe/corpus/modern-wku-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  label,
  labelled,
  lorem,
  m,
  path,
  ref,
  show,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const graduateThesis = external('graduate-thesis')
  const graduateThesis_with = define('with')
    .named('abstract', T.content, [])
    .named('acknowledgments', T.content, [])
    .named('acronyms', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('degree', T.content, [])
    .named('degree-year', T.content, [])
    .named('department', T.content, [])
    .named('keywords', T.content, [])
    .named('month', T.content, [])
    .named('program-type', T.content, [])
    .named('supervisor', T.content, [])
    .named('title', T.content, [])
    .named('university', T.content, [])
    .named('year', T.content, [])
    .returns(T.any)
    .external(graduateThesis)
  return doc(
    importPackage('@preview/modern-wku-thesis:0.1.3', [graduateThesis]),
    m.lines(
      show(
        graduateThesis_with({
          title: inline`Your Thesis Title Goes Here`,
          author: 'Your Name',
          degree: inline`MS of Computer Information Systems`,
          department: inline`Department of Computer Science and Technology`,
          university: inline`Wenzhou-Kean University`,
          supervisor: inline`Your Supervisor`,
          month: inline`December`,
          year: inline`2025`,
          degreeYear: inline`2025`,
          programType: inline`Master of Science`,
          abstract: blocks(
            'Classical Traceability Management Systems (TMS) help track links between software parts like requirements, designs, Code, and test cases. They help keep projects organized and meet quality goals. But they have issues. Pulling out data takes too long. Searching is hard. The results are greasy and not easy to understand. These problems slow teams down and make fast decisions, especially for agile teams.',
            'This study proposes an improved Traceability Management System (TMS) for software engineering processes. The system retrieves data in real-time and presents it through dynamically updating charts. It is designed to operate with greater speed and simplicity, thereby enhancing team coordination and progress monitoring.',
            'Utilizing regular expressions, the system efficiently extracts critical information from intricate software datasets. This extracted data is subsequently transformed into comprehensible visual representations.',
          ),
          keywords: inline`Traceability; Automatic; Regular Expression; Visualization; TMS.`,
          acknowledgments: blocks(
            'I would like to express my sincere gratitude to my supervisor, Dr. Your Supervisor, for his invaluable guidance, patience, and support throughout this research. His expertise and insights have been instrumental in shaping this work.',
            'I am also grateful to the faculty and staff of the Department of Computer Science and Technology at Wenzhou-Kean University for providing an excellent academic environment and resources that made this research possible.',
            'Special thanks to my family and friends for their unwavering support and encouragement during this journey. Their belief in me has been a constant source of motivation.',
            'Finally, I acknowledge all the researchers and authors whose work has contributed to the foundation of this study. Their contributions to the field of software engineering and traceability management have been invaluable.',
          ),
          bibliography: bibliography(path('refs.bib')),
          acronyms: {
            TMS: 'Traceability Management System',
            RE: 'Regular Expression',
            CSV: 'Comma-Separated Values',
            JSON: 'JavaScript Object Notation',
            XML: 'eXtensible Markup Language',
            HTML: 'HyperText Markup Language',
            CSS: 'Cascading Style Sheets',
            JS: 'JavaScript',
            SQL: 'Structured Query Language',
            DB: 'Database',
            UI: 'User Interface',
            UX: 'User Experience',
            API: 'Application Programming Interface',
            HTTP: 'Hypertext Transfer Protocol',
            HTTPS: 'Hypertext Transfer Protocol Secure',
            TCP: 'Transmission Control Protocol',
            IP: 'Internet Protocol',
            DNS: 'Domain Name System',
            SMTP: 'Simple Mail Transfer Protocol',
            POP3: 'Post Office Protocol version 3',
            IMAP: 'Internet Message Access Protocol',
          },
        }),
      ),
      m.heading(1, 'Introduction'),
    ),
    inline(lorem(20)),
    inline`using References ${ref(label('brown2022algorithms'))}, ${ref(label('anderson2023blockchain'))},
try add figure and use it ${ref(label('fig:1'))}, as log as table: ${ref(label('tb:1'))}.`,
    inline(labelled(figure({ caption: inline`Example Figure` }, image(path('pic.png'))), label('fig:1'))),
    inline(
      labelled(
        figure(
          { caption: inline`Example Table` },
          table(
            {
              columns: 5,
              stroke: (x, y) => unsafeRaw.code<any>`if y==0 {
      (top:1pt)
      (bottom:0.5pt)
    }`,
            },
            inline(strong(inline`Heading 1`)),
            inline(strong(inline`Heading 2`)),
            inline(strong(inline`Heading 3`)),
            inline(strong(inline`Heading 4`)),
            inline(strong(inline`Heading 5`)),
            inline`R1,C1`,
            inline`R1,C2`,
            inline`R1,C3`,
            inline`R1,C4`,
            inline`R1,C5`,
            inline`R2,C1`,
            inline`R2,C2`,
            inline`R2,C3`,
            inline`R2,C4`,
            inline`R2,C5`,
            table.hline(),
          ),
        ),
        label('tb:1'),
      ),
    ),
    inline(lorem(200)),
    m.lines(
      inline(lorem(150)),
      m.heading(2, 'Second heading'),
      m.heading(3, 'Third heading'),
      m.heading(4, 'Fourth heading'),
      m.heading(1, 'Background'),
      inline(lorem(2000)),
    ),
  )
}
