import "./App.css";
import Termekek from "./components/Termekek";
import { konyvLista } from "./models/Konyvek";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    function klikk(id) {
        console.log(id);
    }
    return (
        <div className="App">
            <header className="App-header">
                <h1>Könyvesbolt</h1>
            </header>
            <article>
                <Termekek konyvAdatok={konyvLista} klikkEsemeny={klikk} />
            </article>
        </div>
    );
}
