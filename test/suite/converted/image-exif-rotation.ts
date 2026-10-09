// Converted from test/suite/corpus/image-exif-rotation.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  define,
  doc,
  inline,
  let_,
  m,
  page,
  range,
  raw,
  set,
  spread,
  str,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const [rotationsDecl, rotations] = let_('rotations', range(1, 9))
  const withRotation = define('with-rotation')
    .pos('path', T.any)
    .pos('offset', T.any)
    .pos('v', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  let data = read(path, encoding: none)
  let modified = data.slice(0, offset) + bytes((v,)) + data.slice(offset + 1)
  image(modified, width: 10pt)
}`,
    )
  return doc(
    m.lines(rotationsDecl, withRotation.decl),
    m.lines(
      set(page, { width: auto }),
      inline(
        table(
          { columns: add(1, rotations.len()) },
          table.header(inline(), spread(rotations.map((v_2) => raw({ lang: 'typc' }, str(v_2))))),
          raw('PNG'),
          spread(rotations.map((v_3) => withRotation('/assets/images/f2t.png', 133, v_3))),
          raw('JPEG'),
          spread(rotations.map((v_4) => withRotation('/assets/images/f2t.jpg', 49, v_4))),
        ),
      ),
    ),
  )
}
