const throws = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
}

const result = {
    p1Win: 'P1 Wins',
    p2Win: 'P2 Wins',
    tie: 'tie',
    invalid: 'invalid'
}

function play(p1Throw, p2Throw) {
    if (![throws.rock, throws.paper, throws.scissors].includes(p1Throw) ||
        ![throws.rock, throws.paper, throws.scissors].includes(p2Throw)) {
        return result.invalid
    }

    if (p1Throw === p2Throw) {
        return result.tie
    } else if (
        p1Throw === 'scissors' && p2Throw === 'rock' ||
        p1Throw === 'paper' && p2Throw === 'scissors' ||
        p1Throw === 'rock' && p2Throw === 'paper'
    ) {
        return result.p2Win
    } else {
        return result.p1Win
    }
}

describe('play', () => {
    describe('p1wins', () => {
        it('rock vs scissors', () => {
            expect(play(throws.rock, throws.scissors)).toBe(result.p1Win)
        })

        it('scissors vs paper', () => {
            expect(play(throws.scissors, throws.paper)).toBe(result.p1Win)
        })

        it('paper vs rock', () => {
            expect(play(throws.paper, throws.rock)).toBe(result.p1Win)
        })
    })

    describe('p2wins', () => {
        it('scissors vs rock', () => {
            expect(play(throws.scissors, throws.rock)).toBe(result.p2Win)
        })

        it('paper vs scissors', () => {
            expect(play(throws.paper, throws.scissors)).toBe(result.p2Win)
        })

        it('rock vs paper', () => {
            expect(play(throws.rock, throws.paper)).toBe(result.p2Win)
        })
    })

    describe('tie', () => {
        it('paper vs paper', () => {
            expect(play(throws.paper, throws.paper)).toBe(result.tie)
        })

        it('rock vs rock', () => {
            expect(play(throws.rock, throws.rock)).toBe(result.tie)
        })

        it('scissors vs scissors', () => {
            expect(play(throws.scissors, throws.scissors)).toBe(result.tie)
        })
    })

    describe('invalid', () => {
        it('rock vs invalid', () => {
            expect(play(throws.rock, Math.random())).toBe(result.invalid)
        })

        it('invalid vs paper', () => {
            expect(play(Math.random(), throws.paper)).toBe(result.invalid)
        })

        it('invalid vs invalid', () => {
            expect(play(Math.random(), Math.random())).toBe(result.invalid)
        })
    })
})