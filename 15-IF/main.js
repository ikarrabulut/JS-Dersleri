let not = 85;

// Eğer
if(not >= 75){
    console.log("iyi");
}
// Yok eğer
else if(not >= 50){
    console.log("Orta");
}
// Değilse
else{
    console.log("Kötü");
}

let sonuc = (not => 75) ? "İyi" : (not >= 50) ? "Orta" : "Kötü";
console.log(sonuc);