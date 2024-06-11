const frutas = ['manzana', 'banana', 'palta', 'pera']

console.log(frutas)
document.write(frutas)

/*objetivo: imprimir "tenemos manzana . . . tenemos banana"*/

for(let i = 0; i< frutas.length; i++){
    console.log('tenemos ' + frutas[i])
}
