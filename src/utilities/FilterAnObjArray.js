export const filterAnObjArray = (from, whatWhat) => {
    console.log(from)
    const filteredObj = from.filter(item => {
        const foundObj = whatWhat.some(target => {
            const [key, value] = target;
            return item[key] === value;
        });

        return foundObj;
    });

    return filteredObj;
};