import Calculator from './Calculator'

describe('Calculator', () => {
  const calculator = new Calculator()
  const runStub = jest.fn()

  runStub.mockReturnValue(10)

  calculator.register('special', {
    run: runStub,
  })

  it('can run an operator', () => {
    const result = calculator.run('special', 1, 2)

    expect(result).toEqual(10)
    expect(runStub).toBeCalledWith(1, 2)
  })

  it('should throw an error when operator is not supported', () => {
    expect(() => {
      calculator.run('notExisted', 1, 2)
    }).toThrow('Operator is not supported')
  })
})
