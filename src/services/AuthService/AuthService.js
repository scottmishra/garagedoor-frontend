import { database, firebaseAuth } from '../../constants';

export default class AuthService {

    login(email, pw) {
        return firebaseAuth().signInWithEmailAndPassword(email, pw)
        .then((success) => {
            //window.location.reload();
        });
    }

    logout() {
        return firebaseAuth().signOut();
    }

    resetPassword(email) {
        return firebaseAuth().sendPasswordResetEmail(email);
    }

    signUp(email, pw, firstName, lastName, session, isVolunteer) {
        var AuthClass = this;
        return firebaseAuth().createUserWithEmailAndPassword(email, pw)
            .then(function(user){
                AuthClass.saveUser(user, firstName, lastName, session)
            });
    }

    saveUser(user, firstName, lastName, session) {
        var AuthClass = this;
        return database.ref().child('users/'+user.uid)
            .set({
                email: user.email,
                uid: user.uid,
                firstName: firstName,
                lastName: lastName
            }, (err) =>{
                if(err) console.error(err);
            })
            .then(function(response) {
                setTimeout(function () {
                    AuthClass.logout();
                }, 5000);
            });
    }
}