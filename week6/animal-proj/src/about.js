import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from 'react-bootstrap';

// this is required for flip
import ReactCardFlip from 'react-card-flip';

const About = () => {
    const aboutUs = [
        {
            name: "Marcus",
            position: "Lion Tamer",
            description: "I made friends with all of the lions (and tigers, and cheetahs)",
            image: "https://media-exp1.licdn.com/dms/image/C4E03AQEYEbd8xae8JA/profile-displayphoto-shrink_400_400/0/1576643932617?e=1622073600&v=beta&t=Inhk5dqe0zeTyx4-iMGgx85uI0E3sNpV3PO187xy3kE"
        },
        {
            name: "Erin",
            position: "Food Vendor",
            description: "I'm just here for the food guys.",
            image: "https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/136042820_10214758427234705_7116163205577475675_o.jpg?_nc_cat=101&ccb=1-3&_nc_sid=730e14&_nc_ohc=nVnb5McVWUwAX-bqSaM&_nc_ht=scontent-atl3-1.xx&oh=35332f0e72fab6d944dcd67e6f786344&oe=60823F4A"
        },
        {
            name: "J'Sonya",
            position: "Manager",
            description: "I'm the manager, but don't call me!",
            image: "https://media-exp1.licdn.com/dms/image/C4E03AQGzCIr7HIe38A/profile-displayphoto-shrink_200_200/0/1549995281373?e=1622073600&v=beta&t=pt-5js2Oa0WtaPBT6Jpung6xS823iFqj3ZadFuD7Mhc"
        },
        {
            name: "Shweta",
            position: "Store Owner",
            description: "Found and rescued these animals from poachers. She raised them all herself!",
            image: "https://scontent-atl3-2.xx.fbcdn.net/v/t1.0-9/s851x315/13092013_805836786213373_4331625023104236667_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=da31f3&_nc_ohc=ZIZxe1mSsiQAX8S1Y-k&_nc_ht=scontent-atl3-2.xx&tp=7&oh=d01498434a30418652ab10be623f3468&oe=608175FC"
        },
        {
            name: "Diana",
            position: "Animal Whisperer",
            description: "Knows all the animal languages, not just React (;",
            image: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/164687200_281617796853818_2368898208088864132_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=730e14&_nc_ohc=r-aKjbU6BEwAX8lXXYS&_nc_ht=scontent-iad3-1.xx&oh=dd01b0ce0f01d6cd9636758d532885ef&oe=6081ED05"
        },
    ];

  // isFlipped array to store flip status for each card,every card is display-false
  const [isFlipped, setFlip] = useState([false, false, false, false, false]);

  const handleClickFlip = (i) => {

    let newArr = [...isFlipped];
    newArr[i] = true;
    setFlip(newArr);
  }

  const handleClickUnFlip = (i) => {

    setFlip(false) ;
    let newArr = [...isFlipped];
    newArr[i] = false;
    setFlip(newArr);
  }

  const renderCard = (card, index) => {
    return (
      // isFlipped is a parameter which will decide which div to be display 
      <ReactCardFlip isFlipped={isFlipped[index]} flipDirection="horizontal">

        {/* div without flip */}
        <div className="cards front-cards aboutus-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Img variant="top" src={card.image} />
          </Card>
          <button className="descButton" onClick={() => handleClickFlip(index)}>Details</button>
        </div>

        {/* div with unflip */}

        <div className="cards back-cards">
          <Card style={{ width: '24rem' }}   >
            <Card.Body >
              <Card.Title style={{ display: 'block' }}  >{card.name}</Card.Title>
              <Card.Text>
                {card.position} - {card.description}
              </Card.Text>
            </Card.Body>
          </Card>
          <button className="descButton" onClick={() => handleClickUnFlip(index)}>Show {card.name}</button>
        </div>
      </ReactCardFlip>
    );
  };
  return <div><div className="AboutHeader">About Us</div><div className="grid">{aboutUs.map(renderCard)}</div></div>;
};

export default About;