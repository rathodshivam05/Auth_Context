import { createContext,  useState } from "react";
import axios from "axios";

export const Authcontext = createContext();

export const AuthcontextProvider = ({ children }) => {
  const [auth, setauth] = useState(true);
  const [token, settoken] = useState("");  

  const gettoken =() =>{
        axios
    .post("https://reqres.in/api/login", {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    })
    .then((e) => {
      console.log(e);       
      settoken(e.data.token);
    });
  }


  const toggleAuth = () => {
    setauth(!auth);
    gettoken()
  };

  return (
    <Authcontext.Provider value={{ auth, toggleAuth ,token}}>
      {children}
    </Authcontext.Provider>
  );
};
