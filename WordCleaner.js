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

function cleanWords(wordList, convertFunc)
{
  for(var i = 0; i < wordList.length; i++) // Checks each word in the wordlist
  {
    var word = wordList[i];
    var re = new RegExp(word,"ig");
    word = word.toLowerCase();
    $('p, a, h1, h2, h3, h4, h5, h6, span, div, b, i, s, u, blockquote, code').contents().filter(
        function() {
          return this.nodeType == Node.TEXT_NODE;
        }).each(
          function() {
            console.log(this.nodeValue);
            this.nodeValue = this.nodeValue.replace(re, convertFunc(word));
          });
  }
}


$( document ).ready(cleanWords(wordList, function(word){return getStars(word)}))
