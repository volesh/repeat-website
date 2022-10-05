import {combineReducers, createStore} from "redux";

const pizzaReducer = (state={pizza:[]}, action) =>{
    switch (action.type){
        case 'ADD_PIZZA':
            state.pizza.push(action.payload)
            let pizza = state.pizza
            console.log(state);
            return {...state, pizza: [...pizza]}
        case 'DEL_PIZZA':
            return state
        default:
            return state
    }
}

const drinksReducer = (state={drinks:[]}, action) =>{
    switch (action.type){
        case 'ADD_DRINK':
            state.drinks.push(action.payload)
            let drinks = state.drinks
            console.log(state);
            return {...state, drinks: [...drinks]}
        case 'DEL_DRINL':
            return state
        default:
            return state
    }
}

const sidesReducer = (state={sides:[]}, action) =>{
    switch (action.type){
        case 'ADD_SIDE':
            state.sides.push(action.payload)
            let sides = state.sides
            console.log(state);
            return {...state, sides: [...sides]}
        case 'DEL_SIDE':
            return state
        default:
            return state
    }
}

const dessertsReducer = (state={desserts:[]}, action) =>{
    switch (action.type){
        case 'ADD_DESSERT':
            return state
        case 'DEL_DESSERT':
            return state
        default:
            return state
    }
}

let reducer = combineReducers({
    pizzaReducer,
    dessertsReducer,
    drinksReducer,
    sidesReducer
})

let store = createStore(reducer)

export {store}