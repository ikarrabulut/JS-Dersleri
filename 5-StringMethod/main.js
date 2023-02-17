let adSoyad = "İbrahim Karabulut";

// 0 dan 5 e kadar bastır
console.log(adSoyad.slice(0,5));
console.log(adSoyad.substring(0,5));

// 5 den başla 5 adım ilerle
console.log(adSoyad.substr(5,5));

// 2.bölmeyi 1.bölmenin yerine ekle
console.log(adSoyad.replace("İ", "I"));