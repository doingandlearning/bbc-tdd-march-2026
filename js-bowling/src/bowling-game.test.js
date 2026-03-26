import BowlingGame from "./bowling-game.js";
import { it, expect, beforeEach } from "vitest"

let bowlingGame;

beforeEach(() => {
	bowlingGame = new BowlingGame();
})

function rollMany(rolls, pins) {
	for (let i = 0; i < rolls; i++) {
		bowlingGame.roll(pins)
	}
}

function rollSpare(pins) {
	bowlingGame.roll(pins)
	bowlingGame.roll(10 - pins)
}

function rollStrike() {
	bowlingGame.roll(10)
}

it("BowlingGame instantiates properly", () => {
	expect(bowlingGame).toBeInstanceOf(BowlingGame)
})

it("Rolling 20 gutterballs will score zero", () => {
	rollMany(20, 0)
	expect(bowlingGame.score()).toBe(0)
})

it("should return 20 for a game of all ones", () => {
	rollMany(20, 1)
	expect(bowlingGame.score()).toBe(20)
})

it("Rolling 5,5,3 and zeros after, scores 16", () => {
	rollSpare(4)
	bowlingGame.roll(3)
	rollMany(17, 0)
	expect(bowlingGame.score()).toBe(16)
})

it("strike, 4, 3, then zeros should score 24", () => {
	rollStrike()
	bowlingGame.roll(4)
	bowlingGame.roll(3)
	rollMany(16, 0);
	expect(bowlingGame.score()).toBe(24);
})

it("perfect game will score 300", () => {
	rollMany(12, 10);
	expect(bowlingGame.score()).toBe(300);
})