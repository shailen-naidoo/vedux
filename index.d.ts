interface State {
    [x: string]: any;
}
declare class Store {
    private state;
    constructor(state?: State);
    getState(): State;
    commit(handler: (state: State) => State): State;
}
declare const _default: {
    Store: typeof Store;
};
export default _default;
//# sourceMappingURL=index.d.ts.map