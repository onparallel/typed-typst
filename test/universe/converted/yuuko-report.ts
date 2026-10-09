// Converted from test/universe/corpus/yuuko-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, cm, define, doc, external, importPackage, inline, m, pt, show, space, v } from '../../../src/index.ts'

export default () => {
  const conf = external('conf')
  const chartGrid3 = define('chart-grid-3').pos('arg1', T.any).returns(T.any).external()
  const chartCard = define('chart-card')
    .pos('arg1', T.content)
    .named('badge', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const chartPlaceholder = define('chart-placeholder')
    .named('height', T.any, null)
    .named('label', T.content, [])
    .returns(T.any)
    .external()
  const chartFeatured = define('chart-featured')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external()
  const conf_with = define('with')
    .named('authors', T.any, null)
    .named('cover', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .named('toc', T.any, null)
    .returns(T.any)
    .external(conf)
  return doc(
    importPackage('@preview/yuuko-report:0.1.0', [conf, chartGrid3, chartCard, chartPlaceholder, chartFeatured]),
    show(
      conf_with({
        title: inline`Yuuko Report`,
        subtitle: inline`Portrait and landscape technical reports`,
        authors: ['Author'],
        cover: false,
        toc: false,
      }),
    ),
    m.heading(1, 'Visualization Dashboard'),
    inline(
      chartGrid3([
        chartCard(
          { title: inline`Decay Curve`, badge: inline`Stable` },
          inline(space, chartPlaceholder({ label: inline`Time Response`, height: cm(4.3) }), space),
        ),
        chartCard(
          { title: inline`Channel Heatmap` },
          inline(space, chartPlaceholder({ label: inline`Detector Map`, height: cm(4.3) }), space),
        ),
        chartCard(
          { title: inline`Error Distribution` },
          inline(space, chartPlaceholder({ label: inline`Histogram`, height: cm(4.3) }), space),
        ),
      ]),
    ),
    inline(v(pt(12))),
    inline(
      chartFeatured(
        chartCard(
          { title: inline`Main Result` },
          inline(space, chartPlaceholder({ label: inline`Featured Chart`, height: cm(6) }), space),
        ),
        chartCard(
          { title: inline`Detail A` },
          inline(space, chartPlaceholder({ label: inline`Detail`, height: cm(2.2) }), space),
        ),
        chartCard(
          { title: inline`Detail B` },
          inline(space, chartPlaceholder({ label: inline`Detail`, height: cm(2.2) }), space),
        ),
      ),
    ),
  )
}
