import React from 'react'

export default function Buttons(props) {

    const initialAction = () => {
        props.actions.initialAction();
    }

    const firstTimer = () => {
        props.actions.firstTimer();
    }

    const notEnoughMoney = () => {
        props.actions.notEnoughMoney();
    }

    const advice = () => {
        props.actions.advice();
    }

    return (
        <div>
            <button className='chatbot-btn' onClick={() => initialAction()}>About website</button>
            <button className='chatbot-btn' onClick={() => firstTimer()}>New To Investing</button>
            <button className='chatbot-btn' onClick={() => notEnoughMoney()}>Can't Buy Whole Property</button>
            <button className='chatbot-btn' onClick={() => advice()}>Advice</button>
        </div>
    )
}