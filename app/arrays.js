if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      var index = -1;
      for (i = 0; i < arr.length; i++) {
            if(arr[i] == item)
                index = i;
      }
      return index;
    },

    sum : function(arr) {
        var sum = 0;
        for (i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var arraySol = [];
         for (i = 0; i < arr.length; i++) {
            if(arr[i] != item)
                arraySol.push(arr[i]);
        }
        return arraySol;
    },

    removeWithoutCopy : function(arr, item) {
        for(var i = arr.length-1; i>=0 ; i--){
            if (arr[i] === item)
            {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length-1,1);
        return arr;
    },

    prepend : function(arr, item) {
        var arrSolution = [item];
        return arrSolution.concat(arr);
    },

    curtail : function(arr) {
        arr.splice(0,1);
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        var arrSolution = [];
        var indexArray = 0;
        for(var i = 0; i < arr.length+1; i++){
            if(i == index){
                arrSolution.push(item);                               
            }else{
                arrSolution.push(arr[indexArray]);
                indexArray++;
            }
        }        
        return arrSolution;
    },

    count : function(arr, item) {
        var count = 0;
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == item){
                count++;
            }
        }        
        return count;
    },

    duplicates : function(arr) {
        var duplicateArray = [];
        for(var i = 0; i < arr.length-1; i++){
            for(var j = i+1; j < arr.length; j++){
                if((arr[i] == arr[j]) && (duplicateArray.indexOf(arr[j]) == -1)){
                    duplicateArray.push(arr[j]);
                }
            }            
        }        
        return duplicateArray;
    },

    square : function(arr) {
        var squareArray = [];
        for(var i = 0; i < arr.length; i++){
            squareArray.push(arr[i]*arr[i]);
        }
        return squareArray;
    },

    findAllOccurrences : function(arr, target) {
        var arrSolution = [];
        for(var i = 0; i < arr.length; i++){
            if(arr[i] == target){
                arrSolution.push(arr[i] );
            }
        }        
        return arrSolution;
    }
  };
});
