window.addEventListener("DOMContentLoaded", run, false);

function run(){

	const DIM = 50;
	let monde;
	let timer; 

	function initTabHTML(){
  
  	let table = document.createElement("table");
    document.body.insertBefore(table, document.querySelector("#boutons"));
    for(let i=0; i<DIM; i++)
    {
    	let tr= document.createElement("tr");
      table.appendChild(tr);
      for(let j=0; j<DIM; j++)
      {
      	let td= document.createElement("td");
      	if((i>0)&&(j>0)&&(i<DIM-1)&&(j<DIM-1))
      	td.addEventListener("click", changeEtat, false);
        tr.appendChild(td);
      }
    }
  }
  
  function changeEtat(){
	  let cellules = document.querySelectorAll("td")
	  for(let i=0; i<DIM; i++){
		  for(let j=0; j<DIM; j++){
			  if(cellules[i*DIM+j] == this){
				  monde[i][j] = !monde[i][j];
				  afficheMonde();
				   
			  }
		  }
	  }
  }
  
  
  function initMonde()
  {
      monde = [];
      for(let i=0;i<DIM;i++)
      { monde[i] =[];
          monde[i] =[];
          for(let j=0;j<DIM;j++)
          {
              monde[i][j]=false;
          }
      }
  }
    function initEtatCellules()
  {
      for(let i=1;i<DIM-1;i++)
      {
          monde[i] =[];
          for(let j=1;j<DIM-1;j++)
          {
              monde[i][j]=Math.random()<0.5;
          }
      }
  }
  function afficheMonde()
  {
      let cellules = document.querySelectorAll("td");
      for(let i=0;i<DIM;i++)
      {
         
          for(let j=0;j<DIM;j++)
          {
              if(monde[i][j])
              {
                  cellules[i*DIM+j].setAttribute("class","vivante");
              }
              else
              {
                  cellules[i*DIM+j].setAttribute("class","morte");
              }
          }
      }
  }
  
  function cycle(){
	  let monde2 = []; 
	  for(let i=1;i<DIM-1;i++){setInterval
		  monde2[i] = [];
		  for(let j=1; j<DIM-1;j++){
			  let voisines = 0; 
			  if(monde[i-1][j-1])
			  voisines++;
			  if(monde[i-1][j])
			  voisines++;
			  if(monde[i-1][j+1])
			  voisines++;
			  if(monde[i][j+1])
			  voisines++;
			  if(monde[i+1][j+1])
			  voisines++;
			  if(monde[i+1][j])
			  voisines++;
			  if(monde[i+1][j-1])
			  voisines++;
			  if(monde[i][j-1])
			  voisines++;
			  if(monde[i][j]==false){
				  if(voisines == 3)
				  monde2[i][j] = true;
				  else 
				  monde2[i][j] = false; 
			  }
			  else{
				  if((voisines == 2)||(voisines == 3))
					  monde2[i][j] = true; 
					  else 
					  monde2[i][j] = false;
				  
				  
			  }
		  }
	  } 
	  
	  for(let i=1; i<DIM-1;i++){
		  for(let j=1; j<DIM-1;j++){
			  monde[i][j] = monde2[i][j]; 
		  }
	  }
  }
  
  function time(){
	  cycle();
	  afficheMonde();
  }
  
  function start(){
	  timer = setInterval(time,100);
	  
	  
  }
  
  function stop(){
	  clearInterval(timer);
  }
  
  function reset(){
	  initEtatCellules();
	  afficheMonde(); 
	  
  }
  
  function clear(){
	    for(let i=0;i<DIM;i++){
			 monde[i] =[];
          monde[i] =[];
          for(let j=0;j<DIM;j++)
          {
              monde[i][j]=false;
          }
      }
      afficheMonde();
	  
  }

  
	document.querySelector("#start").addEventListener("click", start, false);
    document.querySelector("#stop").addEventListener("click", stop, false);
    document.querySelector("#reset").addEventListener("click", reset, false);
    document.querySelector("#clear").addEventListener("click", clear, false);

  
  
  initTabHTML();
  initMonde();
 /*initEtatCellules();*/
 /*afficheMonde();*/
}

