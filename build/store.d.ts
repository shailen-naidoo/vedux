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
export { Store };
