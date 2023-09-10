import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import players from './players';

export default function Player(props) {

  
  return (
    <>
    
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.props.Image} />
    <Card.Body>
      <Card.Title> {props.props.name} </Card.Title>
      <Card.Text>
      Nationality:{props.props.nationality} <br/>
      Team:{props.props.team} <br/>
      JerseyNumber:{props.props.jerseyNumber}<br/>
      Age:{props.props.age}<br/>
      
      </Card.Text>

      
    </Card.Body>
  </Card>
  </>
  )
}
