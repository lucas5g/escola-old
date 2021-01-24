import styled from 'styled-components'

export const Container = styled.nav`
    background: #007bff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3.5em;
    
    a{
        color: white;
        text-decoration: none;
        padding-left: 25px;
        font-weight: bold;
    }

    ul > li {
        display: inline;
    }
    ul > li > a {
        margin-right: 20px;
        padding-left:0;
    }
`