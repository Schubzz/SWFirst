import Menu from "../Components/Menu.tsx"
import PWADescription from "../Sections/PWA/PWADescription.tsx"
import PWAIntro from "../Sections/PWA/PWAIntro.tsx"
import Tutorial from "../Sections/PWA/Tutorial.tsx"
import Footer from "../Components/Footer.tsx";

const Pwa = () => {
    return (
        <div>
            <Menu/>
            <PWAIntro/>
            <PWADescription/>
            <Tutorial/>
            <Footer/>
        </div>
    )
}

export default Pwa