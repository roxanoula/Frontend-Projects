import React, {useState} from 'react'
import {Link as ReachRouterLink} from 'react-router-dom'
import { Background, 
         Container, 
         Logo, 
         ButtonLink,
         PlayButton, 
         Group, 
         Text, 
         Link,
         Feature,
         FeatureCallOut,
         Search,
         SearchIcon,
         SearchInput,
         Picture,
         Dropdown,
         Profile } from './styles/header'

export default function Header({bg=true, children, ...restProps}) {
    return bg ? <Background {...restProps}> {children} </Background> : {children}
}

Header.Frame = function HeaderFrame({children, ...restProps}) {
    return <Container {...restProps}> {children} </Container>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
}

Header.Logo = function HeaderLogo({to, ...restProps}) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.Link = function HeaderLink({to, children, ...restProps}) {
    return <Link to={to} {...restProps}> {children} </Link>
}

Header.Text = function HeaderText({to, children, ...restProps}) {
    return <Text to={to} {...restProps}> {children} </Text>
}

Header.ButtonLink = function HeaderButtonLink({to, children, ...restProps}) {
    return <ButtonLink to={to} {...restProps}> {children} </ButtonLink>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
    return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({children, ...restProps}) {
    return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps }) {
    const [searchActive, setSearchActive] = useState(false);
    
    return (
        <Search {...restProps}>
            <SearchIcon onClick={() => setSearchActive(!searchActive)}>
                <img src="/images/icons/search.png" alt="Search" />
            </SearchIcon>
            <SearchInput
                value={searchTerm}
                onChange={({ target }) => setSearchTerm(target.value)}
                placeholder="Search"
                active={searchActive}
            />
        </Search>
    )
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
    return (
        <Profile {...restProps}>
            {children}
        </Profile>
    )
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={`/images/users/${src}.png` } />;
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
    return <Dropdown {...restProps}>{children}</Dropdown>;
}