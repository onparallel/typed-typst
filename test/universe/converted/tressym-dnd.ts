// Converted from test/universe/corpus/tressym-dnd.typ by scripts/convert-suite.ts — do not edit.
/* eslint-disable */
import {
  T,
  define,
  doc,
  image,
  importPackage,
  inline,
  let_,
  linebreak,
  m,
  path,
  pt,
  space,
  strong,
} from '../../../src/index.ts'

export default () => {
  const characterSheet = define('character-sheet')
    .named('acrobatics', T.any, null)
    .named('alignment', T.any, null)
    .named('animal-handling', T.any, null)
    .named('arcana', T.any, null)
    .named('armorclass', T.any, null)
    .named('athletics', T.any, null)
    .named('attacks-text', T.content, [])
    .named('background', T.any, null)
    .named('big-equip', T.any, null)
    .named('big-number-big-field', T.any, null)
    .named('bonds', T.content, [])
    .named('charisma', T.any, null)
    .named('chasave', T.any, null)
    .named('class', T.any, null)
    .named('consave', T.any, null)
    .named('constitution', T.any, null)
    .named('deathsave-f', T.any, null)
    .named('deathsave-s', T.any, null)
    .named('deception', T.any, null)
    .named('dexsave', T.any, null)
    .named('dexterity', T.any, null)
    .named('display-money', T.any, null)
    .named('equipment-text', T.content, [])
    .named('features-traits', T.content, [])
    .named('flaws', T.content, [])
    .named('history', T.any, null)
    .named('hitdice-total', T.any, null)
    .named('hitdice-type', T.any, null)
    .named('hp-max', T.any, null)
    .named('ideals', T.content, [])
    .named('initiative', T.any, null)
    .named('insight', T.any, null)
    .named('inspiration', T.any, null)
    .named('intelligence', T.any, null)
    .named('intimidation', T.any, null)
    .named('intsave', T.any, null)
    .named('investigation', T.any, null)
    .named('level', T.any, null)
    .named('medicine', T.any, null)
    .named('money', T.any, null)
    .named('more-passive', T.any, null)
    .named('name', T.any, null)
    .named('nature', T.any, null)
    .named('perception', T.any, null)
    .named('performance', T.any, null)
    .named('personality-traits', T.content, [])
    .named('persuasion', T.any, null)
    .named('player', T.any, null)
    .named('prof-lang-text', T.content, [])
    .named('religion', T.any, null)
    .named('settings', T.any, null)
    .named('sleight-of-hand', T.any, null)
    .named('species', T.any, null)
    .named('speed', T.any, null)
    .named('stealth', T.any, null)
    .named('strength', T.any, null)
    .named('strsave', T.any, null)
    .named('subclass', T.any, null)
    .named('survival', T.any, null)
    .named('weapons', T.any, null)
    .named('wisdom', T.any, null)
    .named('wissave', T.any, null)
    .named('xp', T.any, null)
    .named('xp-type', T.any, null)
    .returns(T.any)
    .external()
  const detailsSheet = define('details-sheet')
    .named('additional-features-traits', T.content, [])
    .named('age', T.any, null)
    .named('allies-organizations', T.content, [])
    .named('appearance', T.any, null)
    .named('backstory', T.content, [])
    .named('eyes', T.any, null)
    .named('hair', T.any, null)
    .named('height', T.content, [])
    .named('name', T.any, null)
    .named('settings', T.any, null)
    .named('skin', T.any, null)
    .named('symbol-name', T.any, null)
    .named('treasure', T.content, [])
    .named('weight', T.any, null)
    .returns(T.any)
    .external()
  const spellSheet = define('spell-sheet')
    .named('cantrips', T.any, null)
    .named('lvl1-spells', T.any, null)
    .named('lvl2-spells', T.any, null)
    .named('lvl3-spells', T.any, null)
    .named('lvl4-spells', T.any, null)
    .named('lvl5-spells', T.any, null)
    .named('lvl6-spells', T.any, null)
    .named('lvl7-spells', T.any, null)
    .named('lvl8-spells', T.any, null)
    .named('lvl9-spells', T.any, null)
    .named('settings', T.any, null)
    .named('slots-expended', T.any, null)
    .named('slots-total', T.any, null)
    .named('spell-attack-bonus', T.any, null)
    .named('spell-save-dc', T.any, null)
    .named('spellcasting-ability', T.any, null)
    .named('spellcasting-class', T.any, null)
    .returns(T.any)
    .external()
  const [settingsDecl, settings] = let_('settings', {
    language: 'en',
    printerMono: false,
    spellRainbows: true,
    bodyFont: 'Vollkorn',
  })
  return doc(
    m.lines(importPackage('@preview/tressym-dnd:0.2.4', [characterSheet, detailsSheet, spellSheet]), settingsDecl),
    inline(
      characterSheet({
        settings: settings,
        name: '',
        class: '',
        subclass: '',
        level: 1,
        background: '',
        player: '',
        species: '',
        alignment: '',
        xp: 0,
        xpType: 'xp',
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10,
        bigNumberBigField: true,
        strsave: true,
        dexsave: true,
        consave: true,
        intsave: true,
        wissave: true,
        chasave: true,
        acrobatics: true,
        animalHandling: 0,
        arcana: 0.5,
        athletics: 1,
        deception: 1.5,
        history: 2,
        insight: 2.5,
        intimidation: true,
        investigation: true,
        medicine: true,
        nature: true,
        perception: true,
        performance: true,
        persuasion: true,
        religion: true,
        sleightOfHand: true,
        stealth: true,
        survival: true,
        morePassive: false,
        armorclass: null,
        initiative: null,
        speed: 30,
        hpMax: 0,
        hitdiceTotal: 0,
        hitdiceType: 'd',
        deathsaveS: 0,
        deathsaveF: 0,
        inspiration: '',
        weapons: [['Weapon Name', 0, '1d6+1 slash.']],
        attacksText: inline(space),
        profLangText: inline`${space}${strong(inline`Languages:`)} Common ${linebreak()} ${strong(inline`Armor:`)} ${linebreak()}
${strong(inline`Weapons:`)} ${linebreak()} ${strong(inline`Tools:`)}${space}`,
        equipmentText: inline(space),
        displayMoney: true,
        money: [0, 0, '-', 0, 0],
        bigEquip: true,
        personalityTraits: inline(),
        ideals: inline(),
        bonds: inline(),
        flaws: inline(),
        featuresTraits: inline(space),
      }),
    ),
    inline(
      detailsSheet({
        settings: settings,
        name: '',
        age: '',
        height: inline`'" (cm)`,
        weight: 'lbs (kg)',
        eyes: '',
        skin: '',
        hair: '',
        appearance: image({ width: pt(162), height: pt(220), fit: 'contain' }, path('./img/person.png')),
        symbolName: '',
        backstory: inline(space),
        alliesOrganizations: inline(space),
        additionalFeaturesTraits: inline(space),
        treasure: inline(space),
      }),
    ),
    inline(
      spellSheet({
        settings: settings,
        spellcastingClass: '',
        spellcastingAbility: '',
        spellSaveDc: '',
        spellAttackBonus: '',
        cantrips: [],
        lvl1Spells: [],
        lvl2Spells: [],
        lvl3Spells: [],
        lvl4Spells: [],
        lvl5Spells: [],
        lvl6Spells: [],
        lvl7Spells: [],
        lvl8Spells: [],
        lvl9Spells: [],
        slotsTotal: [],
        slotsExpended: [],
      }),
    ),
  )
}
