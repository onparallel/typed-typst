// Converted from test/universe/corpus/beago-suite.typ by scripts/convert-suite.ts — do not edit.
import {
  T,
  define,
  doc,
  em,
  external,
  footnote,
  heading,
  importPackage,
  inline,
  left,
  lorem,
  pt,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const beagoArticle = external('beago-article')
  const beagoArticle_with = define('with')
    .named('abstract', T.content, [])
    .named('author', T.content, [])
    .named('first-line-indent', T.any, null)
    .named('font-size', T.any, null)
    .named('heading-numbering', T.any, null)
    .named('line-spacing', T.any, null)
    .named('paper', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('title-align', T.any, null)
    .returns(T.any)
    .external(beagoArticle)
  return doc(
    importPackage('@preview/beago-suite:0.2.0', [beagoArticle]),
    show(
      beagoArticle_with({
        title: inline`The Architecture of Distributed Logistics Systems`,
        subtitle: inline`A Case Study of the Beago Logistics System`,
        author: inline`Aaron P. Murniadi`,
        titleAlign: left,
        headingNumbering: '1.1.',
        paper: 'a4',
        firstLineIndent: { amount: em(2), all: false },
        fontSize: pt(12),
        lineSpacing: em(1),
        abstract: inline`${space}Modern logistics networks require automated routing configuration at scale. This case
study describes the Beago logistics system, its hierarchical zone decomposition, and the composable
routing schemas that reduce solver time while preserving delivery accuracy.${space}`,
      }),
    ),
    heading({ depth: 1 }, inline('Introduction')),
    inline(lorem(80)),
    heading({ depth: 1 }, inline('Background')),
    inline(unsafeRaw.math.block`(-1.32865 plus.minus 0.50273) times 10^(-6)`),
    heading({ depth: 2 }, inline('Motivation')),
    inline`Modern logistics networks operate at a scale that makes manual routing infeasible. The combinatorial
complexity of assigning parcels to zones, hubs, and drivers grows exponentially with fleet size.
Automated routing configuration systems address this by encoding business rules — coverage zones,
capacity constraints, and service-level agreements — into structured, machine-readable formats.${footnote(inline`This is a test footnote`)}`,
    inline(lorem(80)),
    heading({ depth: 2 }, inline('Related Work')),
    'Prior work in vehicle routing (VRP) and its variants established the theoretical foundations now used in production systems. Recent industry efforts have shifted toward hybrid approaches that combine constraint solvers with learned heuristics, enabling real-time re-routing in response to traffic or failed delivery attempts.',
    inline(lorem(60)),
    heading({ depth: 1 }, inline('Methodology')),
    heading({ depth: 2 }, inline('System Design')),
    inline(lorem(100)),
    heading({ depth: 2 }, inline('Routing Configuration')),
    'Routing nodes are the atomic unit of the configuration layer. Each node encodes a mapping from a geographic zone identifier to a set of operational parameters: hub assignment, delivery window, vehicle class, and fallback rules. Nodes are composed into directed graphs, enabling cascading resolution when primary assignments are unavailable.',
    inline(lorem(50)),
    heading({ depth: 2 }, inline('Evaluation')),
    inline(lorem(90)),
    heading({ depth: 1 }, inline('Results')),
    inline(lorem(110)),
    heading({ depth: 2 }, inline('Discussion')),
    'The results confirm that hierarchical zone decomposition significantly reduces solver time without sacrificing delivery accuracy. Notably, configurations that expose fallback chains — rather than hard-failing on unresolvable zones — improved overall fulfillment rate by reducing manual intervention in edge cases.',
    inline(lorem(40)),
    heading({ depth: 1 }, inline('Conclusion')),
    inline(lorem(70)),
    'Taken together, these findings suggest that investing in expressive, composable routing configuration schemas is a more tractable path to scalable logistics than pursuing purely algorithmic improvements in isolation. Future work will explore dynamic reconfiguration triggered by real-time demand signals.',
  )
}
