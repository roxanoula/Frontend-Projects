import React from 'react';
import {Feature, OptForm} from '../components'
import {JumbotronContainer} from '../containers/jumbotronContainer'
import {FooterContainer} from '../containers/footerContainer'
import {FaqsContainer} from '../containers/faqsContainer'
import {HeaderContainer} from '../containers/headerContainer'

function Home() {
    return (
        <>
            <HeaderContainer>
            <Feature>
                <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                <Feature.Subtitle>Watch anywhere. Cancel at any time.</Feature.Subtitle>
                <OptForm> 
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Try it now</OptForm.Button>
                    <OptForm.Break />
                    <OptForm.Text>Ready to watch ? Enter your email to create or restart your membership</OptForm.Text>
                </OptForm>
            </Feature>
            </HeaderContainer>
            <JumbotronContainer /> 
            <FaqsContainer />  
            <FooterContainer />
        </>
    )
}

export default Home