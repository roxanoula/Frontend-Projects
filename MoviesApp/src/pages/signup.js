import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import {HeaderContainer} from '../containers/headerContainer'
import {Form} from '../components'
import * as ROUTES from '../constants/routes'
import { FooterContainer } from '../containers/footerContainer'
import { FirebaseContext } from '../context/firebase'

export default function Signup() {
    const [password, setPassword] = useState('')
    const [emailAddress, setEmailAddress] =useState('')
    const [firstName, setFirstName] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()
    const {firebase} = useContext(FirebaseContext)

    function isEmptyField(field) {
        return field === ''
    }

    const isInvalid = isEmptyField(firstName) | isEmptyField(emailAddress) | isEmptyField(password) 

    const handleSignup = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password)
            .then( (result) =>
                    result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random() * 5)+1
                    })
                    .then( () => history.pushState(ROUTES.BROWSE) )
                ).catch( (error) => {
                    setEmailAddress('')
                        setPassword('')
                    setError(error.message)
                    }
                )
    }

    return (
        <>
            <HeaderContainer> 
                <Form>
                    <Form.Title> Sign up </Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                        <Form.Input
                            placeholder="First Name"
                            value={firstName}
                            onChange={({target}) => setFirstName(target.value)}
                        />
                        <Form.Input
                            placeholder="Email Address"
                            value={emailAddress}
                            onChange={({target}) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            placeholder="Password"
                            type="password"
                            autoComplete="off"
                            value={password}
                            onChange={({target}) => setPassword(target.value)}
                        />
                        
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>
                        
                        <Form.Text>
                            Already a user? <Form.Link to="/signin">Sign in here.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA.
                        </Form.TextSmall>
                    
                    </Form.Base>
                </Form>
            </HeaderContainer>

            <FooterContainer />
        </>

    )
}
