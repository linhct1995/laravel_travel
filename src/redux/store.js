// import {createStore} from "redux";
// const defaultState ={
//     num : 0 
// }
// const reducers = (state=defaultState , action) =>{
//     switch(action.type){
//         case "ACTION" : return {num:Math.ceil(Math.random()*10)};
//         case "RESET" : return {num:0};
//         default : return state;
//     }
// }
// const store = createStore(reducers);
// export default store;

// buổi 2 redux

import {createStore} from "redux";
const defaultState ={
        time : 10,
    }
const reducers = (state = defaultState , action) =>{
    switch(action.type){
        case "START" : return {
           time : state.time -1
        };
        case "NEXT" : return {
            time : state.time +1 
        };
        case "BACK" : return {
            time : state.time -1
        }
        default : return state;

    }
}
const store = createStore(reducers);
export default store;