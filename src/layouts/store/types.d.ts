interface CounterStore {
    count:number,
    name:string,
    setName:(name:string) => void,
    increment: () => void,
    decrement: () => void
}
