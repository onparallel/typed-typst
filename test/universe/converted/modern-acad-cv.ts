// Converted from test/universe/corpus/modern-acad-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  m,
  path,
  show,
  unsafeRaw,
  yaml,
} from '../../../src/index.ts'

export default () => {
  const createHeaders = define('create-headers').pos('arg1', T.any).named('lang', T.any, null).returns(T.any).external()
  const modernAcadCv = external('modern-acad-cv')
  const cvAutoStc = define('cv-auto-stc')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvAutoStp = define('cv-auto-stp')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvCols = define('cv-cols').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const cvRefs = define('cv-refs')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .named('me', T.content, [])
    .named('tag', T.any, null)
    .returns(T.any)
    .external()
  const cvAutoList = define('cv-auto-list')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvAuto = define('cv-auto')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvThreeItems = external('cv-three-items')
  const cvTableTeaching = define('cv-table-teaching')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvAutoCats = define('cv-auto-cats')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const cvAutoSkills = define('cv-auto-skills')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .named('lang', T.any, null)
    .returns(T.any)
    .external()
  const modernAcadCv_with = define('with')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('font', T.any, null)
    .named('lang', T.any, null)
    .named('show-date', T.any, null)
    .returns(T.any)
    .external(modernAcadCv)
  const [metadataDecl, metadata_2] = let_('metadata', yaml(path('metadata.yaml')))
  const [multilingualDecl, multilingual] = let_('multilingual', yaml(path('dbs/i18n.yaml')))
  const [workDecl, work] = let_('work', yaml(path('dbs/work.yaml')))
  const [educationDecl, education] = let_('education', yaml(path('dbs/education.yaml')))
  const [grantsDecl, grants] = let_('grants', yaml(path('dbs/grants.yaml')))
  const [refsDecl, refs] = let_('refs', yaml(path('dbs/refs.yaml')))
  const [conferencesDecl, conferences] = let_('conferences', yaml(path('dbs/conferences.yaml')))
  const [talksDecl, talks] = let_('talks', yaml(path('dbs/talks.yaml')))
  const [committeeDecl, committee] = let_('committee', yaml(path('dbs/committee.yaml')))
  const [teachingDecl, teaching] = let_('teaching', yaml(path('dbs/teaching.yaml')))
  const [trainingDecl, training] = let_('training', yaml(path('dbs/training.yaml')))
  const [skillsDecl, skills] = let_('skills', yaml(path('dbs/skills.yaml')))
  const [languageDecl, language] = let_('language', 'pt')
  const [headerLabsDecl, headerLabs] = let_('headerLabs', createHeaders({ lang: language }, multilingual))
  return doc(
    importPackage('@preview/modern-acad-cv:0.1.5', [
      createHeaders,
      modernAcadCv,
      cvAutoStc,
      cvAutoStp,
      cvCols,
      cvRefs,
      cvAutoList,
      cvAuto,
      cvThreeItems,
      cvTableTeaching,
      cvAutoCats,
      cvAutoSkills,
    ]),
    m.lines(
      metadataDecl,
      multilingualDecl,
      workDecl,
      educationDecl,
      grantsDecl,
      refsDecl,
      conferencesDecl,
      talksDecl,
      committeeDecl,
      teachingDecl,
      trainingDecl,
      skillsDecl,
    ),
    languageDecl,
    headerLabsDecl,
    show(modernAcadCv_with({ lang: language, font: 'Fira Sans', showDate: true }, metadata_2, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("work")`),
    inline(cvAutoStc({ lang: language }, work, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("education")`),
    inline(cvAutoStp({ lang: language }, education, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("grants")`),
    inline(cvAutoStp({ lang: language }, grants, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("pubs")`),
    inline(
      cvCols(
        '',
        unsafeRaw.code<any>`for lang in multilingual.lang.keys() {
    if language == lang [
      #multilingual.lang.at(lang).pubs-note
    ]
  }`,
      ),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("pubs-peer")`),
      inline(cvRefs({ tag: 'peer', me: inline`Mustermensch, M.`, lang: language }, refs, multilingual)),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("pubs-edited")`),
      inline(cvRefs({ tag: 'edited', me: inline`Mustermensch, M.`, lang: language }, refs, multilingual)),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("pubs-book")`),
      inline(cvRefs({ tag: 'book', me: inline`Mustermensch, M.`, lang: language }, refs, multilingual)),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("pubs-reports")`),
      inline(cvRefs({ tag: 'other', me: inline`Mustermensch, M.`, lang: language }, refs, multilingual)),
    ),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("pubs-upcoming")`),
      inline(cvRefs({ tag: 'planned', me: inline`Mustermensch, M.`, lang: language }, refs, multilingual)),
    ),
    m.lines(
      m.heading(1, unsafeRaw.code<any>`headerLabs.at("confs")`),
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("confs-conf")`),
      inline(cvCols('', unsafeRaw.code<any>`headerLabs.at("exp-confs")`)),
    ),
    inline(cvAutoList({ lang: language }, conferences, multilingual)),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("confs-talks")`),
      inline(cvAuto({ lang: language }, talks, multilingual)),
    ),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("committee")`),
    inline(cvAuto({ lang: language }, committee, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("teaching")`),
    m.lines(
      m.heading(2, unsafeRaw.code<any>`headerLabs.at("teaching-thesis")`),
      inline(unsafeRaw.code<any>`if language == "de" [
  #cv-three-items[Bachelor][7][Master][5][Lehramt][8]
] else if language == "en" [
  #cv-three-items[Bachelor][7][Master][5][Teacher program][8]
] else if language == "pt" [
  #cv-three-items[Graduação][7][Pós-Graduação][5][Licenciatura][8]
] else [
  #cv-three-items[Bachelor][7][Master][5][Teacher program][8]
]`),
    ),
    m.heading(2, unsafeRaw.code<any>`headerLabs.at("teaching-courses")`),
    inline(cvTableTeaching({ lang: language }, teaching, multilingual)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("training")`),
    inline(cvAutoCats({ lang: language }, training, multilingual, headerLabs)),
    m.heading(1, unsafeRaw.code<any>`headerLabs.at("others")`),
    inline(cvAutoSkills({ lang: language }, skills, multilingual, metadata_2)),
  )
}
