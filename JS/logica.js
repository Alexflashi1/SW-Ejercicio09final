//Declaron objetos
var miobjeto = {
  nombre: "Juan",
  edad: 30
}; 
//Se crea la función para llamar al objeto
function objeto01(){
    var mensaje = "Mi objeto declarado es:  " + miobjeto.nombre+" "+miobjeto.edad;
    alert(mensaje); 
    }
//Este es el primer objeto

//Esta función nos sirve para cambiar los valores de los objetos creados
function objeto02(){
    var miobjeto = {
     nombre: "Juan",
     edad: 30,
     mostrardatos: function() {
       var mensaje = "Nombre: " + miobjeto.nombre + "\r\n";
        mensaje += "Edad: " + miobjeto.edad;
        alert(mensaje);
      },
      cambiarnombre: function(nombrenuevo) {
       miobjeto.nombre = nombrenuevo;
      }
    };
    miobjeto.mostrardatos();  // "Nombre: Juan Edad: 30"
    miobjeto.cambiarnombre("José");
    miobjeto.mostrardatos();  


    }
    //Reemplazar los valores originales
function objeto03(){
    var miobjeto = {
    nombre: "Alexis",
    edad: 30,
      mostrardatos: function() {
      var mensaje = "Nombre: "  + miobjeto.nombre + "\r\n";
      mensaje += "Edad: " + miobjeto.edad;
      alert(mensaje);
  },
    cambiarnombre: function(nombrenuevo) {
    var nombreviejo = miobjeto.nombre;
    miobjeto.nombre = nombrenuevo;
    return nombreviejo;
} }; 
var anterior = miobjeto.cambiarnombre("José");
 alert("El valor original es: "+anterior+ "\n El nuevo nombre es: "+ miobjeto.nombre); 


    }

    //función para cambiar nombre con la palabra this
    function objeto04(){
      var miobjeto = {
      nombre: "Juan",
      edad: 30,
      mostrardatos: function() {
        var mensaje = "Nombre: " + this.nombre + "\r\n";
        mensaje += "Edad: " + this.edad;
},
      cambiarnombre: function(nombrenuevo) {
        var nombreviejo = this.nombre;
        this.nombre = nombrenuevo;
        return nombreviejo;
} }; 
    var anterior = miobjeto.cambiarnombre("José");
    alert("Función para cambiar los valores con la palabra reservada this"+"        El nombre anterior era: " + anterior);  



    }
    //Crear constructores
    function objeto05(){
        var constructor = function() {
       var obj = {
        nombre: "Juan",
        edad: 30,
        mostrarnombre: function() {
        alert(this.nombre) ;
  },
        cambiarnombre: function(nombrenuevo) {
        this.nombre = nombrenuevo;  
  }
  };
        return obj;
  };
        var empleado = constructor();
        empleado.mostrarnombre(); // “Juan”



    };
    //Enviar valores iniciales a un constructor
     function objeto06(){
     var constructor = function(nombreinicial) {
      var obj = {
      nombre: nombreinicial,
      edad: 30,
      mostrarnombre: function() {
          alert(this.nombre);
    },
      cambiarnombre: function(nombrenuevo) {
          this.nombre = nombrenuevo;
    }
}; 
    return obj;
};
    var empleado = constructor("Juan");
    empleado.mostrarnombre();  // “Juan


}

//Crear los objetos con los mismos constructores
function objeto07(){
  var constructor = function(nombreinicial) {
  var obj = {
    nombre: nombreinicial,
    edad: 30,
    mostrarnombre: function() {
      alert(this.nombre);
    },
    cambiarnombre: function(nombrenuevo) {
      this.nombre = nombrenuevo;
} }; 
  return obj;
};
var empleado1 = constructor("Juan");
var empleado2 = constructor("Ramiro");
var empleado3 = constructor(" Arturo");
alert(empleado1.nombre + ", " + empleado2.nombre + ","  +
empleado3.nombre);



}
//Igual que el la función 07, esta en su lugar declara las variables en lugar de propiedad del objeto
function objeto08(){

  var constructor = function() {
  var nombre = "Juan";
  var edad = 30;
  var obj = {
    mostrarnombre: function() {
        alert(nombre);
    },
    cambiarnombre: function(nombrenuevo) {
      nombre = nombrenuevo;
} }; 
  return obj;
};
var empleado = constructor();
empleado.mostrarnombre();  

}
//Utilizar el operador New
function objeto09(){

  function MiObjeto() {
  this.nombre = "Juan";
  this.edad = 30;
  this.mostrarnombre = function(){
    alert(this.nombre);
  };
  this.cambiarnombre = function(nombrenuevo){
    this.nombre = nombrenuevo;
  };
}
var empleado = new MiObjeto();
empleado.mostrarnombre();  

}
function objeto10(){
  function MiObjeto(nombreinicial, edadinicial){
  this.nombre = nombreinicial;
  this.edad = edadinicial;
  this.mostrarnombre = function(){
    alert(this.nombre);
  };
  this.cambiarnombre = function(nombrenuevo){
    this.nombre = nombrenuevo;
  };
}
var empleado = new MiObjeto("Erick", 55);
empleado.mostrarnombre(); 

}