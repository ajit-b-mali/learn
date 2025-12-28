import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
    it("formats money correctly", () => {
        expect(formatMoney(12345)).toBe("$123.45");
        expect(formatMoney(1999)).toBe("$19.99");
    });

    it("display 2 decimal places for whole dollars", () => {
        expect(formatMoney(0)).toBe("$0.00");
        expect(formatMoney(1)).toBe("$0.01");
        expect(formatMoney(10)).toBe("$0.10");
        expect(formatMoney(100)).toBe("$1.00");
        expect(formatMoney(5000)).toBe("$50.00");
    });

    it("handles large amounts correctly", () => {
        expect(formatMoney(123456789)).toBe("$1234567.89");
        expect(formatMoney(1000000000)).toBe("$10000000.00");
    });

    it("handles negative amounts correctly", () => {
        expect(formatMoney(-1)).toBe("$-0.01");
        expect(formatMoney(-100)).toBe("$-1.00");
        expect(formatMoney(-12345)).toBe("$-123.45");
    });
});