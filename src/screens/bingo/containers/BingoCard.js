import React from 'react'
import { shuffle } from '../../../utils/helper'
import { BingoCardComponent } from '../components'
import data from '../../../assets/resource/data.json';
import { winMatrix } from '../constants';
import Confetti from 'react-canvas-confetti';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            squares: data,
            winState: false,
            winMatrix: winMatrix
        }
    }

    componentDidMount = () => {
        this.setState({ squares: shuffle(data) })
    }

    handleClick = (squareIndex) => {
        let { squares } = this.state
        squares = squares.map((square, index) => {
            if (index === squareIndex) {
                !!square.isSelected ? square.isSelected = false : square.isSelected = true;
            }
            return square;
        })
        this.checkWinner(squares)
        this.setState({ squares });
    }

    checkWinner = (squares) => {
        const { winMatrix } = this.state
        winMatrix.forEach(item => {
            if (!item.alreadyBingo) {
                const [a, b, c, d, e] = item.indexes;
                if (squares[a].isSelected && squares[b].isSelected && squares[c].isSelected && squares[d].isSelected && squares[e].isSelected) {
                    item.alreadyBingo = true
                    this.setState({ winState: true, winMatrix })
                    setTimeout(() => {
                        this.setState({ winState: false })
                    }, 3000);
                }
            }
        })
    }


    render() {
        const { squares, winState } = this.state
        const style = {
            position: 'fixed',
            width: '100%',
            height: '100%',
            zIndex: winState ? 1000 : -1
        }
        return (
            <div>
                <Confetti style={style} fire={winState} particleCount={1000} spread={360} />
                <div className="container">
                    <BingoCardComponent
                        data={squares}
                        winState={winState}
                        handleClick={this.handleClick}
                    />
                </div>
            </div>
        )
    }

}

export default Home