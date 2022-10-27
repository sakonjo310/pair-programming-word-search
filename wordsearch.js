//Created by Satoe and Corbin

const wordSearch = (letters, word) => {
    if (letters.length > 0) {
        let reverseWord = word.split('').reverse().join('');
        const horizontalJoin = letters.map(ls => ls.join(''))
        for (let l of horizontalJoin) {
            if (l.includes(word) || l.includes(reverseWord)) {
                return true;
            }
        }
        let verticalArrs = [];
        for (let i = 0; i < letters[0].length; i++) {
            let verticalArr = [];
            for (let j = 0; j < letters.length; j++) {
                verticalArr.push(letters[j][i]);
            }
            verticalArrs.push(verticalArr);
        }
        verticalJoin = verticalArrs.map(vls => vls.join(''));

        for (let arr of verticalJoin) {
            if (arr.includes(word) || arr.includes(reverseWord)) {
                return true;
            }
        }

        return false;
    }
    return false;
};



module.exports = wordSearch