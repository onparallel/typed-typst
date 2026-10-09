import { checkTypstVersion, TYPST_VERSION } from '../src/node.ts'

checkTypstVersion(process.env.TYPST_BIN ?? 'typst')
console.log(`typst ${TYPST_VERSION}: ok`)
