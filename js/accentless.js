/**
 * User: Zimny
 * Date: 10.04.11
 * Time: 18:16
 */
/*
* This condition should be true - if else then there is probably an error with char codes table.
* áàâäåÁÃÄÅÀÂçÇêéëèÊËÉÈïíîìÍÌÎÏñÑôöòõóÓÔÕÖÒšŠúüûùÙÚÜÛýÝžŽ === aaaaaAAAAAAcCeeeeEEEEiiiiIIIInNoooooOOOOOsSuuuuUUUUyYzZ
 */
(function(){
    if(String.prototype.ignoreAccent) return;
    var AccentCharCodesTable = {
        "a" : [224,229],
        "A" : [192,198],
        "c" : [231,231],
        "C" : [199,199],
        "e" : [231,235],
        "E" : [200,203],
        "i" : [236,239],
        "I" : [204,208],
        "n" : [241,241],
        "N" : [209,209],
        "o" : [242,246],
        "O" : [209,214],
        "s" : [353,353],
        "S" : [352,352],
        "u" : [248,252],
        "U" : [216,220],
        "y" : [253,253],
        "Y" : [221,221],
        "z" : [382,382],
        "Z" : [381,381]
    };
    String.prototype.ignoreAccent = function(){
        var i,
            currentCharCode,
            char,
            /*str =  Array.prototype.slice.call(this,0) IE incompatible*/
            str = this.split("");
        for(i = 0; i<str.length; i++){
            currentCharCode = str[i].charCodeAt(0);
            if(currentCharCode < 192) continue; /* letter from standard alphabet - no reason to test further */
            for(char in AccentCharCodesTable){
                if(AccentCharCodesTable.hasOwnProperty(char)){
                    if(currentCharCode >= AccentCharCodesTable[char][0] && currentCharCode <= AccentCharCodesTable[char][1]){
                        str[i] = char;
                        break;
                    }
                }
            }
        }
        return str.join("");
    }
})();