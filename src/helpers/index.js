const compareFnBySortType = {
  abv_ascending: (a, b) => a.abv - b.abv,
  abv_descending: (a, b) => b.abv - a.abv,
  name_ascending: (a, b) => a.name.localeCompare(b.name),
  name_descending: (a, b) => b.name.localeCompare(a.name),
};

export const sortArray = (array, sortBy) => [...array].sort(compareFnBySortType[sortBy]);
