import { typst } from '../src/node.ts'

export default function setup(): void {
  typst().checkVersion()
}
