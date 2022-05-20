function Mayores(numeros){

// const numeros = [1,2,3,4,5,6,6,6,7,7,7,8,8,8,9,9,9];
let mayor = 0;
let smayor = 0;


for (let i = 0; i < numeros.length ; i++) {
    if(numeros[i] > mayor){
        mayor = numeros[i]
    };
};

console.log("El mayor numero es: " + mayor);

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] < mayor && numeros[i] > smayor){
        smayor = numeros[i];
    };
    
};

console.log("El segundo mayor es: " + smayor);

}

numeros = [1,2,3,4,5,6,6,6,7,7,7,8,8,8,9,9,9];

Mayores(numeros)