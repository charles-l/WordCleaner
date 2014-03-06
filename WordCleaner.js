// =================================== WordCleaner ========================================== //
// Removes swearing by replaceing it with '*', the first letter followed by '*', or toon swearing (i.e. $#*%)
// Created by NinjaCharlie March 6, 2014
//
// Please excuse the swear words array...

wordList /*AKA the bad word table*/ = ["fuck", "shit", "cunt", "bitch", "nigger", "asshole", "bullshit", "damn", "slut"];
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
  for(var i = 0; i < wordList.length; i++) // Checks each word in the wordlist
  {
    var word = wordList[i];
    word = word.toLowerCase();
    var start = 0;
    var end = 0;
    $('p, a, h1, h2, h3, h4, h5, h6, span, div, b, i, s, u, blockquote, code').contents().filter(
        function() {
          return this.nodeType == Node.TEXT_NODE && this.nodeValue.indexOf(word) >= 0;
        }).each(
          function() {
            console.log(this.nodeValue);
            var re = new RegExp(word + "(ing|er|ed|y|ty|)(s|)","ig");
            this.nodeValue = this.nodeValue.replace(re, convertFunc(word));
          });
  }
}


$( document ).ready(cleanWords(wordList, function(word){return getStars(word)}))
