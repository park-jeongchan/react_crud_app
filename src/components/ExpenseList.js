import React from 'react'
import Expenseitem from './Expenseitem'

const ExpenseList = ({ initialExpense, handleDelete, handleEdit, handleAllDelete }) => {
    return (
        <>
            <ul>
                {
                    initialExpense.map(expense => {
                        return (
                            <Expenseitem
                                expense={expense}
                                key={expense.id}

                                handleDelete={handleDelete}
                                handleEdit={handleEdit}
                            />
                        )
                    })
                }

            </ul>
            <button onClick={() => handleAllDelete()}>
                목록 지우기
            </button>
        </>
    )
}

export default ExpenseList