export const getRandomItem = ( from, howMany ) => {

    const max = from.length-1;
    const randomItems = [];
    for (let index = 0; index < howMany; index++) {
      const element = from[Math.floor(Math.random() * (max - 0 + 1)) + 0];
      randomItems.push(element);
    }
    return randomItems;
  }; 