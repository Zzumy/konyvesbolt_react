export default function Termek(props) {
    function klikk() {
        props.klikkEsemeny(props);
    }
    return (
        <div className="konyv col-lg-3" id={props.id}>
            <div className="cim">{props.adat.cim}</div>
            <div className="leiras">
                <p>{props.adat.szerzo}</p>
                <p>{props.adat.ar}</p>
            </div>
            <div className="gomb">
                <button onClick={klikk}>Ok</button>
            </div>
        </div>
    );
}
