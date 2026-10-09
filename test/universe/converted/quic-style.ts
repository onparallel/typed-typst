// Converted from test/universe/corpus/quic-style.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, m, show, space } from '../../../src/index.ts'

export default () => {
  const quicStyle = external('quic-style')
  const quicStyle_template = define('template')
    .named('abstract', T.content, [])
    .named('authors', T.any, null)
    .named('date', T.content, [])
    .named('doc-type', T.any, null)
    .named('doi', T.any, null)
    .named('keywords', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(quicStyle)
  return doc(
    importPackage('@preview/quic-style:0.0.1', quicStyle),
    show(
      quicStyle_template.with({
        title: inline`量子エラー訂正コードの最適化に関する研究進捗報告`,
        authors: [
          {
            name: 'B. Researcher',
            department: 'Quantum Computing',
            institution: 'Tokyo Metropolitan University',
            city: 'Technology City',
            country: 'Japan',
            mail: 'researcher.b@example.com',
          },
        ],
        date: inline`2025-05-08`,
        keywords: ['Quantum Computing', 'Error Correction', 'Surface Code', 'Optimization', 'Quantum Circuit'],
        doi: '',
        abstract: inline`${space}本報告書では、量子コンピュータにおけるエラー訂正コードの最適化に関する研究の進捗状況を報告する。
特に、表面コード（Surface Code）を用いた量子ビット間の相互作用の制御と、
エラー検出・訂正の効率化について、これまでの成果と今後の課題を述べる。
シミュレーション結果から、提案手法により従来手法と比較して約15%のエラー率削減が確認された。
現在は、より大規模な量子回路での実験を進めており、スケーラビリティの検証を行っている。${space}`,
        docType: 'PROGRESS_REPORT',
      }),
    ),
    m.heading(1, '1. 前回からの進捗'),
    m.lines(
      m.heading(2, '1.1 理論的な進展'),
      m.list(m.item(['表面コードのエンコーディング効率の改善']), m.item(['新しいデコーディングアルゴリズムの提案'])),
    ),
    m.lines(
      m.heading(2, '1.2 実装面での進展'),
      m.list(m.item(['量子回路シミュレータの改良']), m.item(['エラー訂正アルゴリズムの並列化実装'])),
    ),
    m.heading(1, '2. 現在の課題'),
    m.lines(
      m.heading(2, '2.1 技術的課題'),
      m.list(m.item(['大規模量子回路でのスケーラビリティ']), m.item(['デコヒーレンス時間の制約'])),
    ),
    m.lines(
      m.heading(2, '2.2 今後の方針'),
      m.list(
        m.item(['ハイブリッド量子-古典アルゴリズムの検討']),
        m.item(['ハードウェア特性を考慮した最適化手法の開発']),
      ),
    ),
    m.heading(1, '3. 主要な研究成果'),
    m.lines(
      m.heading(2, '3.1 表面コードの改良'),
      m.list(
        m.item(['エンコーディング効率を23%向上']),
        m.item(['量子ビット間の相互作用時間を15%削減']),
        m.item(['新しいパリティチェック手法の開発']),
      ),
    ),
    m.lines(
      m.heading(2, '3.2 デコーディングアルゴリズム'),
      m.enum(
        m.item(['機械学習を用いたエラーパターン予測']),
        m.item(['リアルタイムデコーディングの実現']),
        m.item(['エラー訂正の成功率が89%から96%に向上']),
      ),
    ),
    m.heading(1, '4. 実験結果'),
    m.lines(
      m.heading(2, '4.1 シミュレーション環境'),
      m.list(
        m.item(['量子回路シミュレータ：Qiskit Aer v0.12.0']),
        m.item(['量子ビット数：50-100']),
        m.item(['デコヒーレンス時間：100μs']),
        m.item(['測定エラー率：0.1%']),
      ),
    ),
    m.lines(
      m.heading(2, '4.2 性能評価'),
      m.list(
        m.item(['エラー訂正後の量子状態忠実度：98.5%']),
        m.item(['処理時間：従来比35%削減']),
        m.item(['メモリ使用量：最適化により20%削減']),
      ),
    ),
    m.heading(1, '5. 今後のマイルストーン'),
    m.lines(
      m.heading(2, '5.1 短期目標（3ヶ月以内）'),
      m.enum(
        m.numbered(1, ['大規模量子回路（200量子ビット）での検証']),
        m.numbered(2, ['ノイズに対する耐性の向上']),
        m.numbered(3, ['並列処理による高速化の実装']),
      ),
    ),
    m.lines(
      m.heading(2, '5.2 中期目標（6ヶ月以内）'),
      m.enum(
        m.numbered(1, ['実機での動作検証']),
        m.numbered(2, ['エラー訂正のリアルタイムフィードバック']),
        m.numbered(3, ['量子メモリとの統合テスト']),
      ),
    ),
    m.heading(1, '6. 必要なリソース'),
    m.lines(
      m.heading(2, '6.1 計算リソース'),
      m.list(
        m.item(['大規模クラスタ：100ノード×24時間']),
        m.item(['GPUアクセラレータ：8枚']),
        m.item(['ストレージ：10TB']),
      ),
    ),
    m.lines(
      m.heading(2, '6.2 人的リソース'),
      m.list(m.item(['追加の研究員：2名']), m.item(['ソフトウェアエンジニア：1名']), m.item(['理論研究者：1名'])),
    ),
    m.heading(1, '7. リスク分析'),
    m.lines(
      m.heading(2, '7.1 技術的リスク'),
      m.list(
        m.item(['デコヒーレンス時間の制約']),
        m.item(['スケーラビリティの限界']),
        m.item(['ハードウェアの不安定性']),
      ),
    ),
    m.lines(
      m.heading(2, '7.2 対策'),
      m.enum(
        m.numbered(1, ['冗長性の導入']),
        m.numbered(2, ['フォールトトレラントな設計']),
        m.numbered(3, ['段階的な実装アプローチ']),
      ),
    ),
    m.heading(1, '8. 予算執行状況'),
    m.lines(
      m.heading(2, '8.1 使用済み予算'),
      m.list(m.item(['研究機器：450万円']), m.item(['人件費：280万円']), m.item(['計算機使用料：180万円'])),
    ),
    m.lines(
      m.heading(2, '8.2 今後の必要予算'),
      m.list(m.item(['追加機器：300万円']), m.item(['人件費：350万円']), m.item(['学会参加費：50万円'])),
    ),
  )
}
