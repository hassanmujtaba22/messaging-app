import { auth, firestore } from "firebase";

export const signup = (user) => {
    return async (dispatch) => {
        const db = firestore()
        auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);
                const currentUser = auth().currentUser;
                const name = `${user.fname} ${user.lname}`;
                currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        db.collection("users").add({
                            fname: user.fname,
                            lname: user.lname,
                            uid: data.user.uid,
                            createdAt: new Date(),
                        })
                            .then(() => {
                                const loggedinUser = {
                                    firstname: user.fname,
                                    lastname: user.lname,
                                    uid: data.user.uid,
                                    email: user.email,
                                }
                                localStorage.setItem("user", JSON.stringify(loggedinUser))
                                console.log("User successfully logged in....");
                            })
                            .catch(error => {console.log(error);})
                    })
            })
            .catch(error => {
                console.log(error);
            })
    }
}