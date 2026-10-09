// Converted from test/suite/corpus/math-style-cluster.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, inline, let_, m, symbol, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const [clusterDecl, cluster] = let_('cluster', symbol('U︀'))
  return doc(
    m.lines(
      clusterDecl,
      inline(unsafeRaw.math`cluster bb(cluster) bold(sans(upright(cluster))) scr(cluster) bold(cal(cluster))`),
    ),
  )
}
