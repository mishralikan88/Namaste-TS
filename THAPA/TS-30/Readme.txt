Abstract Classes in TS 
======================

Abstract classes provide a way to define common properties and methods that multiple derived classes can share.This promotes code reuse 
and helps establishing a common interface for related classes. 

Abstract classes cannot be instantiated. It is a base class / common class / generic class / parent class , which allows child class(es) to inherit 
its properties and methods.

Abstract classes focus on class inheritance and sharing common functionality, whereas useContext hook in react focus on managing global
state and allowing components to consume that state.

Abstract classes can have both abstract methods and Non-abstract method . Abstract methods have their declaration in the abstract class.
But their implementation is in the derived class that inherits from the abstract class. It is a must for all abstract methods to have their
implmentation in derived class(es). 