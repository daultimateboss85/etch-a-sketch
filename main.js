const total_width = 500;

//accept input for number of squares - n 
function make_grid(total_width=500, n=16){
    document.querySelector(".container").innerHTML= "";
    //make grid of size n x n
    let grid = document.createElement("div");
    grid.classList.add("grid");
    let width = total_width / n;
    
    for(let i =0; i<n; i++){
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j=0; j<n; j++){
            let square = document.createElement("div");
            row.append(square);
            square.classList.add("square");
            square.style.width = `${width}px`;
            square.style.height = `${width}px`;
        }
        grid.append(row);
    document.querySelector(".container").append(grid);
    
    }

    
}

make_grid();

document.querySelector(".change").addEventListener("click", (e)=>{
    let number = prompt("Enter new number");
    make_grid(total_width, number);
})

