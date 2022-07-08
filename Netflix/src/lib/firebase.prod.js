import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';



const config = {
  apiKey: "AIzaSyCwnYodeUpvh3C7Y1KcHm72CDyLn3GMxZk",
  authDomain: "netflix-clone-a929b.firebaseapp.com",
  projectId: "netflix-clone-a929b",
  storageBucket: "netflix-clone-a929b.appspot.com",
  messagingSenderId: "678756852269",
  appId: "1:678756852269:web:08afe2debf87ddaf40cea4"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
