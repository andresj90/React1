import React from 'react'
import {Card, CardImg,CardText, CardHeader, CardSubtitle, CardTitle, Row, Col, CardBody} from 'reactstrap'; 
import './style.scss';

function Cast(props) {
    return (
        <div className="Cast_maincontainer">
           <CastLayout people={props.cast}></CastLayout>
        </div>
    )
}

function CastLayout({people}) {
    let castMembers = () => {
      return (
         <Row className="Cast_row">
            {people.map((person)=> {
               return (
                <Col md= {{size: 3}} className="Cast_col">
                   <CastInfo cast={person}></CastInfo>
                </Col>
               )  
            })}
         </Row>
      )    
    }
    
    return castMembers();
    
}

function CastInfo(props) {
    return (
        <div>
            <Card>
                <CardBody>
                   <Row>
                       <Col sm={{order:2}} md= {{size: 9, order:1}}>
                            <CardTitle>
                                <h6>{props.cast.person.name}</h6>
                            </CardTitle>
                            <CardSubtitle>
                               <p> as {props.cast.character.name} </p>
                            </CardSubtitle>                        
                       </Col>
                       <Col sm={{order:1}} md= {{size: 3, order:2}}>
                            <CardImg top width="100%" src={props.cast.person.image.medium} alt="Card image cap" />                               
                      </Col>
                   </Row>         
                   <CardText className="Cast_birthdate">
                        <p><strong>Birthdate: </strong> {props.cast.person.birthday}</p> 
                    </CardText>
                </CardBody>         
            </Card>
        </div>
    )
}

export default Cast
