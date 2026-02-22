import { calculateSphereSurfaceArea, calculateSphereVolume } from './sphere';

describe('sphere', () => {
    it('should calculate surface area correctly', () => {
        // 4 * pi * r^2
        expect(calculateSphereSurfaceArea(1)).toBeCloseTo(12.566);
        expect(calculateSphereSurfaceArea(5)).toBeCloseTo(314.159);
    });

    it('should calculate volume correctly', () => {
        // (4/3) * pi * r^3
        expect(calculateSphereVolume(1)).toBeCloseTo(4.18879);
        expect(calculateSphereVolume(3)).toBeCloseTo(113.097);
    });
});
