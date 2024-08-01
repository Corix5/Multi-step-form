import "./Header.css";

interface HeaderProps {
    title:string,
    description:string
}

const Header = ({title, description}: HeaderProps) => {
    return (  
        <section className="header-container">
            <h1>{title}</h1>
            <p>{description}</p>
        </section>
    );
}
 
export default Header;