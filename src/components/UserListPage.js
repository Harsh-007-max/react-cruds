import {useState,useEffect} from 'react';  
import UserCard from './UserCard';
import {useNavigate} from 'react-router-dom';
import InsertUpdateUser from './InsertUpdateUser';
export default function UserListPage(){
  const [users, setUsers] = useState([]);
  const apiURL = process.env.REACT_APP_API_URL;
  useEffect(()=>{
    fetch(apiURL)
      .then(response => response.json())
      .then(data => setUsers(data));
  },[apiURL]);
  const navigate=useNavigate();
  const deleteUser=id=>{
    fetch(
      `${apiURL}/${id}`,
      {method: 'DELETE'})
      .then(response => response.json())
      .then(data => {
        setUsers(users.filter(user=>user.PersonID !== id));
      });
  };
  const openInEdit=id=>navigate(`/update/${id}`);
  return (<>
    <div className="d-flex flex-wrap">
        <InsertUpdateUser setUsers={setUsers} users={users}/>
        {users.map((user,index)=>(
          <UserCard 
            key={index} 
            Name={user.Name} 
            PersonID={user.PersonID} 
            Description={user.Description} 
            gender={user.gender}
            DeleteUser={()=>{deleteUser(user.PersonID)}}
            UpdateUser={()=>{openInEdit(user.PersonID)}}
          />
        ))}
    </div>
  </>);
}
