import {useState, useContext} from 'react';
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
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Provide text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                        (minus - expense, plus - income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Provide amount..." />
                </div>
                <button className="btn">Add new transaction</button>
        </form>
        </>
    )
}

export default AddTransaction