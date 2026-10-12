/**
 * Every case of test/positions.cases.ts that the types accept prints Typst that compiles without an
 * error or a warning, except the ones listed here: values a type admits that Typst rejects with a
 * clear error of its own (the library is no full type checker of Typst).
 */
import { describe, expect, it } from 'vitest'
import { doc, render } from '../src/index.ts'
import { typstCompile } from './helpers/typst.ts'
import { cases, prelude, rejected } from './positions.cases.ts'

/** `position/value`: why Typst's error is the right outcome. */
const typstRejects: Readonly<Record<string, string>> = {
  ...Object.fromEntries(
    ['false', 'null', 'emptyString', 'string', 'strRef', 'emptyArray', 'stringArray', 'mixedArray', 'numberArray']
      .concat(['nestedArray', 'emptyObject', 'object', 'content', 'auto', 'element', 'arrow', 'thunk', 'length'])
      .concat(['color', 'data', 'true', 'ratio', 'blockArray'])
      .map((v) => [`numbers/${v}`, 'calc.max takes any value; Typst cannot compare it with a number']),
  ),
  'namedInt/zero': 'a heading level is positive',
  'listMarker/emptyArray': 'Typst needs one marker at least',
  'termItem/content': 'any content is typed as content; only a term item is one',
  'pageNumbering/emptyString': 'not a numbering pattern',
  'pageNumbering/string': 'not a numbering pattern',
  'pageNumbering/strRef': 'not a numbering pattern',
  'pageNumbering/element': 'heading is no numbering function',
  'namedSides/data': 'data with a key that is no side',
  ...Object.fromEntries(
    ['intRef', 'auto', 'element', 'arrow', 'thunk', 'length', 'color', 'data', 'ratio', 'false', 'zero', 'one']
      .concat(['fraction', 'mixedArray', 'nestedArray', 'numberArray'])
      .map((v) => [`codeItem/${v}`, 'a code block joins its values, as in Typst: a string and this value do not join']),
  ),
  'showReturn/true': 'markup shows no boolean',
  'showReturn/bigint': 'markup shows no bigint',
  'numberingReturn/true': 'markup shows no boolean',
  'numberingReturn/bigint': 'markup shows no bigint',
  'labelled/statement': 'a set rule is nothing to label; Typst warns, as for the same markup by hand',
  'namedInt/fraction': 'number admits a fraction where Typst takes an int (it throws)',
  'numberingArg/fraction': 'number admits a fraction where Typst takes an int (it throws)',
  'showReturn/emptyObject': 'a content callback shows markup; a dictionary is data() (it throws)',
  'showReturn/object': 'a content callback shows markup; a dictionary is data() (it throws)',
  'numberingReturn/emptyObject': 'a content callback shows markup; a dictionary is data() (it throws)',
  'numberingReturn/object': 'a content callback shows markup; a dictionary is data() (it throws)',
}

describe('values in every position', () => {
  it('print Typst that compiles, or fail as listed', { timeout: 300_000 }, async () => {
    const failures: string[] = []
    const jobs = cases.flatMap(([position, value, build], i) => {
      if (rejected.has(i)) return []
      const key = `${position}/${value}`
      return [
        async () => {
          let outcome: string | null = null
          try {
            await typstCompile(render(doc(...prelude, build() as never)))
          } catch (e) {
            outcome = String((e as Error).message)
              .split('\n')
              .slice(0, 2)
              .join(' ')
          }
          if (outcome && !(key in typstRejects)) failures.push(`${key}: ${outcome}`)
          if (!outcome && key in typstRejects) failures.push(`${key}: compiles now; remove it from the list`)
        },
      ]
    })
    let next = 0
    await Promise.all(
      Array.from({ length: 8 }, async () => {
        while (next < jobs.length) await jobs[next++]!()
      }),
    )
    expect(failures.sort()).toEqual([])
  })
})
