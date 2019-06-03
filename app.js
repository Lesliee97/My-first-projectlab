//variable de mis paginas
const hojaUno = document.getElementById('hoja-uno');
const hojaDos = document.getElementById('hoja-dos');
const hojaTres = document.getElementById('hoja-tres');
const hojaCuatro = document.getElementById('hoja-cuatro');
const hojaCinco = document.getElementById('hoja-cinco');

hojaUno.style.display = 'block';
hojaDos.style.display = 'none';
hojaTres.style.display = 'none';
hojaCuatro.style.display = 'none';
hojaCinco.style.display = 'none';


//variable  de mis botones
const enviarSaludo = document.getElementById('enviar');
const programacion = document.getElementById('program');
const mujeresTech = document.getElementById('mujtech');
const resultado = document.getElementById('button-result');
const resultado2 = document.getElementById('button-result1');
const volverJugar = document.getElementById('button5');

// funcion que saluda y cambia de pagina uno a pagina dos
enviarSaludo.addEventListener("click", function(){
    const nombre = document.getElementById("name").value;
    const username= ("Hola" + " " + nombre);
    document.write = (username);
    hojaUno.style.display = 'none';
    hojaDos.style.display = 'block';
     // hojaTres.style.display = 'none';
});

//funcion que cambia de categorias a mi hoja de preguntas mujerestech
mujeresTech.addEventListener('click', function (){
hojaDos.style.display = 'none';
hojaCuatro.style.display = 'block';
});

//funcion que cambia de preguntas mujerestech a resultados
resultado2.addEventListener('click', function(){
    hojaCuatro.style.display ='none';
    hojaCinco.style.display ='block';

});

//funcion que cambia de categorias a mi hoja de preguntas de programacion 
programacion.addEventListener('click', function (){
    hojaDos.style.display = 'none';
    hojaTres.style.display = 'block';

});

//funcion que cambia de preguntas de programacion a resultados
resultado.addEventListener('click', function (){
    
    hojaTres.style.display = 'none';
    hojaCinco.style.display ='block';
});

//funcion que cambia de resultados a la segunda pagina
volverJugar.addEventListener('click', function (){
    hojaCinco.style.display = 'none';
    hojaDos.style.display = 'block';
});

