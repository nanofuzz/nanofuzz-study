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