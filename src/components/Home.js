import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
    return (
        <Container>
                <Section
                title="Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg="/images/model-s.jpg"
                lbtnt="custom order"
                rbtnt="inventory"
                />

                <Section
                title="Model 3"
                description= "Order Online for Touchless Delivery"
                backgroundImg="/images/model-3.jpg"
                lbtnt="custom order"
                rbtnt="inventory"
                />

                <Section
                title="Model X"
                description= "Order Online for Touchless Delivery"
                backgroundImg="/images/model-x.jpg"
                lbtnt="custom order"
                rbtnt="inventory"
                />
                <Section
                title="Model Y"
                description= "Order Online for Touchless Delivery"
                backgroundImg="/images/model-y.jpg"
                lbtnt="custom order"
                rbtnt="inventory"
                />

   
        </Container>
    )
}

export default Home

const Container=styled.div`
height:100vh`