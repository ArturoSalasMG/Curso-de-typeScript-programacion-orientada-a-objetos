export class Alumnos {
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
}

const alumno1 = new Alumnos('Arturo', 'Salas', 8, 7, 8, 5);
console.log(alumno1.impirmirCalif);
console.log(`la calificacion promedio es: `, alumno1.promedio);
const alumno2 = new Alumnos('Raul', 'Navarrete', 10, 9, 8, 9);
console.log(alumno2.impirmirCalif);
console.log(alumno2.promedio);