// Değişken
let x = 0;
// Görevi
do{
    console.log(x);
    x++;
}while(x<10); // Koşulu

let isimler = ["Muhammet", "Ahmet", "Mehmet", "Mahmut", "Mustafa"];
let y=0; 
do{
    console.log(isimler[y]);
    y++;
}while(y<isimler.length)
console.log("Dizi döngüsü bitti.");

let z=1;
do{
    document.write(`<h${z}>${z--, isimler[z]}</h${z++, z}>`);
    z++;
}while(z<=isimler.length)