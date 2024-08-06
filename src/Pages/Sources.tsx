import Menu from '../Components/Menu';
import SourcesIntro from '../Sections/Sources/SourcesIntro';
import SourcesList from '../Sections/Sources/SourcesList';
import Footer from "../Components/Footer.tsx";

const Sources = () => {
    return (
        <div className='relative'>

            <Menu/>
            <SourcesIntro/>
            <SourcesList/>
            <Footer/>

        </div>
    );
}

export default Sources;
