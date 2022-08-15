import React from 'react'
import { Container, Title, Item, Picture, Name, List } from './styles/profiles'

export default function Profiles({children, ...restProps}) {
    return (<Container {...restProps}>{children}</Container>)
}

Profiles.List = function ProfilesList({children, ...restProps}) {
    return <List {...restProps}>{children}</List>
}

Profiles.Title = function ProfilesTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Profiles.User = function ProfilesUser({children, ...restProps}) {
    return (<Item {...restProps}> {children} </Item>)
}
Profiles.Picture = function ProfilesPicture({src, ...restProps}) {
    return <Picture {...restProps} src={src ? `/images/users/${src}.png` :
    '/images/misc/loading.gif'} />;
}

Profiles.Name = function ProfilesName({children, ...restProps}) {
    return (<Name {...restProps}> {children} </Name>)
}