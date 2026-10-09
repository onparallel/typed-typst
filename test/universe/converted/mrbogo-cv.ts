// Converted from test/universe/corpus/mrbogo-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  external,
  fr,
  image,
  importPackage,
  inline,
  m,
  path,
  set,
  show,
  space,
  text,
  unsafeRaw,
  v,
} from '../../../src/index.ts'

export default () => {
  const headingStyle = external('heading-style')
  const cv = external('cv')
  const colorPrimary = external('color-primary')
  const colorDark = external('color-dark')
  const side = define('side').pos('arg1', T.content).returns(T.any).external()
  const contactInfo = define('contact-info').returns(T.any).external()
  const socialLinks = define('social-links').returns(T.any).external()
  const introduction = define('introduction').pos('arg1', T.content).returns(T.any).external()
  const cv_with = define('with')
    .named('accent-color', T.any, null)
    .named('author', T.any, null)
    .named('header-color', T.any, null)
    .named('profile-picture', T.any, null)
    .returns(T.any)
    .external(cv)
  return doc(
    unsafeRaw.markup`#let lang = sys.inputs.at("lang", default: "en")`,
    importPackage('@preview/mrbogo-cv:1.0.5', [
      headingStyle,
      cv,
      colorPrimary,
      colorDark,
      side,
      contactInfo,
      socialLinks,
      introduction,
    ]),
    m.lines(
      unsafeRaw.markup`#import "content/" + lang + "/labels.typ": *`,
      unsafeRaw.markup`#import "content/" + lang + "/profile.typ": author, about-me, title-intro, intro-text`,
      unsafeRaw.markup`#import "content/" + lang + "/skills.typ": *`,
      unsafeRaw.markup`#import "content/" + lang + "/experience.typ": title as title-experience, content as experiences`,
      unsafeRaw.markup`#import "content/" + lang + "/projects.typ": title as title-projects, content as projects`,
      unsafeRaw.markup`#import "content/" + lang + "/education.typ": title as title-education, content as education`,
      unsafeRaw.markup`#import "content/" + lang + "/certifications.typ": title as title-certifications, content as certifications`,
      unsafeRaw.markup`#import "content/" + lang + "/publications.typ": title as title-publications, content as publications`,
    ),
    m.lines(set(text, { lang: unsafeRaw.code<any>`lang` }), show(headingStyle)),
    show(
      cv_with({
        author: unsafeRaw.code<any>`author`,
        accentColor: colorPrimary,
        profilePicture: image(path('assets/profile.png')),
        headerColor: colorDark,
      }),
    ),
    inline(
      side(
        blocks(
          m.heading(1, unsafeRaw.code<any>`title-about`),
          inline(unsafeRaw.code<any>`about-me`),
          m.lines(m.heading(1, unsafeRaw.code<any>`title-contact`), inline(contactInfo())),
          m.heading(1, unsafeRaw.code<any>`title-skills`),
          inline(
            unsafeRaw.code<any>`skills-technical`,
            space,
            unsafeRaw.code<any>`skills-soft`,
            space,
            unsafeRaw.code<any>`skills-languages-spoken`,
          ),
          inline(v(fr(1)), space, socialLinks()),
        ),
      ),
    ),
    m.heading(1, unsafeRaw.code<any>`title-intro`),
    inline(introduction(inline(unsafeRaw.code<any>`intro-text`))),
    m.heading(1, unsafeRaw.code<any>`title-experience`),
    inline(unsafeRaw.code<any>`experiences`),
    m.heading(1, unsafeRaw.code<any>`title-projects`),
    inline(unsafeRaw.code<any>`projects`),
    m.heading(1, unsafeRaw.code<any>`title-education`),
    inline(unsafeRaw.code<any>`education`),
    m.heading(1, unsafeRaw.code<any>`title-certifications`),
    inline(unsafeRaw.code<any>`certifications`),
    m.heading(1, unsafeRaw.code<any>`title-publications`),
    inline(unsafeRaw.code<any>`publications`),
  )
}
