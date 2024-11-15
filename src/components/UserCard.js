export default function UserCard(props){
  return(<>
    <div className="card m-2" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">{props.Name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.Description}</h6>
        <p className="card-text">{props.gender}</p>
        <button className="btn btn-danger" onClick={props.DeleteUser}>Delete</button>
        <button className="btn btn-primary mx-2" onClick={props.UpdateUser}>Update</button>
      </div>
    </div>
  </>);
}
