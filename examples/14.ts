/**
 * Adapted from: https://rosettacode.org/wiki/Modular_inverse#TypeScript
 *
 * The modular multiplicative inverse of an integer `a` modulo `m` is an
 * integer 'x' such that:
 *   `a x ≡ 1 ( mod m )`
 * In other words, the remainder after dividing `ax` by the integer `m` is 1
 *
 * @param a finite integer > 0
 * @param m finite integer > 0 (modulus)
 * @returns a finite integer such that ax % m = 1
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
 * Please identify input/output pairs where the output includes:
 *       NaN, null, undefined, infinity, runtime exception, 
 *       or the function does not appear to terminate.
 *        
 * 1. Provide test case(s) for the input/output pair(s) you found, if any.
 *     - AutoTest: Select the example test case(s) in the AutoTest screen
 *     - Jest: Include the example test case(s) in ##.test.ts
 *     - If you found no pairs, select/include no test cases.
 *     - You do not need to explain further.
 * 
 * 2. Please X the box that describes how confident you are that you 
 *    accurately found all the pairs in the code above.
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