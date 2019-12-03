const frequencyCalculator = instructs => {
  let current = 0;
  for (let item of instructs) {
    let operator = item.slice(0, 1);
    let value = item.slice(1);
    operator === "+" ? (current += value * 1) : (current -= value);
  }
  // let operator =
  return current;
};

module.exports = frequencyCalculator;
