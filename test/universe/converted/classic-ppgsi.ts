// Converted from test/universe/corpus/classic-ppgsi.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  box,
  cm,
  define,
  doc,
  em,
  emph,
  external,
  h,
  image,
  importPackage,
  inches,
  inline,
  label,
  left,
  line,
  linebreak,
  lorem,
  m,
  path,
  pct,
  pt,
  raw,
  read,
  ref,
  show,
  smallcaps,
  smartquote,
  space,
  strong,
  sym,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const ppgsi = external('ppgsi')
  const ppgsi_thesis = define('thesis')
    .named('abstract', T.any, null)
    .named('acknowledgments', T.content, [])
    .named('acronyms', T.any, null)
    .named('advisor', T.content, [])
    .named('approval-text', T.content, [])
    .named('author', T.any, null)
    .named('bibliography', T.any, null)
    .named('catalog-card', T.any, null)
    .named('co-advisor', T.content, [])
    .named('committee', T.any, null)
    .named('date', T.any, null)
    .named('dedication', T.content, [])
    .named('epigraph', T.content, [])
    .named('errata', T.content, [])
    .named('location', T.any, null)
    .named('preamble', T.content, [])
    .named('symbols', T.any, null)
    .named('title', T.any, null)
    .named('title-en', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_table = define('table')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .named('align', T.any, null)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('source', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_myself = external('myself', ppgsi)
  const ppgsi_figure = define('figure')
    .pos('arg1', T.any)
    .named('caption', T.content, [])
    .named('source', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_frame = define('frame')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .named('align', T.any, null)
    .named('caption', T.content, [])
    .named('columns', T.any, null)
    .named('header', T.any, null)
    .named('source', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_prose = define('prose').pos('arg1', T.any).returns(T.any).external(ppgsi)
  const ppgsi_cite = define('cite').rest('args', T.any).returns(T.any).external(ppgsi)
  const ppgsi_quote = define('quote')
    .pos('arg1', T.content)
    .named('citation', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_algorithm = define('algorithm')
    .pos('arg1', T.content)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.any)
    .pos('arg8', T.content)
    .named('caption', T.content, [])
    .named('source', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_code = define('code')
    .pos('arg1', T.content)
    .named('caption', T.content, [])
    .named('source', T.any, null)
    .returns(T.any)
    .external(ppgsi)
  const ppgsi_references = define('references').returns(T.any).external(ppgsi)
  const ppgsi_appendix = external('appendix', ppgsi)
  const ppgsi_annex = external('annex', ppgsi)
  return doc(
    importPackage('@preview/classic-ppgsi:0.1.0', ppgsi),
    show(
      ppgsi_thesis.with({
        title: 'Título do trabalho: subtítulo do trabalho',
        titleEn: 'Work title: work subtitle',
        author: { given: 'Fulano de', surname: 'Tal' },
        location: 'São Paulo',
        date: '2015',
        bibliography: read(path('referencias.bib')),
        catalogCard: image({ width: pct(100), height: pct(100), fit: 'contain' }, path('assets/ficha-1.png')),
        preamble: blocks(
          'Versão original',
          'Dissertação apresentada à Escola de Artes, Ciências e Humanidades da Universidade de São Paulo para obtenção do título de Mestre em Ciências pelo Programa de Pós-graduação em Sistemas de Informação.',
          'Área de concentração: Metodologia e Técnicas da Computação',
          'Versão corrigida contendo as alterações solicitadas pela comissão julgadora em xx de xxxxxxxxxxxxxxx de xxxx. A versão original encontra-se em acervo reservado na Biblioteca da EACH-USP e na Biblioteca Digital de Teses e Dissertações da USP (BDTD), de acordo com a Resolução CoPGr 6018, de 13 de outubro de 2011.',
        ),
        advisor: inline`Orientador: Prof. Dr. Fulano de Tal`,
        coAdvisor: inline`Coorientador: Prof. Dr. Fulano de Tal`,
        errata: inline`Elemento opcional para versão corrigida, depois de depositada.`,
        approvalText: inline`${space}Dissertação de autoria de Fulano de Tal, sob o título ${strong(inline`"Título do trabalho: subtítulo do trabalho"`)},
apresentada à Escola de Artes, Ciências e Humanidades da Universidade de São Paulo, para obtenção
do título de Mestre em Ciências pelo Programa de Pós-graduação em Sistemas de Informação, na
área de concentração Metodologia e Técnicas da Computação, aprovada em ${h(em(0.3))}${box({ width: cm(0.85) }, line({ length: pct(100), stroke: pt(0.5) }))}${h(em(0.3))}
de ${h(em(0.3))}${box({ width: cm(3.5) }, line({ length: pct(100), stroke: pt(0.5) }))}${h(em(0.3))}
de ${h(em(0.3))}${box({ width: cm(1.25) }, line({ length: pct(100), stroke: pt(0.5) }))}${h(em(0.3))}
pela comissão julgadora constituída pelos doutores:${space}`,
        committee: [
          inline`Prof. Dr. ${linebreak()} Instituição ${linebreak()} Presidente`,
          inline`Prof. Dr. ${linebreak()} Instituição`,
          inline`Prof. Dr. ${linebreak()} Instituição`,
          inline`Prof. Dr. ${linebreak()} Instituição`,
          inline`Prof. Dr. ${linebreak()} Instituição`,
        ],
        dedication: inline`Escreva aqui sua dedicatória, se desejar, ou remova esta página...`,
        acknowledgments: blocks(inline(lorem(80)), inline(lorem(80)), inline(lorem(80))),
        epigraph: inline`"Escreva aqui uma epígrafe, se desejar, ou remova esta página..." ${linebreak()} (Autor da epígrafe)`,
        abstract: {
          ptBr: {
            body: inline`Escreva aqui o texto do seu resumo... (redigido em parágrafo único, no máximo em uma página,
contendo no "máximo 500 palavras", e apresentando um resumo de todos o seu trabalho, incluindo
objetivos, metodologia, resultados e conclusões; não inclua apenas a contextualização até chegar
nos objetivos, é importante fazer um resumo de todos os capítulos do texto, até chegar à conclusão).
${lorem(40)}`,
            keywords: ['Palavra1', 'Palavra2', 'Palavra3'],
          },
          enUs: {
            body: inline`Write here the English version of your "Resumo". ${lorem(70)}`,
            keywords: ['Keyword1', 'Keyword2', 'Keyword3'],
          },
        },
        acronyms: {
          abnt: { short: 'ABNT', long: 'Associação Brasileira de Normas Técnicas' },
          usp: { short: 'USP', long: 'Universidade de São Paulo' },
          each: { short: 'EACH', long: 'Escola de Artes, Ciências e Humanidades' },
          ppgsi: { short: 'PPgSI', long: 'Programa de Pós-Graduação em Sistemas de Informação' },
          svm: { short: 'SVM', long: 'máquina de vetores de suporte' },
          api: { short: 'API', long: 'interface de programação de aplicações' },
          http: { short: 'HTTP', long: 'protocolo de transferência de hipertexto' },
          sql: { short: 'SQL', long: 'linguagem de consulta estruturada' },
          json: { short: 'JSON', long: 'notação de objetos JavaScript' },
          xml: { short: 'XML', long: 'linguagem de marcação extensível' },
        },
        symbols: [
          [inline(unsafeRaw.math`Gamma`), inline`Letra grega Gama`],
          [inline(unsafeRaw.math`Lambda`), inline`Lambda`],
          [inline(unsafeRaw.math`zeta`), inline`Letra grega minúscula zeta`],
          [inline(unsafeRaw.math`in`), inline`Pertence`],
        ],
      }),
    ),
    m.heading(1, 'Introdução'),
    inline(lorem(60)),
    'A tabela 1 é um exemplo de como apresentar tabelas de acordo com essa norma. Veja mais detalhes no anexo A deste documento.',
    inline(
      ppgsi_table(
        {
          caption: inline`Exemplo de título de tabela`,
          source: ppgsi_myself,
          columns: [inches(1), inches(1), inches(1), inches(1)],
          align: left,
          header: [inline`Cabeçalho 1`, inline`Cabeçalho 2`, inline`Cabeçalho 3`, inline`Cabeçalho 4`],
        },
        [inline`Texto`, inline`número`, inline`número`, inline`número`],
        [inline`Texto`, inline`número`, inline`número`, inline`número`],
        [inline`Texto`, inline`número`, inline`número`, inline`número`],
        [inline`Texto`, inline`número`, inline`número`, inline`número`],
        [inline`Texto`, inline`número`, inline`número`, inline`número`],
      ),
    ),
    inline(lorem(30)),
    inline`A figura 1 é um exemplo de como apresentar ilustrações de acordo com essa norma. A figura 1
também apresenta um exemplo de como incluir como "Fonte" algo que foi elaborado pelo próprio
autor.`,
    inline(
      ppgsi_figure(
        { caption: inline`Exemplo de título de ilustração do tipo figura, incluindo como "Fonte:" o próprio autor` },
        image(path('assets/figura-exemplo.png')),
      ),
    ),
    inline(lorem(30)),
    'O quadro 1 é um exemplo de como apresentar quadros de acordo com essa norma. Observe as diferenças de formatação entre uma tabela (cf. tabela 1) e um quadro (cf. quadro 1).',
    inline(
      ppgsi_frame(
        {
          caption: inline`Exemplo de título de quadro`,
          source: ppgsi_myself,
          columns: [inches(1), inches(1), inches(1), inches(1)],
          align: left,
          header: [inline`Cabeçalho 1`, inline`Cabeçalho 2`, inline`Cabeçalho 3`, inline`Cabeçalho 4`],
        },
        [inline`Texto`, inline`texto`, inline`texto`, inline`texto`],
        [inline`Texto`, inline`texto`, inline`texto`, inline`texto`],
        [inline`Texto`, inline`texto`, inline`texto`, inline`texto`],
        [inline`Texto`, inline`texto`, inline`texto`, inline`texto`],
        [inline`Texto`, inline`texto`, inline`texto`, inline`texto`],
      ),
    ),
    m.heading(2, 'Uma seção secundária'),
    inline(lorem(40)),
    m.heading(3, 'Uma seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Outra seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Mais uma seção terciária'),
    inline(lorem(40)),
    inline`A figura 2 também apresenta um exemplo de como incluir em "Fonte:" uma citação para um trabalho
já publicado. Nesse caso, use sempre o "prose".`,
    inline(
      ppgsi_figure(
        {
          caption: inline`Exemplo de título de ilustração do tipo figura, que pode ser maior para apresentar mais explicações
sobre o conteúdo da figura, se for o caso; e com exemplo de citação a um trabalho já publicado,
seja do próprio autor ou de outro autor`,
          source: ppgsi_prose('teste3'),
        },
        image(path('assets/figura-exemplo.png')),
      ),
    ),
    m.heading(2, 'Outra seção secundária'),
    inline(lorem(40)),
    m.heading(2, 'Mais uma seção secundária'),
    inline(lorem(40)),
    m.heading(1, 'Outra seção primária'),
    inline(lorem(50)),
    'Atenção ao fazer citações a referências para garantir o uso da forma correta, considerando os seguintes exemplos:',
    m.list(
      m.item([
        'Se desejar que uma citação a uma referência apareça no final da frase, use com o comando',
        space,
        smartquote({ double: true }),
        'cite',
        smartquote({ double: true }),
        '. Exemplo:',
        space,
        smartquote({ double: true }),
        'Tal coisa é muito melhor do que aquela outra coisa',
        space,
        ppgsi_cite('teste1', 'teste2'),
        smartquote({ double: true }),
        '.',
      ]),
      m.item([
        'Se desejar que uma citação a uma referência apareça no meio da frase, como parte da própria frase, use o comando',
        space,
        smartquote({ double: true }),
        'prose',
        smartquote({ double: true }),
        '. Exemplo:',
        space,
        smartquote({ double: true }),
        'De acordo com',
        space,
        ppgsi_prose('teste3'),
        ', tal coisa é muito melhor do que aquela outra coisa.',
        smartquote({ double: true }),
      ]),
      m.item([
        strong(inline`Atenção`),
        space,
        '- nunca usar o comando',
        space,
        smartquote({ double: true }),
        'cite',
        smartquote({ double: true }),
        space,
        'para citações a referências que aparecem no meio da frase, como parte da própria frase. Exemplo - nunca fazer assim:',
        space,
        smartquote({ double: true }),
        'De acordo com',
        space,
        ppgsi_cite('teste3'),
        ', tal coisa é muito melhor do que aquela outra coisa.',
        smartquote({ double: true }),
      ]),
    ),
    'Citações diretas com mais de três linhas (citações longas) devem ser destacadas com recuo de 4 cm, fonte menor e espaçamento simples, sem aspas, com a citação ao final:',
    inline(ppgsi_quote({ citation: ppgsi_prose('teste3') }, inline(space, lorem(45), space))),
    'O algoritmo 1 é um exemplo de como apresentar ilustrações de acordo com essa norma.',
    inline(
      ppgsi_algorithm(
        {
          caption: inline`Exemplo de título de ilustração do tipo algoritmo, que pode ser maior para apresentar mais explicações
sobre o conteúdo do algoritmo, se for o caso`,
          source: ppgsi_myself,
        },
        inline(strong(inline`procedure`), space, smallcaps(inline`MyProcedure`)),
        unsafeRaw.math`#h(1em) p a s s o-1`,
        unsafeRaw.math`#h(1em) p a s s o-2`,
        unsafeRaw.math`#h(1em) p a s s o-3`,
        unsafeRaw.math`#h(1em) .`,
        unsafeRaw.math`#h(1em) .`,
        unsafeRaw.math`#h(1em) p a s s o-n`,
        inline(strong(inline`end procedure`)),
      ),
    ),
    m.heading(2, 'Uma seção secundária'),
    inline(lorem(40)),
    'As fórmulas 1 e 2 são exemplos de como apresentar fórmulas e equações destacadas do parágrafo normal do texto.',
    inline(unsafeRaw.math.block`X + Y = Z`),
    inline(unsafeRaw.math.block`(X - Y) \\/ 5 = n`),
    m.heading(3, 'Uma seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Outra seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Mais uma seção terciária'),
    inline(lorem(40)),
    m.heading(2, 'Outra seção secundária'),
    inline(lorem(40)),
    m.heading(2, 'Mais uma seção secundária'),
    inline(lorem(40)),
    m.heading(1, 'Mais uma seção primária'),
    inline(lorem(50)),
    m.heading(2, 'Uma seção secundária'),
    inline(lorem(40)),
    m.heading(3, 'Uma seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Outra seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Mais uma seção terciária'),
    inline(lorem(40)),
    m.heading(2, 'Outra seção secundária'),
    inline(lorem(40)),
    m.heading(2, 'Mais uma seção secundária'),
    inline(lorem(40)),
    m.heading(1, 'Mais uma outra seção primária'),
    inline(lorem(50)),
    m.heading(2, 'Uma seção secundária'),
    inline(lorem(40)),
    m.heading(3, 'Uma seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Outra seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Mais uma seção terciária'),
    inline(lorem(40)),
    m.heading(2, 'Outra seção secundária'),
    inline(lorem(40)),
    m.heading(2, 'Mais uma seção secundária'),
    inline(lorem(40)),
    m.heading(1, 'Recursos de visualização e código'),
    inline`Este capítulo demonstra a integração do modelo com pacotes do ecossistema Typst. As siglas são
gerenciadas pelo glossy: na primeira menção aparecem por extenso e, nas seguintes, apenas a
forma curta. Por exemplo, a ${ref(label('svm'))} é uma técnica de aprendizado supervisionado;
a ${ref(label('svm'))} também serve para regressão. Acesso a dados costuma envolver ${ref(label('api'))},
${ref(label('http'))} e ${ref(label('sql'))}.`,
    m.heading(2, 'Gráficos com lilaq'),
    'A figura 3 apresenta um gráfico de dados gerado com o pacote lilaq, embutido em uma figura comum do modelo (com legenda e linha de fonte normais).',
    inline(
      ppgsi_figure(
        { caption: inline`Exemplo de gráfico de dados gerado com lilaq`, source: ppgsi_myself },
        unsafeRaw.code<any>`ppgsi.lq.diagram(
    width: 9cm,
    height: 5.5cm,
    xlabel: $x$,
    ylabel: $y$,
    ppgsi.lq.plot((0, 1, 2, 3, 4, 5), (0, 1, 4, 9, 16, 25), mark: "o", label: [medições]),
  )`,
      ),
    ),
    m.heading(2, 'Diagramas com cetz'),
    'A figura 4 apresenta uma rede neural feedforward totalmente conectada, desenhada com cetz, o equivalente ao TikZ no Typst.',
    inline(
      ppgsi_figure(
        { caption: inline`Exemplo de rede neural feedforward desenhada com cetz`, source: ppgsi_myself },
        unsafeRaw.code<any>`ppgsi.cetz.canvas({
    import ppgsi.cetz.draw: *
    let sizes = (3, 5, 2)
    let labels = ([Entrada], [Camada oculta], [Saída])
    let fills = (rgb("#cfe3f7"), rgb("#ececec"), rgb("#d6efd6"))
    let xgap = 3.4
    let ygap = 1.1
    let r = 0.34
    let pos(l, i, n) = (l * xgap, (i - (n - 1) / 2) * ygap)
    // conexões (atrás dos neurônios)
    for l in range(sizes.len() - 1) {
      for i in range(sizes.at(l)) {
        for j in range(sizes.at(l + 1)) {
          line(pos(l, i, sizes.at(l)), pos(l + 1, j, sizes.at(l + 1)), stroke: 0.4pt + luma(65%))
        }
      }
    }
    // neurônios
    for l in range(sizes.len()) {
      for i in range(sizes.at(l)) {
        circle(pos(l, i, sizes.at(l)), radius: r, fill: fills.at(l), stroke: 0.6pt)
      }
    }
    // rótulos das camadas
    for l in range(sizes.len()) {
      content((l * xgap, -3.1), text(size: 9pt, labels.at(l)))
    }
  })`,
      ),
    ),
    m.heading(2, 'Listagens de código com codly'),
    'O código 1 é um exemplo de listagem de código-fonte, estilizada automaticamente pelo codly (numeração de linhas e realce de sintaxe).',
    inline(
      ppgsi_code(
        { caption: inline`Exemplo de listagem de código-fonte do tipo Código`, source: ppgsi_myself },
        inline(
          raw(
            { block: true, lang: 'python' },
            'def reconstruir(pontos):\n    """Reconstrução de superfície homeomórfica."""\n    malha = alpha_shape(pontos)\n    return malha.simplificar()',
          ),
        ),
      ),
    ),
    m.heading(2, 'Listas de verificação com cheq'),
    'Listas de tarefas podem ser escritas com a sintaxe de caixas de seleção do cheq:',
    m.list(
      m.item(['[x] Definir o problema de pesquisa']),
      m.item(['[x] Revisar a literatura']),
      m.item(['[/] Coletar os dados']),
      m.item(['[ ] Analisar os resultados']),
    ),
    m.heading(1, 'Conclusão'),
    inline(lorem(50)),
    m.heading(2, 'Uma seção secundária'),
    inline(lorem(40)),
    m.heading(3, 'Uma seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Outra seção terciária'),
    inline(lorem(40)),
    m.heading(3, 'Mais uma seção terciária'),
    inline(lorem(40)),
    m.heading(2, 'Outra seção secundária'),
    inline(lorem(40)),
    m.heading(2, 'Mais uma seção secundária'),
    inline(lorem(40)),
    inline(ppgsi_references()),
    inline(ppgsi_appendix),
    m.heading(1, 'Exemplo de apêndice'),
    inline(lorem(30)),
    m.heading(2, 'Exemplo de seção de apêndice não apresentada no sumário'),
    inline(lorem(30)),
    m.heading(3, 'Exemplo de subseção de apêndice não apresentada no sumário'),
    inline(lorem(30)),
    m.heading(1, 'Exemplo de apêndice'),
    inline(lorem(30)),
    m.heading(1, 'Exemplo de apêndice'),
    inline(lorem(30)),
    inline(ppgsi_annex),
    m.heading(1, 'Resumo das normas'),
    inline`Considerando a dificuldade para formatar um texto acadêmico sem conhecimento básico do conteúdo
da norma NBR 14724 "Informação e documentação -- Trabalhos acadêmicos -- Apresentação", este
anexo apresenta um resumo de alguns conceitos dessa norma, conforme publicada em julho de 2011.
Sugere-se a leitura completa da norma para garantir que seu documento seja completamente aderente
à mesma. Em alguns casos específicos, este anexo apresenta alguns ajustes da norma especificamente
para o PPgSI.`,
    m.heading(2, 'NBR 14724: estrutura e algumas descrições'),
    'A estrutura de uma tese, dissertação ou qualquer outro trabalho acadêmico, deve compreender elementos pré-textuais, elementos textuais e elementos pós-textuais, que aparecem no texto na seguinte ordem:',
    m.heading(3, 'Elementos pré-textuais'),
    m.list(
      m.item(['Capa (obrigatório)']),
      m.item(['Folha de rosto (obrigatório)']),
      m.item(['Errata (opcional)']),
      m.item(['Folha de aprovação (obrigatório)']),
      m.item(['Dedicatória (opcional)']),
      m.item(['Agradecimentos (opcional)']),
      m.item(['Epígrafe (opcional)']),
      m.item(['Resumo em língua vernácula (obrigatório)']),
      m.item(['Resumo em língua estrangeira (obrigatório)']),
      m.item(['Listas de ilustrações: lista de figuras, lista de algoritmos, lista de quadros etc. (opcional)']),
      m.item(['Lista de tabelas (opcional)']),
      m.item(['Lista de abreviaturas e siglas (opcional)']),
      m.item(['Lista de símbolos (opcional)']),
      m.item(['Sumário (obrigatório)']),
    ),
    m.heading(3, 'Elementos textuais'),
    m.list(m.item(['Introdução']), m.item(['Desenvolvimento']), m.item(['Conclusão'])),
    m.heading(3, 'Elementos pós-textuais'),
    m.list(
      m.item(['Referências (obrigatório)']),
      m.item(['Apêndice (opcional)']),
      m.item(['Anexo (opcional)']),
      m.item(['Glossário (opcional)']),
    ),
    m.heading(2, 'Definições relacionadas a elementos pré-textuais'),
    'A seguir, são apresentadas algumas definições contidas na norma relacionadas a elementos pré-textuais.',
    m.heading(3, 'Capa'),
    'Elemento obrigatório, para proteção externa e sobre o qual se imprimem informações que ajudam na identificação e uso do trabalho, na seguinte ordem:',
    m.enum(
      m.item(['Nome completo do autor: responsável intelectual do trabalho.']),
      m.item([
        'Título principal do trabalho: deve ser claro e preciso, identificando o seu conteúdo e possibilitando a indexação e recuperação da informação.',
      ]),
      m.item([
        'Subtítulo (se houver): deve ser evidenciada sua subordinação ao título principal, precedido de dois pontos (:).',
      ]),
      m.item([
        'Número do volume (obrigatório apenas se houver mais de um volume, de forma que deve constar em cada capa a especificação do respectivo volume).',
      ]),
      m.item(['Local (cidade) da instituição de apresentação.']),
      m.item(['Ano do depósito (entrega).']),
    ),
    m.heading(3, 'Folha de rosto (anverso)'),
    'Os elementos do anverso da folha de rosto devem figurar na seguinte ordem:',
    m.enum(
      m.item(['Nome completo do autor: responsável intelectual do trabalho.']),
      m.item([
        'Título principal do trabalho: deve ser claro e preciso, identificando o seu conteúdo e possibilitando a indexação e recuperação da informação.',
      ]),
      m.item([
        'Subtítulo (se houver): deve ser evidenciada sua subordinação ao título principal, precedido de dois pontos (:).',
      ]),
      m.item(['Número do volume (obrigatório apenas se houver mais de um volume).']),
      m.item([
        'Natureza (tese, dissertação e outros) e objetivo (aprovação em disciplina, grau pretendido e outros); nome da instituição a que é submetido; área de concentração.',
      ]),
      m.item(['Nome do orientador e, se houver, do co-orientador.']),
      m.item(['Local (cidade) da instituição de apresentação.']),
      m.item(['Ano de depósito (entrega).']),
    ),
    m.heading(3, 'Folha de rosto (verso)'),
    inline`No verso da folha de rosto deve constar a ficha catalográfica, conforme o Código de Catalogação
Anglo-Americano -- CCAA2.`,
    m.heading(3, 'Folha de aprovação'),
    'Elemento obrigatório, que contém autor, título por extenso e subtítulo, se houver, local e data de aprovação, nome e instituição dos membros componentes da banca examinadora.',
    m.heading(3, 'Dedicatória e agradecimentos'),
    'Elementos opcionais. Os agradecimentos devem ser dirigidos apenas àqueles que contribuíram de maneira relevante à elaboração do trabalho.',
    m.heading(3, 'Resumo na língua vernácula'),
    'Elemento obrigatório, que consiste na apresentação concisa dos pontos relevantes de um texto; constitui-se em uma sequência de frases concisas e objetivas, e não de uma simples enumeração de tópicos, não ultrapassando 500 palavras, seguido, logo abaixo, das palavras representativas do conteúdo do trabalho, isto é, palavras-chave e/ou descritores.',
    m.heading(3, 'Resumo em língua estrangeira'),
    'Elemento obrigatório, que consiste em uma versão do resumo em idioma de divulgação internacional (em inglês Abstract, em castelhano Resumen, em francês Résumé, por exemplo). Deve ser seguido das palavras representativas do conteúdo do trabalho, isto é, palavras-chave e/ou descritores, na respectiva língua estrangeira.',
    m.heading(3, 'Lista de figuras e lista de tabelas'),
    'Elementos opcionais, elaborados de acordo com a ordem apresentada no texto, com cada item acompanhado do respectivo número da página.',
    m.heading(3, 'Lista de abreviaturas e siglas'),
    'Elemento opcional. Consiste na relação alfabética das abreviaturas e siglas usadas no texto, seguidas das palavras ou expressões correspondentes grafadas por extenso.',
    m.heading(3, 'Lista de símbolos'),
    'Elemento opcional, elaborado de acordo com a ordem apresentada no texto, com o devido significado.',
    m.heading(3, 'Sumário'),
    'Elemento obrigatório, que consiste na enumeração das principais divisões (seções e outras partes do trabalho) dos elementos textuais e pós-textuais, na mesma ordem e grafia em que a matéria nele sucede, acompanhado do respectivo número da página.',
    m.heading(2, 'Definições relacionadas a elementos textuais'),
    'O autor deve criar quantas seções primárias (também chamadas informalmente de capítulos) desejar para tratar dos seguintes elementos textuais que são obrigatórios: introdução, desenvolvimento e conclusão. Normalmente, existe apenas uma seção primária para a introdução, uma ou mais seções primárias para o desenvolvimento, e apenas uma seção primária para a conclusão.',
    m.heading(2, 'Definições relacionadas a elementos pós-textuais'),
    'A seguir, são apresentadas algumas definições contidas na norma relacionadas a elementos pós-textuais.',
    m.heading(3, 'Apêndice'),
    inline`Elemento opcional, que consiste em um texto ou documento elaborado pelo próprio autor, a fim
de complementar sua argumentação, sem prejuízo da unidade nuclear do trabalho. Um apêndice deve
ser identificado por uma letra maiúscula, seguida por um hífen (entre caracteres de espaço),
seguido pelo respectivo título. Os apêndices devem ser identificados por letras consecutivas,
a partir da letra "A" (independentemente dos anexos).`,
    m.heading(3, 'Anexo'),
    inline`Elemento opcional, que consiste em um texto ou documento não elaborado pelo autor, a fim de
fundamentar, comprovar ou ilustrar a argumentação do autor. Um anexo deve ser identificado por
uma letra maiúscula, seguida por um hífen (entre caracteres de espaço), seguido pelo respectivo
título. Os anexos devem ser identificados por letras consecutivas, a partir da letra "A" (independentemente
dos apêndices).`,
    m.heading(3, 'Glossário'),
    'Elemento opcional, que consiste em uma lista em ordem alfabética de palavras ou de expressões técnicas de uso restrito ou de sentido obscuro, usadas no texto, acompanhadas das respectivas definições.',
    m.heading(2, 'Formas de apresentação'),
    'A seguir, são apresentadas algumas definições contidas na norma relacionadas a formas de apresentação em geral.',
    m.heading(3, 'Formato'),
    inline`O texto deve estar impresso em papel branco, formato A4 (21,0 cm 29,7 cm), apenas no anverso
da folha (ou seja, na "frente" da folha), excetuando-se a folha de rosto que deve estar impressa
tanto no anverso quanto no verso (com a ficha catalográfica).`,
    m.heading(3, 'Projeto gráfico'),
    'O projeto gráfico é de responsabilidade do autor.',
    m.heading(3, 'Fonte'),
    'Usar sempre cor preta.',
    'Usar sempre tamanho de fonte 12, com as seguintes exceções: tamanho de fonte 10 para citações longas (com mais de três linhas), notas de rodapé, legendas de ilustração e de tabela, fontes de ilustração e de tabela, números de página; e tamanho de fonte maiores para títulos de seção.',
    m.heading(3, 'Margens'),
    inline`Todas as folhas devem apresentar margens esquerda e superior de 3 cm; e margens direita e inferior
de 2 cm, considerando impressão apenas no anverso (ou seja, apenas na "frente").`,
    'Se a impressão precisar, por algum motivo especial, ser realizada em anverso e verso, neste caso, há que se configurar as margens de forma diferente, conforme detalhes da norma ABNT; por isso solicita-se não realizar impressão em frente e verso.',
    m.heading(3, 'Espaçamento entre linhas'),
    inline`Usar sempre espaçamento entre linhas de 1,5 linhas, com as seguintes exceções: espaçamento entre
linhas "simples" para citações longas (com mais de três linhas), notas de rodapé, referências,
resumos (em vernáculo e em língua estrangeira), legendas de ilustração e de tabela, fontes de
ilustração e de tabela, ficha catalográfica, natureza do trabalho, grau pretendido, nome da
instituição a que é submetido, e área de concentração; e espaçamento entre linhas "duplo" para
equações e fórmulas e para separação das referências entre si.`,
    'Os títulos das seções devem começar na margem superior da folha separados do texto que os sucede por um espaço em branco de 1,5 e, da mesma forma, os títulos das subseções devem ser separados do texto que os precede, ou que os sucede, por um espaço em branco de 1,5.',
    m.heading(3, 'Numeração das seções'),
    'O indicativo numérico de uma seção precede seu título, alinhado à esquerda, separado por um espaço de caractere. Nos títulos sem indicativo numérico, como lista de ilustrações, sumário, resumo, referências e outros, devem ser centralizados.',
    'Para evidenciar a sistematização do conteúdo do trabalho, deve-se adotar a numeração progressiva para as seções do texto. Os títulos das seções primárias (chamadas informalmente de capítulos), por serem as principais divisões do texto, devem iniciar em folha distinta. Títulos das seções e subseções devem ser destacados gradativamente, usando-se os recursos de negrito, itálico ou grifo e redondo, caixa alta ou versal.',
    m.heading(3, 'Paginação'),
    inline`Todas as folhas do trabalho, a partir da folha de rosto (desconsiderando a capa, mas considerando
a ficha catalográfica), devem ser contadas sequencialmente, mas não numeradas. A numeração é
colocada, a partir da primeira folha da dos elementos textuais (ou seja, a partir da "Introdução"),
em algarismos arábicos, no canto superior direito da folha, a 2 cm da borda superior, ficando
o último algarismo a 2 cm da borda direita da folha.`,
    'Havendo apêndices e/ou anexos, suas folhas devem ser numeradas de maneira contínua e sua paginação deve dar seguimento à do texto principal, em algarismos arábicos.',
    'No caso de o trabalho ser constituído de mais de um volume, deve-se manter uma única sequência de numeração das folhas, do primeiro ao último volume.',
    m.heading(3, 'Equações e fórmulas'),
    'Equações e fórmulas devem aparecer destacadas no texto, para facilitar sua leitura.',
    'Se as equações e fórmulas forem apresentadas na sequência normal do texto (ou seja, dentro do próprio parágrafo normal de texto), é permitido usar um espaçamento entre linhas duplo para comportar seus elementos (ou seja, expoentes, índices e outros).',
    'Se as equações e fórmulas forem apresentadas fora do parágrafo, então elas devem ser centralizadas e, se necessário, devem ser numeradas. Quando fragmentadas em mais de uma linha, por falta de espaço, devem ser interrompidas antes do sinal de igualdade ou depois dos sinais de adição, subtração, multiplicação e divisão.',
    m.heading(3, 'Ilustrações'),
    'Cada tipo de ilustração (tais como figura, gráfico, algoritmo, fotografia, quadro, esquema, desenhos, esquemas, fluxogramas, mapa, organograma, planta, retrato, entre outros) tem numeração independente e consecutiva.',
    'Inserir a ilustração o mais próximo possível do parágrafo em que ela é citada pela primeira vez no texto; nunca inserir uma ilustração antes de ela ser citada pela primeira vez no texto. Toda ilustração inserida no trabalho deve ser citada pelo menos uma vez no texto.',
    inline`Qualquer que seja o tipo da ilustração, ela deve obrigatoriamente ter uma identificação (ou
seja, um título), que deve aparecer sempre na parte superior da ilustração, precedida pela palavra
que identifica seu tipo, por exemplo "Figura", seguida de seu número de ordem de ocorrência
no texto em algarismo arábico, e de um hífen entre caracteres de espaço (" -- "), em fonte com
tamanho 12, sem negrito, sem itálico, com apenas a primeira letra da sentença maiúscula, sem
ponto final, e em espaçamento simples. Exemplo: "Figura 1 -- Título da ilustração".`,
    inline`Para toda ilustração, deve ser apresentada também obrigatoriamente sua fonte (mesmo quando a
fonte é o próprio autor do trabalho). A fonte deve apresentada na parte inferior da ilustração
e ser informada no seguinte formato: palavra "Fonte", seguida pelo caractere dois pontos ":",
seguido por um caractere de espaço, seguido pela citação de onde a ilustração foi obtida (conforme
regras de citação da norma ABNT) ou seguido pelo nome completo do autor do trabalho, por uma
vírgula e pelo ano de elaboração do trabalho, em fonte com tamanho 10, sem negrito, sem itálico,
sem ponto final, e em espaçamento simples.`,
    m.heading(3, 'Tabelas'),
    'As tabelas têm numeração independente e consecutiva das ilustrações.',
    'Inserir a tabela o mais próximo possível do parágrafo em que ela é citada pela primeira vez no texto; nunca inserir uma tabela antes de ela ser citada pela primeira vez no texto. Toda tabela inserida no trabalho deve ser citada pelo menos uma vez no texto.',
    'Usar traços horizontais apenas para delimitar o cabeçalho da tabela e o início e o fim da tabela. Não usar traços horizontais para separar cada linha de conteúdo da tabela e também não usar traços verticais para separar cada coluna de conteúdo da tabela.',
    inline`Não confundir "tabela" com "quadro". Uma tabela deve ter dados numéricos como informação central.
Outros tipos de organização de informações devem ser apresentados em quadros, que é um dos tipos
de ilustração. A formatação de um quadro é muito parecida a de uma tabela, porém todos os traços
horizontais e verticais devem ser apresentados.`,
    m.heading(2, 'Outras normas'),
    m.heading(3, 'Seções'),
    inline`As seções primárias são as principais divisões do texto, denominadas informalmente de "capítulos".
As seções primárias podem ser divididas em seções secundárias; e as secundárias em terciárias,
em formatação distinta. Não divida o texto mais do que a terceira ordem; ou seja, evite criar
seções de profundidade quatro ou cinco.`,
    inline`Todos títulos, de todas as seções, de todos os níveis, devem ter sempre tamanho 12. O que muda
é a formatação, conforme segue abaixo. A formatação adotada para este ${emph(inline`template`)}
em particular é a seguinte:`,
    m.list(
      m.item(['Seções primárias:', space, strong(inline`negrito`), '.']),
      m.item(['Seções secundárias:', space, emph(inline`itálico`), '.']),
      m.item(['Seções terciárias: regular.']),
      m.item(['Seções quartenárias: [não usar].']),
      m.item(['Seções quinárias: [não usar].']),
    ),
    inline`São empregados algarismos arábicos na numeração. O "indicativo" de uma seção precede o título
ou a primeira palavra do texto, se não houver título, separado por um espaço.`,
    m.heading(3, 'Referências bibliográficas e citações às referências bibliográficas'),
    'A norma é bastante complexa e extensa em relação às regras de referências bibliográficas e citações às referências bibliográficas, não sendo possível fazer um resumo aqui. Assim, é necessário fazer uma consulta às normas detalhadas.',
    'As referências devem ser apresentadas em ordem alfabética, com as citações no texto obedecendo ao sistema autor-data. Todos os documentos relacionados nas Referências devem ser citados no texto, assim como todas as citações do texto devem constar nas Referências.',
    m.heading(1, 'Exemplo de anexo'),
    inline(lorem(30)),
    m.heading(1, 'Exemplo de anexo'),
    inline(lorem(30)),
  )
}
