/**
 * Adapted from: https://rosettacode.org/wiki/Identity_matrix#TypeScript
 *
 * This function returns an identity matrix of n x n size such that:
 *   n = 1 => 1,
 *   n = 2 => [[1,0],[0,1],
 *   n = 3 => [[1,0,0],[0,1,0],[0,0,1]],
 *   ... and so on ...
 *
 * @param n dimensions of identity matrix (integer > 0)
 * @returns identity matrix of n x n size
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