
interface ProCardProps {
    title: string;
    description: string;
    link: string;
    linkText: string;
}

const ProCards = ( { title, description, link, linkText } : ProCardProps ) => {

    return (
        <div className="pros-container group hover:bg-accent rounded-lg p-4 mb-4 transition-all duration-800">
            <h3 className="opacity-30 group-hover:opacity-100 group-hover:text-black">{title}</h3>
            <p className="hidden group-hover:flex text-black transition-all duration-800">{description}</p>
            <a className="mt-6 hidden group-hover:flex font-bold transition-all duration-800 text-gray-800 hover:text-black hover:font-normal" href={link} target="_blank">{linkText}</a>
        </div>
    )
}

export default ProCards