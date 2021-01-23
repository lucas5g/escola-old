import Navbar from "../Navbar"
import Footer from "../Footer"
import { Container } from "./styles"

function Default({children}) {
    return (
        <Container>
            <Navbar />
            {children}
            <Footer />
        </Container>
    )
}

export default Default