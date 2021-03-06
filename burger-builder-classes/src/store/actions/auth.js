import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_INITIATE_LOGOUT
    }
}

export const logoutSucceed = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = (expirationDate) => {
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(logout())
    //     }, expirationDate * 1000)
    // };
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationDate: expirationDate
    };
}

// THUNK VERSION
// export const auth = (email, password, isSignup) => {
//     return dispatch => {

//         dispatch(authStart());

//         const authData = {
//             email: email,
//             password: password,
//             returnSecureToken: true
//         }

//         let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDCgSZK6CG2L7fCIdjDeIuurrP5bNc9BNc'

//         if (!isSignup) {
//             url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDCgSZK6CG2L7fCIdjDeIuurrP5bNc9BNc'
//         }

//         axios.post(url, authData)
//             .then(res => {
//                 const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000)
//                 localStorage.setItem('token', res.data.idToken);
//                 localStorage.setItem('expirationDate', expirationDate);
//                 localStorage.setItem('userId', res.data.localId);
//                 dispatch(authSuccess(res.data.idToken, res.data.localId));
//                 dispatch(checkAuthTimeout(res.data.expiresIn));
//             })
//             .catch(err => {
//                 console.log(err);
//                 dispatch(authFail(err.response.data.error));
//             })
//     }
// }

// SAGA VERSION
export const auth = (email, password, isSignup) => {
    return {
        type: actionTypes.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    }
}

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    }
}


// THUNK VERSION
// export const authCheckState = () => {
//     return dispatch => {
//         const token = localStorage.getItem("token");

//         if (!token) {
//             dispatch(logout());
//         } else {
//             const expirationDate = new Date(localStorage.getItem("expirationDate"));
//             if (expirationDate <= new Date()) {
//                 dispatch(logout())
//             } else {
//                 const userId = localStorage.getItem("userId");
//                 dispatch(authSuccess(token, userId))
//                 dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
//             }
//         }

//     }
// }


// SAGA VERSION
export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
}