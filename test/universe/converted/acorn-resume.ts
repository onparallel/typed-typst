// Converted from test/universe/corpus/acorn-resume.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  black,
  blocks,
  cm,
  define,
  doc,
  em,
  external,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  pad,
  pt,
  show,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const resume = external('resume')
  const header = define('header').named('contacts', T.any, null).named('name', T.any, null).returns(T.any).external()
  const exp = define('exp')
    .named('date', T.any, null)
    .named('details', T.content, [])
    .named('location', T.any, null)
    .named('organization', T.any, null)
    .named('role', T.any, null)
    .returns(T.any)
    .external()
  const project = define('project')
    .named('details', T.content, [])
    .named('live-url', T.any, null)
    .named('name', T.any, null)
    .named('repo-url', T.any, null)
    .named('technologies', T.any, null)
    .returns(T.any)
    .external()
  const edu = define('edu')
    .named('date', T.any, null)
    .named('degree', T.any, null)
    .named('gpa', T.any, null)
    .named('institution', T.any, null)
    .named('location', T.any, null)
    .returns(T.any)
    .external()
  const resume_with = define('with')
    .named('author', T.any, null)
    .named('font', T.any, null)
    .named('font-size', T.any, null)
    .named('link-style', T.any, null)
    .named('margin', T.any, null)
    .returns(T.any)
    .external(resume)
  const [nameDecl, name] = let_('name', 'Charlie Kelmeckis')
  const [emailDecl, email] = let_('email', 'wallflower24@example.com')
  const [githubDecl, github] = let_('github', 'https://github.com/wallflower24')
  const [linkedinDecl, linkedin] = let_('linkedin', 'https://www.linkedin.com/in/charlie-kelmeckis')
  const [personalSiteDecl, personalSite] = let_('personal-site', 'https://wallflower.me')
  return doc(
    importPackage('@preview/acorn-resume:0.1.0', [resume, header, exp, project, edu]),
    m.lines(nameDecl, emailDecl, githubDecl, linkedinDecl, personalSiteDecl),
    show(
      resume_with({
        author: name,
        margin: { x: cm(1.5), y: cm(1.5) },
        font: 'Calibri',
        fontSize: pt(11),
        linkStyle: { underline: true, color: black },
      }),
    ),
    inline(
      header({
        name: name,
        contacts: [
          [add('mailto:', email), email],
          [github, 'github.com/wallflower24'],
          [linkedin, 'linkedin.com/in/charlie-kelmeckis'],
          [personalSite, 'wallflower.me'],
        ],
      }),
    ),
    m.lines(
      m.heading(2, 'Experience'),
      inline(
        exp({
          role: 'Software Engineer',
          date: 'Jun 2025 - Present',
          organization: 'Stripe',
          location: 'San Francisco, CA',
          details: blocks(
            m.list(
              m.item([
                'Led migration of legacy authentication system to OAuth 2.0, improving security for 2M+ merchants',
              ]),
              m.item(['Reduced API latency by 25% through implementing Redis caching layer and query optimization']),
              m.item([
                'Mentored 2 new engineers and conducted technical interviews for backend engineering candidates',
              ]),
            ),
          ),
        }),
      ),
    ),
    inline(
      exp({
        role: 'Software Engineering Intern',
        date: 'Jun 2024 - Aug 2024',
        organization: 'Meta',
        location: 'Menlo Park, CA',
        details: blocks(
          m.list(
            m.item(['Developed real-time notification system serving 50M+ daily active users using React and GraphQL']),
            m.item([
              'Optimized database queries reducing average response time by 40% through indexing and caching strategies',
            ]),
            m.item(['Collaborated with cross-functional team of 8 engineers to ship 3 major features to production']),
          ),
        ),
      }),
    ),
    inline(
      exp({
        role: 'Research Assistant',
        date: 'Jan 2024 - Present',
        organization: 'Stanford AI Lab',
        location: 'Stanford, CA',
        details: blocks(
          m.list(
            m.item(['Conducted research on large language model efficiency under Prof. Jane Smith']),
            m.item(['Implemented novel pruning techniques reducing model size by 30% while maintaining 95% accuracy']),
            m.item(['Co-authored paper submitted to NeurIPS 2025 on attention mechanism optimization']),
          ),
        ),
      }),
    ),
    inline(
      exp({
        role: 'Software Engineering Intern',
        date: 'May 2022 - Aug 2022',
        organization: 'Amazon',
        location: 'Seattle, WA',
        details: blocks(
          m.list(
            m.item([
              'Built internal dashboard for monitoring AWS Lambda performance metrics using TypeScript and React',
            ]),
            m.item(['Integrated with CloudWatch API to provide real-time insights for 200+ microservices']),
            m.item(['Reduced manual monitoring time by 60% through automated alerting system']),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(2, 'Skills'),
      inline(
        pad(
          { top: em(0.15) },
          inline`${space}${strong(inline`Languages:`)} Python, JavaScript/TypeScript, Java, C++, SQL, Go ${linebreak()}
${strong(inline`Frameworks/Libraries:`)} React, Node.js, Express, Django, Flask, TensorFlow,
PyTorch, pandas ${linebreak()} ${strong(inline`Tools/Databases/Platforms:`)} Git, Docker, Kubernetes,
AWS, MongoDB, PostgreSQL, Redis, GraphQL ${linebreak()}${space}`,
        ),
      ),
    ),
    m.lines(
      m.heading(2, 'Projects'),
      inline(
        project({
          name: 'CodeCollab',
          technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB'],
          liveUrl: 'https://codecollab-demo.com',
          repoUrl: 'https://github.com/wallflower24/codecollab',
          details: blocks(
            m.list(
              m.item(['Real-time collaborative code editor with syntax highlighting and live cursor tracking']),
              m.item(['Supports 10+ programming languages with integrated code execution sandbox']),
              m.item(['Handles 1000+ concurrent users with optimized WebSocket architecture']),
            ),
          ),
        }),
      ),
    ),
    inline(
      project({
        name: 'ML Pipeline Optimizer',
        technologies: ['Python', 'TensorFlow', 'Docker', 'Kubernetes'],
        repoUrl: 'https://github.com/wallflower24/ml-optimizer',
        details: blocks(
          m.list(
            m.item(['Automated hyperparameter tuning framework reducing model training time by 45%']),
            m.item(['Containerized deployment pipeline supporting distributed training across GPU clusters']),
            m.item(['Open-sourced with 500+ stars and adopted by 3 research labs']),
          ),
        ),
      }),
    ),
    m.lines(
      m.heading(2, 'Education'),
      inline(
        edu({
          degree: 'Master of Science in Computer Science',
          date: 'Sep 2023 - May 2025',
          institution: 'Stanford University',
          gpa: '3.85',
          location: 'Stanford, CA',
        }),
      ),
    ),
    inline(
      edu({
        degree: 'Bachelor of Science in Computer Science',
        date: 'Aug 2019 - May 2023',
        institution: 'University of California, Berkeley',
        gpa: '3.72',
        location: 'Berkeley, CA',
      }),
    ),
  )
}
