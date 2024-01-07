Enums in Ts
===========

Enums in typescript are commonly used when we want to represent a set of related values and choose one value from multiple options.
Enum provides a convenient way to define a set of named values and associate them with specific meanings.

In Ts when enum constants are not explicitly assigned numeric values , they are automatically assigned incremental numeric values 
starting from 0 . The default numeric value for the first enum constant is 0 and subsequent enum constants receive values incremented by
1.


when we need a property with multiple options or values , we use enums. enums used in giving roles to users for example adminuser can 
have access to specific content in website whereas normal user cant. 

user1 = login => normal user 
user2 = login => admin user


// enum is just a javascript object with constant properties . 
// If we dont give value to a property default value will be 0 & it will incremnet to 1 for the subsequent properties. 