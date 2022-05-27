export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () => 
    Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
    )

export const checkCollision = (player, stage, { x: moveX, y: moveY}) => {
    for(let y = 0; y < player.tetromino.length; y += 1){
        for (let x = 0; x < player.tetromino[0].length; x += 1 ){
             // Check that we're on an actual tetromino cell
             if (player.tetromino[y][x] !== 0 ){
                 
                 if(
                 //Check than owr move is inside the game areas height (y)
                 //We shouldn't go throught the bottom of the play area
                 !stage[y + player.pos.y + moveY] ||
                 !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                 stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                 //Check that our move is inside the game areas width (x)
                 //Check that the cell we're moving to isn't set to clear
                 ){
                     return true;
                 }
                }
        }
    }
}