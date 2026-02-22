/**
 * Calculates the volume of a sphere.
 * 
 * @param radius - The radius of the sphere
 * @returns The calculated volume
 */
export function calculateSphereVolume(radius: number): number {
    return (4 / 3) * Math.PI * Math.pow(radius, 3);
}

/**
 * Calculates the surface area of a sphere.
 * 
 * @param radius - The radius of the sphere
 * @returns The calculated surface area
 */
export function calculateSphereSurfaceArea(radius: number): number {
    return 4 * Math.PI * Math.pow(radius, 2);
}
