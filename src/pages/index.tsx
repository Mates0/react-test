import 'src/styles/Index.module.css';
import {useState} from "react";
import Counter from "./Counter";
import products from "src/products/products"

export default function Home() {
    const [counter, setCounter] = useState(true)

    return (
        <div>
            <button type="button" onClick={() => setCounter(!counter)}>
                {counter ? "Schovat" : "Ukazat"}
            </button>
            {counter && <Counter/>}
        </div>
    )
}
