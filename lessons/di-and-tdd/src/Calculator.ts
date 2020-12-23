import { Operator } from './Operator'

export default class Calculator {
  public supportedOperators: Record<string, Operator> = {}

  register(name: string, operator: Operator) {
    this.supportedOperators[name] = operator
    return this
  }

  run(name: string, number1: number, number2: number) {
    const operator = this.supportedOperators[name]

    if (!operator) {
      throw new Error('Operator is not supported')
    }

    return operator.run(number1, number2)
  }
}
