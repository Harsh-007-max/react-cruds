import AppBar from '../components/AppBar';
import { Outlet } from 'react-router-dom';
export default function HomeLayout(){
  return(<>
    <AppBar/>
    <Outlet/>
  </>);
}
