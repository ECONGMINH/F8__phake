const initialState = {
    listQuestion: [],

}

const blogsReducer = (state = initialState ,action) => {
    switch(action.type){
        case 'detail' : {
            return state ;
        }

        default :
            return state ;
    }
}

export default blogsReducer;