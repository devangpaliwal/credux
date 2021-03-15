import constants from "./constants";

let state = {};
let creducer = function(){}
let listeners = [];

let subscribe = (newListener)=>{
    
    if(listeners.length == 0){
        listeners.push(newListener);
        return;
    }
    listeners.forEach((listener)=>{
        if(newListener!==listener){
            listeners.push(newListener);
        }
    });
}

let unsubscribe = (oldListener)=>{
    listeners = listeners.filter((listener)=>{
       return oldListener!==listener;
    })
}

let thunk = (callback, request, delay)=>{
    if(delay){
      setTimeout(()=>{
        request(callback);
      },delay)
    }
    request(callback);
}

let getState = ()=>{
    return state;
}

let dispatch = (action)=>{
    if(action && action.type){
        /* Get the modified state object via reducer */
        state = creducer(action, state);
        /* Notify each listener about the state change */
        listeners.forEach((listener)=>{
            listener();
        });
    }
}

function createStore(initialState, reducer){
    if(!reducer){
        throw new Error(constants.error.reducerIsMandatory);
    }
    state = initialState;
    creducer = reducer;

    return {
        getState:getState,
        dispatch:dispatch,
        subscribe:subscribe,
        unsubscribe:unsubscribe,
        thunk:thunk
    }
  }
export default createStore;