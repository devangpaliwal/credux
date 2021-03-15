
import createStore from "./store.js";
import constants from "./constants";

var initialState = {
    name:"Devang Paliwal",
    role:"EM", 
    hobbies:["swiming","dancing","laughing"]
};


test('Create Store Object', () => {
    expect(
        createStore({}, function(){})
    ).not.toBeNull();
});

test('An error when reducer is null', () => {
    expect(() => createStore({})).toThrow(Error);
    expect(() => createStore({})).toThrow(constants.error.reducerIsMandatory);
});


test('getState to return the correct state', () => {
    let myStore = createStore(initialState, function(){}); 
    expect(myStore.getState()).toBe(initialState);
    
});



