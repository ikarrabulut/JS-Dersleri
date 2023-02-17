function bastir1(ad, soyad) {
    document.write(ad, soyad);
}
bastir1("İbrahim", "Karabulut");



function bastir2(ad = "Adınız", soyad = "Soyadınız") {
    document.write(`${ad} ${soyad}`);
}
bastir("İbrahim", "Karabulut");