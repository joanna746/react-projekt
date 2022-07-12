const strContains = (stringOne, stringTwo) => {
    if (stringOne.toLowerCase().includes(stringTwo.toString().toLowerCase()))
    return true
    else return false

};

export default strContains;