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
        //console.log(moves)
        let correctMoves = [];
        for (let a = 0; a<moves.length; a++){
            var locPiece = board.getPiece(moves[a])
            if ((locPiece === undefined)||(locPiece.player !== this.player))
            {
                correctMoves.push(moves[a])   
            }
        }
        //console.log(correctMoves)
        return correctMoves;       
        // return moves       
    }
   
}