import firestore from '@react-native-firebase/firestore';

// Funciones para interactuar con la Firestore en la coleccion de Clients
// Funciones SETTERS para subr datos a Firestore
export const existUser = async (email: String): Promise<Boolean> => {
    return await firestore()
        .collection('Clients')
        .where('email', '==', email)
        .get()
        .then((querySnapshot) => {
            if (querySnapshot.docs.length>0)
                return true;
            else
                return false;
        }
        )
}