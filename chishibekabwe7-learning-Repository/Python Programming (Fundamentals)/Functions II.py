#!/usr/bin/env python3

#Defining a Function
def my_function(parameter1, parameter2): #These are parameters note! they are always passed down when defining the function.
    #Function code here
    result = parameter1 + parameter2
    return result

#Calling a function
result = my_function(10,20) #These are arguments note! they are always passed down when calling the function.
print(result)

#Defining a Function
def my_second_function(parameter1,parameter2):
    print(parameter1 * parameter2)

#Calling a function
my_second_function(2,7)

#Default parameters
def my_third_function(name,age=19):
    print(f"My name is {name} I am {age} years old.")

my_third_function("Chishibe")