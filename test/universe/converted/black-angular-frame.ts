// Converted from test/universe/corpus/black-angular-frame.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  block,
  blocks,
  blue,
  box,
  center,
  codeBlock,
  context,
  data,
  define,
  dict,
  div,
  doc,
  emph,
  external,
  figure,
  float,
  fr,
  green,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  left,
  let_,
  line,
  linebreak,
  luma,
  m,
  minus,
  orange,
  path,
  pct,
  place,
  pt,
  purple,
  raw,
  rect,
  red,
  rgb,
  show,
  space,
  strong,
  sub,
  sym,
  table,
  text,
  times,
  top,
  underline,
  unsafeRaw,
  v,
  white,
} from '../../../src/index.ts'

export default () => {
  const blackAngularFrame = external('black-angular-frame')
  const newSection = define('new-section')
    .pos('arg1', T.any)
    .named('slide-title', T.any, null)
    .returns(T.any)
    .external()
  const slide = define('slide').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const bafTableCell = define('baf-table-cell')
    .pos('arg1', T.any)
    .named('fill', T.any, null)
    .named('inset', T.any, null)
    .named('pos', T.any, null)
    .named('stroke', T.any, null)
    .returns(T.any)
    .external()
  const codeBox = define('code-box')
    .pos('arg1', T.any)
    .named('color', T.any, null)
    .named('fill', T.any, null)
    .named('lang', T.any, null)
    .named('text-size', T.any, null)
    .named('title', T.any, null)
    .named('type', T.any, null)
    .returns(T.any)
    .external()
  const twoCol = define('two-col')
    .pos('arg1', T.content)
    .pos('arg2', T.content)
    .named('left-width', T.any, null)
    .returns(T.any)
    .external()
  const bafFigure = define('baf-figure')
    .pos('arg1', T.content)
    .named('caption', T.content, [])
    .returns(T.any)
    .external()
  const bafVisual = define('baf-visual').pos('arg1', T.content).returns(T.any).external()
  const pseudoCode = define('pseudo-code').pos('arg1', T.any).named('title', T.any, null).returns(T.any).external()
  const bafDiagram = define('baf-diagram')
    .pos('arg1', T.content)
    .named('caption', T.content, [])
    .returns(T.any)
    .external()
  const definition = define('definition').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const theorem = define('theorem').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const lemma = define('lemma').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const corollary = define('corollary').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const proof = define('proof').pos('arg1', T.content).named('width', T.any, null).returns(T.any).external()
  const remark = define('remark').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const example = define('example').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const exercise = define('exercise').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const proposition = define('proposition').pos('arg1', T.content).named('name', T.any, null).returns(T.any).external()
  const bafBox = define('baf-box')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('color', T.any, null)
    .named('name', T.any, null)
    .named('width', T.any, null)
    .returns(T.any)
    .external()
  const bafEquation = define('baf-equation').pos('arg1', T.content).returns(T.any).external()
  const boxSeparator = define('box-separator').pos('arg1', T.any).named('color', T.any, null).returns(T.any).external()
  const finalSlide = external('final-slide')
  const blackAngularFrame_with = define('with').named('config', T.any, null).returns(T.any).external(blackAngularFrame)
  const [presentationConfigDecl, presentationConfig] = let_(
    'presentation-config',
    dict({
      title: 'Black Angular Frame',
      subtitle: 'A Typst Template for Academic Presentations',
      authors: 'Author One, Author Two',
      institution: 'Institution Name',
      date: 'May 2026',
      'final-message': 'Thank you for your attention',
      'primary-color': rgb('#1C1C1C'),
      'secondary-color': rgb('#D9D9D9'),
      'background-color': rgb('#FFFFFF'),
      'font-color': luma(20),
      'header-font-color-1': rgb('#999999'),
      'header-font-color-2': rgb('#1C1C1C'),
      'header-font-color-1-highlight': rgb('#FFFFFF'),
      'content-center': 0.3,
      'content-upper-padding': 0.05,
      'content-lower-padding': 0.05,
      logos: [
        image({ height: pt(45) }, path('assets/typst-logo.png')),
        image({ height: pt(45) }, path('assets/github-logo.png')),
      ],
      TOC: true,
    }),
  )
  const cell = define('cell')
    .pos('body', T.any)
    .named('fill', T.any, white)
    .named('pos', T.any, left)
    .named('weight', T.any, 'regular')
    .returns(T.any)
    .body((p) =>
      bafTableCell(
        { fill: p['fill'], stroke: add(luma(200), pt(0.45)), pos: p['pos'], inset: { x: pt(3), y: pt(2) } },
        inline(space, text({ font: 'IBM Plex Sans', size: pt(5.6), weight: p['weight'] }, p['body']), space),
      ),
    )
  const paperCell = define('paper-cell')
    .pos('body', T.any)
    .named('pos', T.any, left)
    .named('header', T.any, false)
    .named('model-col', T.any, false)
    .named('first-data', T.any, false)
    .returns(T.any)
    .body((p) =>
      grid.cell(
        {
          stroke: unsafeRaw.code<any>`(
          bottom: if header { 0.6pt } else { none },
          right: if model-col { 0.6pt } else { none },
        )`,
          inset: unsafeRaw.code<any>`(
          left: 5pt,
          right: 5pt,
          top: if first-data { 6pt } else { 4pt },
          bottom: if header { 7pt } else { 4pt },
        )`,
          align: p['pos'],
        },
        text({ font: 'IBM Plex Serif' }, p['body']),
      ),
    )
  const gridCell = define('grid-cell')
    .pos('body', T.any)
    .named('fill', T.any, white)
    .named('stroke', T.any, add(luma(200), pt(0.6)))
    .named('pos', T.any, center)
    .returns(T.any)
    .body((p) => bafTableCell({ fill: p['fill'], stroke: p['stroke'], pos: p['pos'] }, p['body']))
  const paperCell_2 = define('paper-cell')
    .pos('body', T.any)
    .named('pos', T.any, left)
    .named('header', T.any, false)
    .named('model-col', T.any, false)
    .named('first-data', T.any, false)
    .returns(T.any)
    .body((p) =>
      grid.cell(
        {
          stroke: unsafeRaw.code<any>`(
          bottom: if header { 0.6pt } else { none },
          right: if model-col { 0.6pt } else { none },
        )`,
          inset: unsafeRaw.code<any>`(
          left: 5pt,
          right: 5pt,
          top: if first-data { 6pt } else { 4pt },
          bottom: if header { 7pt } else { 4pt },
        )`,
          align: p['pos'],
        },
        text({ font: 'IBM Plex Serif' }, p['body']),
      ),
    )
  const gridCell_2 = define('grid-cell')
    .pos('body', T.any)
    .named('fill', T.any, white)
    .named('stroke', T.any, add(luma(200), pt(0.6)))
    .named('pos', T.any, center)
    .returns(T.any)
    .body((p) => bafTableCell({ fill: p['fill'], stroke: p['stroke'], pos: p['pos'] }, p['body']))
  const _arrowHead = define('_arrow-head')
    .pos('x', T.any)
    .pos('y', T.any)
    .named('dir', T.any, 'r')
    .named('color', T.any, luma(25))
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  if dir == "r" {
    place(top + left, dx: x - 6pt, dy: y - 3pt, polygon((0pt, 0pt), (6pt, 3pt), (0pt, 6pt), fill: color))
  } else if dir == "l" {
    place(top + left, dx: x, dy: y - 3pt, polygon((0pt, 3pt), (6pt, 0pt), (6pt, 6pt), fill: color))
  } else if dir == "d" {
    place(top + left, dx: x - 3pt, dy: y - 6pt, polygon((0pt, 0pt), (6pt, 0pt), (3pt, 6pt), fill: color))
  } else if dir == "u" {
    place(top + left, dx: x - 3pt, dy: y, polygon((0pt, 6pt), (3pt, 0pt), (6pt, 6pt), fill: color))
  } else if dir == "dr" {
    place(top + left, dx: x - 6pt, dy: y - 6pt, polygon((6pt, 6pt), (1pt, 4pt), (4pt, 1pt), fill: color))
  } else if dir == "dl" {
    place(top + left, dx: x, dy: y - 6pt, polygon((0pt, 6pt), (5pt, 4pt), (2pt, 1pt), fill: color))
  } else if dir == "ur" {
    place(top + left, dx: x - 6pt, dy: y, polygon((6pt, 0pt), (1pt, 2pt), (4pt, 5pt), fill: color))
  } else {
    place(top + left, dx: x, dy: y, polygon((0pt, 0pt), (5pt, 2pt), (2pt, 5pt), fill: color))
  }
}`,
    )
  const _arrR = define('_arr-r')
    .pos('x1', T.any)
    .pos('y', T.any)
    .pos('x2', T.any)
    .named('color', T.any, luma(25))
    .named('weight', T.any, pt(0.8))
    .named('label', T.any, null)
    .named('label-dy', T.any, pt(-8))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({
            start: [p['x1'], p['y']],
            end: [minus(p['x2'], pt(5)), p['y']],
            stroke: add(p['color'], p['weight']),
          }),
        ),
        _arrowHead({ dir: 'r', color: p['color'] }, p['x2'], p['y']),
        unsafeRaw.code<any>`if label != none {
    place(top + left, dx: (x1 + x2) / 2 - 6pt, dy: y + label-dy, text(size: 6.4pt, fill: color, label))
  }`,
      ]),
    )
  const _arrL = define('_arr-l')
    .pos('x1', T.any)
    .pos('y', T.any)
    .pos('x2', T.any)
    .named('color', T.any, luma(25))
    .named('weight', T.any, pt(0.8))
    .named('label', T.any, null)
    .named('label-dy', T.any, pt(-8))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x1'], p['y']], end: [add(p['x2'], pt(5)), p['y']], stroke: add(p['color'], p['weight']) }),
        ),
        _arrowHead({ dir: 'l', color: p['color'] }, p['x2'], p['y']),
        unsafeRaw.code<any>`if label != none {
    place(top + left, dx: (x1 + x2) / 2 - 6pt, dy: y + label-dy, text(size: 6.4pt, fill: color, label))
  }`,
      ]),
    )
  const _arrV = define('_arr-v')
    .pos('x', T.any)
    .pos('y1', T.any)
    .pos('y2', T.any)
    .named('color', T.any, luma(25))
    .named('weight', T.any, pt(0.8))
    .named('label', T.any, null)
    .named('label-dx', T.any, pt(4))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`if y2 > y1 {
    place(top + left, line(start: (x, y1), end: (x, y2 - 5pt), stroke: color + weight))
    _arrow-head(x, y2, dir: "d", color: color)
  } else {
    place(top + left, line(start: (x, y1), end: (x, y2 + 5pt), stroke: color + weight))
    _arrow-head(x, y2, dir: "u", color: color)
  }`,
        unsafeRaw.code<any>`if label != none {
    place(top + left, dx: x + label-dx, dy: (y1 + y2) / 2 - 4pt, text(size: 6.4pt, fill: color, label))
  }`,
      ]),
    )
  const _arrDiag = define('_arr-diag')
    .pos('x1', T.any)
    .pos('y1', T.any)
    .pos('x2', T.any)
    .pos('y2', T.any)
    .pos('dir', T.any)
    .named('color', T.any, luma(25))
    .named('weight', T.any, pt(0.8))
    .named('label', T.any, null)
    .named('label-dx', T.any, pt(0))
    .named('label-dy', T.any, pt(0))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x1'], p['y1']], end: [p['x2'], p['y2']], stroke: add(p['color'], p['weight']) }),
        ),
        _arrowHead({ dir: p['dir'], color: p['color'] }, p['x2'], p['y2']),
        unsafeRaw.code<any>`if label != none {
    place(top + left, dx: (x1 + x2) / 2 + label-dx, dy: (y1 + y2) / 2 + label-dy, text(size: 6.4pt, fill: color, label))
  }`,
      ]),
    )
  const _diagramBlock = define('_diagram-block')
    .pos('label', T.any)
    .named('w', T.any, pt(52))
    .named('h', T.any, pt(18))
    .named('fill', T.any, luma(245))
    .named('stroke', T.any, luma(25))
    .named('text-size', T.any, pt(6.6))
    .named('radius', T.any, pt(2))
    .returns(T.any)
    .body((p) =>
      box(
        { width: p['w'], height: p['h'], fill: p['fill'], stroke: add(p['stroke'], pt(0.7)), radius: p['radius'] },
        align(add(center, horizon), text({ size: p['textSize'], fill: luma(15) }, p['label'])),
      ),
    )
  const [WDecl, W] = let_('W', pt(278))
  const [HDecl, H] = let_('H', pt(232))
  const [inkDecl, ink] = let_('ink', luma(15))
  const [blockWDecl, blockW] = let_('block-w', pt(54))
  const [frameWDecl, frameW] = let_('frame-w', pt(90))
  const [framePadXDecl, framePadX] = let_('frame-pad-x', div(minus(frameW, blockW), 2))
  const [encXDecl, encX] = let_('enc-x', pt(30))
  const [decXDecl, decX] = let_('dec-x', pt(154))
  const [labelSizeDecl, labelSize] = let_('label-size', pt(5.7))
  const [smallSizeDecl, smallSize] = let_('small-size', pt(4.9))
  const [arrowWeightDecl, arrowWeight] = let_('arrow-weight', pt(0.9))
  const [nodeRDecl, nodeR] = let_('node-r', pt(3.5))
  const [positionalCenterYDecl, positionalCenterY] = let_('positional-center-y', pt(180))
  const [inputSumYDecl, inputSumY] = let_('input-sum-y', positionalCenterY)
  const [nxYDecl, nxY] = let_('nx-y', pt(118))
  const [decoderBottomLabelWidthDecl, decoderBottomLabelWidth] = let_('decoder-bottom-label-width', pt(94))
  const [pinkDecl, pink] = let_('pink', rgb('#F9DCDD'))
  const [peachDecl, peach] = let_('peach', rgb('#FFE3B8'))
  const [bluefillDecl, bluefill] = let_('bluefill', rgb('#C5E8F5'))
  const [normfillDecl, normfill] = let_('normfill', rgb('#F3F5C2'))
  const [greenfillDecl, greenfill] = let_('greenfill', rgb('#D8F0D9'))
  const [violetDecl, violet] = let_('violet', rgb('#E4E7F8'))
  const [encoderDecl, encoder] = let_('encoder', {
    x: encX,
    frameY: pt(73),
    frameH: pt(100),
    stackX: add(encX, framePadX),
    nxX: minus(encX, pt(25)),
    nxY: nxY,
    posSide: 'left',
    posLabelX: pt(-15),
    posCircleX: pt(49),
    embLabel: inline`Input${linebreak()} Embedding`,
    bottomLabel: inline`Inputs`,
    bottomLabelX: add(encX, pt(8)),
    bottomLabelWidth: pt(74),
  })
  const [decoderDecl, decoder] = let_('decoder', {
    x: decX,
    frameY: pt(41),
    frameH: pt(132),
    stackX: add(decX, framePadX),
    nxX: add(add(decX, frameW), pt(8)),
    nxY: nxY,
    posSide: 'right',
    posLabelX: pt(229),
    posCircleX: pt(224),
    embLabel: inline`Output${linebreak()} Embedding`,
    bottomLabel: inline`Outputs (shifted right)`,
    bottomLabelX: minus(add(add(decX, framePadX), div(blockW, 2)), div(decoderBottomLabelWidth, 2)),
    bottomLabelWidth: decoderBottomLabelWidth,
  })
  const cx = define('cx')
    .pos('col', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`col.stack-x + block-w / 2`)
  const cy = define('cy')
    .pos('layer', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`layer.y + layer.h / 2`)
  const diagramText = define('diagram-text')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('body', T.any)
    .named('size', T.any, labelSize)
    .named('width', T.any, auto)
    .named('align-pos', T.any, center)
    .returns(T.any)
    .body((p) =>
      place(
        { dx: p['x'], dy: p['y'] },
        add(top, left),
        block({ width: p['width'] }, align(p['alignPos'], text({ size: p['size'], fill: ink }, p['body']))),
      ),
    )
  const diagramTextCenteredOnY = define('diagram-text-centered-on-y')
    .pos('x', T.any)
    .pos('center-y', T.any)
    .pos('body', T.any)
    .named('size', T.any, labelSize)
    .named('width', T.any, auto)
    .named('align-pos', T.any, center)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`context {
    let label = block(width: width, align(align-pos, text(size: size, fill: ink, body)))
    place(top + left, dx: x, dy: center-y - measure(label).height / 2, label)
  }`,
    )
  const blockAt = define('block-at')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('label', T.any)
    .pos('fill', T.any)
    .named('h', T.any, pt(16))
    .named('size', T.any, labelSize)
    .returns(T.any)
    .body((p) =>
      place(
        { dx: p['x'], dy: p['y'] },
        add(top, left),
        _diagramBlock(
          { w: blockW, h: p['h'], fill: p['fill'], stroke: ink, textSize: p['size'], radius: pt(2.2) },
          p['label'],
        ),
      ),
    )
  const frame = define('frame')
    .pos('col', T.any)
    .returns(T.any)
    .body((p) =>
      place(
        { dx: unsafeRaw.code<any>`col.x`, dy: unsafeRaw.code<any>`col.frame-y` },
        add(top, left),
        block({
          width: frameW,
          height: unsafeRaw.code<any>`col.frame-h`,
          stroke: add(ink, pt(1.3)),
          radius: pt(7),
          fill: luma(250),
        }),
      ),
    )
  const plus = define('plus')
    .pos('x', T.any)
    .pos('y', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let r = node-r
    let d = 2.45pt
    place(top + left, dx: x - r, dy: y - r, circle(radius: r, stroke: ink + 0.85pt, fill: white))
    place(top + left, line(start: (x - d, y), end: (x + d, y), stroke: ink + 0.65pt))
    place(top + left, line(start: (x, y - d), end: (x, y + d), stroke: ink + 0.65pt))
  }`,
    )
  const posSignal = define('pos-signal')
    .pos('x', T.any)
    .pos('y', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let r = node-r
    place(top + left, dx: x - r, dy: y - r, circle(radius: r, stroke: ink + 0.9pt, fill: white))
    place(top + left, curve(
      stroke: ink + 0.65pt,
      fill: none,
      curve.move((x - 2.2pt, y + 1.1pt)),
      curve.cubic((x - 1.2pt, y + 1.1pt), (x - 1.1pt, y - 1.1pt), (x, y)),
      curve.cubic((x + 1.1pt, y + 1.1pt), (x + 1.2pt, y - 1.1pt), (x + 2.2pt, y - 1.1pt)),
    ))
  }`,
    )
  const poly = define('poly')
    .pos('points', T.any)
    .named('weight', T.any, arrowWeight)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    for i in range(points.len() - 1) {
      let a = points.at(i)
      let b = points.at(i + 1)
      place(top + left, line(start: a, end: b, stroke: ink + weight))
    }
  }`,
    )
  const arrowHead = define('arrow-head')
    .pos('x', T.any)
    .pos('y', T.any)
    .named('dir', T.any, 'r')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let len = 2.4pt
    let half = 1.5pt
    if dir == "r" {
      place(top + left, polygon((x, y), (x - len, y - half), (x - len, y + half), fill: ink))
    } else if dir == "l" {
      place(top + left, polygon((x, y), (x + len, y - half), (x + len, y + half), fill: ink))
    } else if dir == "d" {
      place(top + left, polygon((x, y), (x - half, y - len), (x + half, y - len), fill: ink))
    } else {
      place(top + left, polygon((x, y), (x - half, y + len), (x + half, y + len), fill: ink))
    }
  }`,
    )
  const arrowPoly = define('arrow-poly')
    .pos('points', T.any)
    .named('dir', T.any, 'r')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    poly(points)
    let end = points.at(points.len() - 1)
    arrow-head(end.at(0), end.at(1), dir: dir)
  }`,
    )
  const arrV = define('arr-v')
    .pos('x', T.any)
    .pos('y1', T.any)
    .pos('y2', T.any)
    .named('weight', T.any, arrowWeight)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let len = 2.4pt
    if y2 > y1 {
      place(top + left, line(start: (x, y1), end: (x, y2 - len), stroke: ink + weight))
      arrow-head(x, y2, dir: "d")
    } else {
      place(top + left, line(start: (x, y1), end: (x, y2 + len), stroke: ink + weight))
      arrow-head(x, y2, dir: "u")
    }
  }`,
    )
  const attentionFork = define('attention-fork')
    .pos('layer', T.any)
    .named('gap', T.any, pt(6))
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let xs = (layer.x + 9pt, layer.x + block-w / 2, layer.x + block-w - 9pt)
    let y = layer.y + layer.h + gap
    place(top + left, line(start: (xs.first(), y), end: (xs.last(), y), stroke: ink + arrow-weight))
    for x in xs {
      arr-v(x, y, layer.y + layer.h)
    }
  }`,
    )
  const branchY = define('branch-y')
    .pos('start', T.any)
    .pos('end', T.any)
    .named('pct', T.any, 0.3)
    .returns(T.any)
    .body((p) => add(p['start'], times(p['pct'], minus(p['end'], p['start']))))
  const residual = define('residual')
    .pos('col', T.any)
    .pos('layer', T.any)
    .pos('norm', T.any)
    .pos('branch-from', T.any)
    .pos('branch-to', T.any)
    .named('side', T.any, 'left')
    .named('branch-pct', T.any, 0.3)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let bus = if side == "left" { col.x + 6pt } else { col.x + frame-w - 6pt }
    let by = branch-y(branch-from, branch-to, pct: branch-pct)
    let from = (cx(col), by)
    let mid = (bus, by)
    let into = if side == "left" {
      (norm.x, cy(norm))
    } else {
      (norm.x + block-w, cy(norm))
    }
    arrow-poly((from, mid, (bus, cy(norm)), into), dir: if side == "left" { "r" } else { "l" })
  }`,
    )
  const columnBottom = define('column-bottom')
    .pos('col', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let emb-y = 188pt
    let emb-h = 14pt
    let plus-y = positional-center-y
    block-at(col.stack-x, emb-y, col.emb-label, pink, h: emb-h, size: 4.2pt)
    plus(cx(col), plus-y)
    arr-v(cx(col), emb-y + emb-h + 10pt, emb-y + emb-h)
    arr-v(cx(col), emb-y, plus-y + 3.5pt)
    diagram-text(col.bottom-label-x, 221pt, col.bottom-label, size: 7.2pt, width: col.bottom-label-width)
    diagram-text-centered-on-y(col.pos-label-x, positional-center-y, [Positional Embedding], size: 5.0pt, width: 60pt)
    pos-signal(col.pos-circle-x, plus-y)
    if col.pos-side == "left" {
      place(top + left, line(
        start: (col.pos-circle-x + node-r, plus-y),
        end: (cx(col) - node-r, plus-y),
        stroke: ink + arrow-weight,
      ))
    } else {
      place(top + left, line(
        start: (cx(col) + node-r, plus-y),
        end: (col.pos-circle-x - node-r, plus-y),
        stroke: ink + arrow-weight,
      ))
    }
  }`,
    )
  const sumToAttention = define('sum-to-attention')
    .pos('col', T.any)
    .pos('layer', T.any)
    .named('gap', T.any, pt(6))
    .returns(T.any)
    .body((p) =>
      place(
        add(top, left),
        line({
          start: [cx(p['col']), minus(inputSumY, pt(3.5))],
          end: unsafeRaw.code<any>`(cx(col), layer.y + layer.h + gap)`,
          stroke: add(ink, arrowWeight),
        }),
      ),
    )
  const [lowerAttnShiftDecl, lowerAttnShift] = let_('lower-attn-shift', pt(3))
  const [transformerDiagramDecl, transformerDiagram] = let_(
    'transformer-diagram',
    align(
      center,
      unsafeRaw.code<any>`{
  let W = 278pt
  let H = 232pt
  let ink = luma(15)
  let block-w = 54pt
  let frame-w = 90pt
  let frame-pad-x = (frame-w - block-w) / 2
  let enc-x = 30pt
  let dec-x = 154pt
  let label-size = 5.7pt
  let small-size = 4.9pt
  let arrow-weight = 0.9pt
  let node-r = 3.5pt
  let positional-center-y = 180pt
  let input-sum-y = positional-center-y
  let nx-y = 118pt
  let decoder-bottom-label-width = 94pt
  let pink = rgb("#F9DCDD")
  let peach = rgb("#FFE3B8")
  let bluefill = rgb("#C5E8F5")
  let normfill = rgb("#F3F5C2")
  let greenfill = rgb("#D8F0D9")
  let violet = rgb("#E4E7F8")

  let encoder = (
    x: enc-x,
    frame-y: 73pt,
    frame-h: 100pt,
    stack-x: enc-x + frame-pad-x,
    nx-x: enc-x - 25pt,
    nx-y: nx-y,
    pos-side: "left",
    pos-label-x: -15pt,
    pos-circle-x: 49pt,
    emb-label: [Input\\ Embedding],
    bottom-label: [Inputs],
    bottom-label-x: enc-x + 8pt,
    bottom-label-width: 74pt,
  )
  let decoder = (
    x: dec-x,
    frame-y: 41pt,
    frame-h: 132pt,
    stack-x: dec-x + frame-pad-x,
    nx-x: dec-x + frame-w + 8pt,
    nx-y: nx-y,
    pos-side: "right",
    pos-label-x: 229pt,
    pos-circle-x: 224pt,
    emb-label: [Output\\ Embedding],
    bottom-label: [Outputs (shifted right)],
    bottom-label-x: dec-x + frame-pad-x + block-w / 2 - decoder-bottom-label-width / 2,
    bottom-label-width: decoder-bottom-label-width,
  )

  let cx(col) = col.stack-x + block-w / 2
  let cy(layer) = layer.y + layer.h / 2

  let diagram-text(x, y, body, size: label-size, width: auto, align-pos: center) = place(
    top + left,
    dx: x,
    dy: y,
    block(width: width, align(align-pos, text(size: size, fill: ink, body))),
  )
  let diagram-text-centered-on-y(x, center-y, body, size: label-size, width: auto, align-pos: center) = context {
    let label = block(width: width, align(align-pos, text(size: size, fill: ink, body)))
    place(top + left, dx: x, dy: center-y - measure(label).height / 2, label)
  }
  let block-at(x, y, label, fill, h: 16pt, size: label-size) = place(
    top + left,
    dx: x,
    dy: y,
    _diagram-block(label, w: block-w, h: h, fill: fill, stroke: ink, text-size: size, radius: 2.2pt),
  )
  let frame(col) = place(
    top + left,
    dx: col.x,
    dy: col.frame-y,
    block(
      width: frame-w,
      height: col.frame-h,
      stroke: ink + 1.3pt,
      radius: 7pt,
      fill: luma(250),
    ),
  )
  let plus(x, y) = {
    let r = node-r
    let d = 2.45pt
    place(top + left, dx: x - r, dy: y - r, circle(radius: r, stroke: ink + 0.85pt, fill: white))
    place(top + left, line(start: (x - d, y), end: (x + d, y), stroke: ink + 0.65pt))
    place(top + left, line(start: (x, y - d), end: (x, y + d), stroke: ink + 0.65pt))
  }
  let pos-signal(x, y) = {
    let r = node-r
    place(top + left, dx: x - r, dy: y - r, circle(radius: r, stroke: ink + 0.9pt, fill: white))
    place(top + left, curve(
      stroke: ink + 0.65pt,
      fill: none,
      curve.move((x - 2.2pt, y + 1.1pt)),
      curve.cubic((x - 1.2pt, y + 1.1pt), (x - 1.1pt, y - 1.1pt), (x, y)),
      curve.cubic((x + 1.1pt, y + 1.1pt), (x + 1.2pt, y - 1.1pt), (x + 2.2pt, y - 1.1pt)),
    ))
  }
  let poly(points, weight: arrow-weight) = {
    for i in range(points.len() - 1) {
      let a = points.at(i)
      let b = points.at(i + 1)
      place(top + left, line(start: a, end: b, stroke: ink + weight))
    }
  }
  let arrow-head(x, y, dir: "r") = {
    let len = 2.4pt
    let half = 1.5pt
    if dir == "r" {
      place(top + left, polygon((x, y), (x - len, y - half), (x - len, y + half), fill: ink))
    } else if dir == "l" {
      place(top + left, polygon((x, y), (x + len, y - half), (x + len, y + half), fill: ink))
    } else if dir == "d" {
      place(top + left, polygon((x, y), (x - half, y - len), (x + half, y - len), fill: ink))
    } else {
      place(top + left, polygon((x, y), (x - half, y + len), (x + half, y + len), fill: ink))
    }
  }
  let arrow-poly(points, dir: "r") = {
    poly(points)
    let end = points.at(points.len() - 1)
    arrow-head(end.at(0), end.at(1), dir: dir)
  }
  let arr-v(x, y1, y2, weight: arrow-weight) = {
    let len = 2.4pt
    if y2 > y1 {
      place(top + left, line(start: (x, y1), end: (x, y2 - len), stroke: ink + weight))
      arrow-head(x, y2, dir: "d")
    } else {
      place(top + left, line(start: (x, y1), end: (x, y2 + len), stroke: ink + weight))
      arrow-head(x, y2, dir: "u")
    }
  }
  let attention-fork(layer, gap: 6pt) = {
    let xs = (layer.x + 9pt, layer.x + block-w / 2, layer.x + block-w - 9pt)
    let y = layer.y + layer.h + gap
    place(top + left, line(start: (xs.first(), y), end: (xs.last(), y), stroke: ink + arrow-weight))
    for x in xs {
      arr-v(x, y, layer.y + layer.h)
    }
  }
  let branch-y(start, end, pct: 0.3) = start + pct * (end - start)
  let residual(col, layer, norm, branch-from, branch-to, side: "left", branch-pct: 0.3) = {
    let bus = if side == "left" { col.x + 6pt } else { col.x + frame-w - 6pt }
    let by = branch-y(branch-from, branch-to, pct: branch-pct)
    let from = (cx(col), by)
    let mid = (bus, by)
    let into = if side == "left" {
      (norm.x, cy(norm))
    } else {
      (norm.x + block-w, cy(norm))
    }
    arrow-poly((from, mid, (bus, cy(norm)), into), dir: if side == "left" { "r" } else { "l" })
  }
  let column-bottom(col) = {
    let emb-y = 188pt
    let emb-h = 14pt
    let plus-y = positional-center-y
    block-at(col.stack-x, emb-y, col.emb-label, pink, h: emb-h, size: 4.2pt)
    plus(cx(col), plus-y)
    arr-v(cx(col), emb-y + emb-h + 10pt, emb-y + emb-h)
    arr-v(cx(col), emb-y, plus-y + 3.5pt)
    diagram-text(col.bottom-label-x, 221pt, col.bottom-label, size: 7.2pt, width: col.bottom-label-width)
    diagram-text-centered-on-y(col.pos-label-x, positional-center-y, [Positional Embedding], size: 5.0pt, width: 60pt)
    pos-signal(col.pos-circle-x, plus-y)
    if col.pos-side == "left" {
      place(top + left, line(
        start: (col.pos-circle-x + node-r, plus-y),
        end: (cx(col) - node-r, plus-y),
        stroke: ink + arrow-weight,
      ))
    } else {
      place(top + left, line(
        start: (cx(col) + node-r, plus-y),
        end: (col.pos-circle-x - node-r, plus-y),
        stroke: ink + arrow-weight,
      ))
    }
  }
  let sum-to-attention(col, layer, gap: 6pt) = place(
    top + left,
    line(
      start: (cx(col), input-sum-y - 3.5pt),
      end: (cx(col), layer.y + layer.h + gap),
      stroke: ink + arrow-weight,
    ),
  )
  let lower-attn-shift = 3pt

  let enc-layers = (
    (
      key: "attn",
      x: encoder.stack-x,
      y: 138pt + lower-attn-shift,
      h: 16pt,
      label: [Multi-Head\\ Attention],
      fill: peach,
      size: 4.5pt,
    ),
    (
      key: "norm1",
      x: encoder.stack-x,
      y: 123pt + lower-attn-shift,
      h: 9pt,
      label: [Add & Norm],
      fill: normfill,
      size: 4.8pt,
    ),
    (key: "ff", x: encoder.stack-x, y: 92pt, h: 15pt, label: [Feed\\ Forward], fill: bluefill, size: 4.7pt),
    (key: "norm2", x: encoder.stack-x, y: 77pt, h: 9pt, label: [Add & Norm], fill: normfill, size: 4.8pt),
  )
  let dec-layers = (
    (
      key: "masked",
      x: decoder.stack-x,
      y: 139pt + lower-attn-shift,
      h: 18pt,
      label: [Masked\\ Multi-Head\\ Attention],
      fill: peach,
      size: 4.0pt,
    ),
    (
      key: "norm1",
      x: decoder.stack-x,
      y: 125pt + lower-attn-shift,
      h: 9pt,
      label: [Add & Norm],
      fill: normfill,
      size: 4.8pt,
    ),
    (key: "cross", x: decoder.stack-x, y: 98pt, h: 14pt, label: [Multi-Head\\ Attention], fill: peach, size: 4.2pt),
    (key: "norm2", x: decoder.stack-x, y: 84pt, h: 9pt, label: [Add & Norm], fill: normfill, size: 4.8pt),
    (key: "ff", x: decoder.stack-x, y: 59pt, h: 14pt, label: [Feed\\ Forward], fill: bluefill, size: 4.4pt),
    (key: "norm3", x: decoder.stack-x, y: 45pt, h: 9pt, label: [Add & Norm], fill: normfill, size: 4.8pt),
    (key: "linear", x: decoder.stack-x, y: 27pt, h: 9pt, label: [Linear], fill: violet, size: 4.9pt),
    (key: "softmax", x: decoder.stack-x, y: 15.5pt, h: 9pt, label: [Softmax], fill: greenfill, size: 4.9pt),
  )
  let enc(key) = enc-layers.find(layer => layer.key == key)
  let dec(key) = dec-layers.find(layer => layer.key == key)

  box(width: W, height: H, {
    frame(encoder)
    frame(decoder)
    diagram-text(encoder.nx-x, encoder.nx-y, [N×], size: 12pt)
    diagram-text(decoder.nx-x, decoder.nx-y, [N×], size: 12pt)
    diagram-text(decoder.stack-x - 7pt, 0pt, [Output Probabilities], size: 7.2pt, width: block-w + 14pt)

    column-bottom(encoder)
    column-bottom(decoder)

    for layer in enc-layers {
      block-at(layer.x, layer.y, layer.label, layer.fill, h: layer.h, size: layer.size)
    }
    for layer in dec-layers {
      block-at(layer.x, layer.y, layer.label, layer.fill, h: layer.h, size: layer.size)
    }

    attention-fork(enc("attn"))
    attention-fork(dec("masked"))
    sum-to-attention(encoder, enc("attn"))
    sum-to-attention(decoder, dec("masked"))

    residual(
      encoder,
      enc("attn"),
      enc("norm1"),
      input-sum-y - 3.5pt,
      enc("attn").y + enc("attn").h + 6pt,
      side: "left",
      branch-pct: 0.65,
    )
    residual(encoder, enc("ff"), enc("norm2"), enc("norm1").y, enc("ff").y + enc("ff").h, side: "left", branch-pct: 0.5)
    residual(
      decoder,
      dec("masked"),
      dec("norm1"),
      input-sum-y - 3.5pt,
      dec("masked").y + dec("masked").h + 6pt,
      side: "right",
      branch-pct: 0.65,
    )
    residual(decoder, dec("cross"), dec("norm2"), dec("norm1").y, dec("cross").y + dec("cross").h, side: "right")
    residual(
      decoder,
      dec("ff"),
      dec("norm3"),
      dec("norm2").y,
      dec("ff").y + dec("ff").h,
      side: "right",
      branch-pct: 0.5,
    )

    arr-v(cx(encoder), enc("attn").y, enc("norm1").y + enc("norm1").h)
    arr-v(cx(encoder), enc("norm1").y, enc("ff").y + enc("ff").h)
    arr-v(cx(encoder), enc("ff").y, enc("norm2").y + enc("norm2").h)
    arr-v(cx(decoder), dec("masked").y, dec("norm1").y + dec("norm1").h)
    let cross-input-xs = (
      dec("cross").x + 9pt,
      dec("cross").x + block-w / 2,
      dec("cross").x + block-w - 9pt,
    )
    let cross-right-route-y = branch-y(dec("norm1").y, dec("cross").y + dec("cross").h, pct: 0.3) - 4pt
    arrow-poly(
      (
        (cx(decoder), dec("norm1").y),
        (cx(decoder), cross-right-route-y),
        (cross-input-xs.last(), cross-right-route-y),
        (cross-input-xs.last(), dec("cross").y + dec("cross").h),
      ),
      dir: "u",
    )
    arr-v(cx(decoder), dec("cross").y, dec("norm2").y + dec("norm2").h)
    arr-v(cx(decoder), dec("norm2").y, dec("ff").y + dec("ff").h)
    arr-v(cx(decoder), dec("ff").y, dec("norm3").y + dec("norm3").h)
    arr-v(cx(decoder), dec("norm3").y, dec("linear").y + dec("linear").h)
    arr-v(cx(decoder), dec("linear").y, dec("softmax").y + dec("softmax").h)
    arr-v(cx(decoder), dec("softmax").y, 10pt)

    let enc-out-x = cx(encoder)
    let enc-out-y = enc("norm2").y
    let enc-route-y = encoder.frame-y - 5pt
    let enc-dec-route-x = (encoder.x + frame-w + decoder.x) / 2
    let cross-in-y = dec("cross").y + dec("cross").h + 5pt
    poly((
      (enc-out-x, enc-out-y),
      (enc-out-x, enc-route-y),
      (enc-dec-route-x, enc-route-y),
      (enc-dec-route-x, cross-in-y),
      (cross-input-xs.at(1), cross-in-y),
    ))
    arr-v(cross-input-xs.at(1), cross-in-y, dec("cross").y + dec("cross").h)
    arrow-poly(
      (
        (enc-dec-route-x, cross-in-y),
        (cross-input-xs.at(0), cross-in-y),
        (cross-input-xs.at(0), dec("cross").y + dec("cross").h),
      ),
      dir: "u",
    )
  })
}`,
    ),
  )
  const [WDecl_2, W_2] = let_('W', pt(248))
  const [HDecl_2, H_2] = let_('H', pt(112))
  const [inkDecl_2, ink_2] = let_('ink', luma(0))
  const [strokeDecl, stroke_2] = let_('stroke', add(ink_2, pt(1)))
  const label_2 = define('label')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('body', T.any)
    .named('size', T.any, pt(7.2))
    .returns(T.any)
    .body((p) => place({ dx: p['x'], dy: p['y'] }, add(top, left), text({ size: p['size'], fill: ink_2 }, p['body'])))
  const arrowR = define('arrow-r')
    .pos('x1', T.any)
    .pos('y', T.any)
    .pos('x2', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x1'], p['y']], end: [minus(p['x2'], pt(5)), p['y']], stroke: stroke_2 }),
        ),
        _arrowHead({ dir: 'r', color: ink_2 }, p['x2'], p['y']),
      ]),
    )
  const arrowL = define('arrow-l')
    .pos('x1', T.any)
    .pos('y', T.any)
    .pos('x2', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(add(top, left), line({ start: [p['x1'], p['y']], end: [add(p['x2'], pt(5)), p['y']], stroke: stroke_2 })),
        _arrowHead({ dir: 'l', color: ink_2 }, p['x2'], p['y']),
      ]),
    )
  const arrowU = define('arrow-u')
    .pos('x', T.any)
    .pos('y1', T.any)
    .pos('y2', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(add(top, left), line({ start: [p['x'], p['y1']], end: [p['x'], add(p['y2'], pt(5))], stroke: stroke_2 })),
        _arrowHead({ dir: 'u', color: ink_2 }, p['x'], p['y2']),
      ]),
    )
  const arrowD = define('arrow-d')
    .pos('x', T.any)
    .pos('y1', T.any)
    .pos('y2', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x'], p['y1']], end: [p['x'], minus(p['y2'], pt(5))], stroke: stroke_2 }),
        ),
        _arrowHead({ dir: 'd', color: ink_2 }, p['x'], p['y2']),
      ]),
    )
  const labeledArrow = define('labeled-arrow')
    .pos('x1', T.any)
    .pos('y1', T.any)
    .pos('x2', T.any)
    .pos('y2', T.any)
    .pos('body', T.any)
    .named('label-dx', T.any, pt(0))
    .named('label-dy', T.any, pt(0))
    .named('label-size', T.any, pt(8))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`if y1 == y2 and x2 > x1 {
      arrow-r(x1, y1, x2)
    } else if y1 == y2 and x2 < x1 {
      arrow-l(x1, y1, x2)
    } else if x1 == x2 and y2 > y1 {
      arrow-d(x1, y1, y2)
    } else if x1 == x2 and y2 < y1 {
      arrow-u(x1, y1, y2)
    } else {
      place(top + left, line(start: (x1, y1), end: (x2, y2), stroke: stroke))
    }`,
        unsafeRaw.code<any>`if body != none {
      label((x1 + x2) / 2 + label-dx, (y1 + y2) / 2 + label-dy, body, size: label-size)
    }`,
      ]),
    )
  const sysBox = define('sys-box')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('label', T.any)
    .named('w', T.any, pt(26))
    .named('h', T.any, pt(26))
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: p['x'], dy: p['y'] },
          add(top, left),
          box(
            { width: p['w'], height: p['h'], fill: white, stroke: add(ink_2, pt(1.2)) },
            align(add(center, horizon), text({ size: pt(8), fill: ink_2 }, p['label'])),
          ),
        ),
      ),
    )
  const sumSign = define('sum-sign')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      place(
        { dx: p['x'], dy: p['y'] },
        add(top, left),
        box(
          { width: pt(5.5), height: pt(5.5) },
          align(add(center, horizon), text({ size: pt(5.8), fill: ink_2 }, p['body'])),
        ),
      ),
    )
  const sumNode = define('sum-node')
    .pos('x', T.any)
    .pos('y', T.any)
    .named('kind', T.any, 'feedback')
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let r = 10pt
    let d = 7.1pt
    let signs = if kind == "disturbance" {
      ((-8.6pt, -3.0pt, [+]), (-2.8pt, -8.6pt, [+]))
    } else {
      ((-8.6pt, -3.0pt, [+]), (-2.8pt, 3.2pt, [−]))
    }
    place(top + left, dx: x - r, dy: y - r, circle(radius: r, stroke: ink + 1.0pt, fill: white))
    place(top + left, line(start: (x - d, y - d), end: (x + d, y + d), stroke: ink + 0.65pt))
    place(top + left, line(start: (x - d, y + d), end: (x + d, y - d), stroke: ink + 0.65pt))
    for (sx, sy, sign) in signs {
      sum-sign(x + sx, y + sy, sign)
    }
  }`,
    )
  const [yDecl, y] = let_('y', pt(42))
  const [s1Decl, s1] = let_('s1', pt(48))
  const [s2Decl, s2] = let_('s2', pt(154))
  const [lowDecl, low] = let_('low', pt(85))
  const [arrowLenDecl, arrowLen] = let_('arrow-len', pt(30))
  const [disturbanceArrowLenDecl, disturbanceArrowLen] = let_('disturbance-arrow-len', pt(20))
  const [nodeRDecl_2, nodeR_2] = let_('node-r', pt(10))
  const [boxWDecl, boxW] = let_('box-w', pt(26))
  const [kXDecl, kX] = let_('k-x', add(add(s1, nodeR_2), arrowLen))
  const [gXDecl, gX] = let_('g-x', add(add(s2, nodeR_2), arrowLen))
  const [branchDecl, branch] = let_('branch', add(add(gX, boxW), div(arrowLen, 2)))
  const [hXDecl, hX] = let_('h-x', pt(144))
  const [closedLoopDiagramDecl, closedLoopDiagram] = let_(
    'closed-loop-diagram',
    align(
      center,
      codeBlock([
        WDecl_2,
        HDecl_2,
        inkDecl_2,
        strokeDecl,
        label_2.decl,
        arrowR.decl,
        arrowL.decl,
        arrowU.decl,
        arrowD.decl,
        labeledArrow.decl,
        sysBox.decl,
        sumSign.decl,
        sumNode.decl,
        box(
          { width: W_2, height: H_2 },
          codeBlock([
            yDecl,
            s1Decl,
            s2Decl,
            lowDecl,
            arrowLenDecl,
            disturbanceArrowLenDecl,
            nodeRDecl_2,
            boxWDecl,
            kXDecl,
            gXDecl,
            branchDecl,
            hXDecl,
            sumNode(s1, y),
            label_2({ size: pt(7) }, minus(kX, pt(4)), pt(17), inline`Controller`),
            sysBox(kX, pt(29), inline(unsafeRaw.math`K(z)`)),
            sumNode({ kind: 'disturbance' }, s2, y),
            label_2({ size: pt(7) }, minus(gX, pt(11)), pt(17), inline`Target System`),
            sysBox(gX, pt(29), inline(unsafeRaw.math`G(z)`)),
            sysBox(hX, pt(72), inline(unsafeRaw.math`H(z)`)),
            label_2({ size: pt(7) }, minus(hX, pt(7)), pt(103), inline`Transducer`),
            labeledArrow(
              { labelDx: pt(-10), labelDy: pt(-10) },
              minus(minus(s1, nodeR_2), arrowLen),
              y,
              minus(s1, nodeR_2),
              y,
              inline(unsafeRaw.math`R(z)`),
            ),
            labeledArrow(
              { labelDx: pt(-10), labelDy: pt(-10) },
              add(s1, nodeR_2),
              y,
              kX,
              y,
              inline(unsafeRaw.math`E(z)`),
            ),
            labeledArrow(
              { labelDx: pt(-10), labelDy: pt(-10) },
              add(kX, boxW),
              y,
              minus(s2, nodeR_2),
              y,
              inline(unsafeRaw.math`U(z)`),
            ),
            labeledArrow(
              { labelDx: pt(-10), labelDy: pt(-10) },
              add(s2, nodeR_2),
              y,
              gX,
              y,
              inline(unsafeRaw.math`V(z)`),
            ),
            labeledArrow(
              { labelDx: pt(-10), labelDy: pt(-10) },
              add(gX, boxW),
              y,
              add(add(gX, boxW), arrowLen),
              y,
              inline(unsafeRaw.math`Y(z)`),
            ),
            labeledArrow(
              { labelDx: pt(-9), labelDy: pt(-21) },
              s2,
              minus(minus(y, nodeR_2), disturbanceArrowLen),
              s2,
              minus(y, nodeR_2),
              inline(unsafeRaw.math`D(z)`),
            ),
            place(add(top, left), line({ start: [branch, y], end: [branch, low], stroke: stroke_2 })),
            arrowL(branch, low, add(hX, boxW)),
            place(add(top, left), line({ start: [hX, low], end: [s1, low], stroke: stroke_2 })),
            arrowU(s1, low, pt(52)),
            label_2({ size: pt(8) }, pt(94), pt(90), inline(unsafeRaw.math`W(z)`)),
          ]),
        ),
      ]),
    ),
  )
  const [WDecl_3, W_3] = let_('W', pt(220))
  const [HDecl_3, H_3] = let_('H', pt(86))
  const [inkDecl_3, ink_3] = let_('ink', luma(15))
  const [labelSizeDecl_2, labelSize_2] = let_('label-size', pt(9))
  const node = define('node')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('w', T.any)
    .pos('h', T.any)
    .pos('body', T.any)
    .pos('size', T.any)
    .returns(T.any)
    .body((p) =>
      place(
        { dx: minus(p['x'], div(p['w'], 2)), dy: minus(p['y'], div(p['h'], 2)) },
        add(top, left),
        box(
          { width: p['w'], height: p['h'] },
          align(add(center, horizon), text({ size: p['size'], fill: ink_3 }, p['body'])),
        ),
      ),
    )
  const arrowR_2 = define('arrow-r')
    .pos('x1', T.any)
    .pos('y', T.any)
    .pos('x2', T.any)
    .pos('body', T.any)
    .named('label-dx', T.any, pt(0))
    .named('label-dy', T.any, pt(-13))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x1'], p['y']], end: [minus(p['x2'], pt(5)), p['y']], stroke: add(ink_3, pt(0.8)) }),
        ),
        _arrowHead({ dir: 'r', color: ink_3 }, p['x2'], p['y']),
        place(
          { dx: add(div(add(p['x1'], p['x2']), 2), p['labelDx']), dy: add(p['y'], p['labelDy']) },
          add(top, left),
          text({ size: labelSize_2, fill: ink_3 }, p['body']),
        ),
      ]),
    )
  const arrowV = define('arrow-v')
    .pos('x', T.any)
    .pos('y1', T.any)
    .pos('y2', T.any)
    .pos('body', T.any)
    .named('label-dx', T.any, pt(7))
    .named('label-dy', T.any, pt(-4))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        unsafeRaw.code<any>`if y2 > y1 {
      place(top + left, line(start: (x, y1), end: (x, y2 - 5pt), stroke: ink + 0.8pt))
      _arrow-head(x, y2, dir: "d", color: ink)
    } else {
      place(top + left, line(start: (x, y1), end: (x, y2 + 5pt), stroke: ink + 0.8pt))
      _arrow-head(x, y2, dir: "u", color: ink)
    }`,
        place(
          { dx: add(p['x'], p['labelDx']), dy: add(div(add(p['y1'], p['y2']), 2), p['labelDy']) },
          add(top, left),
          text({ size: labelSize_2, fill: ink_3 }, p['body']),
        ),
      ]),
    )
  const [topYDecl, topY] = let_('top-y', pt(20))
  const [botYDecl, botY] = let_('bot-y', pt(68))
  const [leftXDecl, leftX] = let_('left-x', pt(66))
  const [rightXDecl, rightX] = let_('right-x', pt(162))
  const [gWDecl, gW] = let_('g-w', pt(24))
  const [gpWDecl, gpW] = let_('gp-w', pt(30))
  const [qWDecl, qW] = let_('q-w', pt(92))
  const [imWDecl, imW] = let_('im-w', pt(58))
  const [gArrowWDecl, gArrowW] = let_('g-arrow-w', pt(20))
  const [gpArrowWDecl, gpArrowW] = let_('gp-arrow-w', pt(24))
  const [qArrowWDecl, qArrowW] = let_('q-arrow-w', pt(74))
  const [imArrowWDecl, imArrowW] = let_('im-arrow-w', pt(42))
  const [nodeHDecl, nodeH] = let_('node-h', pt(18))
  const [kernelImageDiagramDecl, kernelImageDiagram] = let_(
    'kernel-image-diagram',
    align(
      center,
      codeBlock([
        WDecl_3,
        HDecl_3,
        inkDecl_3,
        labelSizeDecl_2,
        node.decl,
        arrowR_2.decl,
        arrowV.decl,
        box(
          { width: W_3, height: H_3 },
          codeBlock([
            topYDecl,
            botYDecl,
            leftXDecl,
            rightXDecl,
            gWDecl,
            gpWDecl,
            qWDecl,
            imWDecl,
            gArrowWDecl,
            gpArrowWDecl,
            qArrowWDecl,
            imArrowWDecl,
            nodeHDecl,
            node(leftX, topY, gW, nodeH, inline(unsafeRaw.math`G`), pt(18)),
            node(rightX, topY, gpW, nodeH, inline(unsafeRaw.math`G'`), pt(18)),
            node(leftX, botY, qW, nodeH, inline(unsafeRaw.math`G slash ker phi`), pt(16)),
            node(rightX, botY, imW, nodeH, inline(unsafeRaw.math`im phi`), pt(16)),
            arrowR_2(
              { labelDx: pt(-4) },
              add(add(leftX, div(gArrowW, 2)), pt(2)),
              topY,
              add(minus(rightX, div(gpArrowW, 2)), pt(1)),
              inline(unsafeRaw.math`phi`),
            ),
            arrowV(
              { labelDx: pt(-13) },
              leftX,
              add(add(topY, div(nodeH, 2)), pt(2)),
              add(minus(botY, div(nodeH, 2)), pt(1)),
              inline(unsafeRaw.math`-`),
            ),
            arrowR_2(
              { labelDx: pt(-8), labelDy: pt(5) },
              add(add(leftX, div(qArrowW, 2)), pt(2)),
              botY,
              add(minus(rightX, div(imArrowW, 2)), pt(1)),
              inline(unsafeRaw.math`overline(phi)`),
            ),
            arrowV(
              { labelDx: pt(7) },
              rightX,
              add(minus(botY, div(nodeH, 2)), pt(1)),
              add(add(topY, div(nodeH, 2)), pt(2)),
              inline`inc`,
            ),
          ]),
        ),
      ]),
    ),
  )
  const [WDecl_4, W_4] = let_('W', pt(176))
  const [HDecl_4, H_4] = let_('H', pt(162))
  const [inkDecl_4, ink_4] = let_('ink', luma(25))
  const [edgeDecl, edge] = let_('edge', rgb('#C66A00'))
  const [nodeRDecl_3, nodeR_3] = let_('node-r', pt(13))
  const [nodesDecl, nodes] = let_('nodes', {
    P: { x: pt(17), y: pt(99) },
    B: { x: pt(64), y: pt(58) },
    D: { x: pt(110), y: pt(17) },
    C: { x: pt(110), y: pt(98) },
    M: { x: pt(64), y: pt(139) },
    L: { x: pt(158), y: pt(139) },
  })
  const pos = define('pos')
    .pos('name', T.any)
    .returns(T.any)
    .body((p) => nodes.at(p['name']))
  const arrowDir = define('arrow-dir')
    .pos('dx', T.any)
    .pos('dy', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let ax = calc.abs(dx)
    let ay = calc.abs(dy)
    if ax < ay * 0.45 {
      if dy > 0pt { "d" } else { "u" }
    } else if ay < ax * 0.45 {
      if dx > 0pt { "r" } else { "l" }
    } else if dx > 0pt and dy > 0pt {
      "dr"
    } else if dx < 0pt and dy > 0pt {
      "dl"
    } else if dx > 0pt and dy < 0pt {
      "ur"
    } else {
      "ul"
    }
  }`,
    )
  const node_2 = define('node')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('short', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: minus(p['x'], nodeR_3), dy: minus(p['y'], nodeR_3) },
          add(top, left),
          box(
            {
              width: times(2, nodeR_3),
              height: times(2, nodeR_3),
              radius: nodeR_3,
              stroke: add(ink_4, pt(0.7)),
              fill: white,
            },
            align(add(center, horizon), text({ size: pt(8.8), style: 'italic' }, p['short'])),
          ),
        ),
      ),
    )
  const nodeByName = define('node-by-name')
    .pos('name', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let p = pos(name)
    node(p.x, p.y, body)
  }`,
    )
  const labelAt = define('label-at')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('body', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: minus(p['x'], pt(7.5)), dy: minus(p['y'], pt(5)) },
          add(top, left),
          box(
            { width: pt(15), height: pt(10), fill: white, inset: pt(0) },
            align(add(center, horizon), text({ size: pt(7.6), fill: ink_4 }, p['body'])),
          ),
        ),
      ),
    )
  const edgeLine = define('edge-line')
    .pos('a', T.any)
    .pos('b', T.any)
    .named('label', T.any, null)
    .named('label-dx', T.any, pt(0))
    .named('label-dy', T.any, pt(0))
    .named('both', T.any, false)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let pa = pos(a)
    let pb = pos(b)
    let dx = pb.x - pa.x
    let dy = pb.y - pa.y
    let ndx = dx / 1pt
    let ndy = dy / 1pt
    let len = calc.sqrt(ndx * ndx + ndy * ndy)
    let ux = ndx / len
    let uy = ndy / len
    let sx = pa.x + ux * (node-r + 1pt)
    let sy = pa.y + uy * (node-r + 1pt)
    let ex = pb.x - ux * (node-r + 1pt)
    let ey = pb.y - uy * (node-r + 1pt)

    place(top + left, line(start: (sx, sy), end: (ex, ey), stroke: edge + 0.85pt))
    _arrow-head(ex, ey, dir: arrow-dir(dx, dy), color: edge)
    if both {
      _arrow-head(sx, sy, dir: arrow-dir(-dx, -dy), color: edge)
    }
    if label != none {
      label-at((sx + ex) / 2 + label-dx, (sy + ey) / 2 + label-dy, label)
    }
  }`,
    )
  const edgeCurve = define('edge-curve')
    .pos('a', T.any)
    .pos('b', T.any)
    .named('label', T.any, null)
    .named('label-dx', T.any, pt(0))
    .named('label-dy', T.any, pt(0))
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let pa = pos(a)
    let pb = pos(b)
    let c1x = W + 18pt
    let c1y = H - 42pt
    let c2x = W + 8pt
    let c2y = 22pt
    let sdx = (c1x - pa.x) / 1pt
    let sdy = (c1y - pa.y) / 1pt
    let slen = calc.sqrt(sdx * sdx + sdy * sdy)
    let sx = pa.x + sdx / slen * (node-r + 1pt)
    let sy = pa.y + sdy / slen * (node-r + 1pt)
    let edx = (c2x - pb.x) / 1pt
    let edy = (c2y - pb.y) / 1pt
    let elen = calc.sqrt(edx * edx + edy * edy)
    let ex = pb.x + edx / elen * (node-r + 1pt)
    let ey = pb.y + edy / elen * (node-r + 1pt)

    place(top + left, curve(
      stroke: edge + 0.85pt,
      fill: none,
      curve.move((sx, sy)),
      curve.cubic((c1x, c1y), (c2x, c2y), (ex, ey)),
    ))
    _arrow-head(ex, ey, dir: "l", color: edge)
    if label != none {
      let mx = 0.125 * sx + 0.375 * c1x + 0.375 * c2x + 0.125 * ex
      let my = 0.125 * sy + 0.375 * c1y + 0.375 * c2y + 0.125 * ey
      label-at(mx + label-dx, my + label-dy, label)
    }
  }`,
    )
  const [weightedTransitionGraphDecl, weightedTransitionGraph] = let_(
    'weighted-transition-graph',
    align(
      center,
      codeBlock([
        WDecl_4,
        HDecl_4,
        inkDecl_4,
        edgeDecl,
        nodeRDecl_3,
        nodesDecl,
        pos.decl,
        arrowDir.decl,
        node_2.decl,
        nodeByName.decl,
        labelAt.decl,
        edgeLine.decl,
        edgeCurve.decl,
        box(
          { width: W_4, height: H_4 },
          codeBlock([
            edgeLine({ label: inline`10` }, 'D', 'B'),
            edgeLine({ label: inline`10` }, 'B', 'P'),
            edgeLine({ label: inline`4` }, 'P', 'M'),
            edgeLine({ label: inline`5`, both: true }, 'B', 'M'),
            edgeLine({ label: inline`3` }, 'C', 'B'),
            edgeLine({ label: inline`9` }, 'M', 'C'),
            edgeLine({ label: inline`4`, both: true }, 'D', 'C'),
            edgeLine({ label: inline`10` }, 'L', 'M'),
            edgeCurve({ label: inline`10` }, 'L', 'D'),
            nodeByName('P', inline(unsafeRaw.math`P`)),
            nodeByName('B', inline(unsafeRaw.math`B`)),
            nodeByName('D', inline(unsafeRaw.math`D`)),
            nodeByName('C', inline(unsafeRaw.math`C`)),
            nodeByName('M', inline(unsafeRaw.math`M`)),
            nodeByName('L', inline(unsafeRaw.math`L`)),
          ]),
        ),
      ]),
    ),
  )
  const [WDecl_5, W_5] = let_('W', pt(248))
  const [HDecl_5, H_5] = let_('H', pt(126))
  const [plDecl, pl] = let_('pl', pt(32))
  const [prDecl, pr] = let_('pr', pt(13))
  const [ptDecl, pt_2] = let_('pt', pt(21))
  const [pbDecl, pb] = let_('pb', pt(24))
  const [iwDecl, iw] = let_('iw', minus(minus(W_5, pl), pr))
  const [ihDecl, ih] = let_('ih', minus(minus(H_5, pt_2), pb))
  const [xsDecl, xs] = let_(
    'xs',
    data([float(0), 0.5, float(1), 1.5, float(2), 2.5, float(3), 3.5, float(4), 4.5, float(5)]),
  )
  const [yaDecl, ya] = let_('ya', data([0.52, 0.57, 0.63, 0.7, 0.76, 0.81, 0.85, 0.88, 0.9, 0.91, 0.92]))
  const [ybDecl, yb] = let_('yb', data([0.48, 0.51, 0.55, 0.6, 0.65, 0.69, 0.73, 0.76, 0.79, 0.81, 0.83]))
  const [ycDecl, yc] = let_('yc', data([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5]))
  const [xminDecl, xmin] = let_('xmin', float(0))
  const [xmaxDecl, xmax] = let_('xmax', float(5))
  const [yminDecl, ymin] = let_('ymin', 0.44)
  const [ymaxDecl, ymax] = let_('ymax', 0.96)
  const px = define('px')
    .pos('xi', T.any)
    .returns(T.any)
    .body((p) => add(pl, times(div(minus(p['xi'], xmin), minus(xmax, xmin)), iw)))
  const py = define('py')
    .pos('yi', T.any)
    .returns(T.any)
    .body((p) => add(pt_2, times(div(minus(ymax, p['yi']), minus(ymax, ymin)), ih)))
  const tickLabel = define('tick-label')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('width', T.any)
    .pos('body', T.any)
    .named('size', T.any, pt(5.4))
    .named('fill', T.any, luma(70))
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: minus(p['x'], div(p['width'], 2)), dy: minus(p['y'], pt(4.5)) },
          add(top, left),
          box(
            { width: p['width'], height: pt(9), inset: pt(0) },
            align(add(center, horizon), text({ size: p['size'], fill: p['fill'] }, p['body'])),
          ),
        ),
      ),
    )
  const lineLegendItem = define('line-legend-item')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('col', T.any)
    .pos('body', T.any)
    .named('text-width', T.any, pt(18))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          add(top, left),
          line({ start: [p['x'], p['y']], end: [add(p['x'], pt(9)), p['y']], stroke: add(p['col'], pt(1.1)) }),
        ),
        place(
          { dx: add(p['x'], pt(12)), dy: minus(p['y'], pt(6.5)) },
          add(top, left),
          box(
            { width: p['textWidth'], height: pt(13), inset: pt(0) },
            align(add(left, horizon), text({ size: pt(5.3), fill: luma(45) }, p['body'])),
          ),
        ),
      ]),
    )
  const mkpath = define('mkpath')
    .pos('ys', T.any)
    .pos('col', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    let pts = xs.zip(ys).map(p => (px(p.first()), py(p.last())))
    curve(
      stroke: col + 1.35pt,
      fill: none,
      curve.move(pts.first()),
      ..pts.slice(1).map(curve.line),
    )
  }`,
    )
  const markers = define('markers')
    .pos('ys', T.any)
    .pos('col', T.any)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
    for (xv, yv) in xs.zip(ys) {
      place(top + left, dx: px(xv) - 1.6pt, dy: py(yv) - 1.6pt, circle(radius: 1.6pt, fill: white, stroke: col + 0.7pt))
    }
  }`,
    )
  const [accuracyChartDecl, accuracyChart] = let_(
    'accuracy-chart',
    align(
      center,
      codeBlock([
        WDecl_5,
        HDecl_5,
        plDecl,
        prDecl,
        ptDecl,
        pbDecl,
        iwDecl,
        ihDecl,
        xsDecl,
        yaDecl,
        ybDecl,
        ycDecl,
        xminDecl,
        xmaxDecl,
        yminDecl,
        ymaxDecl,
        px.decl,
        py.decl,
        tickLabel.decl,
        lineLegendItem.decl,
        mkpath.decl,
        markers.decl,
        box(
          { width: W_5, height: H_5, stroke: add(luma(180), pt(0.45)), fill: luma(252) },
          codeBlock([
            place(
              { dx: pt(8), dy: pt(5) },
              add(top, left),
              text({ size: pt(6.8), weight: 'bold', fill: luma(25) }, inline`Validation accuracy by epoch`),
            ),
            place(
              { dx: minus(W_5, pt(91)), dy: pt(5) },
              add(top, left),
              box(
                { width: pt(83), height: pt(13), fill: white, stroke: add(luma(220), pt(0.35)) },
                codeBlock([
                  lineLegendItem({ textWidth: pt(8) }, pt(5), pt(6.5), blue.darken(pct(50)), inline`A`),
                  lineLegendItem({ textWidth: pt(8) }, pt(28), pt(6.5), red.darken(pct(20)), inline`B`),
                  lineLegendItem({ textWidth: pt(17) }, pt(52), pt(6.5), luma(150), inline`base`),
                ]),
              ),
            ),
            place(
              { dx: add(pl, pt(3)), dy: add(pt_2, pt(3)) },
              add(top, left),
              text({ size: pt(5.2), fill: luma(75) }, inline`Accuracy`),
            ),
            unsafeRaw.code<any>`for yi in (0.5, 0.6, 0.7, 0.8, 0.9) {
      place(top + left, line(start: (pl, py(yi)), end: (W - pr, py(yi)), stroke: luma(222) + 0.45pt))
      tick-label(pl / 2, py(yi), pl - 8pt, str(yi))
    }`,
            place(
              add(top, left),
              line({ start: [pl, pt_2], end: [pl, minus(H_5, pb)], stroke: add(luma(95), pt(0.65)) }),
            ),
            place(
              add(top, left),
              line({
                start: [pl, minus(H_5, pb)],
                end: [minus(W_5, pr), minus(H_5, pb)],
                stroke: add(luma(95), pt(0.65)),
              }),
            ),
            unsafeRaw.code<any>`for xi in (0, 1, 2, 3, 4, 5) {
      place(top + left, line(
        start: (px(float(xi)), H - pb),
        end: (px(float(xi)), H - pb + 2pt),
        stroke: luma(95) + 0.45pt,
      ))
      tick-label(px(float(xi)), H - pb + 8pt, 12pt, str(xi))
    }`,
            place(
              { dx: minus(div(W_5, 2), pt(12)), dy: minus(H_5, pt(9)) },
              add(top, left),
              text({ size: pt(5.5), fill: luma(65) }, inline`Epoch`),
            ),
            place(add(top, left), mkpath(ya, blue.darken(pct(50)))),
            place(add(top, left), mkpath(yb, red.darken(pct(20)))),
            place(add(top, left), mkpath(yc, luma(160))),
            markers(ya, blue.darken(pct(50))),
            markers(yb, red.darken(pct(20))),
          ]),
        ),
      ]),
    ),
  )
  const [WDecl_6, W_6] = let_('W', pt(248))
  const [HDecl_6, H_6] = let_('H', pt(126))
  const [plDecl_2, pl_2] = let_('pl', pt(32))
  const [prDecl_2, pr_2] = let_('pr', pt(12))
  const [ptDecl_2, pt_3] = let_('pt', pt(21))
  const [pbDecl_2, pb_2] = let_('pb', pt(26))
  const [iwDecl_2, iw_2] = let_('iw', minus(minus(W_6, pl_2), pr_2))
  const [ihDecl_2, ih_2] = let_('ih', minus(minus(H_6, pt_3), pb_2))
  const [baselineDecl, baseline] = let_('baseline', minus(H_6, pb_2))
  const [yearsDecl, years] = let_('years', data([2020, 2021, 2022, 2023, 2024]))
  const [vaDecl, va] = let_('va', data([62, 67, 71, 74, 78]))
  const [vbDecl, vb] = let_('vb', data([55, 58, 61, 65, 69]))
  const [maxvDecl, maxv] = let_('maxv', float(85))
  const [bwDecl, bw] = let_('bw', pt(10.5))
  const [gapDecl, gap] = let_('gap', pt(4))
  const [groupWDecl, groupW] = let_('group-w', add(times(2, bw), gap))
  const [groupStepDecl, groupStep] = let_('group-step', div(iw_2, years.len()))
  const [caDecl, ca] = let_('ca', blue.darken(pct(50)))
  const [cbDecl, cb] = let_('cb', red.darken(pct(20)))
  const py_2 = define('py')
    .pos('score', T.any)
    .returns(T.any)
    .body((p) => minus(baseline, times(div(float(p['score']), maxv), ih_2)))
  const groupCenter = define('group-center')
    .pos('i', T.any)
    .returns(T.any)
    .body((p) => add(pl_2, times(add(float(p['i']), 0.5), groupStep)))
  const groupLeft = define('group-left')
    .pos('i', T.any)
    .returns(T.any)
    .body((p) => minus(groupCenter(p['i']), div(groupW, 2)))
  const barCenter = define('bar-center')
    .pos('i', T.any)
    .pos('which', T.any)
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`group-left(i) + if which == "a" { bw / 2 } else { bw + gap + bw / 2 }`)
  const tickLabel_2 = define('tick-label')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('width', T.any)
    .pos('body', T.any)
    .named('size', T.any, pt(5.2))
    .named('fill', T.any, luma(70))
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: minus(p['x'], div(p['width'], 2)), dy: minus(p['y'], pt(4.5)) },
          add(top, left),
          box(
            { width: p['width'], height: pt(9), inset: pt(0) },
            align(add(center, horizon), text({ size: p['size'], fill: p['fill'] }, p['body'])),
          ),
        ),
      ),
    )
  const valueLabel = define('value-label')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('body', T.any)
    .pos('fill', T.any)
    .returns(T.any)
    .body((p) =>
      codeBlock(
        [],
        place(
          { dx: minus(p['x'], pt(7)), dy: minus(p['y'], pt(9)) },
          add(top, left),
          box(
            { width: pt(14), height: pt(8), inset: pt(0) },
            align(add(center, horizon), text({ size: pt(4.8), fill: p['fill'] }, p['body'])),
          ),
        ),
      ),
    )
  const swatchLegendItem = define('swatch-legend-item')
    .pos('x', T.any)
    .pos('y', T.any)
    .pos('col', T.any)
    .pos('body', T.any)
    .named('text-width', T.any, pt(8))
    .returns(T.any)
    .body((p) =>
      codeBlock([
        place(
          { dx: p['x'], dy: minus(p['y'], pt(2.5)) },
          add(top, left),
          rect({ width: pt(6), height: pt(5), fill: p['col'] }),
        ),
        place(
          { dx: add(p['x'], pt(9)), dy: minus(p['y'], pt(6.5)) },
          add(top, left),
          box(
            { width: p['textWidth'], height: pt(13), inset: pt(0) },
            align(add(left, horizon), text({ size: pt(5.3), fill: luma(45) }, p['body'])),
          ),
        ),
      ]),
    )
  const [groupedBarChartDecl, groupedBarChart] = let_(
    'grouped-bar-chart',
    align(
      center,
      codeBlock([
        WDecl_6,
        HDecl_6,
        plDecl_2,
        prDecl_2,
        ptDecl_2,
        pbDecl_2,
        iwDecl_2,
        ihDecl_2,
        baselineDecl,
        yearsDecl,
        vaDecl,
        vbDecl,
        maxvDecl,
        bwDecl,
        gapDecl,
        groupWDecl,
        groupStepDecl,
        caDecl,
        cbDecl,
        py_2.decl,
        groupCenter.decl,
        groupLeft.decl,
        barCenter.decl,
        tickLabel_2.decl,
        valueLabel.decl,
        swatchLegendItem.decl,
        box(
          { width: W_6, height: H_6, stroke: add(luma(180), pt(0.45)), fill: luma(252) },
          codeBlock([
            place(
              { dx: pt(8), dy: pt(5) },
              add(top, left),
              text({ size: pt(6.8), weight: 'bold', fill: luma(25) }, inline`Mean score by cohort`),
            ),
            place(
              { dx: minus(W_6, pt(58)), dy: pt(5) },
              add(top, left),
              box(
                { width: pt(50), height: pt(13), fill: white, stroke: add(luma(220), pt(0.35)) },
                codeBlock([
                  swatchLegendItem(pt(5), pt(6.5), ca, inline`A`),
                  swatchLegendItem(pt(27), pt(6.5), cb, inline`B`),
                ]),
              ),
            ),
            place(
              { dx: add(pl_2, pt(3)), dy: add(pt_3, pt(3)) },
              add(top, left),
              text({ size: pt(5.2), fill: luma(75) }, inline`Score`),
            ),
            unsafeRaw.code<any>`for score in (20, 40, 60, 80) {
      let yp = py(score)
      place(top + left, line(start: (pl, yp), end: (W - pr, yp), stroke: luma(222) + 0.45pt))
      tick-label(pl / 2, yp, pl - 8pt, str(score))
    }`,
            place(
              add(top, left),
              line({ start: [pl_2, pt_3], end: [pl_2, baseline], stroke: add(luma(95), pt(0.65)) }),
            ),
            place(
              add(top, left),
              line({ start: [pl_2, baseline], end: [minus(W_6, pr_2), baseline], stroke: add(luma(95), pt(0.65)) }),
            ),
            unsafeRaw.code<any>`for (i, yr) in years.enumerate() {
      let a = va.at(i)
      let b = vb.at(i)
      let x0 = group-left(i)
      let ya = py(a)
      let yb = py(b)
      place(top + left, dx: x0, dy: ya, rect(width: bw, height: baseline - ya, fill: ca))
      place(top + left, dx: x0 + bw + gap, dy: yb, rect(width: bw, height: baseline - yb, fill: cb))
      tick-label(group-center(i), baseline + 8pt, group-step - 2pt, str(yr), size: 5.1pt, fill: luma(55))
      value-label(bar-center(i, "a"), ya, str(a), ca)
      value-label(bar-center(i, "b"), yb, str(b), cb)
    }`,
            place(
              { dx: minus(div(W_6, 2), pt(9)), dy: minus(H_6, pt(9)) },
              add(top, left),
              text({ size: pt(5.5), fill: luma(65) }, inline`Year`),
            ),
          ]),
        ),
      ]),
    ),
  )
  return doc(
    importPackage('@preview/black-angular-frame:0.1.1', [
      blackAngularFrame,
      newSection,
      slide,
      bafTableCell,
      codeBox,
      twoCol,
      bafFigure,
      bafVisual,
      pseudoCode,
      bafDiagram,
      definition,
      theorem,
      lemma,
      corollary,
      proof,
      remark,
      example,
      exercise,
      proposition,
      bafBox,
      bafEquation,
      boxSeparator,
      finalSlide,
    ]),
    presentationConfigDecl,
    show(blackAngularFrame_with({ config: presentationConfig })),
    inline(newSection('Configuration')),
    inline(
      slide(
        { title: 'Template Configuration' },
        blocks(
          inline`The template is configured from a single Typst dictionary. The table below lists the keys that
can be passed through ${raw('config')}, the expected value shape, and the defaults used when
a key is omitted.`,
          inline(v(pt(3))),
          cell.decl,
          inline(
            grid(
              { columns: [pct(23), pct(20), pct(20), pct(37)] },
              cell({ fill: rgb('#1C1C1C'), weight: 'bold' }, inline(text({ fill: white }, inline`Name`))),
              cell({ fill: rgb('#1C1C1C'), weight: 'bold' }, inline(text({ fill: white }, inline`Expected value`))),
              cell({ fill: rgb('#1C1C1C'), weight: 'bold' }, inline(text({ fill: white }, inline`Default`))),
              cell({ fill: rgb('#1C1C1C'), weight: 'bold' }, inline(text({ fill: white }, inline`Description`))),
              cell(inline(raw('title'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Presentation title.`),
              cell(inline(raw('subtitle'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Presentation subtitle.`),
              cell(inline(raw('authors'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Author line shown on the cover and footer.`),
              cell(inline(raw('institution'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Institution shown on the cover and footer.`),
              cell(inline(raw('date'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Date shown on the cover.`),
              cell(inline(raw('final-message'))),
              cell(inline`String`),
              cell(inline(raw('""'))),
              cell(inline`Message shown on the last slide.`),
              cell(inline(raw('footer-content-1'))),
              cell(inline`String`),
              cell(inline(raw('authors'))),
              cell(inline`Left text in the upper footer band.`),
              cell(inline(raw('footer-content-2'))),
              cell(inline`String`),
              cell(inline(raw('institution'))),
              cell(inline`Right text in the upper footer band.`),
              cell(inline(raw('footer-content-3'))),
              cell(inline`String`),
              cell(inline(raw('title'))),
              cell(inline`Left text in the lower footer band.`),
              cell(inline(raw('primary-color'))),
              cell(inline`Color`),
              cell(inline(raw('rgb("#1C1C1C")'))),
              cell(inline`Main bars, highlights, numbering, and accents.`),
              cell(inline(raw('secondary-color'))),
              cell(inline`Color`),
              cell(inline(raw('rgb("#D9D9D9")'))),
              cell(inline`Secondary header and footer bands.`),
              cell(inline(raw('background-color'))),
              cell(inline`Color`),
              cell(inline(raw('rgb("#FFFFFF")'))),
              cell(inline`Slide background color.`),
              cell(inline(raw('font-color'))),
              cell(inline`Color`),
              cell(inline(raw('luma(20)'))),
              cell(inline`Default body text color.`),
              cell(inline(raw('header-font-color-1'))),
              cell(inline`Color`),
              cell(inline(raw('_muted-nav(primary-color)'))),
              cell(inline`Inactive text in the primary header band and text in the lower footer band.`),
              cell(inline(raw('header-font-color-2'))),
              cell(inline`Color`),
              cell(inline(raw('primary-color'))),
              cell(inline`Text in the secondary header and footer bands.`),
              cell(inline(raw('header-font-color-1-highlight'))),
              cell(inline`Color`),
              cell(inline(raw('rgb("#FFFFFF")'))),
              cell(inline`Active text in the primary header band.`),
              cell(inline(raw('content-center'))),
              cell(inline`Float 0-1`),
              cell(inline(raw('0.3'))),
              cell(inline`Vertical position used to center content; 0 starts at the top, 1 at the bottom.`),
              cell(inline(raw('content-upper-padding'))),
              cell(inline`Float 0-1`),
              cell(inline(raw('0.05'))),
              cell(inline`Top proportion of the available content area kept empty.`),
              cell(inline(raw('content-lower-padding'))),
              cell(inline`Float 0-1`),
              cell(inline(raw('0.05'))),
              cell(inline`Bottom proportion of the available content area kept empty.`),
              cell(inline(raw('logos'))),
              cell(inline(raw('array[content]'))),
              cell(inline(raw('()'))),
              cell(inline`Logo images or custom content shown on the cover.`),
              cell(inline(raw('TOC'))),
              cell(inline`Bool`),
              cell(inline(raw('true'))),
              cell(inline`Whether to add the table of contents slide with section links.`),
            ),
          ),
          inline`${v(pt(3))} These names are intentionally presentation-level settings, so changing the theme
does not require editing the template internals.`,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Template Configuration Code' },
        blocks(
          inline`The example presentation stores its theme and metadata in ${raw('presentation-config')}, then
passes that dictionary to the template with ${raw('black-angular-frame.with')}.`,
          inline(v(pt(3))),
          inline(
            codeBox(
              {
                type: 'Typst',
                title: 'Import and configure the template',
                lang: 'typst',
                color: luma(90),
                fill: luma(248),
                textSize: pt(5.6),
              },
              '#import "@preview/black-angular-frame:0.1.1": *\n\n#let presentation-config = (\n  title: "Black Angular Frame",\n  subtitle: "A Typst Template for Academic Presentations",\n  authors: "Author One, Author Two",\n  institution: "Institution Name",\n  date: "May 2026",\n  final-message: "Thank you for your attention",\n  primary-color: rgb("#1C1C1C"),\n  secondary-color: rgb("#D9D9D9"),\n  background-color: rgb("#FFFFFF"),\n  font-color: luma(20),\n  header-font-color-1: rgb("#999999"),\n  header-font-color-2: rgb("#1C1C1C"),\n  header-font-color-1-highlight: rgb("#FFFFFF"),\n  content-center: 0.3,\n  content-upper-padding: 0.05,\n  content-lower-padding: 0.05,\n  logos: (\n    image("assets/typst-logo.png", height: 45pt),\n    image("assets/github-logo.png", height: 45pt),\n  ),\n  TOC: true,\n)\n\n#show: black-angular-frame.with(config: presentation-config)',
            ),
          ),
          inline`${v(pt(3))} The rest of the document can focus on sections and slides while the template reads
these values for the cover, navigation, footer, body text, logos, TOC, and final slide.`,
        ),
      ),
    ),
    inline(newSection('Typography')),
    inline(
      slide(
        { title: 'Default Fonts' },
        blocks(
          'The template uses three IBM Plex families when available, with standard fallback fonts if they are not installed:',
          inline`${v(pt(5))} ${grid(
            { columns: [fr(1), fr(1), fr(1)], columnGutter: pt(5) },
            block(
              { stroke: add(blue.darken(pct(50)), pt(0.6)), inset: pt(7), width: pct(100) },
              text(
                { font: 'IBM Plex Serif', size: pt(11.5) },
                inline`${space}${strong(inline`IBM Plex Serif`)} ${linebreak()} body text ${linebreak()} Regular, ${emph(inline`italic`)},
${linebreak()} ${strong(inline`bold`)}, ${emph(inline(strong(inline`bold-italic`)))}${space}`,
              ),
            ),
            block(
              { stroke: add(blue.darken(pct(50)), pt(0.6)), inset: pt(7), width: pct(100) },
              text(
                { font: 'IBM Plex Sans', size: pt(11.5) },
                inline`${space}${strong(inline`IBM Plex Sans`)} ${linebreak()} titles & headings ${linebreak()} Regular,
${emph(inline`italic`)}, ${linebreak()} ${strong(inline`bold`)}, ${emph(inline(strong(inline`bold-italic`)))}${space}`,
              ),
            ),
            block(
              { stroke: add(blue.darken(pct(50)), pt(0.6)), inset: pt(7), width: pct(100) },
              text(
                { font: 'IBM Plex Mono', size: pt(11.5) },
                inline`${space}${strong(inline`IBM Plex Mono`)} ${linebreak()} code & verbatim ${linebreak()} Regular,
${emph(inline`italic`)}, ${linebreak()} ${strong(inline`bold`)}${space}`,
              ),
            ),
          )} ${v(pt(6))} Inline
styling: ${text({ weight: 'bold' }, inline`bold`)}, ${text({ style: 'italic' }, inline`italic`)},
${text({ fill: blue.darken(pct(50)) }, inline`colored`)}, ${underline(inline`underlined`)},
${text({ size: pt(13) }, inline`large (13 pt)`)}, ${text({ size: pt(7.5) }, inline`small (7.5 pt)`)}.`,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Text Sizing and Semantic Emphasis' },
        blocks(
          inline(
            v(pt(2)),
            space,
            text({ size: pt(18), weight: 'bold', fill: blue.darken(pct(50)) }, inline`Headline -- 18 pt bold`),
            space,
            linebreak(),
            space,
            text({ size: pt(14), weight: 'bold' }, inline`Subheading -- 14 pt bold`),
            space,
            linebreak(),
            space,
            text({ size: pt(12) }, inline`Section heading -- 12 pt regular`),
            space,
            linebreak(),
            space,
            text({ size: pt(10) }, inline`Body text -- 10 pt (default)`),
            space,
            linebreak(),
            space,
            text({ size: pt(8), fill: luma(60) }, inline`Caption / footnote -- 8 pt muted`),
          ),
          inline`${v(pt(8))} Semantic use: ${text({ style: 'italic' }, inline`italics for emphasis`)}, ${text({ weight: 'bold' }, inline`bold for key terms`)},
${text({ fill: red.darken(pct(20)) }, inline`red for warnings`)}, ${text({ fill: green.darken(pct(25)) }, inline`green for results`)}.
Combine for ${text({ style: 'italic', weight: 'bold', fill: blue.darken(pct(50)) }, inline`critical highlighted points`)}.`,
          inline`${v(pt(4))} Change the global accent via ${raw('primary-color')}, the secondary bands via ${raw('secondary-color')},
and the page fill via ${raw('background-color')}. These parameters propagate through the navigation
bar, footer, section dividers, TOC numbering squares, and theorem environments.`,
        ),
      ),
    ),
    inline(newSection('Lists & Enumerations')),
    inline(
      slide(
        { title: 'Bullet Points and Nested Lists' },
        blocks(
          inline(
            twoCol(
              blocks(
                m.lines(
                  inline(strong(inline`Unordered list (three levels):`)),
                  m.list(
                    m.item(
                      m.lines(
                        'First top-level item',
                        m.list(
                          m.item(['Nested child A']),
                          m.item(
                            m.lines('Nested child B', m.list(m.item(['Deeply nested']), m.item(['Another deep item']))),
                          ),
                        ),
                      ),
                    ),
                    m.item(m.lines('Second top-level item', m.list(m.item(['Another child'])))),
                    m.item(['Third top-level item']),
                  ),
                ),
              ),
              blocks(
                m.lines(
                  inline(strong(inline`Ordered enumeration (three levels):`)),
                  m.enum(
                    m.item(m.lines('Step one: initialise', m.enum(m.item(['Sub-step 1a']), m.item(['Sub-step 1b'])))),
                    m.item(
                      m.lines(
                        'Step two: process data',
                        m.enum(m.item(m.lines('Sub-step 2a', m.enum(m.item(['Detail 2a-i']))))),
                      ),
                    ),
                    m.item(['Step three: evaluate output']),
                    m.item(['Step four: report results']),
                  ),
                ),
              ),
            ),
          ),
          inline`${v(pt(5))} Typst automatically styles bullet symbols and numerals at each nesting depth. Ordered
and unordered lists can be freely mixed at any level.`,
        ),
      ),
    ),
    inline(newSection('Figures')),
    inline(
      slide(
        { title: 'Inserting and Referencing Figures' },
        inline(
          space,
          twoCol(
            blocks(
              inline`Figures use ${raw('#baf-figure(caption: [...])')}. The counter resets per section; reference
figures by their auto-assigned number. Longer surrounding paragraphs make it easier to inspect
the vertical rhythm before and after visual material.`,
              inline`${v(pt(5))} As shown in ${strong(inline`Figure 1`)}, a colored rectangle acts as a placeholder.
In practice pass ${raw('image("diagram.svg")')} or any Typst content as the figure body. This
text intentionally spans multiple lines so the figure margins can be judged against realistic
prose.`,
              inline`${v(pt(4))} ${strong(inline`Figure 2`)} illustrates that captions appear italic below the figure,
numbered automatically within the current section. The paragraph below the visual block should
feel close enough to belong to the same slide, but not so close that the caption looks cramped.`,
            ),
            blocks(
              'The first placeholder represents a diagram or image inserted into the slide flow. A few lines of prose above it help show how the template separates ordinary text from framed visual content.',
              inline(
                bafFigure(
                  { caption: inline`Placeholder -- replace with ${raw('image("diagram.svg")')}.` },
                  inline(
                    space,
                    rect(
                      {
                        width: pct(100),
                        height: pt(62),
                        fill: blue.darken(pct(50)).lighten(pct(88)),
                        stroke: add(blue.darken(pct(50)), pt(0.8)),
                      },
                      align(
                        add(center, horizon),
                        text({ fill: blue.darken(pct(50)), size: pt(9) }, inline`Diagram / Image here`),
                      ),
                    ),
                    space,
                  ),
                ),
                space,
                bafFigure(
                  { caption: inline`Second figure -- captions are italic, automatically numbered.` },
                  inline(
                    space,
                    rect(
                      { width: pct(100), height: pt(38), fill: luma(240), stroke: add(luma(190), pt(0.6)) },
                      align(add(center, horizon), text({ fill: luma(80), size: pt(9) }, inline`Another placeholder`)),
                    ),
                    space,
                  ),
                ),
              ),
              'After the second figure, this short paragraph checks the lower margin beneath a caption. It should read as a continuation of the slide narrative rather than as text accidentally attached to the figure.',
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Full-Width and Fractional-Width Figures (With Captions)' },
        inline(
          space,
          twoCol(
            blocks(
              'A figure can expand to the full width of its column when the content should dominate the layout. This is useful for diagrams, screenshots, or images that need as much horizontal room as possible.',
              inline(
                bafFigure(
                  { caption: inline`Full-width placeholder figure spanning the whole column.` },
                  inline(
                    space,
                    rect(
                      {
                        width: pct(100),
                        height: pt(60),
                        fill: blue.darken(pct(50)).lighten(pct(88)),
                        stroke: add(blue.darken(pct(50)), pt(0.8)),
                      },
                      align(
                        add(center, horizon),
                        text({ fill: blue.darken(pct(50)), size: pt(9) }, inline`Full-width figure`),
                      ),
                    ),
                    space,
                  ),
                ),
              ),
              'The caption should stay centered under the figure even when the visual takes the entire available width of the column.',
            ),
            blocks(
              'Smaller visuals often read better when they keep some white space around them. A fractional-width figure makes that possible while still preserving the same numbering and caption behavior.',
              inline(
                bafFigure(
                  { caption: inline`Fractional-width placeholder figure centered inside the column.` },
                  inline(
                    space,
                    align(
                      center,
                      rect(
                        { width: pct(68), height: pt(60), fill: luma(240), stroke: add(luma(190), pt(0.6)) },
                        align(
                          add(center, horizon),
                          text({ fill: luma(80), size: pt(9) }, inline`Fractional-width figure`),
                        ),
                      ),
                    ),
                    space,
                  ),
                ),
              ),
              'This example checks that a narrower figure still aligns cleanly in the column and that the caption feels attached to the centered image rather than to the whole column width.',
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Full-Width and Fractional-Width Figures (No Captions)' },
        inline(
          space,
          twoCol(
            blocks(
              'The same pair can also be shown without captions when the slide is purely illustrative and the surrounding prose already provides enough context for the audience.',
              inline(
                bafVisual(
                  inline(
                    space,
                    rect(
                      {
                        width: pct(100),
                        height: pt(60),
                        fill: blue.darken(pct(50)).lighten(pct(88)),
                        stroke: add(blue.darken(pct(50)), pt(0.8)),
                      },
                      align(
                        add(center, horizon),
                        text({ fill: blue.darken(pct(50)), size: pt(9) }, inline`Full-width figure`),
                      ),
                    ),
                    space,
                  ),
                ),
              ),
              'Without a caption, the lower margin should still separate the figure from the next paragraph and keep the slide from feeling cramped.',
            ),
            blocks(
              'The fractional-width version below uses the same visual content but keeps the narrower footprint. This lets us compare centered image placement with and without the caption layer.',
              inline(
                bafVisual(
                  inline(
                    space,
                    rect(
                      { width: pct(68), height: pt(60), fill: luma(240), stroke: add(luma(190), pt(0.6)) },
                      align(
                        add(center, horizon),
                        text({ fill: luma(80), size: pt(9) }, inline`Fractional-width figure`),
                      ),
                    ),
                    space,
                  ),
                ),
              ),
              'The surrounding text remains multi-line on purpose so we can judge the spacing around a centered narrow figure in the same way as we do for captioned figures.',
            ),
          ),
          space,
        ),
      ),
    ),
    inline(newSection({ slideTitle: 'Two-Column Layouts' }, 'Layouts')),
    inline(
      slide(
        { title: 'Two-Column Layout' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(50) },
            blocks(
              m.heading(2, 'Left column'),
              m.lines(
                inline`The ${raw('#two-col(left, right)')} helper builds a two-column ${raw('grid')}. Parameters:`,
                m.list(
                  m.item([raw('left-width'), space, sym.dash.en, space, 'fraction of slide width (default 48%)']),
                  m.item([raw('gutter'), space, sym.dash.en, space, 'gap between columns (default 4%)']),
                ),
              ),
              inline`${v(pt(4))} Works well for: text + figure, code + output, comparative tables, side-by-side theorem
boxes.`,
            ),
            blocks(
              m.heading(2, 'Right column'),
              inline`Any Typst content fits inside a column, including nested ${raw('two-col')} calls, theorem boxes,
figures, and tables.`,
              inline(
                bafVisual(
                  inline(
                    space,
                    rect(
                      { width: pct(100), height: pt(58), fill: luma(245), stroke: add(luma(200), pt(0.6)) },
                      align(
                        add(center, horizon),
                        text({ size: pt(9), fill: luma(60) }, inline`Arbitrary block inside a column`),
                      ),
                    ),
                    space,
                  ),
                ),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(newSection({ slideTitle: 'Source Code & Pseudo-code' }, 'Code Blocks')),
    inline(
      slide(
        { title: 'Source Code and Pseudo-code Side by Side' },
        inline(
          space,
          twoCol(
            inline`${space}${codeBox({ type: 'Source Code', title: 'Python', lang: 'python', color: luma(110), fill: luma(245) }, 'def softmax(x):\n    e = np.exp(x - x.max(axis=-1, keepdims=True))\n    return e / e.sum(axis=-1, keepdims=True)\n\ndef cross_entropy(logits, labels):\n    probs = softmax(logits)\n    n = labels.shape[0]\n    log_p = np.log(probs[range(n), labels])\n    return -log_p.mean()')}
Uses ${raw('IBM Plex Mono')} on a light grey background. Pass a language name to ${raw('#code-box(..., lang: "...")')}
for syntax highlighting.${space}`,
            inline`${space}${pseudoCode({ title: 'Mini-Batch SGD' }, 'Algorithm: Mini-Batch SGD\nInput: loss L, data D, lr eta, T, B\n-------------------------------------\nfor t = 1 to T do\n  B_t <- sample B examples from D\n  g   <- grad_theta L(theta; B_t)\n  theta <- theta - eta * g\nend for\nreturn theta')}
Pseudo-code now uses the same framed box language as the theorem environments, with a ${raw('type')}
label and ${raw('title')}.${space}`,
          ),
          space,
        ),
      ),
    ),
    inline(newSection('Tables')),
    inline(
      slide(
        { title: 'Paper-style and Grid-style Tables (No Captions)' },
        inline(
          space,
          twoCol(
            blocks(
              inline`${strong(inline`Paper style`)} (booktabs-like -- horizontal rules only)`,
              'This table is introduced by a short paragraph rather than a single label. The extra prose makes the spacing above the table visible in a realistic slide, where a table usually follows a sentence or two of setup.',
              m.lines(
                paperCell.decl,
                inline`${bafVisual(inline(space, block({ width: pct(100) }, codeBlock([line({ length: pct(100), stroke: pt(0.9) }), grid({ columns: [pct(28), pct(24), pct(24), pct(24)] }, paperCell({ header: true, modelCol: true }, inline(strong(inline`Method`))), paperCell({ header: true, pos: center }, inline(strong(inline`Acc. (%)`))), paperCell({ header: true, pos: center }, inline(strong(inline`F${sub(inline`1`)}`))), paperCell({ header: true, pos: center }, inline(strong(inline`AUC`))), paperCell({ modelCol: true, firstData: true }, inline`Baseline`), paperCell({ pos: center, firstData: true }, inline`72.3`), paperCell({ pos: center, firstData: true }, inline`0.701`), paperCell({ pos: center, firstData: true }, inline`0.743`), paperCell({ modelCol: true }, inline`Model A`), paperCell({ pos: center }, inline`81.5`), paperCell({ pos: center }, inline`0.803`), paperCell({ pos: center }, inline`0.851`), paperCell({ modelCol: true }, inline`Model B`), paperCell({ pos: center }, inline(strong(inline`88.9`))), paperCell({ pos: center }, inline(strong(inline`0.876`))), paperCell({ pos: center }, inline(strong(inline`0.903`)))), line({ length: pct(100), stroke: pt(0.9) })])), space))}
Classic academic style: only top and bottom rules, no vertical lines. The text after the table
deliberately runs for a couple of lines so the lower margin can be compared with the upper margin.`,
              ),
            ),
            blocks(
              inline`${strong(inline`Grid style`)} (full borders, colored header, alternating rows)`,
              'The grid version is meant for dense numeric summaries or dashboard-like reporting. A longer lead-in makes it easier to see whether the table feels attached to the explanation or floats too far away.',
              m.lines(
                gridCell.decl,
                inline`${bafVisual(inline(space, block({ width: pct(100) }, grid({ columns: [pct(28), pct(24), pct(24), pct(24)] }, gridCell({ fill: blue.darken(pct(50)), pos: left }, inline(text({ fill: white }, inline`Method`))), gridCell({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`Acc. (%)`))), gridCell({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`F${sub(inline`1`)}`))), gridCell({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`AUC`))), gridCell({ fill: luma(248), pos: left }, inline`Baseline`), gridCell({ fill: luma(248) }, inline`72.3`), gridCell({ fill: luma(248) }, inline`0.701`), gridCell({ fill: luma(248) }, inline`0.743`), gridCell({ fill: white, pos: left }, inline`Model A`), gridCell({ fill: white }, inline`81.5`), gridCell({ fill: white }, inline`0.803`), gridCell({ fill: white }, inline`0.851`), gridCell({ fill: luma(248), pos: left }, inline`Model B`), gridCell({ fill: luma(248) }, inline(strong(inline`88.9`))), gridCell({ fill: luma(248) }, inline(strong(inline`0.876`))), gridCell({ fill: luma(248) }, inline(strong(inline`0.903`))))), space))}
Dashboard style: solid grid, alternating row shading. This closing note also spans multiple
lines, which helps reveal whether the table block leaves enough room before normal prose resumes.`,
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Paper-style and Grid-style Tables (With Captions)' },
        inline(
          space,
          twoCol(
            blocks(
              inline`${strong(inline`Paper style`)} (booktabs-like -- horizontal rules only)`,
              'Captions are useful when the table needs to be referenced later in the talk or connected to a source. This paragraph gives the captioned table enough surrounding prose to test both the top margin and the caption spacing.',
              m.lines(
                paperCell_2.decl,
                inline`${figure({ kind: table, caption: inline`Placeholder caption for the paper-style table.` }, codeBlock([], block({ width: pct(100) }, codeBlock([line({ length: pct(100), stroke: pt(0.9) }), grid({ columns: [pct(28), pct(24), pct(24), pct(24)] }, paperCell_2({ header: true, modelCol: true }, inline(strong(inline`Method`))), paperCell_2({ header: true, pos: center }, inline(strong(inline`Acc. (%)`))), paperCell_2({ header: true, pos: center }, inline(strong(inline`F${sub(inline`1`)}`))), paperCell_2({ header: true, pos: center }, inline(strong(inline`AUC`))), paperCell_2({ modelCol: true, firstData: true }, inline`Baseline`), paperCell_2({ pos: center, firstData: true }, inline`72.3`), paperCell_2({ pos: center, firstData: true }, inline`0.701`), paperCell_2({ pos: center, firstData: true }, inline`0.743`), paperCell_2({ modelCol: true }, inline`Model A`), paperCell_2({ pos: center }, inline`81.5`), paperCell_2({ pos: center }, inline`0.803`), paperCell_2({ pos: center }, inline`0.851`), paperCell_2({ modelCol: true }, inline`Model B`), paperCell_2({ pos: center }, inline(strong(inline`88.9`))), paperCell_2({ pos: center }, inline(strong(inline`0.876`))), paperCell_2({ pos: center }, inline(strong(inline`0.903`)))), line({ length: pct(100), stroke: pt(0.9) })]))))}
Classic academic style: only top and bottom rules, no vertical lines. With a caption present,
the paragraph after the table should sit beneath the full table block rather than feeling glued
to the caption.`,
              ),
            ),
            blocks(
              inline`${strong(inline`Grid style`)} (full borders, colored header, alternating rows)`,
              'The captioned grid table shows how a more operational table behaves inside the same layout. The text before it is intentionally longer so vertical spacing is visible without relying on empty slide area.',
              m.lines(
                gridCell_2.decl,
                inline`${figure({ kind: table, caption: inline`Placeholder caption for the grid-style table.` }, codeBlock([], block({ width: pct(100) }, grid({ columns: [pct(28), pct(24), pct(24), pct(24)] }, gridCell_2({ fill: blue.darken(pct(50)), pos: left }, inline(text({ fill: white }, inline`Method`))), gridCell_2({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`Acc. (%)`))), gridCell_2({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`F${sub(inline`1`)}`))), gridCell_2({ fill: blue.darken(pct(50)) }, inline(text({ fill: white }, inline`AUC`))), gridCell_2({ fill: luma(248), pos: left }, inline`Baseline`), gridCell_2({ fill: luma(248) }, inline`72.3`), gridCell_2({ fill: luma(248) }, inline`0.701`), gridCell_2({ fill: luma(248) }, inline`0.743`), gridCell_2({ fill: white, pos: left }, inline`Model A`), gridCell_2({ fill: white }, inline`81.5`), gridCell_2({ fill: white }, inline`0.803`), gridCell_2({ fill: white }, inline`0.851`), gridCell_2({ fill: luma(248), pos: left }, inline`Model B`), gridCell_2({ fill: luma(248) }, inline(strong(inline`88.9`))), gridCell_2({ fill: luma(248) }, inline(strong(inline`0.876`))), gridCell_2({ fill: luma(248) }, inline(strong(inline`0.903`)))))))}
Dashboard style: solid grid, alternating row shading. This final description should have comfortable
breathing room after the caption while still reading as part of the same explanatory unit.`,
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(newSection('Diagrams & Charts')),
    _arrowHead.decl,
    _arrR.decl,
    _arrL.decl,
    _arrV.decl,
    _arrDiag.decl,
    _diagramBlock.decl,
    transformerDiagramDecl,
    closedLoopDiagramDecl,
    kernelImageDiagramDecl,
    weightedTransitionGraphDecl,
    inline(
      slide(
        { title: 'Block Diagrams' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            blocks(
              'Transformer encoder-decoder stack with attention, feed-forward blocks, residual paths, and layer normalisation.',
              inline(
                bafDiagram(
                  { caption: inline`Transformer encoder-decoder block diagram (Vaswani et al., 2017).` },
                  inline(space, transformerDiagram, space),
                ),
              ),
            ),
            blocks(
              'A closed-loop controller compares the reference signal with the measured output, drives the plant, and routes the response through a feedback transducer.',
              inline`${bafDiagram({ caption: inline`Closed-loop control system with controller, plant, disturbance input, and feedback transducer.` }, inline(space, closedLoopDiagram, space))}
The disturbance ${unsafeRaw.math`D(z)`} enters before the plant, while ${unsafeRaw.math`H(z)`}
shapes the measured feedback signal ${unsafeRaw.math`W(z)`} returned to the summing junction.`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Linear Algebra Diagram and Transition Graph' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            blocks(
              inline`For a homomorphism ${unsafeRaw.math`phi: G -> G'`}, the ${strong(inline`kernel`)} determines
the quotient ${unsafeRaw.math`G slash ker phi`}, while the ${strong(inline`image`)} is the subgroup
of reachable outputs in ${unsafeRaw.math`G'`}.`,
              inline`${bafDiagram({ caption: inline`Kernel-image decomposition for a homomorphism ${unsafeRaw.math`phi: G -> G'`}.` }, inline(space, kernelImageDiagram, space))}
The induced map ${unsafeRaw.math`overline(phi)`} sends cosets modulo ${unsafeRaw.math`ker phi`}
onto ${unsafeRaw.math`im phi`}, and the inclusion embeds that image back into ${unsafeRaw.math`G'`}.`,
            ),
            blocks(
              'A weighted directed graph encodes reachable states as nodes and transition costs as labels on the arcs. This version keeps the notation compact to match the reference diagram.',
              inline`${bafDiagram({ caption: inline`Weighted directed transition graph; edge labels denote transition costs.` }, inline(space, weightedTransitionGraph, space))}
Parallel and long-range transitions are shown with separate arrows, making bidirectional moves
and high-cost paths visible at a glance.`,
            ),
          ),
          space,
        ),
      ),
    ),
    accuracyChartDecl,
    groupedBarChartDecl,
    inline(
      slide(
        { title: 'Model Accuracy and Cohort Scores (No Captions)' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            blocks(
              inline`The accuracy curves compare Model A, Model B, and a 50% baseline across epochs ${unsafeRaw.math`x in [0,5]`}.
Model A stays ahead throughout, while both learned models rise well above the baseline.`,
              inline`${bafVisual(inline(accuracyChart))} At epoch 5, ${strong(inline`Model A`)} reaches 92% and ${strong(inline`Model B`)}
reaches 83%. Their gap grows up to epoch 3 and then narrows from 12 to 9 percentage points by
the final epoch.`,
            ),
            blocks(
              inline`The grouped bars compare mean test scores for Group A and Group B from 2020 to 2024. Both cohorts
improve each year, with ${strong(inline`Group A`)} leading every annual pair.`,
              inline`${bafVisual(inline(groupedBarChart))} Scores rise from 62 to 78 for ${strong(inline`Group A`)}
and from 55 to 69 for ${strong(inline`Group B`)}. The gap widens from 7 points in 2020 to 9
points in 2024.`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Model Accuracy and Cohort Scores (With Captions)' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            blocks(
              inline`The accuracy curves compare Model A, Model B, and a 50% baseline across epochs ${unsafeRaw.math`x in [0,5]`}.
Model A stays ahead throughout, while both learned models rise well above the baseline.`,
              inline`${bafFigure({ caption: inline`Accuracy vs. epoch for Model A, Model B, and random baseline.` }, inline(space, accuracyChart, space))}
At epoch 5, ${strong(inline`Model A`)} reaches 92% and ${strong(inline`Model B`)} reaches 83%.
Their gap grows up to epoch 3 and then narrows from 12 to 9 percentage points by the final epoch.`,
            ),
            blocks(
              inline`The grouped bars compare mean test scores for Group A and Group B from 2020 to 2024. Both cohorts
improve each year, with ${strong(inline`Group A`)} leading every annual pair.`,
              inline`${bafFigure({ caption: inline`Mean test score by group and year (2020-2024).` }, inline(space, groupedBarChart, space))}
Scores rise from 62 to 78 for ${strong(inline`Group A`)} and from 55 to 69 for ${strong(inline`Group B`)}.
The gap widens from 7 points in 2020 to 9 points in 2024.`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(newSection('Theorem-style Boxes')),
    inline(
      slide(
        { title: 'Definitions, Theorems, and Lemmas' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            inline(
              space,
              definition(
                { name: 'Metric Space' },
                inline`${space}A ${strong(inline`metric space`)} ${unsafeRaw.math`(M, d)`} is a set ${unsafeRaw.math`M`}
with ${unsafeRaw.math`d: M times M -> RR_(>=0)`} satisfying non-negativity, identity (${unsafeRaw.math`d(x,y)=0 <=> x=y`}),
symmetry, and the triangle inequality.${space}`,
              ),
              space,
              theorem(
                { name: 'Banach Fixed-Point Theorem' },
                inline`${space}Let ${unsafeRaw.math`(M, d)`} be complete and ${unsafeRaw.math`f: M -> M`} a contraction
with constant ${unsafeRaw.math`k < 1`}. Then ${unsafeRaw.math`f`} has a ${strong(inline`unique`)}
fixed point ${unsafeRaw.math`x^* in M`}.${space}`,
              ),
              space,
              lemma(inline`${space}Any contraction ${unsafeRaw.math`f`} on ${unsafeRaw.math`(M,d)`} is uniformly continuous
and extends uniquely to the completion ${unsafeRaw.math`overline(M)`}.${space}`),
              space,
            ),
            inline(
              space,
              corollary(
                { name: 'Picard-Lindelof' },
                inline`${space}Under Lipschitz continuity in ${unsafeRaw.math`y`}, the IVP ${unsafeRaw.math`dot(y)=f(t,y)`},
${unsafeRaw.math`y(t_0)=y_0`} has a unique local solution.${space}`,
              ),
              space,
              proof(inline`${space}Apply Banach's theorem to the Picard operator ${unsafeRaw.math`T phi = y_0 + integral_(t_0)^t f(s,phi(s)) d s`},
which is contractive on ${unsafeRaw.math`C([t_0-delta, t_0+delta])`} for small ${unsafeRaw.math`delta > 0`}.${space}`),
              space,
              remark(
                { name: 'Completeness is necessary' },
                inline`${space}On ${unsafeRaw.math`(0,1)`} with ${unsafeRaw.math`f(x)=x/2`}, the fixed point ${unsafeRaw.math`0`}
lies outside the space -- Banach's theorem fails.${space}`,
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Examples, Exercises, Propositions, and Custom Boxes' },
        inline(
          space,
          twoCol(
            { leftWidth: pct(49) },
            inline(
              space,
              example(
                { name: 'Euclidean Space' },
                inline`${space}${unsafeRaw.math`RR^n`} with ${unsafeRaw.math`d(x,y)=norm(x-y)_2`} is complete. The
iteration ${unsafeRaw.math`x_(k+1)=A x_k+b`} converges iff ${unsafeRaw.math`rho(A)<1`}, to the
unique solution of ${unsafeRaw.math`x=A x+b`}.${space}`,
              ),
              space,
              exercise(inline`${space}Show that ${unsafeRaw.math`ZZ_p`} is complete under the ${unsafeRaw.math`p`}-adic metric
and use Banach's theorem to prove Hensel's lemma.${space}`),
              space,
              proposition(
                { name: 'Closed Subsets are Complete' },
                inline`${space}A closed subset of a complete metric space is itself a complete metric space.${space}`,
              ),
              space,
            ),
            inline(
              space,
              bafBox(
                { name: 'Implementation tip', color: green.darken(pct(30)) },
                'note',
                inline`${space}Monitor ${unsafeRaw.math`norm(x_(k+1)-x_k)`} as a stopping criterion. A-priori error:
${unsafeRaw.math`norm(x_k - x^*) <= k^m/(1-k) norm(x_1-x_0)`}.${space}`,
              ),
              space,
              bafBox(
                { name: 'Common pitfall', color: red.darken(pct(20)) },
                'warning',
                inline`${space}Contraction (${unsafeRaw.math`k<1`}) is strictly stronger than nonexpansive (${unsafeRaw.math`k=1`}).
Rotations on ${unsafeRaw.math`S^1`} are nonexpansive but have no fixed points.${space}`,
              ),
              space,
              bafBox(
                { name: 'Any label works', color: purple.darken(pct(15)) },
                'custom',
                inline`${space}Use ${raw('#baf-box("kind", name: "...", color: ...)')} for any label and color
-- observations, facts, algorithms, warnings.${space}`,
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Custom Box Widths' },
        blocks(
          inline(
            bafBox(
              { name: 'Default width', color: purple.darken(pct(15)) },
              'custom',
              inline`${space}This box uses the default width, so it fills the available slide content area. It is
the recommended form when the material belongs to the main flow of the slide.${space}`,
            ),
          ),
          inline(
            align(
              center,
              inline(
                space,
                bafBox(
                  { name: 'Narrow custom width', color: purple.darken(pct(15)), width: pct(62) },
                  'custom',
                  inline`${space}This box has a smaller explicit width. It is useful for short claims, reminders, or
side notes that should not dominate the slide.${space}`,
                ),
                space,
              ),
            ),
          ),
          inline(
            bafBox(
              { name: 'Short content, default width', color: purple.darken(pct(15)) },
              'custom',
              inline`${space}A short phrase.${space}`,
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Full-Width Mathematical Proof' },
        blocks(
          inline(
            theorem(
              { name: 'Cauchy-Schwarz Inequality' },
              inline`${space}For all vectors ${unsafeRaw.math`u, v in RR^n`}, ${bafEquation(inline(unsafeRaw.math.block`abs(u dot v) <= norm(u) norm(v).`))}${space}`,
            ),
          ),
          inline(
            proof(
              blocks(
                inline`If ${unsafeRaw.math`v = 0`}, the claim is immediate, so assume ${unsafeRaw.math`v != 0`}. For
every real ${unsafeRaw.math`t`}, the squared norm of ${unsafeRaw.math`u - t v`} is non-negative:`,
                inline(
                  bafEquation(
                    inline(unsafeRaw.math.block`0 <= norm(u - t v)^2 = norm(u)^2 - 2 t (u dot v) + t^2 norm(v)^2.`),
                  ),
                ),
                inline`Choose the minimising value ${unsafeRaw.math`t = (u dot v) / norm(v)^2`}. Substitution gives`,
                inline(bafEquation(inline(unsafeRaw.math.block`0 <= norm(u)^2 - (u dot v)^2 / norm(v)^2.`))),
                inline`Multiplying by the positive number ${unsafeRaw.math`norm(v)^2`}, we obtain`,
                inline(bafEquation(inline(unsafeRaw.math.block`(u dot v)^2 <= norm(u)^2 norm(v)^2.`))),
                inline`Taking square roots on both sides yields ${unsafeRaw.math`abs(u dot v) <= norm(u) norm(v)`}.
Equality occurs precisely when the non-negative quadratic has a zero at its minimum, which means
${unsafeRaw.math`u - t v = 0`} for some scalar ${unsafeRaw.math`t`}; equivalently, the two vectors
are linearly dependent.`,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Narrow Mathematical Proof' },
        blocks(
          inline`Proof environments fill the available content width by default, matching the rhythm of ordinary
slide material. When a shorter line length reads better, pass an explicit ${raw('width')} and
center the proof as below.`,
          inline(
            align(
              center,
              inline(
                space,
                proof(
                  { width: pct(68) },
                  blocks(
                    inline`We prove Young's inequality in its weighted quadratic form. Let ${unsafeRaw.math`a, b >= 0`}
and fix ${unsafeRaw.math`epsilon > 0`}. Since every square is non-negative,`,
                    inline(bafEquation(inline(unsafeRaw.math.block`0 <= (sqrt(epsilon) a - b / sqrt(epsilon))^2.`))),
                    'Expanding the square gives',
                    inline(bafEquation(inline(unsafeRaw.math.block`0 <= epsilon a^2 - 2 a b + b^2 / epsilon.`))),
                    inline`Rearranging terms and dividing by ${unsafeRaw.math`2`} yields`,
                    inline(bafEquation(inline(unsafeRaw.math.block`a b <= epsilon a^2 / 2 + b^2 / (2 epsilon).`))),
                    inline`This form is especially useful when a product term must be absorbed into a coercive estimate:
one chooses ${unsafeRaw.math`epsilon`} small enough for the first term and pays for it in the
second term.`,
                  ),
                ),
                space,
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Theorem Box with Internal Proof' },
        inline(
          space,
          theorem(
            { name: 'Cauchy-Schwarz Inequality' },
            blocks(
              inline`For all vectors ${unsafeRaw.math`u, v in RR^n`}, ${bafEquation(inline(unsafeRaw.math.block`abs(u dot v) <= norm(u) norm(v).`))}`,
              inline(
                proof(inline`${space}If ${unsafeRaw.math`v = 0`}, the claim is immediate. Otherwise, the quadratic expression
${unsafeRaw.math`norm(u - t v)^2`} is non-negative for every ${unsafeRaw.math`t in RR`}. Expanding
and choosing ${unsafeRaw.math`t = (u dot v) / norm(v)^2`} gives ${bafEquation(inline(unsafeRaw.math.block`0 <= norm(u)^2 - (u dot v)^2 / norm(v)^2.`))}
Multiplying by ${unsafeRaw.math`norm(v)^2`} and taking square roots yields the desired inequality.${space}`),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Exercise Box with Solution' },
        inline(
          space,
          exercise(
            { name: 'Spectral radius criterion' },
            blocks(
              inline`Let ${unsafeRaw.math`A in RR^(n times n)`} and suppose ${unsafeRaw.math`norm(A) < 1`} for a
matrix norm compatible with the vector norm. Prove that ${unsafeRaw.math`I - A`} is invertible
and derive a convergent series for its inverse.`,
              inline(boxSeparator({ color: orange.darken(pct(20)) }, 'Solution')),
              inline`Since ${unsafeRaw.math`norm(A^k) <= norm(A)^k`}, the Neumann series ${unsafeRaw.math`sum_(k=0)^infinity A^k`}
converges absolutely. Multiplying partial sums by ${unsafeRaw.math`I-A`} gives ${unsafeRaw.math`I - A^(m+1)`},
which tends to ${unsafeRaw.math`I`}. Thus, ${bafEquation(inline(unsafeRaw.math.block`(I - A)^(-1) = sum_(k=0)^infinity A^k.`))}`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Exercise Box with Two Solutions' },
        inline(
          space,
          exercise(
            { name: 'Arithmetic-geometric mean' },
            blocks(
              inline`Prove that for ${unsafeRaw.math`x, y >= 0`} one has ${unsafeRaw.math`sqrt(x y) <= (x + y) / 2`}.`,
              inline(boxSeparator({ color: orange.darken(pct(20)) }, 'Solution 1')),
              inline`The square ${unsafeRaw.math`(sqrt(x) - sqrt(y))^2`} is non-negative, so ${unsafeRaw.math`x + y - 2 sqrt(x y) >= 0`}.`,
              inline(boxSeparator({ color: orange.darken(pct(20)) }, 'Solution 2')),
              inline`The function ${unsafeRaw.math`log`} is concave on ${unsafeRaw.math`(0, infinity)`}. Applying
Jensen's inequality to ${unsafeRaw.math`x`} and ${unsafeRaw.math`y`} gives ${bafEquation(inline(unsafeRaw.math.block`log((x + y) / 2) >= (log x + log y) / 2 = log(sqrt(x y)).`))}`,
            ),
          ),
          space,
        ),
      ),
    ),
    inline(
      slide(
        { title: 'Theorem, Text, and Lemma' },
        blocks(
          'The next result is stated in the same theorem-style box used throughout the template. The surrounding prose is deliberately included to show how normal paragraphs sit before, between, and after formal statements.',
          inline(
            theorem(
              { name: 'Compactness criterion' },
              inline`${space}Every sequence in a compact metric space has a convergent subsequence whose limit belongs
to the same space.${space}`,
            ),
          ),
          'This theorem is often the bridge between qualitative assumptions and quantitative estimates. The intermediate text lets the slide show how ordinary prose separates theorem-style boxes without requiring a two-column layout.',
          inline(
            lemma(
              { name: 'Closed image of a convergent sequence' },
              inline`${space}If ${unsafeRaw.math`x_n -> x`} and ${unsafeRaw.math`F`} is closed, then every sequence
contained in ${unsafeRaw.math`F`} can only converge to a point of ${unsafeRaw.math`F`}.${space}`,
            ),
          ),
          'Together, the theorem and lemma give a compact workflow: first extract convergence, then use closedness to keep the limiting object inside the admissible set. This final paragraph checks the lower spacing after the last formal box.',
        ),
      ),
    ),
    inline(finalSlide),
  )
}
