import React from 'react'
import {Row, Col,Media } from 'reactstrap';

function ShowInfo({show}) {
    return (
        <React.Fragment>
             <Row className="ShowInfo_main">
                    <Col md={{size:2}}>
                        <img src={show.image.medium}></img>
                    </Col>  
                    <Col md={{size:10}}>
                        <h2>
                           {show.name}
                        </h2>
                        <h5>
                           {show.webChannel.name}
                        </h5>
                        <p>
                           {show.summary}
                        </p>
                        <h6>
                           {show.genres} 
                        </h6>
                    </Col> 
                    {console.log(show)}
             </Row>
        </React.Fragment>
    )
}



export default ShowInfo
