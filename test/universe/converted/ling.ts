// Converted from test/universe/corpus/ling.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  datetime,
  define,
  doc,
  external,
  fr,
  horizon,
  importPackage,
  inline,
  left,
  m,
  raw,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const lingTheme = external('ling-theme')
  const configCommon = define('config-common').named('handout', T.any, null).returns(T.any).external()
  const titleSlide = define('title-slide').returns(T.any).external()
  const pause = external('pause')
  const info = define('info').pos('arg1', T.content).returns(T.any).external()
  const speakerNote = define('speaker-note').pos('arg1', T.content).returns(T.any).external()
  const focusSlide = define('focus-slide').pos('arg1', T.content).returns(T.any).external()
  const slide = define('slide').rest('args', T.any).named('composer', T.any, null).returns(T.any).external()
  const warning = define('warning').pos('arg1', T.content).returns(T.any).external()
  const lingTheme_with = define('with')
    .pos('arg1', T.any)
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('institution', T.content, [])
    .named('mode', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(lingTheme)
  return doc(
    m.lines(
      importPackage('@preview/ling:0.1.0', [
        lingTheme,
        configCommon,
        titleSlide,
        pause,
        info,
        speakerNote,
        focusSlide,
        slide,
        warning,
      ]),
      importPackage('@preview/touying:0.7.4', [configCommon, pause, speakerNote, slide]),
    ),
    m.lines(
      unsafeRaw.markup`#let mode = sys.inputs.at("mode", default: "sans")`,
      unsafeRaw.markup`#let handout = sys.inputs.at("handout", default: "false") == "true"`,
    ),
    show(
      lingTheme_with(
        {
          mode: unsafeRaw.code<any>`mode`,
          title: inline`문서가 코드가 되는 순간`,
          author: inline`타치바나 셰리`,
          institution: inline`Engineering`,
          date: datetime.today(),
        },
        configCommon({ handout: unsafeRaw.code<any>`handout` }),
      ),
    ),
    inline(titleSlide()),
    m.heading(1, '설계 원칙'),
    m.heading(2, '가장 작은 인터페이스'),
    m.list(m.item(['내용은 구조에 집중합니다.']), m.item(['테마는 타이포그래피를 책임집니다.'])),
    inline(pause),
    inline(info(inline`한국어와 English 2026을 함께 사용합니다.`)),
    m.heading(2, '코드'),
    inline(raw({ block: true, lang: 'typ' }, '#let theme = ling-theme.with(mode: "sans")')),
    inline(speakerNote(inline`코드와 본문 글꼴의 차이를 설명한다.`)),
    inline(focusSlide(inline`복잡성을 줄이는 가장 작은 인터페이스`)),
    inline(
      slide(
        { composer: [fr(1), fr(1)] },
        inline`${space}왼쪽에는 설명을 둡니다.${space}`,
        inline`${space}오른쪽에는 그림이나 코드를 둡니다.${space}`,
      ),
    ),
    inline(warning(inline`인쇄 결과에서도 선과 레이블로 의미를 구분합니다.`)),
    inline(slide(inline(space, align(add(left, horizon), inline`감사합니다.`), space))),
  )
}
