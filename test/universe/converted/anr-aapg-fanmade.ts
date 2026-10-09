// Converted from test/universe/corpus/anr-aapg-fanmade.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  align,
  blocks,
  center,
  define,
  doc,
  external,
  fr,
  grid,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  page,
  parbreak,
  show,
  smallcaps,
  space,
  strong,
  sym,
  table,
} from '../../../src/index.ts'

export default () => {
  const aapg = external('aapg')
  const aapg_style = define('style')
    .pos('arg1', T.any)
    .named('AAPG', T.content, [])
    .named('CES', T.content, [])
    .named('coordinator', T.content, [])
    .named('duration', T.content, [])
    .named('funding-request', T.content, [])
    .named('instrument', T.content, [])
    .named('short-project-name', T.any, null)
    .returns(T.any)
    .external(aapg)
  const aapg_title = define('title').pos('arg1', T.content).returns(T.any).external(aapg)
  const aapg_comment = define('comment').pos('arg1', T.content).returns(T.any).external(aapg)
  const aapg_bilingual = define('bilingual').pos('arg1', T.content).pos('arg2', T.content).returns(T.any).external(aapg)
  const aapg_footnote = define('footnote').pos('arg1', T.content).returns(T.any).external(aapg)
  const [ProjectDecl, Project] = let_('Project', smallcaps(inline`${space}InterestingProject${space}`))
  return doc(
    importPackage('@preview/anr-aapg-fanmade:0.1.0', aapg),
    ProjectDecl,
    show((doc_2, ctx) =>
      aapg_style(
        {
          shortProjectName: Project,
          AAPG: inline`AAPG2099`,
          instrument: inline`JCJC / PRCI / PRCE / PME`,
          coordinator: inline`Coordinator Name`,
          duration: inline`99 years`,
          fundingRequest: inline`999,999,999`,
          CES: inline`CES 48 - Fondements du numérique : informatique, automatique, traitement du signal`,
        },
        doc_2,
      ),
    ),
    inline(
      aapg_title(inline`${Project}: a very interesting project`),
      space,
      grid(
        { columns: [fr(1), fr(1), fr(1)] },
        align(center, inline`${space}Partner 1${space}`),
        align(center, inline`${space}Partner 2${space}`),
        align(center, inline`${space}Partner 3${space}`),
      ),
    ),
    inline(
      aapg_comment(
        blocks(
          'Utilisez une mise en page permettant une lecture confortable du document : page A4, Calibri 11 ou équivalent, interligne simple, marges 2 cm ou plus, numérotation des pages ; pour les tableaux et figures, minimum Calibri 9 ou équivalent. La lisibilité d’un document ne renvoie pas uniquement à un enchainement clair des informations, elle renvoie aussi à une mise en page claire de ces informations. Le texte ici rédigé en gris est à supprimer.',
          'La proposition détaillée doit (1) comporter un maximum de 20 pages, y compris tableau récapitulatif des personnes impliquées, Gantt, tableau d’implication dans d’autres projets, tableau descriptif du budget ET sa justification scientifique, bibliographie; (2) être obligatoirement au format PDF. Aucune annexe n’est acceptée.',
          'Les CV du coordinateur ou de la coordinatrice et des responsables scientifiques des éventuels partenaires, y compris étrangers dans le cadre d’un projet PRCI, sont à compléter en ligne à partir du site de dépôt IRIS, avant les date et heure de clôture de l’étape. Dans le cadre d’un projet JCJC ou PRME, seul le CV du coordinateur ou de la coordinatrice est requis. Sur IRIS, l’onglet « CV des responsables scientifiques » permet au coordinateur ou à la coordinatrice de vérifier en ligne la complétion des CV en cliquant sur « générer un aperçu ».',
          'L’évaluation pouvant être réalisée par des personnalités non-francophones, nous vous recommandons une rédaction en anglais, aussi bien concernant votre document scientifique, le champ libre « Evolution du projet » que les CV complétés sur IRIS.',
          inline`La rédaction de votre proposition doit permettre son évaluation selon les 3 critères d’évaluation
définis dans le guide de l'AAPG2025 « Qualité et ambition scientifique », « Organisation et
réalisation du projet », « Impact et retombées du projet ». Il est nécessaire de se reporter
au guide de l'AAPG2025 afin d’en connaitre les sous-critères, différenciés selon l’instrument
de financement choisi.`,
        ),
      ),
    ),
    m.heading(
      3,
      aapg_bilingual(
        inline`Summary table of persons involved in the project`,
        inline`Tableau récapitulatif des personnes impliquées dans le projet`,
      ),
    ),
    inline(
      table(
        { columns: 6 },
        table.header(
          inline(strong(inline`Partner`)),
          inline(strong(inline`Last name`)),
          inline(strong(inline`First name`)),
          inline(strong(inline`Current position`)),
          inline`${strong(inline`Role & responsibilities in the project`)} (4 lines max)`,
          inline`${strong(inline`Involvement throughout the project's total duration`)} (person.month)`,
        ),
        inline`Université X / Université Y`,
        inline`Tournesol`,
        inline`Tryphon`,
        inline`Professeur`,
        inline`Scientific coordinator${linebreak()} Tasks X, Y, Z`,
        inline`18`,
      ),
    ),
    m.heading(
      3,
      aapg_bilingual(
        inline`Any changes that have been made in the full proposal compared to the pre-proposal / compared
to the registration`,
        inline`Evolution(s) éventuelle(s) de la proposition détaillée par rapport à la pré-proposition ou à
l’enregistrement (PRCI)`,
      ),
    ),
    inline(
      aapg_comment(
        blocks(
          'Préciser et justifier tout changement intervenu depuis la rédaction de la pré-proposition ou l’enregistrement du projet PRCI, en particulier concernant le montant d’aide demandé, les objectifs scientifiques et technologiques et la composition du consortium.',
          inline`Rappel du critère d’éligibilité « conformité à la pré-proposition » : La proposition détaillée
doit décrire le même projet que celui présenté dans la pré-proposition. L’instrument de financement,
le comité d’évaluation et le coordinateur / la coordinatrice sont obligatoirement les mêmes
que dans la pré-proposition. Tout écart éventuel à la pré-proposition et toute modification
budgétaire supérieure à 7% entre les deux étapes de l’appel doivent obligatoirement être justifiés
en introduction du document scientifique. La pertinence de ces écarts éventuels est évaluée
par les membres de comité sur la base de la justification qui en est donnée par les coordinateurs/coordinatrices
en introduction du document scientifique. En cas d’écart jugé important, la proposition est
déclarée inéligible (Cf. guide de l'AAPG2025, section B.5.2.).`,
        ),
      ),
    ),
    m.heading(
      1,
      aapg_bilingual(
        inline`Proposal’s context, positioning and objective(s)`,
        inline`Contexte, positionnement et objectif(s) de la proposition`,
      ),
    ),
    inline(
      aapg_comment(inline`${space}Dans cette section répondant au critère d’évaluation « Qualité et ambition scientifique »,
cf. sous-critères dans le guide de l'AAPG2025, doivent être présentées les informations suivantes :${space}`),
    ),
    m.heading(
      2,
      aapg_bilingual(inline`Objectives and research hypothesis`, inline`Objectifs et hypothèses de recherche`),
    ),
    inline(
      aapg_comment(inline`${space}Détailler les objectifs et les hypothèses de recherche ; décrire les verrous scientifiques
et techniques à lever ; décrire éventuellement le ou les produits finaux développés, présenter
les résultats escomptés. Préciser la plus-value du projet en termes d’apport scientifique, que
ce soit en termes d’objet, de problématique et d’approche méthodologique, et en termes de production
de connaissances${aapg_footnote(inline`Quel que soit le type de projet déposé : projet visant des objectifs ou concepts originaux,
en rupture ou exploratoires ; projet visant la levée de verrous scientifiques bien identifiés
dans la communauté ; projets exploitant les données générées par les infrastructures de recherche ;
projets faisant suite à de précédents projets et permettant d’envisager de nouveaux objectifs.`)}.${space}`),
    ),
    m.heading(
      2,
      aapg_bilingual(
        inline`Position of the project as it relates to the state of the art`,
        inline`Positionnement par rapport à l’état de l’art`,
      ),
    ),
    inline(
      aapg_comment(inline`${space}Montrer l’originalité du projet – tant du point de vue des objectifs poursuivis que
de la méthodologie - et son positionnement par rapport à l’état de l’art ; faire apparaître
les contributions éventuelles des partenaires du projet à cet état de l’art; présenter d’éventuels
résultats préliminaires; dans le cas d’une proposition s’inscrivant dans la continuité de projet.s
antérieur.s et / ou actuel.s déjà financé.s par l’ANR ou par un autre organisme, fournir un
bilan des résultats obtenus et décrire clairement les nouvelles problématiques posées et les
nouveaux objectifs fixés au regard du ou des projets antérieurs / positionner ce projet par
rapport au.x projet.s en cours${aapg_footnote(inline`Cf. critère d’éligibilité de l’appel « Caractère unique de la proposition de projet » : une
proposition de projet ne peut être semblable en tout ou partie à une autre proposition déposée
à un appel en cours d’évaluation à l’ANR (tout appel à projets confondu, toute étape d’évaluation
confondue) ou ayant donné lieu à un financement par l’ANR ou par un autre organisme ou une autre
agence de financement. Le caractère semblable entre deux projets est établi lorsque ces projets
(dans leur globalité ou en partie) décrivent des objectifs principaux identiques ou résultent
d’une simple adaptation.`)}.${space}`),
    ),
    m.heading(2, aapg_bilingual(inline`Methodology and risk management`, inline`Méthodologie et gestion des risques`)),
    inline(
      aapg_comment(
        blocks(
          'Décrire précisément la méthodologie et sa pertinence pour l’atteinte des objectifs fixés ; détailler la gestion des risques scientifiques et les solutions de repli ; décrire le programme scientifique et justifier la décomposition en tâches du programme de travail en cohérence avec les objectifs poursuivis.',
          m.list(
            { tight: false },
            m.item([
              'Pour chaque tâche, décrire les objectifs, le programme détaillé des travaux, les livrables, les contributions des membres de l’équipe, les méthodes et les choix techniques, les risques et les solutions de repli envisagées (entre autres exemples : terrain d’étude difficilement accessible, absence de données préliminaires, délai dans l’obtention d’un accord du comité d’éthique, etc.). Illustrer par un diagramme de Gantt.',
            ]),
            m.item([
              'Justifier la pertinence de la méthodologie en termes d’éthique, d’intégrité scientifique et de responsabilité sociale des sciences – et à ce titre notamment la prise en compte ou non de la dimension sexe et / ou genre -, et en termes de couverture disciplinaire (mono-trans-inter-disciplinarité).',
            ]),
            m.item([
              'Préciser, le cas échéant, les conditions d’accès à une Organisation scientifique internationale (OSI), une Infrastructure de recherche (IR) ou une Infrastructure de recherche IR* (anciennement TGIR).',
            ]),
          ),
        ),
      ),
    ),
    m.heading(
      1,
      aapg_bilingual(
        inline`Organisation and implementation of the project`,
        inline`Organisation et réalisation du projet`,
      ),
    ),
    inline(
      aapg_comment(inline`${space}Cette section est en lien avec le critère d’évaluation « Organisation et réalisation
du projet », cf. sous-critères différenciés par instrument de financement dans le guide de l'AAPG2025.
Ce critère tient compte de tous les résultats de travaux de recherche : publications scientifiques,
jeux de données, logiciels, etc. Par ailleurs, l’usage d'indicateurs bibliométriques tels le
facteur d’impact et le h-index est proscrit au profit d’indicateurs qualitatifs sur les retombées
des travaux, comme leur influence sur les politiques et les pratiques.${space}`),
    ),
    m.heading(
      2,
      aapg_bilingual(
        inline`Scientific coordinator and its consortium / its team`,
        inline`Coordinateur ou coordinatrice scientifique et son consortium / son équipe`,
      ),
    ),
    inline(
      aapg_comment(
        blocks(
          'S’il s’agit d’un projet collaboratif (PRC, PRCE, PRCI),',
          m.list(
            { tight: false },
            m.item([
              'Présenter le coordinateur ou la coordinatrice scientifique (incluant le coordinateur ou la coordinatrice de la partie étrangère dans le cadre d’un projet PRCI), son expérience dans le domaine objet de la proposition y compris son taux d’implication.',
            ]),
            m.item([
              'Présenter les partenaires et leur complémentarité pour l’atteinte des objectifs, y compris de la partie étrangère dans le cadre d’un projet PRCI : indiquer les différentes compétences envisagées pour mener le projet objet de la proposition, en précisant l’identité des scientifiques impliqué.e.s, l’identification des établissements auxquels ils ou elles sont rattaché.e.s, leur taux d’implication dans le projet, et tout autre élément permettant de juger de la qualité et complémentarité des partenaires et du caractère effectif de la collaboration.',
            ]),
            m.item([
              'Compléter le tableau d’implication du coordinateur ou coordinatrice et du ou de la responsable scientifique de chaque partenaire dans d’autres projets régionaux, nationaux et internationaux, en cours.1',
            ]),
          ),
        ),
      ),
    ),
    m.heading(
      3,
      aapg_bilingual(
        inline`Implication of the scientific coordinator and partner’s scientific leader in on-going project(s)`,
        inline`Tableau d’implication du coordinateur ou coordinatrice et des responsables scientifiques des
partenaires dans d’autres projets en cours`,
      ),
    ),
    inline(
      table(
        { columns: 6 },
        table.header(
          inline(strong(inline`Name of the researcher`)),
          inline(strong(inline`person.month`)),
          inline(strong(inline`Project's title`)),
          inline(strong(inline`Call, funding agency, grant allocated`)),
          inline(strong(inline`Name of the scientific coordinator`)),
          inline(strong(inline`Start - End`)),
        ),
      ),
    ),
    inline(
      aapg_comment(inline`${space}⚠ Les CV du coordinateur ou de la coordinatrice et du ou de la responsable scientifique
de chaque partenaire (y compris de la partie étrangère dans le cadre d’un projet PRCI) sont
à compléter en ligne, sur IRIS, avant les date et heure de clôture de l’étape.${space}`),
    ),
    m.heading(
      2,
      aapg_bilingual(
        inline`Implemented and requested resources to reach the objectives`,
        inline`Moyens mis en œuvre et demandés pour atteindre les objectifs`,
      ),
    ),
    inline(
      aapg_comment(
        blocks(
          'Décrire les moyens mis en œuvre ET demandés pour atteindre les objectifs.',
          m.list(
            { tight: false },
            m.item([
              'Justification scientifique et technique des moyens demandés par grand poste de dépense et par partenaire, en lien avec les objectifs de la proposition.',
            ]),
            m.item([
              'Présentation de la demande financière de chaque partenaire dans le tableau récapitulatif « Moyens demandés par grand poste de dépense et par partenaire » en veillant à la cohérence de ces informations avec celles saisies sur le site de dépôt et à la conformité au règlement relatif aux modalités d’attribution des aides de l’AAPG. Ce tableau est obligatoire, et la justification scientifique des moyens demandés ne peut s’y substituer.',
            ]),
            m.item([
              'Présentation du contexte, notamment en termes de moyens humains et financiers du projet, au regard d’autres projets en cours et d’éventuelles demandes de cofinancement en cours ou à venir.',
            ]),
            m.item([
              'Dans l’éventualité d’un partenaire sur fonds propres, justification des moyens mobilisés par ledit partenaire pour réaliser les tâches lui incombant.',
            ]),
          ),
          '⚠ Le sous-critère d’évaluation « Adéquation des moyens mis en œuvre et demandés aux objectifs du projet », commun à tous les instruments de financement, est un sous-critère ayant la même importance que tous les autres sous-critères. Il est donc attendu un niveau de détail suffisant du calcul des moyens demandés et leur justification scientifique.',
          'Exemples : quel type de contrat de personnel non-permanent, durée, pour quelle tâche ? nature de l’équipement, pour quelle(s) tâche(s), pourquoi un achat plutôt qu’une location d’équipement ? des devis ont-ils été faits ? quel type de mission (dissémination, réunion de travail, acquisition de données sur le terrain, etc.), nationale / internationale, pour combien de personnes, combien de temps ?',
        ),
      ),
    ),
    m.heading(3, 'Partner 1 : XXXXX'),
    m.heading(4, aapg_bilingual(inline`Staff expenses`, inline`Frais de personnel`)),
    inline(
      aapg_comment(inline`${space}Coûts liés à l'emploi des chercheurs, ingénieurs, techniciens et autres personnels d'appui
scientifique ; dans le cas d’un projet JCJC : décharge d’enseignement du jeune chercheur coordinateur
ou de la jeune chercheuse coordinatrice. Justifications par rapport aux objectifs scientifiques${space}`),
    ),
    m.heading(4, aapg_bilingual(inline`Instruments and material costs`, inline`Coûts des instruments et du matériel`)),
    inline(
      aapg_comment(inline`${space}Coûts d’acquisition, d’amortissement ou de location d’un instrument ou matériel et des
consommables scientifiques utilisés spécifiquement pour la réalisation du projet. Justifications
par rapport aux objectifs scientifiques${space}`),
    ),
    m.heading(4, aapg_bilingual(inline`Building and ground costs`, inline`Coûts des bâtiments et des terrains`)),
    inline(
      aapg_comment(inline`${space}Coûts de location de nouveaux locaux et terrains ou d’aménagement de locaux et terrains
préexistants pour les besoins du projet. Justifications par rapport aux objectifs scientifiques${space}`),
    ),
    m.heading(
      4,
      aapg_bilingual(
        inline`Outsourcing / subcontracting`,
        inline`Coûts du recours aux prestations de service (et droits de propriété intellectuelle)`,
      ),
    ),
    inline(
      aapg_comment(inline`${space}Coûts liés à l’achat de (1) licences, cessions de brevet, marques, logiciels, bases
de données, droits d’auteur, etc. ; (2) prestation de service ; nécessaire à la réalisation
du projet. Justifications par rapport aux objectifs scientifiques${space}`),
    ),
    m.heading(4, aapg_bilingual(inline`Overheads costs`, inline`Frais généraux non-forfaitisés`)),
    inline(
      aapg_comment(inline`${space}Frais de mission des personnels permanents et non-permanents du projet ; frais d’organisation
de colloques. Justifications par rapport aux objectifs scientifiques${space}`),
    ),
    m.heading(3, 'Partner 1 : XXXXX'),
    m.lines(
      m.heading(4, aapg_bilingual(inline`Staff expenses`, inline`Frais de personnel`)),
      m.heading(
        4,
        aapg_bilingual(inline`Instruments and material costs`, inline`Coûts des instruments et du matériel`),
      ),
      m.heading(4, aapg_bilingual(inline`Building and ground costs`, inline`Coûts des bâtiments et des terrains`)),
      m.heading(
        4,
        aapg_bilingual(
          inline`Outsourcing / subcontracting`,
          inline`Coûts du recours aux prestations de service (et droits de propriété intellectuelle)`,
        ),
      ),
      m.heading(4, aapg_bilingual(inline`Overheads costs`, inline`Frais généraux non-forfaitisés`)),
    ),
    inline(
      page(
        { flipped: true },
        blocks(
          parbreak(),
          m.heading(
            4,
            aapg_bilingual(
              inline`Requested means by item of expenditure and by partner${aapg_footnote(inline`Les montants indiqués dans ce tableau devront être rigoureusement identiques à ceux saisis sur
le site de dépôt de l’AAPG. Si ces deux sources d’informations s’avéraient non concordantes,
y compris si elles étaient mal renseignées ou manquantes, ${strong(inline`les informations saisies en ligne prévaudront sur celles développées dans le document scientifique`)}.`)}`,
              inline`Moyens demandés par grand poste de dépense et par partenaire`,
            ),
          ),
          inline(
            table(
              { columns: 4 },
              inline(),
              inline`${strong(inline`Partner`)} ${linebreak()} ...`,
              inline`${strong(inline`Partner`)} ${linebreak()} ...`,
              inline`${strong(inline`Partner`)} ${linebreak()} ...`,
              inline`Staff expenses`,
              inline(),
              inline(),
              inline(),
              inline`Instruments and material costs`,
              inline(),
              inline(),
              inline(),
              inline`Building and ground costs`,
              inline(),
              inline(),
              inline(),
              inline`Outsourcing / subcontracting`,
              inline(),
              inline(),
              inline(),
              inline`Overheads costs`,
              inline(),
              inline(),
              inline(),
              inline(
                aapg_bilingual(
                  inline`Administrative management & structure costs${aapg_footnote(inline`Pour les Bénéficiaires à coût marginal, ces frais correspondent à un forfait de 13.5% des dépenses
éligibles, dans la limite du plafond d’Aide accordé. Pour les Bénéficiaires à coût complet,
ces frais sont calculés : d’une part, sur les dépenses de personnels et plafonnés pour cette
part à 68% des dépenses de personnel ; d’autre part, sur les dépenses autres que de personnels,
pour cette part à 7% des dépenses (hors frais d’environnement). Ces frais d’environnement ne
sont pas à justifier.`)}`,
                  inline`Préciput pour un partenaire public / Frais d’environnement pour un partenaire privé`,
                ),
              ),
              inline(),
              inline(),
              inline(),
              inline(strong(inline`Sub-total`)),
              inline(),
              inline(),
              inline(),
              inline(strong(inline`Requested funding`)),
              inline(),
              inline(),
              inline(),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, aapg_bilingual(inline`Impact and benefits of the project`, inline`Impact et retombées du projet`)),
    inline(
      aapg_comment(
        blocks(
          inline`Section en lien avec le critère d’évaluation « Impact et retombées du projet », cf. sous-critères
différenciés par instrument de financement dans le guide de l'AAPG2025`,
          m.lines(
            'Pour tous les instruments de financement :',
            m.list(
              m.item([
                'Décrire les domaines scientifiques et potentiellement les domaines économique, social ou culturel dans lesquels les résultats du projet auront un impact, à plus ou moins long terme. Détailler les actions relevant des relations entre science et société (ex. intervention dans les médias, participation à des festivals de science…) co-construites avec des professionnels de la culture scientifique, technique et industrielle (i.e. médiateurs, journalistes…) au long du projet et au-delà de sa réalisation.',
              ]),
            ),
          ),
          m.lines(
            'S’il s’agit d’un projet collaboratif (PRC), d’un projet de recherche mono-équipe (PRME) ou d’un projet Jeune chercheur-Jeune chercheuse (JCJC):',
            m.list(
              m.item([
                'Détailler la stratégie envisagée de diffusion et de valorisation des résultats, y compris de potentielles actions de promotion de la culture scientifique, technique et industrielle.',
              ]),
            ),
          ),
          m.lines(
            'S’il s’agit d’un projet collaboratif-Entreprise (PRCE):',
            m.list(
              m.item([
                'Décrire les actions envisagées de transfert de technologie et d’innovation dans le monde socio-économique, y compris de potentielles actions de promotion de la culture scientifique, technique et industrielle.',
              ]),
            ),
          ),
          m.lines(
            'S’il s’agit d’un projet collaboratif-International (PRCI):',
            m.list(
              m.item([
                'Décrire la stratégie envisagée de diffusion et de valorisation des résultats, y compris de potentielles actions de promotion de la culture scientifique, technique et industrielle; mise en évidence de la valeur ajoutée de la coopération européenne ou internationale et de l’apport de cette collaboration à la communauté scientifique française.',
              ]),
            ),
          ),
        ),
      ),
    ),
    m.heading(1, aapg_bilingual(inline`References related to the project`, inline`Bibliographie`)),
    inline(
      aapg_comment(
        blocks(
          'Cette section est en lien avec le critère d’évaluation « Qualité et ambition scientifique », cf. sous-critères différenciés dans le Guide de l’AAPG 2025',
          'Lister les références bibliographiques de la proposition détaillée relatives à l’état de l’art.',
          'Veiller à renseigner des références « utilisables », i.e. incluant les premier.e.s co-auteurs et co-autrices, le titre complet, le titre de la revue, l’année, etc. Vous pouvez compléter (et non pas remplacer) ces références par le lien « accès ouvert » (« open access ») des articles pour améliorer leur accessibilité aux évaluateurs et évaluatrices. Attention, ces liens ne se substituent pas à la description des attendus dans le document scientifique.',
          'Les preprints sont acceptés, en particulier pour le référencement de données préliminaires.',
          'Les facteurs d’impact des revues citées ne doivent pas être mentionnés.',
          inline(
            strong(
              inline`La bibliographie doit être comptabilisée dans la limite des 20 pages de la proposition détaillée.${space}`,
            ),
          ),
        ),
      ),
    ),
  )
}
