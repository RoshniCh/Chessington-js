import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var location = board.findPiece(this)
        var moves = []
        for (var i=0;i<8;i++)
        {
            if (i!=location.col)
            {
                moves.push(Square.at(location.row,i))
            }
        }
        for (var i=0;i<8;i++)
        {
            if (i!=location.row)
            {
                moves.push(Square.at(i,location.col))
            }
        }
        return moves;              
    }
   
}
