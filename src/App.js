import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards';
import History from './components/History';
import Help from './components/Help';
import Profile from './components/Profile';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { IconButton } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import AllLikes from './components/AllLikes';
import AllDislikes from './components/AllDislikes';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  // ! Fetching JSON -> limited by userID = 1 -> too many data -> laggy
  const [people, setPeople] = useState([]);
  const getPeople = () => {
    fetch('https://jsonplaceholder.typicode.com/photos?albumId=1', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setPeople(myJson);
      });
  };
  useEffect(() => {
    getPeople();
  }, []);

  // ! Creating a state to store recent likes / dislikes
  const [liked, setLiked] = useState();
  const [disliked, setDisliked] = useState();

  // ! storing all likes / dislikes
  let allLikes = useRef([]);
  let allDislikes = useRef([]);

  // ! checking if undefined than concat
  liked !== undefined && (allLikes.current = allLikes.current.concat(liked));
  disliked !== undefined && (allDislikes.current = allDislikes.current.concat(disliked));

  // ! filtering duplicates
  const seen = new Set();
  const seenDis = new Set();

  const filteredLikes = allLikes.current.filter((el) => {
    const duplicate = seen.has(el.id);
    seen.add(el.id);
    return !duplicate;
  });

  const filteredDislikes = allDislikes.current.filter((el) => {
    const duplicate = seenDis.has(el.id);
    seenDis.add(el.id);
    return !duplicate;
  });

  // ! filtering cards so they show up only once
  const filteredPeople = people.filter(
    (ar) =>
      !filteredLikes.find((rm) => rm.id === ar.id) &&
      !filteredDislikes.find((rm) => rm.id === ar.id)
  );

  // ! User for mockup profile page
  const user = {
    photo:
      'https://scontent-prg1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/116719421_294023611821137_3099698235498836144_n.jpg?tp=1&_nc_ht=scontent-prg1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=qPNIfNMJLDkAX-ZeUej&ccb=7-4&oh=82ba9bb625199013d7aeca573e137fa6&oe=6082A398',
    name: 'J??chym Tinavsk??',
    about:
      'I have been interested in web development and software engineering for about one and a half years. I am a mostly self-taught developer and I enjoy the process of learning very much.',
  };

  return (
    <div className="App">
      {/* Header */}
      <Header title="JTinder" />
      <Router>
        <Switch>
          <Route exact path="/">
            {/*  Cards */}
            <TinderCards
              people={filteredPeople}
              setLiked={setLiked}
              setDisliked={setDisliked}
              liked={liked}
              disliked={disliked}
            />
            {/* Controls */}
            <div className="controls">
              <Link className="link" to="/help">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <HelpOutlineIcon style={{ fontSize: 40, color: '#3F88E8' }} />
                </IconButton>
              </Link>
              <Link className="link" to="/history">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <FavoriteIcon style={{ fontSize: 40, color: '#FF5C30' }} />
                </IconButton>
              </Link>
              <Link className="link" to="/profile">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <PersonIcon style={{ fontSize: 40, color: '#8F52FF' }} />
                </IconButton>
              </Link>
            </div>
          </Route>
          {/* Like / Dislike history "page" */}
          <Route path="/history">
            <History liked={liked} disliked={disliked} />

            <div className="history-controls">
              <Link to="/all-likes">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ThumbUpAltIcon style={{ fontSize: 40, color: '#3F88E8' }} />
                </IconButton>
              </Link>
              <Link to="/">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <HomeIcon style={{ fontSize: 40, color: '#FF5C30' }} />
                </IconButton>
              </Link>
              <Link to="/all-dislikes">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ThumbDownAltIcon style={{ fontSize: 40, color: '#8F52FF' }} />
                </IconButton>
              </Link>
            </div>
          </Route>
          {/* All likes page */}
          <Route path="/all-likes">
            <AllLikes allLikes={filteredLikes} />

            <div className="history-controls">
              <Link to="/history">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ArrowBackIcon style={{ fontSize: 40, color: '#3F88E8' }} />
                </IconButton>
              </Link>
              <Link to="/">
                <IconButton
                  size="medium"
                  className="fixed-btn"
                  style={{
                    boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)',
                  }}
                >
                  <HomeIcon style={{ fontSize: 40, color: '#FF5C30' }} />
                </IconButton>
              </Link>
              <Link to="/all-dislikes">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ThumbDownAltIcon style={{ fontSize: 40, color: '#8F52FF' }} />
                </IconButton>
              </Link>
            </div>
          </Route>
          {/* All dislikes page */}
          <Route path="/all-dislikes">
            <AllDislikes allDislikes={filteredDislikes} />

            <div className="history-controls">
              <Link to="/history">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ArrowBackIcon style={{ fontSize: 40, color: '#3F88E8' }} />
                </IconButton>
              </Link>
              <Link to="/">
                <IconButton
                  size="medium"
                  className="fixed-btn"
                  style={{
                    boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)',
                  }}
                >
                  <HomeIcon style={{ fontSize: 40, color: '#FF5C30' }} />
                </IconButton>
              </Link>
              <Link to="/all-likes">
                <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                  <ThumbUpAltIcon style={{ fontSize: 40, color: '#8F52FF' }} />
                </IconButton>
              </Link>
            </div>
          </Route>
          {/* Help page */}
          <Route path="/help">
            <Help />
            <Link to="/">
              <IconButton size="medium" style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)' }}>
                <HomeIcon style={{ fontSize: 40, color: '#FF5C30' }} />
              </IconButton>
            </Link>
          </Route>
          {/* Profile page */}
          <Route path="/profile">
            <Profile user={user} />
            <Link to="/">
              <IconButton
                size="medium"
                style={{ boxShadow: '0 0 10px 4px rgba(0, 0, 0, .15)', marginTop: '22px' }}
              >
                <HomeIcon style={{ fontSize: 40, color: '#FF5C30' }} />
              </IconButton>
            </Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
