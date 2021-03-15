import createStore from "./store.js";

function reducer(action, oldState){
    switch(action.type){
      case "CHANGE_NAME":
        return {
          role:oldState.role,
          name:action.payload.name,
          hobbies:oldState.hobbies
        }
      case "CHANGE_HOBBIES":
        return {
          role:oldState.role,
          name:oldState.name,
          hobbies:action.payload.hobbies
        };
      case "CHANGE_HOBBIES":
        return {
          role:oldState.role,
          name:oldState.name,
          hobbies:action.payload.hobbies
        };
      default:
        return oldState;
    }
  }
  

var initialState = {
    name:"Devang Paliwal",
    role:"EM", 
    hobbies:["swiming","dancing","laughing"]
  };
  let myStore = createStore(initialState, reducer);
  console.log(myStore);

  function reactOnEvent(){
    console.log("Reacted ... . :) ");
  }
  
  myStore.subscribe(reactOnEvent);
  
  console.log(myStore.getState());
  
  myStore.dispatch({
    type:"CHANGE_NAME",
    payload:{name:"Goldi"}
  });

  myStore.unsubscribe(reactOnEvent);
  
  
  myStore.dispatch({
    type:"CHANGE_NAME",
    payload:{name:"Sidd"}
  });


  console.log(myStore.getState());
  

  
  
  