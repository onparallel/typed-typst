import { ESLint } from 'eslint'
import { describe, expect, it } from 'vitest'

const eslint = new ESLint({ cwd: new URL('..', import.meta.url).pathname })

async function errors(code: string): Promise<string[]> {
  const [result] = await eslint.lintText(code, { filePath: 'src/fixture.ts' })
  return result!.messages.map((m) => m.message)
}

const BYPASS: Record<string, string> = {
  alias: 'const u = unsafeRaw; u.code(s as any)',
  destructure: 'const { code } = unsafeRaw; code(s as any)',
  'import rename': "import { unsafeRaw as u } from 'typed-typst'; u.code(s as any)",
  'namespace import': "import * as tt from 'typed-typst'; tt.unsafeRaw.code(s as any)",
  'math.block.call': 'unsafeRaw.math.block.call(null, s as any)',
  'math.block.apply': 'unsafeRaw.math.block.apply(null, [s] as any)',
  'code.apply': 'unsafeRaw.code.apply(null, [s] as any)',
  'Reflect.apply': 'Reflect.apply(unsafeRaw.code, null, [s])',
  'comma callee': '(0, unsafeRaw.code)(s as any)',
  'as any callee': '(unsafeRaw.code as any)(s)',
  'non-null callee': 'unsafeRaw.code!(s as any)',
  'computed member': "unsafeRaw['code'](s as any)",
  'optional call': 'unsafeRaw.code?.(s as any)',
  bind: 'unsafeRaw.code.bind(null)(s as any)',
  'array of fns': '[unsafeRaw.code][0](s as any)',
  'pass as callback': '[s].map(unsafeRaw.code as any)',
  'spread bindings': 'unsafeRaw.code({ ...vars })`x`',
  'computed key': 'unsafeRaw.code({ [k]: v })`x`',
  'tag via alias with ${}': 'const u = unsafeRaw; u.code`${x}`',
  're-export': "export { unsafeRaw as safe } from 'typed-typst'",
  'path from data': 'image(path(input.file as any))',
  'includeFile from data': 'includeFile(input.file as any)',
  'importFile from data': 'importFile(input.file as any, [x])',
  'namespace computed': "import * as tt from 'typed-typst'; tt['unsafeRaw'].code(s as any)",
  'destructure from namespace': "import * as tt from 'typed-typst'; const { unsafeRaw: r } = tt; r.code(s as any)",
  'math tag with ${}': 'unsafeRaw.math.block`${x}`',
  'vars + ${}': 'unsafeRaw.code({ x })`${x}`',
  'renamed path import': "import { path as p } from 'typed-typst'; image(p(input))",
  'two args': 'unsafeRaw.code({ x }, y)`x`',
  'string-name import': "import { 'unsafeRaw' as u } from 'typed-typst'; u.code(s as any)",
  'string-name re-export': "export { 'unsafeRaw' as u } from 'typed-typst'",
  'destructure string key': "import * as tt from 'typed-typst'; const { 'unsafeRaw': u } = tt; u.code(s as any)",
  'destructure computed key': "import * as tt from 'typed-typst'; const { ['unsafeRaw']: u } = tt",
  'namespace computed concat': "import * as tt from 'typed-typst'; tt['unsafe' + 'Raw'].code(s as any)",
  'namespace as a value': "import * as tt from 'typed-typst'; Object.values(tt)",
  'dynamic import then': "import('typed-typst').then(({ 'unsafeRaw': u }) => u.code(s as any))",
  'path namespace': "import * as tt from 'typed-typst'; tt.path(input as any)",
  'path string-name import': "import { 'path' as p } from 'typed-typst'; p(input as any)",
  'path alias': "import { path } from 'typed-typst'; const p = path; p(input as any)",
  'path cast callee': "import { path } from 'typed-typst'; (path as any)(input)",
  'path .call': "import { path } from 'typed-typst'; path.call(null, input as any)",
  'path as callback': "import { path } from 'typed-typst'; [input].map(path as any)",
  'path dynamic import': "const { path: p } = await import('typed-typst'); p(input as any)",
  'importFile alias': "import { importFile } from 'typed-typst'; const i = importFile; i(input as any, [])",
  'name in a const': "import * as tt from './lib'; const k = 'unsafeRaw' as const; tt[k].code(s as any)",
  'name as a default': "function f(ns: any, k = 'unsafeRaw') { return ns[k] }",
  'path type argument': "import { path } from 'typed-typst'; path<'a.png'>(JSON.parse(body))",
  'includeFile type argument': "import { includeFile } from 'typed-typst'; includeFile<'a.typ'>(JSON.parse(body))",
}
const ALLOWED: Record<string, string> = {
  tagged: 'unsafeRaw.code`page.width`',
  'tagged vars': 'unsafeRaw.code({ x })`x`',
  'math.block vars': 'unsafeRaw.math.block({ n })`n`',
  typed: 'unsafeRaw.code({ x })<"length">`x`',
  'path literal': "image(path('a.png'))",
  'path as const': "image(path('a.png' as const))",
  'path of a conditional of literals': "image(path(wide ? 'a.png' : 'b.png'))",
  'path template literal': 'image(path(`a.png`))',
  'import + use': "import { unsafeRaw, path } from 'typed-typst'\nunsafeRaw.markup`#pagebreak()`\nimage(path('a.png'))",
  'math.block tag': 'unsafeRaw.math.block`x^2`',
  typeof: 'type R = typeof unsafeRaw',
  're-export same name': "export { unsafeRaw } from './raw.ts'",
  'own definition': 'export const unsafeRaw = { code: 1 }',
  'node path': "import path from 'node:path'\npath.join(a, b)",
  'local path helper': 'function path(x: string) { return x }\npath(input)',
  'includeFile literal': "includeFile('chapter.typ')",
  'importFile literal': "importFile('lib.typ', [x])",
  'object key named unsafeRaw': 'const o = { unsafeRaw: 1 }',
  'typeof member': 'type C = typeof unsafeRaw.math.block',
  'interface key': 'interface I { unsafeRaw: string }',
  'class field key': 'class A { unsafeRaw = 1 }',
  'string mention': "describe('unsafeRaw', () => {})",
  'namespace member': "import * as tt from 'typed-typst'; tt.path('a.png')",
  'path re-export': "import { path } from 'typed-typst'; export { path }",
}

