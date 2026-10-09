// Converted from test/universe/corpus/ttq-classic-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, blocks, define, doc, external, importPackage, inline, m, show, smartquote } from '../../../src/index.ts'

export default () => {
  const projectEntry = define('project-entry')
    .named('body', T.content, [])
    .named('name', T.any, null)
    .named('url', T.any, null)
    .returns(T.any)
    .external()
  const resume = external('resume')
  const resumeHeader = define('resume-header')
    .named('contacts', T.any, null)
    .named('name', T.any, null)
    .returns(T.any)
    .external()
  const sectionHeader = define('section-header').pos('arg1', T.any).returns(T.any).external()
  const table_2 = define('table').named('columns', T.any, null).named('items', T.any, null).returns(T.any).external()
  const timelineEntry = define('timeline-entry')
    .named('body', T.content, [])
    .named('heading-left', T.any, null)
    .named('heading-right', T.any, null)
    .named('subheading-left', T.any, null)
    .named('subheading-right', T.any, null)
    .returns(T.any)
    .external()
  return doc(
    importPackage('@preview/ttq-classic-resume:0.1.0', [
      projectEntry,
      resume,
      resumeHeader,
      sectionHeader,
      table_2,
      timelineEntry,
    ]),
    show(resume),
    inline(
      resumeHeader({
        name: 'John Doe',
        contacts: [
          'john.doe@example.com',
          '(555) 123-4567',
          'github.com/johndoe',
          'linkedin.com/in/johndoe',
          'Pittsburgh, PA',
        ],
      }),
    ),
    inline(sectionHeader('Active Certifications')),
    inline(
      table_2({
        items: [
          inline`Offensive Security Certified Professional (OSCP)`,
          inline`GIAC Cyber Threat Intelligence (GCTI)`,
          inline`CompTIA CASP+, CySA+, Sec+, Net+, A+, Proj+`,
          inline`GIAC Machine Learning Engineer (GMLE)`,
        ],
        columns: 2,
      }),
    ),
    inline(sectionHeader('Skills')),
    inline(
      table_2({
        items: [
          { category: 'Programming', text: inline`Python, R, JS, C#, Rust, PowerShell, CI/CD` },
          { category: 'Data Science', text: inline`ML/statistics, TensorFlow, AI Engineering` },
          { category: 'IT & Cybersecurity', text: inline`AD DS, Splunk, Metasploit, Wireshark, Nessus` },
          { category: 'Cloud', text: inline`AWS EC2/S3, Helm, Docker, Serverless` },
        ],
        columns: 2,
      }),
    ),
    inline(sectionHeader('Work Experience')),
    inline(
      timelineEntry({
        headingLeft: 'Templar Archives Research Division',
        headingRight: 'August 2024 – Present',
        subheadingLeft: 'Psionic Research Analyst',
        subheadingRight: 'Aiur',
        body: blocks(
          m.list(
            m.item([
              'Analyzed Khala disruption patterns following Amon',
              smartquote({ double: false }),
              's corruption, developing countermeasures to protect remaining neural link infrastructure.',
            ]),
            m.item([
              'Building automated threat detection pipelines using Khaydarin crystal arrays to monitor Void energy signatures across the sector.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: 'Terran Dominion Ghost Academy',
        headingRight: 'May 2025 – July 2025',
        subheadingLeft: 'Covert Ops Trainee',
        subheadingRight: 'Tarsonis (Remote)',
        body: blocks(
          m.list(
            m.item([
              'Developed tactical HUD displays for Ghost operatives integrating real-time Zerg hive cluster intelligence.',
            ]),
            m.item([
              'Created automated target acquisition systems for nuclear launch protocols; involved cloaking field calibration and EMP targeting.',
            ]),
            m.item([
              'Discovered (and reported) a critical vulnerability in Adjutant defense networks exploitable by Zerg Infestors.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: "Abathur's Evolution Pit",
        headingRight: 'June 2023 – July 2023',
        subheadingLeft: 'Biomass Research Intern',
        subheadingRight: 'Char',
        body: blocks(
          m.list(
            m.item([
              'Developed tracking algorithms for Overlord surveillance networks; supported pattern-of-life analysis for Terran outpost elimination.',
            ]),
            m.item([
              'Prototyped a creep tumor optimization tool featuring swarm pathfinding, resource node mapping, and hatchery placement recommendations.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: "Raynor's Raiders",
        headingRight: 'January 2018 – June 2020',
        subheadingLeft: 'Combat Engineer',
        subheadingRight: 'Mar Sara',
        body: blocks(
          m.list(
            m.item([
              'Administered Hyperion shipboard systems, SCV maintenance protocols, and bunker defense automation for 30,000+ colonists.',
            ]),
            m.item([
              'Developed siege tank targeting scripts, delivered Zerg threat briefs, and integrated supply depot optimization procedures.',
            ]),
            m.item(['Achieved Distinguished Graduate honors at the Mar Sara Militia Academy.']),
            m.item([
              'Awarded the Raynor',
              smartquote({ double: false }),
              's Star and Mar Sara Defense Medal for meritorious service against the Swarm.',
            ]),
          ),
        ),
      }),
    ),
    inline(sectionHeader('Education')),
    inline(
      timelineEntry({
        headingLeft: 'Carnegie Mellon University',
        headingRight: 'December 2025',
        subheadingLeft: 'Master of Information Technology Strategy',
        subheadingRight: 'Pittsburgh, PA',
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: 'United States Air Force Academy',
        headingRight: 'May 2024',
        subheadingLeft: 'BS, Data Science',
        subheadingRight: 'Colorado Springs, CO',
        body: blocks(
          m.list(
            m.item(['Distinguished Graduate (top 10%); Chinese language minor (L2+/R1 on DLPT).']),
            m.item(['Delogrand deputy captain, cyber combat lead, and web exploit SME.']),
            m.item(['Professor Bradley A. Warner Data Science Catalyst and Top Cadet in Computer Networks.']),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: 'Western Governors University',
        headingRight: 'April 2022',
        subheadingLeft: 'BS, Cybersecurity and Information Assurance',
        subheadingRight: 'Remote',
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: 'Community College of the Air Force',
        headingRight: 'February 2019',
        subheadingLeft: 'AS, Information Systems Technology',
        subheadingRight: 'Remote',
      }),
    ),
    inline(sectionHeader('Cyber Competition')),
    inline(
      timelineEntry({
        headingLeft: '1st in SANS Academy Cup 2024',
        body: blocks(
          m.list(
            m.item([
              'Competed as the Delogrand Web Exploit SME, solving SQLi, API, and HTTP packet crafting problems.',
            ]),
            m.item(['Also placed first in SANS Core Netwars competition.']),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: '1st in NCX 2023',
        body: blocks(
          m.list(
            m.item(['Developed strategies, defensive scripts, and exploits for the Cyber Combat event.']),
            m.item(['Analyzed logs with Bash and Python for the Data Analysis event.']),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: '1st in SANS Academy Cup 2023',
        body: blocks(
          m.list(
            m.item(['Competed as the Delogrand Web Exploit SME, solving XSS, XXE, SQLi, and HTTP crafting problems.']),
            m.item(['Took first place against rival Army, Navy, and Coast Guard service academy teams.']),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: '1st in RMCS 2023',
        body: blocks(
          m.list(
            m.item(['Competed as the Delogrand Web Exploit SME, solving obfuscated JS, Wasm, XSS, and SQLi problems.']),
          ),
        ),
      }),
    ),
    inline(
      timelineEntry({
        headingLeft: '1st in NCX 2022',
        body: blocks(m.list(m.item(['Trained and strategized teams for the Cyber Combat event.']))),
      }),
    ),
    inline(sectionHeader('Projects')),
    inline(
      projectEntry({
        name: 'TongueToQuill',
        url: 'https://www.tonguetoquill.com',
        body: blocks(
          m.list(
            m.item([
              'Rich markdown editor for perfectly formatted USAF and USSF documents with Claude MCP integration.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'Quillmark',
        url: 'https://github.com/nibsbin/quillmark',
        body: blocks(
          m.list(
            m.item(['Parameterization engine for generating arbitrarily typesetted documents from markdown content.']),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'RoboRA',
        url: 'https://github.com/nibsbin/RoboRA',
        body: blocks(
          m.list(
            m.item([
              'AI research automation framework for Dr. Nadiya Kostyuk',
              smartquote({ double: false }),
              's research on global cyber policy.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'Scraipe',
        url: 'https://pypi.org/project/scraipe/',
        body: blocks(
          m.list(m.item(['An asynchronous scraping and enrichment library to automate cybersecurity research.'])),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'Quandry',
        url: 'https://quandry.streamlit.app/',
        body: blocks(
          m.list(
            m.item(['LLM Expectation Engine to automate security and behavior evaluation of LLM models.']),
            m.item([
              'Awarded 1st place out of 11 teams in CMU',
              smartquote({ double: false }),
              's Fall 2024 Information Security, Privacy, and Policy poster fair.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'Streamlit Scroll Navigation',
        url: 'https://pypi.org/project/streamlit-scroll-navigation/',
        body: blocks(
          m.list(
            m.item([
              'Published a Streamlit-featured PyPI package to help data scientists create fluid single-page applications.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'ADSBLookup',
        url: '<closed source>',
        body: blocks(
          m.list(
            m.item([
              'Reversed the internal API of a popular ADSB web service to pull comprehensive live ADSB datasets; ported and exposed attributes in a user-friendly, Pandas-compatible Python library for data scientists.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'OSCP LaTeX Report Template',
        url: 'https://github.com/SnpM/oscp-latex-report-template',
        body: blocks(
          m.list(
            m.item([
              'Published a report template that features custom commands for streamlined penetration test documentation.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      projectEntry({
        name: 'Lockstep Framework',
        url: 'https://github.com/SnpM/LockstepFramework',
        body: blocks(
          m.list(
            m.item([
              'As a budding programmer, I created a popular RTS engine with custom-built deterministic physics.',
            ]),
          ),
        ),
      }),
    ),
  )
}
