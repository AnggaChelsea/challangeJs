// function testFunction(awal, akhir) {
//     let isiNumber = [];
//     if (awal <= akhir) {
//         for (let i = awal; i <= akhir; i++) {
//             isiNumber.push(i);
//         }
//     } else {
//         for (let i = awal; i >= akhir; i--) {
//             isiNumber.push(i)
//         }
//     }
//     return isiNumber
// }
// console.log(testFunction(10, 1))
// console.log(testFunction(5, 8))

function testFunction(awal, akhir) {
    let isiNumber = [];
    if (awal <= akhir) {
        for (let i = awal; i <= akhir; i++) {
            isiNumber.push(i);
        }
    } else {
        for (let i = awal; i >= akhir; i--) {
            isiNumber.push(i)
        }
    }
    return isiNumber
}
console.log(testFunction(1, 6))
console.log(testFunction(180, 191))