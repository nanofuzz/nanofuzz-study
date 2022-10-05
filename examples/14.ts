/**
 * Adapted from: https://rosettacode.org/wiki/Modular_inverse#TypeScript
 *
 * The modular multiplicative inverse of an integer `a` modulo `m` is an
 * integer 'x' such that:
 *   `a x ≡ 1 ( mod m )`
 * In other words, the remainder after dividing `ax` by the integer `m` is 1
 *
 * @param a integer
 * @param m integer modulus
 * @returns an integer such that ax % m = 1
 */
export function modInv(a: number, m: number): number {
  let d = 0;
  if (a < m) {
    let count = 1;
    let bal = a;
    do {
      const step = Math.floor((m - bal) / a) + 1;
      bal += step * a;
      count += step;
      bal -= m;
    } while (bal !== 1);
    d = count;
  }
  return d;
}

/**
 * Post-Task Activity
 * ------------------
 * 1. Please list all the bug(s) you found in the above code. 
 *     - Specify both the input value(s) AND the erroneous result.
 *     - If you found multiple bugs, make as many entries as you need.
 *     - If you found no bugs, skip this question.
 * 
 *   Buggy Input : 
 *   Buggy Output: 
 * 
 * 2. Please X the box that describes how confident you are that you 
 *    accurately found all the bugs in the code above.
 * 
 *       1             2             3             4             5 
 *   Not at all     Slightly      Somewhat      Moderately    Extremely
 *   Confident      Confident     Confident     Confident     Confident
 * |------------|--------------|-------------|-------------|-------------|
 * |            |              |             |             |             |
 * |------------|--------------|-------------|-------------|-------------|
 * 
 * 3. Please save this file, commit to the repo, and request the next task.
 */