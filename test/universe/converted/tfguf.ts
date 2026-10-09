// Converted from test/universe/corpus/tfguf.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  auto,
  bibliography,
  black,
  cm,
  data,
  define,
  doc,
  emph,
  external,
  figure,
  footnote,
  fr,
  image,
  importPackage,
  inline,
  label,
  labelled,
  let_,
  link,
  lorem,
  m,
  par,
  path,
  quote,
  raw,
  rect,
  red,
  ref,
  set,
  show,
  space,
  spread,
  sym,
  table,
  text,
  unsafeRaw,
  where,
  white,
  yellow,
} from '../../../src/index.ts'

export default () => {
  const longitudAbstract = external('longitud-abstract')
  const unirfisica = external('unirfisica')
  const caption = define('caption').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external()
  const ket = external('ket')
  const qty = define('qty').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const curl = external('curl')
  const grad = external('grad')
  const tensor = external('tensor')
  const pdv = external('pdv')
  const anejos = external('anejos')
  const unirfisica_with = define('with')
    .named('abstract', T.any, null)
    .named('agradecimientos', T.any, null)
    .named('alumno', T.any, null)
    .named('director', T.any, null)
    .named('kwords', T.any, null)
    .named('pclave', T.any, null)
    .named('resumen', T.any, null)
    .named('titulo', T.any, null)
    .returns(T.any)
    .external(unirfisica)
  const mermaid = define('mermaid').pos('arg1', T.any).returns(T.any).external()
  const tablem = external('tablem')
  const threeLineTable = define('three-line-table').pos('arg1', T.content).returns(T.any).external()
  const [longitudAbstractDecl, longitudAbstract_2] = let_('longitud-abstract', 150)
  const [miDiagramaDecl, miDiagrama] = let_('mi-diagrama', mermaid('graph LR; A-->B;'))
  const cdu = define('cdu')
    .pos('name', T.any)
    .returns(T.any)
    .body((p) => data([inline`CDU`, table.cell({ fill: black }, text({ fill: white }, p['name']))]))
  const spd = define('spd')
    .pos('name', T.any)
    .returns(T.any)
    .body((p) => data([inline`SPD`, table.cell({ fill: red }, text({ fill: white }, p['name']))]))
  const fdp = define('fdp')
    .pos('name', T.any)
    .returns(T.any)
    .body((p) => data([inline`FDP`, table.cell({ fill: yellow }, p['name'])]))
  return doc(
    m.lines(
      importPackage('@preview/tfguf:0.0.5', [
        longitudAbstract,
        unirfisica,
        caption,
        ket,
        qty,
        curl,
        grad,
        tensor,
        pdv,
        anejos,
      ]),
      longitudAbstractDecl,
      show(
        unirfisica_with({
          titulo: 'Mi trabajo de fin de grado',
          alumno: ['Alumno 1', 'Alumno 2', 'Alumno 3'],
          director: 'Director 1 y Director 2',
          agradecimientos: quote({ attribution: 'Yo', block: true }, inline(emph(inline`A mis padres`))),
          abstract: lorem(longitudAbstract_2),
          resumen: lorem(longitudAbstract_2),
          pclave: ['Una', 'Dos', 'Otra'],
          kwords: ['Some', 'Key', 'Words'],
        }),
      ),
    ),
    set(text, { lang: 'es' }),
    show(where(table.cell, { y: 0 }), set(text, { weight: 'bold' })),
    m.lines(m.heading(1, 'Introducción'), inline`${lorem(120).trim('.')} ${ref(label('xetex'))} .`),
    inline(
      figure(
        {
          caption: caption(
            inline`Un afigura sencilla con un elemento math llamado ${unsafeRaw.math`ket(psi) = cos(theta\\/2) ket(0) + e^(i phi) sin(theta\\/2) ket(1)`}${space}`,
            inline`La he hecho yooo`,
          ),
        },
        inline`Contenido figura`,
      ),
    ),
    inline`La distancia que separa dos torres en un tendido eléctrico en una vía de tren es de ${qty(60, 'm')}.
Obtén el tiempo que emplea una cabeza locomotora en recorrer dicha distancia si su velocidad
es de ${qty(72, 'kilo meter per hour')}. Expresa dicho tiempo en el Sistema Internacional. ${labelled([unsafeRaw.math.block`curl (grad f), tensor(T, -mu, +nu), pdv(f, x, y, [1,2]) ,`, space], label('eq:tensor'))}`,
    inline`Como se puede derivar desde la ${ref(label('eq:tensor'))}…`,
    inline(unsafeRaw.math.block`f(x, y) := cases(
    1 "if" (x dot y)/2 <= 0,
    2 "if" x "is even",
    3 "if" x in NN,
    4 "else",
  )`),
    m.lines(
      m.heading(1, 'Estado del arte'),
      inline`El nombre de esta sección es opcional. ${link('https://unir.net', inline`Aquí`)} tenemos un
enlace y una nota al pie ${footnote(inline`Ejemplo de pie de página`)}.`,
    ),
    m.heading(1, 'Material y métodos'),
    m.heading(1, 'Resultados y discusión'),
    inline`Como podemos ver en la ${ref(label('tabla:ejemplo'))}…`,
    inline(
      labelled(
        [
          figure(
            { caption: caption(inline`Hola imagen 3`, inline(link('https://typst.app'))) },
            table(
              { columns: 4, stroke: null },
              table.header(inline`Test Item`, inline`Specification`, inline`Test Result`, inline`Compliance`),
              inline`Voltage`,
              inline`220V ± 5%`,
              inline`218V`,
              inline`Pass`,
              inline`Current`,
              inline`5A ± 0.5A`,
              inline`4.2A`,
              inline`Fail`,
            ),
          ),
          space,
        ],
        label('tabla:ejemplo'),
      ),
    ),
    inline(lorem(10)),
    inline(
      figure(
        { kind: image, caption: caption(inline`Hola.`, inline`una fuente`) },
        rect(
          { height: cm(3) },
          inline`Los pies de figura o tabla deben de tener un punto final (de lo contrario no compila), ser de
una única frase y para indicar la fuente tenéis que usar la notación de: ${raw('Título figura. Fuente: mi fuente.')}.
Las fuentes también pueden ser una referencia bibliográfica.`,
        ),
      ),
      space,
      lorem(10),
      space,
      figure(
        { kind: image, caption: caption(inline`Hola.`, inline(ref(label('docker')))) },
        inline`Contenido imagen 2`,
      ),
      space,
      importPackage('@preview/mmdr:0.2.2', [mermaid]),
      space,
      lorem(10),
      space,
      miDiagramaDecl,
    ),
    inline(
      figure({ kind: image, caption: caption(inline`Hola.`, inline`una fuente`) }, miDiagrama),
      space,
      figure({ kind: image, caption: inline`Hola esto es una figura ${unsafeRaw.math`1/2`} x.` }, miDiagrama),
    ),
    m.lines(cdu.decl, spd.decl, fdp.decl),
    inline`Veamos la ${ref(label('tab:datos'))}`,
    inline(
      labelled(
        [
          figure(
            { caption: caption(inline`Probe results for design A.`, inline`fuente de los datos.`) },
            table(
              { columns: [auto, auto, fr(1)], stroke: { x: null } },
              table.header(inline`Tenure`, inline`Party`, inline`President`),
              inline`1949-1959`,
              spread(fdp(inline`Theodor Heuss`)),
              inline`1959-1969`,
              spread(cdu(inline`Heinrich Lübke`)),
              inline`1969-1974`,
              spread(spd(inline`Gustav Heinemann`)),
              inline`1974-1979`,
              spread(fdp(inline`Walter Scheel`)),
              inline`1979-1984`,
              spread(cdu(inline`Karl Carstens`)),
              inline`1984-1994`,
              spread(cdu(inline`Richard von Weizsäcker`)),
              inline`1994-1999`,
              spread(cdu(inline`Roman Herzog`)),
              inline`1999-2004`,
              spread(spd(inline`Johannes Rau`)),
              inline`2004-2010`,
              spread(cdu(inline`Horst Köhler`)),
              inline`2010-2012`,
              spread(cdu(inline`Christian Wulff`)),
              inline`2012-2017`,
              inline`n/a`,
              inline`Joachim Gauck`,
              inline`2017-`,
              spread(spd(inline`Frank-Walter-Steinmeier`)),
            ),
          ),
          space,
        ],
        label('tab:datos'),
      ),
    ),
    inline(lorem(10)),
    importPackage('@preview/tablem:0.3.0', [tablem, threeLineTable]),
    m.lines(
      show(table.cell, set(par, { leading: cm(0.3) })),
      inline(
        figure(
          {
            caption: caption(
              inline`Comparative overview of major scientific document composition systems.`,
              inline`Yo mismico.`,
            ),
          },
          threeLineTable(inline`${space}| System | Category | Compilation model | Unicode support | Font handling | | ${sym.dash.em}${sym.dash.em}${sym.dash.en}
| ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}-
| ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.en} | ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}-
| ${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}${sym.dash.em}
| | TeX | Typesetting engine | DVI → PDF | Limited | METAFONT | | pdfTeX | TeX engine | Direct
PDF | Partial | Type1 / limited OpenType | | XeTeX | TeX engine | Direct PDF | Full | OpenType
/ system fonts | | LuaTeX | TeX engine | Direct PDF | Full | OpenType | | LaTeX | Macro system
| Engine-dependent | Engine-dependent | Engine-dependent | | ConTeXt | TeX macro system | Engine-dependent
| Full (LuaTeX) | OpenType | | Typst | Markup typesetting system | Direct PDF | Full | Modern
font system | | Pandoc | Document converter | Multi-format | Full | Delegated to backend | |
Quarto | Scientific publishing framework | Multi-format | Full | Delegated to backend | | LyX
| Visual LaTeX editor | LaTeX backend | Engine-dependent | Engine-dependent | | Overleaf | Collaborative
platform | LaTeX backend | Engine-dependent | Engine-dependent | | Typst | Markup typesetting
system | Direct PDF | Full | Modern font system | | Pandoc | Document converter | Multi-format
| Full | Delegated to backend |${space}`),
        ),
      ),
    ),
    m.heading(2, 'Una subsección'),
    inline`${lorem(100)} asdasdfdf`,
    inline(link('http://apple.com', inline`apple`)),
    inline`${link('http://apple.com')} apple`,
    m.lines(m.heading(2, 'Otra subsección'), inline(lorem(100))),
    m.lines(
      m.heading(1, 'Conclusiones'),
      inline`Unas conclusiones que concuerdan con ${ref(label('typst-bibliography'))}.`,
    ),
    inline(bibliography(path('bibliografia.bib'))),
    show(anejos),
    m.lines(m.heading(1, 'Encuentas realizadas'), 'Unas encuestas.'),
  )
}
