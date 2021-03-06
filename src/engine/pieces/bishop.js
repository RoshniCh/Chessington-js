import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Bishop extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var location = board.findPiece(this)
        var moves = []
        //up and left
        var y=location.col-1
        for (var x=location.row+1; x<8 && y>=0 ;x++,y--)
        {
            
            moves.push(Square.at(x,y))
        }

        //up and right
        var y=location.col+1
        for (var x=location.row+1; x<8 && y<8 ;x++,y++)
        {
            moves.push(Square.at(x,y))
        }

        //down and left
        var y=location.col-1
        for (var x=location.row-1; x>=0 && y>=0 ;x--,y--)
        {
            moves.push(Square.at(x,y))
        }

        //down and right
        var y=location.col+1
        for (var x=location.row-1; x>=0 && y<8 ;x--,y++)
        {
            moves.push(Square.at(x,y))
        }
        return moves;              
    }
   
}
