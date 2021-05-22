import React, {useState, useEffect} from 'react';
import logoo from '../src/Logo.PNG';
import './App.css';
import {auth, db} from './firebase'
import Post from './Post';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';


function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


 const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


function App() {

  const modalStyle = getModalStyle();
  const classes = useStyles();
  const [posts,setPosts] = useState([]); 
  const [open,setOpen] = useState(false); 
  const [openSignIn,setOpenSignIn] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);

 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      // user has logged in...
      console.log(authUser);
      setUser(authUser);
    } else {
      // user has logged out...
      setUser(null);
    }
  });
  return () => {
    unsubscribe();
  };
 }, [user, username])


useEffect(() => {
db.collection('posts').onSnapshot(snapshot => {
  setPosts(snapshot.docs.map(doc => doc.data()));
})
}, [])



const signUp = (event) => {
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email,password)
  .then((authUser)=>{
    authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) => alert(error.message));

   setOpen(false);

}


const signIn = (event) => {
  event.preventDefault();
  auth
  .signInWithEmailAndPassword(email,password)
  .catch((error)=>alert(error.message));
  
  setOpenSignIn(false);

}

  return (
    <div className="app">     

<Modal
        open={open}
        onClose={() => setOpen(false)}
 >

    <div style={modalStyle} className={classes.paper}>
      <form className="app_signup">
    <center> 
      <img
      className="app_headerImage"
      height="40"
       src={logoo}
       alt=""
       /> 
        </center>
    <Input
       placeholder="username"
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
      />
       <Input
       placeholder="email"
       type="text"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
       
       <Input
       placeholder="password"
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
       <Button type="submit" onClick={signUp} >Sign up</Button>
     
   </form>
</div>
      </Modal>

      <Modal
        open={openSignIn}
        onClose={() => setOpenSignIn(false)}
 >

    <div style={modalStyle} className={classes.paper}>
      <form className="app_signup">
    <center> 
      <img
      className="app_headerImage"
      height="40"
       src={logoo}
       alt=""
       /> 
        </center>

       <Input
       placeholder="email"
       type="text"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
      />
       
       <Input
       placeholder="password"
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       />
       <Button type="submit" onClick={signIn} >Sign In</Button>
     
   </form>
</div>
      </Modal>
    
     <div className="app_header">
      <img
      className="app_headerImage"
      height="40"
       src={logoo}
       alt=""
       />

     </div>
{user?(<Button onClick={() => auth.signOut()}>Logot</Button>):
(
  <div className="app_loginContainer">
<Button onClick={() => setOpenSignIn(true)} >Sign In</Button>
<Button onClick={() => setOpen(true)} >Sign up</Button>
</div>)}

    
 <h1>Hey Jainil</h1>

 {
 posts.map((post,id) => (
<Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
 ))
 }



     



    </div>
  );
}

export default App;
