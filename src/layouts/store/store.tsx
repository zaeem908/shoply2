import create from 'zustand'


export const useCounterStore = create<CounterStore>((set) => ({
    count:0,
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    name:'zaeem', 
    setName:(name) => set(({name}))
}));
