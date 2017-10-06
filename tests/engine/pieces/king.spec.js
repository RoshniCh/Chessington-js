import 'chai/register-should';
import King from '../../../src/engine/pieces/king';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('King', () => {
       
        let board;
        beforeEach(() => board = new Board());    
        
        it('can move 1 step up or down', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(4, 4), king);

            const moves = king.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 4), Square.at(5, 4)]);
        });

        it('can move 1 step left or right', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(4, 4), king);

            const moves = king.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(4, 3), Square.at(4, 5)]);
        });

        it('can move 1 step diagonally', () => {
            const king = new King(Player.WHITE);
            board.setPiece(Square.at(4, 4), king);

            const moves = king.getAvailableMoves(board);
            moves.should.deep.include.members([Square.at(3, 3), Square.at(3, 5), Square.at(5, 3), Square.at(5, 5)]);
        });

});
