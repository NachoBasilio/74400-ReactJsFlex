const productosLibreria = [
    {
        id: 1,
        nombre: "Cuaderno A4",
        categoria: "Papelería",
        img: "https://acdn.mitiendanube.com/stores/001/144/668/products/766311-d9d4cc98a8d32f30c215915604540232-640-0.png",
        precio: 1200
    },
    {
        id: 2,
        nombre: "Bolígrafo Azul",
        categoria: "Escritura",
        img: "https://static.vecteezy.com/system/resources/previews/008/494/121/non_2x/blue-pen-transparent-png.png",
        precio: 250
    },
    {
        id: 3,
        nombre: "Resaltadores Pack x5",
        categoria: "Escritura",
        img: "https://img.lovepik.com/element/40023/2859.png_1200.png",
        precio: 1450
    },
    {
        id: 4,
        nombre: "Regla 30cm",
        categoria: "Accesorios",
        img: "https://images.vexels.com/media/users/3/141496/isolated/lists/b18ef50aaea15763c58f6edb6a21f4ac-regla-de-madera.png",
        precio: 400
    },
    {
        id: 5,
        nombre: "Carpeta A4",
        categoria: "Organización",
        img: "https://w7.pngwing.com/pngs/856/273/png-transparent-ring-binder-ofysmen-file-folders-a4-price-iceman-angle-cardboard-office.png",
        precio: 850
    },
    {
        id: 6,
        nombre: "Goma de borrar",
        categoria: "Papelería",
        img: "https://static.vecteezy.com/system/resources/thumbnails/011/660/662/small/3d-eraser-icon-illustration-png.png",
        precio: 150
    },
    {
        id: 7,
        nombre: "Tijeras escolares",
        categoria: "Accesorios",
        img: "https://static.vecteezy.com/system/resources/previews/024/090/471/non_2x/green-scissors-school-supply-free-png.png",
        precio: 950
    },
    {
        id: 8,
        nombre: "Lápiz HB",
        categoria: "Escritura",
        img: "https://simball.com.ar/wp-content/uploads/escritura/IMG_002%20copy.png",
        precio: 300
    },
    {
        id: 9,
        nombre: "Cartulina blanca",
        categoria: "Papelería",
        img: "https://camoga.ar/media/catalog/product/cache/17183a23c5d57b885c9e1f3d66234d68/1/8/18040188---01.png",
        precio: 50
    },
    {
        id: 10,
        nombre: "Marcadores permanentes Pack x4",
        categoria: "Escritura",
        img: "https://acdn.mitiendanube.com/stores/001/570/838/products/trabi1-fcce30046a1271084216881369407323-640-0.png",
        precio: 1750
    }
];

const forEachCoder = (arry, fun) => {
    for (let i = 0; i < arry.length; i++) {
        fun(arry[i])
    }
}

productosLibreria.forEach(el => {
    console.log(el.nombre)
})

forEachCoder(productosLibreria, el => {
    console.log(el.nombre)
})


const mapCoder = (arry, fun) => {
    const newArray = []
    for (let i = 0; i < arry.length; i++) {
        newArray.push(fun(arry[i]))
    }
    return newArray
}

const arrayMapeadoConNuestroPropioMap = mapCoder(productosLibreria, (el)=>{
    return el.nombre
})

console.log(arrayMapeadoConNuestroPropioMap)


const arrayMapeadoConMap = productosLibreria.map((el)=>{
    return el.nombre
})

console.log(arrayMapeadoConMap)