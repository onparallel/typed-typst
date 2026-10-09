// Converted from test/universe/corpus/isc-hei-poster.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  add,
  align,
  auto,
  blocks,
  center,
  cm,
  define,
  doc,
  emph,
  external,
  figure,
  fr,
  grid,
  horizon,
  image,
  importPackage,
  inline,
  left,
  let_,
  luma,
  m,
  path,
  pct,
  pt,
  raw,
  rect,
  show,
  space,
  strong,
  symbol,
  table,
  unsafeRaw,
} from '../../../src/index.ts'

export default () => {
  const iscPoster = external('isc-poster')
  const iscCard = define('isc-card').pos('arg1', T.content).named('title', T.any, null).returns(T.any).external()
  const iscColbreak = define('isc-colbreak').returns(T.any).external()
  const canvas = define('canvas').pos('arg1', T.any).named('length', T.any, null).returns(T.any).external()
  const draw = external('draw')
  const iscPoster_with = define('with')
    .named('academic-year', T.any, null)
    .named('co-supervisor', T.any, null)
    .named('distribute-columns', T.any, null)
    .named('expert', T.any, null)
    .named('language', T.any, null)
    .named('major', T.any, null)
    .named('num-columns', T.any, null)
    .named('orientation', T.any, null)
    .named('permanent-email', T.any, null)
    .named('programme', T.any, null)
    .named('school', T.any, null)
    .named('student', T.any, null)
    .named('subtitle', T.content, [])
    .named('supervisor', T.any, null)
    .named('thesis-id', T.any, null)
    .named('title', T.content, [])
    .returns(T.any)
    .external(iscPoster)
  const [posterOrientationDecl, posterOrientation] = let_('poster-orientation', 'portrait')
  const [ex_figDecl, ex_fig] = let_(
    'ex_fig',
    canvas(
      { length: cm(2) },
      unsafeRaw.code<any>`{
  import draw: *
  let phi = (1 + calc.sqrt(5)) / 2
  ortho(flatten: true, {
    hide({
      line((-phi, -1, 0), (-phi, 1, 0), (phi, 1, 0), (phi, -1, 0), close: true, name: "xy")
      line((-1, 0, -phi), (1, 0, -phi), (1, 0, phi), (-1, 0, phi), close: true, name: "xz")
      line((0, -phi, -1), (0, -phi, 1), (0, phi, 1), (0, phi, -1), close: true, name: "yz")
    })
    intersections("a", "yz", "xy")
    intersections("b", "xz", "yz")
    intersections("c", "xy", "xz")
    set-style(stroke: (thickness: 0.5pt, cap: "round", join: "round"))
    line((0, 0, 0), "c.1", (phi, 1, 0), (phi, -1, 0), "c.3")
    line("c.0", (-phi, 1, 0), "a.2")
    line((0, 0, 0), "b.1", (1, 0, phi), (-1, 0, phi), "b.3")
    line("b.0", (1, 0, -phi), "c.2")
    line((0, 0, 0), "a.1", (0, phi, 1), (0, phi, -1), "a.3")
    line("a.0", (0, -phi, 1), "b.2")
    anchor("A", (0, phi, 1))
    content("A", [$A$], anchor: "north", padding: .1)
    anchor("B", (-1, 0, phi))
    content("B", [$B$], anchor: "south", padding: .1)
    anchor("C", (1, 0, phi))
    content("C", [$C$], anchor: "south", padding: .1)
    line("A", "B", stroke: (dash: "dashed"))
    line("A", "C", stroke: (dash: "dashed"))
  })
}`,
    ),
  )
  return doc(
    m.lines(
      importPackage('@preview/isc-hei-poster:0.8.1', [iscPoster, iscCard, iscColbreak]),
      importPackage('@preview/cetz:0.5.2', [canvas, draw]),
    ),
    posterOrientationDecl,
    show(
      iscPoster_with({
        title: inline`Apprentissage fédéré et vie privée`,
        subtitle: inline`Confidentialité différentielle et agrégation distribuée des gradients`,
        student: 'Margaret Hamilton',
        permanentEmail: 'margaret.hamilton@hevs.ch',
        supervisor: 'Prof. Dr John von Neumann',
        coSupervisor: 'Lady Ada Lovelace',
        expert: 'Prof. Dr Grace Hopper',
        thesisId: 'ISC-ID-26-1',
        academicYear: '2025-2026',
        school: "Haute École d'Ingénierie de Sion",
        programme: 'Informatique et systèmes de communication',
        major: 'Data engineering',
        orientation: posterOrientation,
        language: 'fr',
        numColumns: 2,
        distributeColumns: true,
      }),
    ),
    inline(
      iscCard(
        { title: 'Résumé' },
        inline`${space}Les dossiers de santé électroniques ne peuvent être centralisés sans risque juridique
et éthique. Ce travail présente ${strong(inline`MediFL`)}, un cadre d'apprentissage fédéré intégrant
la confidentialité différentielle (ε-DP) et une agrégation robuste aux nœuds défaillants. Évalué
sur trois cohortes hospitalières totalisant 180 000 patients, MediFL atteint une AUC de ${strong(inline`0.91`)}
avec un budget de confidentialité ε = 0.5, à seulement trois points de l'oracle centralisé (AUC
0.94). La convergence est assurée en ${strong(inline`60 rounds`)} de communication, sans qu'aucune
donnée brute ne quitte les établissements participants.${space}`,
      ),
    ),
    inline(
      iscCard(
        { title: 'Introduction' },
        blocks(
          inline`L'accès partagé aux dossiers médicaux électroniques permettrait d'entraîner des modèles prédictifs
plus robustes et de détecter des pathologies rares. Cependant, la réglementation (RGPD, LPD
suisse) et les impératifs éthiques empêchent la transmission de données brutes entre établissements.
L'apprentissage fédéré déplace le calcul vers les données plutôt que l'inverse : seuls des gradients
de modèle sont échangés, jamais les dossiers patients.`,
          inline`${strong(inline`Verrou scientifique :`)} comment garantir une confidentialité formelle (ε-DP)
tout en préservant la convergence du modèle global face à l'hétérogénéité statistique des cohortes
— chaque hôpital ayant ses propres pratiques de codage et démographies ?`,
          inline(
            figure(
              {
                caption: inline`Vue d'ensemble de MediFL : chaque établissement entraîne localement et transmet des gradients
bruités au serveur agrégateur.`,
              },
              rect(
                { width: pct(100), height: cm(7), fill: luma(235), stroke: null },
                align(add(center, horizon), inline(emph(inline`Architecture MediFL — des hôpitaux au modèle global`))),
              ),
            ),
          ),
        ),
      ),
    ),
    inline(
      iscCard(
        { title: 'Méthodologie' },
        blocks(
          'Le protocole MediFL se déroule en trois phases par round :',
          m.enum(
            m.item([
              strong(inline`Distribution`),
              space,
              '— le serveur envoie les poids globaux',
              space,
              unsafeRaw.math`theta_t`,
              space,
              'aux',
              space,
              unsafeRaw.math`K`,
              space,
              'participants sélectionnés aléatoirement.',
            ]),
            m.item([
              strong(inline`Entraînement local + clipping`),
              space,
              '— chaque hôpital minimise la cross-entropie sur ses données puis clippe les gradients à norme',
              space,
              unsafeRaw.math`≤ C`,
              '.',
            ]),
            m.item([
              strong(inline`Agrégation DP-FedAvg`),
              space,
              '— le serveur somme les gradients bruités et met à jour',
              space,
              unsafeRaw.math`theta_{t+1}`,
              '.',
            ]),
          ),
          inline(
            table(
              { columns: [fr(1), auto, auto, auto], inset: pt(7), align: [left, center, center, center] },
              table.header(
                inline(strong(inline`Méthode`)),
                inline(strong(inline`AUC`)),
                inline(strong(inline`Rounds`)),
                inline(strong(inline`ε`)),
              ),
              inline`FedAvg (baseline)`,
              inline`0.84`,
              inline`50`,
              inline`∞`,
              inline`FedAvg + DP`,
              inline`0.82`,
              inline`80`,
              inline`1.0`,
              inline(strong(inline`MediFL (hybride)`)),
              inline(strong(inline`0.91`)),
              inline(strong(inline`60`)),
              inline(strong(inline`0.5`)),
              inline`Oracle centralisé`,
              inline`0.94`,
              inline`—`,
              inline`∞`,
            ),
          ),
          inline`Concrètement, le code correspond à une agrégation DP-FedAvg classique: ${figure({ caption: inline`Agrégation DP-FedAvg — clipping + bruit gaussien calibré sur ε.` }, raw({ block: true, lang: 'python' }, 'def dp_fedavg(grads, sizes, eps=0.5, C=1.0):\n    clipped = [clip(g, norm=C) for g in grads]\n    sigma   = C * calibrate_sigma(eps, delta=1e-5)\n    noisy   = [g + randn(sigma) for g in clipped]\n    w       = [n / sum(sizes) for n in sizes]\n    return sum(wi * gi for wi, gi in zip(w, noisy))'))}`,
        ),
      ),
    ),
    inline(iscColbreak()),
    ex_figDecl,
    inline(
      iscCard(
        { title: 'Résultats' },
        blocks(
          inline`Évaluation sur les cohortes des HUG (Genève), du CHUV (Lausanne) et de l'Inselspital (Berne),
ainsi que sur le jeu de données public MIMIC-IV (53 000 séjours UCI). La convergence est atteinte
en 60 rounds, contre 80 pour FedAvg+DP classique.`,
          inline(
            figure(
              {
                caption: inline`Graphe de connectivité inter-sites (gauche) et courbes de convergence AUC par méthode (droite).
MediFL converge plus vite malgré le bruit différentiel.`,
              },
              grid(
                { columns: [fr(1), fr(1)], gutter: pt(8) },
                align(add(center, horizon), ex_fig),
                image({ height: cm(7), fit: 'contain' }, path('figs/made.svg')),
              ),
            ),
          ),
          inline`Le budget de confidentialité ε = 0.5 est maintenu grâce à la composition RDP (${strong(inline`Rényi Differential Privacy`)}).
L'écart résiduel avec l'oracle centralisé (3 points AUC) s'explique principalement par l'hétérogénéité
des distributions inter-sites (Non-IID). Sur les cohortes de plus de 10 000 patients, l'AUC
monte à ${strong(inline`0.93`)}.`,
        ),
      ),
    ),
    inline(
      iscCard(
        { title: 'Discussion' },
        blocks(
          inline`${strong(inline`Forces :`)} MediFL ne nécessite aucun transfert de données brutes entre établissements.
La confidentialité est prouvable formellement (ε = 0.5, δ = 10⁻⁵). L'architecture tolère jusqu'à
30 % de participants défaillants par round grâce à l'agrégation pondérée par taille de cohorte.`,
          inline`${strong(inline`Limites :`)} l'ajout de bruit gaussien dégrade la convergence sur les cohortes
de petite taille (${symbol('<')} 2 000 patients). L'optimisation conjointe du budget ε et du
taux de participation par round reste un problème ouvert. La communication reste un goulot d'étranglement
pour des réseaux hospitaliers à faible bande passante.`,
          inline`${strong(inline`Perspective :`)} extension à la confidentialité locale (LDP) pour des scénarios
sans serveur central de confiance, et intégration de techniques de compression de gradients
(Top-k sparsification) pour réduire la charge réseau.`,
        ),
      ),
    ),
    inline(
      iscCard(
        { title: 'Conclusion' },
        inline`${space}MediFL démontre qu'il est possible d'approcher la précision d'un modèle centralisé (AUC
0.91 vs 0.94) tout en offrant des garanties formelles de confidentialité différentielle (ε =
0.5). Le cadre est générique : il s'applique à toute tâche de classification médicale distribuée
sans modification architecturale majeure. Le code source est publié en open source sous licence
Apache 2.0.${space}`,
      ),
    ),
    inline(
      iscCard(
        { title: 'Références' },
        blocks(
          m.enum(
            m.item([
              'B. McMahan et al.,',
              space,
              emph(inline`Communication-Efficient Learning of Deep Networks`),
              ', AISTATS 2017.',
            ]),
            m.item(['M. Abadi et al.,', space, emph(inline`Deep Learning with Differential Privacy`), ', CCS 2016.']),
            m.item([
              'T. Li et al.,',
              space,
              emph(inline`Federated Learning: Challenges, Methods, and Future Directions`),
              ', IEEE Signal Processing Magazine, 2020.',
            ]),
            m.item([
              'I. Mironov,',
              space,
              emph(inline`Rényi Differential Privacy of the Gaussian Mechanism`),
              ', CSF 2017.',
            ]),
          ),
        ),
      ),
    ),
  )
}
