import { useEffect, useState } from "react";
import UserList from "../components/UserList";

const UserContainer = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      console.log(json);
      if (!json.data) return;
      setUsers(json.data);
      console.log("json",json)
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div style={{border:"1px solid red",padding:9}}>
      <h2 style={{textAlign:"center"}}>Design Pattern : Container-Presentation pattern</h2>

      <p style={{textAlign:"center",color:"red"}}>I am a container</p>
      <p>* Importing UserList Component in UserContainer and passing all states as props to UserList</p> 
      <p>* I have all the states filled with data to pass to my child component</p> 

      <UserList users={users} loading={isLoading} error={error} />


    </div>
  );
};

export default UserContainer;