import Navbar from './navbar';
import Offeres from './offers';
import Brand from './brands';
import Foot from './footer';
import Img from './imgslider';
import ScrollToTopButton from './scroll';
import Imag from './brands slider';
import City from './branches';
function Home(){
    return(
        <div>
            <Navbar/>
            <Img/>
            <Brand/>
            <Imag/>
            <Offeres/>
            <City/>
            <Foot/>
            <ScrollToTopButton/>
        </div>
    )
}
export default Home;