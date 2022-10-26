/**
 * Adapted from: https://rosettacode.org/wiki/Steady_squares#TypeScript
 * 
 * The 3-digit number 376 in the decimal numbering system is an example of numbers 
 * with the special property that its square ends with the same digits: 
 *   376 * 376 = 141376. 
 * Let's call a number with this property a "steady square." This function returns
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