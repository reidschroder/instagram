import React, { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import { db, auth } from './firebase';
import {makeStyles } from '@material-ui/core/styles';
import {Modal} from '@material-ui/core';
import {Button, Input} from '@material-ui/core';
import getUserLocale from 'get-user-locale';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}`,
    left: `${left}`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

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

const locale = () => {
  if (getUserLocale().includes("fr")) {
    return(true)
  } else {
    return(false)
  }
}

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  // const [openImageUpload, setOpenImageUpload] = useState(false);
  // const [openSignIn, setOpenSignIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // const [user, setUser] = useState(null);
  // const [viewmine, setViewMine] = useState(false);
  // const [viewwhichuser, setViewWhichUser] = useState('');
  // const [viewsinglepost, setViewSinglePost] = useState(false);
  // const [singlepostid, setSinglePostId] = useState('');
  const [lang] = useState(locale);



  

  useEffect(() => {
    // This is where the code runs
    db.collection('posts').onSnapshot(snapshot => {
      // every time a new post is added, this code fires up
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        post: doc.data()
      })));
    })
}, []);

const signUp = (event) => {
  event.preventDefault();
  auth.createUserWithEmailAndPassword(email, password)
  .then((authUser) => {
    return authUser.user.updateProfile({
      displayName: username
    })
  })
  .catch((error) => alert(error.message))
}

  return (
    <div className="App">
      <Modal  
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <form className="app__signup">
            <center>
              <img 
                className="app__headerImage"
                height="40px;"
                src="https://toogreen.ca/instagreen/img/instagreen.svg"
                alt=""
              />
            </center>

            <Input 
              type="text"
              placeholder={lang ? "Nom d'utilisateur":"username"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            /> 
            <Input 
              placeholder={lang ? "Courriel":"email"}
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Input 
              placeholder={lang ? "Mot de passe":"password"}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" onClick={signUp}>{lang ? "Inscrivez-vous":"Sign Up"}</Button>

          </form>

        </div>
      </Modal>
      <header className="App-header">
     


    <div className="app__header">
      <img
        className='app__headerImage'
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />
    </div>

    <h1>Hello Coders</h1>

    {
      posts.map(({id, post}) => (
        <Post 
        key={id} 
        username={post.username} 
        caption={post.caption} 
        imageUrl={post.imageUrl} 
        />
      ))
    }


        {/*Header */}

        {/*Posts */}
        {/*Posts */}
        
      </header>
    </div>
  );
}

export default App;
