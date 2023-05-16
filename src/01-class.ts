const date = new Date();
date.getHours();
date.getTime();
date.toISOString();

export class MyDate {
    year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(2023, 5, 12); //con el const myDate creamos una estancia para el objeto

console.log(myDate);