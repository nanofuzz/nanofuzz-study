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