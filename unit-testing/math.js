const math = ()=>{}

math.add = (a, b, args) => {
    sum = 0
    if (args)
      for (i=0; i< args.length; i++)
        sum += args[i]
    return a + b + sum
}

math.subtract = (a, b) => {
  return a - b;
}

math.multiply = (a, b) => {
  return a * b;
}

math.divide = (a, b) => {
  if (b === 0) return "Invalid"
  return a / b;
}

module.exports = math;