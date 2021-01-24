import styled from 'styled-components'

export const Container = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    font-family: 'Roboto', sans-serif;
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