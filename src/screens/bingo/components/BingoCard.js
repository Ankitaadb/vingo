import React from 'react'
import BingoSquare from './BingoSquare'
import '../style.css'

const BingoCard = ({ data, handleClick }) => {
    return (
        <div className={"card"}>
            {data.slice(0, 25).map((square, index) =>
                index === 12 ? 
                <BingoSquare text={"CONF Call 🤐 BINGO"} cardColor={"#fff"} index={index} handleClick={() => handleClick(index)} />
                : 
                <BingoSquare text={square.text} isSelected={square.isSelected} cardColor={square.cardColor} index={index} handleClick={() => handleClick(index)} />
            )}
        </div>
    )
}

export default BingoCard