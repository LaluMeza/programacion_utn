const nombre = prompt('Ingrese su nombre','')
const nota = parseInt(prompt('Ingrese su nota',''))

if(Number.isNaN(nota)){
    document.write(`La nota ingresada no es valida`)    
} else if(nota >=4){
    document.write(`${nombre} estas aprobada/o con un ${nota}`)
    console.log(`${nombre} estas aprobada/o con un${nota}`)
} else {
    document.write(`${nombre} estas desaprobada/o con un ${nota}`)
    console.log(`${nombre }estas desaprobada/o con un ${nota}`) 
}