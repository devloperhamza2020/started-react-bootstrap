import React from 'react';
import { Card, Button } from 'react-bootstrap';

const News = (props) => {

    const { title, description, source } = props.article;
    
    
    const cardStyle = {
        margin: "11px",
        height: "300px",
        width: "48%",
        float: "left"
    }

    const btnStyle = {
        margin: "10px 10px 0px 10px",
        backgroundColor: "pur"
    }

    return (
        <div className=""> 
            <Card style={cardStyle}>
                <Card.Header><h3 style={{fontWeight: "bolder", color: "tomato", textAlign: "center"}}>{source.name}</h3> </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                        <Button style={btnStyle}>Read more..</Button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;