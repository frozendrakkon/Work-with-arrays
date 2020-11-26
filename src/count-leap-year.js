// посчитать високосные года
function chooseYears(start, end) {
    const result = [];
    for (; start < end; start++) {
      if (start % 4 === 0) {
       result.push(start);
      }
    }
    return result;
  }
  console.log(chooseYears(2000,2020)); // [2000,2004,2008,2012,2016]