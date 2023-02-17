console.log('Merhaba Dünya');

// Değişken türü ortak ise tek çatı alında birden fazla değişken tanımlanabilir
let ad = "ibrahim", soyad = "Karabulut", email = "i.karrabulut@gmail.com";
console.log("Benim adım "+ ad, soyad +" ve eposta adresim: "+ email);

// Değişkenden dizi ifadesi gibi içerik çekme
console.log("Adımın ilk harfi", ad[0]+"'dir"); 

// Değişken uzunluğunu sormak için
console.log("Mail adresi "+email.length+" karakterlidir."); 

// Kelimeleri büyütür
console.log(ad.toUpperCase()); 
// Kelimeleri küçültür
console.log(soyad.toLowerCase()); 
// Kelimeleri sistem diline göre büyüt
console.log(email.toLocaleUpperCase());

// İlk nerede kullanılmış
console.log("email adresinde m harfi ilk "+ email.indexOf("m") +". harfte kullanılmış");
// En son nerede kullanılmış
console.log("email adresinde m harfi en son "+ email.lastIndexOf("m") +". harfte kullanılmış");