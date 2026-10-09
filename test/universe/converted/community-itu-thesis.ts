// Converted from test/universe/corpus/community-itu-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  bibliography,
  center,
  cm,
  define,
  doc,
  external,
  figure,
  fr,
  horizon,
  importPackage,
  includeFile,
  inline,
  label,
  linebreak,
  luma,
  m,
  path,
  pct,
  pt,
  rect,
  ref,
  show,
  space,
  sym,
  table,
  text,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abbreviations', T.any, null)
    .named('abstract-en', T.any, null)
    .named('abstract-tr', T.any, null)
    .named('advisor-en', T.any, null)
    .named('advisor-tr', T.any, null)
    .named('advisor-univ-en', T.any, null)
    .named('advisor-univ-tr', T.any, null)
    .named('appendices', T.any, null)
    .named('bibliography', T.any, null)
    .named('binding', T.any, null)
    .named('co-advisor-en', T.any, null)
    .named('co-advisor-tr', T.any, null)
    .named('co-advisor-univ-en', T.any, null)
    .named('co-advisor-univ-tr', T.any, null)
    .named('cover-date-en', T.any, null)
    .named('cover-date-tr', T.any, null)
    .named('cv', T.any, null)
    .named('dedication', T.any, null)
    .named('defense-date-en', T.any, null)
    .named('defense-date-tr', T.any, null)
    .named('degree', T.any, null)
    .named('department-en', T.any, null)
    .named('department-tr', T.any, null)
    .named('foreword', T.any, null)
    .named('institute', T.any, null)
    .named('jury', T.any, null)
    .named('lang', T.any, null)
    .named('name', T.any, null)
    .named('program-en', T.any, null)
    .named('program-tr', T.any, null)
    .named('student-id', T.any, null)
    .named('submission-date-en', T.any, null)
    .named('submission-date-tr', T.any, null)
    .named('surname', T.any, null)
    .named('symbols', T.any, null)
    .named('title-en', T.any, null)
    .named('title-tr', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/community-itu-thesis:0.2.0', [thesis]),
    show(
      thesis_with({
        name: 'Öğrenci Adı',
        surname: 'SOYADI',
        studentId: '123456789',
        titleTr: ['TEZ BAŞLIĞININ BİRİNCİ SATIRI', 'GEREKLİYSE İKİNCİ SATIR', 'GEREKLİYSE ÜÇÜNCÜ SATIR'],
        titleEn: ['FIRST LINE OF THESIS TITLE', 'SECOND LINE IF NECESSARY', 'THIRD LINE IF NECESSARY'],
        departmentTr: 'Bilgisayar Mühendisliği Anabilim Dalı',
        departmentEn: 'Department of Computer Engineering',
        programTr: 'Bilgisayar Mühendisliği Programı',
        programEn: 'Computer Engineering Programme',
        institute: 'graduate',
        advisorTr: 'Prof. Dr. Adı SOYADI',
        advisorUnivTr: 'İstanbul Teknik Üniversitesi',
        advisorEn: 'Prof. Dr. Name SURNAME',
        advisorUnivEn: 'Istanbul Technical University',
        coAdvisorTr: '',
        coAdvisorUnivTr: '',
        coAdvisorEn: '',
        coAdvisorUnivEn: '',
        jury: [
          { name: 'Prof. Dr. Adı SOYADI', univ: 'İstanbul Teknik Üniversitesi' },
          { name: 'Prof. Dr. Adı SOYADI', univ: 'Yıldız Teknik Üniversitesi' },
          { name: 'Prof. Dr. Adı SOYADI', univ: 'Boğaziçi Üniversitesi' },
        ],
        coverDateTr: 'Aralık 2024',
        coverDateEn: 'December 2024',
        submissionDateTr: '22 Eylül 2024',
        submissionDateEn: '22 September 2024',
        defenseDateTr: '21 Aralık 2024',
        defenseDateEn: '21 December 2024',
        lang: 'tr',
        degree: 'masters',
        binding: 'hardcover',
        dedication: 'Aileme,',
        foreword: includeFile('foreword.typ'),
        abbreviations: includeFile('abbreviations.typ'),
        symbols: includeFile('symbols.typ'),
        abstractTr: includeFile('abstract-tr.typ'),
        abstractEn: includeFile('abstract-en.typ'),
        bibliography: bibliography({ style: 'ieee', title: 'KAYNAKLAR' }, path('refs.bib')),
        appendices: includeFile('appendices.typ'),
        cv: includeFile('cv.typ'),
      }),
    ),
    m.heading(1, 'GİRİŞ'),
    inline`Bu tez şablonu İstanbul Teknik Üniversitesi lisansüstü programları için hazırlanmış olup, Typst
belgeleme sisteminde yazılan tezlerin sunumuna yönelik standartları belirtmektedir. Kaynak göstermek
için ${ref(label('ornek2024'))} biçiminde atıf yapabilirsiniz.`,
    m.heading(2, 'Tezin Amacı'),
    'Tez yazımında tutarlılığı sağlamak ve kurumsal standartlara uygun belgeler oluşturmak amaçlanmıştır.',
    m.heading(3, 'Alt başlık örneği'),
    'Üçüncü seviye başlıkları bu şekilde gösterilir. Formüller şöyle yazılır:',
    inline(unsafeRaw.math.block`E = m c^2`),
    m.heading(2, 'Literatür Taraması'),
    'Mevcut araştırmalar incelenerek özet halinde sunulmuştur.',
    m.heading(1, 'YÖNTEM'),
    'Bu bölümde araştırmanın yöntemi açıklanır. Şekil ve çizelge örnekleri aşağıdadır.',
    inline(
      figure(
        { caption: inline`Örnek şekil açıklaması` },
        rect(
          { width: pct(80), height: cm(5), fill: luma(240), stroke: add(pt(0.5), luma(160)) },
          inline(
            space,
            align(
              add(center, horizon),
              inline(
                space,
                text({ fill: luma(120) }, inline`Görsel buraya gelir ${linebreak()} (image("fig/...") ile ekleyin)`),
                space,
              ),
            ),
            space,
          ),
        ),
      ),
    ),
    inline(
      figure(
        { caption: inline`Örnek çizelge` },
        table(
          { columns: [fr(1), fr(1), fr(1)] },
          inline`Başlık 1`,
          inline`Başlık 2`,
          inline`Başlık 3`,
          inline`Satır 1-1`,
          inline`Satır 1-2`,
          inline`Satır 1-3`,
          inline`Satır 2-1`,
          inline`Satır 2-2`,
          inline`Satır 2-3`,
        ),
      ),
    ),
    m.heading(1, 'BULGULAR'),
    'Araştırmanın bulguları bu bölümde sunulmuştur.',
    m.heading(1, 'TARTIŞMA'),
    'Bulguların değerlendirilmesi ve literatürle karşılaştırılması yapılmıştır.',
    m.heading(1, 'SONUÇ'),
    'Sonuç bölümü özet niteliğinde olup, ulaşılan ana bulguları içermektedir.',
  )
}
