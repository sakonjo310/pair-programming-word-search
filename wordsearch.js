//Created by Satoe and Corbin

const wordSearch = (letters, word) => {
    if (letters.length > 0) {
        let reverseWord = word.split('').reverse().join('');
        const horizontalJoin = letters.map(ls => ls.join(''))
// Check horiontally
        for (let l of horizontalJoin) {
            if (l.includes(word) || l.includes(reverseWord)) {
                return true;
            }
        }
// Check vertically
        let verticalArrs = [];
        for (let i = 0; i < letters[0].length; i++) {
            let verticalArr = [];
            for (let j = 0; j < letters.length; j++) {
                verticalArr.push(letters[j][i]);
            }
            verticalArrs.push(verticalArr);
        }
        verticalJoin = verticalArrs.map(vls => vls.join(''));

        for (let v of verticalJoin) {
            if (v.includes(word) || v.includes(reverseWord)) {
                return true;
            }
        }

// Check diagonally
        const rows = horizontalJoin.length;
        const cols = horizontalJoin[0].length;
        let diagArr = [];
        let diagArr2 = [];

        for (let n = 0; n < cols + rows - 1; n++) {
            let r = n;
            let c = 0;
            let str = '';
            while (r >= 0 && c < cols) {
                if (r < rows) {
                    str += horizontalJoin[r][c];
                }
                r -= 1;
                c += 1;
            }
            diagArr.push(str);
        }

        for (let n = 0; n < cols + rows - 1; n++) {
            let r = n;
            let c = cols - 1;
            let str = '';
            while (r >= 0 && c >= 0) {
                if (r < rows) {
                    str += horizontalJoin[r][c];
                }
                r -= 1;
                c -= 1;
            }
            diagArr.push(str);
        }

        for (let d of diagArr) {
            if (d.includes(word) || d.includes(reverseWord)) {
                return true;
            }
        }

        return false;
    }
    return false;
};


module.exports = wordSearch