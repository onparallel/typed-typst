// Converted from test/universe/corpus/grid-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  h,
  importPackage,
  inline,
  let_,
  link,
  m,
  pt,
  show,
  smartquote,
  space,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const masthead = define('masthead')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('contact', T.content, [])
    .named('profession', T.any, null)
    .returns(T.any)
    .external()
  const cvSection = define('cv-section').pos('arg1', T.any).named('accent-color', T.any, null).returns(T.any).external()
  const gridEntry = define('grid-entry')
    .pos('arg1', T.content)
    .named('dates', T.any, null)
    .named('location', T.any, null)
    .named('meta', T.any, null)
    .named('subtitle', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const skillGrid = define('skill-grid').pos('arg1', T.any).returns(T.any).external()
  const gridLanguage = define('grid-language')
    .named('language', T.any, null)
    .named('level', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('margin', T.any, null)
    .named('paper', T.any, null)
    .returns(T.any)
    .external(resume)
  const [accentDecl, accent] = let_('accent', '#2c5f6e')
  return doc(
    importPackage('@preview/grid-cv:0.1.0', [resume, masthead, cvSection, gridEntry, skillGrid, gridLanguage]),
    accentDecl,
    show(
      resume_with({
        author: 'Tomas Berg',
        font: 'New Computer Modern',
        fontSize: pt(10.5),
        paper: 'a4',
        margin: cm(1.5),
      }),
    ),
    inline(
      masthead({
        author: 'Tomas Berg',
        profession: 'Data Analyst',
        accentColor: accent,
        contact: inline`${space}tomas.berg@example.com ${h(em(0.6))} | ${h(em(0.6))} +44 131 496 0412 ${h(em(0.6))}
| ${h(em(0.6))} Edinburgh, UK ${h(em(0.6))} | ${h(em(0.6))} ${link('https://example.com/tomas', inline`example.com/tomas`)}${space}`,
      }),
    ),
    inline(cvSection({ accentColor: accent }, 'Profile')),
    'Analyst working where reporting meets forecasting, mostly for operations teams who need a number they can act on before the week ends. Comfortable owning a question from the raw table through to the meeting where it gets decided, and just as happy deleting a report nobody reads as building a new one.',
    inline(cvSection({ accentColor: accent }, 'Experience')),
    inline(
      gridEntry(
        { title: 'Data Analyst', subtitle: 'Ferrier Logistics', dates: '2022 - Present', location: 'Edinburgh, UK' },
        blocks(
          m.list(
            m.item([
              'Rebuilt the depot forecasting model, cutting mean absolute error on next-week volume from 18% to 7% across 40 sites.',
            ]),
            m.item([
              'Replaced a fortnightly hand-built deck with a self-serve dashboard now used by every regional manager, saving roughly two days a month.',
            ]),
            m.item([
              'Found and corrected a duplicate-scan bug that had overstated throughput by 4% for the previous three quarters.',
            ]),
            m.item(['Ran the analytics side of the WMS migration, reconciling 11 years of history.']),
          ),
        ),
      ),
    ),
    inline(
      gridEntry(
        { title: 'Analyst', subtitle: 'Northgate Retail Group', dates: '2019 - 2022', location: 'Glasgow, UK' },
        blocks(
          m.list(
            m.item(['Built the promotional-uplift model the buying team still uses to size orders.']),
            m.item(['Automated the weekly margin pack in SQL and Python, retiring 30 spreadsheets.']),
            m.item(['Trained 12 colleagues to self-serve in the BI tool, halving ad-hoc requests.']),
            m.item([
              'Set the definitions behind the weekly KPI set, ending a long argument about which of three',
              space,
              smartquote({ double: true }),
              'revenue',
              smartquote({ double: true }),
              space,
              'figures the board should be looking at.',
            ]),
          ),
        ),
      ),
    ),
    inline(
      gridEntry(
        { title: 'Graduate Analyst', subtitle: 'Corrigan Insurance', dates: '2018 - 2019', location: 'Glasgow, UK' },
        blocks(
          m.list(
            m.item(['Supported claims reporting and built the first automated fraud-flag summary.']),
            m.item(['Wrote the SQL style guide the analytics team adopted the following year.']),
          ),
        ),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Projects')),
    inline(
      gridEntry(
        {
          title: 'depot-sim',
          subtitle: 'Open-source discrete-event simulation for warehouse staffing',
          dates: '2023',
          meta: 'Python, 300+ stars',
        },
        blocks(
          m.list(
            m.item([
              'Models shift patterns against forecast volume so planners can test a roster before committing to it.',
            ]),
          ),
        ),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Education')),
    inline(
      gridEntry(
        {
          title: 'University of Edinburgh',
          subtitle: 'MSc Statistics with Data Science',
          dates: '2017 - 2018',
          location: 'Edinburgh, UK',
        },
        inline(),
      ),
    ),
    inline(
      gridEntry(
        { title: 'University of Glasgow', subtitle: 'BSc Mathematics', dates: '2014 - 2017', location: 'Glasgow, UK' },
        inline(),
      ),
    ),
    inline(cvSection({ accentColor: accent }, 'Certifications')),
    inline(gridEntry({ title: 'Professional Data Engineer', subtitle: 'Google Cloud', dates: '2023' }, inline())),
    inline(cvSection({ accentColor: accent }, 'Skills')),
    inline(
      skillGrid([
        'SQL and window functions',
        'Python: pandas, scikit-learn',
        'dbt and Airflow',
        'BigQuery and Postgres',
        'Power BI and Looker',
        'Forecasting and time series',
        'Experiment design',
        'Git and code review',
        'Statistical modelling in R',
        'Stakeholder reporting',
      ]),
    ),
    inline(cvSection({ accentColor: accent }, 'Languages')),
    inline(
      gridLanguage({ language: 'English', level: 'Native' }),
      space,
      gridLanguage({ language: 'Swedish', level: 'Fluent' }),
      space,
      gridLanguage({ language: 'French', level: 'Conversational' }),
    ),
  )
}
