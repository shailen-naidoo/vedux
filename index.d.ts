import { VueConstructor } from 'vue';
interface State {
    [x: string]: any;
}
declare class Store {
    private state;
    private stateObserver;
    constructor(state?: State);
    getState(): State;
    commit(handler: (state: State) => State): State;
    subscribe(): {
        result: (handler: (state: State) => void) => void;
    };
}
declare const Vedux: {
    install(vue: VueConstructor<import("vue").default>): void;
};
export { Store, Vedux };
