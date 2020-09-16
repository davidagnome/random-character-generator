// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// character_data.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

  gen_data['main'] = [
    'A {gender} {archetype}, wearing {armor} and wielding {weapon}. They are motivated by {motivation} and are known for their {strength}, {strength}, and {flaw}.\n'
  ];
  gen_data['gender'] = [
    'cismale',
    'cisfemale',
    'non-binary',
    'intersex',
    'constructed'
  ];
  gen_data['archetype'] = {
    '1-3': 'field laborer',
    '4-5': 'blacksmith',
      '6': 'hunter'
  };
  gen_data['armor'] = {
    '01-40': 'clothes',
    '41-50': 'leather armor',
    '51-90': 'chainmail',
    '91-00': 'plate armor'
  };
  gen_data['weapon'] = [
    'a {melee_weapon}',
    'a {melee_weapon} and a shield',
    'dual {melee_weapon}s',
    '{ranged_weapon}'
  ];
  gen_data['melee_weapon'] = [
    'pitchfork', 'battleaxe', 'mace', 'spear', 'short sword', 'bastard sword', 'long sword', 'two-handed sword', 'club', 'morningstar', 'katana'
  ];
  gen_data['ranged_weapon'] = [
    'a longbow', 'a heavy crossbow', 'a light crossbow', 'a shortbow', 'a sling and bullets', 'darts', 'javelin', 'throwing axe'
  ];
  gen_data['motivation'] = {
    '1-3': 'love',
    '4-5': 'survival',
      '6': 'pizza rolls'
  };
  gen_data['strength'] = {
    '1-3': 'loyalty',
    '4-5': 'honesty',
      '6': 'pizza rolls'
  };
  gen_data['flaw'] = {
    '1-3': 'greed',
    '4-5': 'avarice',
      '6': 'pizza rolls'
  };

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
