/**
 * Random compositions: nested markup and calls around random strings must
 * compile and show exactly the concatenation of the strings, in markup and in
 * code positions. This exercises `;`, escaping and nesting together.
 */
import fc from 'fast-check'
import { describe, expect, it } from 'vitest'
import {
  type ContentArg,
  type Content,
  block,
  blocks,
  box,
  doc,
  emph,
  hide,
  highlight,
  inline,
  label,
  labelled,
  render,
  strong,
  sub,
  text,
  underline,
  red,
} from '../src/index.ts'
import { PLAIN, typstEval } from './helpers/typst.ts'

type Tree = string | { kind: Kind; children: Tree[] }
const KINDS = ['inline', 'array', 'strong', 'emph', 'box', 'underline', 'highlight', 'hide', 'text', 'sub'] as const
type Kind = (typeof KINDS)[number]

const leaf = fc.string({
  unit: fc.oneof(
    fc.string({ unit: 'binary', minLength: 1, maxLength: 1 }),
    fc.constantFrom(...'#$*_`<>@=-+~/\\[]{}"\'.:;()1 '),
  ),
  maxLength: 8,
})
const { tree } = fc.letrec<{ tree: Tree; node: Tree }>((tie) => ({
  tree: fc.oneof({ depthSize: 'small', withCrossShrink: true }, leaf, tie('node')),
  node: fc.record({ kind: fc.constantFrom(...KINDS), children: fc.array(tie('tree'), { maxLength: 3 }) }),
}))

function build(t: Tree): ContentArg {
  if (typeof t === 'string') return t
  const parts = t.children.map(build)
  const body = inline(...(parts as never[]))
  switch (t.kind) {
    case 'inline':
      return body
    case 'array':
      return parts
    case 'strong':
      return strong(body)
    case 'emph':
      return emph(body)
    case 'box':
      return box(body)
    case 'underline':
      return underline(body)
    case 'highlight':
      return highlight(body)
    case 'hide':
      return hide(body)
    case 'text':
      return text({ fill: red }, body)
    case 'sub':
      return sub(body)
  }
}

const flat = (t: Tree): string => (typeof t === 'string' ? t : t.children.map(flat).join(''))

async function check(trees: readonly Tree[]): Promise<void> {
  // Each tree twice: as a block body (code position) and as a paragraph (markup position).
  const targets: Content[] = trees.flatMap((t) => [block(build(t)), block(blocks(inline(build(t) as never)))])
  const source =
    PLAIN +
    render(doc(targets.map((c, i) => labelled(c, label(`t${i}`))))) +
    `#context [#metadata(range(${targets.length}).map(i => plain(query(label("t" + str(i))).first().body))) <result>]\n`
  const got = (await typstEval(source, 'query(<result>).first().value')) as string[]
  const want = trees.flatMap((t) => [flat(t), flat(t)])
  const wrong = want.flatMap((w, i) =>
    got[i] === w ? [] : [`${JSON.stringify(trees[i >> 1])}: shows ${JSON.stringify(got[i])}`],
  )
  expect(wrong).toEqual([])
}

describe('random compositions', () => {
  it('show exactly their text', async () => {
    await fc.assert(fc.asyncProperty(fc.array(tree, { minLength: 1, maxLength: 20 }), check), { numRuns: 40 })
  })
})
