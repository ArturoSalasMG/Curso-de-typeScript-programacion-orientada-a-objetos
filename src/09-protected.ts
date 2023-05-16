class Animal{
    constructor(public name: string){}
    move(){
        console.log('Moving along!');
    }
    greeting(){
        console.log(`Hello, I'm ${this.name}`)
    }
    protected doSomething(){
        console.log('dooo');
    }
}

export class Dog extends Animal{
    constructor(
        name: string,
        public owner: string
    ){
        super(name); //desde el hijo estamos llamando al constructor del padre
    }
    woof(times: number): void{
        for (let index = 0; index < times; index++) {
            console.log(`Woof! ${this.name}`);
        }
        this.doSomething();
    }
    move() {
        console.log('moving as a dog');
        super.move(); //manda a llamar el metodo move del padre desde el hijo
    }
}

const bruno = new Dog('Bruno', 'Jaime');
bruno.woof(3);
bruno.move(); 