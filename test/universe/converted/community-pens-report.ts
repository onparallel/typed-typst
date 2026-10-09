// Converted from test/universe/corpus/community-pens-report.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  bibliography,
  block,
  blocks,
  define,
  doc,
  em,
  external,
  heading,
  importPackage,
  includeFile,
  inline,
  left,
  linebreak,
  link,
  m,
  par,
  path,
  pct,
  pt,
  right,
  set,
  show,
  space,
  strong,
  table,
  v,
} from '../../../src/index.ts'

export default () => {
  const thesis = external('thesis')
  const thesis_with = define('with')
    .named('abstract-en', T.content, [])
    .named('abstract-en-keywords', T.any, null)
    .named('abstract-id', T.content, [])
    .named('abstract-id-keywords', T.any, null)
    .named('acknowledgement', T.content, [])
    .named('advisors', T.any, null)
    .named('author', T.any, null)
    .named('author-bio', T.content, [])
    .named('city', T.any, null)
    .named('coordinator', T.any, null)
    .named('coordinator-role', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('document-title', T.any, null)
    .named('document-type', T.any, null)
    .named('examiners', T.any, null)
    .named('foreword', T.content, [])
    .named('institution', T.any, null)
    .named('student-id', T.any, null)
    .named('student-id-label', T.any, null)
    .named('study-program', T.content, [])
    .named('supplementary', T.content, [])
    .named('title', T.content, [])
    .named('year', T.any, null)
    .returns(T.any)
    .external(thesis)
  return doc(
    importPackage('@preview/community-pens-report:0.1.0', [thesis]),
    show(
      thesis_with({
        title: inline`${space}SMART MASSAGE MACHINE: ${linebreak()} IMPLEMENTATION OF A BODY CONTOUR ${linebreak()}
AND AREA IDENTIFICATION SYSTEM USING ${linebreak()} SENSOR FUSION${space}`,
        documentTitle:
          'Smart Massage Machine: Implementation of a Body Contour and Area Identification System Using Sensor Fusion',
        documentType: 'Proyek Akhir',
        degree: 'Gelar Sarjana Terapan (S.Tr.T.)',
        year: '2026',
        city: 'Surabaya',
        date: '16 Juli 2026',
        author: 'Azzam Abidurrahman Mujahid',
        studentIdLabel: 'NRP.',
        studentId: '4122600021',
        studyProgram: inline`Program Studi Sarjana Terapan ${linebreak()} Teknik Mekatronika`,
        department: 'Jurusan Teknik Mekanika dan Energi',
        institution: 'Politeknik Elektronika Negeri Surabaya',
        coordinatorRole: 'Koordinator Program Studi Sarjana Terapan Teknik Mekatronika',
        coordinator: { name: 'Novian Fajar Satria, S.ST., M.T.', id: 'NIP. 199011292019031015' },
        advisors: [
          { name: 'Dr. Eny Kusumawati, S.Pd., M.Pd.', id: 'NIP. 197307192008122001' },
          { name: 'Eko Budi Utomo, S.ST., M.T.', id: 'NIP. 199005202019031014' },
          { name: 'Mohamad Nasyir Tamara, S.ST., M.T.', id: 'NIP. 198508072015041003' },
        ],
        examiners: [
          { name: 'Examiner 1, S.T., M.T.', id: 'NIP. 000000000000000000' },
          { name: 'Examiner 2, S.T., M.T.', id: 'NIP. 000000000000000000' },
        ],
        abstractEn: inline`${space}Write the English abstract here. It should summarise the problem, the method, the main
results, and the conclusion of the final project.${space}`,
        abstractEnKeywords: 'Smart Massage Machine, Sensor Fusion, 3D Scanning, Point Cloud, Massage Trajectory',
        abstractId: inline`${space}Tulis abstrak bahasa Indonesia di sini, berisi ringkasan masalah, metode, hasil utama,
dan kesimpulan proyek akhir.${space}`,
        abstractIdKeywords: 'Smart Massage Machine, Sensor Fusion, Pemindaian 3D, Point Cloud, Lintasan Pijat',
        foreword: blocks(
          'Write your foreword here. Thank God and everyone who helped you complete this final project.',
          inline(v(em(4))),
          inline(
            align(
              right,
              block(
                { width: pct(45) },
                blocks(
                  m.lines(set(par, { firstLineIndent: pt(0), justify: false }), 'Surabaya, 16 July 2026'),
                  inline(v(em(3.5))),
                  inline(strong(inline`Azzam Abidurrahman Mujahid`)),
                ),
              ),
            ),
          ),
        ),
        acknowledgement: inline`${space}Write your acknowledgement here, thanking your family, advisors, and everyone who supported
you.${space}`,
        supplementary: blocks(
          inline(heading({ level: 1, numbering: null, outlined: true }, inline`SUPPLEMENTARY MATERIAL`)),
          inline(strong(inline`Attachment 1. Source Code`)),
          inline(link('https://github.com/azzamjhd/scanner-system', 'Github Repository')),
          inline(strong(inline`Attachment 2. Journal`)),
        ),
        authorBio: blocks(
          inline(heading({ level: 1, numbering: null, outlined: true }, inline`Author Biography`)),
          inline(
            table(
              { columns: 3, stroke: null, align: [left, left], inset: pt(4) },
              inline`Name`,
              inline`:`,
              inline`Azzam Abidurrahman Mujahid`,
              inline`Birthdate`,
              inline`:`,
              inline`Lumajang, January 2, 2004`,
              inline`Email`,
              inline`:`,
              inline`azzamujahid214@gmail.com`,
            ),
          ),
        ),
      }),
    ),
    includeFile('chapters/01_introduction.typ'),
    inline(
      heading({ level: 1, numbering: null, outlined: true }, inline`REFERENCES`),
      space,
      bibliography({ title: null, style: 'ieee' }, path('references.bib')),
    ),
  )
}
