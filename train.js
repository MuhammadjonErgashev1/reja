//Task E

function getReverse (text) {
  return text.split('').reverse().join('');
  
}
console.log(getReverse('hello'))



// //Task D

// function checkContent(string1, string2){
//   const matn1=string1.split("").sort().join();
//   const matn2=string2.split("").sort().join();

//   if(matn1===matn2){
//     return true;
//   } else{
//     return false;
//   }
// }
// console.log(checkContent("mitgroup","gmtiprou"));






// //Midtask C
// const moment = require("moment");

// class Shop {
//   constructor(item1, item2, item3) {
//     this.item1 = item1;
//     this.item2 = item2;
//     this.item3 = item3;
    
//   }

//   qoldiq(num1, num2, num3) {
//     this.num1 = num1;
//     this.num2 = num2;// agar metodda ishlatilayotgan parametr boshqa metodlar ichida ham ishlatilsa bunda this sifatida global qiymatlar qabul qilib olamiz.
//     this.num3 = num3;
//     console.log(`[${moment().format("HH:mm:ss")}] Qoldiq holati:`);
//     console.log(`${this.num1} ta ${this.item1}, ${this.num2} ta ${this.item2}, ${this.num3} ta ${this.item3} mavjud`);
//   }

//   sotish(s1, s2, s3) {
//     console.log(`[${moment().format("HH:mm:ss")}] Sotish harakati:`);

//     if (this.num1 >= s1) {
//       this.num1 -= s1;
//       console.log(`${s1} ta ${this.item1} sotildi`);
//     } else {
//       console.log(`${this.item1} mahsuloti yetarli emas`);
//     }

//     if (this.num2 >= s2) {
//       this.num2 -= s2;
//       console.log(`${s2} ta ${this.item2} sotildi`);
//     } else {
//       console.log(`${this.item2} mahsuloti yetarli emas`);
//     }

//     if (this.num3 >= s3) {
//       this.num3 -= s3;
//       console.log(`${s3} ta ${this.item3} sotildi`);
//     } else {
//       console.log(`${this.item3} mahsuloti yetarli emas`);
//     }
//   }

//   qabul() {
//     console.log(`[${moment().format("HH:mm:ss")}] Yangi qoldiq holati:`);
//     console.log(`${this.num1} ta ${this.item1} qoldi`);
//     console.log(`${this.num2} ta ${this.item2} qoldi`);
//     console.log(`${this.num3} ta ${this.item3} qoldi`);
//   }
// }


// const obj1 = new Shop("non", "lagmon", "cola");
// obj1.qoldiq(4, 5, 2);    
// obj1.sotish(2, 4, 1);     
// obj1.qabul();            


// function countDigits(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (!isNaN(str[i]) && str[i] !== " ") { 
//       count++;
//     }
//   }
//   return count;
// }


// console.log(countDigits("sdfha123bsdfaf324523467ew3wfsdf4u4nfnj434jf"));










// console.log("Jack Ma maslahatlari");

// const list = [
//     "yaxshi talaba boling",//0-20
//     "togri boshliq tanlang va ko'proq xato qiling",//20-30
//     "ozinggizga ishlashni boshlang",//30-40
//     "siz kuchli bo'lgan narsalarni qiling",//40-50
//     "yoshlarga investitsiya qiling",//50-60
//     "endi dam oing, foydasi yo'q",//60
// ];
// // callback
// function maslahatBering(a, callback){
//     if(typeof a!=="number") callback("insert a number", null);
//     else if(a<=20) callback(null,list[0]);
//     else if(a>20 && a<=30) callback(null,list[1]);
//     else if(a>30 && a<=40) callback(null,list[2]);
//     else if(a>40 && a<=50) callback(null,list[3]);
//     else if(a>50 && a<=60) callback(null,list[4]);
//     else{
//     //    setTimeout(() => {
//     //          callback(null,list[5]);
//     //    }, 5000);
//       setInterval(function()  {
//             callback(null,list[5]);
//       }, 1000);

//     }
// };

// console.log("passed here 0");
// maslahatBering(70,(err,data)=>{
//     if(err) console.log("Error:", err);
//     else{
//         console.log("javob:",data);
//     }
// });
// console.log("passed here 1");

// // async function maslahatBering(a){
// //     if(typeof a!=="number") throw new Error("insert a number");
// //     else if(a<=20) return list[0];
// //     else if(a>20 && a<=30) return list[1];
// //     else if(a>30 && a<=40) return list[2];
// //     else if(a>40 && a<=50) return list[3];
// //     else if(a>50 && a<=60) return list[4];
// //     else{
// //         return new Promise((resolve, reject)=>{
// //                setTimeout(() => {
// //                 resolve(list[5]);
// //                 }, 6000);
// //         });
    
// //     }
// // };
// // //then/catch
// // // console.log("passed here 0");
// // // maslahatBering(65)
// // // .then((data)=>{
// // //     console.log("javob:",data)
// // // })
// // // .catch((err)=>{
// // //     console.log("error:",err)
// // // });
// // // console.log("passed here 1")

// // //async//await
// // async function run(){
// //     let javob = await maslahatBering(20);
// //     console.log(javob);
// //      javob = await maslahatBering(31);
// //     console.log(javob);
// //      javob = await maslahatBering(65);
// //     console.log(javob);
// // }
// // run();