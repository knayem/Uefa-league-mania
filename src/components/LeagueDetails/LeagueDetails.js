import React, { useEffect , useState } from 'react';
import {useParams} from 'react-router-dom';
import Female from '../../images/female.png';
import male from '../../images/male.png';
import facebook from '../../images/Facebook.png';
import youtube from '../../images/you.png';
import twitter from '../../images/tw.png';



import { Card ,Row ,Col,Container} from 'react-bootstrap';
import './LeagueDetails.css'
import { library } from '@fortawesome/fontawesome-svg-core'

import {faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faFlag,faFutbol,faVenusMars,faSearchLocation,faHeart} from '@fortawesome/free-solid-svg-icons'


import Footer from '../Footer/Footer';


const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [details, setDetails]= useState([]);

    useEffect(() =>{

        const url= `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`
        fetch (url)
        .then (res =>res.json())
        .then(data =>setDetails(data.leagues[0]));
        
            }, [leagueId])


    const {strGender,strBadge,strFanart1,strDescriptionEN,strCountry,intFormedYear,strSport,strLeague,strFacebook,strTwitter,strYoutube} =details;
    
    return (

      <div style={{backgroundColor: 'navy'}}>
      <Card >
          <Card.Img style={{width: '100%' , height: '300px' }} variant="top" src={strBadge } />
      </Card>
      <Container className="detels-container">
          < Row>
              <Col  md={6} sm={12}>

              <h3><FontAwesomeIcon icon={faHeart}/> {strLeague}</h3>  
             <h5 className="styleH"><FontAwesomeIcon icon={faSearchLocation}/> Founded: {intFormedYear}</h5>
            <h5><FontAwesomeIcon icon={faFlag}/> Country: {strCountry}</h5>
           <h5> <FontAwesomeIcon icon={faFutbol}/> Sports Type: {strSport}</h5>
           <h5><FontAwesomeIcon icon={faVenusMars}/> Gender: {strGender} </h5>
                 
              </Col>
               <Col md={6} sm={12}>
            <div className="gender">
            {
                 details?.strGender?.toLowerCase() === "male" ? <img style={{ height:'250px'}} src={male} alt=""/> : <img  style={{ height:'250px'}} src={Female} alt=""/>

       
          }
            </div>
      </Col> 
          </Row>
           
      </Container>

      <p>{strDescriptionEN}</p>

      
      
      <FontAwesomeIcon icon={['fab', 'facebook']} />



        
             <div>

             <img style={{ height:'50px'}} src={facebook} alt=""/>


             <img  style={{ height:'50px'}} src={youtube} alt=""/>
             <img style={{ height:'50px'}} src={twitter} alt=""/>
             </div>
            
               <Footer></Footer>
               

  </div>





    );
};

export default LeagueDetails;