// Converted from test/universe/corpus/golixp-resume-zh-cn.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import { T, define, doc, external, importPackage, inline, show, space } from '../../../src/index.ts'

export default () => {
  const resumeDoc = external('resume-doc')
  const personalHeader = define('personal-header').pos('arg1', T.any).pos('arg2', T.any).returns(T.any).external()
  const icon = external('icon')
  const sectionHeader = define('section-header')
    .pos('arg1', T.any)
    .named('icon-name', T.any, null)
    .returns(T.any)
    .external()
  const summaryParagraph = define('summary-paragraph').pos('arg1', T.content).returns(T.any).external()
  const educationItem = define('education-item')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .pos('arg3', T.any)
    .pos('arg4', T.any)
    .named('gpa', T.any, null)
    .named('honors', T.any, null)
    .returns(T.any)
    .external()
  const workItem = define('work-item')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('achievements', T.any, null)
    .named('location', T.any, null)
    .named('position', T.any, null)
    .named('responsibilities', T.any, null)
    .named('tech-stack', T.any, null)
    .returns(T.any)
    .external()
  const projectItem = define('project-item')
    .pos('arg1', T.any)
    .pos('arg2', T.content)
    .named('link', T.any, null)
    .named('period', T.any, null)
    .named('responsibilities', T.any, null)
    .named('tech-stack', T.any, null)
    .returns(T.any)
    .external()
  const skillCategory = define('skill-category')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('icon-names', T.any, null)
    .named('level', T.any, null)
    .returns(T.any)
    .external()
  const awardItem = define('award-item')
    .pos('arg1', T.any)
    .pos('arg2', T.any)
    .named('description', T.content, [])
    .named('issuer', T.any, null)
    .returns(T.any)
    .external()
  const resumeDoc_with = define('with').named('overrides', T.any, null).returns(T.any).external(resumeDoc)
  return doc(
    importPackage('@preview/golixp-resume-zh-cn:0.1.2', [
      resumeDoc,
      personalHeader,
      icon,
      sectionHeader,
      summaryParagraph,
      educationItem,
      workItem,
      projectItem,
      skillCategory,
      awardItem,
    ]),
    show(resumeDoc_with({ overrides: [] })),
    inline(
      personalHeader('张三', [
        { icon: 'phone', content: '138-0000-0000' },
        { icon: 'email', content: 'zhangsan@email.com' },
        { icon: 'location', content: '北京市' },
        { icon: 'github', content: 'github.com/zhangsan', link: 'https://github.com/zhangsan' },
      ]),
    ),
    inline(sectionHeader({ iconName: 'lightbulb' }, '个人总结')),
    inline(
      summaryParagraph(inline`${space}5年全栈开发经验，专注于高性能后端服务和现代化前端架构。熟悉分布式系统设计，
具备从需求分析到系统上线的全流程项目经验。善于技术选型和团队协作，追求代码质量和开发效率的平衡。${space}`),
    ),
    inline(sectionHeader({ iconName: 'graduation' }, '教育经历')),
    inline(
      educationItem(
        { gpa: '3.8/4.0', honors: ['优秀毕业生', '一等奖学金'] },
        '2015.09 - 2019.06',
        '某某大学',
        '本科',
        '计算机科学与技术',
      ),
    ),
    inline(sectionHeader({ iconName: 'work' }, '工作经历')),
    inline(
      workItem(
        {
          position: '高级后端工程师',
          location: '北京',
          techStack: ['Go', 'Python', 'Kubernetes', 'PostgreSQL'],
          responsibilities: [
            inline`负责核心交易系统的架构设计和开发，支撑日均百万级订单处理`,
            inline`主导微服务改造项目，将单体应用拆分为 15+ 个微服务`,
            inline`优化数据库查询性能，将核心接口响应时间从 200ms 降至 50ms`,
          ],
          achievements: [inline`获得年度技术创新奖`, inline`晋升为技术组长，带领 5 人团队`],
        },
        '2021.06 - 至今',
        '某科技有限公司',
      ),
    ),
    inline(
      workItem(
        {
          position: '后端开发工程师',
          location: '上海',
          techStack: ['Java', 'Spring Boot', 'MySQL', 'Redis'],
          responsibilities: [
            inline`参与电商平台后端服务开发，负责订单和支付模块`,
            inline`设计实现高并发秒杀系统，支持 10 万+ QPS`,
            inline`编写技术文档和单元测试，代码覆盖率达到 85%`,
          ],
        },
        '2019.07 - 2021.05',
        '某互联网公司',
      ),
    ),
    inline(sectionHeader({ iconName: 'project' }, '项目经历')),
    inline(
      projectItem(
        {
          techStack: ['Go', 'gRPC', 'etcd', 'React'],
          responsibilities: [
            inline`设计基于 etcd 的分布式锁和选主机制，保证任务执行的高可用`,
            inline`实现任务 DAG 调度引擎，支持复杂工作流编排`,
            inline`开发可视化管理界面，支持任务监控和日志查看`,
          ],
          link: 'https://github.com/example/scheduler',
          period: '2022.03 - 2022.08',
        },
        '分布式任务调度平台',
        inline`自研分布式任务调度系统，支持定时任务、工作流编排和任务依赖管理。`,
      ),
    ),
    inline(
      projectItem(
        {
          techStack: ['Python', 'Flink', 'Kafka', 'ClickHouse'],
          responsibilities: [
            inline`基于 Flink 开发实时 ETL 流程，处理日均 TB 级数据`,
            inline`设计 ClickHouse 数据模型，优化查询性能`,
          ],
        },
        '实时数据分析平台',
        inline`构建实时数据处理和分析平台，支持业务指标实时计算和可视化展示。`,
      ),
    ),
    inline(sectionHeader({ iconName: 'code' }, '专业技能')),
    inline(
      skillCategory({ level: ['精通', '熟练', null, ''], iconNames: ['go', 'python', null, ''] }, '编程语言', [
        'Go',
        'Python',
        'Java',
        'TypeScript',
      ]),
    ),
    inline(skillCategory('后端技术', ['Spring Boot', 'Gin', 'FastAPI', 'gRPC', 'GraphQL'])),
    inline(skillCategory('数据库', ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB', 'ClickHouse'])),
    inline(skillCategory('云原生', ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Helm'])),
    inline(skillCategory('其他', ['Git', 'Linux', 'CI/CD', 'Agile'])),
    inline(sectionHeader({ iconName: 'award' }, '获奖荣誉')),
    inline(
      awardItem({ issuer: '某科技有限公司', description: inline`主导完成微服务架构升级项目` }, '技术创新奖', '2023.12'),
    ),
    inline(awardItem({ issuer: 'ACM-ICPC' }, 'ACM 区域赛银牌', '2018.05')),
  )
}
