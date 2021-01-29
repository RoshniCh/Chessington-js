import 'chai/register-should';
import Knight from '../../../src/engine/pieces/knight';
import Rook from '../../../src/engine/pieces/rook';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Knight', () => {
       
        let board;
        beforeEach(() => board = new Board());    
        
        it('can move 1 row and 2 columns', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(4, 4), knight);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include.members([Square.at(5, 2), Square.at(5, 6),Square.at(3, 2),Square.at(3, 6)]);
        });

        it('can move 2 rows and 1 column', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(4, 4), knight);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include.members([Square.at(6, 3),Square.at(6, 5),Square.at(2, 3),Square.at(2, 5)]);
        });

        it('can move into a spot if opponent piece in the spot', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(4, 4), knight);
            const rook = new Rook(Player.BLACK);
            board.setPiece(Square.at(6, 3), rook);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(8);
            moves.should.deep.include.members([Square.at(6, 3),Square.at(6, 5),Square.at(2, 3),Square.at(2, 5)]);
        });

        it('cannot move into a spot if your piece in the spot', () => {
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(4, 4), knight);
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(6, 3), rook);

            const moves = knight.getAvailableMoves(board);
            moves.should.have.length(7);
            moves.should.deep.include.members([Square.at(6, 5),Square.at(2, 3),Square.at(2, 5)]);
        });

});
