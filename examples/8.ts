/**
 * Adapted from: https://stackoverflow.com/questions/60250899/
 *
 * This function accepts an array of salaries and returns
 * the minimum salary found.  If no employees are provided, the
 * minimum salary is undefined.
 *
 * @param list array of salaries, which are always >= 0 and never NaN.
 * @returns the minimum salary from list
 */
export function minSalary(list: number[]): number | undefined {
  return list.reduce((least, x) => Math.min(least, x), Infinity);
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