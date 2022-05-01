const ROWS = 6;
const COLS = 4;
let grid = [];
let colorGrid = [];
const WORD = "rick";

for (let r = 0; r < ROWS; r++){
    let row = [];
    let colorRow = [];
    for (let c = 0; c < COLS; c++){
        row.push(" ");
        colorRow.push("#555");
    }
    grid.push(row);
    colorGrid.push(colorRow);
}

console.log(grid);

let posRow = 0;
let posCol = 0;

document.addEventListener("keydown", function myFunction(event) {
    const ALPH = "abcdefghjiklmnopqrstuvwxz";

    if(event.keyCode == 8){
        if(posCol != 0){
            posCol --;
            grid[posRow][posCol] = " ";
            document.getElementById("l"+posRow+posCol).innerHTML = " ";    
        }        
    }

    if(ALPH.includes(event.key) && grid[ROWS-1][COLS-1] == " "){
        grid[posRow][posCol] = event.key;
        document.getElementById("l"+posRow+posCol).innerHTML = event.key;
        if(posCol+1 < COLS){
            posCol ++;
        }else{
            let won = true;
            for(let i=0;i<COLS;i++){
                if(WORD[i] == grid[posRow][i]){
                    console.log("F");
                    document.getElementById("s"+posRow+i).style.backgroundColor = '#1F772B';
                }else if(WORD.includes(grid[posRow][i])){
                    won = false;
                    console.log("g");
                    document.getElementById("s"+posRow+i).style.backgroundColor = '#ffeb00';
                }else{
                    won = false;
                    document.getElementById("s"+posRow+i).style.backgroundColor = '#FF0000';
                }
            }
            if(won){
                document.removeEventListener("keypress",myFunction);
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

            }
            posRow ++;
            posCol = 0;
        }
        console.log(posRow);
        console.log(posCol);
    }
   
});


//while(== " "){

//}
