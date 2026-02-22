/**
 * A basic 2D Vector representation 
 */
export interface Vector2D {
    x: number;
    y: number;
}

/**
 * Calculates the magnitude (length) of a 2D vector.
 * 
 * @param v - The vector
 * @returns The calculated magnitude
 */
export function calculateVectorMagnitude(v: Vector2D): number {
    return Math.sqrt(v.x * v.x + v.y * v.y);
}

/**
 * Calculates the dot product of two 2D vectors.
 * 
 * @param v1 - The first vector
 * @param v2 - The second vector
 * @returns The scalar dot product
 */
export function calculateVectorDotProduct(v1: Vector2D, v2: Vector2D): number {
    return v1.x * v2.x + v1.y * v2.y;
}

/**
 * Adds two 2D vectors together.
 * 
 * @param v1 - The first vector
 * @param v2 - The second vector
 * @returns A new combined vector
 */
export function addVectors(v1: Vector2D, v2: Vector2D): Vector2D {
    return { x: v1.x + v2.x, y: v1.y + v2.y };
}
