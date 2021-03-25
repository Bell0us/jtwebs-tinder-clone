import React, {useState, useEffect} from 'react'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
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


    // ! Fetching JSON -> limited by userID = 1 -> too many data -> laggy
    const [people,setPeople]=useState([]);
    const getPeople=()=>{
        fetch('https://jsonplaceholder.typicode.com/photos?albumId=1'
        ,{
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
        }
        )
        .then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setPeople(myJson)
        });
    }
    useEffect(()=>{
        getPeople()
    },[])

    return (
        <div className="card-container">
            {people.map(person => (
                <TinderCard preventSwipe={['up', 'down']} className="tinder-card" >
                    <div className="card" style={{backgroundImage: `url(${person.url})`}}>
                        <h3 className="card-title">
                            {person.title}
                        </h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    )
}

export default TinderCards
