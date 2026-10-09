// Converted from test/universe/corpus/hanzi-calligraphy.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  em,
  importPackage,
  inline,
  parbreak,
  pct,
  rtl,
  set,
  text,
  v,
} from '../../../src/index.ts'

export default () => {
  const calligraphyWork = define('calligraphy-work')
    .pos('arg1', T.content)
    .named('col-gutter', T.any, null)
    .named('font', T.any, null)
    .named('miao', T.any, null)
    .named('spacing-rate', T.any, null)
    .named('type', T.any, null)
    .named('y-rate', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/hanzi-calligraphy:0.2.0', [calligraphyWork]),
    inline(
      calligraphyWork(
        { font: 'FZSJ-DQYBKSJW', spacingRate: pct(27), yRate: pct(9) },
        blocks(
          '四十年来家国三千里地山河凤阁龙楼连霄汉玉树琼枝作烟萝几曾识干戈',
          '一旦归为臣虏沈腰潘鬓消磨最是仓皇辞庙日教坊犹奏别离歌垂泪对宫娥',
          parbreak(),
        ),
      ),
    ),
    inline(
      calligraphyWork(
        { type: 'AllH' },
        blocks(
          '醉里挑灯看剑，梦回吹角连营。八百里分麾下炙，五十弦翻塞外声，沙场秋点兵。',
          '马作的卢飞快，弓如霹雳弦惊。了却君王天下事，赢得生前身后名。可怜白发生！',
        ),
      ),
    ),
    inline(
      calligraphyWork(
        { miao: true, type: 'Full', font: 'FZSJ-DQYBKSJW', spacingRate: pct(27), yRate: pct(9) },
        blocks(
          '寒蝉凄切，对长亭晚，骤雨初歇。都门帐饮无绪，留恋处，兰舟催发。执手相看泪眼，竟无语凝噎。念去去，千里烟波，暮霭沉沉楚天阔。',
          '多情自古伤离别，更那堪，冷落清秋节！今宵酒醒何处？杨柳岸，晓风残月。此去经年，应是良辰好景虚设。便纵有千种风情，更与何人说？',
        ),
      ),
    ),
    set(text, { dir: rtl }),
    inline(
      calligraphyWork(
        { miao: false, type: 'AllV', spacingRate: pct(25), colGutter: em(0.35) },
        blocks(
          inline`　${v(em(2))}清平乐·别来春半${v(em(18))}
别来春半，触目柔肠断。砌下落梅如雪乱，拂了一身还满。雁来音信无凭，路遥归梦难成。离恨恰如春草，更行更远还生。${v(em(18))}`,
          inline`　${v(em(2))}相见欢·林花谢了春红${v(em(18))}
林花谢了春红，太匆匆。无奈朝来寒雨晚来风。胭脂泪，相留醉，几时重。自是人生长恨水长东。${v(em(18))}`,
          inline`　${v(em(2))}长相思·一重山${v(em(18))}
一重山，两重山。山远天高烟水寒，相思枫叶丹。菊花开，菊花残。塞雁高飞人未还，一帘风月闲。`,
        ),
      ),
    ),
  )
}
