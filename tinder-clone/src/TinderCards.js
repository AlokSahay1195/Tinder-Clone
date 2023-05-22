import React, {useState} from "react";
import './TinderCards.css';
import TinderCard from "react-tinder-card";

function TinderCards() {
    const [people,setPeople] = useState([
        {
        name: 'Elon Musk',
        url: "https://s.abcnews.com/images/US/elon-musk-rt-jt-230511_1683834880758_hpMain_1x1_992.jpg"
        },
        {
            name: 'Narendra Modi',
            url: "https://www.thestatesman.com/wp-content/uploads/2022/09/03_Merged.jpg"
        },
        {
            name: 'Jeff Bezoz',
            url: "https://imageio.forbes.com/specials-images/imageserve/5bb22ae84bbe6f67d2e82e05/0x0.jpg?format=jpg&crop=1012,1013,x627,y129,safe&height=416&width=416&fit=bounds.jpg"
        },
    ]);
    const swiped=(direction,nameToDelete) =>{
        console.log('Removing: '+nameToDelete);
    };
    const outOfFrame=(name) => {
        console.log(name+ " left the screen");
    };
  return (    
    <div className='tinderCards'>
        <div className='tinderCards__cardContainer'>
        {people.map((person)=>(
            <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up","down"]}
            onSwipe={(dir) => swiped(dir,person.name)}
            onCardLeftScreen={()=>outOfFrame(person.name)}
            >
                <div
                style={{backgroundImage: `url(${person.url})`}}
                className="card"
                >    
                <h3>{person.name}</h3>
                </div>
            </TinderCard>
        )           
        )}
        </div>
        
    </div>
  )
}

export default TinderCards;