class Alumnos {
  constructor(
    private _nombre: string,
    private _apellido: string,
    private _calificacion1: number,
    private _calificacion2: number,
    private _calificacion3: number,
    private _calificacion4: number,
  ) {}

  get impirmirCalif(): string{
    return `${this._nombre} ${this._apellido} calificacion1: ${this._calificacion1}  calificacion1: ${this._calificacion2}  calificacion1: ${this._calificacion3}  calificacion1: ${this._calificacion4}`;
  }

  get promedio(): number{
    let average = ( this._calificacion1 + this._calificacion2 + this._calificacion3 + this._calificacion4)/4;
    return average;
  }

  set calificacion1(newCalif1 : number){
    if (newCalif1 >= 1 && newCalif1 <= 10) {
      this._calificacion1 = newCalif1;
    }else{
      throw new Error('modificacion invalida');
    }
  }
}

const alumno1 = new Alumnos('Arturo', 'Salas', 5, 7, 8, 5);
console.log(alumno1.impirmirCalif);
alumno1.calificacion1 = 10;
console.log(`la nueva calificacion cambio a: `, alumno1.impirmirCalif)
console.log(`la calificacion promedio es: `,alumno1.promedio);



const alumno2 = new Alumnos('Raul', 'Navarrete', 10, 9, 8, 9);
console.log(alumno2.impirmirCalif);
console.log(`la calificacion promedio es: `,alumno2.promedio);

