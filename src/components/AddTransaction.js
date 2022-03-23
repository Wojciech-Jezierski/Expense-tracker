import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

function AddTransaction() {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction)
    }

    return (
        <>
            <h3>Dodaj nową transakcję</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlfor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Wprowadź tekst..." />
                </div>
                <div className="form-control">
                    <label htmlfor="amount">
                        Kwota <br />
                        (ujemna - wydatek, dodatnia - przychód)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Wprowadź kwotę..." />
                </div>
                <button className="btn">Dodaj nową transakcję</button>
        </form>
        </>
    )
}

export default AddTransaction
