import Description from "../Sections/SW/Description.tsx";
import LifecycleSquares from "../Sections/SW/Lifecycle/LifecycleSquares.tsx";
import Lifecycle from "../Sections/SW/Lifecycle/Lifecycle.tsx";
import Pros from "../Sections/SW/Pros/Pros.tsx";
import Actions from "../Sections/SW/Actions/Actions.tsx";
import ActionsSquares from "../Sections/SW/Actions/ActionsSquares.tsx";
import Caching from "../Sections/SW/Caching/Caching.tsx";
import CachingSquares from "../Sections/SW/Caching/CachingSquares.tsx";
import BestPractices from "../Sections/SW/BestPractices.tsx";
import VitePWA from "../Sections/SW/VitePWA.tsx"
import SWIntro from "../Sections/SW/SWIntro.tsx";
import Menu from "../Components/Menu.tsx";
import Footer from "../Components/Footer.tsx";

const Sw = () => {
    return (
        <div className="relative">
            {/*<QuellenDownload />*/}
            <Menu/>
            <SWIntro/>
            <Description/>
            <Pros/>
            <LifecycleSquares/>
            <Lifecycle/>
            <ActionsSquares/>
            <Actions/>
            <CachingSquares/>
            <Caching/>
            <BestPractices/>
            <VitePWA/>
            <Footer/>
        </div>
    )
}

export default Sw