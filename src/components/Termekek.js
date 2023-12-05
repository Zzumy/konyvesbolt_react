import Termek from "./Termek";

export default function Termekek(props) {
    function klikkEsemeny() {
        props.klikkEsemeny(props);
    }
    return (
        <div className="termekek row">
            {props.konyvAdatok.map((elem, index) => {
                return (
                    <Termek adat={elem} id={index} klikkEsemeny={klikkEsemeny} key={index}/>
                );
            })}
        </div>
    );
}
