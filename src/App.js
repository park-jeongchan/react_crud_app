import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import { useState } from 'react';

function App() {

  const [expenses, setExpenses] = useState(
    [
      { id: 1, charge: '렌트비', amount: 1500 },
      { id: 2, charge: '교통비', amount: 3000 }
    ]
  );

  const [charge, setCharge] = useState('');
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState('');


  const handleDelete = (id) => {
    const newExpense = expenses.filter(expense => expense.id !== id);
    setExpenses(newExpense);
  }

  const handleCharge = (e) => {
    setCharge(e.target.value);
  }

  const handleAmount = (e) => {
    setAmount(e.target.valueAsNumber);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (isEditing) {
        const newExpenses = expenses.map(item => {
          return item.id === id ? {...item, charge, amount} : item;
        })
        setExpenses(newExpenses);
        setIsEditing(false);
        setCharge('');
        setAmount(0);
      } else {
        const newExpense = {
          id: crypto.randomUUID(),
          charge,
          amount
        }
        const newExpenses = [...expenses, newExpense];
        setExpenses(newExpenses);
        setCharge('');
        setAmount(0);
      }

    } else {
      alert('다 넣고 입력');
    }
  }


const [isEditing, setIsEditing] = useState(false);

const handleEdit = (id) => {
  const temp = expenses.find(expense => expense.id === id);
  const { charge, amount } = temp;
  setCharge(charge);
  setAmount(amount);
  setId(id);
  setIsEditing(true);
}

const handleAllDelete = () => {
  setExpenses([]);
}
return (
  <main className='main-container'>
    <h1>예산 계산기</h1>

    <div style={{width: '100%', background: 'white', padding: '1rem', border: '5px solid blue'}}>
      <ExpenseForm
        charge={charge} amount={amount} isEditing={isEditing}
        handleCharge={handleCharge}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
      />
    </div>
    <div style={{width: '100%', background: 'white', padding: '1rem', border: '5px solid blue'}}>
      Expense List
      <ExpenseList
        handleDelete={handleDelete}
        initialExpense={expenses}
        handleEdit={handleEdit}
        handleAllDelete={handleAllDelete}
      />
    </div>

    <div style={{display: 'flex', justifyContent: 'end', marginTop: '1rem'}}>
      <p style={{fontSize: "2rem"}}>
        총지출:
        <span>
          {
            expenses.reduce((acc, curr) => {
              return acc += curr.amount;
            }, 0)
          }
          원</span>
      </p>
    </div>
  </main>

);
}

export default App;
