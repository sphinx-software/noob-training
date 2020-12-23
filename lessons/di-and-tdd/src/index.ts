interface Bar {
  bar(): string
}

class Foo implements Bar {
  public bar(): string {
    return 'bar'
  }
}

const x = new Foo()

console.log(x.bar())
