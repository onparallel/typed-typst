// Converted from test/universe/corpus/modernpro-coverletter.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, let_, show, sym } from '../../../src/index.ts'

export default () => {
  const coverletter = external('coverletter')
  const coverletter_with = define('with')
    .named('closing', T.any, null)
    .named('profile', T.any, null)
    .named('recipient', T.any, null)
    .returns(T.any)
    .external(coverletter)
  const [profileDecl, profile] = let_('profile', {
    name: inline`Your Name`,
    role: inline`Your Current Role`,
    address: inline`City, Country`,
    contacts: [
      { text: inline`name@candidate.invalid`, link: 'mailto:name@candidate.invalid' },
      { text: inline`site.candidate.invalid`, link: 'https://site.candidate.invalid' },
      { text: inline`Fictional ID${sym.space.nobreak}0000-0000`, link: 'https://registry.example.invalid/0000-0000' },
    ],
  })
  return doc(
    importPackage('@preview/modernpro-coverletter:1.0.3', [coverletter]),
    profileDecl,
    show(
      coverletter_with({
        profile: profile,
        recipient: {
          name: inline`Recipient Name`,
          role: inline`Recipient Role`,
          department: inline`Department`,
          organization: inline`Institution`,
          address: inline`City, Country`,
          date: inline`1 January 2026`,
          subject: inline`Application for Position Title`,
          greeting: inline`Dear Members of the Committee,`,
        },
        closing: { supplements: [inline`Enclosure: Curriculum vitae`] },
      }),
    ),
    'State the position you are applying for, your current role, and the central fit between your work and the department.',
    'Describe your strongest research contribution and the next question you plan to pursue.',
    'Summarize your teaching or professional contribution, then close with a concise statement of interest.',
  )
}
