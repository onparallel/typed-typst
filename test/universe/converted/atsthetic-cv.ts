// Converted from test/universe/corpus/atsthetic-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  em,
  external,
  image,
  importFile,
  includeFile,
  inline,
  m,
  path,
  show,
  space,
} from '../../../src/index.ts'

export default () => {
  const initCv = external('init-cv')
  const header = define('header').named('profile-image', T.any, null).returns(T.any).external()
  const profileBlock = define('profile-block').pos('arg1', T.any).returns(T.any).external()
  return doc(
    m.lines(
      importFile('common/blocks.typ', [initCv, header, profileBlock]),
      show(initCv),
      inline(
        header({ profileImage: profileBlock(image({ height: em(12) }, path('profile.webp'))) }),
        space,
        includeFile('common/content.typ'),
      ),
    ),
  )
}
