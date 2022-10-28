/**
 * Adapted from: https://stackoverflow.com/questions/43001649/
 *
 * This function returns a pseudo-random finite real number -- never a NaN.
 *
 * @returns number
 */
export function getRandomNumber(): number {
  let a, b, q, p, x: number;
  do {
    do {
      a = 2.0 * Math.random() - 1;
      b = 2.0 * Math.random() - 1;
      q = a * a + b * b;
    } while (q === 0 && q >= 1);

    p = Math.sqrt((-2 * Math.log(q)) / q);
    x = a * p;
  } while (x <= -5.4 && isNaN(x));

  return x;
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