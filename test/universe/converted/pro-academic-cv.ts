// Converted from test/universe/corpus/pro-academic-cv.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  center,
  define,
  dict,
  doc,
  emph,
  external,
  importPackage,
  inline,
  link,
  m,
  show,
  space,
  strong,
  sym,
  symbol,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const r2c2EntryList = define('r2c2-entry-list').rest('args', T.any).returns(T.any).external()
  const publicationEntryList = define('publication-entry-list').pos('arg1', T.any).returns(T.any).external()
  const multiLineList = define('multi-line-list').rest('args', T.any).returns(T.any).external()
  const singleLineEntry = define('single-line-entry')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .pos('arg3', T.content)
    .returns(T.any)
    .external()
  const r2c2EntryHeader = define('r2c2-entry-header')
    .named('bottom-left', T.content, [])
    .named('bottom-right', T.content, [])
    .named('top-left', T.content, [])
    .named('top-right', T.content, [])
    .returns(T.any)
    .external()
  const linkIcon = define('link-icon').returns(T.any).external()
  const multiLineText = define('multi-line-text').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const personalInfoList = define('personal-info-list').pos('arg1', T.any).returns(T.any).external()
  const resume_with = define('with')
    .named('author-info', T.any, null)
    .named('author-position', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/pro-academic-cv:0.1.0', [
      resume,
      r2c2EntryList,
      publicationEntryList,
      multiLineList,
      singleLineEntry,
      r2c2EntryHeader,
      linkIcon,
      multiLineText,
      personalInfoList,
    ]),
    show(
      resume_with({
        authorInfo: {
          name: 'John Doe',
          primaryInfo: inline`${space}+1-234-567-8900 | ${link('mailto:john.doe@example.com', inline`john.doe@example.com`)}
| ${link('https://www.john-doe.com/', inline`john-doe.com`)}${space}`,
          secondaryInfo: inline`${space}${link('https://www.linkedin.com/in/john-doe-linkedin', inline`linkedin`)} | ${link('https://github.com/john-doe-github', inline`github`)}
| ${link('https://scholar.google.com/citations?user=john-doe-google-scholar', inline`google-scholar`)}
| ${link('https://orcid.org/john-doe-orcid', inline`orcid`)}${space}`,
          tertiaryInfo: 'Your City, Your State - Your ZIP, Your Country',
        },
        authorPosition: center,
      }),
    ),
    m.lines(
      m.heading(2, 'Objective'),
      inline`Seeking a challenging position in ${symbol('[')}your field${symbol(']')} to leverage my expertise
in ${symbol('[')}your key skills${symbol(']')}. Aiming to contribute to innovative projects
at the intersection of ${symbol('[')}your interests${symbol(']')} and practical problem-solving
in fields such as ${symbol('[')}specific areas of interest${symbol(']')}.`,
    ),
    m.lines(
      m.heading(2, 'Experience'),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline(link('https://research.google.com', inline`Google Research`)),
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Job Title A`,
              bottomRight: inline`City, Country`,
            },
            'list-items': [
              inline`Developed ${symbol('[')}specific achievement${symbol(']')} achieving ${symbol('[')}specific
metric${symbol(']')} in ${symbol('[')}specific area${symbol(']')}`,
              inline`Implemented ${symbol('[')}technology/method${symbol(']')}, enhancing ${symbol('[')}specific
aspect${symbol(']')} by ${symbol('[')}specific percentage${symbol(']')}`,
              inline`Conducted analysis on ${symbol('[')}specific data${symbol(']')}, identifying ${symbol('[')}key
findings${symbol(']')}`,
              inline`Presented findings at ${symbol('[')}specific event${symbol(']')}, receiving ${symbol('[')}specific
recognition${symbol(']')}`,
            ],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`Company B`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Job Title B`,
              bottomRight: inline`Remote`,
            },
            listItems: [
              inline`Engineered a ${symbol('[')}specific system/model${symbol(']')}, improving ${symbol('[')}specific
metric${symbol(']')} by ${symbol('[')}percentage${symbol(']')}`,
              inline`Developed ${symbol('[')}specific tool/method${symbol(']')}, increasing ${symbol('[')}specific
aspect${symbol(']')} by ${symbol('[')}percentage${symbol(']')}`,
              inline`Implemented ${symbol('[')}specific system${symbol(']')}, reducing ${symbol('[')}specific metric${symbol(']')}
by ${symbol('[')}percentage${symbol(']')}`,
              inline`Conducted ${symbol('[')}specific test/analysis${symbol(']')} to validate ${symbol('[')}specific
aspect${symbol(']')}`,
            ],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Education'),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline`University Name`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Degree Name`,
              bottomRight: inline`City, Country`,
            },
            'list-items': [inline`GPA: X.XX/4.00`],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`College Name`,
              topRight: inline`Month Year`,
              bottomLeft: inline`Pre-University Education`,
              bottomRight: inline`City, Country`,
            },
            listItems: [inline`Grade: XX.X%`],
          },
          {
            entryHeaderArgs: {
              topLeft: inline`High School Name`,
              topRight: inline`Month Year`,
              bottomLeft: inline`Secondary Education`,
              bottomRight: inline`City, Country`,
            },
            listItems: [inline`GPA: X.X/10`],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Projects'),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline`Project A: ${symbol('[')}Brief Description${symbol(']')}`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Tools: ${symbol('[')}List of tools and technologies used${symbol(']')}`,
              bottomRight: inline(link('https://github.com/your-username/project-a', inline`@your-username/project-a`)),
            },
            'list-items': [
              inline`Developed ${symbol('[')}specific feature/system${symbol(']')} for ${symbol('[')}specific purpose${symbol(']')}`,
              inline`Implemented ${symbol('[')}specific technology${symbol(']')} for ${symbol('[')}specific goal${symbol(']')},
achieving ${symbol('[')}specific result${symbol(']')}`,
              inline`Created ${symbol('[')}specific component${symbol(']')}, ensuring ${symbol('[')}specific benefit${symbol(']')}`,
              inline`Applied ${symbol('[')}specific method${symbol(']')} to analyze ${symbol('[')}specific aspect${symbol(']')}`,
            ],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`Project B: ${symbol('[')}Brief Description${symbol(']')}`,
              topRight: inline`Month Year`,
              bottomLeft: inline`Tools: ${symbol('[')}List of tools and technologies used${symbol(']')}`,
              bottomRight: inline(link('https://github.com/your-username/project-b', inline`@your-username/project-b`)),
            },
            listItems: [
              inline`Developed ${symbol('[')}specific model/system${symbol(']')}, achieving ${symbol('[')}specific
metric${symbol(']')}`,
              inline`Implemented ${symbol('[')}specific feature${symbol(']')}, processing ${symbol('[')}specific
volume${symbol(']')} of data`,
              inline`Created ${symbol('[')}specific visualization${symbol(']')} for ${symbol('[')}specific purpose${symbol(']')}`,
              inline`Developed ${symbol('[')}specific component${symbol(']')} for easy integration with ${symbol('[')}specific
system${symbol(']')}`,
            ],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(
        2,
        'Patents',
        sym.space.nobreak,
        '&',
        sym.space.nobreak,
        'Publications (note:C=Conference, J=Journal, P=Patent, S=In Submission, T=Thesis)',
      ),
      inline(
        publicationEntryList([
          {
            category: 'C',
            value: inline`Your Name, et al. (Year). ${link('https://doi.org/XX.XXXX/XXXXXXX.XXXX.XXXXXXX', inline(strong(inline`Title of Conference Paper`)))}.
In ${emph(inline`Name of Conference Proceedings`)}, pp. XX-XX. Publisher. Date, Location. DOI:
XX.XXXX/XXXXXXX.XXXX.XXXXXXX`,
          },
          {
            category: 'C',
            value: inline`Your Name, et al. (Year). ${link('https://doi.org/XX.XXXX/XXXXXXX.XXXX.XXXXXXX', inline(strong(inline`Title of Conference Paper`)))}.
In ${emph(inline`Name of Conference Proceedings`)}, pp. XX-XX. Publisher. Date, Location. DOI:
XX.XXXX/XXXXXXX.XXXX.XXXXXXX`,
          },
          {
            category: 'S',
            value: inline`Your Name, et al. (Year). ${strong(inline`Title of Submitted Paper`)}. Manuscript submitted
for publication in ${emph(inline`Journal Name`)}.`,
          },
          {
            category: 'P',
            value: inline`Inventor 1, Your Name, Inventor 3, et al. (Year). ${link('https://patentoffice.gov/patent/XXXXXXXXX', inline(strong(inline`Title of Patent`)))}.
Patent Office, Patent No. XXXXXXXXX. Registration Date: Date, Grant Date: Date, Publication
Date: Date.`,
          },
          {
            category: 'J',
            value: inline`Author 1, Your Name, Author 3, et al. (Year). ${link('https://doi.org/XX.XXXX/XXXXX.XXXX.XXXXXXX', inline(strong(inline`Title of Journal Article`)))}.
${emph(inline`Journal Name`)}, Vol. XX, Issue X, pp. XXX-XXX. DOI: XX.XXXX/XXXXX.XXXX.XXXXXXX`,
          },
        ]),
      ),
    ),
    m.lines(
      m.heading(2, 'Skills'),
      inline(
        multiLineList(
          singleLineEntry(
            'Programming Languages:',
            inline`Language 1, Language 2, Language 3, Language 4, Language 5`,
            inline(),
          ),
          singleLineEntry(
            'Web Technologies:',
            inline`Technology 1, Technology 2, Technology 3, Technology 4, Technology 5`,
            inline(),
          ),
          singleLineEntry('Database Systems:', inline`Database 1, Database 2, Database 3`, inline()),
          singleLineEntry(
            'Data Science & Machine Learning:',
            inline`Tool 1, Tool 2, Tool 3, Tool 4, Tool 5, Tool 6`,
            inline(),
          ),
          singleLineEntry(
            'Cloud Technologies:',
            inline`Cloud Platform 1, Cloud Platform 2, Cloud Platform 3`,
            inline(),
          ),
          singleLineEntry('DevOps & Version Control:', inline`Tool 1, Tool 2, Tool 3, Tool 4, Tool 5`, inline()),
          singleLineEntry('Specialized Area:', inline`Skill 1, Skill 2, Skill 3, Skill 4`, inline()),
          singleLineEntry(
            'Mathematical & Statistical Tools:',
            inline`Tool 1, Tool 2, Tool 3, Tool 4, Tool 5`,
            inline(),
          ),
          singleLineEntry('Other Tools & Technologies:', inline`Tool 1, Tool 2, Tool 3, Tool 4, Tool 5`, inline()),
          singleLineEntry('Research Skills:', inline`Skill 1, Skill 2, Skill 3, Skill 4, Skill 5, Skill 6`, inline()),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Honors', sym.space.nobreak, '&', sym.space.nobreak, 'Awards'),
      m.list(
        m.item([
          r2c2EntryHeader({
            topLeft: inline`Award Name A`,
            topRight: inline`Month Year`,
            bottomLeft: inline`Awarding Institution/Organization`,
            bottomRight: inline(link('https://award-link-a.com', inline(linkIcon()))),
          }),
        ]),
      ),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline`Award Name B`,
              topRight: inline`Month Year`,
              bottomLeft: inline`Awarding Institution/Organization`,
              bottomRight: inline(link('https://award-link-b.com', inline(linkIcon()))),
            },
            'list-items': [
              inline`Brief description of the award and its significance`,
              inline`Impact or recognition associated with the award`,
            ],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`Competition Achievement`,
              topRight: inline`Month Year`,
              bottomLeft: inline`Competition Name, Organizing Body`,
              bottomRight: inline(link('https://competition-link.com', inline(linkIcon()))),
            },
            listItems: [
              inline`Specific achievement or rank in the competition`,
              inline`Skills or abilities demonstrated through this achievement`,
            ],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Leadership Experience'),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline`Leadership Role A`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Organization/Institution Name`,
              bottomRight: inline(link('https://organization-a-link.com', inline(linkIcon()))),
            },
            'list-items': [
              inline`Key responsibility or achievement in this role`,
              inline`Quantifiable impact or improvement made during tenure`,
              inline`Initiative taken or project led`,
            ],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`Leadership Role B`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Organization/Institution Name`,
              bottomRight: inline(link('https://organization-b-link.com', inline(linkIcon()))),
            },
            listItems: [
              inline`Key responsibility or achievement in this role`,
              inline`Quantifiable impact or improvement made during tenure`,
              inline`Initiative taken or project led`,
            ],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Volunteer Experience'),
      inline(
        r2c2EntryList(
          dict({
            'entry-header-args': {
              topLeft: inline`Volunteer Role A`,
              topRight: inline`Month Year - Month Year`,
              bottomLeft: inline`Organization Name`,
              bottomRight: inline(link('https://volunteer-org-a-link.com', inline(linkIcon()))),
            },
            'list-items': [
              inline`Key responsibility or contribution in this role`,
              inline`Impact of your volunteer work`,
              inline`Skills developed or applied during this experience`,
            ],
          }),
          {
            entryHeaderArgs: {
              topLeft: inline`Volunteer Role B`,
              topRight: inline`Month Year - Present`,
              bottomLeft: inline`Organization Name`,
              bottomRight: inline(link('https://volunteer-org-b-link.com', inline(linkIcon()))),
            },
            listItems: [
              inline`Key responsibility or contribution in this role`,
              inline`Impact of your volunteer work`,
              inline`Skills developed or applied during this experience`,
            ],
          },
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Professional Memberships'),
      inline(
        multiLineList(
          singleLineEntry(
            inline`Professional Organization A,`,
            inline`Membership ID: XXXXXXXX`,
            inline`Month Year - Present`,
          ),
          singleLineEntry(
            inline`Professional Organization B,`,
            inline`Membership ID: XXXXXXXX`,
            inline`Month Year - Present`,
          ),
          singleLineEntry(
            inline`Professional Organization C,`,
            inline`Membership ID: XXXXXXXX`,
            inline`Month Year - Present`,
          ),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Certifications'),
      inline(
        multiLineList(
          singleLineEntry(inline`Certification A`, inline(), inline`Month Year`),
          singleLineEntry(inline`Certifying Body:`, inline`Certification B`, inline`Month Year`),
          singleLineEntry(inline`Certifying Body:`, inline`Certification C`, inline`Month Year`),
          singleLineEntry(inline`Certification D`, inline(), inline`Month Year`),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Additional Information'),
      inline(
        multiLineText(
          singleLineEntry(
            inline`Languages:`,
            inline`Language A (Proficiency level), Language B (Proficiency level), Language C (Proficiency level)`,
            inline(),
          ),
          singleLineEntry(inline`Interests:`, inline`Interest 1, Interest 2, Interest 3, Interest 4`, inline()),
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'References'),
      inline(
        personalInfoList([
          {
            name: inline`Reference Person 1`,
            title: inline`Job Title, Department`,
            org: inline`Organization/Institution Name`,
            email: inline`email1@example.com`,
            phone: inline`+X-XXX-XXX-XXXX`,
            note: inline`Relationship: e.g., Thesis Advisor, Manager, etc.`,
          },
          {
            name: inline`Reference Person 2`,
            title: inline`Job Title, Department`,
            org: inline`Organization/Institution Name`,
            email: inline`email2@example.com`,
            phone: inline`+X-XXX-XXX-XXXX`,
            note: inline`Relationship: e.g., Project Supervisor, Colleague, etc.`,
          },
          {
            name: inline`Reference Person 3`,
            title: inline`Job Title, Department`,
            org: inline`Organization/Institution Name`,
            email: inline`email3@example.com`,
            phone: inline`+X-XXX-XXX-XXXX`,
            note: inline`Relationship: e.g., Mentor, Collaborator, etc.`,
          },
        ]),
      ),
    ),
  )
}
