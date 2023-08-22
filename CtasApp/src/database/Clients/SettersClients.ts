import firestore from '@react-native-firebase/firestore';

// Funciones para interactuar con la Firestore en la coleccion de Clients
// Funciones SETTERS para subr datos a Firestore
export const GETuser = async(email: String)=>{
    await firestore()
    .collection('Clients')
    .where('email','==', email)
    .get()
    .then((querySnapshot)=>{
     console.log(querySnapshot.docs[0]);
    }
    )
}