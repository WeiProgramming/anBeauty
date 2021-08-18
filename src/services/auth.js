import { auth } from '../firebase'

const tryLoginUser = async (email, password) => {
  return await auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      console.log('user signed in ', user)
      return user;
    })
    .catch((error) => {
      console.log('error ', error)
      return null;
    })
}

const tryLogoutUser = () => {
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.'
      console.log('Signout successful')
    })
    .catch((error) => {
      // An error happened.
      console.log('Signout failed ', error)
    })
}

const tryRegisterUser = (email, password) => {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user
      console.log('user created ', user)
    })
    .catch((error) => {
      console.log('error ', error)
    })
}

// Returns true/false for existing user
const isUserAuthenticated = () => {
  auth.onAuthStateChanged((user) => {
    console.log('user from firebase ', user)
    if (user) {
      return true
    } else {
      return false
    }
  })
}

export { isUserAuthenticated, tryLoginUser, tryLogoutUser, tryRegisterUser }
