//selecionando body, criando main e add main a body

let body = document.body
let main = document.createElement('main')
body.appendChild(main)

//criando tituo e adicionando a main
let title = document.createElement('p')
title.innerText='Virtual Market'
title.className=('title')
main.appendChild(title)

//criando div.top e add a main

let topList = document.createElement('div')
topList.className=('topList')
main.appendChild(topList)

let nameTop = document.createElement('p')
nameTop.className=('nameTop')
nameTop.innerText='item'
topList.appendChild(nameTop)

let valueTop = document.createElement('p')
valueTop.className=('valueTop')
valueTop.innerText='Price'
topList.appendChild(valueTop)

//criando lista de produtos
let total=[]

let listProducts = document.createElement("ul")
listProducts.className=('list_products')
main.appendChild(listProducts)

function item(name, value) {
    let product = document.createElement('li')

    let nameProduct = document.createElement('p')
    nameProduct.className=('nameProduct')
    nameProduct.innerText= name
    product.appendChild(nameProduct)

    let valueProduct = document.createElement('p')
    valueProduct.className=('valueProduct')
    valueProduct.innerText=(`R$ ${value}`)
    product.appendChild(valueProduct)

    listProducts.appendChild(product)
    total.push(value)
}
item('Uva Crimson', 44.99)
item('Vinho Canção', 17.98)
item('Agua de coco', 8.99)
item('Mamão', 9.98)
item('Água tônica', 17.98)



//*crianto total
//soma
let soma = 0
for (i=0;i<listProducts.childElementCount;i++){
    soma += total[i]
}

//html
let bottonList = document.createElement('div')
bottonList.className=('bottonList')
main.appendChild(bottonList)

let nameBotton = document.createElement('p')
nameBotton.className=('nameBotton')
nameBotton.innerText='Total'
bottonList.appendChild(nameBotton)

let valueBotton = document.createElement('p')
valueBotton.className=('valueBotton')
valueBotton.innerText=(`R$ ${soma}`)
bottonList.appendChild(valueBotton)

//*
let button = document.createElement('button')
button.className=('button')
button.innerText='Finalizar Compra'
main.appendChild(button)
