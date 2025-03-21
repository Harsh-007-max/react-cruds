import {useState,useEffect} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
export default function InsertUpdateUser(props){
  const [data,setData] = useState({
    Name: '',
    Description: '',
    gender:''
  });
  const {id}=useParams();
  const apiURL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  useEffect(()=>{
    if(id){
      fetch(`${apiURL}/${id}`)
        .then(response => response.json())
        .then(data => setData(data));
    }
  },[apiURL,id]);
  const insertUser = ()=>{
    fetch(
      apiURL,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {props.setUsers([...props.users,data])});
  };
  const updateUser = (PersonID)=>{
    fetch(`${apiURL}/${PersonID}`,
      {
        method:"PUT",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      }
    )
      .then(response => navigate(-1));

  }
  return(<>
    <div className="card m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <input
          type="text"
          className="form-control mb-2"
          name="Name"
          placeholder="Name"
          value={data.Name?data.Name:''}
          onChange={e=>setData({...data,Name:e.target.value})}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="Description"
          placeholder="Description"
          value={data.Description?data.Description:''}
          onChange={e=>setData({...data,Description:e.target.value})}
        />
        <input
          type="text"
          className="form-control mb-2"
          name="gender"
          placeholder="Gender"
          value={data.gender?data.gender:''}
          onChange={e=>setData({...data,gender:e.target.value})}
        />
        {
          id?
            <button className="btn btn-primary w-100" onClick={()=>updateUser(data.PersonID)}>Update</button>
            :<button className="btn btn-primary w-100" onClick={()=>insertUser()}>Insert</button>
        }
      </div>
    </div>
  </>);
}
