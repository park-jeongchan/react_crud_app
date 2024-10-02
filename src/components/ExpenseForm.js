import React from 'react'

const ExpenseForm = ({charge, amount, isEditing, handleCharge, handleAmount, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <label htmlFor='expense'>지출 항목 </label>
                    <input
                        type="text"
                        id='charge'
                        name='charge'
                        placeholder='예)렌트비'
                        value={charge}
                        onChange={(e) => handleCharge(e)}
                    />
                </div>
                <div>
                    <label htmlFor='expense'>비용 </label>
                    <input
                        type="number"
                        id='amount'
                        name='amount'
                        placeholder='예)1000'
                        value={amount}
                        onChange={(e) => handleAmount(e)}
                    />
                </div>
            </div>
            <button type='submit'>
                {
                    isEditing ? "수정":"제출"
                }
            </button>
        </form>
    );
}

export default ExpenseForm