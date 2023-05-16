class Animal{
    constructor(public name: string){}
    move(){
        console.log('Moving along!');
    }
    greeting(){
        console.log(`Hello, I'm ${this.name}`)
    }
}

export class Dog extends Animal{
    constructor(
        name: string,
        public owner: string
    ){
        super(name);
    }
    woof(times: number): void{
        for (let index = 0; index < times; index++) {
            console.log('Woof!');
        }
    }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const bruno = new Dog('Bruno', 'Jaime');
bruno.move();
console.log(bruno.greeting());
bruno.woof(10);
console.log(bruno.owner);