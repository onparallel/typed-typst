// Converted from test/universe/corpus/endfield-doc.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  counter,
  datetime,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  fr,
  importPackage,
  inline,
  label,
  labelled,
  left,
  link,
  m,
  quote,
  raw,
  ref,
  right,
  show,
  space,
  strong,
  sym,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const endfieldDoc = external('endfield-doc')
  const endfieldDoc_with = define('with')
    .named('author', T.content, [])
    .named('date', T.any, null)
    .named('equation-numbering', T.any, null)
    .named('heading-pagebreak', T.any, null)
    .named('institution', T.content, [])
    .named('lang', T.any, null)
    .named('page-numbering', T.any, null)
    .named('region', T.any, null)
    .named('subtitle', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external(endfieldDoc)
  return doc(
    importPackage('@preview/endfield-doc:0.1.2', [endfieldDoc]),
    show(
      endfieldDoc_with({
        title: inline`Arknights: Endfield Typst Template`,
        subtitle: inline`Template Testing and Debugging`,
        author: inline`${space}metasequoiaNI${counter(footnote).update(0)}${labelled(footnote(inline`Rinkosoft CO., LTD.`), label('rinkosoft'))},
Yvonne${labelled(footnote(inline`Endfield Industries, OMV Dijiang, Talos II Synchorous Orbit`), label('endfield'))}${labelled(footnote(inline`United Workers' Syndicates of Talos II (Valley IV Base), Valley IV, Talos II`), label('uwst'))},
Zhuang Fangyi${labelled(footnote(inline`Hongshan Academy of Sciences, Wuling ASTD, Talos II`), label('wuling'))}`,
        date: datetime.today().display('[year]-[month]-[day]'),
        institution: inline`${space}Rinkosoft${space}`,
        lang: 'en',
        region: 'cn',
        equationNumbering: '(1)',
        headingPagebreak: true,
        pageNumbering: '1',
      }),
    ),
    m.heading(1, 'General Text Testing'),
    m.heading(2, 'Latin Text'),
    inline`The ${strong(inline`Ætherside`)} represents a comprehensive dimensional state at Depth 1, overlapping
with realspace (Depth 0) across subterranean, atmospheric, and orbital regions. ${ref(label('depth-equation'))}
shows the correlation between proximity to rift boundaries and local Depth readings.`,
    inline(labelled([unsafeRaw.math.block`D(x) = tanh(lambda x)`, space], label('depth-equation'))),
    inline`Where ${unsafeRaw.math`D`} represents the Depth field taking values in ${unsafeRaw.math`[-1, 1]`},
with ${unsafeRaw.math`D = 0`} being realspace (normal conditions), ${unsafeRaw.math`D = -1`}
the Originium Internalization Universe, and ${unsafeRaw.math`D = 1`} the Ætherside. The parameter
${unsafeRaw.math`x`} denotes proximity to rift boundaries. Active Blight manifests most intensely
when depth readings approach ${unsafeRaw.math`0.5`}, corresponding to the Ætherside-Realspace
overlap zone where the Higgs-like scalar field undergoes significant deviation from the vacuum
expectation value.`,
    m.heading(2, 'CJK Test'),
    m.heading(3, 'Simplified Chinese'),
    '所以325是什么意思？🤔难道是指明日方舟up主魔法ZC目录2024年3月11日的直播，彼时由龙哥哥今天又鸽了主办的明日方舟集成战略民间赛事仙术杯第五届正在如火如荼地展开中，本届仙术杯采取团队赛的形式，ZC 代表冠军厨小队的第二位出战，使用科学分队焰影苇草开但由于临场过于紧张运气Maybe和肉鸽基础不够扎实等原因在第三层关底利刃所指暴毙，局内结算325分啊，我还以为是出自明日方舟up主魔法ZC目录2024年3月11日的直播，彼时由龙哥哥今天又鸽了主办的明日方舟集成战略民间赛事仙术杯第五届正在如火如荼地展开中，本届仙术杯采取团队赛的形式，ZC 代表冠军厨小队的第二位出战，使用科学分队焰影苇草开但由于临场过于紧张运气Maybe和肉鸽基础不够扎实等原因在第三层关底利刃所指暴毙，局内结算325分吗？',
    m.heading(3, 'Japanese'),
    'それで、325ってどういう意味なの🤔？まさか「明日方舟」のアップ主・魔法ZC目录（マホウZCムロク）が2024年3月11日に配信した、龍哥哥今天又鸽了（ロン兄貴が今日もサボった）主催の「明日方舟」統合戦略民間大会・仙術杯第五届がまさに熱戦を繰り広げている最中の出来事？今大会はチーム戦形式で、ZCは優勝厨チームの第二代表として出場。科学分隊の焰影苇草（エンエイイグサ）でスタートしたものの、緊張のあまり運もMaybeで、ローグライクの基礎力不足が原因で、第三層ボスの「利刃所指（刃の指す先）」で戦闘不能に。最終スコアは325点だったって話？',
    m.heading(1, 'Special Formatting Test'),
    m.heading(2, 'Code Block'),
    inline(
      raw(
        { block: true, lang: 'Rust' },
        'pub fn spawn_model(\n    mut commands:   Commands,\n    mut meshes:     ResMut<Assets<Mesh>>,\n    mut materials:  ResMut<Assets<MmdMaterial>>,\n    mut ibp_assets: ResMut<Assets<SkinnedMeshInverseBindposes>>,\n    asset_server:   Res<AssetServer>,\n) {\n    let extra = vec!["other tex".to_string(), "spa".to_string()];\n\n    spawn_pmx_model(\n        &mut commands, &mut meshes, &mut materials, &mut ibp_assets, &asset_server,\n        include_bytes!("../../assets/perlica/perlica.pmx"),\n        &MmdModelMetadata {\n            display_name:               "Perlica".to_string(),\n            pmx_name:                   String::new(),\n            file_path:                  "perlica/perlica.pmx".to_string(),\n            other_texture_paths:        extra.clone(),\n            material_mapping_toml_path: Some("perlica/material.toml".to_string()),\n        },\n        Transform::from_xyz(-16.0, 0.0, 0.0),\n    );\n}',
      ),
    ),
    m.heading(2, 'Other Formats'),
    m.list(
      m.item([strong(inline`Strong emphasis`)]),
      m.item([emph(inline`Emphasis`)]),
      m.item([raw('Raw text')]),
      m.item([link('https://typst.app')]),
      m.item([unsafeRaw.math.block`E = m c^2`]),
    ),
    m.heading(3, 'Nested Lists'),
    m.list(m.item(m.lines('First level', m.list(m.item(m.lines('Second level', m.list(m.item(['Third level'])))))))),
    m.enum(m.numbered(1, ['Ordered item']), m.numbered(2, ['Another ordered item'])),
    m.heading(3, 'Deep Heading'),
    m.heading(4, 'Level Four Heading'),
    'Level-four headings stay visually consistent with the levels above.',
    m.heading(2, 'Tables and Figures'),
    inline(
      figure(
        { caption: inline`Depth values and their corresponding regions.` },
        table(
          { columns: [auto, fr(1), auto], align: [left, left, right] },
          table.header(inline`Depth`, inline`Region`, inline(unsafeRaw.math`D`)),
          inline`0`,
          inline`Realspace`,
          inline(unsafeRaw.math`0.0`),
          inline`1`,
          inline`Ætherside`,
          inline(unsafeRaw.math`1.0`),
          inline`${sym.minus}1`,
          inline`Originium Internalization Universe`,
          inline(unsafeRaw.math`-1.0`),
        ),
      ),
    ),
    m.heading(2, 'Block Quote'),
    inline(quote({ block: true, attribution: inline`庄方宜` }, inline`${space}青霄碧落，乌云尽扫${space}`)),
    m.heading(1, 'Known Issue & Acknowledgements'),
    m.heading(2, 'Known Issue'),
    m.list(
      m.item([
        'CJK typefaces ship no italic face, so',
        space,
        raw('_emphasis_'),
        space,
        'renders as',
        space,
        strong(inline`bold`),
        space,
        'for CJK runs while Latin text keeps real italics.',
      ]),
      m.item(['Layout is tuned for A4; other', space, raw('paper'), space, 'sizes are accepted but not rescaled.']),
    ),
    m.heading(2, 'Acknowledgements'),
    m.list(
      m.item([link('https://endfield.hypergryph.com/', 'Arknights: Endfield by Hypergryph'), ',']),
      m.item([
        link(
          'https://github.com/leostudiooo/typst-touying-theme-endfield.git',
          'Endfield Style Touying Theme for Typst by Leostudiooo',
        ),
      ]),
    ),
  )
}
