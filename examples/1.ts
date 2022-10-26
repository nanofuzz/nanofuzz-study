/**
 * Adapted from: https://stackoverflow.com/questions/58166594/
 *
 * Returns the min of values in an array of Wells.  If valueText is
 * not provided on the Well object, use value to calculate min.
 *
 * @param wells An array of Well objects.  All Well objects have either a `valueText` or a `value` property.
 * @returns min of values in the Well objects
 */
export function minValue(
  wells: {
    valueText?: number;
    value?: number;
  }[]
): number {
  return Math.min(...wells.map((d) => Number(d.valueText) || Number(d.value)));
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