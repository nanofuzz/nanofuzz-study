/**
 * Adapted from: https://stackoverflow.com/questions/51180518/
 *
 * This function accepts an `array`, an `offset`, and a `dft` (default).
 * If the `array` at `offset` is undefined, return the `dft` value;
 * otherwise, return the value at `array[offset]`.
 *
 * @param array array of strings
 * @param offset finite integer offset into array of strings to retrieve
 * @param dft default string to return if array[offset] is undefined
 * @returns array[offset] if defined, otherwise dft
 */
export function getOffsetOrDefault(
  array: string[],
  offset: number,
  dft: string
): string {
  return array[offset] === "undefined" ? dft : array[offset];
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