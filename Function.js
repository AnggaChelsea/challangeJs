// // function testFunction(awal, akhir) {
// //     let isiNumber = [];
// //     if (awal <= akhir) {
// //         for (let i = awal; i <= akhir; i++) {
// //             isiNumber.push(i);
// //         }
// //     } else {
// //         for (let i = awal; i >= akhir; i--) {
// //             isiNumber.push(i)
// //         }
// //     }
// //     return isiNumber
// // }
// // console.log(testFunction(10, 1))
// // console.log(testFunction(5, 8))

// // function testFunction(awal, akhir) {
// //     let isiNumber = [];
// //     if (awal <= akhir) {
// //         for (let i = awal; i <= akhir; i++) {
// //             isiNumber.push(i);
// //         }
// //     } else {
// //         for (let i = awal; i >= akhir; i--) {
// //             isiNumber.push(i)
// //         }
// //     }

// //     return isiNumber
// // }
// // console.log(testFunction(1, 6))
// // console.log(testFunction(180, 191))

// const harga = [{
//         name: 'waper',
//         harga: 200
//     },
//     {
//         name: 'kukun',
//         harga: 300
//     },
// ];

// callBack
// const beli = (saldo, name, cb) => {
//     const i = harga.findIndex((e) => e.name === name);
//     if (i > 0) {
//         const sisaSaldo = (saldo - harga[i].harga);
//         cb(null, sisaSaldo);
//     } else {
//         cb('jajan entong')
//     }
// };

// beli(1000, ' waper', (e, sisaSaldo) => {
//     if (e) {
//         console.log('err', e);
//     } else {
//         console.log('berhasil', sisaSaldo);
//     }
// })