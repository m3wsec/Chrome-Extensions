function initialRegexString()
{
	let regexString = "/";
	for (let i=0;i<word.length;i++)
	{
		regexString += word[i]+"|";
	}
	regexString = regexString.substr(0,regexString.length-1) + "/i";
	return regexString;
}


let regexString = initialRegexString();
console.log(regexString);

let regex = new RegExp(regexString);



if(regex.test(url.search))
{
	console.log(scriptElements[i].src)
}