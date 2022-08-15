import React from 'react'
import { Container, 
         Input, 
         Error, 
         Submit,
         Base,
         Title,
         Text,
         TextSmall,
         Link } from './styles/form'

export default function Form({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Form.Input = function FormInput({...restProps}) {
    return <Input {...restProps} />
}

Form.Submit = function FormSubmit({children, ...restProps}) {
    return <Submit {...restProps}> {children} </Submit>
}

Form.Error = function FormError({children, ...restProps}) {
    return <Error {...restProps}> {children} </Error>
}

Form.Link = function FormLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
}

Form.Base = function FormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
}

Form.Text = function FormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

Form.TextSmall = function FormTextSmall({ children, ...restProps }) {
    return <TextSmall {...restProps}>{children}</TextSmall>;
}