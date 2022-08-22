import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from "react-redux"
import student from"./Component/student"
import {getStud} from "./Redux/saga/request"
import {useEffect}from "react"


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStud());
  }, [dispatch]);

  const name = useSelector((state) => state.userReducer.users);

  return (
    <div className="App">
      <p>Hello EveryOne</p>
        <student/>
      
    </div>
  );
}

export default App;
