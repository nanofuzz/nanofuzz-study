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