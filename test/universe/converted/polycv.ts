// Converted from test/universe/corpus/polycv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  codeBlock,
  data,
  define,
  doc,
  document,
  external,
  image,
  importPackage,
  inline,
  int,
  let_,
  m,
  pct,
  set,
  unsafePath,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const loadCvData = define('load-cv-data').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const cv_with = define('with')
    .pos('arg1', T.any)
    .named('address', T.any, null)
    .named('ats-split', T.any, null)
    .named('awards', T.any, null)
    .named('courses', T.any, null)
    .named('education', T.any, null)
    .named('email', T.any, null)
    .named('entry-inline-meta', T.any, null)
    .named('experience', T.any, null)
    .named('header-band-contact', T.any, null)
    .named('header-band-summary', T.any, null)
    .named('headline', T.any, null)
    .named('hobbies', T.any, null)
    .named('keywords', T.any, null)
    .named('keywords-lines', T.any, null)
    .named('locale', T.any, null)
    .named('location', T.any, null)
    .named('motivation', T.any, null)
    .named('name', T.any, null)
    .named('phone', T.any, null)
    .named('photo', T.any, null)
    .named('profiles', T.any, null)
    .named('publications', T.any, null)
    .named('references', T.any, null)
    .named('show-header-band', T.any, null)
    .named('show-timeline', T.any, null)
    .named('skills', T.any, null)
    .named('summary', T.any, null)
    .named('values', T.any, null)
    .named('volunteering', T.any, null)
    .returns(T.any)
    .external(cv)
  const [rawDecl, raw_2] = let_(
    'raw',
    loadCvData(unsafeRaw.code<any>`data-file`, unsafeRaw.code<any>`f => if fmt == "yaml" { yaml(f) } else { toml(f) }`),
  )
  const inputStr = define('input-str')
    .pos('key', T.any)
    .named('default', T.any, '')
    .returns(T.any)
    .body((p) => unsafeRaw.code<any>`sys.inputs.at(key, default: str(meta.at(key, default: default)))`)
  const inputBool = define('input-bool')
    .pos('key', T.any)
    .named('default', T.any, false)
    .returns(T.any)
    .body(
      (p) => unsafeRaw.code<any>`{
  if key in sys.inputs { sys.inputs.at(key) == "true" }
  else { meta.at(key, default: default) }
}`,
    )
  const [photoFileDecl, photoFile] = let_('photo-file', inputStr({ default: 'assets/avatar.svg' }, 'photo'))
  const [headerBandDecl, headerBand] = let_('header-band', inputBool('header-band'))
  const [headerBandSummaryDecl, headerBandSummary] = let_('header-band-summary', inputBool('header-band-summary'))
  const [headerBandContactDecl, headerBandContact] = let_(
    'header-band-contact',
    inputBool({ default: true }, 'header-band-contact'),
  )
  const [atsSplitDecl, atsSplit] = let_('ats-split', inputBool('ats-split'))
  const [entryInlineMetaDecl, entryInlineMeta] = let_('entry-inline-meta', inputBool('entry-inline-meta'))
  const [showTimelineDecl, showTimeline] = let_('show-timeline', inputBool({ default: true }, 'show-timeline'))
  const [localeDecl, locale] = let_('locale', inputStr({ default: 'en' }, 'locale'))
  const [keywordsLinesDecl, keywordsLines] = let_('keywords-lines', int(inputStr({ default: '0' }, 'keywords-lines')))
  const [sectionArgsDecl, sectionArgs] = let_('section-args', data({}))
  return doc(
    importPackage('@preview/polycv:0.1.1', [cv, loadCvData]),
    m.lines(
      unsafeRaw.markup`#let fmt = sys.inputs.at("fmt", default: "yaml")`,
      unsafeRaw.markup`#let data-file = sys.inputs.at("data", default: if fmt == "toml" { "cv.toml" } else { "cv.yml" })`,
      rawDecl,
      unsafeRaw.markup`#let meta = raw.at("meta", default: (:))`,
      unsafeRaw.markup`#let cd = raw.cv`,
    ),
    m.lines(inputStr.decl, inputBool.decl),
    m.lines(
      photoFileDecl,
      headerBandDecl,
      headerBandSummaryDecl,
      headerBandContactDecl,
      atsSplitDecl,
      entryInlineMetaDecl,
      showTimelineDecl,
      localeDecl,
    ),
    keywordsLinesDecl,
    m.lines(
      sectionArgsDecl,
      inline(unsafeRaw.code<any>`for key in ("sidebar-sections", "main-sections", "section-icons", "skill-order", "section-titles") {
  if key in meta { section-args.insert(key, meta.at(key)) }
}`),
    ),
    set(document, { title: unsafeRaw.code<any>`cd.name`, author: unsafeRaw.code<any>`cd.name` }),
    unsafeRaw.markup`#show: cv.with(
  photo: image(photo-file, alt: cd.name, width: 100%, height: 100%, fit: "cover"),
  name: cd.name,
  headline: cd.at("headline", default: none),
  location: cd.at("location", default: none),
  keywords: cd.at("keywords", default: none),
  keywords-lines: if keywords-lines == 0 { auto } else { keywords-lines },
  email: cd.at("email", default: none),
  phone: cd.at("phone", default: none),
  address: cd.at("address", default: none),
  profiles: cd.at("profiles", default: none),
  summary: cd.at("summary", default: none),
  motivation: cd.at("motivation", default: none),
  experience: cd.at("experience", default: none),
  education: cd.at("education", default: none),
  awards: cd.at("awards", default: none),
  volunteering: cd.at("volunteering", default: none),
  courses: cd.at("courses", default: none),
  skills: cd.at("skills", default: none),
  values: cd.at("values", default: none),
  hobbies: cd.at("hobbies", default: none),
  references: cd.at("references", default: none),
  publications: cd.at("publications", default: none),
  show-header-band: header-band,
  header-band-summary: header-band-summary,
  header-band-contact: header-band-contact,
  ats-split: ats-split,
  entry-inline-meta: entry-inline-meta,
  show-timeline: show-timeline,
  locale: locale,
  ..section-args,
  // Reorder/move sections, retitle or re-icon them from the meta block:
  //   sidebar-sections / main-sections / section-titles / section-icons
)`,
  )
}
