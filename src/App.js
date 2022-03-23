import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import TransationList from './components/TranscationList';
import AddTransaction from './components/AddTransaction';
import IncomeExpenses from './components/IncomeExpenses';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransaction />
      </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
