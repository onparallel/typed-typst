// Converted from test/universe/corpus/shokumu-keirekisho-ofa.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, importPackage, inline, let_ } from '../../../src/index.ts'

export default () => {
  const shokumuKeirekisho = define('shokumu-keirekisho').pos('arg1', T.any).returns(T.any).external()
  const [dataDecl, data_2] = let_('data', {
    documentDate: 'YYYY年MM月DD日現在',
    name: '氏名',
    professionalLinks: 'ポートフォリオ：https://example.invalid',
    summary: '応募職種に関連する経験、強み、今後の貢献を簡潔に記入します。',
    skills: [
      { label: 'ソフトウェア', value: 'Python、C/C++、TypeScript、Git、Linux' },
      { label: 'ロボティクス', value: 'ROS 2、センサ統合、制御、シミュレーション' },
      { label: 'コンピュータビジョン', value: 'OpenCV、画像処理、物体検出' },
    ],
    career: [
      {
        period: 'YYYY年MM月〜',
        organization: '組織名',
        role: '役割名',
        summary: '担当内容、役割、測定可能な成果を記入します。',
        technologies: '技術スタック',
      },
      {
        period: 'YYYY年MM月〜',
        organization: '組織名',
        role: '役割名',
        summary: '担当内容、役割、測定可能な成果を記入します。',
        technologies: '技術スタック',
      },
    ],
    projects: [
      {
        title: 'プロジェクトまたは研究テーマ',
        period: 'YYYY年MM月〜YYYY年MM月',
        summary: '課題、本人の役割、結果を簡潔に記入します。',
        technologies: '使用技術',
      },
      {
        title: 'プロジェクトまたは研究テーマ',
        period: 'YYYY年MM月〜YYYY年MM月',
        summary: '課題、本人の役割、結果を簡潔に記入します。',
        technologies: '使用技術',
      },
    ],
    credentials: '資格・研修：資格名（YYYY年）\n語学：言語名・レベル',
    selfPr: '応募職種で再現できる強みを、根拠となる経験とともに記入します。',
  })
  return doc(
    importPackage('@preview/shokumu-keirekisho-ofa:0.1.0', [shokumuKeirekisho]),
    dataDecl,
    inline(shokumuKeirekisho(data_2)),
  )
}
