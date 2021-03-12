import React from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './Leagues.css';
import { Link } from 'react-router-dom';

const Leagues = (props) => {

  const { strLeague, strSport, strbanner, idLeague } = props.league;
  const leagueStyle = { background_color: ' rgb(47, 4, 88)', float: 'left ', padding: '15px' }
  return (

    <div id="div-position" style={leagueStyle} className="league d-flex align-items-center
        justify-content-around  ">
      <Card className="home-card" style={{ width: '26rem', height: '290px' ,backgroundColor: 'whitesmoke'}}>
        <Card.Img style={{ height: '50px' }} variant="top" src={strbanner} />
        <Card.Body>
          <Card.Text>
            <h2 style={{ color: 'navy', textAlign: 'center' }}>  {strLeague}</h2>
            <h6 className="league-type" style={{ color: 'blue' }}> Sports Type : {strSport}</h6>
            <Link to={`/league/${idLeague}`}>
              <Button style={{ marginTop: '2px'}}variant="primary"  >Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Link>
          </Card.Text>

        </Card.Body>
      </Card>


    </div>


  );
};

export default Leagues;