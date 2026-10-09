// Converted from test/universe/corpus/harvard-gsas-thesis-oat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  datetime,
  define,
  doc,
  external,
  figure,
  footnote,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  left,
  let_,
  lorem,
  m,
  path,
  raw,
  rect,
  ref,
  right,
  show,
  space,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const frontmatter = external('frontmatter')
  const schoolColor = external('school-color')
  const appendix = external('appendix')
  const frontmatter_with = define('with')
    .named('abstract', T.content, [])
    .named('advisor', T.any, null)
    .named('author', T.any, null)
    .named('completion-date', T.any, null)
    .named('creative-commons', T.any, null)
    .named('department', T.any, null)
    .named('doctor-of', T.any, null)
    .named('major', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(frontmatter)
  const appendix_with = define('with').returns(T.any).external(appendix)
  const [ifbDecl, ifb] = let_('ifb', unsafeRaw.math`"fb"^(-1)`)
  const [totalLumiDecl, totalLumi] = let_('total-lumi', inline`140 ${ifb}`)
  const [cmeDecl, cme] = let_('cme', unsafeRaw.math`sqrt(s) = 13 "TeV"`)
  const [pTDecl, pT] = let_('pT', unsafeRaw.math`p_"T"`)
  return doc(
    importPackage('@preview/harvard-gsas-thesis-oat:0.1.6', [frontmatter, schoolColor, appendix]),
    m.lines(ifbDecl, totalLumiDecl, cmeDecl, pTDecl),
    show(
      frontmatter_with({
        title: 'Dissertation Title',
        abstract: inline`${space}While the search for ever heavier Beyond the Standard Model (BSM) particles is a popular
excercise at the energy frontier, the search for XXX has been less explored. This thesis presents
a search for YYY in a novel ${totalLumi} dataset collected by the ATLAS experiment during Run
2 at the Large Hadron Collider (LHC) at ${cme}. The dataset is unique in that it is collected
at the${space}`,
        author: 'John Harvard',
        advisor: 'Melissa Franklin',
        department: 'Department of Physics',
        doctorOf: 'Philosophy',
        major: 'Physics',
        completionDate: datetime.today().display('[month repr:long] [year]'),
        creativeCommons: true,
      }),
    ),
    inline(labelled(heading({ depth: 1 }, inline('The LHC and the ATLAS')), label('lhc_and_atlas'))),
    inline(lorem(80)),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Timing results` },
            table(
              { columns: 4 },
              inline`t`,
              inline`1`,
              inline`2`,
              inline`3`,
              inline`y`,
              inline`0.3s`,
              inline`0.4s`,
              inline`0.8s`,
            ),
          ),
          space,
        ],
        label('timing_results'),
      ),
    ),
    m.lines(
      inline(labelled(heading({ depth: 2 }, inline('Calorimeter')), label('calorimeter'))),
      m.heading(3, 'Electromagnetic Calorimetry (ECal)'),
    ),
    inline`ATLAS uses Liquid Argon (LAr) calorimeter for electromagnetic energy measurements in both the
central region${footnote(inline`${space}Electromagnetic Barrel Calorimeter, or EMB${space}`)}
(${unsafeRaw.math`abs(eta) < 1.475`}) and end-caps regions${footnote(inline`Electromagnetic Endcap Calorimeter, or EMEC`)}
(${unsafeRaw.math`1.375 < |eta| < 3.2`}). Together, they provide three layers of calorimeter
cells with varying granularities. Additionally, in the ${unsafeRaw.math`abs(eta) < 1.8`} region,
a LAr presampler sits in front of the first layer of the LAr ECal and is used to correct the
energy loss in the passive material between LAr ECal and the IP. ${ref(label('LAr_schematic'))}
shows the schematic of the EMB in regions with four layers.`,
    inline(
      labelled(
        [
          figure(
            {
              caption: inline`Schematic of the EM Barrel Calorimeter, showing four layers including the presampler (PS) layer`,
            },
            rect({ fill: schoolColor }),
          ),
          space,
        ],
        label('LAr_schematic'),
      ),
    ),
    m.heading(2, 'Cross references'),
    inline`Labelled headings are referenced with their supplement: ${ref(label('lhc_and_atlas'))} is a
chapter, while ${ref(label('calorimeter'))} is a section. Figures, tables and equations carry
the chapter number as their first component, so ${ref(label('timing_results'))} and ${ref(label('LAr_schematic'))}
both live in this chapter, and both counters restart in ${ref(label('analysis_strategy'))}.`,
    m.lines(m.heading(2, 'Some equations'), inline(lorem(20))),
    inline(unsafeRaw.math.block`0.002(x + 89.6)^(-1.06log(x))`),
    inline`Equations can be labelled and referenced too, such as ${ref(label('fit_function'))} below:`,
    inline(
      labelled(
        [unsafeRaw.math.block`f(x) = p_0 dot (1 - x)^(p_1) dot x^(-p_2 - p_3 log(x))`, space],
        label('fit_function'),
      ),
    ),
    m.heading(2, 'Citations'),
    inline`The LHC ${ref(label('Evans:2008lhc'))} and the ATLAS detector ${ref(label('ATLAS:2008detector'))}
are described in detail elsewhere; jets are reconstructed with the anti-${unsafeRaw.math`k_t`}
algorithm ${ref(label('Cacciari:2008antikt'))}. The bibliography that follows the last chapter
picks these up automatically, and gets a chapter opening of its own without a chapter number.`,
    inline(labelled(heading({ depth: 1 }, inline('Analysis strategy')), label('analysis_strategy'))),
    inline`Each chapter restarts the figure, table, listing and equation counters, so the first figure
here is numbered 2.1 rather than continuing from ${ref(label('LAr_schematic'))}.`,
    inline(
      labelled(
        [figure({ caption: inline`The first figure of the second chapter` }, rect({ fill: schoolColor })), space],
        label('second_chapter_figure'),
      ),
    ),
    'Tables are counted separately from figures, so this is Table 2.1:',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Event yields after each stage of the selection.` },
            table(
              { columns: 3, align: [left, right, right] },
              table.header(inline`Selection`, inline`Data`, inline`Simulation`),
              inline`Preselection`,
              inline`1.2M`,
              inline`1.1M`,
              inline`${pT} ${unsafeRaw.math`> 30`} GeV`,
              inline`340k`,
              inline`332k`,
              inline`Signal region`,
              inline`1.2k`,
              inline`1.1k`,
            ),
          ),
          space,
        ],
        label('event_yields'),
      ),
    ),
    'Code listings get their own counter as well:',
    inline(
      labelled(
        [
          figure(
            { caption: inline`Definition of the signal region selection.` },
            raw(
              { block: true, lang: 'python' },
              'def signal_region(events):\n    return events[(events.pt > 30) & (abs(events.eta) < 2.5)]',
            ),
          ),
          space,
        ],
        label('selection_listing'),
      ),
    ),
    'Multi-line equations are numbered as a whole:',
    inline(
      labelled(
        [
          unsafeRaw.math.block`cal(L)(mu, theta) &= product_(i in "bins") "Pois"(n_i | mu s_i (theta) + b_i (theta)) \\
                  &times product_(j in "nuisance") "Gauss"(theta_j)`,
          space,
        ],
        label('likelihood'),
      ),
    ),
    inline(lorem(40)),
    inline(bibliography(path('refs.bib'))),
    show(appendix_with()),
    inline(labelled(heading({ depth: 1 }, inline('Appendix')), label('first_appendix'))),
    inline(lorem(20), space, ref(label('appendix_figure')), space, unsafeRaw.math.block`a^2 + b^2 = c^2`),
    m.lines(m.heading(2, 'Appendix is hard'), inline(unsafeRaw.math.block`a^3 + b^3 = c^3`)),
    inline(
      labelled(
        [figure({ caption: inline`Here's a figure in Appendix` }, rect({ fill: schoolColor })), space],
        label('appendix_figure'),
      ),
    ),
    inline(
      labelled(
        [
          figure(
            { caption: inline`Tables in the appendix are numbered A.1, A.2, ...` },
            table(
              { columns: 2 },
              inline`Parameter`,
              inline`Value`,
              inline(unsafeRaw.math`p_0`),
              inline`0.002`,
              inline(unsafeRaw.math`p_1`),
              inline`89.6`,
            ),
          ),
          space,
        ],
        label('appendix_table'),
      ),
    ),
    m.heading(1, 'Supplementary material'),
    inline`Each appendix chapter gets its own letter, so this is Appendix B while the previous one is ${ref(label('first_appendix'))},
and the counters restart accordingly.`,
    inline(
      labelled(
        [figure({ caption: inline`The first figure of the second appendix` }, rect({ fill: schoolColor })), space],
        label('second_appendix_figure'),
      ),
    ),
  )
}
