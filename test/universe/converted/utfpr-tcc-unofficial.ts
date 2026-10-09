// Converted from test/universe/corpus/utfpr-tcc-unofficial.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  center,
  cite,
  define,
  doc,
  external,
  footnote,
  fr,
  image,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  let_,
  link,
  lorem,
  m,
  parbreak,
  path,
  pct,
  quote,
  ref,
  show,
  space,
  strong,
  sym,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cetz = external('cetz')
  const cetzPlot = external('cetz-plot')
  const template = external('template')
  const abstract = define('abstract').pos('arg1', T.content).returns(T.any).external()
  const abstractForeign = define('abstract-foreign').pos('arg1', T.content).returns(T.any).external()
  const dedication = define('dedication').pos('arg1', T.content).returns(T.any).external()
  const acknowledgments = define('acknowledgments').pos('arg1', T.content).returns(T.any).external()
  const epigraph = define('epigraph')
    .pos('arg1', T.content)
    .named('attribution', T.content, [])
    .returns(T.any)
    .external()
  const figure_2 = define('figure')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('kind', T.any, null)
    .named('note', T.content, [])
    .named('source', T.content, [])
    .returns(T.any)
    .external()
  const abntTable = define('abnt-table')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.content)
    .pos('arg4', T.content)
    .pos('arg5', T.content)
    .pos('arg6', T.content)
    .pos('arg7', T.any)
    .pos('arg8', T.content)
    .pos('arg9', T.content)
    .pos('arg10', T.content)
    .pos('arg11', T.content)
    .pos('arg12', T.any)
    .pos('arg13', T.content)
    .pos('arg14', T.content)
    .pos('arg15', T.content)
    .pos('arg16', T.content)
    .pos('arg17', T.any)
    .pos('arg18', T.content)
    .pos('arg19', T.content)
    .pos('arg20', T.content)
    .pos('arg21', T.content)
    .pos('arg22', T.any)
    .pos('arg23', T.content)
    .pos('arg24', T.content)
    .pos('arg25', T.content)
    .pos('arg26', T.content)
    .pos('arg27', T.any)
    .pos('arg28', T.content)
    .pos('arg29', T.content)
    .pos('arg30', T.content)
    .pos('arg31', T.content)
    .pos('arg32', T.any)
    .pos('arg33', T.content)
    .pos('arg34', T.content)
    .pos('arg35', T.content)
    .pos('arg36', T.content)
    .pos('arg37', T.any)
    .pos('arg38', T.content)
    .pos('arg39', T.content)
    .pos('arg40', T.content)
    .pos('arg41', T.content)
    .named('columns', T.any, null)
    .returns(T.any)
    .external()
  const appendix = define('appendix').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const annex = define('annex').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const template_with = define('with')
    .named('abbreviations', T.any, null)
    .named('author', T.content, [])
    .named('city', T.content, [])
    .named('description', T.content, [])
    .named('keywords', T.any, null)
    .named('keywords-foreign', T.any, null)
    .named('lang', T.any, null)
    .named('lang-foreign', T.any, null)
    .named('outline-figure', T.any, null)
    .named('outline-table', T.any, null)
    .named('symbols', T.any, null)
    .named('title', T.content, [])
    .named('title-foreign', T.content, [])
    .named('year', T.content, [])
    .returns(T.any)
    .external(template)
  const cetz_canvas = define('canvas').pos('arg1', T.any).returns(T.any).external(cetz)
  const [dataDecl, data_2] = let_('data', [
    { value: 12, label: 'Livros' },
    { value: 17, label: 'Anais' },
    { value: 25, label: 'Periódicos' },
  ])
  return doc(
    importPackage('@preview/utfpr-tcc-unofficial:0.1.0', [
      template,
      abstract,
      abstractForeign,
      dedication,
      acknowledgments,
      epigraph,
      figure_2,
      abntTable,
      appendix,
      annex,
    ]),
    m.lines(
      importPackage('@preview/cetz:0.4.2', cetz),
      importPackage('@preview/cetz-plot:0.1.3', cetzPlot),
      unsafeRaw.markup`#import cetz.draw: *`,
      unsafeRaw.markup`#import cetz-plot: *`,
    ),
    show(
      template_with({
        title: inline`${space}O título deve ser claro e preciso: subtítulo (se houver) deve ser precedido de dois
pontos confirmando sua vinculação ao título${space}`,
        titleForeign: inline`${space}Título traduzido título traduzido${space}`,
        lang: 'pt',
        langForeign: 'en',
        author: inline`NOME COMPLETO E POR EXTENSO DO(A) AUTOR(A)`,
        city: inline`CIDADE`,
        year: inline`ANO DA ENTREGA`,
        description: blocks(
          'Trabalho de conclusão de curso de graduação/Dissertação/Tese apresentada como requisito para obtenção do título de Bacharel/Licenciado/Tecnólogo/Mestre/Doutor em Nome do Curso/Programa da Universidade Tecnológica Federal do Paraná (UTFPR).',
          'Orientador(a): Nome completo e por extenso.',
          'Coorientador(a): Nome completo e por extenso.',
        ),
        keywords: [inline`palavra 1`, inline`palavra 2`, inline`palavra 3`, inline`palavra 4`],
        keywordsForeign: [inline`word 1`, inline`word 2`, inline`word 3`, inline`word 4`],
        outlineFigure: true,
        outlineTable: true,
        abbreviations: [
          inline`ABNT`,
          inline`Associação Brasileira de Normas Técnicas`,
          inline`IBGE`,
          inline`Instituto Brasileiro de Geografia e Estatística`,
          inline`NBR`,
          inline`Normas Brasileiras`,
          inline`UTFPR`,
          inline`Universidade Tecnológica Federal do Paraná`,
        ],
        symbols: [
          inline`Ca`,
          inline`Cálcio`,
          inline`Mg`,
          inline`Magnésio`,
          inline`T`,
          inline`Temperatura`,
          inline`V`,
          inline`Volume`,
          inline`P`,
          inline`Pressão`,
        ],
      }),
    ),
    inline(
      abstract(inline`${space}O resumo deve apresentar, de forma clara e objetiva, o conteúdo essencial do trabalho,
abordando a justificativa, os objetivos, a metodologia empregada, os principais resultados e
as conclusões. Deve ser escrito em um único parágrafo, com extensão entre 150 e 500 palavras,
evitando o uso de citações, fórmulas, equações ou símbolos. As palavras-chave e keywords devem
ser grafadas com inicial minúscula, exceto em casos de nomes próprios ou científicos.${space}`),
    ),
    inline(
      abstractForeign(inline`${space}A versão em língua estrangeira deve seguir o mesmo formato do resumo original, com a
tradução fiel do texto e da referência, quando houver.${space}`),
    ),
    inline(dedication(inline`${space}Dedico este trabalho à minha família, pelos momentos de ausência.${space}`)),
    inline(
      acknowledgments(
        blocks(
          'Reconheço que estas palavras não serão suficientes para mencionar todas as pessoas que contribuíram para esta etapa tão significativa da minha vida. Peço, portanto, desculpas àquelas que não estão citadas diretamente, mas que certamente fazem parte da minha lembrança e da minha gratidão.',
          'Expresso meus agradecimentos ao(à) Prof.(a) Dr.(a) [Nome Completo], meu(minha) orientador(a), pela orientação, paciência e conhecimento compartilhado ao longo deste percurso.',
          'Aos colegas de sala, pela convivência e troca de experiências.',
          'À Secretaria do Curso, pelo apoio e colaboração prestados.',
          'Registro, ainda, meu profundo reconhecimento à minha família, cujo incentivo e compreensão foram fundamentais para que eu pudesse alcançar este objetivo.',
          parbreak(),
        ),
      ),
    ),
    inline(
      epigraph(
        { attribution: inline(ref(label('candido2002formacao'))) },
        inline`A biblioteca é um jardim onde as ideias florescem e os frutos são colhidos pela eternidade.`,
      ),
    ),
    m.heading(1, 'Introdução'),
    'Introdução do texto, onde devem ser apresentados o tema, a definição dos limites do assunto abordado, os objetivos do estudo e demais informações necessárias para contextualizar o trabalho.',
    m.lines(m.heading(2, 'Seção secundária'), inline(lorem(20))),
    m.lines(m.heading(3, 'Seção terciária'), inline(lorem(20))),
    m.lines(m.heading(4, 'Seção quaternária'), inline(lorem(20))),
    m.lines(m.heading(5, 'Seção quinária'), inline(lorem(20))),
    m.heading(1, 'Desenvolvimento'),
    'Parte central do trabalho, onde o tema é apresentado de forma organizada e detalhada. Inclui a revisão teórica, estruturada em seções e subseções, a descrição dos materiais e métodos (ou metodologia) utilizados e a exposição dos resultados, descritos de maneira completa. Cada seção ou subseção deve possuir um título coerente com o conteúdo apresentado.',
    'O texto deve ser redigido sempre na terceira pessoa do singular, mantendo um tom impessoal.',
    m.lines(
      m.heading(2, 'Ilustrações'),
      inline`Consideram-se ilustrações: ${strong(inline`figuras`)}, ${strong(inline`quadros`)}, ${strong(inline`gráficos`)}
e ${strong(inline`fotografias`)}, que se diferenciam das ${strong(inline`tabelas`)}. Todas as
figuras precisam ser mencionadas e contextualizadas no texto, como demonstrado na referência
à ${ref(label('dimensoes'))}.`,
    ),
    inline(
      labelled(
        figure_2(
          {
            caption: inline`As dimensões pedagógicas da educação infantil`,
            source: inline(cite({ form: 'prose' }, label('azurva2020'))),
          },
          image({ width: pct(50) }, path('media/imagem1.png')),
        ),
        label('dimensoes'),
      ),
    ),
    'A seguir, vemos um modelo de formatação de fotografia:',
    inline(
      figure_2(
        {
          kind: 'photograph',
          caption: inline`Entrada da UTFPR Campus Ponta Grossa`,
          source: inline`Autoria própria (2025)`,
        },
        image({ width: pct(50) }, path('media/imagem2.png')),
      ),
    ),
    inline`A seguir, no ${ref(label('grafico'))}, um modelo de formatação de gráfico:`,
    dataDecl,
    inline(
      labelled(
        figure_2(
          {
            kind: 'graph',
            caption: inline`Empréstimos feitos em janeiro de 2019 nas bibliotecas da UTFPR`,
            source: inline(cite({ form: 'prose' }, label('utfpr2020'))),
          },
          cetz_canvas(unsafeRaw.code<any>`chart.piechart(
    data,
    value-key: "value",
    label-key: "label",
    slice-style: (gray, blue, orange),

    stroke: 0em,
    gap: 0.05,
    radius: 3,
    inner-label: (radius:1.5, content: "%"),
    outer-label: (content: none), 
  )`),
        ),
        label('grafico'),
      ),
    ),
    'A seguir, ilustra-se um modelo de formatação de quadros (prevalecem informações textuais).',
    inline(
      figure_2(
        {
          kind: 'frame',
          caption: inline`Campos de desenvolvimento de habilidades`,
          source: inline`${space}Fluery e Fleury (${cite({ form: 'year' }, label('fleury2018'))})`,
        },
        table(
          { columns: [fr(1), fr(2)], align: left },
          table.cell({ align: center }, inline(strong(inline`Áreas de desenvolvimento`))),
          table.cell({ align: center }, inline(strong(inline`Descrição`))),
          inline`${symbol('1')}. Competências sobre processos`,
          inline`Conhecimento nos processos de trabalho`,
          inline`${symbol('2')}. Competências técnicas`,
          inline`Conhecimento técnico nas tarefas a serem desempenhadas e tecnologias empregadas nestas tarefas`,
          inline`${symbol('3')}. Competências sobre a organização`,
          inline`Saber organizar os fluxos de trabalho`,
          inline`${symbol('4')}. Competências de serviço`,
          inline`Aliar as competências técnicas com o impacto que estas ações terão para o cliente consumidor`,
          inline`${symbol('5')}. Competências sociais`,
          inline`Atitudes que sustentam o comportamento do indivíduo: saber comunicar-se e responsabilizar-se
pelos seus atos.`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Tabelas'),
      inline`As tabelas distinguem-se dos quadros por não possuírem linhas de fechamento nas laterais. ${footnote(inline`${space}Para orientações gerais sobre a formatação de tabelas, consulte: IBGE (Instituto Brasileiro
de Geografia e Estatística). Normas de Apresentação Tabular. 3ª ed. Rio de Janeiro: IBGE, 1993.
Disponível em: ${link('http://biblioteca.ibge.gov.br/visualizacao/livros/liv23907.pdf')}${space}`)}`,
    ),
    inline(
      figure_2(
        {
          caption: inline`Desempenho de estudantes em conhecimentos específicos`,
          note: inline`As notas (quando existirem) devem ser exibidas antes da indicação da fonte de origem.`,
          source: inline(cite({ form: 'prose' }, label('inep2016'))),
        },
        abntTable(
          { columns: [fr(2), fr(1), fr(1), fr(1), fr(1)] },
          table.header(
            inline(strong(inline`Média`)),
            table.cell({ colspan: 2 }, inline(strong(inline`CEFET`))),
            table.cell({ colspan: 2 }, inline(strong(inline`BRASIL`))),
            table.cell({ align: left }, inline`Curso`),
            inline`concluintes`,
            inline`ingressantes`,
            inline`concluintes`,
            inline`ingressantes`,
          ),
          table.cell({ align: left }, inline`Matemática`),
          inline`27,8`,
          inline`22,5`,
          inline`27,1`,
          inline`22,4`,
          table.cell({ align: left }, inline`Letras`),
          inline`32,3`,
          inline`31,5`,
          inline`30,9`,
          inline`26,5`,
          table.cell({ align: left }, inline`Geografia`),
          inline`38,4`,
          inline`34,2`,
          inline`34,6`,
          inline`29,5`,
          table.cell({ align: left }, inline`Ciências Biológicas`),
          inline`26,4`,
          inline`23,6`,
          inline`26,6`,
          inline`21,9`,
          table.cell({ align: left }, inline`Matemática`),
          inline`27,8`,
          inline`22,5`,
          inline`27,1`,
          inline`22,4`,
          table.cell({ align: left }, inline`Letras`),
          inline`32,3`,
          inline`31,5`,
          inline`30,9`,
          inline`26,5`,
          table.cell({ align: left }, inline`Geografia`),
          inline`38,4`,
          inline`34,2`,
          inline`34,6`,
          inline`29,5`,
          table.cell({ align: left }, inline`Ciências Biológicas`),
          inline`26,4`,
          inline`23,6`,
          inline`26,6`,
          inline`21,9`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Citações'),
      'É fundamental nesta etapa a ética e a honestidade intelectual, atribuindo autoria a quem realmente contribuiu para o desenvolvimento do estudo em questão.',
    ),
    m.heading(3, 'Exemplos:'),
    m.list(
      { tight: false },
      m.item([
        'Citação direta curta: O autor, porém, recorda a análise pioneira de',
        space,
        cite({ form: 'prose', supplement: inline`p.${sym.space.nobreak}48` }, label('leonardbarton1998')),
        space,
        'sobre alguns',
        space,
        quote(inline`aspectos limitantes das competências, ou aptidões, essenciais, que as transformam em limitações
estratégicas`),
        '.',
      ]),
      m.item([
        'Citação direta curta: o autor lembra, contudo, a análise precursora sobre alguns',
        space,
        quote(
          { attribution: inline(ref(label('leonardbarton1998'))) },
          inline`${space}aspectos limitantes das competências, ou aptidões, essenciais, que as transformam em
limitações estratégicas`,
        ),
        '.',
      ]),
      m.item(['Citação direta longa (com mais de 3 linhas).']),
    ),
    inline(
      quote(
        { attribution: inline(ref(label('vonKrogh2001'))), block: true },
        inline`${space}O contexto capacitante não significa necessariamente um espaço físico. Em vez disso,
combina aspectos de espaço físico (como o projeto de um escritório ou operações de negócios
dispersas), espaço virtual (e-mail, Intranets, teleconferências) e espaço mental (experiências,
ideias e emoções compartilhadas). Acima de tudo, trata-se de uma rede de interações, determinada
pela solicitude e pela confiança dos participantes${space}`,
      ),
    ),
    m.heading(1, 'Conclusão (ou considerações finais)'),
    'Seção conclusiva do texto, destinada à apresentação dos resultados e reflexões finais do estudo, também comumente intitulada Considerações Finais.',
    inline(
      appendix(includeFile('assets/appendix1.typ'), inline`Roteiro de entrevista`),
      space,
      appendix(includeFile('assets/appendix2.typ'), inline`Questionário de pesquisa`),
      space,
      annex(includeFile('assets/annex1.typ'), inline`Lei n. 9.610, de 19 de fevereiro de 1998`),
    ),
    inline(bibliography(path('references.bib'))),
  )
}
