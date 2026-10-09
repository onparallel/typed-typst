// Converted from test/suite/corpus/numbering.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, inline, space, sym, times, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const t = define('t')
    .named('pat', T.any, '1')
    .named('step', T.any, 1)
    .rest('vals', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let num = 0
  for val in vals.pos() {
    if type(val) == int {
      num = val
    } else {
      test(numbering(pat, num), val)
      num += step
    }
  }
}`,
    )
  return doc(
    t.decl,
    inline(t({ pat: '1' }, '0', '1', '2', '3', '4', '5', '6', 107, '107', '108')),
    inline(
      t(
        { pat: 'α' },
        '𐆊',
        'α',
        'β',
        'γ',
        'δ',
        'ε',
        'στ',
        'ζ',
        'η',
        'θ',
        'ι',
        'ια',
        'ιβ',
        'ιγ',
        'ιδ',
        'ιε',
        'ιστ',
        'ιζ',
        'ιη',
        'ιθ',
        'κ',
        241,
        'σμα',
        999,
        'ϡϟθ',
        1005,
        '͵αε',
        1999,
        '͵αϡϟθ',
        2999,
        '͵βϡϟθ',
        3000,
        '͵γ',
        3398,
        '͵γτϟη',
        4444,
        '͵δυμδ',
        5683,
        '͵εχπγ',
        9184,
        '͵θρπδ',
        9999,
        '͵θϡϟθ',
      ),
      space,
      t(
        { pat: sym.Alpha },
        '𐆊',
        'Α',
        'Β',
        'Γ',
        'Δ',
        'Ε',
        'ΣΤ',
        'Ζ',
        'Η',
        'Θ',
        'Ι',
        'ΙΑ',
        'ΙΒ',
        'ΙΓ',
        'ΙΔ',
        'ΙΕ',
        'ΙΣΤ',
        'ΙΖ',
        'ΙΗ',
        'ΙΘ',
        'Κ',
        241,
        'ΣΜΑ',
      ),
    ),
    inline(t({ pat: '*' }, 1, '*', '†', '‡', '§', '¶', '‖', '**')),
    inline(t({ pat: 'א', step: 2 }, 9, 'ט', 'יא', 'יג', 15, 'טו', 16, 'טז')),
    inline(
      t({ pat: '一', step: 2 }, 9, '九', '十一', '十三', '十五', '十七', '十九'),
      space,
      t({ pat: '壹', step: 2 }, 9, '玖', '拾壹', '拾叁', '拾伍', '拾柒', '拾玖'),
    ),
    inline(
      t({ pat: 'イ' }, 1, 'イ', 'ロ', 'ハ', 47, 'ス', 'イイ', 'イロ', 'イハ', 2256, 'スス', 'イイイ'),
      space,
      t({ pat: 'い' }, 1, 'い', 'ろ', 'は', 47, 'す', 'いい', 'いろ', 'いは'),
      space,
      t({ pat: 'あ' }, 1, 'あ', 'い', 'う', 'え', 'お', 'か', 'き', 'く'),
      space,
      t({ pat: 'ア' }, 1, 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク'),
    ),
    inline(
      t({ pat: '가' }, 1, '가', '나', '다', 47, '다마', '다바', '다사', '다아'),
      space,
      t({ pat: 'ㄱ' }, 1, 'ㄱ', 'ㄴ', 'ㄷ', 47, 'ㄷㅁ'),
    ),
    inline(t({ pat: '١' }, 1475, '١٤٧٥'), space, t({ pat: '۱' }, 1475, '۱۴۷۵')),
    inline(t({ pat: '१' }, 1, '१'), space, t({ pat: '१' }, 10, '१०'), space, t({ pat: '१' }, 123456789, '१२३४५६७८९')),
    inline(t({ pat: '১' }, 1, '১'), space, t({ pat: '১' }, 10, '১০'), space, t({ pat: '১' }, 123456789, '১২৩৪৫৬৭৮৯')),
    inline(t({ pat: 'ক' }, 1, 'ক'), space, t({ pat: 'ক' }, 32, 'হ'), space, t({ pat: 'ক' }, times(32, 2), 'কহ')),
    inline(
      t({ pat: 'ա' }, 1, 'ա', 'բ', 'գ', 10, 'ժ', 15, 'ժե', 24, 'իդ', 2025, 'սիե'),
      space,
      t({ pat: 'Ա' }, 1, 'Ա', 'Բ', 'Գ', 10, 'Ժ', 15, 'ԺԵ', 24, 'ԻԴ', 2025, 'ՍԻԵ'),
    ),
    inline(t({ pat: '①' }, 1, '①'), space, t({ pat: '①' }, 50, '㊿')),
    inline(t({ pat: '⓵' }, 1, '⓵'), space, t({ pat: '⓵' }, 10, '⓾')),
  )
}
