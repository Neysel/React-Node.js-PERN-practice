// import logo from './logo.svg';
// import './App.css';

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite"
import {Context} from "./index"
import { useContext, useEffect, useState } from "react";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Spinner animation={"grow"}/>
  }

  return (
    <div className="App">
      <NavBar/>
      <AppRouter/>
    </div>
  );
})

export default App;
