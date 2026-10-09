// Converted from test/universe/corpus/athena-tu-darmstadt-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  bibliography,
  blocks,
  define,
  doc,
  external,
  figure,
  footnote,
  gray,
  image,
  importPackage,
  inline,
  label,
  labelled,
  linebreak,
  link,
  m,
  path,
  pt,
  rect,
  ref,
  show,
  space,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const tudapub = external('tudapub')
  const tud_page_margin_big = external('tud_page_margin_big')
  const tudapub_with = define('with')
    .named('abstract', T.content, [])
    .named('accentcolor', T.any, null)
    .named('additional_pages_after_outline_table_of_contents', T.content, [])
    .named('author', T.any, null)
    .named('bib', T.any, null)
    .named('logo_sub_content_text', T.content, [])
    .named('logo_tuda', T.any, null)
    .named('margin', T.any, null)
    .named('reduce_heading_space_when_first_on_page', T.any, null)
    .named('show_pages', T.any, null)
    .named('thesis_statement_pursuant_include_english_translation', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(tudapub)
  return doc(
    importPackage('@preview/athena-tu-darmstadt-thesis:0.1.2', [tudapub, tud_page_margin_big]),
    show(
      tudapub_with({
        title: inline`${space}TUDa Thesis With Typst${space}`,
        author: 'Albert Author',
        logo_sub_content_text: inline`${space}field of study: ${linebreak()} Some Field of Study ${linebreak()} ${linebreak()} Institute
ABC${space}`,
        logo_tuda: image(path('logos/tuda_logo_replace.svg')),
        accentcolor: '9c',
        abstract: inline`${space}This is a template to write your thesis with the corporate design of ${link('https://www.tu-darmstadt.de/', inline`TU Darmstadt`)}.${space}`,
        bib: bibliography({ full: true }, path('refs.bib')),
        margin: tud_page_margin_big,
        reduce_heading_space_when_first_on_page: false,
        show_pages: { title_page: true, outline_table_of_contents: true, thesis_statement_pursuant: true },
        thesis_statement_pursuant_include_english_translation: false,
        additional_pages_after_outline_table_of_contents: blocks(
          m.lines(
            m.heading(3, 'List of Symbols'),
            m.list(m.item([unsafeRaw.math`t`, space, '- time']), m.item([unsafeRaw.math`m`, space, '- mass'])),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(1, 'First Chapter'),
      inline`A first demo chapter. An example reference is ${ref(label('TUDaGuideline'))}.`,
    ),
    m.lines(
      m.heading(2, 'Some Basic Elements'),
      inline`This text contains two${footnote(inline`The number two can also be written as 2.`)} footnotes${footnote(inline`This is a first footnote. ${linebreak()} It has a second line.`)}.`,
    ),
    m.lines(
      m.heading(3, 'Figures'),
      inline`The following ${ref(label('fig_test'))} represents a demo Figure. ${labelled([figure({ caption: inline`The figure caption.` }, rect({ inset: pt(20), fill: gray }, inline`${space}Image${space}`)), space], label('fig_test'))}`,
    ),
  )
}