describe('lint rules', () => {
  it.each(Object.entries(BYPASS))('reports a way around them: %s', async (_, code) => {
    const [result] = await eslint.lintText(code + '\n', { filePath: 'src/fixture.ts' })
    expect(result!.messages.filter((m) => m.fatal)).toEqual([])
    expect(result!.messages.some((m) => m.ruleId?.startsWith('typed-typst/'))).toBe(true)
  })

  it.each(Object.entries(ALLOWED))('allows %s', async (_, code) => {
    expect(await errors(code + '\n')).toEqual([])
  })
})

describe('unsafeRaw lint rule', () => {
  it('allows a tagged template without substitutions', async () => {
    expect(await errors('unsafeRaw.markup`#pagebreak()`\nunsafeRaw.code<"length">`page.width`\n')).toEqual([])
  })

  it('allows variables in an object literal', async () => {
    expect(await errors('unsafeRaw.code({ banner })`if it.level == 1 { banner } else { it }`\n')).toEqual([])
    expect(await errors('unsafeRaw.math.block({ n })`sum_(i=1)^#n i`\nunsafeRaw.code({ x })<"length">`x`\n')).toEqual(
      [],
    )
  })

  it('rejects ${…}, variables that are not an object literal, and a stored tag', async () => {
    expect(await errors('unsafeRaw.markup`Hello ${name}`\n')).toHaveLength(1)
    expect(await errors('unsafeRaw.code(vars)`x`\n')).toHaveLength(1)
    expect(await errors('const t = unsafeRaw.code({ x })\n')).toHaveLength(1)
  })

  it('rejects calls, whose text could come from a variable', async () => {
    expect((await errors('unsafeRaw.code(strings as any)\n')).length).toBeGreaterThan(0)
    expect((await errors('unsafeRaw.markup(Object.assign([s], { raw: [s] }))\n')).length).toBeGreaterThan(0)
  })
})
