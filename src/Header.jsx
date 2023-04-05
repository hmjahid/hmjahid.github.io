import "./Header.css";

const Header = () => {
    return (
        <h1 className="Header">My Personal Details:</h1>  
    );    
}

function SubHeader(){
    return (
        <h2 className="SubHeader">(My professional informations)</h2>
    );  
}

export {SubHeader};
export default Header;