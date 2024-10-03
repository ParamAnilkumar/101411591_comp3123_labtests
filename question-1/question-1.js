function lowerCaseWords(inputs){
    return new Promise((resolve, reject) => {
        if (!Array.isArray(inputs)) {
            reject(new Error("Input must be an array."));
        }

        const filteredStrings = inputs.filter(item => typeof item === 'string');
        const lowerCasedWords = filteredStrings.map(word => word.toLowerCase());

        if (lowerCasedWords.length > 0) {
            resolve(lowerCasedWords);
        } else {
            reject(new Error("No valid string elements to convert."));
        }
    });
}


const mixedArray = ['PIZZA',10,true,25,false,'Wings']
console.log(lowerCaseWords(mixedArray))

