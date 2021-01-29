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
        //left horizontal
        var a=location.col-1
        if (a>=0)
        {
            for (var i=a;i>=0;i--)
            {
                var locPiece = board.getPiece(Square.at(location.row,i))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row,i))
                }
                else if (locPiece.player !== this.player) 
                {
                    moves.push(Square.at(location.row,i))
                    break;
                }
                else
                {
                    break;
                }

            }
        }
        //right horizontal
        var a=location.col+1
        if (a<8)
        {
            for (var i=location.col+1;i<8;i++)
            {
                var locPiece = board.getPiece(Square.at(location.row,i))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(location.row,i))
                }
                else if (locPiece.player !== this.player) 
                {
                    moves.push(Square.at(location.row,i))
                    break;
                }
                else
                {
                    break;
                }
            }
        }
        //up vertical
        var b=location.row-1
        if (b>=0)
        {
            for (var i=b;i>=0;i--)
            {
                var locPiece = board.getPiece(Square.at(i,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(i,location.col))
                }
                else if (locPiece.player !== this.player) 
                {
                    moves.push(Square.at(i,location.col))
                    break;
                }
                else
                {
                    break;
                }
            }
        }
        //down vertical
        var b=location.row+1
        if (b<8)
        {
            for (var i=location.row+1;i<8;i++)
            {
                var locPiece = board.getPiece(Square.at(i,location.col))
                if (locPiece === undefined)
                {
                    moves.push(Square.at(i,location.col))
                }
                else if (locPiece.player !== this.player) 
                {
                    moves.push(Square.at(i,location.col))
                    break;
                }
                else
                {
                    break;
                }
            }
        }
        return moves;              
    }

    // checkPiece(r,c,moves)
    // {
    //     var locPiece = board.getPiece(Square.at(r,c))
    //             if (locPiece === undefined)
    //             {
    //                 moves.push(Square.at(r,c))
    //             }
    //             else if (locPiece.player !== this.player) 
    //             {
    //                 moves.push(Square.at(r,c))
    //                 break; ***
    //             }
    //             else
    //             {
    //                  break; ***
    //             }
    //             return moves
    // }
   
}
