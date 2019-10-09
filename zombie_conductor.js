/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  this.direccion = direccion;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
}
/* Completar creacion del ZombieConductor */
ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;

/* Completar metodos para el movimiento y el ataque */

//Cuando tocan al jugador pierde todas las vidas
ZombieConductor.prototype.atacar = function(jugador) {
 jugador.vidas = 0;
}


//reutilizo el código de zombiecaminante y lo adapto al movimiento h o v
ZombieConductor.prototype.mover = function(){
  if (this.direccion == "horizontal"){
    this.x -= this.velocidad;
    if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
      this.velocidad *= -1;
    }
  } 
if (this.direccion == "vertical"){
      this.y -= this.velocidad;
      if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
        this.velocidad *= -1;
  }
}

}
