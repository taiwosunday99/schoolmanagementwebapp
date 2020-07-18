export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS'})
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut =() => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch ({ type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const signUp = (newStudent) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newStudent.email,
            newStudent.password
        ).then((resp) => {
            return firestore.collection('students').doc(resp.user.uid).set({
                matricNo: newStudent.matricNo,
                firstName: newStudent.firstName,
                lastName: newStudent.lastName,
                courseOfStudy: newStudent.courseOfStudy,
                faculty: newStudent.faculty,
                gender: newStudent.gender,
                initials: newStudent.firstName[0] + newStudent.lastName[0]
            })
        }).then(() => {
             dispatch ({ type: 'SIGNUP_SUCCESS' })
        }).catch((err) => {
            dispatch ({ type: 'SIGNUP_ERROR', err })
        })
    }
}