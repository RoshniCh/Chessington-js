import Player from '../player';
import Square from '../square';
import Piece from './piece';

export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        var location = board.findPiece(this)
        if (this.player === Player.WHITE)
        {
            if ((location.row) == 1)
            {
                var moves = [Square.at(location.row +1,location.col),Square.at(location.row +2,location.col)]
                return moves;
            }
            else
            {
                var moves = [Square.at(location.row +1,location.col)]
                return moves;              
            }
        }
        else
        {
            if ((location.row) == 6)
            {
                var moves = [Square.at(location.row -1,location.col),Square.at(location.row -2,location.col)]
                return moves;
            }
            else
            {
                var moves = [Square.at(location.row -1,location.col)]
                return moves;    
            }
        }
        
//        return [Square.at(1,0)];
    }

 

}