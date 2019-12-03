const frequencyCalculator = instructs => {
  let current = 0;
  let history = [0];
  let found = false;
  const runMath = () => {
    for (let item of instructs) {
      let operator = item.slice(0, 1);
      let value = item.slice(1);
      operator === "+" ? (current += value * 1) : (current -= value);
      if (history.indexOf(current) > -1) {
        found = true;
        return current;
      }
      history.push(current);
    }
  };
  while (found === false) {
    runMath();
  }
  return current;
};

module.exports = frequencyCalculator;
