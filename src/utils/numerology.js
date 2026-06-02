export function reduceNumber(num, keepMaster = true) {
  if (num <= 0) return 0;
  let current = num;
  while (current >= 10) {
    if (keepMaster && (current === 11 || current === 22 || current === 33)) {
      break;
    }
    current = String(current)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
  }
  return current;
}

export function calculateLifePath(birthDateString) {
  if (!birthDateString) return 0;
  const parts = birthDateString.split('-');
  if (parts.length !== 3) return 0;

  const [yearStr, monthStr, dayStr] = parts;
  
  const mVal = reduceNumber(parseInt(monthStr, 10), true);
  const dVal = reduceNumber(parseInt(dayStr, 10), true);
  const yVal = reduceNumber(parseInt(yearStr, 10), true);

  const total = mVal + dVal + yVal;
  return reduceNumber(total, true);
}

export function calculateNameNumbers(fullName) {
  const segments = fullName.toLowerCase().trim().split(/\s+/).filter(Boolean);
  if (segments.length === 0) {
    return { destiny: 0, soulUrge: 0, personality: 0 };
  }

  const LETTER_VALUES = {
    a: 1, j: 1, s: 1,
    b: 2, k: 2, t: 2,
    c: 3, l: 3, u: 3,
    d: 4, m: 4, v: 4,
    e: 5, n: 5, w: 5,
    f: 6, o: 6, x: 6,
    g: 7, p: 7, y: 7,
    h: 8, q: 8, z: 8,
    i: 9, r: 9
  };

  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  const destinySegmentSums = [];
  const soulUrgeSegmentSums = [];
  const personalitySegmentSums = [];

  for (const segment of segments) {
    let destSum = 0;
    let soulSum = 0;
    let persSum = 0;

    for (const char of segment) {
      const val = LETTER_VALUES[char];
      if (val !== undefined) {
        destSum += val;
        if (vowels.has(char)) {
          soulSum += val;
        } else {
          persSum += val;
        }
      }
    }

    if (destSum > 0) destinySegmentSums.push(reduceNumber(destSum, true));
    if (soulSum > 0) soulUrgeSegmentSums.push(reduceNumber(soulSum, true));
    if (persSum > 0) personalitySegmentSums.push(reduceNumber(persSum, true));
  }

  const totalDestiny = destinySegmentSums.reduce((a, b) => a + b, 0);
  const totalSoul = soulUrgeSegmentSums.reduce((a, b) => a + b, 0);
  const totalPersonality = personalitySegmentSums.reduce((a, b) => a + b, 0);

  return {
    destiny: reduceNumber(totalDestiny, true),
    soulUrge: reduceNumber(totalSoul, true),
    personality: reduceNumber(totalPersonality, true)
  };
}
