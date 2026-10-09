// Converted from test/universe/corpus/paris-saclay-thesis-flat.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  auto,
  bibliography,
  black,
  block,
  blocks,
  blue,
  box,
  center,
  cite,
  codeBlock,
  context,
  counter,
  data,
  define,
  doc,
  em,
  external,
  figure,
  h,
  heading,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  linebreak,
  link,
  lorem,
  m,
  math,
  outline,
  page,
  par,
  path,
  pt,
  ref,
  regex,
  set,
  show,
  smallcaps,
  space,
  strong,
  sym,
  text,
  unsafeRaw,
  upper,
  v,
  where,
  white,
} from '../../../src/index.ts'

export default () => {
  const parisSaclayThesis = external('paris-saclay-thesis')
  const prune = external('prune')
  const parisSaclayThesis_with = define('with')
    .named('NNT', T.content, [])
    .named('abstract-en', T.any, null)
    .named('abstract-fr', T.any, null)
    .named('candidate-name', T.content, [])
    .named('defense-date', T.content, [])
    .named('doctoral-school', T.content, [])
    .named('doctoral-school-code', T.any, null)
    .named('graduate-school', T.content, [])
    .named('keywords-en', T.any, null)
    .named('keywords-fr', T.any, null)
    .named('research-unit-and-advisors', T.content, [])
    .named('specialty', T.content, [])
    .named('thesis-examiners', T.any, null)
    .named('title-en', T.content, [])
    .named('title-fr', T.content, [])
    .named('university-component', T.content, [])
    .returns(T.any)
    .external(parisSaclayThesis)
  const colorbox = define('colorbox')
    .pos('arg1', T.content)
    .named('box-colors', T.any, null)
    .named('color', T.any, null)
    .named('radius', T.any, null)
    .named('title', T.any, null)
    .named('width', T.any, null)
    .returns(T.any)
    .external()
  const [heading_text_sizeDecl, heading_text_size] = let_(
    'heading_text_size',
    data([null, pt(18), pt(15), pt(12), pt(11)]),
  )
  const remarque = define('remarque')
    .named('number', T.any, null)
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        block(
          { stroke: { left: pt(1) }, inset: em(0.5) },
          inline(space, smallcaps(inline`Remarque ${p['number']} :`), space, p['body'], space),
        ),
      ),
    )
  const en_r_sum_ = define('en_résumé')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        colorbox(
          { title: text({ font: 'Segoe UI This' }, inline`En résumé`), radius: pt(2), width: auto, color: 'default' },
          inline(space, p['body'], space, v(pt(2)), space),
        ),
      ),
    )
  const publications = define('publications')
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        colorbox(
          {
            title: text({ font: 'Segoe UI This' }, inline`Publications et communications scientifiques`),
            radius: pt(2),
            width: auto,
            boxColors: { prune: { stroke: prune, fill: white, title: white } },
            color: 'prune',
          },
          inline(space, p['body'], space, v(pt(2)), space),
        ),
      ),
    )
  return doc(
    importPackage('@preview/paris-saclay-thesis-flat:1.0.2', [parisSaclayThesis, prune]),
    show(
      parisSaclayThesis_with({
        candidateName: inline`Frodon Sacquet`,
        titleFr: inline`Propriétés et conséquences psychiques, magiques et géopoliques du métal Au lorsque forgé en
Anneau Unique`,
        titleEn: inline`Properties and psychic, magical and geopolitical consequences of Au metal when forged into the
One Ring`,
        keywordsFr: ['Or', 'montagne du Destin', 'Magie occulte'],
        keywordsEn: ['Gold', 'Mount Doom', 'Occult magic'],
        abstractFr: lorem(200),
        abstractEn: lorem(200),
        NNT: inline`1955UPASX000`,
        doctoralSchool: inline`École doctorale n°573 : INTERFACES - approches interdisciplinaires,${linebreak()} fondements,
applications et innovation`,
        doctoralSchoolCode: 'INTERFACES',
        specialty: inline`Spécialité de doctorat : Sciences des matériaux`,
        graduateSchool: inline`Graduate School : Physique`,
        universityComponent: inline`Référent : Faculté des sciences d'Orsay`,
        researchUnitAndAdvisors: inline`${space}Thèse préparée dans l'unité de recherche ${strong(inline`Fondcombe`)},${linebreak()}
sous la direction d'${strong(inline`Elrond`)}, seigneur de Fondcombe,${linebreak()} et l'encadrement
de ${strong(inline`Gandalf`)}, magicien de l'ordre des Istari.${space}`,
        defenseDate: inline`20 octobre 1955`,
        thesisExaminers: [
          { name: inline(strong(inline`Aragorn`)), title: inline`Roi du Gondor`, status: inline`Président` },
          {
            name: inline(strong(inline`Legolas`)),
            title: inline`Prince des Elfes Sylvains`,
            status: inline`Rapporteur &${linebreak()} Examinateur`,
          },
          {
            name: inline(strong(inline`Gimli`)),
            title: inline`Guerrier du royaume d'Erebor`,
            status: inline`Rapporteur &${linebreak()} Examinateur`,
          },
          { name: inline(strong(inline`Faramir`)), title: inline`Intendant du Gondor`, status: inline`Examinateur` },
        ],
      }),
    ),
    set(text, { font: 'Libertinus Serif', size: pt(11) }),
    show(link, set(text, { fill: blue })),
    m.lines(
      show(cite, (it, ctx) =>
        codeBlock(
          [show(regex('\\['), set(text, { fill: black })), show(regex('^\\[(\\d+)'), set(text, { fill: blue }))],
          it,
        ),
      ),
      show(ref, (it_2, ctx_2) =>
        codeBlock([
          unsafeRaw.code<any>`if it.element == none {
    // reference to a bibliography entry -> manage by \`#show cite\` above
    return it
  }`,
          show(regex('[\\d]+[\\.]?[\\d]*[\\.]?[\\d]*'), set(text, { fill: blue })),
          it_2,
        ]),
      ),
    ),
    show(figure.caption, (it_3, ctx_3) => inline(space, text({ size: pt(10), style: 'italic' }, inline(it_3)), space)),
    set(heading, { numbering: '1.1', supplement: 'Chapitre' }),
    set(math.equation, { supplement: 'Équation' }),
    m.lines(
      inline(heading_text_sizeDecl),
      unsafeRaw.markup`#show heading.where(level: 1): header => {
  set text(
    size: heading_text_size.at(1),
    fill: prune,
    font: "Segoe UI This",
    weight: "bold"
  )
  let number = context counter(heading).display("1 • ") // prefix format
  pagebreak(weak: true) // start level 1 headings on a new page
  block(breakable: false)[
    #if header.numbering != none [ #number ]
    #upper(header.body)
  ]
  v(heading_text_size.at(1)) // same height spacing as the font size
}`,
      unsafeRaw.markup`#show heading.where(level: 2): header => {
  set text(
    size: heading_text_size.at(2),
    font: "Segoe UI This",
    weight: "bold"
  )
  v(heading_text_size.at(2)) // same height spacing as the font size
  box()[
    #counter(heading).display()~
    #upper(header.body)
  ]
  v(heading_text_size.at(2)) // same height spacing as the font size
}`,
      unsafeRaw.markup`#show heading.where(level: 3): header => {
  set text(
    size: heading_text_size.at(3),
    font: "Segoe UI This",
    weight: "bold"
  )
  v(heading_text_size.at(3)) // same height spacing as the font size
  box()[
    #h(10pt) // small indent
    #counter(heading).display()~
    #header.body
  ]
  v(heading_text_size.at(3)) // same height spacing as the font size
}`,
    ),
    m.lines(
      show(where(outline.entry, { level: 1 }), (it_4, ctx_8) => codeBlock([v({ weak: true }, pt(12)), strong(it_4)])),
      show(where(outline.entry, { level: 3 }), (it_5, ctx_9) => codeBlock([], text({ size: pt(10) }, inline(it_5)))),
    ),
    set(page, {
      footer: context((ctx_10) =>
        blocks(
          m.lines(
            set(align, { alignment: center }),
            inline(
              text(
                { fill: black, size: pt(12), weight: 'regular' },
                inline(space, counter(page).display(ctx_10, '1'), space),
              ),
            ),
          ),
        ),
      ),
    }),
    set(par, { justify: true, linebreaks: 'optimized' }),
    remarque.decl,
    importPackage('@preview/colorful-boxes:1.4.1', [colorbox]),
    en_r_sum_.decl,
    publications.decl,
    inline(outline({ title: inline`Table des matières`, indent: em(1) })),
    inline(labelled(heading({ depth: 1 }, inline('Chapitre')), label('ch:chapitre'))),
    inline(lorem(50)),
    inline(en_r_sum_(inline(space, lorem(25), space))),
    inline(publications(blocks(m.list(m.item([lorem(12)]), m.item([lorem(12)]), m.item([lorem(12)]))))),
    inline(labelled(heading({ depth: 2 }, inline('Sous-chapitre')), label('ch:sous-chapitre'))),
    inline(lorem(25)),
    inline(labelled(heading({ depth: 3 }, inline('Sous-sous-chapitre')), label('ch:sous-sous-chapitre'))),
    inline(lorem(50), space, ref(label('bib:concerning-hobbits'))),
    inline(remarque(inline(space, lorem(25), space))),
    inline(lorem(50)),
    inline(bibliography({ title: inline`Bibliographie` }, path('bib.yml'))),
  )
}
