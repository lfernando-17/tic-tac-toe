var vez=parseInt;
vez = 0;
var px=[9];


	function change(id) 
{
	if(vez%2==0 && px[id]!=1)
	{

     document.getElementById('myButton'+id).value = 'X';
	 vez++;
	 px[id]=1;
	}
	else if(px[id]!=1){
		document.getElementById('myButton'+id).value = 'O';
	    vez++;
		px[id]=1;
	}
}




function reiniciar ()
{
	for(var i=1;i<=9;i++)
	{
	document.getElementById('myButton'+i).value =' ';
	px[i]=0;
	vez=0;
	}
}
function verificar()
{
	// 1 Linha
	var a = document.getElementById('myButton1').value;
	var b = document.getElementById('myButton2').value;
	var c = document.getElementById('myButton3').value;
	// 2 Linha
	var d = document.getElementById('myButton4').value;
	var e = document.getElementById('myButton5').value;
	var f = document.getElementById('myButton6').value;
	// 3 Linha
	var g = document.getElementById('myButton7').value;
	var h = document.getElementById('myButton8').value;
	var i = document.getElementById('myButton9').value;
	// Primeira Linha
			if (a=='X'&& b=='X' && c=='X')
			{
				alert("X Ganhou");
			}
			else if (a=='O' && b=='O' && c=='O')
			{
				alert("O Ganhou");
			}
			// Segunda Linha
			if (d=='X'&& e=='X' && f=='X')
			{
				alert("X Ganhou");
			}
			else if (d=='O' && e=='O' && f=='O')
			{
				alert("O Ganhou");
			}
			// Terceira Linha
			if (g=='X'&& h=='X' && i=='X')
			{
				alert("X Ganhou");
			}
			else if (g=='O' && h=='O' && i=='O')
			{
				alert("O Ganhou");
			}
	// Coluna Esquerda
	else if (a=='X' && d=='X' && g=='X')
	{
		alert("X Ganhou");
	}
	else if (a=='O' && d=='O' && g=='O')
	{
		alert("O Ganhou");
	}			
				// Coluna do Meio 
	else if (b=='X' && e=='X' && h=='X')
	{
		alert("X Ganhou");
	}
	else if (b=='O' && e=='O' && h=='O')
	{
		alert("O Ganhou");
	}		
			// Coluna Direita
				else if (c=='X' && f=='X' && i=='X')
				{
					alert("X Ganhou");
				}
				else if (c=='O' && f=='O' && i=='O')
				{
					alert("O Ganhou");
				}
	
	// Diagonal Esquerda - Direita
	else if (a=='X' && e=='X' && i=='X')
				{
					alert("X Ganhou");
				}
				else if (a=='O' && e=='O' && i=='O')
				{
					alert("O Ganhou");
				}
				// Diagonal Direita - Esquerda
				else if (c=='X' && e=='X' && g=='X')
				{
					alert("X Ganhou");
				}
				else if (c=='O' && e=='O' && g=='O')
				{
					alert("O Ganhou");
				}
	else 
	{
		alert("Velha");
	}
	
	
}


