// Converted from test/universe/corpus/modern-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  box,
  datetime,
  define,
  doc,
  external,
  h,
  image,
  importPackage,
  includeFile,
  inline,
  m,
  path,
  pt,
  show,
  text,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('colored-headers', T.any, null)
    .named('contact-items-separator', T.any, null)
    .named('date', T.any, null)
    .named('description', T.any, null)
    .named('keywords', T.any, null)
    .named('language', T.any, null)
    .named('paper-size', T.any, null)
    .named('profile-picture', T.any, null)
    .named('show-address-icon', T.any, null)
    .named('show-footer', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/modern-cv:0.10.0', [resume]),
    show(
      resume_with({
        author: {
          firstname: 'John',
          lastname: 'Smith',
          email: 'js@example.com',
          homepage: 'https://example.com',
          phone: '(+1) 111-111-1111',
          github: 'ptsouchlos',
          gitlab: 'ptsouchlos',
          bitbucket: 'DeveloperPaul123',
          twitter: 'typstapp',
          bluesky: 'ptsou.bsky.social',
          mastodon: 'devpaul',
          scholar: '',
          orcid: '0000-0000-0000-000X',
          birth: 'January 1, 1990',
          linkedin: 'Example',
          address: '111 Example St. Example City, EX 11111',
          positions: ['Software Engineer', 'Software Architect', 'Developer'],
          custom: [{ text: 'Youtube Channel', icon: 'youtube', link: 'https://example.com' }],
        },
        keywords: ['Engineer', 'Architect'],
        description: 'John complete resume',
        profilePicture: image(path('assets/profile.png')),
        date: datetime.today().display(),
        language: 'en',
        coloredHeaders: true,
        showFooter: false,
        showAddressIcon: true,
        paperSize: 'us-letter',
        contactItemsSeparator: box(inline(h(pt(2)), text('|'), h(pt(2)))),
      }),
    ),
    m.lines(
      includeFile('sections/projects.typ'),
      includeFile('sections/experience.typ'),
      includeFile('sections/skills.typ'),
      includeFile('sections/education.typ'),
    ),
  )
}
