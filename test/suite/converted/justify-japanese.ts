// Converted from test/suite/corpus/justify-japanese.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { auto, blocks, doc, inline, m, page, par, pt, rect, rgb, set, text } from '../../../src/index.ts'

export default () => {
  return doc(
    m.lines(
      set(page, { width: auto }),
      set(par, { justify: true }),
      set(text, { lang: 'ja', font: ['Libertinus Serif', 'Noto Serif CJK JP'] }),
      inline(
        rect(
          { inset: pt(0), width: pt(80), fill: rgb('eee') },
          blocks(
            'ウィキペディア（英: Wikipedia）は、世界中のボランティアの共同作業によって執筆及び作成されるフリーの多言語インターネット百科事典である。主に寄付に依って活動している非営利団体「ウィキメディア財団」が所有・運営している。',
            inline`専門家によるオンライン百科事典プロジェクトNupedia（ヌーペディア）を前身として、2001年1月、ラリー・サンガーとジミー・ウェールズ（英: Jimmy Donal "Jimbo"
Wales）により英語でプロジェクトが開始された。`,
          ),
        ),
      ),
    ),
  )
}
