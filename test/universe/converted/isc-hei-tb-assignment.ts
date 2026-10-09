// Converted from test/universe/corpus/isc-hei-tb-assignment.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  blocks,
  datetime,
  define,
  doc,
  external,
  importPackage,
  inline,
  let_,
  linebreak,
  link,
  m,
  show,
  smartquote,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const hes = define('hes').returns(T.any).external()
  const school = define('school').pos('arg1', T.any).returns(T.any).external()
  const projectTypes = external('project-types')
  const project = external('project')
  const tbAssignmentPage = define('tb-assignment-page')
    .named('abroad', T.any, null)
    .named('academic-year', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('confidential', T.any, null)
    .named('data-dep', T.any, null)
    .named('data-explanation', T.any, null)
    .named('date-attribution', T.any, null)
    .named('date-defense', T.any, null)
    .named('date-exhibition-hei', T.any, null)
    .named('date-exhibition-monthey', T.any, null)
    .named('date-start', T.any, null)
    .named('date-submission', T.any, null)
    .named('description', T.any, null)
    .named('doc-version', T.any, null)
    .named('expert', T.any, null)
    .named('extra-info', T.any, null)
    .named('host-mentor', T.any, null)
    .named('host-supervisor', T.any, null)
    .named('id', T.any, null)
    .named('language', T.any, null)
    .named('mandator', T.any, null)
    .named('material-cost', T.any, null)
    .named('material-dep', T.any, null)
    .named('material-explanation', T.any, null)
    .named('material-procedure', T.any, null)
    .named('objectives-content', T.any, null)
    .named('project-type', T.any, null)
    .named('site', T.any, null)
    .named('student', T.any, null)
    .named('study-program', T.any, null)
    .named('subtitle', T.any, null)
    .named('supervisor', T.any, null)
    .named('title', T.any, null)
    .returns(T.any)
    .external()
  const projectTypes_exploratory = external('exploratory', projectTypes)
  const project_with = define('with')
    .named('authors', T.any, null)
    .named('date', T.any, null)
    .named('doc-type', T.any, null)
    .named('language', T.any, null)
    .returns(T.any)
    .external(project)
  const [languageDecl, language] = let_('language', 'fr')
  const [tbStudentDecl, tbStudent] = let_('tb-student', 'Barbara Liskov')
  const [tbIdDecl, tbId] = let_('tb-id', 'ISC-ID-26-1')
  const [tbSupervisorDecl, tbSupervisor] = let_('tb-supervisor', 'Prof. Dr L. Lettry')
  const [tbCoSupervisorDecl, tbCoSupervisor] = let_('tb-co-supervisor', null)
  const [tbStudyProgramDecl, tbStudyProgram] = let_('tb-study-program', 'ISC')
  const [tbAcademicYearDecl, tbAcademicYear] = let_('tb-academic-year', '2025-26')
  const [tbAbroadDecl, tbAbroad] = let_('tb-abroad', true)
  const [tbHostSupervisorDecl, tbHostSupervisor] = let_('tb-host-supervisor', null)
  const [tbHostMentorDecl, tbHostMentor] = let_('tb-host-mentor', null)
  const [tbExpertDecl, tbExpert] = let_(
    'tb-expert',
    inline`${space}Dr John Carmack ${linebreak()} Rue de la Paix 24 ${linebreak()} CH - 1211 Genève ${linebreak()}
${link('mailto:john.carmack@example.com')}${space}`,
  )
  const [tbMandatorDecl, tbMandator] = let_('tb-mandator', hes())
  const [tbLocationDecl, tbLocation] = let_('tb-location', school('EPFL'))
  const [tbConfidentialDecl, tbConfidential] = let_('tb-confidential', false)
  const [tbTitleDecl, tbTitle] = let_('tb-title', inline`Software co-design for embedded systems`)
  const [tbSubtitleDecl, tbSubtitle] = let_(
    'tb-subtitle',
    inline`An exploration of the intersection between science and engineering`,
  )
  const [tbDescriptionDecl, tbDescription] = let_(
    'tb-description',
    blocks(
      'In this work, we propose a novel approach for designing embedded systems that integrates hardware and software components. The approach is based on a co-design methodology that allows for the simultaneous development of hardware and software components, leading to improved performance and reduced development time.',
      inline`We evaluate our approach through a ${strong(inline`case study`)} on the design of an embedded
system for a smart home application, demonstrating its effectiveness in terms of performance,
energy efficiency, and ease of development.`,
    ),
  )
  const [tbObjectivesDecl, tbObjectives] = let_(
    'tb-objectives',
    blocks(
      m.enum(
        m.item([
          'Analyser l',
          smartquote({ double: false }),
          'état de l',
          smartquote({ double: false }),
          'art dans la thématique',
        ]),
        m.item(
          m.lines(
            'Proposer une approche de co-design pour les systèmes embarqués:',
            m.list(
              m.item(['En coordination avec les travaux de recherche']),
              m.item(['Dans le contexte de la filière ISC']),
            ),
          ),
        ),
        m.item([
          'Évaluer l',
          smartquote({ double: false }),
          'approche à travers une étude de cas sur un système de maison intelligente.',
        ]),
        m.item(['Comparer les résultats avec des approches traditionnelles de développement de systèmes embarqués']),
      ),
    ),
  )
  const [docVersionDecl, docVersion] = let_('doc-version', '1.30')
  const [docDateDecl, docDate] = let_('doc-date', datetime.today())
  const [dateAttributionDecl, dateAttribution] = let_('date-attribution', datetime({ year: 2026, month: 3, day: 3 }))
  const [dateStartDecl, dateStart] = let_('date-start', datetime({ year: 2026, month: 5, day: 11 }))
  const [dateSubmissionDecl, dateSubmission] = let_('date-submission', datetime({ year: 2026, month: 7, day: 24 }))
  const [dateDefenseDecl, dateDefense] = let_('date-defense', inline`Semaines du 17 et 25 août 2026`)
  const [dateExhibitionHeiDecl, dateExhibitionHei] = let_(
    'date-exhibition-hei',
    datetime({ year: 2026, month: 8, day: 28 }),
  )
  const [dateExhibitionMontheyDecl, dateExhibitionMonthey] = let_(
    'date-exhibition-monthey',
    datetime({ year: 2026, month: 8, day: 31 }),
  )
  const [tbProjectTypeDecl, tbProjectType] = let_('tb-project-type', projectTypes_exploratory)
  const [tbDataDepDecl, tbDataDep] = let_('tb-data-dep', 1)
  const [tbDataExplanationDecl, tbDataExplanation] = let_('tb-data-explanation', null)
  const [tbMaterialDepDecl, tbMaterialDep] = let_('tb-material-dep', 3)
  const [tbMaterialExplanationDecl, tbMaterialExplanation] = let_(
    'tb-material-explanation',
    'Un oscilloscope et une carte FPGA',
  )
  const [tbMaterialCostDecl, tbMaterialCost] = let_('tb-material-cost', 'CHF 250.-')
  const [tbMaterialProcedureDecl, tbMaterialProcedure] = let_(
    'tb-material-procedure',
    "Achat online chez XXX, en stock normalement. Si pas disponible, utilisation d'un autre fournisseur (ces composants sont bien sourcés et nous n'anticipons pas de problèmes de livraison). \n \nEn cas d'indisponibilité, nous utiliserons un ancien modèle que nous avons déjà.",
  )
  const [tbExtraInfoDecl, tbExtraInfo] = let_('tb-extra-info', inline())
  return doc(
    importPackage('@preview/isc-hei-tb-assignment:0.8.1', [hes, school, projectTypes, project, tbAssignmentPage]),
    inline(
      languageDecl,
      space,
      tbStudentDecl,
      space,
      tbIdDecl,
      space,
      tbSupervisorDecl,
      space,
      tbCoSupervisorDecl,
      space,
      tbStudyProgramDecl,
      space,
      tbAcademicYearDecl,
    ),
    m.lines(tbAbroadDecl, inline(tbHostSupervisorDecl, space, tbHostMentorDecl)),
    tbExpertDecl,
    m.lines(tbMandatorDecl, tbLocationDecl, tbConfidentialDecl, inline(tbTitleDecl, space, tbSubtitleDecl)),
    tbDescriptionDecl,
    tbObjectivesDecl,
    m.lines(docVersionDecl, inline(docDateDecl)),
    m.lines(
      dateAttributionDecl,
      dateStartDecl,
      dateSubmissionDecl,
      dateDefenseDecl,
      dateExhibitionHeiDecl,
      dateExhibitionMontheyDecl,
    ),
    tbProjectTypeDecl,
    m.lines(tbDataDepDecl, tbDataExplanationDecl),
    m.lines(tbMaterialDepDecl, tbMaterialExplanationDecl, inline(tbMaterialCostDecl, space, tbMaterialProcedureDecl)),
    tbExtraInfoDecl,
    show(project_with({ docType: 'tb-assignment', language: language, authors: tbStudent, date: docDate })),
    inline(
      tbAssignmentPage({
        student: tbStudent,
        id: tbId,
        supervisor: tbSupervisor,
        coSupervisor: tbCoSupervisor,
        expert: tbExpert,
        abroad: tbAbroad,
        hostSupervisor: tbHostSupervisor,
        hostMentor: tbHostMentor,
        studyProgram: tbStudyProgram,
        academicYear: tbAcademicYear,
        mandator: tbMandator,
        site: tbLocation,
        confidential: tbConfidential,
        title: tbTitle,
        subtitle: tbSubtitle,
        description: tbDescription,
        objectivesContent: tbObjectives,
        dateAttribution: dateAttribution,
        dateStart: dateStart,
        dateSubmission: dateSubmission,
        dateDefense: dateDefense,
        dateExhibitionHei: dateExhibitionHei,
        dateExhibitionMonthey: dateExhibitionMonthey,
        projectType: tbProjectType,
        dataDep: tbDataDep,
        dataExplanation: tbDataExplanation,
        materialDep: tbMaterialDep,
        materialExplanation: tbMaterialExplanation,
        materialCost: tbMaterialCost,
        materialProcedure: tbMaterialProcedure,
        extraInfo: tbExtraInfo,
        docVersion: docVersion,
        language: language,
      }),
    ),
  )
}
