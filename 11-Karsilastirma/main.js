let yas = 25;
// Değerler aynı mı
console.log(yas == 25);
console.log(yas == "25");

// Değerler eşit değil mi
console.log(yas != 25); 
console.log(yas != "25");

// Değerlerin türü dahil aynı mı
console.log(yas === "25"); 

// Ya değer aynı tür farklı, Ya değer farklı tür aynı
console.log(yas !== "25");
console.log(yas !== 24); 

// Değişken türünü sormak için
console.log(typeof yas); 

// Değişkenin türünü değiştirmek için
yas = String(yas);
console.log(typeof yas);

let sayi = Number("Ali");
console.log(sayi);

let boolean = Boolean(""); // Boş olduğu için false
let boolean1 = Boolean("a"); // Dolu olduğu için true
let boolean2 = Boolean(0); // 0 olduğu için false
let boolean3 = Boolean(1); // 1 olduğu için true
console.log(boolean,boolean1,boolean2,boolean3);