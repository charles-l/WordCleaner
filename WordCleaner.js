var wordList = ["test", "string"]
function getStars(word)
{
  var str = "";
  for(var i = 0; i < word.length; i++)
  {
    str += "*";
  }
  return str;
}

function getStarsAndFirstLetter(word)
{
  var str = word[0];
  for(var i = 1; i < word.length; i++)
  {
    str += "*";
  }
  return str;
}

function comicReplace(word)
{
  str = "";
  for(var i = 0; i < word.length; i++)
  {
    if(word[i] == "s")
      str += "$";
    else if(word[i] == "a")
      str += "%";
    else if(word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u" || word[i] == "y")
      str += "*";
    else
      str += "#";
  }
  return str;
}

function cleanWords(wordList, convertFunc)
{
  for(var i = 0; i < wordList.length; i++)
  {
    var word = wordList[i];
    word = word.toLowerCase();
    $('*').contents().filter(
      function() {
        return this.nodeType == Node.TEXT_NODE && this.nodeValue.toLowerCase().indexOf(word) >= 0;
      }).each(
      function() {
        var re = new RegExp(word,"g");
        this.nodeValue = this.nodeValue.toLowerCase().replace(re, convertFunc(word));
      });
  }
}

$( document ).ready(cleanWords(wordList, function(word){return comicReplace(word)}))
