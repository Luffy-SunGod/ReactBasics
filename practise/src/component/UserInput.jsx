
import { useState } from 'react';
export default function UserInput() {
    const [input, setInput] = useState("");
    return (
        <div>
            <div>{input}</div>
            <br />
            <input type="text" onChange={(e) => setInput(e.target.value)} />
        </div>
    )
}
