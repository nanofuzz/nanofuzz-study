/**
 * Adapted from: https://stackoverflow.com/questions/65671694/
 *
 * Sums an array of dinner expenses.  If `total` is passed in as a parameter,
 * use it as the starting total.
 *
 * @param dinners Array of dinner costs. These costs are defined, finite values.
 * @param total Optional starting total.  If provided, these costs should be defined, finite values.
 * @returns The sum of the dinner expenses + the input total, if present.
 */
export function totalDinnerExpenses(dinners: number[], total?: any): number {
  dinners.forEach((item) => (total += item));
  return total;
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