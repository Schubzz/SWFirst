import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black text-center text-white p-12 border-t-accent border-t">
            <p>by</p>
            <p className="text-accent">
                Alexander Schulz
            </p>
            <p className="text-accent flex justify-center items-center">
                <FaLinkedin className="text-accent mr-2" />
                <a href="https://www.linkedin.com/in/alexander-schulz-aa012a209/" target="_blank" rel="noopener noreferrer" className="text-accent">
                    LinkedIn
                </a>
            </p>
        </footer>
    );
};

export default Footer;
