export class MyDate {
    // year: number;
    // private month: number;
    // #day: number;

    constructor(
        public year: number = 1993,
        public month: number = 7,
        private day: number = 3
    ) {
        // this.year = year;
        // this.month = month;
        // this.#day = day;
    }

    printFormat(): string {
        const { year } = this;
        const day = this.addPadding(this.day);
        const month = this.addPadding(this.month);
        return `${day}/${month}/${year}`;
    }

    add(amount: number, type: 'days' | 'months' | 'years') {
        if (type === 'days') this.day += amount;
        if (type === 'months') this.month += amount;
        if (type === 'years') this.year += amount;
    }

    addPadding(value: number) {
        if (value < 10) return `0${value}`;
        return `${value}`;
    }
}

const myDate = new MyDate(2020);
const myDate2 = new MyDate(2021);
console.log({ myDate });
console.log(myDate.printFormat());
console.log(myDate2.printFormat());