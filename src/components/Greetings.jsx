import Invitation from "./Invitation";

function Starter(){
    return (
    <p style={{color: "red", margin: "0px 28px 0px 28px", backgroundColor: "white", padding:"5px", fontWeight:"bold", borderRadius: "8px", fontSize: "24px", boxShadow: "5px 5px 5px 5px black"}}>*** Starting By The Name Of Almighty ALLAH ***</p>
    );
}
const Greetings = function (){
    return(
        <div>
            <h3>"Assalamu Alaikum"</h3>
            <h4>Welcome to my personal site!</h4>
        </div>
    );
}
const Introduction = () => {
    return(
        <div>
            <h4>Thanks for visiting my site</h4>
            <Invitation/>
        </div>
    );
}

export {Starter, Greetings, Introduction};