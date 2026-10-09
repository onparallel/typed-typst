// Converted from test/universe/corpus/upb-cn-templates.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  emph,
  external,
  figure,
  heading,
  image,
  importPackage,
  inline,
  label,
  labelled,
  left,
  link,
  m,
  pagebreak,
  path,
  pct,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  sym,
  table,
  top,
} from '../../../src/index.ts'

export default () => {
  const upbCnReport = external('upb-cn-report')
  const code = define('code').pos('arg1', T.any).named('lang', T.any, null).returns(T.any).external()
  const upbCnReport_with = define('with')
    .named('author', T.any, null)
    .named('matriculation-number', T.any, null)
    .named('meta', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(upbCnReport)
  return doc(
    importPackage('@preview/upb-cn-templates:0.2.0', [upbCnReport, code]),
    show(
      upbCnReport_with({
        title: 'Seminar: XXX (SS24)',
        author: 'Your Name',
        matriculationNumber: 'Matriculation Number',
        meta: [
          [inline`Research group`, inline`Computer Networks (CN)`],
          [inline`Study program`, inline`BSc/MSc Computer Science / Computer Engineering`],
          [inline`Supervisor`, inline`Prof. Dr. Lin Wang`],
          [inline`Paper title`, inline`Title of the selected paper`],
        ],
      }),
    ),
    'The following structure should be followed in general. You may deviate from this structure slightly if you have a good reason to do so. Skipping any parts contained in the structure without proper justification will result in penalties. If you are unsure about your choice, please contact your supervisor.',
    inline(heading({ numbering: null }, inline`Abstract`)),
    'An abstract is a compressed summary of the paper. It should make clear at least the following points:',
    m.enum(
      m.item(['What is the context of the problem and why the problem is important?']),
      m.item(['What are the new insights/observations that motivate the paper?']),
      m.item(['What are the major contributions of the paper?']),
    ),
    inline`You should explain each of the above points with just 1--2 sentences.`,
    inline(labelled(heading({ depth: 1 }, inline('Introduction')), label('sec:introduction'))),
    'The introduction section serves as an unzipped summary of the paper. It is similar to the abstract but with more details. An example storyline for the introduction could look like the following:',
    m.enum(
      m.item(['Background, general context of the problem']),
      m.item(['Problem description and its importance']),
      m.item(['Existing works and why they fall short']),
      m.item(['New insights/observations that motivate a new design']),
      m.item(['Key features of the new design']),
      m.item(['Summary of contributions']),
    ),
    'This storyline just serves as a typical example. You can also find your own way to organize this section.',
    inline(labelled(heading({ depth: 1 }, inline('Background')), label('sec:background'))),
    inline`This section introduces the necessary background for others to understand the context and problem.
You can have multiple subsections, each focusing on one major concept. For example, if the paper
is about an in-network key-value cache, you may need to explain first what is a ${emph(inline`key-value store and the associated caching problem`)},
and then what is ${emph(inline`in-network computing`)}. After reading these two background descriptions,
readers would have a good idea about the context of in-network key-value caching.`,
    inline(labelled(heading({ depth: 1 }, inline('Problem Statement and Taxonomy')), label('sec:problem'))),
    'This section is tailored for a literature study report. Since you have read multiple papers, hopefully on closely related topics. Now you should think about what is a good overarching problem to write about, covering all the papers you want to include. But of course, these papers may have different focuses, even though they all fit the overarching problem.',
    'You must identify the overarching problem and make a clear statement about it so it is crystal clear to the reader. Then, categorize the papers and create a (simple) taxonomy to guide the readers further. For example, if you want to include papers about the hardware architecture of programmable switches in a report, you could create a taxonomy based on the hardware type: FPGA-based, ASIC-based, and NPU-based. You can even divide each of these directions into sub-directions. For example, for ASIC-based architecture, there are pipeline-based and multi-core-based.',
    inline(labelled(heading({ depth: 1 }, inline('Summary of Surveyed Papers')), label('sec:papers'))),
    'This section provides summaries of the papers according to the taxonomy you have just presented. You are free to choose how to organize this section, but it should somehow reflect the taxonomy. Note that you should not copy anything directly from the paper. You must identify the key elements (like the ones listed in the storyline of the introduction) of each of the papers and summarize the paper in your own words. You might want to go a bit deeper here regarding the core technical ideas, but you can be very brief on aspects that are not essentially related to the core ideas.',
    inline(labelled(heading({ depth: 1 }, inline('Qualitative Analysis and Comparison')), label('sec:analysis'))),
    'This section is to perform a qualitative analysis of the papers you have presented. Try to synthesize some metrics on which you can compare the solutions presented in this paper. These metrics could include system requirements (e.g., scalability, reliability, extensibility, programmability), and performance metrics (e.g., latency, throughput). Please carefully select metrics to include according to the context of the studied problem. A table would be helpful for such a qualitative analysis and comparison, where each column includes a metric while each row corresponds to a solution.',
    inline(labelled(heading({ depth: 1 }, inline('Comments on the Papers')), label('sec:comments'))),
    'Here you can make some general comments about the research field, the studied problem, as well as the papers included in this report. You could comment on the importance of the problem, the significance of the presented solutions, and maybe also your opinion about the development of the research field in general. After all, no paper is perfect and no one can predict the future.',
    inline(labelled(heading({ depth: 1 }, inline('Conclusions')), label('sec:conclusions'))),
    'Finally, draw some conclusions as to whether the presented papers have already solved the stated problem. Try first to draw conclusions about the current landscape and then outline some future directions that could be interesting to explore.',
    inline(bibliography(path('refs.bib'))),
    inline(pagebreak(), space, heading({ numbering: null }, inline`How to Use This Template for Writing`)),
    '(Please remove this section when submitting your seminar report.)',
    m.heading(2, 'Subsection Heading'),
    m.heading(3, 'Subsubsection Heading (Avoid Using It If Possible)'),
    inline`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
of type and scrambled it to make a type specimen book. It has survived not only five centuries,
but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised
in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    inline`The above shows a normal paragraph for this document. By default, the paragraph is not indented.
If you want to cite a reference, you can use the ${code({ lang: 'typst' }, '@reference')} syntax.
Here is an example: HIRE is a novel resource scheduler for in-network computing${sym.space.nobreak}${ref(label('2021:asplos:hire'))}.
The list of references is shown at the end of the document in the "References" section. We use
${raw('biblatex')}'s file format to manage references and the source of bib items is specified
when printing the references with the command ${code({ lang: 'typst' }, '#bibliography("...")')}.
It is recommended that you collect the bib entries of papers from ${link('https://dblp.org', inline`DBLP`)}.`,
    'You can also create unnumbered and numbered lists as in the following examples. Note that the list should not go deeper than two levels; otherwise, it becomes ugly.',
    m.list(
      m.item(['First item']),
      m.item(['Second item']),
      m.item(['Third item']),
      m.item(m.lines('Last item', m.list(m.item(['First subitem']), m.item(['Second subitem'])))),
    ),
    m.enum(
      m.item(['First entry']),
      m.item(['Second entry']),
      m.item(m.lines('Third entry', m.enum(m.item(['First subentry']), m.item(['Second subentry'])))),
    ),
    inline`If you have some text you want to put in monospace (e.g., cite something in verbatim), you can
use backticks to do that (${raw('like so')}). Alternatively, you can use ${code({ lang: 'typst' }, '#code(lang: "...", "...")')}.
The difference is that the latter is highlighted with a light gray background and we can also
turn on syntax highlighting for many programming or scripting languages. Here is an example
to compare these two: ${raw('exit 0')} and ${code({ lang: 'bash' }, 'exit 0')}. For this reason,
the latter is always preferred when it comes to code.`,
    'If you want to write a code block, you can use three backticks, where you can turn on the syntax highlighting if you want. Here is an example for a shell script.',
    inline(raw({ block: true, lang: 'bash' }, 'echo "Hello world!"')),
    'The following is an example for a C code snippet.',
    inline(raw({ block: true, lang: 'c' }, 'int main(int argc, char** argv) {\n  return 0;\n}')),
    inline(
      labelled(
        [
          figure(
            { caption: inline`This is the logo of UPB.`, placement: top },
            inline(space, image({ width: pct(30) }, path('figures/upb-logo.svg')), space),
          ),
          space,
        ],
        label('fig:upb-logo'),
      ),
    ),
    inline`${ref(label('fig:upb-logo'))} depicts the logo of UPB. By default, figures should always be
put at the top of the page. The same applies to tables. ${ref(label('tab:info'))} shows the
group member information. Avoid using vertical bars in a table unless it is really necessary.
All cells should be left-aligned except cells with numbers which should be right-aligned or
dot-aligned. The caption for the table should sit at the top of the table, while it is at the
bottom for figures.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Course Grade` },
            inline(
              space,
              table(
                { columns: 3, align: [left, right, right] },
                inline(strong(inline`Name`)),
                inline(strong(inline`Matriculation Number`)),
                inline(strong(inline`Grade`)),
                table.hline(),
                inline`Max Mustermann`,
                inline`112233`,
                inline`1.3`,
                inline`Paul Müller`,
                inline`445566`,
                inline`1.7`,
              ),
              space,
            ),
          ),
          space,
        ],
        label('tab:info'),
      ),
    ),
  )
}
