let ogrenci = {
  ad: 'İbrahim',
  soyad: 'Karabulut',
  eposta: 'i.karrabulut@gmail.com',
  sinif: 12,
  dersler: ['Matematik', 'Fizik', 'Kimya']
}

console.log(ogrenci)
console.log(ogrenci.ad)
console.log(ogrenci['dersler'])
console.log(ogrenci.dersler[2])

console.log(ogrenci.sinif)
ogrenci.sinif = 25
console.log(ogrenci.sinif)

console.log(typeof ogrenci)