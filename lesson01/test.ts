function timer() {
  console.log("Timer decorator factory called");
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Timer decorator factory applied");
    const functionToTime = descriptor.value;

    // Replace with wrapped version
    descriptor.value = function (...args: any[]) {
      const before = Date.now()
      console.log("executing function to time")
      const result = functionToTime.apply(this, args);
      console.log("done with function to time")
      const after = Date.now();

      const time = after - before;
      console.log(`Function took ${time} to execute`)
      return result
    };

    return descriptor;
  };
}



class Demo {
  @timer()
  myMethod() {
    console.log("executing heavy lifting")
    for (let i = 0; i < 10000000; i++) {
      // do nothing
    }
    console.log("done with heavy lifting")
  }
}

const demo = new Demo()

demo.myMethod()

