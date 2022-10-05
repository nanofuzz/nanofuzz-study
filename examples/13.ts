/**
 * Adapted from: https://rosettacode.org/wiki/Steady_squares#TypeScript
 * 
 * The 3-digit number 376 in the decimal numbering system is an example of numbers 
 * with the special property that its square ends with the same digits: 
 *   376 * 376 = 141376. 
 * Let's call a number with this property a "steady square.""  This function returns
 * true if the given integer, `n`, is a steady square.
 * 
 * @param n integer to check if it is a steady square
 * @returns true if `n` is a steady square, false otherwise
 */
 export function isSteady(n: number): boolean {
    // Result: true if n * n is steady; false otherwise.
    let mask = 1;
    for (let d = n; d !== 0; d = Math.floor(d / 10)) mask *= 10;
    return (n * n) % mask === n;
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