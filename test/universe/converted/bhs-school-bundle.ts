// Converted from test/universe/corpus/bhs-school-bundle.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, image, importPackage, includeFile, inline, path, show } from '../../../src/index.ts'

export default () => {
  const hak = external('hak')
  const hak_with = define('with')
    .named('abstract-text', T.content, [])
    .named('date', T.content, [])
    .named('kurzfassung-text', T.content, [])
    .named('project-partner-logo', T.any, null)
    .named('projecttype', T.content, [])
    .named('responsible-default', T.content, [])
    .named('school-logo', T.any, null)
    .named('sectionnumbering', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisors', T.any, null)
    .named('team', T.any, null)
    .named('title', T.content, [])
    .named('vorwort-text', T.content, [])
    .returns(T.any)
    .external(hak)
  return doc(
    importPackage('@preview/bhs-school-bundle:0.3.3', [hak]),
    show(
      hak_with({
        title: inline`Der Titel der Arbeit`,
        subtitle: inline`Untertitel der Arbeit`,
        projecttype: inline`Diplomarbeit`,
        team: [
          { name: inline`Max Mustermann`, responsibility: inline`Verantwortlich fur IT: HTML, CSS, BWL: Kaufvertrag` },
          { name: inline`Susanne Sorglos`, responsibility: inline`Verantwortlich fur IT: HTML, CSS, BWL: Kaufvertrag` },
          {
            name: inline`Otto Normalverbraucher`,
            responsibility: inline`Verantwortlich fur IT: HTML, CSS, BWL: Kaufvertrag`,
          },
        ],
        supervisors: [inline`Claudio Landerer`, inline`Stefan Stolz`],
        date: inline`Imst, 2026-06-08`,
        sectionnumbering: '1.1.1',
        responsibleDefault: inline`Gabi Sorglos`,
        vorwortText: inline`Hinweise, wie das bearbeitete Thema gefunden wurde, sowie Danksagungen fur Betreuung und Unterstutzung.`,
        kurzfassungText: inline`Kurzbeschreibung von Aufgabenstellung und Problemlosung.`,
        abstractText: inline`Englische Version der Kurzfassung.`,
        projectPartnerLogo: image(path('typst_media/logos/Logo_Projektpartner.png')),
        schoolLogo: image(path('typst_media/logos/Logo_Schule.png')),
      }),
    ),
    includeFile('thesis_content.typ'),
  )
}
