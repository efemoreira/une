import React, {createContext, useState, useEffect, useContext} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface User {
  uid?: string;
  fullName: string;
  email: string;
  birthday: string;
  city: string;
  gender: string;
}

interface AuthContextData {
  loged: boolean;
  user: User | null;
  loading: boolean;
  logIn(email: string, password: string): Promise<void>;
  logOut(): void;
  register(user: User, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [initializing, setInitializing] = useState(true);

  async function onAuthStateChangedF(userAuth) {
    console.log('onAuthStateChangedF: IN');
    if (!userAuth && user) {
      console.log('onAuthStateChangedF: !userAuth && user');
      setUser(null);
    }

    if (userAuth && !user) {
      console.log('onAuthStateChangedF: userAuth && !user');
      await firestore()
        .collection('Users')
        .doc(userAuth.uid)
        .get()
        .then(res => {
          console.log(res.data());
          if (res.data()) {
            const userFirestore = JSON.stringify(res.data());
            setUser(JSON.parse(userFirestore));
          }
        });
    }

    if (initializing) {
      console.log('onAuthStateChangedF: initializing');
      setInitializing(false);
    }

    console.log('onAuthStateChangedF: setLoading');
    setLoading(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangedF);
    return subscriber;
  });

  async function logIn(email: string, password: string) {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  }

  async function logOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  async function register(userNew: User, password: string) {
    try {
      await auth()
        .createUserWithEmailAndPassword(userNew.email, password)
        .then(response => {
          console.log('User account created & signed in!');
          firestore()
            .collection('Users')
            .doc(response.user.uid)
            .set(userNew)
            .then(res => {
              console.log('User added!', res);
              setUser(userNew);
            });
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }

          console.error(error);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <AuthContext.Provider
      value={{loged: !!user, user, loading, logIn, logOut, register}}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
