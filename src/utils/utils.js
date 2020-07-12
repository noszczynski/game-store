const objectToArray = (obj) => {
  const arr = [];
  Object.keys(obj).map((key) => arr.push(obj[key]));
  return arr;
};

const filterArrayByFields = (term, arr = [], fields = []) => {
  const smallerTerm = term.toLowerCase();
  let searchString = "";

  return arr.filter((item) => {
    searchString = "";
    fields.forEach((field) => {
      searchString += item[field].toString();
    });

    return searchString.toLowerCase().search(smallerTerm) !== -1;
  });
};

export { objectToArray, filterArrayByFields };
