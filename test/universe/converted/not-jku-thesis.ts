// Converted from test/universe/corpus/not-jku-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  auto,
  bibliography,
  black,
  block,
  blocks,
  center,
  cite,
  cm,
  codeBlock,
  context,
  counter,
  datetime,
  define,
  doc,
  em,
  external,
  figure,
  footnote,
  fr,
  heading,
  image,
  importFile,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  left,
  let_,
  m,
  math,
  mm,
  outline,
  page,
  pagebreak,
  par,
  parbreak,
  path,
  pt,
  purple,
  raw,
  ref,
  right,
  set,
  show,
  space,
  strong,
  table,
  text,
  unsafeRaw,
  v,
  where,
} from '../../../src/index.ts'

export default () => {
  const jkuThesis = external('jku-thesis')
  const inwriting = external('inwriting')
  const draft = external('draft')
  const todo = external('todo')
  const flexCaption = external('flex-caption')
  const flexCaptionStyles = external('flex-caption-styles')
  const glossary = external('glossary')
  const makeGlossary = external('make-glossary')
  const registerGlossary = define('register-glossary').pos('arg1', T.any).returns(T.any).external()
  const printGlossary = define('print-glossary').pos('arg1', T.any).returns(T.any).external()
  const gls = external('gls')
  const glspl = external('glspl')
  const jkuThesis_with = define('with')
    .named('abstract-de', T.any, null)
    .named('abstract-en', T.content, [])
    .named('acknowledgements', T.content, [])
    .named('advisors', T.any, null)
    .named('author', T.any, null)
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('department', T.any, null)
    .named('draft', T.any, null)
    .named('place-of-submission', T.any, null)
    .named('program', T.any, null)
    .named('show-title-in-header', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-type', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(jkuThesis)
  const [dateDecl, date] = let_('date', datetime.today())
  const [kNumberDecl, kNumber] = let_('k-number', 'k12345678')
  return doc(
    m.lines(
      importPackage('@preview/not-jku-thesis:0.2.0', [jkuThesis]),
      importFile('utils.typ', [inwriting, draft, todo, flexCaption, flexCaptionStyles]),
      importFile('glossary.typ', [glossary]),
      importPackage('@preview/glossarium:0.5.4', [makeGlossary, registerGlossary, printGlossary, gls, glspl]),
    ),
    m.lines(show(makeGlossary), inline(registerGlossary(glossary))),
    show(flexCaptionStyles),
    m.lines(
      set(text, { lang: 'en', weight: 'regular', font: 'Arial', size: pt(11) }),
      set(text, { ligatures: false }),
      set(par, { leading: em(1), firstLineIndent: em(0), justify: true }),
      set(par, { spacing: em(1.5) }),
      inline(show(raw, set(text, { size: pt(9) }))),
    ),
    set(page, { margin: { left: add(cm(2.5), cm(1)), right: cm(2.5), y: cm(2.9) } }),
    inline(dateDecl, space, kNumberDecl),
    show(
      jkuThesis_with({
        thesisType: 'Master',
        degree: 'Master of Science',
        program: 'Feline Behavioral Studies',
        supervisor: 'Professor Mittens Meowington, Ph.D.',
        advisors: ['Dr. Felix Pawsworth', 'Dr. Whiskers Purrington'],
        department: 'Department of Animal Psychology',
        author: 'Felina Whiskerstein, BSc.',
        date: date,
        placeOfSubmission: 'Linz',
        title: 'Purrfection: How Cats Skillfully Train and Manipulate Humans to Serve Their Every Need',
        abstractEn: blocks(
          'This study explores the intricate ways in which domestic cats employ manipulation tactics to influence human behavior. Utilizing a mixed-methods approach that combines observational data, surveys, and interviews, this research investigates how cats utilize vocalizations, body language, and attention-seeking behaviors to achieve their goals, ranging from soliciting food to initiating play.',
          'The findings reveal that cats predominantly use vocalizations such as meowing, purring, and chirping to manipulate their human companions. Meowing is particularly effective for demanding attention and food, while purring is often used to enhance bonding and comfort. Chirps and trills are employed to encourage play and interaction. Additionally, body language such as kneading, tail positioning, and eye contact play significant roles in communication and manipulation. Attention-seeking behaviors, including climbing, rubbing, and bringing objects, are crucial in eliciting responses from humans.',
          'The research highlights the positive impact of these manipulation tactics on human-cat relationships, although it also acknowledges the potential for frustration and behavioral adjustments by cat owners. The study contributes valuable insights into the complexities of human-animal interactions and suggests pathways for future research, including larger sample sizes, longitudinal studies, and experimental investigations.',
          'This work offers practical implications for enhancing human-cat interactions and improving the understanding of feline behavior, fostering more harmonious relationships between cats and their human companions.',
        ),
        abstractDe: null,
        acknowledgements: blocks(
          'I would like to extend a huge thank you to Dr. Felina Whiskers, my primary advisor, for her pawsitive support and expert guidance. Without her wisdom and occasional catnip breaks, this thesis might have turned into a hairball of confusion.',
          'A special shoutout to Dr. Felix Pawsworth, my co-advisor, for his keen insights and for keeping me from chasing my own tail during this research. Your input was invaluable and much appreciated.',
          'To the cat owners, survey respondents, and interviewees—thank you for sharing your feline escapades. Your stories made this research more entertaining than a laser pointer.',
          'Lastly, to my family and friends, thank you for tolerating the endless cat puns and my obsession with feline behavior. Your patience and encouragement kept me from becoming a full-time cat herder.',
          inline`To everyone who contributed to this thesis, directly or indirectly, I offer my heartfelt gratitude.
You've all made this journey a little less ruff!`,
          parbreak(),
        ),
        showTitleInHeader: false,
        draft: draft,
      }),
    ),
    m.lines(set(math.equation, { numbering: '(1)' }), set(heading, { numbering: '1.1' })),
    m.lines(
      show(where(heading, { level: 3 }), set(text, { size: em(1.05) })),
      show(where(heading, { level: 4 }), set(text, { size: em(1) })),
      show(figure, set(text, { size: em(0.9) })),
    ),
    m.lines(
      set(table, { inset: pt(6.5) }),
      show(table, set(par, { justify: false })),
      show(figure, (it, ctx) => inline(v(em(1)), space, it, space, v(em(1)))),
    ),
    m.lines(
      show(where(heading, { level: 1 }), set(block, { above: em(1.95), below: em(1) })),
      show(where(heading, { level: 2 }), set(block, { above: em(1.85), below: em(1) })),
      show(where(heading, { level: 3 }), set(block, { above: em(1.75), below: em(1) })),
      show(where(heading, { level: 4 }), set(block, { above: em(1.55), below: em(1) })),
    ),
    show(where(heading, { level: 1 }), (it_2, ctx_2) => inline(space, pagebreak({ weak: true }), space, it_2, space)),
    inline(set(cite, { style: 'iso-690-author-date' })),
    set(table, { stroke: add(pt(0.5), black) }),
    show(
      ref,
      (it_3, ctx_3) => unsafeRaw.code<any>`{
  let el = it.element
  if el != none and el.func() == heading {

    [#it (#el.body)]
  } else [#it]
}`,
    ),
    show(where(outline.entry, { level: 1 }), (it_4, ctx_4) => codeBlock([v({ weak: true }, em(1)), strong(it_4)])),
    inline(
      show(cite, set(text, { fill: purple }, { if: inwriting })),
      space,
      show(footnote, set(text, { fill: purple }, { if: inwriting })),
      space,
      show(ref, set(text, { fill: purple }, { if: inwriting })),
    ),
    set(page, {
      footer: context((ctx_5) =>
        inline(
          space,
          text(
            { size: pt(9) },
            inline(
              space,
              table(
                { stroke: null, columns: [fr(1), auto, fr(1)], align: [left, center, right], inset: pt(5) },
                inline(date.display('[month repr:long] [day], [year]')),
                inline(kNumber),
                inline(counter(page).display(ctx_5, '1')),
              ),
              space,
            ),
          ),
          space,
        ),
      ),
    }),
    inline(
      labelled(
        outline({
          title: codeBlock([text({ weight: 700, size: em(1.3) }, 'Contents'), v(mm(10))]),
          indent: em(2),
          depth: 3,
        }),
        label('outline'),
      ),
      space,
      pagebreak({ weak: false }),
    ),
    inline(includeFile('content/Tutorial.typ')),
    includeFile('content/Introduction.typ'),
    includeFile('content/LiteratureReview.typ'),
    includeFile('content/Methodology.typ'),
    includeFile('content/DataCollection.typ'),
    includeFile('content/Analysis.typ'),
    includeFile('content/Conclusion.typ'),
    m.lines(
      set(page, {
        footer: context((ctx_6) =>
          inline(
            space,
            text(
              { size: pt(9) },
              inline(
                space,
                table(
                  { stroke: null, columns: [fr(1), auto, fr(1)], align: [left, center, right], inset: pt(5) },
                  inline(date.display('[month repr:long] [day], [year]')),
                  inline(kNumber),
                  inline(counter(page).display(ctx_6, 'i')),
                ),
                space,
              ),
            ),
            space,
          ),
        ),
      }),
      inline(counter(page).update(1)),
    ),
    includeFile('content/Appendix.typ'),
    inline(heading({ numbering: null }, inline`List of Acronyms`), space, printGlossary(glossary)),
    inline(
      heading({ numbering: null }, inline`List of Figures`),
      space,
      outline({ title: null, target: where(figure, { kind: image }) }),
    ),
    inline(
      heading({ numbering: null }, inline`List of Tables`),
      space,
      outline({ title: null, target: where(figure, { kind: table }) }),
    ),
    m.lines(
      set(par, { leading: em(0.7), firstLineIndent: em(0), justify: true }),
      inline(bibliography({ style: 'apa' }, path('items.bib'))),
    ),
  )
}
