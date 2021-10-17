const initialState = {
    listQuestion: [],

}

const questionsReducer = (state = initialState,action) => {
    switch(action.type){
        case 'scroll' :{
            return state ;
        }

        default : 
            return state;
    }
}


export default questionsReducer;