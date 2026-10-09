// Converted from test/universe/corpus/clickworthy-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  blocks,
  cm,
  data,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  link,
  m,
  pt,
  rgb,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const edu = define('edu')
    .named('date', T.any, null)
    .named('degrees', T.any, null)
    .named('extra', T.any, null)
    .named('gpa', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const exp = define('exp')
    .named('date', T.any, null)
    .named('details', T.content, [])
    .named('hide', T.any, null)
    .named('location', T.any, null)
    .named('organization', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const pub = define('pub')
    .named('authors', T.any, null)
    .named('bold-author', T.any, null)
    .named('doi-link', T.any, null)
    .named('extra', T.any, null)
    .named('title', T.any, null)
    .named('venue', T.any, null)
    .named('year', T.any, null)
    .returns(T.any)
    .external()
  const skills = define('skills').pos('arg1', T.any).returns(T.any).external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('contacts', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('lang', T.any, null)
    .named('location', T.any, null)
    .named('margin', T.any, null)
    .named('role', T.any, null)
    .named('summary', T.any, null)
    .named('theme-color', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Jordan Michaels')
  const [roleDecl, role] = let_('role', '')
  const [emailDecl, email] = let_('email', 'jordan.michaels@example.com')
  const [githubDecl, github] = let_('github', 'github.com/jordan-devhub')
  const [linkedinDecl, linkedin] = let_('linkedin', 'linkedin.com/in/jordan-michaels')
  const [contactsDecl, contacts] = let_(
    'contacts',
    data([
      inline(link(add('mailto:', email), inline(email))),
      inline(link(add('https://', github), inline(github))),
      inline(link(add('https://', linkedin), inline(linkedin))),
    ]),
  )
  const [locationDecl, location_2] = let_('location', '')
  const [summaryDecl, summary] = let_('summary', '')
  const [themeDecl, theme] = let_('theme', rgb('#26428b'))
  const [fontDecl, font] = let_('font', 'New Computer Modern')
  const [fontSizeDecl, fontSize] = let_('fontSize', pt(11))
  const [langDecl, lang] = let_('lang', 'en')
  const [marginDecl, margin] = let_('margin', { top: cm(1), bottom: cm(0), left: cm(1), right: cm(1) })
  return doc(
    importPackage('@preview/clickworthy-resume:1.1.0', [resume, edu, exp, pub, skills]),
    m.lines(nameDecl, roleDecl, emailDecl, githubDecl, linkedinDecl, contactsDecl, locationDecl),
    summaryDecl,
    m.lines(themeDecl, fontDecl, fontSizeDecl, langDecl, marginDecl),
    show(
      resume_with({
        author: name,
        role: role,
        location: location_2,
        contacts: contacts,
        summary: summary,
        themeColor: theme,
        font: font,
        fontSize: fontSize,
        lang: lang,
        margin: margin,
      }),
    ),
    m.lines(
      m.heading(1, 'Education'),
      inline(
        edu({
          institution: 'Carnegie Mellon University',
          date: 'Sep 2023 - Jun 2025',
          location: 'Pittsburgh, PA',
          degrees: [['M.S.', 'Computer Systems']],
          gpa: '3.81',
          extra: '',
        }),
      ),
    ),
    inline(
      edu({
        institution: 'University of Texas at Austin',
        date: 'Aug 2018 - May 2023',
        location: 'Austin, TX',
        degrees: [
          ['B.S.', 'Software Engineering'],
          ['Minor', 'Cognitive Science'],
        ],
        gpa: '3.97',
        extra: '',
      }),
    ),
    m.lines(
      m.heading(1, 'Experience'),
      inline(
        exp({
          title: 'Platform Engineering Intern',
          organization: 'Bitstream Networks',
          date: 'May 2024 - Aug 2024',
          location: 'Denver, CO',
          details: blocks(
            m.list(
              m.item([
                'Designed and deployed a real-time telemetry pipeline for edge network routers using Go and Protobuf.',
              ]),
              m.item(['Developed high-throughput sync agents across distributed nodes using gRPC and Redis streams.']),
              m.item([
                'Created Verilog modules to validate MAC-level packet timings on custom FPGA NICs for load testing.',
              ]),
            ),
          ),
        }),
      ),
    ),
    inline(
      exp({
        title: 'Firmware Intern',
        organization: 'Atlas Devices',
        date: 'Jun 2023 - Sep 2023',
        location: 'Boston, MA',
        details: blocks(
          m.list(
            m.item(['Implemented drivers and diagnostics for a custom USB audio subsystem on a Cortex-M7 platform.']),
            m.item([
              'Built Python automation scripts for multidevice firmware upgrade pipelines and JTAG verification.',
            ]),
            m.item(['Validated board-level signal integrity with oscilloscope captures and SPI timing analyzers.']),
          ),
        ),
      }),
    ),
    inline(
      exp({
        title: 'Undergraduate Lab Assistant',
        organization: 'University of Texas at Austin',
        date: 'Aug 2021 - Dec 2022',
        location: 'Austin, TX',
        details: blocks(
          m.list(
            m.item(['Assisted with instructional support for algorithms, data structures, and discrete math courses.']),
            m.item(['Led peer tutoring sessions and created practice exams for midterm review.']),
          ),
        ),
        hide: true,
      }),
    ),
    m.lines(
      m.heading(1, 'Projects'),
      inline(
        exp({
          title: link(
            'https://github.com/jordan-devhub/lunar-nav-bot',
            inline`Lunar Navigation Bot (Autonomous Systems)`,
          ),
          details: blocks(
            m.list(
              m.item([
                'Simulated and field-tested a planetary rover using Jetson Nano, LiDAR, and YOLOv6 for rock classification.',
              ]),
              m.item([
                'Used MQTT to coordinate movement commands with a relay station over intermittent mesh networks.',
              ]),
              m.item([
                'Placed among top finalists in the',
                space,
                link(
                  'https://www.hackster.io/entries/space-bots-2023',
                  inline(strong(inline`SpaceBot 2023 Challenge`)),
                ),
                '.',
              ]),
            ),
          ),
        }),
      ),
    ),
    inline(
      exp({
        title: link(
          'https://github.com/jordan-devhub/speechsync',
          inline`SpeechSync Streamer (Real-Time Communication)`,
        ),
        details: blocks(
          m.list(
            m.item([
              'Created a voice chat system with on-the-fly transcription and translation via Whisper + MarianMT.',
            ]),
          ),
        ),
      }),
    ),
    inline(
      exp({
        title: link(
          'https://github.com/jordan-devhub/audio-amp-kit',
          inline`Portable Audio Amplifier Kit (Hardware Design)`,
        ),
        details: blocks(
          m.list(
            m.item(['Designed a 7W audio amplifier with integrated thermal shutdown and overcurrent protection.']),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(1, 'Awards'),
      inline(
        exp({
          title: 'SpaceBot 2023 Finalist',
          details: blocks(
            m.list(
              m.item([
                'Received for the',
                space,
                link('https://github.com/jordan-devhub/lunar-nav-bot', inline`Lunar Navigation Bot`),
                space,
                'project among 200+ submissions.',
              ]),
            ),
          ),
        }),
      ),
    ),
    m.lines(
      m.heading(1, 'Publications'),
      inline(
        pub({
          authors: ['Taylor Chen', 'Jordan Michaels', 'Emily Zhang'],
          boldAuthor: 'Jordan Michaels',
          title: 'Lightweight Neural Pruning for Speech Tasks on Low-Power Devices',
          venue: 'ACM UbiComp',
          year: '2024',
          doiLink: 'doi.org/10.48550/arXiv.2404.00987',
        }),
      ),
    ),
    inline(
      pub({
        authors: ['Jordan Michaels', 'Alice Smith'],
        boldAuthor: 'Jordan Michaels',
        title: 'Optimizing Edge AI Workflows for Low-Latency Inference',
        venue: 'IEEE Edge Computing',
        year: '2023',
        doiLink: 'doi.org/10.1109/EDGECOMP.2023.1234567',
        extra: 'Best Paper Award',
      }),
    ),
    m.lines(
      m.heading(1, 'Skills'),
      inline(
        skills([
          [
            'Expertise',
            [
              inline`Edge Computing`,
              inline`Network Protocols`,
              inline`Robotics Systems`,
              inline`FPGA Toolchains`,
              inline`Embedded Audio`,
              inline`Multilingual NLP`,
              inline`System Monitoring`,
              inline`CI/CD Automation`,
            ],
          ],
          [
            'Software',
            [
              inline`PyTorch`,
              inline`TensorFlow Lite`,
              inline`OpenCV`,
              inline`KiCad`,
              inline`Docker`,
              inline`Kubernetes`,
              inline`Zephyr RTOS`,
              inline`Vivado`,
              inline`gRPC`,
              inline`Git`,
              inline`JIRA`,
              inline`WireShark`,
              inline`Linux`,
            ],
          ],
          [
            'Languages',
            [
              inline`Python`,
              inline`C/C++`,
              inline`Rust`,
              inline`Bash`,
              inline`MATLAB`,
              inline`VHDL`,
              inline`Verilog`,
              inline`TypeScript`,
            ],
          ],
        ]),
      ),
    ),
  )
}
