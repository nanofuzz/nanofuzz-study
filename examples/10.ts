/**
 * Adapted from: https://github.com/joellegg/gram-schmidt
 *
 * The Gram-Schmidt procedure finds an orthonormal basis for a vector space given a
 * set of vectors that span it. As an example, the vectors (4,0,0) and (-2,3,0) span
 * a two-dimensional subspace. Applying the Gram-Schmidt procedure to these vectors
 * would yield a new pair of vectors: (1,0,0) and (0,1,0). These new vectors span
 * the same subspace as the originals, but they are orthogonal and have length one.
 *
 * Note: A previous routine (not included here) ensures:
 *  - The vectors contain finite integers >= 0 that are neither null nor NaN.
 *  - The input vectors are all of the same length.
 *
 * @param matrix array of finite integer vectors w/contents >= 0
 * @returns array of vectors that span the same subspace as the input vectors
 */
export function gramSchmidt(matrix: number[][]): number[][] {
  const arr = gramSchmidtHelper(matrix);
  return arr.reverse();
}

function gramSchmidtHelper(matrix: number[][]): number[][] {
  if (matrix.length === 0) {
    return matrix;
  } else {
    let newVec = matrix[0];
    const restVecs = matrix.slice(1);
    const rest = gramSchmidtHelper(restVecs);

    // orthogonalization
    if (rest.length > 0) {
      for (let i = 0; i < rest.length; i++) {
        newVec = project(newVec, rest[i]);
      }
    }
    const newNormVec = [normalize(newVec)];
    const newArray = newNormVec.concat(rest);

    // normalization
    return newArray;
  }
}

function normalize(vector: number[]): number[] {
  const multiple = Math.sqrt(getDotProd(vector, vector));
  return multiply(1 / multiple, vector);
}

function getDotProd(vec1: number[], vec2: number[]): number {
  let prod = 0;
  for (let i = 0; i < vec1.length; i++) prod += vec1[i] * vec2[i];
  return prod;
}

function project(newVec: number[], vector: number[]): number[] {
  const dotProd = getDotProd(newVec, vector);
  const resVec = multiply(dotProd, vector);
  const orthoVec = subtract(resVec, newVec);
  return orthoVec;
}

function multiply(dotProd: number, vec: number[]): number[] {
  const resVec:number[] = [];
  for (let i = 0; i < vec.length; i++) resVec.push(dotProd * vec[i]);
  return resVec;
}

function subtract(resVec: number[], currentVec: number[]): number[] {
  const orthoVec: number[] = [];
  for (let i = 0; i < currentVec.length; i++)
    orthoVec.push(currentVec[i] - resVec[i]);
  return orthoVec;
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