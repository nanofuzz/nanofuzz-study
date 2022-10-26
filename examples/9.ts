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