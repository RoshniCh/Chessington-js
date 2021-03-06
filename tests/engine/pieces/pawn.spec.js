import 'chai/register-should';
import Pawn from '../../../src/engine/pieces/pawn';
import Bishop from '../../../src/engine/pieces/bishop';
import Board from '../../../src/engine/board';
import Player from '../../../src/engine/player';
import Square from '../../../src/engine/square';

describe('Pawn', () => {

    describe('white pawns', () => {

        let board;
        beforeEach(() => board = new Board());    
        
        it('can only move one square up if they have already moved', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 0), pawn);
            pawn.moveTo(board, Square.at(2, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(3, 0));
        });

        it('can move one or two squares up on their first move', () => {
            const pawn = new Pawn(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(2, 7), Square.at(3, 7)]);
        });

        it('can move only one step if there is a piece on the second step', () => {
            const pawn = new Pawn(Player.WHITE);
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(1, 7), pawn);
            board.setPiece(Square.at(3, 7), bishop);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(1);
            moves.should.deep.include.members([Square.at(2, 7)]);
        });

        it('can move diagonally one step forward if there is an opposite piece in the square', () => {
            const pawn = new Pawn(Player.WHITE);
            const bishop = new Bishop(Player.BLACK);
            board.setPiece(Square.at(1, 5), pawn);
            board.setPiece(Square.at(2, 4), bishop);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(3);
            moves.should.deep.include.members([Square.at(2, 4)]);
        });

    });

    describe('black pawns', () => {

        let board;
        beforeEach(() => board = new Board(Player.BLACK));    
        
        it('can only move one square down if they have already moved', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 0), pawn);
            pawn.moveTo(board, Square.at(5, 0));

            const moves = pawn.getAvailableMoves(board);
            
            moves.should.have.length(1);
            moves.should.deep.include(Square.at(4, 0));
        });

        it('can move one or two squares down on their first move', () => {
            const pawn = new Pawn(Player.BLACK);
            board.setPiece(Square.at(6, 7), pawn);

            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(2);
            moves.should.deep.include.members([Square.at(4, 7), Square.at(5, 7)]);
        });

        it('can move diagonally one step forward if there is an opposite piece in the square', () => {
            const pawn = new Pawn(Player.BLACK);
            const bishop = new Bishop(Player.WHITE);
            board.setPiece(Square.at(6, 5), pawn);
            board.setPiece(Square.at(5, 4), bishop);
            const moves = pawn.getAvailableMoves(board);

            moves.should.have.length(3);
            moves.should.deep.include.members([Square.at(5, 4)]);
        });

    });

});
