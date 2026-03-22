import '../../index.css';
import { NavLink, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeProviderWrapper.tsx';
import styled from 'styled-components';

const Main = styled.main`
  min-width:0;
  background-color: ${(props) => props.theme.palette.background};
  grid-area: main;
  display: flex;
  overflow-y:hidden;
  overflow-x :auto;`;

export default ()=>{
const [layout,setLayout]= useState("main-layout-a");
const [isON, setIsON] = useState(false);
const location = useLocation();
const { toggleMode } = useContext(ThemeContext)!;

function toggleSidebar(){
    setLayout(layout==="main-layout-a"?"main-layout-b":"main-layout-a");
  }

    return (
    <div className={layout}>
    <nav>  
    <div className='nav-left-buttons'>
    <div className='side-drawer' onClick={toggleSidebar}>{layout=="main-layout-a" ? '✖' : '≡'}</div> 
    <div style={{
      alignContent: "center",
       }}>Logo</div>
    {
      location.pathname==="/ActiveSprint" &&
    <button style={{
      marginLeft: "14px",
      border: "solid 1px black",
      borderRadius: "5px",
      padding: "3px",
      backgroundColor: "lightgray",
      cursor: "pointer"
       }}>
        Create
        </button>
    }
    </div>   
    <div className='nav-right-buttons'>
    <div><img src={
        isON
          ? "https://img.icons8.com/?size=100&id=BLH852a7CpTm&format=png&color=000000"
          : "https://img.icons8.com/?size=100&id=20012&format=png&color=000000"} alt="icon" style={{height:"30px", width:"auto"}} 
    onClick={()=>{toggleMode(); setIsON(!isON);}}></img></div>
    <div>User Profile</div>
    </div>
    </nav>
    <aside>
        <div className='menu-items'>
        <NavLink to="/ActiveSprint">Active Sprint</NavLink>
        <NavLink to="/Backlog">Backlog</NavLink>
        <NavLink to="/ViewBoards">View Boards</NavLink>
        </div>
        <div className='button-exp' onClick={toggleSidebar}>{layout=="main-layout-a" ? '<<' : '>>'}</div>
    </aside>
    <Main>
      <Outlet />
    </Main>
    </div>);
}