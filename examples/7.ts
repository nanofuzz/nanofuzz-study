/**
 * Adapted from: https://stackoverflow.com/questions/61910721/
 *
 * This function accepts an array of PlayerRecord objects and sorts the
 * array in descending order according to the ratio of wins to losses.
 * (win / lose) such that higher ratios of wins to losses are first.
 * Some examples:
 *
 *  - {win: 3, lose: 9}  <  {win: 2, lose: 3} // 3/9  <  2/3
 *  - {win: 2, lose: 2}  >  {win: 2, lose: 3} // 2/2  >  2/3
 *  - {win: 3, lose: 9} === {win: 3, lose: 9} // 3/9 === 3/9
 *
 * In the case where a === b, both [a,b] and [b,a] are valid.
 *
 * @param array array of 0..n wins and losses. Wins and losses are both finite integers >= 0
 * @returns a sorted copy of the same array plus finite sort rank
 */
export function sortByWinLoss(
  array: { win: number; lose: number }[]
): { win: number; lose: number; rank: number }[] {
  return array
    .map((e) => {
      return {
        ...e,
        rank: e.win / e.lose,
      };
    })
    .sort((a, b) => b.rank - a.rank);
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