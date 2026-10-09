// Converted from test/universe/corpus/obsidius.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, show } from '../../../src/index.ts'

export default () => {
  const notes = external('notes')
  const notes_with = define('with').pos('arg1', T.any).returns(T.any).external(notes)
  return doc(importPackage('@preview/obsidius:0.1.0', [notes]), show(notes_with('My notes')), 'Now just start writing!')
}
