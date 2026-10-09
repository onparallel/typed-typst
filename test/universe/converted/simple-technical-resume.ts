// Converted from test/universe/corpus/simple-technical-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  center,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inches,
  inline,
  let_,
  m,
  pt,
  show,
  space,
  strong,
  symbol,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const customTitle = define('custom-title').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const educationHeading = define('education-heading')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.any)
    .pos('arg7', T.content)
    .returns(T.any)
    .external()
  const workHeading = define('work-heading')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .pos('arg5', T.any)
    .pos('arg6', T.content)
    .returns(T.any)
    .external()
  const projectHeading = define('project-heading').pos('arg1', T.any).pos('arg2', T.content).returns(T.any).external()
  const skills = define('skills').pos('arg1', T.content).returns(T.any).external()
  const resume_with = define('with')
    .named('author-name', T.any, null)
    .named('author-position', T.any, null)
    .named('email', T.any, null)
    .named('github-username', T.any, null)
    .named('linkedin-user-id', T.any, null)
    .named('personal-info-font-size', T.any, null)
    .named('personal-info-position', T.any, null)
    .named('phone', T.any, null)
    .named('top-margin', T.any, null)
    .named('website', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Dwight Schrute')
  const [phoneDecl, phone] = let_('phone', '+1 (123) 456-7890')
  const [emailDecl, email] = let_('email', 'dschrute@dundermifflin.com')
  const [githubDecl, github] = let_('github', 'dwight-schrute')
  const [linkedinDecl, linkedin] = let_('linkedin', 'dwight-schrute')
  const [personalSiteDecl, personalSite] = let_('personal-site', 'dwightschrute.com')
  return doc(
    importPackage('@preview/simple-technical-resume:0.1.1', [
      resume,
      customTitle,
      educationHeading,
      workHeading,
      projectHeading,
      skills,
    ]),
    m.lines(nameDecl, phoneDecl, emailDecl, githubDecl, linkedinDecl, personalSiteDecl),
    show(
      resume_with({
        topMargin: inches(0.45),
        personalInfoFontSize: pt(9.2),
        authorPosition: center,
        personalInfoPosition: center,
        authorName: name,
        phone: phone,
        email: email,
        website: personalSite,
        linkedinUserId: linkedin,
        githubUsername: github,
      }),
    ),
    inline(
      customTitle(
        'Education',
        inline(
          space,
          educationHeading(
            'Scranton University',
            'Scranton, PA',
            'Bachelor of Arts',
            'Business Administration',
            datetime({ year: 1992, month: 9, day: 1 }),
            datetime({ year: 1998, month: 4, day: 1 }),
            blocks(m.list(m.item(['Awarded “Most Determined Student” in senior year']))),
          ),
          space,
        ),
      ),
    ),
    inline(
      customTitle(
        'Experience',
        blocks(
          inline(
            workHeading(
              'Regional Manager',
              'Dunder Mifflin',
              'Scranton, PA',
              datetime({ year: 2013, month: 5, day: 1 }),
              'Present',
              blocks(
                m.list(
                  m.item(['Led a team of 10+ employees, boosting office productivity and morale']),
                  m.item(['Maintained the highest sales average, outperforming competitors despite market challenges']),
                  m.item([
                    'Implemented innovative security measures to protect the office from threats, including criminal activity and wildlife intrusions',
                  ]),
                  m.item(['Successfully negotiated client contracts, increasing annual revenue by 20%']),
                ),
              ),
            ),
          ),
          inline(
            workHeading(
              'Assistant (to the) Regional Manager',
              'Dunder Mifflin',
              'Scranton, PA',
              datetime({ year: 2008, month: 3, day: 1 }),
              datetime({ year: 2013, month: 3, day: 1 }),
              blocks(
                m.list(
                  m.item([
                    'Developed and enforced company policies through the creation of the “Schrute Bucks” incentive program, improving employee engagement',
                  ]),
                  m.item([
                    'Achieved record-breaking sales, earning the title of top salesperson for five consecutive years',
                  ]),
                  m.item([
                    'Supported managerial functions, including staff supervision, client relationship management, and strategic planning',
                  ]),
                ),
              ),
            ),
          ),
          inline(
            workHeading(
              'Sales Associate',
              'Staples',
              'Scranton, PA',
              datetime({ year: 2008, month: 3, day: 1 }),
              datetime({ year: 2008, month: 3, day: 1 }),
              blocks(
                m.list(
                  m.item([
                    'Recognized as “Employee of the Month” for outstanding sales performance within a single month',
                  ]),
                  m.item(['Leveraged exceptional customer service skills to build a loyal client base']),
                  m.item(['Demonstrated leadership by training new hires on effective sales techniques']),
                ),
              ),
            ),
          ),
          inline(
            workHeading(
              'Assistant (to the) Regional Manager',
              'Dunder Mifflin',
              'Scranton, PA',
              datetime({ year: 2008, month: 3, day: 1 }),
              datetime({ year: 2005, month: 3, day: 1 }),
              blocks(
                m.list(
                  m.item(['Exceeded individual sales targets, contributing significantly to branch profitability']),
                  m.item([
                    'Introduced “Schrute Bucks” as a motivational tool, fostering a competitive',
                    space,
                    symbol('&'),
                    space,
                    'collaborative work environment',
                  ]),
                  m.item(['Assisted in coordinating office events and initiatives to maintain team cohesion']),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      customTitle(
        'Projects',
        blocks(
          inline(
            projectHeading(
              'Schrute Farms (Bed and Breakfast)',
              blocks(
                m.list(
                  m.item([
                    'Established and managed a family-run agro-tourism business offering unique activities such as table-making workshops, beet farming tours, and hay rides',
                  ]),
                  m.item(['Increased guest bookings by 50% through effective online marketing and guest engagement']),
                  m.item(['Maintained a 4.9/5 guest satisfaction rating on travel review platforms']),
                ),
              ),
            ),
          ),
          inline(
            projectHeading(
              "Dwight Schrute's Gym for Muscles",
              blocks(
                m.list(
                  m.item([
                    'Designed and equipped a workplace gym, promoting health and wellness for Dunder Mifflin employees',
                  ]),
                  m.item([
                    'Created a recycling program, offering monetary incentives (5 cents per yard of tin) to encourage sustainable practices',
                  ]),
                ),
              ),
            ),
          ),
          inline(
            projectHeading(
              'Sesame Avenue Daycare Center for Infants and Toddlers',
              blocks(
                m.list(
                  m.item([
                    'Founded an innovative daycare focused on cognitive development and early learning strategies',
                  ]),
                  m.item([
                    'Developed specialized programs combining physical activities and educational games for children',
                  ]),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      customTitle(
        'Skills',
        inline(
          space,
          skills(
            blocks(
              m.list(
                m.item([
                  strong(inline`Professional Skills:`),
                  space,
                  'Sales Expertise, Leadership, Conflict Resolution, Strategic Planning, Negotiation',
                ]),
                m.item([
                  strong(inline`Personal Traits:`),
                  space,
                  'Hardworking, Alpha Male, Jackhammer, Merciless, Insatiable',
                ]),
                m.item([
                  strong(inline`Specialized Talents:`),
                  space,
                  'Karate (Black Belt), Jujitsu, Werewolf Hunting, Table Making',
                ]),
              ),
            ),
          ),
          space,
        ),
      ),
    ),
  )
}
