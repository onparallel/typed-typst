// Converted from test/universe/corpus/monofolio.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  center,
  define,
  doc,
  em,
  emph,
  external,
  h,
  importPackage,
  inches,
  inline,
  pt,
  rgb,
  show,
  space,
  strong,
  sym,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const contactInfo = define('contact-info')
    .named('address', T.content, [])
    .named('email', T.content, [])
    .named('linkedin', T.content, [])
    .named('name', T.content, [])
    .named('phone', T.content, [])
    .returns(T.any)
    .external()
  const summary = define('summary').pos('arg1', T.content).returns(T.any).external()
  const skillset = define('skillset')
    .named('category', T.content, [])
    .named('skills', T.content, [])
    .returns(T.any)
    .external()
  const experience = define('experience')
    .rest('args', T.any)
    .named('company', T.content, [])
    .named('end-date', T.content, [])
    .named('location', T.content, [])
    .named('start-date', T.content, [])
    .named('title', T.content, [])
    .returns(T.any)
    .external()
  const project = define('project')
    .pos('arg1', T.content)
    .named('end-date', T.content, [])
    .named('info', T.content, [])
    .named('name', T.content, [])
    .named('start-date', T.content, [])
    .returns(T.any)
    .external()
  const education = define('education')
    .named('coursework', T.content, [])
    .named('degree', T.content, [])
    .named('end-date', T.content, [])
    .named('gpa', T.content, [])
    .named('location', T.content, [])
    .named('school', T.content, [])
    .named('start-date', T.content, [])
    .returns(T.any)
    .external()
  const certification = define('certification')
    .pos('arg1', T.content)
    .named('date', T.content, [])
    .named('issuer', T.content, [])
    .named('name', T.content, [])
    .returns(T.any)
    .external()
  const printContact = external('print-contact')
  const printSummary = external('print-summary')
  const printSkills = external('print-skills')
  const printExperience = external('print-experience')
  const printProjects = external('print-projects')
  const printEducation = external('print-education')
  const printCertifications = external('print-certifications')
  const resume_with = define('with')
    .named('accent-color', T.any, null)
    .named('contact-info-position', T.any, null)
    .named('contacts-separator', T.content, [])
    .named('entry-spacing', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('inline-separator', T.content, [])
    .named('justify', T.any, null)
    .named('line-spacing', T.any, null)
    .named('link-color', T.any, null)
    .named('list-marker', T.content, [])
    .named('page-margin', T.any, null)
    .returns(T.any)
    .external(resume)
  return doc(
    importPackage('@preview/monofolio:0.1.1', [
      resume,
      contactInfo,
      summary,
      skillset,
      experience,
      project,
      education,
      certification,
      printContact,
      printSummary,
      printSkills,
      printExperience,
      printProjects,
      printEducation,
      printCertifications,
    ]),
    show(
      resume_with({
        contactInfoPosition: center,
        contactsSeparator: inline`${h(em(0.45))}◆${h(em(0.45))}`,
        inlineSeparator: inline`${h(em(0.35))}/${h(em(0.35))}`,
        linkColor: rgb('#B5651D'),
        accentColor: rgb('#654321'),
        font: 'Libertinus Serif',
        fontSize: pt(11),
        lineSpacing: em(0.65),
        entrySpacing: em(0.325),
        pageMargin: inches(0.5),
        listMarker: inline`--`,
        justify: true,
      }),
    ),
    inline(
      contactInfo({
        name: inline`Bramble Quillwhistle`,
        phone: inline`+1 (OWL) HOO-HOOT`,
        email: inline`bramble@whiffmail.invalid`,
        address: inline`Moonbeam, Cloudland`,
        linkedin: inline`bramble-qw`,
      }),
    ),
    inline(
      summary(inline`${space}${strong(inline`Quantum Spreadsheet Cartographer`)} experienced in mapping imaginary
datasets, taming semi-sentient spreadsheets, and turning complicated business riddles into questionable
charts.${space}`),
    ),
    inline(
      skillset({
        category: inline`Arcane Machinery`,
        skills: inline`WobbleScript, QuantaQL, HyperCalc, FluxLogic, ByteWhistling`,
      }),
    ),
    inline(
      skillset({
        category: inline`Mystical Data`,
        skills: inline`Moon Mapping, Data Alchemy, Pattern Sculpting, Cloud Analytics`,
      }),
    ),
    inline(
      skillset({
        category: inline`Vision Sorcery`,
        skills: inline`Dream Charts, Hologram Tables, Orbital Graphs, Nebula Plotting`,
      }),
    ),
    inline(
      skillset({ category: inline`Goblin Automation`, skills: inline`Auto-Wrangling, Clockwork Pipelines, GoblinOps` }),
    ),
    inline(
      experience(
        {
          title: inline`Chief Spreadsheet Cartographer`,
          company: inline`Whizzlewick Data`,
          location: inline`Moonbeam, Cloudland`,
          startDate: inline`Mar 2023`,
          endDate: inline`Present`,
        },
        inline`Mapped 7.4 million imaginary records, uncovering 842 relationships between teacup capacity and
quarterly moon phases.`,
        inline`Designed a ${emph(inline`WobbleScript`)} engine that converted chaotic datasets into perfectly
rectangular tables.`,
        inline`Reduced spreadsheet turbulence by 73% using predictive cell alignment and emotionally supportive
formulas.`,
        inline`Presented findings to department heads, automated calculators, and one highly skeptical office
fern.`,
      ),
    ),
    inline(
      experience(
        {
          title: inline`Junior Data Enchanter`,
          company: inline`Institute of Nonsense`,
          location: inline`Pebblewick, Cloudland`,
          startDate: inline`Jun 2021`,
          endDate: inline`Feb 2023`,
        },
        inline`Processed 480,000 synthetic moon records using ${emph(inline`QuantaQL`)}.`,
        inline`Built ${emph(inline`FluxLogic`)} pipelines for transforming numerical artifacts into structured
analytical scrolls.`,
        inline`Created ${emph(inline`Nebula Plotting`)} visualizations for imaginary commercial phenomena.`,
        inline`Purified datasets by removing corrupted numbers, rogue decimals, and one particularly troublesome
number 47.`,
      ),
    ),
    inline(
      experience(
        {
          title: inline`Apprentice Pixel Mechanic`,
          company: inline`Bumblebyte`,
          location: inline`Tinkerbell Plains`,
          startDate: inline`May 2020`,
          endDate: inline`Aug 2020`,
        },
        inline`Maintained experimental computing contraptions for fictional customer transactions.`,
        inline`Developed ${emph(inline`ByteWhistling`)} routines to automate numerical operations and summon
dormant calculators.`,
        inline`Investigated anomalous output from legacy computational machinery.`,
      ),
    ),
    inline(
      project(
        {
          name: inline`Interdimensional Sales Oracle`,
          info: inline`WobbleScript, FluxLogic, Nebula Plotting`,
          startDate: inline`Jan 2024`,
          endDate: inline`Mar 2024`,
        },
        inline`Predicted fictional sales across twelve dimensions using historical sandwich observations.`,
      ),
    ),
    inline(
      project(
        {
          name: inline`Automated Dragon Census`,
          info: inline`QuantaQL, HyperCalc, Cloud Mapping`,
          startDate: inline`Sep 2023`,
          endDate: inline`Nov 2023`,
        },
        inline`Catalogued imaginary dragons by wing geometry, treasure preference, nap duration, and suspiciousness.`,
      ),
    ),
    inline(
      project(
        {
          name: inline`The Infinite Spreadsheet`,
          info: inline`Dream Charts, Auto-Wrangling, GoblinOps`,
          startDate: inline`Apr 2023`,
          endDate: inline`Jun 2023`,
        },
        inline`Created a spreadsheet engine capable of generating tables that continuously expand without reaching
the bottom row.`,
      ),
    ),
    inline(
      education({
        degree: inline`Master of Computational Whimsy`,
        school: inline`Royal Academy of Impossibility`,
        location: inline`Starling Valley`,
        startDate: inline`Sep 2021`,
        endDate: inline`Jun 2023`,
        gpa: inline`4.87`,
        coursework: inline`Nonsense Theory, Computational Daydreaming, Imaginary Data, Moon Mathematics`,
      }),
    ),
    inline(
      education({
        degree: inline`Bachelor of Numerical Wizardry`,
        school: inline`University of Tuesdays`,
        location: inline`Bramblemoor`,
        startDate: inline`Sep 2017`,
        endDate: inline`Apr 2021`,
        gpa: inline`4.42`,
        coursework: inline`Enchanted Algorithms, Numerical Spellcraft, Calculator Theory`,
      }),
    ),
    inline(
      certification(
        {
          name: inline`Certified Spreadsheet Whisperer`,
          issuer: inline`Guild of Imaginary Analysts`,
          date: inline`Jun 2024`,
        },
        inline`Demonstrated advanced spreadsheet whispering and circular-reference negotiation.`,
      ),
    ),
    inline(
      certification(
        {
          name: inline`GoblinOps Practitioner`,
          issuer: inline`Institute of Goblin Engineering`,
          date: inline`Feb 2024`,
        },
        inline`Completed training in goblin coordination, recursive paperwork, and distributed snack allocation.`,
      ),
    ),
    inline(
      printContact,
      space,
      printSummary,
      space,
      printSkills,
      space,
      printExperience,
      space,
      printProjects,
      space,
      printEducation,
      space,
      printCertifications,
    ),
  )
}
