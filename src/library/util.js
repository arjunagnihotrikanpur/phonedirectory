const generateRandomNumber = function(){
    const min = 1000000000; 
    const max = 9999999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {generateRandomNumber}