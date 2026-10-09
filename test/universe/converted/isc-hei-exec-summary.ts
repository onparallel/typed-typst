// Converted from test/universe/corpus/isc-hei-exec-summary.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  block,
  blocks,
  bottom,
  center,
  cm,
  colbreak,
  define,
  doc,
  external,
  figure,
  image,
  importPackage,
  inline,
  let_,
  m,
  parbreak,
  path,
  pct,
  place,
  pt,
  raw,
  right,
  show,
  space,
  strong,
  text,
  unsafeRaw,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const scaleToWidth = define('scale-to-width').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const code = define('code').pos('arg1', T.content).named('numbering', T.any, null).returns(T.any).external()
  const execSummary = external('exec-summary')
  const school = external('school')
  const canvas = define('canvas').pos('arg1', T.any).named('length', T.any, null).returns(T.any).external()
  const draw = external('draw')
  const execSummary_with = define('with')
    .named('academic-year', T.any, null)
    .named('authors', T.any, null)
    .named('bind', T.any, null)
    .named('content', T.any, null)
    .named('email-web-opt-out', T.any, null)
    .named('footer', T.any, null)
    .named('keywords', T.any, null)
    .named('language', T.any, null)
    .named('major', T.any, null)
    .named('permanent-email', T.any, null)
    .named('picture-web-opt-out', T.any, null)
    .named('programme', T.any, null)
    .named('school', T.any, null)
    .named('student-picture', T.any, null)
    .named('subtitle', T.any, null)
    .named('summary', T.any, null)
    .named('thesis-co-supervisor', T.any, null)
    .named('thesis-expert', T.any, null)
    .named('thesis-supervisor', T.any, null)
    .named('title', T.any, null)
    .named('video-url', T.any, null)
    .returns(T.any)
    .external(execSummary)
  const [summaryDecl, summary] = let_(
    'summary',
    'DataFlowX is a scalable data engineering platform for real-time analytics on large, heterogeneous datasets. DataFlowX automates data ingestion, transformation, and validation using distributed processing and intelligent scheduling. The system ensures data quality, accelerates insights, and supports seamless integration with modern business intelligence tools.',
  )
  const [ex_figDecl, ex_fig] = let_(
    'ex_fig',
    canvas(
      { length: cm(2) },
      unsafeRaw.code<any>`{
  import draw: *
  let phi = (1 + calc.sqrt(5)) / 2

  ortho(flatten: true, {
    hide({
      line(
        (-phi, -1, 0), (-phi, 1, 0), (phi, 1, 0), (phi, -1, 0), close: true, name: "xy",
      )
      line(
        (-1, 0, -phi), (1, 0, -phi), (1, 0, phi), (-1, 0, phi), close: true, name: "xz",
      )
      line(
        (0, -phi, -1), (0, -phi, 1), (0, phi, 1), (0, phi, -1), close: true, name: "yz",
      )
    })

    intersections("a", "yz", "xy")
    intersections("b", "xz", "yz")
    intersections("c", "xy", "xz")

    set-style(stroke: (thickness: 0.5pt, cap: "round", join: "round"))
    line((0, 0, 0), "c.1", (phi, 1, 0), (phi, -1, 0), "c.3")
    line("c.0", (-phi, 1, 0), "a.2")
    line((0, 0, 0), "b.1", (1, 0, phi), (-1, 0, phi), "b.3")
    line("b.0", (1, 0, -phi), "c.2")
    line((0, 0, 0), "a.1", (0, phi, 1), (0, phi, -1), "a.3")
    line("a.0", (0, -phi, 1), "b.2")

    anchor("A", (0, phi, 1))
    content("A", [$A$], anchor: "north", padding: .1)
    anchor("B", (-1, 0, phi))
    content("B", [$B$], anchor: "south", padding: .1)
    anchor("C", (1, 0, phi))
    content("C", [$C$], anchor: "south", padding: .1)
    line("A", "B", stroke: (dash: "dashed"))
    line("A", "C", stroke: (dash: "dashed"))
  })
}`,
    ),
  )
  const [contentDecl, content_2] = let_(
    'content',
    blocks(
      parbreak(),
      m.lines(
        m.heading(2, 'Objectives'),
        'The primary objective of DataFlowX is to provide organizations with a robust and scalable platform for real-time analytics on large, diverse datasets. By automating the processes of data ingestion, transformation, and validation, DataFlowX aims to streamline data workflows and ensure high quality.',
      ),
      'The platform leverages distributed processing and intelligent scheduling to optimize performance and resource utilization. Additionally, DataFlowX is designed to seamlessly integrate with modern business intelligence tools, enabling faster and more accurate insights. Ultimately, the project seeks to empower businesses to make data-driven decisions efficiently and confidently in dynamic environments.',
      m.lines(
        importPackage('@preview/cetz:0.5.2', [canvas, draw]),
        unsafeRaw.markup`#import draw: line, content, circle, rect`,
      ),
      ex_figDecl,
      inline(align(center, scaleToWidth(pct(45), ex_fig))),
      m.lines(
        m.heading(2, 'Explanation'),
        'The development of DataFlowX followed an agile methodology, emphasizing iterative progress and continuous feedback. The project began with requirements gathering and architectural design, focusing on scalability and integration capabilities. Core modules for data ingestion, transformation, and validation were implemented using distributed processing frameworks. Automated testing and code reviews ensured reliability and maintainability throughout development.',
      ),
      'Regular meetings with stakeholders guided feature prioritization and refinements. Integration with business intelligence tools was achieved via standardized APIs. Performance benchmarks and user acceptance testing validated the system’s effectiveness.',
      inline(colbreak()),
      m.lines(
        m.heading(2, 'Conclusion / Benefits'),
        'DataFlowX delivers significant benefits by enabling organizations to harness real-time analytics on large, heterogeneous datasets with ease. Its automated data ingestion, transformation, and validation processes reduce manual effort and minimize errors, ensuring high data quality. The platform’s distributed architecture and intelligent scheduling optimize resource usage and scalability, supporting growing business needs. By streamlining complex data workflows and providing robust performance, DataFlowX empowers businesses to respond quickly to changing environments and make informed, data-driven decisions with confidence and efficiency.',
      ),
      inline(
        figure(
          { caption: 'A code snippet' },
          code(
            { numbering: null },
            inline(
              space,
              raw(
                { block: true, lang: 'scala' },
                'def lambda(val x : Any) : Int =\n  x match :\n    case f: Int => f\n    case _ => 42 // The answer  ',
              ),
              space,
            ),
          ),
        ),
      ),
      inline(
        align(
          center,
          block(
            { fill: yellow, inset: pt(4) },
            text(inline`Everything ${strong(inline`must`)} fit on one page when rendered !`),
          ),
        ),
      ),
      inline(
        place(
          { scope: 'parent', float: true },
          bottom,
          figure(
            { caption: 'A figure spanning multiple columns' },
            image({ fit: 'contain', height: cm(5.5), width: pct(100) }, path('figs/made.svg')),
          ),
        ),
      ),
    ),
  )
  return doc(
    importPackage('@preview/isc-hei-exec-summary:0.8.1', [scaleToWidth, code, execSummary, school]),
    summaryDecl,
    contentDecl,
    show(
      execSummary_with({
        title: 'DataFlowX — Real-Time Data Analytics',
        subtitle: 'Automated ingestion, transformation and validation at scale',
        language: 'en',
        authors: 'Stormy Peters',
        studentPicture: image(path('figs/random_image.png')),
        permanentEmail: 'stormy.peters@example.com',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        pictureWebOptOut: false,
        emailWebOptOut: false,
        summary: summary,
        content: content_2,
        thesisSupervisor: 'Prof. Dr John von Neumann',
        thesisCoSupervisor: 'Lady Ada Lovelace',
        thesisExpert: 'Dr Grace Hopper',
        academicYear: '2025-2026',
        school: "Haute École d'Ingénierie de Sion",
        programme: 'Informatique et systèmes de communication',
        keywords: ['engineering', 'data', 'machine learning', 'meteorology'],
        major: 'Data engineering',
        bind: right,
        footer: null,
      }),
    ),
  )
}
