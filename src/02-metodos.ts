export class MyDate {
    year: number;
    month: number;
    day: number;
    constructor(year: number, month: number, day: number){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    printFormat(): string{
        return `${this.day}/${this.month}/${this.year}`
    }

    add(amount: number, type: 'days' | 'months' | 'years'){
        if (type === 'days') {
            this.day += amount;
            if (this.day > 31) {
                
            }
        }
        if (type === 'months') {
            this.day += amount;
        }
        if (type === 'years') {
            this.day += amount;
        }
    }
}

const myDate = new MyDate(2023, 5, 12); //con el const myDate creamos una estancia para el objeto
console.log(myDate.printFormat());
myDate.add(50, 'days');
console.log(myDate.day);
console.log(myDate.month);
console.log(myDate.year);
console.log(myDate.printFormat());

