//immediate invoked function expression
(function(){
    console.log("IIFE executed");
})();
( ()=>{
    console.log("Arrow IIFE executed");
})();
//use Because it runs immediately and keeps variables private by not polluting the global scope.