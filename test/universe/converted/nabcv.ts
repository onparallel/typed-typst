// Converted from test/universe/corpus/nabcv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, image, importPackage, path, pct, show, unsafeRaw } from '../../../src/index.ts'

export default () => {
  const cv = external('cv')
  const cv_with = define('with')
    .named('address', T.any, null)
    .named('awards', T.any, null)
    .named('courses', T.any, null)
    .named('education', T.any, null)
    .named('email', T.any, null)
    .named('experience', T.any, null)
    .named('headline', T.any, null)
    .named('hobbies', T.any, null)
    .named('keywords', T.any, null)
    .named('location', T.any, null)
    .named('motivation', T.any, null)
    .named('name', T.any, null)
    .named('phone', T.any, null)
    .named('photo', T.any, null)
    .named('profiles', T.any, null)
    .named('publications', T.any, null)
    .named('references', T.any, null)
    .named('skills', T.any, null)
    .named('summary', T.any, null)
    .named('values', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    importPackage('@preview/nabcv:0.1.0', [cv]),
    unsafeRaw.markup`#let cd = toml("cv.toml").cv`,
    show(
      cv_with({
        photo: image({ width: pct(100), height: pct(100), fit: 'cover' }, path('assets/avatar.svg')),
        name: unsafeRaw.code<any>`cd.name`,
        headline: unsafeRaw.code<any>`cd.at("headline", default: none)`,
        location: unsafeRaw.code<any>`cd.at("location", default: none)`,
        keywords: unsafeRaw.code<any>`cd.at("keywords", default: none)`,
        email: unsafeRaw.code<any>`cd.at("email", default: none)`,
        phone: unsafeRaw.code<any>`cd.at("phone", default: none)`,
        address: unsafeRaw.code<any>`cd.at("address", default: none)`,
        profiles: unsafeRaw.code<any>`cd.at("profiles", default: none)`,
        summary: unsafeRaw.code<any>`cd.at("summary", default: none)`,
        motivation: unsafeRaw.code<any>`cd.at("motivation", default: none)`,
        experience: unsafeRaw.code<any>`cd.at("experience", default: none)`,
        education: unsafeRaw.code<any>`cd.at("education", default: none)`,
        awards: unsafeRaw.code<any>`cd.at("awards", default: none)`,
        courses: unsafeRaw.code<any>`cd.at("courses", default: none)`,
        skills: unsafeRaw.code<any>`cd.at("skills", default: none)`,
        values: unsafeRaw.code<any>`cd.at("values", default: none)`,
        hobbies: unsafeRaw.code<any>`cd.at("hobbies", default: none)`,
        references: unsafeRaw.code<any>`cd.at("references", default: none)`,
        publications: unsafeRaw.code<any>`cd.at("publications", default: none)`,
      }),
    ),
  )
}
