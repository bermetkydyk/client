import React, { Component } from 'react';
import M from "materialize-css";
import { Card } from "react-bootstrap";
import "./box.css";
import styled from 'styled-components'
import goalsImage from './goalsimage.jpg';

const Styles = styled.div`` ;
//responsive and dynamic box
const Goals = () => {
    const cardInfo = [
        { image: "https://www.cidrap.umn.edu/sites/default/files/public/styles/detail/public/media/article/paris_skyline.jpg?itok=fxCL1i0I", title: "Travel", text: "France"},
        { image: "https://manofmany.com/wp-content/uploads/2018/03/15-Best-Small-Cars.jpg", title: "Auto", text: "Audi"},
        { image: "https://smartspaceproperty.co.uk/wp-content/uploads/2019/10/5-great-tips-for-investing-in-rental-properties-in-the-UK.jpg", title: "Property", text: "My house!!!"},
        { image: "https://www.fastweb.com/uploads/article_photo/photo/2037988/crop635w_collegehumor-launches-stunt-reality-show-that-pays-off-student-loan-debt.jpg", title: "Student loan", text: "Student loan payment almost done"},
        { image: "", title: "Other", text: ""},
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.text}</Card.Text>
                </Card.Body>
            </Card>

        );
    };

           
return <div className="grid">
    <h1>My Goals</h1>
    {cardInfo.map(renderCard)}
</div>
};

 


export default Goals;