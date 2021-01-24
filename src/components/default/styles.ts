import styled from 'styled-components'

export const Container = styled.div`
    display: grid;
    height: 100vh;
    /* background: red; */

    grid-template-rows: auto 1fr auto;

    grid-template-areas: 'navbar' 
    'main'  'footer';
    
    nav{
        grid-area: navbar;
    }
    main{
        grid-area: main;
        /* height: 100vh */
    }
    footer{
        grid-area: footer;
    }

}
`