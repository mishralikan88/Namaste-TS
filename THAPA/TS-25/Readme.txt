Access Modifiers 
================

The access modifier increases the security of the class members and prevents them from invalid use. 
We can also use it to control the visibility of data members of a class. 
If the class does not have to be set any access modifier, TypeScript automatically sets public access modifier to all class members.
In ts we have three Access Modifiers  such as Public, Protected and Private.

Accessibility level 
===================

                  Parent Class | Child Class | outside Class
                  ============= ============= ==============

Public            Accessible   | Accessible  | Accessible
Protected         Accessible   | Accessible  | !Accessible
Private           Accessible   | !Accessible | !Accessible