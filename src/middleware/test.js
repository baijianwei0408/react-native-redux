export default test = store => next => action => {
    console.log('state before ==>', store.getState())
    console.log('dispatch', action);

    let result = next(action);

    console.log('state after ==>', store.getState());

    return result;
}