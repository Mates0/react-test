import {useState} from "react";
import 'src/styles/Index.module.css';


export default function Counter() {
    const [btn, useBtn] = useState(0);

    return (
        <div>
            <h1>{btn}</h1>
            <button onClick={() => useBtn(btn + 1)}>Přidat</button>
            <button onClick={() => useBtn(btn - 1)}>Odebrat</button>
        </div>
    )
}