
/*** 1.0 Arrays */


//"Ich bin Drazen."
ausgabe (getSentence("Ich","bin","Drazen","Savi")); //Test
function getSentence(word1,word2,word3,word4) {
    let gap = " ";
    let punct = ".";
    let str = word1 + gap + word2 + gap + word3 + gap + word4 + punct;   
    return str;
}

// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}