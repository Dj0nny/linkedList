function getNode(title,childRows,key){
    var setKey = (key == null)?("childNode"):(key);
    return {
        value: title,
        [setKey]: childRows
    };
};
 
function createNestedJSON(array,childRows,key = null){
    var array = array.reverse();
    array = array.filter(function(n){return (n != undefined && n != "") });
 
    var formate = getNode(array[0],childRows,key);
    for(var i = 1; i < (array.length); i++){
        formate = getNode(array[i],formate,key);
    };
    return formate;
};