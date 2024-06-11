function allParrafo(){

const all = document.getElementsByTagName('p')
// console.log(all)

const num = all.length

// console.log(num)

alert(`Hay ${num} elementos p dentro de este documento`)
}

function caja1P(){
    const caja1 = document.getElementById('caja1')
    console.log(caja1)
     
    const caja1p = caja1.getElementsByTagName('p')
    console.log(caja1p)

    const num = caja1p.length
    console.log(num)
    alert(`Hay ${num} elementos p dentro de la caja 1`)

}

function caja2P(){
    const caja2 = document.getElementById('caja2')
    console.log(caja1)
     
    const caja2p = caja2.getElementsByTagName('p')
    console.log(caja2p)

    const num = caja2p.length
    console.log(num)
    alert(`Hay ${num} elementos p dentro de la caja 2`)

}