// symbols

// without symbols 

var collection = {};

//Developer 1 is adding some properties inside this object 
collection["key1"] = 123;
collection["key2"] = 'beast';

for (var item in collection){
    console.log(item)
}

// output 
// beast 
// 123 


// Developer 2 is modifying key2 
collection["key2"] = 'iron maiden';
for (var item in collection){
    console.log(item)
}

// output 
// iron maiden  => In production its dangerous.Anyone can modify this property
// 123 


// with Symbols

let sym = Symbol("Test symbol")

var collectionSymbol = {};

//Developer 1 is adding some properties inside this object 
collectionSymbol[sym] = 'secret' // Symbol("Test symbol"):Even bigger secret
console.log(collectionSymbol) // {Symbol(Test symbol):'secret'} => No developer can override this key Symbol(Test symbol) value 

//Developer 2 is overriding some properties inside this object 
let mySym = Symbol("Test symbol")
collectionSymbol[mySym] = 'Even bigger secret' // Symbol("Test symbol"):Even bigger secret
console.log(collectionSymbol) // developer 2 tries to override Symbol("Test symbol") with a new calue. 2 copies of the same key with different values gets created inside the object

// {Symbol("Test symbol"):'secret',Symbol("Test symbol"):'even bigger secret'}


// https://www.youtube.com/watch?v=DHrYasp1OTw&t=11s   - Code Whisperer


