// Converted from test/universe/corpus/chordish.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  doc,
  external,
  importPackage,
  includeFile,
  inline,
  m,
  outline,
  pt,
  show,
  space,
  strong,
  text,
} from '../../../src/index.ts'

export default () => {
  const songbook = external('songbook')
  return doc(
    m.lines(importPackage('@preview/chordish:0.2.3', [songbook]), show(songbook)),
    inline(text({ size: pt(24) }, inline(strong(inline`Example Songbook`))), space, outline({ depth: 1 })),
    includeFile('songs/Example Song.typ'),
  )
}
