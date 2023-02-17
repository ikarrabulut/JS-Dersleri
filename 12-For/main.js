// değişken, değişken koşulu, değişken görevi
for(let x=0; x<10; x++){
    console.log(x);
}

let isimler = ["Ahmet", "Mehmet", "Mustafa"];
for(let y=0; y<isimler.length; y++){
    console.log(isimler[y]);
}
console.log("Dizi döngüsü bitti.");

for(let y=0; y<isimler.length; y++){
    document.write(`<h3>${isimler[y]}</h3><br>`);
}