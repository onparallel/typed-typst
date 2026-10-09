// Converted from test/universe/corpus/humanistically.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  define,
  doc,
  emph,
  external,
  importPackage,
  inline,
  link,
  m,
  quote,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const humanistically = external('humanistically')
  const experience = define('experience')
    .pos('arg1', T.content)
    .named('location', T.any, null)
    .named('place', T.content, [])
    .named('time', T.content, [])
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const paper = define('paper')
    .named('date', T.content, [])
    .named('title', T.content, [])
    .named('venue', T.content, [])
    .returns(T.any)
    .external()
  const humanistically_with = define('with')
    .named('address', T.any, null)
    .named('contacts', T.any, null)
    .named('footer-text', T.content, [])
    .named('name', T.any, null)
    .named('updated', T.any, null)
    .returns(T.any)
    .external(humanistically)
  return doc(
    importPackage('@preview/humanistically:0.1.0', [humanistically, experience, paper]),
    show(
      humanistically_with({
        name: 'Bob Typesetterson',
        address: '5419 Hollywood Blvd Ste c731, Los Angeles, CA 90027',
        updated: 'October 2025',
        contacts: [inline`(323) 555 1435`, inline(link('mailto:hi@ohrg.org'))],
        footerText: inline`Typesetterson --- Page${sym.space}`,
      }),
    ),
    m.heading(1, 'Education'),
    inline(
      experience(
        { place: inline`PhD in Comparative Literature, University of Typography`, time: inline`2026--` },
        blocks(
          m.lines(
            inline`Dissertation: ${quote(inline`Digital Materiality: The Poetics of Markup Languages in Contemporary Literature`)}.
Committee:`,
            m.list(
              m.item(['Dr. Sarah Markdown (Chair, Comparative Literature)']),
              m.item(['Dr. James LaTeX (Digital Humanities)']),
              m.item(['Dr. Patricia Renderer (English)']),
            ),
          ),
        ),
      ),
    ),
    inline(
      experience(
        { place: inline`Master of Arts in English Literature, Typst University`, time: inline`2024--26` },
        blocks(
          m.lines(
            inline`Thesis: ${quote(inline`The Semiotics of Whitespace: Typography in Modernist Poetry`)}. Advised
by:`,
            m.list(m.item(['Prof. Laurenz Typistotle (English)'])),
          ),
        ),
      ),
    ),
    inline(
      experience(
        { place: inline`Bachelor of Arts in English, Typst University`, time: inline`2020--23` },
        blocks(
          m.lines(
            inline`Undergraduate thesis: ${quote(inline`A Literary Theory of Typesetting`)}. Advised by:`,
            m.list(m.item(['Laurenz Typistotle (English)'])),
          ),
          inline`${emph(inline`Summa cum laude`)}, Phi Beta Kappa`,
        ),
      ),
    ),
    m.heading(1, 'Professional Experience'),
    inline(
      experience(
        {
          place: inline`Department of English, Typst University`,
          title: 'Teaching Assistant',
          time: inline`2024--26`,
          location: 'Los Angeles, CA',
        },
        blocks(
          m.lines(
            'Courses:',
            m.list(
              m.item(['Introduction to Literary Theory (Fall 2024, Spring 2025)']),
              m.item(['Digital Humanities Methods (Fall 2025, Spring 2026)']),
              m.item(['Modernist Literature (Spring 2026)']),
            ),
          ),
        ),
      ),
    ),
    inline(
      experience(
        {
          place: inline(link('https://typst.app/', inline`Typst`)),
          title: 'Intern',
          time: inline`Summer 2026`,
          location: 'Online',
        },
        inline`${space}Built out a killer template for a CV in the humanities. Developed documentation for
academic users and contributed to community template library.${space}`,
      ),
    ),
    inline(
      experience(
        {
          place: inline`Typst University Library, Digital Scholarship Center`,
          title: 'Research Assistant',
          time: inline`2023--24`,
          location: 'Los Angeles, CA',
        },
        inline`${space}Assisted faculty and graduate students with digital publication workflows. Conducted
workshops on markup languages and document preparation systems.${space}`,
      ),
    ),
    m.heading(1, 'Peer-Reviewed Publications'),
    inline(
      paper({
        venue: inline(link('https://www.euppublishing.com/loi/jobs', inline`Journal of Beckett Studies`)),
        title: inline`Typesetting systems in Beckett: Materiality and the unnamable`,
        date: inline`2027`,
      }),
    ),
    inline(
      paper({
        venue: inline(emph(inline`Digital Humanities Quarterly`)),
        title: inline`Markup as metaphor: Literary approaches to document encoding`,
        date: inline`2026`,
      }),
    ),
    inline(
      paper({
        venue: inline(link('https://typst.app/blog/', inline`The Typst Blog`)),
        title: inline`Why literary theory matters in Typst`,
        date: inline`2025`,
      }),
    ),
    m.heading(1, 'Book Chapters'),
    inline(
      paper({
        venue: inline`${emph(inline`The Oxford Handbook of Digital Modernism`)}, ed. Jessica Parser (Oxford UP) [forthcoming]`,
        title: inline`Concrete poetry and computational typography`,
        date: inline`2028`,
      }),
    ),
    m.heading(1, 'Conference Presentations'),
    inline(
      experience(
        {
          place: inline`Modern Language Association Annual Convention`,
          title: inline`Panel: "Material Texts in the Digital Age"`,
          time: inline`January 2027`,
          location: 'Chicago, IL',
        },
        inline`${space}Paper: "From Letterpress to LaTeX: Typographic Consciousness in Contemporary Poetry"${space}`,
      ),
    ),
    inline(
      experience(
        {
          place: inline`Digital Humanities Conference`,
          title: inline`Short Paper`,
          time: inline`July 2026`,
          location: 'Mexico City, Mexico',
        },
        inline`${space}"Open Source Typesetting and Academic Labor: A Critical Approach"${space}`,
      ),
    ),
    inline(
      experience(
        {
          place: inline`Graduate English Association Symposium, Typst University`,
          title: inline`Invited Speaker`,
          time: inline`April 2025`,
          location: 'Los Angeles, CA',
        },
        inline`${space}"Reading Code, Coding Reading: Interdisciplinary Approaches to Digital Text"${space}`,
      ),
    ),
    m.heading(1, 'Awards and Honors'),
    inline(
      experience(
        { place: inline`Digital Humanities Research Fellowship`, time: inline`2026--27` },
        inline`${space}Typst University Graduate Division. $15,000 for dissertation research.${space}`,
      ),
    ),
    inline(
      experience(
        { place: inline`Outstanding Graduate Student Instructor Award`, time: inline`2025` },
        inline`${space}Typst University Department of English.${space}`,
      ),
    ),
    inline(
      experience(
        { place: inline`Graduate Research Grant`, time: inline`2024` },
        inline`${space}Typst University. $2,500 for archival research on modernist typography.${space}`,
      ),
    ),
    m.heading(1, 'Teaching Experience'),
    inline(
      experience(
        { place: inline`Typst University`, title: 'Instructor of Record', time: inline`Summer 2026` },
        blocks(m.list(m.item(['Writing 101: Academic Writing and Research (2 sections)']))),
      ),
    ),
    inline(
      experience(
        { place: inline`Typst University`, title: 'Teaching Assistant', time: inline`2024--26` },
        blocks(
          m.list(
            m.item(['Introduction to Literary Theory (Prof. Typistotle)']),
            m.item(['Digital Humanities Methods (Prof. Markdown)']),
            m.item(['Modernist Literature (Prof. Renderer)']),
            m.item(['Introduction to Poetry (Prof. Verse)']),
          ),
        ),
      ),
    ),
    m.heading(1, 'Service and Leadership'),
    inline(
      experience(
        { place: inline`Digital Humanities Working Group`, title: 'Co-founder and Organizer', time: inline`2024--` },
        inline`${space}Monthly workshops and reading group for graduate students interested in computational
methods.${space}`,
      ),
    ),
    inline(
      experience(
        { place: inline`Graduate Student Association, English Department`, title: 'President', time: inline`2025--26` },
        inline(),
      ),
    ),
    inline(
      experience(
        { place: inline`MLA Annual Convention`, title: 'Session Presider', time: inline`2026` },
        inline`${space}"New Approaches to Book History and Material Culture"${space}`,
      ),
    ),
    m.heading(1, 'Professional Memberships'),
    m.list(
      m.item(['Modern Language Association (MLA)']),
      m.item(['Association for Computers and the Humanities (ACH)']),
      m.item(['Modernist Studies Association (MSA)']),
      m.item(['Society for Textual Scholarship']),
    ),
    m.heading(1, 'Languages and Technical Skills'),
    inline`${strong(inline`Languages:`)} English (native), French (reading proficiency), German (reading
proficiency)`,
    inline`${strong(inline`Digital Skills:`)} Typst, LaTeX, Markdown, HTML/CSS, Python, XML/TEI, Git/GitHub`,
    m.heading(1, 'References'),
    'Available upon request.',
  )
}
