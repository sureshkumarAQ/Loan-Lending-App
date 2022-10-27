import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Profile = () => {
  return (
    <Container>
     <Row>
     <Col xs={6} md={4}>
          xs=6 md=4
    </Col>
    <Col xs={12} md={8}>
        xs=12 md=8
    </Col>
      </Row>
  </Container>
  )
}

export default Profile