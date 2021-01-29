import 'chai/register-should';
import Rook from '../../../src/engine/pieces/rook';
import Knight from '../../../src/engine/pieces/knight';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Rook', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can move horizontally', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);

            const moves = rook.getAvailableMoves(board);

            moves.should.deep.include.members([Square.at(0, 1), Square.at(0, 2),Square.at(0, 3),Square.at(0, 4),
                Square.at(0, 5),Square.at(0, 6),Square.at(0, 7)]);
        });
        it('can move vertically in straight lines', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);

            const moves = rook.getAvailableMoves(board);

            moves.should.deep.include.members([Square.at(1, 0), Square.at(2, 0), Square.at(3, 0), Square.at(4, 0), Square.at(5, 0),
                 Square.at(6, 0), Square.at(7, 0)]);
        });
        it('can move 14 different moves', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);

            const moves = rook.getAvailableMoves(board);

            moves.should.have.length(14);
        });
        it('cannot move beyond its own piece', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);
            const knight = new Knight(Player.WHITE);
            board.setPiece(Square.at(0, 4), knight);

            const moves = rook.getAvailableMoves(board);
            moves.should.have.length(10)
            moves.should.deep.include.members([Square.at(0, 1), Square.at(0, 2),Square.at(0, 3)]);
        });

        it('can move till opponent piece, but not beyond', () => {
            const rook = new Rook(Player.WHITE);
            board.setPiece(Square.at(0, 0), rook);
            const knight = new Knight(Player.BLACK);
            board.setPiece(Square.at(0, 4), knight);

            const moves = rook.getAvailableMoves(board);
            moves.should.have.length(11)
            moves.should.deep.include.members([Square.at(0, 1), Square.at(0, 2),Square.at(0, 3),Square.at(0, 4)]);
        });
        
    
});
