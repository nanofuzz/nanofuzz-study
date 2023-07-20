/**
 * Adapted from: https://stackoverflow.com/questions/65671694/
 *
 * Sums an array of dinner expenses.  If `total` is passed in as a parameter,
 * use it as the starting total.
 *
 * @param dinners Array of 0..n finite numbers (may be positive, negative, or zero).
 * @param total Optional finite number that is the starting total. (otherwise starting total is 0.0)
 * @returns The sum of the dinner expenses + the input total, if present.
 */
export function totalDinnerExpenses(dinners: number[], total?: any): number {
  dinners.forEach((item) => (total += item));
  return total;
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