import React from 'react'


const BingoSquare = ({ text, isSelected, cardColor, index, handleClick }) => {
    return (
        <button key={index} disabled={isSelected} onClick={() => handleClick(index)} className="bingo-square" style={{ backgroundColor: cardColor }}>
            <p style={{ textDecoration: isSelected ? "line-through" : "none" }}>{text}</p>
        </button>
    )
}

export default BingoSquare