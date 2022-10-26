/**
 * Adapted from: https://rosettacode.org/wiki/Identity_matrix#TypeScript
 *
 * This function returns an identity matrix of n x n size such that:
 *   n = 1 => 1,
 *   n = 2 => [[1,0],[0,1],
 *   n = 3 => [[1,0,0],[0,1,0],[0,0,1]],
 *   ... and so on ...
 *
 * @param n finite integer 1..n dimensions of identiy matrix to return
 * @returns number[n][n] identity matrix of n x n size
 */
export function idMatrix(n: number): string | number | number[] | number[][] {
  if (n < 1) return "Not defined";
  else if (n === 1) return 1;
  else {
    const idMatrix: number[][] = [];
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i !== j) idMatrix[i][j] = 0;
        else idMatrix[i][j] = 1;
      }
    }
    return idMatrix;
  }
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