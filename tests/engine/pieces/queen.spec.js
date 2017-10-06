import 'chai/register-should';
import Queen from '../../../src/engine/pieces/queen';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Queen', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can move horizontally', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(0, 0), queen);

            const moves = queen.getAvailableMoves(board);

            moves.should.deep.include.members([Square.at(0, 1), Square.at(0, 2),Square.at(0, 3),Square.at(0, 4),
                Square.at(0, 5),Square.at(0, 6),Square.at(0, 7)]);
        });
        it('can move vertically in straight lines', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(0, 0), queen);

            const moves = queen.getAvailableMoves(board);

            moves.should.deep.include.members([Square.at(1, 0), Square.at(2, 0), Square.at(3, 0), Square.at(4, 0), Square.at(5, 0),
                 Square.at(6, 0), Square.at(7, 0)]);
        });
        it('can move diagonally up and left', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);

            const moves = queen.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(5, 3), Square.at(6, 2),Square.at(7, 1)]);
        });

        it('can move diagonally up and right', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);

            const moves = queen.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(5, 5), Square.at(6, 6),Square.at(7, 7)]);
        });

        it('can move diagonally down and left', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);

            const moves = queen.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 3), Square.at(2, 2),Square.at(1, 1),Square.at(0, 0)]);
        });

        it('can move diagonally down and right', () => {
            const queen = new Queen(Player.WHITE);
            board.setPiece(Square.at(4, 4), queen);

            const moves = queen.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 5), Square.at(2, 6),Square.at(1, 7)]);
        });

});
