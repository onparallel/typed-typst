// Converted from test/universe/corpus/jilid.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  cm,
  define,
  doc,
  external,
  figure,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  lorem,
  luma,
  m,
  path,
  raw,
  rect,
  ref,
  show,
  space,
  strong,
  table,
  v,
} from '../../../src/index.ts'

export default () => {
  const appendices = define('appendices').pos('arg1', T.content).returns(T.any).external()
  const frontmatter = define('frontmatter')
    .pos('arg1', T.content)
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const jilid = external('jilid')
  const signature = define('signature')
    .named('id', T.any, null)
    .named('id-label', T.any, null)
    .named('name', T.any, null)
    .named('role', T.content, [])
    .returns(T.any)
    .external()
  const signatures = define('signatures')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('header', T.content, [])
    .returns(T.any)
    .external()
  const jilid_with = define('with')
    .named('bibliography', T.any, null)
    .named('course', T.any, null)
    .named('faculty', T.any, null)
    .named('kind', T.content, [])
    .named('lecturers', T.any, null)
    .named('program', T.any, null)
    .named('students', T.any, null)
    .named('title', T.content, [])
    .named('university', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external(jilid)
  return doc(
    importPackage('@preview/jilid:0.1.0', [appendices, frontmatter, jilid, signature, signatures]),
    show(
      jilid_with({
        title: inline`Judul Dokumen`,
        kind: inline`Jenis Dokumen`,
        course: 'Nama Mata Kuliah',
        lecturers: { name: 'Nama Dosen', id: '10000000000000000' },
        students: [{ name: 'Nama Mahasiswa', id: '1000000001' }],
        program: 'Teknik Informatika',
        faculty: 'Teknik',
        university: 'Universitas Negeri',
        year: '2026',
        bibliography: bibliography({ style: 'apa' }, path('refs.bib')),
      }),
    ),
    inline(
      frontmatter(
        { title: inline`Lembar Pengesahan` },
        inline(
          space,
          v(cm(1)),
          space,
          signatures(
            { header: inline`Kota, 1 Januari 2026 ${linebreak()} Mengetahui,` },
            signature({ role: inline`Koordinator`, name: 'Nama Koordinator, S.T., M.Kom.', id: '10000000000000000' }),
            signature({ role: inline`Mahasiswa`, name: 'Nama Mahasiswa', idLabel: 'NIM', id: '1000000001' }),
          ),
          space,
        ),
      ),
    ),
    inline(frontmatter({ title: inline`Kata Pengantar` }, inline(space, lorem(40), space))),
    inline(labelled(heading({ depth: 1 }, inline('Pendahuluan')), label('bab-pendahuluan'))),
    m.heading(2, 'Latar Belakang'),
    inline(lorem(60)),
    inline(
      labelled(
        [figure({ caption: inline`Contoh gambar` }, rect({ width: cm(6), height: cm(3), fill: luma(230) })), space],
        label('gambar-contoh'),
      ),
    ),
    inline`Lihat ${ref(label('gambar-contoh'))} dan ${ref(label('tabel-contoh'))}.`,
    inline(
      labelled(
        [
          figure(
            { caption: inline`Contoh tabel` },
            table(
              { columns: 2 },
              inline(strong(inline`Kolom A`)),
              inline(strong(inline`Kolom B`)),
              inline`1`,
              inline`2`,
            ),
          ),
          space,
        ],
        label('tabel-contoh'),
      ),
    ),
    m.heading(2, 'Rumusan Masalah'),
    inline(lorem(40)),
    m.heading(1, 'Tinjauan Pustaka'),
    inline`Contoh sitasi ${ref(label('einstein1905'))} dan rujukan ke ${ref(label('bab-pendahuluan'))}.`,
    inline(
      figure(
        { caption: inline`Contoh kode` },
        raw({ block: true, lang: 'python' }, 'def halo(nama):\n    return f"Halo, {nama}!"'),
      ),
    ),
    inline(lorem(80)),
    inline(appendices(blocks(m.heading(1, 'Dokumentasi Kegiatan'), inline(lorem(30))))),
    inline(appendices(blocks(m.heading(1, 'Dokumentasi Kegiatan 2'), inline(lorem(20))))),
  )
}
