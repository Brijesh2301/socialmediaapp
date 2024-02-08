import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './componets/Header';
import Footer from './componets/Footer';
import Sidebar from './componets/Sidebar';
import CreatePost from './componets/CreatePost';

import PostList from './componets/PostList';
import PostListProvider from './store/post-list-store';



function App() {
  
  const [selectedTab,setSelectedTab] = useState("Home");

  return (

    <PostListProvider>
  
    <div className = "app-container">

    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

    <div className='content'>
    <Header></Header>
    {selectedTab === 'Home'? (<PostList></PostList>): (<CreatePost></CreatePost>)}
  
    <Footer></Footer>
    </div>
    
    
    </div>
    </PostListProvider>
    
  )
}

export default App;