import React from 'react';
import {Button, CardGroup, Card} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Leagues.css';
import {Link} from 'react-router-dom';

const Leagues = (props) => {
 
    const {strLeague, strSport, strBadge,idLeague} =props.league;
    const leagueStyle = {background_color:' rgb(47, 4, 88)' ,float: 'left ',  padding: '15px' }
    return (
        <div style={leagueStyle} className="league d-flex align-items-center
        justify-content-around ">



{/* </div><div class="row row-cols-1 row-cols-md-3 g-4"> */}


 <Card  style={{ width: '25rem' ,height: '220px', color: 'navy', border: '1px solid blue',borderRadius:'15px', backgroundColor:'aliceBlue',  boxShadow: ' 10px 5px solid blue'}}>
  <Card.Img variant="top" src={strBadge} />
  <Card.Body>
    
    <Card.Text>
      <h2></h2>
    <h2 style={{color: 'navy' ,textAlign: 'left'}}>  {strLeague}</h2>
     <h6 style={{color: 'blue'}}> Sports Type : {strSport}</h6>
   <Link to={`/league/${idLeague}`}> 
    <Button variant="primary"  >Explore <FontAwesomeIcon icon={faArrowRight} /></Button>  
       </Link>
       
           
    </Card.Text>
   
  </Card.Body>
</Card> 


           {/* <CardGroup>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title> </Card.Title>
      <Card.Text>
      <h1> Id : {strTeam}</h1>
            
            <h1> Id : {strAlternate}</h1>
           
            <Button variant="primary">Explore</Button> 
      </Card.Text>
    </Card.Body>
    
  </Card>
  </CardGroup> */}
 
        </div>
    );
};

export default Leagues;