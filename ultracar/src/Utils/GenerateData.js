const generateDate = () => {
    const date = new Date();
    return `${date.getDate()}:${
        date.getMonth() + 1
    }:${date.getFullYear()}  H${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export default generateDate