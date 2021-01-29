import Player from '../player';
import Square from '../square';
import Piece from './piece';
import Board from '../../../src/engine/board';

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
                var moves = []
                var locPiece = board.getPiece(Square.at(location.row +1,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row +1,location.col))
                    var locPiece2 = board.getPiece(Square.at(location.row +2,location.col))
                    if (locPiece2 === undefined)
                    {
                        moves.push(Square.at(location.row +2,location.col))
                    }
                }
                return moves;
            }
            else
            {
                var moves = []
                var locPiece = board.getPiece(Square.at(location.row +1,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row +1,location.col))
                }
                return moves;              
            }
        }
        else
        {
            if ((location.row) == 6)
            {
                var moves = []
                var locPiece = board.getPiece(Square.at(location.row -1,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row -1,location.col))
                    var locPiece2 = board.getPiece(Square.at(location.row -2,location.col))
                    if (locPiece2 === undefined)
                    {
                        moves.push(Square.at(location.row -2,location.col))
                    }
                }
                return moves;
            }
            else
            {
                var moves = []
                var locPiece = board.getPiece(Square.at(location.row -1,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row -1,location.col))
                }
                return moves;              
            }
        }
     
    }

 

}