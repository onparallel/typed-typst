// Converted from test/suite/corpus/show-text-path-resolving.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { doc, image, path, show } from '../../../src/index.ts'

export default () => {
  return doc(show('GRAPH', image(path('/assets/images/graph.png'))), 'The GRAPH has nodes.')
}
