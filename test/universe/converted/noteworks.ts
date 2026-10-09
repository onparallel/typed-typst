// Converted from test/universe/corpus/noteworks.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  calc,
  cm,
  codeBlock,
  data,
  define,
  deg,
  dict,
  doc,
  em,
  external,
  fr,
  grid,
  importPackage,
  inline,
  let_,
  m,
  minus,
  neg,
  raw,
  show,
  smartquote,
  space,
  strong,
  sym,
  times,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const noteworthy = external('noteworthy')
  const cover = define('cover').returns(T.any).external()
  const preface = define('preface').pos('arg1', T.content).returns(T.any).external()
  const toc = define('toc').returns(T.any).external()
  const chapter = define('chapter').pos('arg1', T.any).named('summary', T.any, null).returns(T.any).external()
  const page_2 = define('page').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const definition = define('definition').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const note = define('note').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const notation = define('notation').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const example = define('example').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const equation = define('equation').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const analysis = define('analysis').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const proof = define('proof').rest('args', T.any).returns(T.any).external()
  const solution = define('solution').pos('arg1', T.content).returns(T.any).external()
  const canvas = external('canvas')
  const shape = external('shape')
  const graph = external('graph')
  const data_2 = external('data')
  const combi = external('combi')
  const trees = external('trees')
  const dsa = external('dsa')
  const timeline = external('timeline')
  const noteworthy_with = define('with')
    .named('affiliation', T.any, null)
    .named('authors', T.any, null)
    .named('subtitle', T.any, null)
    .named('theme', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(noteworthy)
  const canvas_cartesianCanvas = define('cartesian-canvas')
    .rest('args', T.any)
    .named('height', T.any, null)
    .named('width', T.any, null)
    .named('x-label', T.any, null)
    .named('x-tick', T.any, null)
    .named('y-label', T.any, null)
    .named('y-tick', T.any, null)
    .returns(T.any)
    .external(canvas)
  const shape_point = define('point')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .named('label-anchor', T.any, null)
    .named('z', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_line = define('line')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .named('label-anchor', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_segment = define('segment').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(shape)
  const shape_circle = define('circle')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('label-anchor', T.any, null)
    .named('radius', T.any, null)
    .named('through', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_polygon = define('polygon')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('label', T.any, null)
    .named('label-anchor', T.any, null)
    .returns(T.any)
    .external(shape)
  const canvas_blankCanvas = define('blank-canvas')
    .rest('args', T.any)
    .named('height', T.any, null)
    .named('length', T.any, null)
    .named('width', T.any, null)
    .named('x-tick', T.any, null)
    .named('y-tick', T.any, null)
    .returns(T.any)
    .external(canvas)
  const shape_regularPolygon = define('regular-polygon')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_arc = define('arc')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .returns(T.any)
    .external(shape)
  const shape_pointAtAngle = define('point-at-angle')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('from', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_angle = define('angle')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_semicircle = define('semicircle').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(shape)
  const shape_intersectLl = define('intersect-ll')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_intersectLc = define('intersect-lc')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('labels', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_midpoint = define('midpoint')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .named('label-anchor', T.any, null)
    .returns(T.any)
    .external(shape)
  const shape_perpendicular = define('perpendicular')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .returns(T.any)
    .external(shape)
  const shape_parallel = define('parallel').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(shape)
  const graph_graph = define('graph')
    .pos('arg1', T.any)
    .named('domain', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(graph)
  const canvas_trigCanvas = define('trig-canvas')
    .rest('args', T.any)
    .named('width', T.any, null)
    .returns(T.any)
    .external(canvas)
  const graph_parametric = define('parametric')
    .pos('arg1', T.any)
    .named('domain', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(graph)
  const graph_vec = define('vec')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('origin', T.any, null)
    .returns(T.any)
    .external(graph)
  const graph_vecAdd = define('vec-add')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('helplines', T.any, null)
    .returns(T.any)
    .external(graph)
  const graph_vecComponents = define('vec-components')
    .pos('arg1', T.any)
    .named('helplines', T.any, null)
    .named('labels', T.any, null)
    .returns(T.any)
    .external(graph)
  const graph_vecProject = define('vec-project')
    .pos('arg1', T.any)
    .named('helplines', T.any, null)
    .named('onto', T.any, null)
    .returns(T.any)
    .external(graph)
  const canvas_graphCanvas = define('graph-canvas')
    .pos('arg1', T.any)
    .named('height', T.any, null)
    .named('width', T.any, null)
    .returns(T.any)
    .external(canvas)
  const canvas_polarCanvas = define('polar-canvas')
    .pos('arg1', T.any)
    .named('width', T.any, null)
    .returns(T.any)
    .external(canvas)
  const graph_polarFunc = define('polar-func')
    .pos('arg1', T.any)
    .named('domain', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(graph)
  const canvas_spaceCanvas = define('space-canvas')
    .rest('args', T.any)
    .named('width', T.any, null)
    .returns(T.any)
    .external(canvas)
  const data_tablePlot = define('table-plot')
    .named('data', T.any, null)
    .named('headers', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_valueTable = define('value-table')
    .named('func', T.any, null)
    .named('results', T.any, null)
    .named('values', T.any, null)
    .named('variable', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_gridTable = define('grid-table')
    .named('data', T.any, null)
    .named('show-indices', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_compactTable = define('compact-table')
    .named('data', T.any, null)
    .named('headers', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_dataSeries = define('data-series')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_curveThrough = define('curve-through')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('tension', T.any, null)
    .returns(T.any)
    .external(data_2)
  const data_smoothCurve = define('smooth-curve')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .returns(T.any)
    .external(data_2)
  const combi_linearPerm = define('linear-perm')
    .pos('arg1', T.any)
    .named('highlight', T.any, null)
    .returns(T.any)
    .external(combi)
  const combi_permutation = define('permutation')
    .pos('arg1', T.any)
    .named('labels', T.any, null)
    .returns(T.any)
    .external(combi)
  const combi_circularPerm = define('circular-perm')
    .pos('arg1', T.any)
    .named('radius', T.any, null)
    .returns(T.any)
    .external(combi)
  const combi_ballsBoxes = define('balls-boxes')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('balls-identical', T.any, null)
    .named('distribution', T.any, null)
    .returns(T.any)
    .external(combi)
  const combi_subsetVis = define('subset-vis')
    .pos('arg1', T.any)
    .named('subset', T.any, null)
    .returns(T.any)
    .external(combi)
  const combi_countingTree = define('counting-tree').pos('arg1', T.any).returns(T.any).external(combi)
  const combi_partitionVis = define('partition-vis').pos('arg1', T.any).returns(T.any).external(combi)
  const combi_pigeonhole = define('pigeonhole').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(combi)
  const trees_treeNode = define('tree-node')
    .pos('arg1', T.any)
    .named('children', T.any, null)
    .returns(T.any)
    .external(trees)
  const trees_tree = define('tree')
    .pos('arg1', T.any)
    .named('direction', T.any, null)
    .named('highlight-items', T.any, null)
    .named('highlight-path', T.any, null)
    .returns(T.any)
    .external(trees)
  const dsa_csArray = define('cs-array')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('separators', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_csStack = define('cs-stack')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('outgoing', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_csQueue = define('cs-queue')
    .pos('arg1', T.any)
    .named('incoming', T.any, null)
    .named('label', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_csLinkedList = define('cs-linked-list')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('pointers', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_graphNode = define('graph-node').pos('arg1', T.any).returns(T.any).external(dsa)
  const dsa_graphEdge = define('graph-edge')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('directed', T.any, null)
    .named('weight', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_freeGraph = define('free-graph')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('style', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_gridWorld = define('grid-world')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('label', T.any, null)
    .named('path', T.any, null)
    .named('start', T.any, null)
    .named('target', T.any, null)
    .named('walls', T.any, null)
    .returns(T.any)
    .external(dsa)
  const dsa_adjacencyMatrix = define('adjacency-matrix')
    .pos('arg1', T.any)
    .named('label', T.any, null)
    .named('labels', T.any, null)
    .returns(T.any)
    .external(dsa)
  const timeline_timelineFigure = define('timeline-figure')
    .pos('arg1', T.any)
    .named('direction', T.any, null)
    .returns(T.any)
    .external(timeline)
  const timeline_event = define('event')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('description', T.any, null)
    .named('highlight', T.any, null)
    .returns(T.any)
    .external(timeline)
  const [ADecl, A] = let_('A', shape_point({ label: 'A', labelAnchor: 'south-east' }, 0, 0))
  const [BDecl, B] = let_('B', shape_point({ label: 'B', labelAnchor: 'south-east' }, 4, 0))
  const [CDecl, C] = let_('C', shape_point({ label: 'C', labelAnchor: 'north' }, 2, 3))
  const [ODecl, O] = let_('O', shape_point({ label: 'O', labelAnchor: 'south' }, 0, 0))
  const [ODecl_2, O_2] = let_('O', shape_point({ label: 'O', labelAnchor: 'south' }, 1, 1))
  const [PDecl, P] = let_('P', shape_point({ label: 'P', labelAnchor: 'west' }, 3, 2))
  const [ADecl_2, A_2] = let_('A', shape_point({ label: 'A', labelAnchor: 'south-west' }, 0, 0))
  const [BDecl_2, B_2] = let_('B', shape_point({ label: 'B', labelAnchor: 'south-east' }, 4, 0))
  const [CDecl_2, C_2] = let_('C', shape_point({ label: 'C', labelAnchor: 'north-east' }, 4, 3))
  const [DDecl, D] = let_('D', shape_point({ label: 'D', labelAnchor: 'north-west' }, 0, 3))
  const [ODecl_3, O_3] = let_('O', shape_point({ label: 'O', labelAnchor: 'south' }, 0, 0))
  const [ADecl_3, A_3] = let_('A', shape_point({ label: 'A', labelAnchor: 'east' }, 2, 0))
  const [BDecl_3, B_3] = let_('B', shape_point({ label: 'B', labelAnchor: 'north' }, 0, 2))
  const [ODecl_4, O_4] = let_('O', shape_point({ label: 'O' }, 0, 0))
  const [ADecl_4, A_4] = let_('A', shape_point({ label: 'A' }, 2, 0))
  const [BDecl_4, B_4] = let_('B', shape_pointAtAngle({ from: A_4, label: 'B' }, O_4, deg(67), 2))
  const [ODecl_5, O_5] = let_('O', shape_point({ label: 'O' }, 0, 0))
  const [ADecl_5, A_5] = let_('A', shape_point({ label: 'A' }, 3, 0))
  const [BDecl_5, B_5] = let_('B', shape_point({ label: 'B' }, 2, 2))
  const [l1Decl, l1] = let_(
    'l1',
    shape_line({ label: unsafeRaw.math`ell_1`, labelAnchor: 'south' }, shape_point(-2, -1), shape_point(3, 2)),
  )
  const [l2Decl, l2] = let_(
    'l2',
    shape_line({ label: unsafeRaw.math`ell_2`, labelAnchor: 'west' }, shape_point(-1, 3), shape_point(2, -2)),
  )
  const [cDecl, c] = let_('c', shape_circle({ radius: 2 }, shape_point(0, 0)))
  const [lDecl, l] = let_('l', shape_line(shape_point(-3, 1), shape_point(3, 1)))
  const [ADecl_6, A_6] = let_('A', shape_point({ label: 'A', labelAnchor: 'south-west' }, 1, 1))
  const [BDecl_6, B_6] = let_('B', shape_point({ label: 'B', labelAnchor: 'north-east' }, 5, 3))
  const [lDecl_2, l_2] = let_(
    'l',
    shape_line({ label: unsafeRaw.math`ell`, labelAnchor: 'south' }, shape_point(0, 0), shape_point(4, 2)),
  )
  const [PDecl_2, P_2] = let_('P', shape_point({ label: 'P', labelAnchor: 'east' }, 1, 3))
  const [myTreeNodeDecl, myTreeNode] = let_(
    'my-tree-node',
    trees_treeNode(
      {
        children: [
          trees_treeNode({ children: [trees_treeNode('A1'), trees_treeNode('A2')] }, 'A'),
          trees_treeNode({ children: [trees_treeNode('B1')] }, 'B'),
          trees_treeNode('C'),
        ],
      },
      'Root',
    ),
  )
  const [fsTreeDecl, fsTree] = let_(
    'fs-tree',
    trees_treeNode(
      {
        children: [
          trees_treeNode({ children: [trees_treeNode('ls'), trees_treeNode('pwd')] }, 'bin'),
          trees_treeNode({ children: [trees_treeNode('local'), trees_treeNode('lib')] }, 'usr'),
          trees_treeNode('home'),
        ],
      },
      '/',
    ),
  )
  const [pathTreeDecl, pathTree] = let_(
    'path-tree',
    trees_treeNode(
      {
        children: [
          trees_treeNode(
            {
              children: [
                trees_treeNode('Option A'),
                trees_treeNode({ children: [trees_treeNode('Goal')] }, 'Option B'),
              ],
            },
            'Step 1',
          ),
          trees_treeNode('Step 2'),
        ],
      },
      'Start',
    ),
  )
  const [nodesDecl, nodes] = let_('nodes', data([dsa_graphNode('A'), dsa_graphNode('B'), dsa_graphNode('C')]))
  const [edgesDecl, edges] = let_(
    'edges',
    data([
      dsa_graphEdge({ weight: 5, directed: true }, 'A', 'B'),
      dsa_graphEdge({ weight: 3, directed: true }, 'B', 'C'),
      dsa_graphEdge({ weight: 2, directed: true }, 'C', 'A'),
    ]),
  )
  return doc(
    importPackage('@preview/noteworks:0.2.0', [
      noteworthy,
      cover,
      preface,
      toc,
      chapter,
      page_2,
      definition,
      note,
      theorem,
      notation,
      example,
      equation,
      analysis,
      proof,
      solution,
      canvas,
      shape,
      graph,
      data_2,
      combi,
      trees,
      dsa,
      timeline,
    ]),
    show(
      noteworthy_with({
        title: 'Noteworthy Framework',
        subtitle: 'Examples & Documentation',
        authors: ['Lee Sihoo', 'Lee Hojun'],
        affiliation: 'Noteworthy',
        theme: 'aether',
      }),
    ),
    inline(cover()),
    inline(
      preface(
        blocks(
          inline`Welcome to the ${strong(inline`Noteworthy Framework`)}. This document serves as both a demonstration
of the framework's capabilities and a reference for its features.`,
          inline(v(em(1.5))),
          m.heading(1, 'About Noteworthy'),
          inline(v(em(0.5))),
          'Noteworthy is a modular framework for creating beautiful educational documents in Typst. It provides a comprehensive set of tools for:',
          m.list(
            m.item([strong(inline`Structured Layouts`), ': Automated chapters, sections, and covers.']),
            m.item([
              strong(inline`Themed Components`),
              ': Pre-styled blocks for definitions, theorems, examples, and more.',
            ]),
            m.item([strong(inline`Advanced Plotting`), ': Integrated 2D and 3D plotting capabilities.']),
            m.item([strong(inline`Customizable Themes`), ': A robust theming engine with multiple built-in presets.']),
          ),
          inline(v(em(1.5))),
          m.heading(1, 'Using This Guide'),
          inline(v(em(0.5))),
          inline`Each section of this document demonstrates a specific module of the framework. The source of
every page in this book lives right here in ${raw('main.typ')}, which serves as a practical
reference for your own documents.`,
        ),
      ),
    ),
    inline(toc()),
    inline(
      chapter(
        { summary: "Understanding Noteworthy's modular structure and file organization." },
        'Architecture & Modules',
      ),
      space,
      page_2(
        'Introduction',
        blocks(
          m.heading(1, 'Welcome to Noteworthy'),
          'Noteworthy is a powerful Typst framework for creating beautiful educational documents with rich content blocks and visualization tools.',
          m.lines(
            m.heading(2, 'What is Noteworthy?'),
            inline(
              definition(
                'Noteworthy',
                inline`${space}A modular Typst template system designed for creating professional educational materials,
textbooks, and technical documentation.${space}`,
              ),
            ),
          ),
          m.heading(2, 'Key Features'),
          inline(
            note(
              'Modular Architecture',
              blocks(
                'Noteworthy is organized into modules, each handling a specific aspect of document creation:',
                m.list(
                  m.item([
                    strong(inline`Block`),
                    space,
                    '— Semantic content containers (definitions, theorems, proofs)',
                  ]),
                  m.item([strong(inline`Cover`), space, '— Document covers and title pages']),
                  m.item([strong(inline`Layout`), space, '— Page layouts and table of contents']),
                  m.item([strong(inline`Shape`), space, '— 2D geometric primitives (points, lines, circles)']),
                  m.item([strong(inline`Graph`), space, '— Functions, vectors, and calculus operations']),
                  m.item([strong(inline`Canvas`), space, '— Rendering canvases for plots and visualizations']),
                  m.item([strong(inline`Data`), space, '— Tables, data series, and curve interpolation']),
                  m.item([strong(inline`Combi`), space, '— Combinatorics visualizations']),
                  m.item([strong(inline`DSA`), space, '— Data structures and algorithms']),
                  m.item([strong(inline`Trees`), space, '— Hierarchical data structures']),
                  m.item([strong(inline`Timeline`), space, '— Chronological event timelines']),
                ),
              ),
            ),
          ),
          m.heading(2, 'How to Use This Guide'),
          inline`This documentation is organized by module — each chapter of this book demonstrates one module.
The table of contents mirrors the ${raw('#chapter')} and ${raw('#page')} declarations in ${raw('main.typ')}.`,
          inline(
            theorem(
              'Getting Started',
              inline`${space}Everything in this book comes from one import at the top of ${raw('main.typ')}: ${raw({ block: true, lang: 'typst' }, '#import "@preview/noteworks:0.2.0": *')}
This single import gives you access to all modules. If you split pages out into separate files,
start each file with the same import.${space}`,
            ),
          ),
        ),
      ),
      space,
      page_2(
        'File Structure',
        blocks(
          m.heading(1, 'File Structure'),
          'Understanding the project layout helps you navigate and extend Noteworthy.',
          m.heading(2, 'Project Root'),
          inline(notation('Directory Legend', blocks(m.list(m.item(['📁 = Directory']), m.item(['📄 = File']))))),
          inline(
            raw({ block: true }, 'my-notes/\n└── 📄 main.typ          # Your whole book: config, structure, pages'),
          ),
          inline`The scaffold is a single file — this entire demo book lives in ${raw('main.typ')}. As your notes
grow, split pages out into their own files and ${raw('#include')} them:`,
          inline(
            raw(
              { block: true },
              'my-notes/\n├── 📄 main.typ          # Config + structure\n└── 📁 content/          # One file per page\n    └── 1/, 2/...        # One folder per chapter',
            ),
          ),
          inline`Every file that uses Noteworthy features imports the package; configuration lives in the ${raw('#show: noteworthy.with(...)')}
rule in ${raw('main.typ')}.`,
          m.heading(2, 'Inside the Package'),
          inline`The package itself (${raw('@preview/noteworks')}) is organized as:`,
          inline(
            definition(
              'templater.typ',
              inline`${space}The single entry point that re-exports all modules. Importing the package gives you
everything.${space}`,
            ),
          ),
          inline(
            definition(
              'core/',
              blocks(
                m.lines(
                  'Core utilities shared across all modules:',
                  m.list(
                    m.item([raw('setup.typ'), space, '— Configuration state and theme access']),
                    m.item([raw('init.typ'), space, '— The', space, raw('noteworthy'), space, 'show rule']),
                    m.item([raw('scheme.typ'), space, '— Color scheme management']),
                    m.item([
                      raw('book.typ'),
                      space,
                      '— Document assembly:',
                      space,
                      raw('#chapter'),
                      space,
                      'and',
                      space,
                      raw('#page'),
                    ]),
                  ),
                ),
              ),
            ),
          ),
          inline(
            definition(
              'module/',
              blocks(
                m.lines(
                  inline`Feature modules, each in its own folder with a ${raw('mod.typ')} entry point:`,
                  m.list(
                    m.item([
                      raw('core/block/'),
                      ',',
                      space,
                      raw('core/cover/'),
                      ',',
                      space,
                      raw('core/layout/'),
                      space,
                      '— Always enabled',
                    ]),
                    m.item([
                      raw('canvas/'),
                      ',',
                      space,
                      raw('combi/'),
                      ',',
                      space,
                      raw('data/'),
                      ',',
                      space,
                      raw('dsa/'),
                      ',',
                      space,
                      raw('graph/'),
                      ',',
                      space,
                      raw('shape/'),
                      ',',
                      space,
                      raw('timeline/'),
                      ',',
                      space,
                      raw('trees/'),
                      space,
                      '— Optional, imported as qualified namespaces (e.g.',
                      space,
                      raw('canvas.cartesian-canvas'),
                      ')',
                    ]),
                  ),
                ),
              ),
            ),
          ),
          m.heading(2, 'Module Pattern'),
          'Each module follows the same pattern:',
          inline(
            example(
              'Module Structure',
              blocks(
                inline(
                  raw(
                    { block: true },
                    'module/core/block/\n├── mod.typ      # Entry point (exports themed wrappers)\n└── block.typ    # Implementation',
                  ),
                ),
                inline`The ${raw('mod.typ')} file imports the implementation, applies theming, and exports ready-to-use
functions.`,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Semantic content blocks for educational documents.' }, 'Block Module'),
      space,
      page_2(
        'Block Fundamentals',
        blocks(
          m.heading(1, 'Block Fundamentals'),
          'The Block module provides semantic content containers for educational documents.',
          m.heading(2, 'What is a Block?'),
          inline(
            definition(
              'Block',
              inline`${space}A styled container that gives semantic meaning to content. Blocks help readers identify
the type of information they're reading.${space}`,
            ),
          ),
          m.heading(2, 'Block Syntax'),
          'All blocks follow the same pattern:',
          inline(raw({ block: true, lang: 'typst' }, '#blockname("Optional Title")[\n  Content goes here...\n]')),
          inline`Some blocks (like ${raw('proof')} and ${raw('solution')}) don't require a title:`,
          inline(raw({ block: true, lang: 'typst' }, '#proof[\n  Content without a title...\n]')),
          m.heading(2, 'Block Categories'),
          'Blocks are organized into three categories:',
          inline(
            note(
              'Primary Blocks',
              blocks(
                m.list(
                  m.item([raw('definition'), space, '— Define concepts']),
                  m.item([raw('theorem'), space, '— State theorems']),
                  m.item([raw('equation'), space, '— Named equations']),
                ),
              ),
            ),
          ),
          inline(
            note(
              'Supporting Blocks',
              blocks(
                m.list(
                  m.item([raw('note'), space, '— Important information']),
                  m.item([raw('notation'), space, '— Explain symbols']),
                  m.item([raw('analysis'), space, '— Discussion and analysis']),
                ),
              ),
            ),
          ),
          inline(
            note(
              'Proofs & Examples',
              blocks(
                m.list(
                  m.item([raw('proof'), space, '— Mathematical proofs']),
                  m.item([raw('example'), space, '— Worked examples']),
                  m.item([raw('solution'), space, '— Solutions (visibility controlled by config)']),
                ),
              ),
            ),
          ),
          m.heading(2, 'Your First Block'),
          inline(
            example(
              'Creating a Definition',
              blocks(
                inline(
                  raw(
                    { block: true, lang: 'typst' },
                    '#definition("Velocity")[\n  The rate of change of position with respect to time:\n  $ v = dif x / dif t $\n]',
                  ),
                ),
                'Renders as:',
                inline(
                  definition(
                    'Velocity',
                    inline`${space}The rate of change of position with respect to time: ${unsafeRaw.math.block`v = dif x / dif t`}${space}`,
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'All Block Types',
        blocks(
          m.heading(1, 'All Block Types'),
          'A complete reference of every block type in the Block module.',
          m.heading(2, 'Primary Blocks'),
          inline(
            definition(
              'Definition Block',
              inline`${space}Use ${raw('#definition("Title")[...]')} to define concepts.${space}`,
            ),
          ),
          inline(
            theorem('Theorem Block', inline`${space}Use ${raw('#theorem("Title")[...]')} to state theorems.${space}`),
          ),
          inline(
            equation(
              'Equation Block',
              inline`${space}Use ${raw('#equation("Title")[...]')} for named equations: ${unsafeRaw.math.block`E = m c^2`}${space}`,
            ),
          ),
          m.heading(2, 'Supporting Blocks'),
          inline(
            note('Note Block', inline`${space}Use ${raw('#note("Title")[...]')} for important notes and tips.${space}`),
          ),
          inline(
            notation(
              'Notation Block',
              inline`${space}Use ${raw('#notation("Title")[...]')} to explain mathematical notation and symbols.${space}`,
            ),
          ),
          inline(
            analysis(
              'Analysis Block',
              inline`${space}Use ${raw('#analysis("Title")[...]')} for analysis, discussion, and elaboration.${space}`,
            ),
          ),
          m.heading(2, 'Proofs and Examples'),
          inline(
            proof(
              'Simple Proof',
              blocks(
                inline`Use ${raw('#proof[...]')} or ${raw('#proof("Title")[...]')} for mathematical proofs.`,
                'The proof block has a special QED marker at the end.',
              ),
            ),
          ),
          inline(
            example(
              'Example with Solution',
              blocks(
                inline`Use ${raw('#example("Title")[...]')} for worked examples.`,
                'Solutions can be nested inside examples:',
                inline(
                  solution(
                    blocks(
                      inline`Use ${raw('#solution[...]')} for solutions.`,
                      inline`Visibility is controlled by the ${raw('show-solution')} option of the ${raw('noteworthy')} show
rule.`,
                    ),
                  ),
                ),
              ),
            ),
          ),
          m.heading(2, 'Nesting Blocks'),
          'Blocks can be nested for complex content:',
          inline(
            theorem(
              'Fundamental Theorem',
              blocks(
                'A theorem statement here.',
                inline(proof(inline`${space}The proof of the theorem.${space}`)),
                inline(
                  example(
                    'Application',
                    blocks(
                      'An example applying the theorem.',
                      inline(solution(inline`${space}The worked solution.${space}`)),
                    ),
                  ),
                ),
              ),
            ),
          ),
          m.heading(2, 'Styling'),
          inline`Block colors are determined by your active theme — pick one with the ${raw('theme')} option
of the ${raw('noteworthy')} show rule.`,
        ),
      ),
    ),
    inline(
      chapter({ summary: '2D geometric primitives: points, lines, circles, polygons.' }, 'Shape Module'),
      space,
      page_2(
        'Points & Lines',
        blocks(
          m.heading(1, 'Points & Lines'),
          'The Shape module provides 2D geometric primitives.',
          m.heading(2, 'Creating Points'),
          inline(
            definition(
              'point',
              inline`${space}Creates a point at coordinates ${unsafeRaw.math`(x, y)`}. ${raw({ block: true, lang: 'typst' }, 'point(x, y, label: "A", label-anchor: "south", label-distance: 0.2)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              shape_point({ label: 'A', labelAnchor: 'south' }, 2, 3),
              shape_point({ label: 'B', labelAnchor: 'east' }, -1, 2),
              shape_point({ label: 'C', labelAnchor: 'north' }, 3, -1),
            ),
          ),
          m.heading(2, 'Creating Lines'),
          inline(
            definition(
              'line',
              inline`${space}Creates an infinite line through two points. ${raw({ block: true, lang: 'typst' }, 'line(p1, p2, label: none, label-anchor: "south", label-distance: 0.15)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              shape_line({ label: unsafeRaw.math`ell`, labelAnchor: 'west' }, shape_point(-2, -1), shape_point(3, 2)),
            ),
          ),
          m.heading(2, 'Line Segments'),
          inline`Use ${raw('segment')} for lines with definite endpoints:`,
          inline(
            definition(
              'segment',
              inline`${space}Creates a finite line segment between two points. ${raw({ block: true, lang: 'typst' }, 'segment(p1, p2, label: none, label-anchor: "south", label-distance: 0.15)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              shape_point({ label: 'A', labelAnchor: 'west' }, -2, 1),
              shape_point({ label: 'B', labelAnchor: 'east' }, 3, 2),
              shape_segment(shape_point(-2, 1), shape_point(3, 2)),
            ),
          ),
          m.heading(2, 'Combining Points and Lines'),
          inline(
            example(
              'Triangle Vertices',
              blocks(
                m.lines(ADecl, BDecl, CDecl),
                inline(
                  canvas_cartesianCanvas(
                    { xTick: 1, yTick: 1 },
                    A,
                    B,
                    C,
                    shape_segment(A, B),
                    shape_segment(B, C),
                    shape_segment(C, A),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'Circles & Polygons',
        blocks(
          m.heading(1, 'Circles & Polygons'),
          'Create circles and multi-sided shapes.',
          m.heading(2, 'Circles'),
          inline(
            definition(
              'circle',
              inline`${space}Creates a circle from center and radius, or center and a point on the circle. ${raw({ block: true, lang: 'typst' }, 'circle(center, radius: r, label: none, label-anchor: "north", label-distance: 0.15)\ncircle(center, through: point, label: none, label-anchor: "north", label-distance: 0.15)')}${space}`,
            ),
          ),
          m.lines(
            ODecl,
            inline(
              canvas_cartesianCanvas(
                { xTick: 1, yTick: 1 },
                shape_circle({ radius: 2, label: unsafeRaw.math`C`, labelAnchor: 'south-west' }, O),
                O,
              ),
            ),
          ),
          m.heading(2, 'Circle Through Point'),
          m.lines(ODecl_2, PDecl),
          inline(canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, O_2, P, shape_circle({ through: P }, O_2))),
          m.heading(2, 'Polygons'),
          inline(
            definition(
              'polygon',
              inline`${space}Creates a closed polygon from vertices. ${raw({ block: true, lang: 'typst' }, 'polygon(p1, p2, p3, ..., label: none, label-anchor: "north", label-distance: 0.15)')}${space}`,
            ),
          ),
          m.lines(ADecl_2, BDecl_2, CDecl_2, DDecl),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              shape_polygon({ label: 'Rectangle', labelAnchor: 'center' }, A_2, B_2, C_2, D),
            ),
          ),
          m.heading(2, 'Regular Polygons'),
          inline(
            definition(
              'regular-polygon',
              inline`${space}Creates a regular n-sided polygon from a center and first vertex. ${raw({ block: true, lang: 'typst' }, 'regular-polygon(center, first-vertex, n, label: none, label-anchor: "north", label-distance: 0.15)')}
The vertex position defines both the radius and orientation.${space}`,
            ),
          ),
          inline(
            grid(
              { columns: [fr(1), fr(1)], gutter: em(1) },
              canvas_blankCanvas(
                { width: cm(4) },
                shape_regularPolygon({ label: 'Triangle' }, shape_point(0, 0), shape_point(0, 1.5), 3),
              ),
              canvas_blankCanvas(
                { width: cm(4) },
                shape_regularPolygon({ label: 'Pentagon' }, shape_point(0, 0), shape_point(1.5, 1.5), 5),
              ),
            ),
          ),
          m.heading(2, 'Arcs'),
          inline(
            definition(
              'arc',
              inline`${space}Creates an arc from a center and two points on the arc. ${raw({ block: true, lang: 'typst' }, 'arc(center, p1, p2, label: none, label-anchor: "north", label-distance: 0.15)')}
The arc is drawn from ${raw('p1')} to ${raw('p2')}. The radius is derived from the center-to-p1
distance.${space}`,
            ),
          ),
          m.lines(ODecl_3, ADecl_3, BDecl_3),
          inline(canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, O_3, A_3, B_3, shape_arc(O_3, A_3, B_3))),
          m.heading(2, 'Point at Angle'),
          inline(
            definition(
              'point-at-angle',
              inline`${space}Creates a point at a given angle and radius from a center. ${raw({ block: true, lang: 'typst' }, 'point-at-angle(center, angle, radius, from: none, label: none, label-anchor: "north", label-distance: 0.2)')}
When ${raw('from')} is specified, the angle is measured counterclockwise from the center→from
direction.${space}`,
            ),
          ),
          inline(
            example(
              '67° Arc',
              blocks(
                m.lines(ODecl_4, ADecl_4, BDecl_4),
                inline(
                  canvas_cartesianCanvas(
                    { xTick: 1, yTick: 1 },
                    O_4,
                    A_4,
                    B_4,
                    shape_arc(O_4, A_4, B_4),
                    shape_angle({ label: '67°' }, A_4, O_4, B_4),
                  ),
                ),
              ),
            ),
          ),
          m.heading(2, 'Semicircles'),
          inline(
            definition(
              'semicircle',
              inline`${space}Creates a 180° arc from a center and starting point. ${raw({ block: true, lang: 'typst' }, 'semicircle(center, start-point, label: none, style: auto)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, shape_semicircle(shape_point(0, 0), shape_point(2, 0))),
          ),
          m.heading(2, 'Angles'),
          inline(
            definition(
              'angle',
              inline`${space}Creates an angle marker between three points. ${raw({ block: true, lang: 'typst' }, 'angle(p1, vertex, p2, label: $theta$, label-anchor: "center", label-distance: none)')}${space}`,
            ),
          ),
          m.lines(ODecl_5, ADecl_5, BDecl_5),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              O_5,
              A_5,
              B_5,
              shape_segment(O_5, A_5),
              shape_segment(O_5, B_5),
              shape_angle({ label: unsafeRaw.math`theta` }, A_5, O_5, B_5),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'Intersections & Constructions',
        blocks(
          m.heading(1, 'Intersections & Constructions'),
          'Find intersections and construct derived objects.',
          m.heading(2, 'Line-Line Intersection'),
          inline(
            definition(
              'intersect-ll',
              inline`${space}Finds the intersection of two lines. ${raw({ block: true, lang: 'typst' }, 'intersect-ll(line1, line2, label: "P")')}${space}`,
            ),
          ),
          m.lines(l1Decl, l2Decl),
          inline(canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, l1, l2, shape_intersectLl({ label: 'P' }, l1, l2))),
          m.heading(2, 'Line-Circle Intersection'),
          inline(
            definition(
              'intersect-lc',
              inline`${space}Finds intersections of a line and circle. ${raw({ block: true, lang: 'typst' }, 'intersect-lc(line, circle, labels: ("A", "B"))')}${space}`,
            ),
          ),
          m.lines(cDecl, lDecl),
          inline(canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, c, l, shape_intersectLc({ labels: ['A', 'B'] }, l, c))),
          m.heading(2, 'Constructions'),
          inline(
            definition(
              'midpoint',
              inline`${space}Constructs the midpoint of a segment. ${raw({ block: true, lang: 'typst' }, 'midpoint(p1, p2, label: "M", label-anchor: "south", label-distance: 0.2)')}${space}`,
            ),
          ),
          m.lines(ADecl_6, BDecl_6),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              A_6,
              B_6,
              shape_segment(A_6, B_6),
              shape_midpoint({ label: 'M', labelAnchor: 'south' }, A_6, B_6),
            ),
          ),
          m.heading(2, 'Perpendicular & Parallel'),
          inline(
            definition(
              'perpendicular',
              inline`${space}Constructs a line perpendicular to a given line through a point. ${raw({ block: true, lang: 'typst' }, 'perpendicular(line, point, label: none)')}${space}`,
            ),
          ),
          inline(
            definition(
              'parallel',
              inline`${space}Constructs a line parallel to a given line through a point. ${raw({ block: true, lang: 'typst' }, 'parallel(line, point, label: none)')}${space}`,
            ),
          ),
          m.lines(lDecl_2, PDecl_2),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              l_2,
              P_2,
              shape_perpendicular(l_2, P_2),
              shape_parallel(l_2, P_2),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Functions, vectors, and calculus operations.' }, 'Graph Module'),
      space,
      page_2(
        'Function Plotting',
        blocks(
          m.heading(1, 'Function Plotting'),
          'The Graph module provides function plotting and mathematical visualization.',
          m.heading(2, 'The graph Function'),
          inline(
            definition(
              'graph',
              inline`${space}Plots a function ${unsafeRaw.math`y = f(x)`} over a domain. ${raw({ block: true, lang: 'typst' }, 'graph(x => expr, domain: (min, max), label: $f(x)$)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              graph_graph({ domain: [-2, 2], label: unsafeRaw.math`x^2` }, (x) => times(x, x)),
            ),
          ),
          m.heading(2, 'Multiple Functions'),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              graph_graph({ domain: [-2, 2], label: unsafeRaw.math`x^2` }, (x_2) => times(x_2, x_2)),
              graph_graph({ domain: [-2, 2], label: unsafeRaw.math`x` }, (x_3) => x_3),
              graph_graph({ domain: [-2, 2], label: unsafeRaw.math`2x - 1` }, (x_4) => minus(times(2, x_4), 1)),
            ),
          ),
          m.heading(2, 'Trigonometric Functions'),
          inline(
            canvas_trigCanvas(
              { width: cm(10) },
              graph_graph({ domain: [neg(calc.pi), calc.pi], label: unsafeRaw.math`sin(x)` }, (x_5) => calc.sin(x_5)),
              graph_graph({ domain: [neg(calc.pi), calc.pi], label: unsafeRaw.math`cos(x)` }, (x_6) => calc.cos(x_6)),
            ),
          ),
          m.heading(2, 'Parametric Functions'),
          inline(
            definition(
              'parametric',
              inline`${space}Plots a parametric curve ${unsafeRaw.math`(x(t), y(t))`}. ${raw({ block: true, lang: 'typst' }, 'parametric(t => (x(t), y(t)), domain: (min, max), label: none)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              graph_parametric({ domain: [0, times(2, calc.pi)], label: 'Circle' }, (t) => [
                times(calc.cos(t), 2),
                times(calc.sin(t), 2),
              ]),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'Vectors',
        blocks(
          m.heading(1, 'Vectors'),
          'The Graph module includes vector operations for 2D vector mathematics.',
          m.heading(2, 'Creating Vectors'),
          inline(
            definition(
              'vec',
              inline`${space}Creates a 2D vector object. ${raw({ block: true, lang: 'typst' }, 'vec((x, y), label: $arrow(v)$, origin: (0, 0))')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, graph_vec({ label: unsafeRaw.math`arrow(v)` }, [3, 2])),
          ),
          m.heading(2, 'Vector from Point'),
          'Vectors can start from any origin:',
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              shape_point({ label: 'A', labelAnchor: 'south' }, 1, 1),
              graph_vec({ origin: [1, 1], label: unsafeRaw.math`arrow(v)` }, [2, 1.5]),
            ),
          ),
          m.heading(2, 'Vector Addition'),
          inline(
            definition(
              'vec-add',
              inline`${space}Visualizes vector addition with parallelogram. ${raw({ block: true, lang: 'typst' }, 'vec-add(v1, v2, helplines: true)')}${space}`,
            ),
          ),
          inline(
            canvas_blankCanvas(
              { xTick: 1, yTick: 1 },
              graph_vec({ label: unsafeRaw.math`arrow(a)` }, [3, 1]),
              graph_vec({ label: unsafeRaw.math`arrow(b)` }, [1, 2]),
              graph_vecAdd(
                { helplines: true },
                graph_vec({ label: unsafeRaw.math`arrow(a)` }, [3, 1]),
                graph_vec({ label: unsafeRaw.math`arrow(b)` }, [1, 2]),
              ),
            ),
          ),
          m.heading(2, 'Vector Components'),
          inline(
            definition(
              'vec-components',
              inline`${space}Shows vector decomposition into components. ${raw({ block: true, lang: 'typst' }, 'vec-components(v, labels: ($v_x$, $v_y$))')}${space}`,
            ),
          ),
          inline(
            canvas_blankCanvas(
              { xTick: 1, yTick: 1 },
              graph_vec([4, 3]),
              graph_vecComponents(
                { labels: [unsafeRaw.math`v_x`, unsafeRaw.math`v_y`], helplines: true },
                graph_vec([4, 3]),
              ),
            ),
          ),
          m.heading(2, 'Vector Projection'),
          inline(
            definition(
              'vec-project',
              inline`${space}Projects one vector onto another. ${raw({ block: true, lang: 'typst' }, 'vec-project(v, onto: w, helplines: true)')}${space}`,
            ),
          ),
          inline(
            canvas_blankCanvas(
              { xTick: 1, yTick: 1 },
              graph_vec([3, 4]),
              graph_vecProject(
                { onto: graph_vec({ label: unsafeRaw.math`arrow(w)` }, [5, 0]), helplines: true },
                graph_vec({ label: unsafeRaw.math`arrow(v)` }, [3, 4]),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Plotting canvases for rendering shapes and graphs.' }, 'Canvas Module'),
      space,
      page_2(
        'Cartesian Canvas',
        blocks(
          m.heading(1, 'Cartesian Canvas'),
          'The Canvas module provides rendering surfaces for shapes and graphs.',
          m.heading(2, 'Basic Canvas'),
          inline(
            definition(
              'cartesian-canvas',
              inline`${space}Creates a 2D Cartesian coordinate system. ${raw({ block: true, lang: 'typst' }, 'cartesian-canvas(\n  width: 8cm, height: 6cm,\n  x-tick: 1, y-tick: 1,\n  ..objects\n)')}${space}`,
            ),
          ),
          inline(canvas_cartesianCanvas({ xTick: 1, yTick: 1 }, shape_point({ label: 'P' }, 2, 3))),
          m.heading(2, 'Canvas Options'),
          inline(
            notation(
              'Key Parameters',
              blocks(
                m.list(
                  m.item([raw('width'), ',', space, raw('height'), space, sym.dash.en, space, 'Canvas dimensions']),
                  m.item([raw('x-tick'), ',', space, raw('y-tick'), space, sym.dash.en, space, 'Grid spacing']),
                  m.item([raw('x-label'), ',', space, raw('y-label'), space, sym.dash.en, space, 'Axis labels']),
                  m.item([raw('show-grid'), space, sym.dash.en, space, 'Toggle grid visibility']),
                ),
              ),
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              {
                width: cm(10),
                height: cm(6),
                xTick: 2,
                yTick: 1,
                xLabel: unsafeRaw.math`x`,
                yLabel: unsafeRaw.math`y`,
              },
              shape_point({ label: 'A' }, 4, 2),
              shape_point({ label: 'B' }, -2, 1),
            ),
          ),
          m.heading(2, 'Combining Shapes and Graphs'),
          'The cartesian canvas can display both shapes and graphs:',
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              graph_graph({ domain: [-2, 2], label: unsafeRaw.math`x^2` }, (x_7) => times(x_7, x_7)),
              shape_point({ label: 'P' }, 1, 1),
              shape_segment(shape_point(-2, 0), shape_point(2, 0)),
            ),
          ),
          m.heading(2, 'Graph Canvas'),
          inline`For simpler function-only plots, use ${raw('graph-canvas')}:`,
          inline(
            canvas_graphCanvas(
              { width: cm(10), height: cm(5) },
              graph_graph({ domain: [-3, 3], label: unsafeRaw.math`x^2 - 2` }, (x_8) => minus(times(x_8, x_8), 2)),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'Polar & Trig Canvas',
        blocks(
          m.heading(1, 'Polar & Trig Canvas'),
          'Specialized canvases for polar coordinates and trigonometry.',
          m.heading(2, 'Polar Canvas'),
          inline(
            definition(
              'polar-canvas',
              inline`${space}Creates a polar coordinate system with radial and angular axes. ${raw({ block: true, lang: 'typst' }, 'canvas.polar-canvas(\n  width: 8cm,\n  r-max: 3,\n  ..objects\n)')}${space}`,
            ),
          ),
          inline(
            canvas_polarCanvas(
              { width: cm(8) },
              graph_polarFunc({ label: 'r=2' }, (t_2) => 2),
            ),
          ),
          m.heading(2, 'Polar Functions'),
          inline`Use ${raw('graph.polar-func')} to plot ${unsafeRaw.math`r = f(theta)`}:`,
          inline(
            canvas_polarCanvas(
              { width: cm(8) },
              graph_polarFunc({ domain: [0, times(2, calc.pi)], label: 'Cardioid' }, (t_3) => add(1, calc.cos(t_3))),
            ),
          ),
          m.heading(2, 'Trig Canvas'),
          inline(
            definition(
              'trig-canvas',
              inline`${space}A Cartesian canvas with ticks at multiples of pi. ${raw({ block: true, lang: 'typst' }, 'canvas.trig-canvas(\n  width: 10cm,\n  ..objects\n)')}${space}`,
            ),
          ),
          inline(
            canvas_trigCanvas(
              { width: cm(10) },
              graph_graph({ domain: [neg(calc.pi), calc.pi], label: unsafeRaw.math`sin(x)` }, (x_9) => calc.sin(x_9)),
              graph_graph({ domain: [neg(calc.pi), calc.pi], label: unsafeRaw.math`cos(x)` }, (x_10) => calc.cos(x_10)),
              graph_graph({ domain: [neg(calc.pi), calc.pi], label: unsafeRaw.math`tan(x)` }, (x_11) => calc.tan(x_11)),
            ),
          ),
          m.heading(2, 'Rose Curves'),
          inline(
            example(
              'Polar Rose',
              blocks(
                inline`${unsafeRaw.math`r = cos(3 theta)`} creates a 3-petal rose:`,
                inline(
                  canvas_polarCanvas(
                    { width: cm(8) },
                    graph_polarFunc({ domain: [0, calc.pi], label: 'Rose' }, (t_4) => calc.cos(times(3, t_4))),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      space,
      page_2(
        '3D Space Canvas',
        blocks(
          m.heading(1, '3D Space Canvas'),
          'Visualize 3D geometry and vectors.',
          m.heading(2, 'Space Canvas'),
          inline(
            definition(
              'space-canvas',
              inline`${space}Creates a 3D coordinate system with perspective. ${raw({ block: true, lang: 'typst' }, 'space-canvas(\n  width: 8cm,\n  ..objects\n)')}${space}`,
            ),
          ),
          inline(canvas_spaceCanvas({ width: cm(10) }, shape_point({ z: 3, label: 'P' }, 2, 1))),
          m.heading(2, '3D Points'),
          inline`Use ${raw('point()')} with z coordinate for 3D points:`,
          inline(
            canvas_spaceCanvas(
              { width: cm(10) },
              shape_point({ z: 0, label: 'O' }, 0, 0),
              shape_point({ z: 0, label: 'A' }, 3, 0),
              shape_point({ z: 0, label: 'B' }, 0, 3),
              shape_point({ z: 3, label: 'C' }, 0, 0),
            ),
          ),
          m.heading(2, '3D Vectors'),
          inline`Use ${raw('vec()')} with 3 components for 3D vectors:`,
          inline(
            definition(
              'vec (3D)',
              inline`${space}Creates a 3D vector from origin. ${raw({ block: true, lang: 'typst' }, 'vec((x, y, z), label: $arrow(v)$)')}${space}`,
            ),
          ),
          inline(
            canvas_spaceCanvas(
              { width: cm(10) },
              graph_vec({ label: unsafeRaw.math`arrow(v)` }, [2, 1, 2]),
              graph_vec({ label: unsafeRaw.math`arrow(w)` }, [1, 3, 1]),
            ),
          ),
          m.heading(2, 'Coordinate Axes'),
          m.lines(
            'The space canvas follows the right-hand rule:',
            m.list(m.item(['x-axis points right']), m.item(['y-axis points forward']), m.item(['z-axis points up'])),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Data visualization: tables, series, and curves.' }, 'Data Module'),
      space,
      page_2(
        'Tables',
        blocks(
          m.heading(1, 'Tables'),
          'The Data module provides table rendering with theme-aware styling.',
          m.heading(2, 'Table Plot'),
          inline(
            definition(
              'table-plot',
              inline`${space}Creates a styled data table. ${raw({ block: true, lang: 'typst' }, 'table-plot(\n  headers: ("x", "y", "z"),\n  data: ((1, 2, 3), (4, 5, 6)),\n)')}${space}`,
            ),
          ),
          inline(
            data_tablePlot({
              headers: ['Variable', 'Mean', 'Std Dev'],
              data: [
                ['Height', '175 cm', '8.5'],
                ['Weight', '70 kg', '12.3'],
                ['Age', '25 yr', '4.2'],
              ],
            }),
          ),
          m.heading(2, 'Value Table'),
          inline(
            definition(
              'value-table',
              inline`${space}Creates a function value table with variable and result rows. ${raw({ block: true, lang: 'typst' }, 'value-table(\n  variable: $x$,\n  func: $f(x)$,\n  values: (1, 2, 3, 4),\n  results: (1, 4, 9, 16),\n)')}${space}`,
            ),
          ),
          inline(
            data_valueTable({
              variable: unsafeRaw.math`x`,
              func: unsafeRaw.math`x^2`,
              values: [-2, -1, 0, 1, 2],
              results: [4, 1, 0, 1, 4],
            }),
          ),
          m.heading(2, 'Grid Table'),
          inline(
            definition(
              'grid-table',
              inline`${space}Creates a grid layout for 2D data visualization. ${raw({ block: true, lang: 'typst' }, 'grid-table(\n  data: ((1, 2, 3), (4, 5, 6)),\n  show-indices: true,\n)')}${space}`,
            ),
          ),
          inline(
            data_gridTable({
              data: [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
              ],
              showIndices: true,
            }),
          ),
          m.heading(2, 'Compact Table'),
          'For inline or small tables:',
          inline(
            data_compactTable({
              headers: ['n', 'n!'],
              data: [
                [0, 1],
                [1, 1],
                [2, 2],
                [3, 6],
                [4, 24],
              ],
            }),
          ),
        ),
      ),
      space,
      page_2(
        'Data Series & CSV',
        blocks(
          m.heading(1, 'Data Series & CSV'),
          'Plot data points from arrays or CSV files.',
          m.heading(2, 'Data Series'),
          inline(
            definition(
              'data-series',
              inline`${space}Creates a plotable data series from coordinate pairs. ${raw({ block: true, lang: 'typst' }, 'data-series(\n  ((x1, y1), (x2, y2), ...),\n  label: "Series",\n  style: auto,\n)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              data_dataSeries({ label: 'Data' }, [
                [0, 0],
                [1, 2],
                [2, 3],
                [3, 2.5],
                [4, 4],
              ]),
            ),
          ),
          m.heading(2, 'Multiple Series'),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              data_dataSeries({ label: 'Series A' }, [
                [0, 1],
                [1, 3],
                [2, 2],
                [3, 4],
              ]),
              data_dataSeries({ label: 'Series B' }, [
                [0, 2],
                [1, 1],
                [2, 3],
                [3, 2],
              ]),
            ),
          ),
          m.heading(2, 'CSV Import'),
          inline(
            definition(
              'csv-series',
              inline`${space}Loads data from a CSV file. ${raw({ block: true, lang: 'typst' }, 'csv-series(\n  "path/to/data.csv",\n  x-col: 0,\n  y-col: 1,\n  label: "CSV Data",\n)')}${space}`,
            ),
          ),
          inline(
            note(
              'CSV Format',
              inline`${space}The CSV file should have numeric data. Header rows are automatically detected and skipped.${space}`,
            ),
          ),
          m.heading(2, 'Polar Data Series'),
          inline(
            definition(
              'polar-data-series',
              inline`${space}Creates a data series in polar coordinates (r, θ). ${raw({ block: true, lang: 'typst' }, 'polar-data-series(\n  ((r1, θ1), (r2, θ2), ...),\n  label: "Polar",\n)')}${space}`,
            ),
          ),
          inline`Use ${raw('polar-data-series')} with ${raw('polar-canvas')} for radial data visualization.`,
        ),
      ),
      space,
      page_2(
        'Smooth Curves',
        blocks(
          m.heading(1, 'Smooth Curves'),
          'Draw smooth curves through data points using spline interpolation.',
          m.heading(2, 'Curve Through Points'),
          inline(
            definition(
              'curve-through',
              blocks(
                inline`Creates a smooth curve through a set of points. ${raw({ block: true, lang: 'typst' }, 'curve-through(\n  (p1, p2, p3, ...),\n  label: "Curve",\n  tension: 0.5,\n)')}`,
                m.list(m.item([raw('tension'), ': Controls curve tightness (0 = linear, 1 = tight)'])),
              ),
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              data_curveThrough({ label: 'Smooth' }, [
                [0, 1],
                [1, 3],
                [2, 2],
                [3, 4],
                [4, 3],
              ]),
            ),
          ),
          m.heading(2, 'Tension Control'),
          inline(
            example(
              'Tension Comparison',
              blocks(
                'Lower tension creates smoother curves:',
                inline(
                  grid(
                    { columns: [fr(1), fr(1)], gutter: em(1) },
                    inline(
                      space,
                      strong(inline`Tension: 0.3`),
                      space,
                      canvas_cartesianCanvas(
                        { width: cm(5), xTick: 1, yTick: 1 },
                        data_curveThrough({ tension: 0.3 }, [
                          [0, 1],
                          [1, 3],
                          [2, 1],
                          [3, 3],
                        ]),
                      ),
                      space,
                    ),
                    inline(
                      space,
                      strong(inline`Tension: 0.8`),
                      space,
                      canvas_cartesianCanvas(
                        { width: cm(5), xTick: 1, yTick: 1 },
                        data_curveThrough({ tension: 0.8 }, [
                          [0, 1],
                          [1, 3],
                          [2, 1],
                          [3, 3],
                        ]),
                      ),
                      space,
                    ),
                  ),
                ),
              ),
            ),
          ),
          m.heading(2, 'Smooth Curve'),
          inline(
            definition(
              'smooth-curve',
              inline`${space}Alternative curve function with automatic tension. ${raw({ block: true, lang: 'typst' }, 'smooth-curve(\n  (p1, p2, p3, ...),\n  label: "Curve",\n)')}${space}`,
            ),
          ),
          inline(
            canvas_cartesianCanvas(
              { xTick: 1, yTick: 1 },
              data_smoothCurve({ label: 'Auto-smooth' }, [
                [0, 0],
                [1, 2],
                [2, 1],
                [3, 3],
                [4, 2],
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Document covers and title pages.' }, 'Cover Module'),
      space,
      page_2(
        'Cover Templates',
        blocks(
          m.heading(1, 'Cover Templates'),
          'The Cover module provides document covers and title pages.',
          m.heading(2, 'Main Cover'),
          inline(
            definition(
              'cover',
              inline`${space}The main document cover, shown at the beginning. Write ${raw('#cover()')} in ${raw('main.typ')};
it uses the document configuration automatically.${space}`,
            ),
          ),
          inline(
            note(
              'Configuration',
              inline`${space}Cover content comes from the ${raw('noteworthy')} show rule in ${raw('main.typ')}: ${raw({ block: true, lang: 'typst' }, '#show: noteworthy.with(\n  title: "Your Document Title",\n  subtitle: "Optional Subtitle",\n  authors: ("Author 1", "Author 2"),\n  affiliation: "Your Institution",\n)')}${space}`,
            ),
          ),
          m.heading(2, 'Chapter Cover'),
          inline(
            definition(
              'chapter',
              inline`${space}Shown at the start of each chapter. Declared in ${raw('main.typ')}: ${raw({ block: true, lang: 'typst' }, '#chapter("Chapter Title", summary: "Brief chapter description.")')}
Chapter numbers follow document order automatically.${space}`,
            ),
          ),
          m.heading(2, 'Preface'),
          inline(
            definition(
              'preface',
              inline`${space}Introduction page shown after the cover. Pass the text as the body: ${raw({ block: true, lang: 'typst' }, '#preface[Welcome to my notes...]')}${space}`,
            ),
          ),
          m.heading(2, 'Page Title'),
          inline(
            definition(
              'page',
              inline`${space}Individual page headers. Each page declares its title in ${raw('main.typ')}, with its
body inline or included from a file: ${raw({ block: true, lang: 'typst' }, '#page("Page Title")[\n  Inline content...\n]\n#page("Another Page")[#include "content/1/2.typ"]')}${space}`,
            ),
          ),
          m.heading(2, 'Display Controls'),
          inline`The front matter is explicit: write ${raw('#cover()')}, ${raw('#preface[..]')}, and ${raw('#toc()')}
in ${raw('main.typ')} — or leave any of them out. The theme is set by the ${raw('theme')} option
of the ${raw('noteworthy')} show rule (e.g., "noteworthy-dark").`,
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Page layouts, outlines, and configuration.' }, 'Layout Module'),
      space,
      page_2(
        'Layout & Config',
        blocks(
          m.heading(1, 'Layout & Config'),
          'The Layout module manages document structure, outlining, and global configuration.',
          m.heading(2, 'Document Structure'),
          inline(
            definition(
              'main.typ',
              inline`${space}The document entry point declares the whole book explicitly: ${raw({ block: true, lang: 'typst' }, '#show: noteworthy.with(title: "My Notes", theme: "aether")\n\n#cover()\n#preface[Welcome to my notes.]\n#toc()\n\n#chapter("Chapter Title", summary: "What this chapter covers.")\n#page("Page Title")[\n  Inline content — or `#include "content/1/1.typ"` from a file.\n]')}
Write pages inline or split them into one file per page; chapter and page numbers (and the table
of contents) follow document order automatically.${space}`,
            ),
          ),
          m.heading(2, 'Configuration'),
          inline(
            definition(
              'noteworthy',
              blocks(
                m.lines(
                  inline`The ${raw('#show: noteworthy.with(...)')} rule configures the document:`,
                  m.list(
                    m.item([
                      raw('theme'),
                      ': Set the active color scheme (e.g.,',
                      space,
                      smartquote({ double: true }),
                      'noteworthy-light',
                      smartquote({ double: true }),
                      ').',
                    ]),
                    m.item([raw('font'), space, '/', space, raw('title-font'), ': Body and heading typefaces.']),
                    m.item([
                      raw('pad-chapter-id'),
                      space,
                      '/',
                      space,
                      raw('pad-page-id'),
                      ': Zero-pad numbering (e.g.,',
                      space,
                      smartquote({ double: true }),
                      '01.02',
                      smartquote({ double: true }),
                      ').',
                    ]),
                    m.item([
                      raw('chapter-name'),
                      ': The word shown before numbers (e.g.,',
                      space,
                      smartquote({ double: true }),
                      'Chapter',
                      smartquote({ double: true }),
                      ').',
                    ]),
                  ),
                  'Every option has a sensible default; pass only what you change.',
                ),
              ),
            ),
          ),
          m.heading(2, 'Usage'),
          inline`The table of contents is generated by ${raw('#toc()')}: it finds every ${raw('#chapter')} and
${raw('#page')} in the document and resolves their real page numbers in a single compile — no
separate structure file needed.`,
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Combinatorics visualizations: permutations, combinations, and counting.' }, 'Combi Module'),
      space,
      page_2(
        'Combinatorics Visualizations',
        blocks(
          m.heading(1, 'Combinatorics Visualizations'),
          'Visual representations for counting problems.',
          m.heading(2, 'Linear Permutations'),
          'Arrange items in a row:',
          inline(
            canvas_blankCanvas(
              combi_linearPerm(combi_permutation({ labels: ['1st', '2nd', '3rd', '4th'] }, ['A', 'B', 'C', 'D'])),
            ),
          ),
          'Highlight specific positions:',
          inline(
            canvas_blankCanvas(
              combi_linearPerm({ highlight: [0, 2, 4] }, combi_permutation(['1', '2', '3', '4', '5'])),
            ),
          ),
          m.heading(2, 'Circular Permutations'),
          'Arrange items in a circle:',
          inline(canvas_blankCanvas(combi_circularPerm({ radius: 1.5 }, combi_permutation(['A', 'B', 'C', 'D', 'E'])))),
          m.heading(2, 'Balls and Boxes'),
          'Distribute balls into boxes:',
          inline(
            definition(
              'balls-boxes',
              blocks(
                m.lines(
                  'Visualize distribution problems:',
                  m.list(
                    m.item(['Distinguishable balls: numbered, colored differently']),
                    m.item(['Identical balls: same color']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            example(
              'Distinguishable Balls',
              inline(
                space,
                canvas_blankCanvas(combi_ballsBoxes({ distribution: [2, 2, 1], ballsIdentical: false }, 5, 3)),
                space,
              ),
            ),
          ),
          inline(
            example(
              'Identical Balls',
              inline(
                space,
                canvas_blankCanvas(combi_ballsBoxes({ distribution: [3, 2, 1], ballsIdentical: true }, 3, 3)),
                space,
              ),
            ),
          ),
          m.heading(2, 'Subset Selection (Combinations)'),
          'Highlight a subset of elements:',
          inline(canvas_blankCanvas(combi_subsetVis({ subset: [1, 3, 5] }, ['a', 'b', 'c', 'd', 'e', 'f']))),
          m.heading(2, 'Counting Trees'),
          'Visualize multiplication principle:',
          inline(
            canvas_blankCanvas(
              combi_countingTree([
                ['R', 'B'],
                ['S', 'M', 'L'],
                ['L', 'R'],
              ]),
            ),
          ),
          m.heading(2, 'Partition Diagrams'),
          'Ferrers/Young diagram for partitions:',
          inline(
            definition(
              'partition-vis',
              inline`${space}Shows a partition of n as a Ferrers diagram. ${raw({ block: true, lang: 'typst' }, 'partition-vis((4, 3, 2, 1))  // 4 + 3 + 2 + 1 = 10')}${space}`,
            ),
          ),
          inline(canvas_blankCanvas(combi_partitionVis([4, 3, 2, 1]))),
          inline(canvas_blankCanvas(combi_partitionVis([5, 5, 3, 1]))),
          m.heading(2, 'Pigeonhole Principle'),
          'Visualize when items must share containers:',
          inline(canvas_blankCanvas(combi_pigeonhole(5, 3))),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Visualizations for hierarchical data structures.' }, 'Trees Module'),
      space,
      page_2(
        'Trees and Hierarchies',
        blocks(
          m.heading(1, 'Trees and Hierarchies'),
          'Visualizing hierarchical data structures.',
          inline(
            definition(
              'Structuring Trees',
              inline`${space}Use ${raw('trees.tree-node(value, children: (...))')} to define the hierarchy recursively.
${raw({ block: true, lang: 'typst' }, 'let root = trees.tree-node("Root", children: (\n  trees.tree-node("Child 1"),\n  trees.tree-node("Child 2"),\n))')}${space}`,
            ),
          ),
          m.heading(2, 'Vertical Trees'),
          'Standard top-down tree visualization, commonly used for binary trees or organizational charts.',
          inline(
            definition(
              'Vertical Tree',
              inline`${space}Set ${raw('direction: "vertical"')} to arrange nodes from top to bottom. ${raw({ block: true, lang: 'typst' }, 'trees.tree(root, direction: "vertical")')}${space}`,
            ),
          ),
          myTreeNodeDecl,
          inline(
            canvas_blankCanvas(
              trees_tree(
                { direction: 'vertical', highlightItems: ['A'], highlightPath: ['Root', 'B', 'B1'] },
                myTreeNode,
              ),
            ),
          ),
          m.heading(2, 'Horizontal Trees'),
          'Left-to-right tree visualization, useful for file systems or taxonomies.',
          inline(
            definition(
              'Horizontal Tree',
              inline`${space}Set ${raw('direction: "horizontal"')} to arrange nodes from left to right. ${raw({ block: true, lang: 'typst' }, 'trees.tree(root, direction: "horizontal")')}${space}`,
            ),
          ),
          fsTreeDecl,
          inline(
            canvas_blankCanvas(trees_tree({ direction: 'horizontal', highlightPath: ['/', 'usr', 'local'] }, fsTree)),
          ),
          m.heading(2, 'Path Highlighting'),
          'You can highlight specific paths to emphasize a traversal or a lineage.',
          inline(
            definition(
              'Path Highlighting',
              inline`${space}Provide a list of node names to ${raw('highlight-path')}. The visualizer will highlight
the nodes and the edges connecting them. ${raw({ block: true, lang: 'typst' }, 'trees.tree(\n  root,\n  highlight-path: ("Root", "Child", "Grandchild")\n)')}${space}`,
            ),
          ),
          pathTreeDecl,
          inline(
            canvas_blankCanvas(
              trees_tree({ direction: 'vertical', highlightPath: ['Start', 'Step 1', 'Option B', 'Goal'] }, pathTree),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Visualizations for data structures and algorithms.' }, 'CS & Algorithms'),
      space,
      page_2(
        'CS Data Structures',
        blocks(
          m.heading(1, 'CS Data Structures'),
          'The CS module provides visualizations for fundamental data structures like Arrays, Stacks, Queues, and Linked Lists.',
          m.heading(2, 'Arrays'),
          inline(
            definition(
              'cs-array',
              blocks(
                'Visualizes a contiguous array of elements with support for highlighting, pointers, and separators.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'cs-array(\n  items: (10, 20, 30),\n  highlight: (1,),\n  pointers: ("0": "head"),\n  separators: (1,),\n  show-index: true\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('items'), ': Content to display.']),
                    m.item([raw('highlight'), ': Indices to highlight.']),
                    m.item([raw('pointers'), ': Dictionary of', space, raw('{index: label}'), '.']),
                    m.item([raw('separators'), ': List of indices to insert a gap after.']),
                    m.item([raw('show-index'), ': Toggle index visibility (default: true).']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(10), height: cm(4) },
              dsa_csArray({ separators: [1], label: 'Split Step' }, [38, 27, 43, 3]),
            ),
          ),
          m.heading(2, 'Stacks'),
          inline(
            definition(
              'cs-stack',
              blocks(
                'Visualizes a LIFO stack with optional push/pop animations.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'cs-stack(\n  items: (10, 20),\n  incoming: 30, // Push animation\n  outgoing: 5,  // Pop animation\n  show-index: false\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('items'), ': Stack content (bottom to top).']),
                    m.item([raw('incoming'), ': Item to visualize being pushed.']),
                    m.item([raw('outgoing'), ': Item to visualize being popped (with arc arrow).']),
                    m.item([raw('show-index'), ': Show indices on the left (default: false).']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(10), height: cm(6) },
              dsa_csStack({ outgoing: 30, label: 'Pop Operation' }, [10, 20]),
            ),
          ),
          m.heading(2, 'Queues'),
          inline(
            definition(
              'cs-queue',
              blocks(
                'Visualizes a FIFO queue with symmetric enqueue/dequeue indicators.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'cs-queue(\n  items: (1, 2, 3),\n  incoming: 4, // Enqueue\n  outgoing: 0, // Dequeue\n  show-index: false\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('items'), ': Queue content (front to back).']),
                    m.item([raw('incoming'), ': Item being enqueued (right).']),
                    m.item([raw('outgoing'), ': Item being dequeued (left).']),
                    m.item([raw('show-index'), ': Show indices below items (default: false).']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(10), height: cm(4) },
              dsa_csQueue({ incoming: 4, label: 'Enqueue' }, [1, 2, 3]),
            ),
          ),
          m.heading(2, 'Linked Lists'),
          inline(
            definition(
              'cs-linked-list',
              blocks(
                'Visualizes a singly linked list with nodes and pointers.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'cs-linked-list(\n  items: (12, 99),\n  pointers: ("0": "head"),\n  show-index: false\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('items'), ': List content.']),
                    m.item([raw('pointers'), ': External pointers pointing to nodes.']),
                    m.item([raw('show-index'), ': Show indices below nodes (default: false).']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(10), height: cm(4) },
              dsa_csLinkedList({ pointers: dict({ '0': 'head' }), label: 'Singly Linked List' }, [12, 99, 37]),
            ),
          ),
        ),
      ),
      space,
      page_2(
        'Algorithms',
        blocks(
          m.heading(1, 'Algorithms'),
          'The Algo module provides visualizations for graph algorithms, pathfinding, and matrix operations.',
          m.heading(2, 'Graphs'),
          inline(
            definition(
              'free-graph',
              blocks(
                'Visualizes a node-link diagram with support for weighted, directed, and curved edges.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'free-graph(\n  nodes, edges,\n  highlight-path: ("A", "B"),\n  highlight-nodes: ("A",),\n  style: (label: "My Graph")\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('nodes'), ': List of', space, raw('graph-node'), space, 'objects.']),
                    m.item([raw('edges'), ': List of', space, raw('graph-edge'), space, 'objects.']),
                    m.item([raw('highlight-path'), ': List of node names (in order) to highlight edges between.']),
                    m.item([raw('highlight-nodes'), ': List of node names to highlight.']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(10), height: cm(6) },
              codeBlock([nodesDecl, edgesDecl, dsa_freeGraph({ style: { label: 'Simple Graph' } }, nodes, edges)]),
            ),
          ),
          m.heading(2, 'Grid World'),
          inline(
            definition(
              'grid-world',
              blocks(
                'Visualizes a 2D grid for pathfinding algorithms (A*, BFS, etc.).',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'grid-world(\n  rows, cols,\n  walls: ((1,1),),\n  start: (0,0),\n  target: (4,4),\n  path: ((0,0), (0,1)...)\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([raw('rows'), ',', space, raw('cols'), ': Grid dimensions.']),
                    m.item([raw('walls'), ': List of', space, raw('(c, r)'), space, 'coordinates for obstacles.']),
                    m.item([
                      raw('start'),
                      ',',
                      space,
                      raw('target'),
                      ': Coordinates for start (green) and target (red).',
                    ]),
                    m.item([raw('path'), ': List of coordinates to highlight as the path.']),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(6), height: cm(6) },
              dsa_gridWorld(
                {
                  start: [0, 0],
                  target: [4, 4],
                  walls: [[2, 2]],
                  path: [
                    [0, 0],
                    [1, 0],
                    [2, 0],
                    [3, 0],
                    [4, 0],
                    [4, 1],
                    [4, 2],
                    [4, 3],
                    [4, 4],
                  ],
                  label: 'Pathfinding',
                },
                5,
                5,
              ),
            ),
          ),
          m.heading(2, 'Adjacency Matrix'),
          inline(
            definition(
              'adjacency-matrix',
              blocks(
                'Visualizes a matrix (2D array) representing graph weights or connections.',
                m.lines(
                  inline(
                    raw(
                      { block: true, lang: 'typst' },
                      'adjacency-matrix(\n  matrix,\n  labels: ("A", "B"...),\n  highlight-cells: ((0,1),)\n)',
                    ),
                    space,
                    strong(inline`Parameters:`),
                  ),
                  m.list(
                    m.item([
                      raw('matrix'),
                      ': 2D list of values. Use',
                      space,
                      raw('none'),
                      space,
                      'for infinity/no connection.',
                    ]),
                    m.item([raw('labels'), ': Row/Column headers.']),
                    m.item([
                      raw('highlight-cells'),
                      ': List of',
                      space,
                      raw('(row, col)'),
                      space,
                      'tuples to highlight.',
                    ]),
                  ),
                ),
              ),
            ),
          ),
          inline(
            canvas_blankCanvas(
              { length: cm(6), height: cm(6) },
              dsa_adjacencyMatrix({ labels: ['A', 'B'], label: 'Weights' }, [
                [0, 5],
                [null, 0],
              ]),
            ),
          ),
        ),
      ),
    ),
    inline(
      chapter({ summary: 'Chronological event timelines for notes.' }, 'Timeline Module'),
      space,
      page_2(
        'Timeline Examples',
        blocks(
          m.heading(1, 'Timeline Module'),
          'The timeline module creates visual timelines for chronological events, processes, and milestones.',
          m.heading(2, 'Basic Usage'),
          inline`Create events with ${raw('timeline.event()')} and display with ${raw('timeline.timeline-figure()')}:`,
          inline(
            timeline_timelineFigure([
              timeline_event('1969', 'Moon Landing'),
              timeline_event('1989', 'Fall of Berlin Wall'),
              timeline_event('2000', 'Y2K'),
            ]),
          ),
          m.heading(2, 'With Descriptions'),
          'Add descriptions for more context:',
          inline(
            timeline_timelineFigure([
              timeline_event({ description: '13 colonies declare freedom' }, '1776', 'Declaration of Independence'),
              timeline_event({ description: 'Bill of Rights added 1791' }, '1789', 'Constitution Ratified'),
              timeline_event({ description: 'Lasted until 1865' }, '1861', 'Civil War Begins'),
            ]),
          ),
          m.heading(2, 'Highlighting Events'),
          inline`Mark important events with ${raw('highlight: true')}:`,
          inline(
            timeline_timelineFigure([
              timeline_event('Phase 1', 'Research'),
              timeline_event({ highlight: true }, 'Phase 2', 'Development'),
              timeline_event('Phase 3', 'Testing'),
              timeline_event('Phase 4', 'Launch'),
            ]),
          ),
          m.heading(2, 'Horizontal Layout'),
          inline`Use ${raw('direction: "horizontal"')} for compact display:`,
          inline(
            timeline_timelineFigure({ direction: 'horizontal' }, [
              timeline_event('Jan', 'Start'),
              timeline_event('Mar', 'Milestone 1'),
              timeline_event('Jun', 'Milestone 2'),
              timeline_event('Dec', 'Complete'),
            ]),
          ),
        ),
      ),
    ),
  )
}
