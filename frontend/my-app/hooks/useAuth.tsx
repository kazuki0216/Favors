import { View, Text } from "react-native";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase";

const useAuth = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log(user)
      setUser("Kazuki")
      // if (user) {
      //   setUser(user);
      // } else {
      //   setUser(null);
      // }
    });
    return unsub;
  }, []);
  return { user };
};

export default useAuth;
