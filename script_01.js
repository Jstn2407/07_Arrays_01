
/*** 1.0 Arrays */


//"Ich bin Drazen."
ausgabe (getSentence("Drazen", "Savi")); //Test
function getSentence(firstName,familyName) {
    
    let gap = " ";
    let punct = ".";
    
    
    
    let outputStr = "Hallo" + gap + firstName + gap + familyName + "!";   
    
    
    
    return outputStr;


// Modul: Ausgabe in Konsole | Test:
//ausgabe("hi");
function ausgabe(outputStr) {
    console.log(outputStr);
}