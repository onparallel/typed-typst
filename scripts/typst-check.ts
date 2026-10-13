import { TYPST_VERSION, typst } from '../src/node.ts'

typst({ bin: process.env.TYPST_BIN ?? 'typst' }).checkVersion()
console.log(`typst ${TYPST_VERSION}: ok`)
