import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var location = board.findPiece(this)
        var moves = []
        moves.push(Square.at(location.row+1,location.col-2))
        moves.push(Square.at(location.row+1,location.col+2))
        moves.push(Square.at(location.row-1,location.col-2))
        moves.push(Square.at(location.row-1,location.col+2))

        moves.push(Square.at(location.row+2,location.col-1))
        moves.push(Square.at(location.row+2,location.col+1))
        moves.push(Square.at(location.row-2,location.col-1))
        moves.push(Square.at(location.row-2,location.col+1))
        return moves;              
    }
   
}