

let scriptElements = document.scripts; //HTMLCollection

var word = new Array("callback","cb","jsonp");


for (let i=0;i<scriptElements.length;i++) 
{
	let url = new URL(scriptElements[i].src);

	for(let j=0;j<word.length;j++)
	{
		if(url.searchParams.has(word[j]))
		{
			console.log(scriptElements[i].src);
			break;
		}
	}
}

