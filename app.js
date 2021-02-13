// EJERCICIO 1
 let datos = (nombre,apellido,edad)=>`hola mi nombre es ${nombre} ${apellido} y mi edad ${edad}`

console.log(datos("sebastián","yabiku","33"))


// EJERCICO 2
let sumar = (num1,num2,num3)=> num1**3 + num2**3 + num3**3 ;

console.log(sumar(1,5,9));
    

// EJERCICO 3
function cuadrado(x) { 
    return x*x;
}
let operacion=cuadrado(5);
console.log(operacion)


// EJERCICO 4
let superiores = ['hombros', 'brazos', 'tronco'],
  inferiores = ['pelvis', 'piernas', 'rodillas'],
  cuerpo = ['cabeza', ...superiores, ...inferiores, 'pies'];
console.log(cuerpo); 
console.log(...cuerpo);


// EJERCICO 5
function random (elemento){
    return elemento = "2";
}
let filtrados = ["soy","una","persona","con",2,"hermanos"].filter(random);
console.log(filtrados)



// EJERCICO 6
function valores (){
    let numeros= (5,4,3,2,1);
        resultado=Math.max(numeros);
        resultado2=Math.min(numeros)
    console.log(resultado2 , resultado)
    
}
valores()



// EJERCICO 9
function palabras(){
    let palabra = "HOLA";
    let letra = palabra.charAt(0);
    let letra2 = palabra.charAt(3);
    console.log(`la letra ${letra} tiene el indice 0 y la letra ${letra2} tiene el indice 3`);
}
palabras()


// EJERCICO 12
const personas=[
    {name:`zeuxis`},
    {name:`pedro`},
    {name:`juan`}
]
personas.forEach(persona => {
    console.log([persona.name])
})



// EJERCICIO 16
for (let i = 0; i <= 5; i++) {
    
    console.log(i);
    if(i == 5){
        break;
            }
   
}

    
    

