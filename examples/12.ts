/**
 * Adapted from: https://rosettacode.org/wiki/Levenshtein_distance#TypeScript
 *
 * The Levenshtein distance is a metric for measuring the amount of difference
 * between two sequences (i.e. an edit distance). The Levenshtein distance
 * between two strings (`a` and `b`) is defined as the minimum number of edits
 * needed to transform one string into the other, with the allowable edit
 * operations being insertion, deletion, or substitution of a single character.
 *
 * @param a the original string
 * @param b the final string after editing `a`
 * @returns the number of edits needed to transform `a` to `b`
 */
export function levenshtein(a: string, b: string): number {
  const m: number = a.length,
    n: number = b.length;
  let t: number[] = [...Array(n + 1).keys()],
    u: number[] = [];
  for (let i = 0; i < m; i++) {
    u = [i + 1];
    for (let j = 0; j < n; j++) {
      u[j + 1] = a[i] === b[j] ? t[j] : Math.min(t[j], t[j + 1], u[j]) + 1;
    }
    t = u;
  }
  return u[n];
}

/**
 * Post-Task Activity
 * ------------------
 * Please review the test cases you saved where the output includes:
 *       NaN, null, undefined, infinity, runtime exception, 
 *       or the function does not appear to terminate.
 *        
 * 1. List the input/output pair(s) you found, if any.
 *     - Specify both the input value(s) AND the output value(s).
 *     - If you found multiple pairs, make as many entries as you need.
 *     - If you found no pairs, indicate "none".
 *     - You do not need to explain further.
 * 
 *   Input : 
 *   Output: 
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