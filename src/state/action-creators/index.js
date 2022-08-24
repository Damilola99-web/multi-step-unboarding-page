export const updateUser = (user) => {
    return (dispatch)=> {
        dispatch({type:"UPDATE_USER", payload: user})
    }
}

export const clearUser = () => {
    return (dispatch) => {
        dispatch({type: "CLEAR_USER"})
    }
}