/**
 * A project that installs the packed package (scripts/check-package.sh): each
 * entry point imports, type-checks under each TypeScript version and module
 * resolution, and runs.
 */
import {
  auto,
  doc,
  fr,
  image,
  inline,
  heading,
  let_,
  m,
  mm,
  page,
  path,
  pt,
  render,
  set,
  strong,
  table,
  text,
  unsafeRaw,
} from '@onparallel/typed-typst'
import { check, checkTypstVersion } from '@onparallel/typed-typst/node'

const [total, totalRef] = let_('total', 42)
const source: string = render(
  doc(
    set(page, { paper: 'a4', margin: mm(20) }),
    set(text, { size: pt(11) }),
    total,
    heading('Report'),
    inline('Prepared for ', strong('ACME'), '.'),
    table({ columns: [fr(1), auto] }, 'Item', 'Count'),
    unsafeRaw.code({ totalRef })<'content'>`[#totalRef]`,
  ),
)
// The types reject a string as a file, and so does the library at run time.
// @ts-expect-error a string is not a path
const rejected = () => image('logo.png')
if (
  !(() => {
    try {
      rejected()
      return false
    } catch {
      return true
    }
  })()
)
  throw new Error('a string was read as a file')
void (() => image(path('logo.png')))
// `undefined` leaves a named argument out, also under exactOptionalPropertyTypes.
void (() => set(text, { size: source ? pt(1) : undefined }))
// @ts-expect-error no such named argument
void (() => set(text, { sizee: pt(1) }))

checkTypstVersion()
const result = await check(doc(heading('Report')))
if (!result.ok) throw new Error(`Typst rejected the document: ${JSON.stringify(result)}`)
console.log(source)
