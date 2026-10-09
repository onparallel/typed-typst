// Converted from test/universe/corpus/examine-ib.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const titlePage = define('title-page')
    .named('date', T.content, [])
    .named('level', T.content, [])
    .named('paper', T.content, [])
    .named('subject', T.content, [])
    .named('time-limit', T.content, [])
    .returns(T.any)
    .external()
  const mcq = define('mcq')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .returns(T.any)
    .external()
  const saq = define('saq').pos('arg1', T.content).pos('arg2', T.any).pos('arg3', T.any).returns(T.any).external()
  const conf_with = define('with').named('exam-id', T.content, []).returns(T.any).external(conf)
  return doc(
    importPackage('@preview/examine-ib:0.1.2', [conf, titlePage, mcq, saq]),
    show(conf_with({ examId: inline`0000-0001` })),
    inline(
      titlePage({
        subject: inline`General Knowledge`,
        level: inline`Higher Level`,
        paper: inline`Paper 3`,
        date: inline`19 May 2028`,
        timeLimit: inline`55 minutes`,
      }),
    ),
    inline(
      mcq(inline`What is the capital of Canada?`, inline`Toronto`, inline`Ottawa`, inline`Vancouver`, inline`Montreal`),
    ),
    inline(
      mcq(
        inline`Which planet is known as the Red Planet?`,
        inline`Earth`,
        inline`Mars`,
        inline`Jupiter`,
        inline`Venus`,
      ),
    ),
    inline(
      mcq(
        inline`What is the main function of red blood cells?`,
        inline`Fight infection`,
        inline`Carry oxygen`,
        inline`Clot blood`,
        inline`Produce hormones`,
      ),
    ),
    inline(
      mcq(
        inline`Which Shakespeare play features the characters Rosencrantz and Guildenstern?`,
        inline`Macbeth`,
        inline`Hamlet`,
        inline`King Lear`,
        inline`Othello`,
      ),
    ),
    inline(mcq(inline`What is the chemical symbol for gold?`, inline`Gd`, inline`Ag`, inline`Au`, inline`Go`)),
    inline(mcq(inline`In what year did World War II end?`, inline`1944`, inline`1945`, inline`1946`, inline`1947`)),
    inline(
      mcq(
        inline`Which of the following is a renewable source of energy?`,
        inline`Coal`,
        inline`Wind`,
        inline`Natural Gas`,
        inline`Nuclear`,
      ),
    ),
    inline(
      mcq(
        inline`What programming language is primarily used for web development alongside HTML and CSS?`,
        inline`Python`,
        inline`Java`,
        inline`JavaScript`,
        inline`C++`,
      ),
    ),
    inline(
      mcq(
        inline`Who painted the Mona Lisa?`,
        inline`Vincent van Gogh`,
        inline`Pablo Picasso`,
        inline`Leonardo da Vinci`,
        inline`Claude Monet`,
      ),
    ),
    inline(
      mcq(
        inline`What is the boiling point of water at sea level in Celsius?`,
        inline`90°C`,
        inline`95°C`,
        inline`100°C`,
        inline`105°C`,
      ),
    ),
    inline(
      saq(
        inline`A city has recently implemented a smart traffic management system that uses real-time data from
sensors and cameras to optimize traffic flow. The system also collects and stores driver movement
data to improve future predictions.`,
        {
          question: inline`What are two potential benefits of using real-time data in traffic systems?`,
          points: 2,
          lines: 3,
        },
        {
          question: inline`Explain one concern related to collecting and storing driver movement data.`,
          points: 4,
          lines: 5,
        },
      ),
    ),
    inline(
      saq(
        inline`A company is using AI-powered recruitment software to filter job applications. The software
ranks candidates based on qualifications, but some users have raised concerns about bias in
the algorithm.`,
        { question: inline`How might AI improve the efficiency of the hiring process?`, points: 4, lines: 6 },
        { question: inline`Why could the use of AI in hiring lead to biased outcomes?`, points: 4, lines: 6 },
      ),
    ),
    inline(
      saq(
        inline`A school has adopted a bring-your-own-device (BYOD) policy that encourages students to use their
personal laptops and tablets during class. This has led to debates among teachers and parents.`,
        {
          question: inline`Describe one advantage and one disadvantage of the BYOD policy for students.`,
          points: 2,
          lines: 5,
        },
        {
          question: inline`What measures could the school take to ensure equal access for all students?`,
          points: 4,
          lines: 8,
        },
      ),
    ),
  )
}
