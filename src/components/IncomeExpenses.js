import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

function IncomeExpenses() {
    const { transactions } = useContext(GlobalContext);

    const amounts = transactions.map(transcation => transcation.amount);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0);

    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1);
    
    return (
        <div class="inc-exp-container">
            <div>
                <h4>Przychód</h4>
                <p className="money plus">+{income} PLN</p>
            </div>
            <div>
                <h4>Wydatki</h4>
                <p className="money minus">-{expense} PLN</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
