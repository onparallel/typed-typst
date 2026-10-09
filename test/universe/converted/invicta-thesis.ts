// Converted from test/universe/corpus/invicta-thesis.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  bottom,
  center,
  counter,
  define,
  doc,
  external,
  heading,
  importPackage,
  includeFile,
  inline,
  label,
  labelled,
  m,
  page,
  set,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const feup = external('feup')
  const feup_template = define('template')
    .named('additional-front-text', T.any, null)
    .named('author', T.any, null)
    .named('committee-members', T.any, null)
    .named('committee-text', T.any, null)
    .named('copyright-notice', T.any, null)
    .named('degree', T.any, null)
    .named('language', T.any, null)
    .named('on-paper', T.any, null)
    .named('second-supervisor', T.any, null)
    .named('signature', T.any, null)
    .named('stage', T.any, null)
    .named('supervisor', T.any, null)
    .named('thesis-date', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external(feup)
  const feup_dedication = define('dedication').pos('arg1', T.any).returns(T.any).external(feup)
  const feup_epigraph = define('epigraph').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external(feup)
  const feup_tableOfContents = define('table-of-contents').returns(T.any).external(feup)
  const feup_acronymList = define('acronym-list').pos('arg1', T.any).returns(T.any).external(feup)
  const feup_mainContentWrapper = external('main-content-wrapper', feup)
  const feup_makeBibliography = define('make-bibliography').pos('arg1', T.any).returns(T.any).external(feup)
  return doc(
    importPackage('@preview/invicta-thesis:1.1.0', feup),
    show(
      feup_template.with({
        title: '<DISSERTATION TITLE>',
        author: '<YOUR FULL NAME>',
        degree: '<YOUR COURSE NAME>',
        supervisor: '<SUPERVISOR NAME>',
        secondSupervisor: '<SECOND SUPERVISOR NAME>',
        thesisDate: null,
        copyrightNotice: '<YOUR NAME>, <YEAR OF PUBLICATION>',
        additionalFrontText: null,
        committeeText: 'Approved in oral examination by the committee:',
        committeeMembers: [
          { role: 'President', name: '<COMMITTEE PRESIDENT NAME>' },
          { role: 'Referee', name: '<COMMITTEE MEMBER NAME>' },
          { role: 'Referee', name: '<COMMITTEE MEMBER NAME>' },
        ],
        signature: false,
        stage: null,
        language: 'en',
        onPaper: false,
      }),
    ),
    inline(feup_dedication(text({ hyphenate: false }, 'Dedication text, if you want to.'))),
    m.lines(set(page, { numbering: 'i', numberAlign: add(bottom, center) }), inline(counter(page).update(1))),
    includeFile('prologue/resumo.typ'),
    includeFile('prologue/abstract.typ'),
    includeFile('prologue/unsdg.typ'),
    includeFile('prologue/acknowns.typ'),
    inline(feup_epigraph('The best way to predict the future is to invent it.', 'Alan Kay')),
    inline(feup_tableOfContents()),
    inline(
      labelled(
        feup_acronymList([
          ['AI', 'Artificial Intelligence'],
          ['API', 'Application Programming Interface'],
          ['CNN', 'Convolutional Neural Network'],
          ['CPU', 'Central Processing Unit'],
          ['GPU', 'Graphics Processing Unit'],
          ['ML', 'Machine Learning'],
          ['NLP', 'Natural Language Processing'],
          ['RNN', 'Recurrent Neural Network'],
          ['SGD', 'Stochastic Gradient Descent'],
          ['UI', 'User Interface'],
        ]),
        label('main-content'),
      ),
    ),
    show(feup_mainContentWrapper),
    m.lines(
      includeFile('chapters/1-introduction.typ'),
      includeFile('chapters/2-literature-review.typ'),
      includeFile('chapters/3-theoretical-foundations.typ'),
      includeFile('chapters/4-methodology.typ'),
      includeFile('chapters/5-result-and-analysis.typ'),
      includeFile('chapters/6-conclusions-and-future-work.typ'),
    ),
    inline(feup_makeBibliography('elsevier-vancouver')),
    m.lines(set(heading, { numbering: 'A.1', level: 1 }), inline(counter(heading).update(0))),
    m.lines(includeFile('appendixes/A-implementation-details.typ'), includeFile('appendixes/B-additional-results.typ')),
  )
}
