import React, { useState} from 'react';
import './App.css';
import Post from './Post';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "Reid", 
      caption: "Heck yes. it works", 
      imageUrl: "data:image/png;base64,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"
    },
    {
      username: "E", 
      caption: "Aw yeah", 
      imageUrl: "data:image/png;base64,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"
    },
  ]);

  return (
    <div className="App">
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
      posts.map(post => (
        <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
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
