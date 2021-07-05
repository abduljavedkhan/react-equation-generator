export const output = [];
let fail = function () {
  throw new Continuation(function () {
    // console.log("Search tree exhausted");
    return "Done!";
  });
};

function guess(values, program) {
  let oldfail = fail;
  (fail = function () {
    if (values.length > 0) throw new Continuation(program, [values.shift()]);
    (fail = oldfail)();
  })();
}

function Continuation(program, args) {
  this.program = program;
  this.args = args;
}

export function execute(program, args) {
  while (true)
    try {
      return program.apply(null, args);
    } catch (ex) {
      if (ex instanceof Continuation) {
        program = ex.program;
        args = ex.args;
      } else {
        console.log(ex);
        throw ex;
      }
    }
}

function compute(exp) {
  const stack = [];
  exp.forEach(function (v) {
    if (typeof v == "number") {
      stack.push(v);
    } else {
      let b = stack.pop(),
        a = stack.pop();
      switch (v) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a / b);
          break;
        default:
          throw new Error("Unsupported operator " + v);
      }
    }
  });
  return stack[0];
}

function print(exp) {
  function infix(exp) {
    const out = [];
    exp.forEach(function (v) {
      if (typeof v == "number") {
        out.push(v);
      } else {
        let b = out.pop(),
          a = out.pop();
        out.push([a, v, b]);
      }
    });
    return out[0];
  }
  function stringify(exp) {
    if (Array.isArray(exp)) return "(" + exp.map(stringify).join(" ") + ")";
    return exp;
  }
  console.log(stringify(infix(exp)));
  output.push(stringify(infix(exp)));
}

function accepts_operator(exp) {
  let n = 0;
  exp.forEach(function (v) {
    if (typeof v == "number") n++;
    else n--;
  });
  return n > 1;
}

const operators = ["+", "-", "*", "/"];

export function solve(numbers, result) {
  // returns true if `sol` is a solution to our problem
  function good_result(sol) {
    return compute(sol) === result;
  }

  // returns a list of things (numbers/operators) that are valid to
  // append to the current expression (`sol`).
  function next_choices(sol) {
    let available_numbers = numbers.filter(function (n) {
      return sol.indexOf(n) < 0;
    });
    if (accepts_operator(sol)) return operators.concat(available_numbers);
    return available_numbers;
  }

  // the main loop
  (function rec(sol) {
    let things_to_try = next_choices(sol);
    if (things_to_try.length === 0) {
      if (good_result(sol)) print(sol);
      fail();
    } else
      guess(things_to_try, function (value) {
        rec(sol.concat(value));
      });
  })([]);
}

//execute(solve, [[3, 4, 8, 7, 12], 532]);
