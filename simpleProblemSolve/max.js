const array = [12, 43, 1, 34, 7, 12, 64, 78];
let max = array[0];
for (let i = 0; i < array.length; i++) {

    if (array[i] > max) {
        max = array[i];
    }

}
console.log(max);