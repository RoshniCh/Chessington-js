import 'chai/register-should';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Bishop', () => {
       
        let board;
        beforeEach(() => board = new Board());    
        
        it('can move diagonally up and left', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(4, 4), bishop);

            const moves = bishop.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(5, 3), Square.at(6, 2),Square.at(7, 1)]);
        });

        it('can move diagonally up and right', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(4, 4), bishop);

            const moves = bishop.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(5, 5), Square.at(6, 6),Square.at(7, 7)]);
        });

        it('can move diagonally down and left', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(4, 4), bishop);

            const moves = bishop.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 3), Square.at(2, 2),Square.at(1, 1),Square.at(0, 0)]);
        });

        it('can move diagonally down and right', () => {
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(4, 4), bishop);

            const moves = bishop.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 5), Square.at(2, 6),Square.at(1, 7)]);
        });

});
