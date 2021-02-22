let tryValidations = {
    alreadyInserted: function(inputLetter,trieds) {
        let result = false
        const check = (value) => {
            if (inputLetter == value) {
                result = true
            }
        }
        trieds.forEach(check)
        return result
    },
    letterCheck: function(inputLetter, word) {
        let result = [false]
        for (let index in word) {
            if (word[index] == inputLetter) {
                result[0] = true
                result.push(index.toString())
            }
        }
        return result
    }

}

export default tryValidations