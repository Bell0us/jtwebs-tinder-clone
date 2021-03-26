import React from 'react';
import TinderCard from 'react-tinder-card';

const TinderCards = ({ people, liked, disliked, setLiked, setDisliked }) => {
  // ! Test 'JSON'
  /* const [people, setPeople] = useState([
        {
            id: 1,
            name: 'John',
            url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydHJhaXR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        },
        {
            id: 2,
            name: 'Albert',
            url: 'https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Samuel-L-Jackson.jpg',
        }
    ]); */

  // ! setting current swiped cart as state to display it on history page
  const swiped = (direction, id, name, picture) => {
    let item = {
      id,
      name,
      picture,
    };
    if (direction === 'left') {
      setLiked(item);
    } else {
      setDisliked(item);
    }
  };

  return (
    <div className="card-container">
      {people.map((person) => (
        <TinderCard
          preventSwipe={['up', 'down']}
          className="tinder-card"
          key={person.id}
          onSwipe={(dir) => swiped(dir, person.id, person.title, person.url)}
        >
          <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
            <h3 className="card-title">{person.title}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default TinderCards;
