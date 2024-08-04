import Menu from '../Components/Menu';
import SourcesIntro from '../Sections/Sources/SourcesIntro';
import SourcesList from '../Sections/Sources/SourcesList';

const Sources = () => {
    return (
        <div className='relative'>

            <Menu />
            <SourcesIntro />
            <SourcesList />
           
        </div>
    );
}

export default Sources;
