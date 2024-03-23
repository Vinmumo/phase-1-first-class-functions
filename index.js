function receivesAFunction (spy){
     spy();
}
function spy(person){
    return person;
}
const returnsANamedFunction = () =>{
    const fn = () => "hello"  
    return fn
}
function returnsAnAnonymousFunction(){
     return  function() {"hello"};
}
