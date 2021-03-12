import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Female from '../../images/female.png';

import ucl from '../../images/ucl.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/you.png';
import twitter from '../../images/tw.png';



import { Card, Row, Col, Container } from 'react-bootstrap';
import './LeagueDetails.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faVenusMars, faSearchLocation, faHeart } from '@fortawesome/free-solid-svg-icons'


import Footer from '../Footer/Footer';


const LeagueDetails = () => {
    const { leagueId } = useParams();
    const [details, setDetails] = useState([]);

    useEffect(() => {

        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data.leagues[0]));

    }, [leagueId])


    const { strGender, strBadge, strPoster, strDescriptionEN, strCountry, intFormedYear, strSport, strLeague, strFacebook, strTwitter, strYoutube } = details;

    return (


        <div className="div-style">
            <Card className="card">
                <Card.Img className="card-img" src={strBadge} />
            </Card>
            <Container className="container">
                <Row className="">
                    <Col className="col-style" md={6} sm={12}>
                        <h3 ><FontAwesomeIcon icon={faHeart} /> {strLeague}</h3>
                        <h5><FontAwesomeIcon icon={faSearchLocation} /> Founded: {intFormedYear}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h5>
                        <img style={{ height: '250px' ,width:'400px' }} src={ucl} alt="" />

                    </Col>
                    <Col md={6} sm={12}>

                        <div className="gender">
                            {

                                
                                details?.strGender?.toLowerCase() === "male" ? <img  src={strPoster} alt="" /> : <img  src={strPoster} alt="" />
                            }
                        </div>
                    </Col>
                </Row>

            </Container>

            <div>
                <p style={{ textAlign: 'justify', color: 'goldenrod',margin:'5%' }}>{strDescriptionEN}</p>
                <h5 id="txt-style"> Follow us on</h5>
                <a href={strFacebook} target="_blank"> <img style={{ height: '50px' }} src={facebook} alt="" /></a>
                <a href={strFacebook} target="_blank"> <img style={{ height: '50px' }} src={youtube} alt="" /></a>
                <a href={strFacebook} target="_blank"> <img style={{ height: '50px' }} src={twitter} alt="" /></a>

            </div>

            <Footer></Footer>
        </div>

    );
};

export default LeagueDetails;