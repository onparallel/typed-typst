// Converted from test/universe/corpus/ethz-iis-research-plan.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  assume,
  bibliography,
  box,
  calc,
  cm,
  codeBlock,
  datetime,
  define,
  dict,
  div,
  doc,
  external,
  figure,
  float,
  footnote,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  m,
  minus,
  par,
  path,
  pt,
  ref,
  set,
  show,
  smartquote,
  space,
  strong,
  times,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cetz = external('cetz')
  const timeliney = external('timeliney')
  const pulpColors = external('pulp-colors')
  const researchPlan = external('research-plan')
  const acr = define('acr').pos('arg1', T.any).returns(T.any).external()
  const acrpl = define('acrpl').pos('arg1', T.any).returns(T.any).external()
  const initAcronyms = define('init-acronyms').pos('arg1', T.any).returns(T.any).external()
  const cplot = external('cplot')
  const researchPlan_with = define('with')
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('chair', T.any, null)
    .named('cosupervisor', T.any, null)
    .named('email', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(researchPlan)
  const cetz_canvas = define('canvas').pos('arg1', T.any).returns(T.any).external(cetz)
  const cplot_plot = define('plot')
    .pos('arg1', T.any)
    .named('axis-style', T.any, null)
    .named('legend', T.any, null)
    .named('size', T.any, null)
    .named('x-label', T.content, [])
    .named('x-max', T.any, null)
    .named('x-min', T.any, null)
    .named('y-label', T.content, [])
    .named('y-min', T.any, null)
    .named('y2-label', T.content, [])
    .named('y2-min', T.any, null)
    .returns(T.any)
    .external(cplot)
  const cplot_add = define('add')
    .pos('arg1', T.any)
    .named('axes', T.any, null)
    .named('domain', T.any, null)
    .named('label', T.content, [])
    .named('style', T.any, null)
    .returns(T.any)
    .external(cplot)
  const timeliney_timeline = define('timeline')
    .pos('arg1', T.any)
    .named('show-grid', T.any, null)
    .returns(T.any)
    .external(timeliney)
  const [nMaxDecl, nMax] = let_('n-max', float(512))
  const cbrt = define('cbrt')
    .pos('x', T.any)
    .returns(T.any)
    .body((p) => calc.pow(float(p['x']), div(float(1), float(3))))
  const t = define('t')
    .pos('label', T.any)
    .returns(T.any)
    .body((p) => box({ width: cm(5) }, codeBlock([set(par, { justify: false })], align(left, inline(p['label'])))))
  const mkStyle = define('mk-style')
    .pos('c', T.any)
    .returns(T.any)
    .body((p) => ({ stroke: add(pt(6), p['c']) }))
  const [todayDecl, today] = let_('today', datetime({ year: 2027, month: 1, day: 1 }))
  const [yearOffsetDecl, yearOffset] = let_('year-offset', minus(assume<'int'>(today.year()), 2026))
  const [quarterDecl, quarter] = let_('quarter', calc.floor(div(minus(assume<'int'>(today.month()), 1), 3)))
  const [monthFracDecl, monthFrac] = let_('month-frac', div(calc.rem(minus(assume<'int'>(today.month()), 1), 3), 3))
  const [nowDecl, now] = let_(
    'now',
    codeBlock([
      todayDecl,
      yearOffsetDecl,
      quarterDecl,
      monthFracDecl,
      add(float(add(times(yearOffset, 4), quarter)), monthFrac),
    ]),
  )
  return doc(
    m.lines(
      importPackage('@preview/ethz-iis-research-plan:1.0.0', [pulpColors, researchPlan]),
      importPackage('@preview/ethz-iis-research-plan:1.0.0', [pulpColors]),
      importPackage('@preview/acrostiche:0.7.0', [acr, acrpl, initAcronyms]),
      importPackage('@preview/cetz:0.4.2', cetz),
      importPackage('@preview/cetz-plot:0.1.3', [{ item: 'plot', as: cplot }]),
    ),
    inline(
      initAcronyms(
        dict({
          NoC: ['Network-on-Chip'],
          '3D': ['Three-Dimensional'],
          '2D': ['Two-Dimensional'],
          D2D: ['Die-to-Die'],
          SoC: ['System-on-Chip'],
          HB: ['Hybrid Bonding'],
          WP: ['Work Package'],
        }),
      ),
    ),
    show(
      researchPlan_with({
        title: '3D Network-on-Chip Architectures for Scalable Many-Core Systems',
        author: 'Jane Doe',
        email: 'jdoe@iis.ee.ethz.ch',
        chair: { name: 'Prof. Dr. Carol White', mail: 'cwhite@iis.ee.ethz.ch' },
        supervisor: { name: 'Prof. Dr. Alice Miller', mail: 'amiller@iis.ee.ethz.ch' },
        cosupervisor: { name: 'Dr. Bob Smith', mail: 'bsmith@iis.ee.ethz.ch' },
        bibliography: bibliography({ style: 'ieee' }, path('references.bib')),
      }),
    ),
    m.heading(1, 'Introduction'),
    inline`The physical limits of ${acr('2D')} integration — reticle-size constraints and the latency penalty
of traversing large die areas — increasingly bottleneck the scalability of many-core accelerator
arrays. ${acr('3D')} integration via advanced packaging technologies such as ${acr('HB')} offers
a path forward by introducing a vertical routing dimension that fundamentally changes the geometry
and bandwidth scaling of on-chip interconnects, as illustrated in ${ref(label('noc-scaling'))}.
This plan outlines the motivation, open problems, and planned contributions of a doctoral thesis
on ${acrpl('NoC')} for ${acr('3D')}-integrated systems.`,
    m.lines(nMaxDecl, cbrt.decl),
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`${space}Scaling advantages of 3D ${acrpl('NoC')} over 2D meshes. Left axis: average hop count
(${unsafeRaw.math`N^(1\\/3)`} vs. ${unsafeRaw.math`N^(1\\/2)`}). Right axis: normalized inter-die
bandwidth — area-array 3D (${unsafeRaw.math`N^(2\\/3)`}) vs. shoreline-limited 2D (${unsafeRaw.math`N^(1\\/2)`}),
normalized to ${unsafeRaw.math`N=4`}.${space}`,
            },
            cetz_canvas(
              codeBlock(
                [],
                cplot_plot(
                  {
                    size: [9, 6],
                    axisStyle: 'scientific',
                    xLabel: inline`Nodes ${unsafeRaw.math`N`}`,
                    xMin: 0,
                    xMax: nMax,
                    yLabel: inline`Avg. hop count`,
                    yMin: 0,
                    y2Label: inline`Norm. bandwidth`,
                    y2Min: 0,
                    legend: 'inner-north-west',
                  },
                  codeBlock([
                    cplot_add(
                      {
                        domain: [4, nMax],
                        label: inline`Hops 2D (${unsafeRaw.math`∝ N^(1\\/2)`})`,
                        style: unsafeRaw.code<any>`(stroke: (paint: pulp-colors.blue.base, thickness: 1.5pt))`,
                      },
                      (x) => times(div(float(2), float(3)), calc.sqrt(float(x))),
                    ),
                    cplot_add(
                      {
                        domain: [4, nMax],
                        label: inline`Hops 3D (${unsafeRaw.math`∝ N^(1\\/3)`})`,
                        style: unsafeRaw.code<any>`(
            stroke: (
              paint: pulp-colors.blue.light,
              thickness: 1.5pt,
              dash: "dashed",
            ),
          )`,
                      },
                      (x_2) => cbrt(x_2),
                    ),
                    cplot_add(
                      {
                        axes: ['x', 'y2'],
                        domain: [4, nMax],
                        label: inline`BW 2D (${unsafeRaw.math`∝ N^(1\\/2)`})`,
                        style: unsafeRaw.code<any>`(stroke: (paint: pulp-colors.orange.base, thickness: 1.5pt))`,
                      },
                      (x_3) => calc.sqrt(div(float(x_3), float(4))),
                    ),
                    cplot_add(
                      {
                        axes: ['x', 'y2'],
                        domain: [4, nMax],
                        label: inline`BW 3D (${unsafeRaw.math`∝ N^(2\\/3)`})`,
                        style: unsafeRaw.code<any>`(
            stroke: (
              paint: pulp-colors.orange.light,
              thickness: 1.5pt,
              dash: "dashed",
            ),
          )`,
                      },
                      (x_4) => calc.pow(div(float(x_4), float(4)), div(float(2), float(3))),
                    ),
                  ]),
                ),
              ),
            ),
          ),
          space,
        ],
        label('noc-scaling'),
      ),
    ),
    m.heading(1, 'State of the Art'),
    inline`Wide-link ${acr('2D')} ${acrpl('NoC')} have demonstrated that "wide and slow" links outperform
"narrow and fast" SerDes links in energy efficiency for die-to-die communication ${ref(label('fischer2025floonoc'))}.
However, horizontal connectivity remains fundamentally bounded by the linear shoreline of the
die. Existing ${acr('3D')} ${acr('NoC')} proposals either treat vertical links as ordinary hops
with unchanged router microarchitectures, or focus on memory-stacking scenarios that differ
substantially from the compute-array context.`,
    m.heading(1, 'Research Gap'),
    inline`No existing ${acr('NoC')} architecture simultaneously exploits (1) the quadratic bandwidth scaling
offered by area-array vertical interconnects, (2) the near-zero latency of ${acr('HB')} vertical
hops, and (3) the "wide and slow" signaling philosophy proven effective in ${acr('2D')} fabrics.
Bridging this gap requires co-designing the router microarchitecture, the flit format, and the
physical link with the constraints of ${acr('3D')} packaging.`,
    m.heading(1, 'Completed Work'),
    inline`During the first year, hands-on experience was gained by contributing to the design and tapeout
of a wide-link ${acr('2D')} ${acr('NoC')} for large-scale accelerator arrays ${ref(label('fischer2025floonoc'))}.
Building on this foundation, several extensions were implemented, including support for additional
traffic patterns and an improved flow-control mechanism. These contributions provided a solid
baseline and deep familiarity with the design space that motivates the planned ${acr('3D')}
research direction.`,
    m.heading(1, 'Project Definition'),
    inline`The thesis is structured into three ${acrpl('WP')}:`,
    m.heading(2, 'WP1: 3D Router Microarchitecture'),
    inline`Extend the existing router design with a vertical port that maps wide flits directly onto ${acr('HB')}
bump arrays without serialization. Characterize the latency, area, and power of vertical hops
and derive design rules for mixed ${acr('2D')}/${acr('3D')} topologies.`,
    m.heading(2, 'WP2: Topology and Routing Algorithms'),
    'Investigate 3D mesh and folded-torus topologies that exploit the reduced hop count of the vertical dimension. Develop deadlock-free routing algorithms that treat vertical hops as low-cost shortcuts and evaluate network diameter and worst-case latency at scale.',
    m.heading(2, 'WP3: Physical Integration and Full-System Evaluation'),
    inline`Integrate the ${acr('3D')} ${acr('NoC')} into a multi-die ${acr('SoC')} prototype and measure
end-to-end bandwidth, latency, and energy against ${acr('2D')} baselines. Validate the quadratic
bandwidth-scaling prediction on silicon or a detailed physical model.`,
    m.heading(1, 'Tentative Timeline'),
    importPackage('@preview/timeliney:0.4.0', timeliney),
    t.decl,
    mkStyle.decl,
    nowDecl,
    inline(
      figure(
        { caption: inline`Tentative timeline aligned with the work packages.` },
        timeliney_timeline(
          { showGrid: true },
          unsafeRaw.code<any>`{
      import timeliney: *

      headerline(
        group(([*2026*], 4)),
        group(([*2027*], 4)),
        group(([*2028*], 4)),
        group(([*2029*], 4)),
      )
      headerline(
        group(..range(4).map(n => sub("Q" + str(n + 1)))),
        group(..range(4).map(n => sub("Q" + str(n + 1)))),
        group(..range(4).map(n => sub("Q" + str(n + 1)))),
        group(..range(4).map(n => sub("Q" + str(n + 1)))),
      )

      taskgroup(
        title: t[*Completed Work*],
        style: mk-style(pulp-colors.gray.base),
        {
          task(t[2D NoC tapeout contribution], (0, 2), style: mk-style(
            pulp-colors.gray.light,
          ))
          task(t[Extensions & exploration], (2, 4), style: mk-style(
            pulp-colors.gray.very-light,
          ))
        },
      )

      taskgroup(
        title: t[*WP1: 3D Router*],
        style: mk-style(pulp-colors.blue.base),
        {
          task(t[Vertical port design], (4, 7), style: mk-style(
            pulp-colors.blue.light,
          ))
          task(t[HB link characterization], (6, 9), style: mk-style(
            pulp-colors.blue.very-light,
          ))
        },
      )

      taskgroup(
        title: t[*WP2: Topology & Routing*],
        style: mk-style(pulp-colors.green.base),
        {
          task(t[3D routing algorithms], (8, 11), style: mk-style(
            pulp-colors.green.light,
          ))
          task(t[Scalability analysis], (10, 13), style: mk-style(
            pulp-colors.green.very-light,
          ))
        },
      )

      taskgroup(
        title: t[*WP3: Physical Integration*],
        style: mk-style(pulp-colors.orange.base),
        {
          task(t[Multi-die SoC prototype], (12, 15), style: mk-style(
            pulp-colors.orange.light,
          ))
          task(t[Writing and defense], (14, 16), style: mk-style(
            pulp-colors.orange.very-light,
          ))
        },
      )

      milestone(
        at: now,
        style: (
          stroke: (
            dash: "dashed",
            paint: pulp-colors.gray.base,
            thickness: 1.5pt,
          ),
        ),
        align(center, text(size: 12pt, weight: "bold")[Now]),
      )
    }`,
        ),
      ),
    ),
    m.heading(1, 'Obligations / Teaching Duties'),
    'During the course of the doctoral program, the following teaching and service obligations are planned:',
    m.list(
      m.item([
        strong(inline`Teaching assistant`),
        space,
        'for the undergraduate course',
        space,
        smartquote({ double: true }),
        'Digital Design',
        smartquote({ double: true }),
        space,
        '(2 semesters)',
      ]),
      m.item([strong(inline`Co-supervision`), space, 'of one master thesis per year']),
      m.item([strong(inline`Lab maintenance`), ': shared responsibility for the FPGA lab and associated servers']),
    ),
    m.heading(1, 'Declaration of Originality'),
    inline`I hereby confirm that I am the sole author of the written work enclosed and that I have compiled
it in my own words. Parts excepted are corrections of form and content by the supervisor. I
disclose the use of generative AI tools${footnote(inline`The following generative AI tools were used in the preparation of this work: ChatGPT (language
editing and brainstorming), Grammarly (grammar and syntax checking). All AI-generated content
was critically reviewed and revised by the author.`)} in the preparation of this work.`,
  )
}
