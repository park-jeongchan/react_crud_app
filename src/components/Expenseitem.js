import React from 'react'

const Expenseitem = ({expense, handleDelete, handleEdit}) => {
  return (
    <li>
        <div>
            <span>{expense.charge}</span>{" "}
            <span>{expense.amount}원</span>  
        </div>
        <div>
            <button onClick={() => handleEdit(expense.id)}>수정</button>
            <button onClick={() => handleDelete(expense.id)}>삭제</button>
        </div>
    </li>
  )
}

export default Expenseitem