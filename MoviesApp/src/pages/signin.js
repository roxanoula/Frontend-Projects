import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import { FirebaseContext } from '../context/firebase'
import { Form } from '../components'
import { FooterContainer } from '../containers/footerContainer'
import { HeaderContainer } from '../containers/headerContainer'
import * as ROUTES from '../constants/routes'

export default function Signin({children}) {
    const [error, setError] = useState()
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const {firebase} = useContext(FirebaseContext)
    const history = useHistory()

    const isInvalid = password === '' | emailAddress === ''
    const handleSignin = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then( () => {
                
                history.push(ROUTES.BROWSE)
            })
            .catch( (error) => {
                setEmailAddress('')
                setPassword('')
                setError(error.message)
            })
    }
    return(
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)} 
                        />
                        <Form.Submit type="submit" disabled={isInvalid}> Sign In </Form.Submit>
                    
                        <Form.Text> 
                            New to MoviesApp ? 
                            <Form.Link to="/signup">Sign up now.</Form.Link>
                        </Form.Text>
                        <Form.TextSmall>
                            This page is protected by Google CAPTCHA
                        </Form.TextSmall>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
            </>
    )
}