#!/usr/bin/env python3

#Declaring an empty stack
my_stack = []

#Pushing elements onto the stack
my_stack.append(20)
my_stack.append("Chishibe Kabwe")
my_stack.append("Male")
my_stack.append("Digital Creater")

#Poping elements from stack
Removed_element = my_stack.pop()
print(f"The Poped element was {Removed_element}!")


#Checking if the stack is empty
if my_stack:
    print("Stack is not empty")
else:
    print("Stack is empty")

#Checking the size of the stack with a variable
stack_size = len(my_stack)
print(f"The size of the array is {stack_size}")

#Accessing the top element 
top_element = my_stack[-1]
print(f"The top element of my stack is {top_element}")




