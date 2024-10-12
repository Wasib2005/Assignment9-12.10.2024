
export const saveToLS = (name, what) => {
  const data = JSON.stringify(what);
  localStorage.setItem(name, data);
};

export const takeFromLS = (what) => {
  const tempData = localStorage.getItem(what);
  if (tempData) {
    const data = JSON.parse(tempData);
    return data;
  } else {
    return null;
  }
};
