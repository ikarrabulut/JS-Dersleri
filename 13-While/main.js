// Değişken
let x = 0;
// Koşul ve görevi
while(x<10){
    console.log(x);
    x++;
}

let isimler = ["Muhammet", "Ahmet", "Mehmet", "Mahmut", "Mustafa"];
let y=0; 
while(y<isimler.length){
    console.log(isimler[y]);
    y++;
}
console.log("Dizi döngüsü bitti.");

let z=1;
while(z<=isimler.length){
    document.write(`<h${z}>${z--, isimler[z]}</h${z++, z}>`);
    z++;
}