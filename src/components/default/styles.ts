import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    background: gray;
    
    grid-template-rows: 10vh 1fr 15vh;

    grid-template-areas: 'navbar' 
    'main'  'footer';
    
    nav{
        grid-area: navbar;
    }
    main{
        grid-area: 'main';
    }
    footer{
        grid-area: 'footer';
    }

}
`