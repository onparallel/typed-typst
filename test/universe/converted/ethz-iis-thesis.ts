// Converted from test/universe/corpus/ethz-iis-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  define,
  doc,
  external,
  figure,
  fr,
  heading,
  importFile,
  importPackage,
  inline,
  label,
  labelled,
  left,
  lorem,
  m,
  path,
  pt,
  ref,
  right,
  show,
  space,
  strong,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const acrpl = define('acrpl').pos('arg1', T.any).returns(T.any).external()
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const acronyms = external('acronyms')
  const canvas = define('canvas').pos('arg1', T.any).returns(T.any).external()
  const draw = external('draw')
  const automaton = define('automaton').pos('arg1', T.any).named('labels', T.any, null).returns(T.any).external()
  const thesis_with = define('with')
    .named('abstract', T.any, null)
    .named('acknowledgements', T.any, null)
    .named('acronyms', T.any, null)
    .named('advisors', T.any, null)
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('email', T.any, null)
    .named('logo', T.any, null)
    .named('professors', T.any, null)
    .named('reporttype', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    m.lines(
      importPackage('@preview/ethz-iis-thesis:1.0.0', [thesis, acrpl, acr]),
      importFile('acronyms.typ', [acronyms]),
      importPackage('@preview/cetz:0.4.2', [canvas, draw]),
      importPackage('@preview/finite:0.5.1', [automaton]),
    ),
    show(
      thesis_with({
        title: 'Title of the Thesis',
        author: 'Student Name',
        email: 'student@iis.ee.ethz.ch',
        reporttype: 'Master Thesis',
        advisors: [
          { name: 'First Supervisor', mail: 'first.supervisor@iis.ee.ethz.ch' },
          { name: 'Second Supervisor', mail: 'second.supervisor@iis.ee.ethz.ch' },
        ],
        professors: [{ name: 'Prof. Dr. P. Professor', mail: 'professor@iis.ee.ethz.ch' }],
        acknowledgements: lorem(50),
        abstract: lorem(50),
        logo: automaton(
          { labels: { q0: 'L', q1: 'O', q2: 'G', q3: 'O' } },
          { q0: { q1: '' }, q1: { q2: '' }, q2: { q3: '' }, q3: null },
        ),
        acronyms: acronyms,
        bibliography: bibliography({ style: 'ieee', full: true }, path('references.bib')),
      }),
    ),
    m.heading(1, 'Introduction'),
    'Modern integrated systems face increasing demands for performance, energy efficiency, and reliability. This thesis addresses these challenges by proposing a novel architecture that leverages recent advances in hardware design.',
    m.heading(2, 'Motivation'),
    inline`The growing complexity of ${acrpl('IC')} requires new design methodologies that can handle billions
of transistors while maintaining correctness and meeting strict timing constraints.`,
    m.heading(2, 'Contributions'),
    m.lines(
      'The main contributions of this thesis are:',
      m.list(
        m.item(['A novel hardware architecture for efficient data processing']),
        m.item(['A verification methodology that scales to large designs']),
        m.item(['A comprehensive evaluation on real silicon']),
      ),
    ),
    m.heading(2, 'Outline'),
    inline`The remainder of this thesis is organized as follows. ${ref(label('chp:background'))} reviews
relevant background material. ${ref(label('chp:related'))} discusses related work. ${ref(label('chp:theory'))}
presents the theoretical foundations. ${ref(label('chp:architecture'))} describes the proposed
architecture. ${ref(label('chp:implementation'))} details the implementation. ${ref(label('chp:results'))}
presents the evaluation results. ${ref(label('chp:conclusion'))} concludes the thesis.`,
    inline(labelled(heading({ depth: 1 }, inline('Background')), label('chp:background'))),
    'This chapter introduces the background knowledge required to understand this thesis.',
    m.heading(2, 'Integrated Circuits'),
    inline`An ${acr('IC')} is a set of electronic circuits on a small flat piece of semiconductor material.
Modern ${acrpl('IC')} contain billions of transistors and operate at clock frequencies exceeding
several gigahertz. ${acrpl('SoC')} integrate a complete system — processor, memory, and peripherals
— onto a single die, and are the focus of research at the ${acr('IIS')}.`,
    m.heading(2, 'Hardware Description Languages'),
    inline`${acrpl('HDL')} are used to describe the structure and behavior of electronic circuits. The
most commonly used ${acrpl('HDL')} are VHDL and SystemVerilog. Designs are typically written
at the ${acr('RTL')} abstraction and then synthesized to gates for an ${acr('ASIC')} or mapped
to an ${acr('FPGA')}.`,
    inline(labelled(heading({ depth: 1 }, inline('Related Work')), label('chp:related'))),
    'This chapter reviews existing work in the field and positions our contributions relative to the state of the art.',
    'Several groups have proposed similar architectures. However, none of these approaches achieve the combination of performance and energy efficiency presented in this work.',
    inline(labelled(heading({ depth: 1 }, inline('Theory')), label('chp:theory'))),
    'This chapter presents the theoretical foundations underlying our approach.',
    m.heading(2, 'Problem Formulation'),
    inline`Let ${unsafeRaw.math`G = (V, E)`} be a directed graph representing the dataflow of a computation,
where ${unsafeRaw.math`V`} is the set of operations and ${unsafeRaw.math`E`} is the set of data
dependencies between them.`,
    m.heading(2, 'Algorithmic Approach'),
    inline`Our approach builds on the following key insight: by exploiting the structure of ${unsafeRaw.math`G`},
we can schedule operations more efficiently than existing methods.`,
    inline(labelled(heading({ depth: 1 }, inline('Architecture')), label('chp:architecture'))),
    'This chapter describes the proposed hardware architecture in detail.',
    m.heading(2, 'Overview'),
    inline`${ref(label('fig:architecture'))} shows the high-level block diagram of the proposed architecture.
The design consists of three main components: a frontend, a backend, and a memory subsystem.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`High-level architecture of the proposed design.` },
            canvas(unsafeRaw.code<any>`{
    import draw: *
    let blk(pos, name, label, color) = {
      rect(pos, (rel: (2.8, 1)), name: name, radius: 0.1, fill: color)
      content(name, label)
    }
    blk((0, 0), "fe", [Frontend], rgb("#a8d8ea"))
    blk((3.8, 0), "be", [Backend], rgb("#a8e6cf"))
    blk((7.6, 0), "mem", [Memory], rgb("#ffd3b6"))
    line("fe.east", "be.west", mark: (end: ">"))
    line("be.east", "mem.west", mark: (end: ">"))
  }`),
          ),
          space,
        ],
        label('fig:architecture'),
      ),
    ),
    m.heading(2, 'Frontend'),
    'The frontend is responsible for fetching and decoding instructions. It implements a speculative execution pipeline with branch prediction.',
    m.heading(2, 'Backend'),
    'The backend executes decoded instructions out of order, exploiting instruction-level parallelism.',
    inline(labelled(heading({ depth: 1 }, inline('Implementation')), label('chp:implementation'))),
    inline`This chapter describes the ${acr('RTL')} implementation and the physical design flow.`,
    m.heading(2, 'RTL Design'),
    'The design is implemented in SystemVerilog following the lowRISC coding style guide. The top-level module instantiates the frontend, backend, and memory subsystem.',
    m.heading(2, 'Synthesis Results'),
    inline`${ref(label('tab:synthesis'))} summarizes the synthesis results for the proposed design on a
22 nm technology node.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Post-synthesis results on 22 nm technology.` },
            table(
              { columns: [fr(1), fr(2), fr(2)], align: [left, right, right], stroke: null },
              table.hline({ stroke: pt(1.5) }),
              table.header(inline`Module`, inline`Area kGE`, inline`Freq. MHz`),
              table.hline({ stroke: pt(0.75) }),
              inline`Frontend`,
              inline`42.3`,
              inline`900`,
              inline`Backend`,
              inline`128.7`,
              inline`700`,
              inline`Memory`,
              inline`35.1`,
              inline`800`,
              table.hline({ stroke: pt(0.75) }),
              inline(strong(inline`Total`)),
              inline(strong(inline`206.1`)),
              inline(strong(inline`700`)),
              table.hline({ stroke: pt(1.5) }),
            ),
          ),
          space,
        ],
        label('tab:synthesis'),
      ),
    ),
    inline(labelled(heading({ depth: 1 }, inline('Results')), label('chp:results'))),
    'This chapter presents the experimental evaluation of the proposed design.',
    m.heading(2, 'Experimental Setup'),
    'We evaluate the design using a suite of standard benchmarks. All measurements are performed on post-layout netlist simulations.',
    m.heading(2, 'Performance'),
    'Our design achieves an average speedup of 1.8× over the baseline architecture while consuming 30% less energy.',
    inline(labelled(heading({ depth: 1 }, inline('Conclusion')), label('chp:conclusion'))),
    'This thesis presented a novel integrated systems architecture that achieves significant improvements in performance and energy efficiency. The key insight was to exploit dataflow structure to improve scheduling.',
    m.heading(2, 'Future Work'),
    'Future work will explore extending the architecture to support multi-core configurations and investigate further optimizations at the physical design level.',
  )
}
