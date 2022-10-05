/**
 * Adapted from: https://stackoverflow.com/questions/65428615/
 *
 * This function accepts an array of numbers and returns the string
 * name of the first number === 0.  If no match is found, return "".
 *
 * @param inArray array of finite integers
 * @returns the name of the first object with value === 0
 */
export function getZero(inArray: number[]): string {
  return inArray.filter((q) => q === 0)[0].toString();
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