// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// character_data.js
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// json format
// http://en.wikipedia.org/wiki/JSON

  gen_data['main'] = [
    'A {gender} {archetype}, wearing {armor} and wielding {weapon}. Motivation by {motivation}'
  ];
  gen_data['gender'] = [
    'male', 'female', 'non-binary', 'intersex', 'construct'
  ];
  gen_data['archetype'] = {
    '1-3': 'field laborer',
    '4-5': 'blacksmith',
      '6': 'hunter'
  };
  gen_data['armor'] = {
    '01-50': 'leather armor',
    '51-90': 'chainmail',
    '91-00': 'plate armor'
  };
  gen_data['weapon'] = [
    '{melee_weapon}',
    '{melee_weapon} and a shield',
    'twin blades',
    '{ranged_weapon}'
  ];
  gen_data['melee_weapon'] = [
    'a battleaxe', 'a mace', 'a spear', 'a sword'
  ];
  gen_data['ranged_weapon'] = [
    'a longbow and arrows', 'a heavy crossbow'
  ];
  gen_data['motivation'] = {
    '1-3': 'love',
    '4-5': 'survival',
      '6': 'pizza rolls'
  };

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
