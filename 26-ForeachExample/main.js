let menu = ["anasayfa", "hakkimizda", "galeri", "iletişim"]

const ul = document.querySelector("#main")
let html = ``
menu.forEach(
  link => {
    html += `<li>${link}</li>`
  }
)
ul.innerHTML = html