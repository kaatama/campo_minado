function drawBoard() 
{

	for (y=6; y > 0; y--) 
	{
		document.write('<tr>');

		for (x=1; x < 7; x++)
		{
			document.write('<td><input type="button" class="btn" id='+x+","+y+' onclick="control('+x+","+y+');" value="" > </td>');
		}
		document.write('</tr>');
	}
	implantMine();
	count();
	//control(mine);
}

function getRandomInt(min, max) {
 	return Math.floor(Math.random() *6) + 1;
}

function implantMine()
{
	var qnt=5;
	var mine="";

	while (qnt > 0)
	{
		var x = getRandomInt();
		var y = getRandomInt();
		qnt--;
		console.log(x,y);

		mine=document.getElementById(x+","+y);
		mine.setAttribute('value', '*');
	}
}

// function revealBoard()
// {
// 	var btn=document.getElementsByClassName("btn");
// 	var mine;
// 	var show;

// 	while (btn)
// 	{
// 		mine=btn.getAttribute('value')
// 		if (mine == "*")
// 		{
// 			show.style.backgroundImage="url(./mine.png)";
// 		}

// 	}
// 	//.style.backgroundImage="url(./mine.png)";
// 	//bot.style.backgroundImage='url(./mine.png)';
// }

function count()
{
	var x=1;
	var y=0;
	//var n=0;
	var ver, ver_value;
	var cont=0;
	var btn=document.getElementsByClassName("btn");
	var loc=document.getElementById(x+","+y);
	var ver;

	while (btn) {

		for (loc=x+","+y; x <= 6; x++)
		{
			console.log(loc);
			var n=0;
			var cont=0;
			var h=x-1;
			var v=y;

			for (v=y-1; cont < 3; h++) //contar linha  -y
			{
				h=x-1;
				v=y;
				loc=(h+","+v);
				ver_value=loc.getAttribute('value');
				if (ver_value == "*")				{
					n++;
				}
				cont++;
				//x--;
			}

			for (v=y; cont < 2; h+2) //contar linha y
			{
				h=x-1;
				ver=loc(h+","+v);
				ver_value=ver.getAttribute('value');
				if (ver_value == "*")
				{
					n++;
				}
			}

			for (v=y+1; cont <3; h++) //contar linha y+1 
			{
				h=x-1;
				ver=loc(h+","+v);
				ver_value=ver.getAttribute('value');
				if (ver_value == "*")
				{
					n++;
				}
			}
			loc.setAttribute('value', n);
		}
		y=y+1;		
		console.log(n);
	}

}

function control(x,y) 
{

	var element=document.getElementById(x+","+y);
	var element_value=element.getAttribute('value');

	if ( element_value == "*")
	{
		element.style.backgroundImage='url(./mine.png)';
		alert("You lose...");
		//revealBoard();
	}
	else 
	{

	}
}