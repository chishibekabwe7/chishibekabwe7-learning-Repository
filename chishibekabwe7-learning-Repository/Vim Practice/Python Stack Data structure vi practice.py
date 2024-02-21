#!/usr/bin/env python3

#Declaring a stack
stack = []

#Pushing elements to stack
stack.append(100)
stack.append(200)
stack.append(300)
stack.append(400)
stack.append(500)
stack.append(600)
stack.append(700)
stack.append(800)

#Poping items from our  stack
stack.pop()
stack.pop()
stack.pop()

#Checking if stack is empty
if stack:
    print("This stack is not empty")
else:
    print("This stack is empty")

#Checking the size of the stack
stack_size = len(stack)
print(f"The length of the stack is {stack_size}!")

#Accessing the top element of your stack
top_element = stack[-1]
print(f"The top element in our stack is {top_element}!")

"""
#Declaring the stack
Chishibe_stack = []

#Pushing elements to my stack
Chishibe_stack.append(10)
Chishibe_stack.append(20)
Chishibe_stack.append(30)
Chishibe_stack.append(40)
Chishibe_stack.append(50)
Chishibe_stack.append(60)
Chishibe_stack.append(70)
Chishibe_stack.append(80)
Chishibe_stack.append(90)
Chishibe_stack.append(100)

#Checking if my stack is empty
if Chishibe_stack:
    print("Chishibe's Stack is not empty")
else:
    print("Chishibe's stack is empty")

#Checking the size of the stack
stack_size = len(Chishibe_stack)
print(f"The length of Chishibe's Stack is {stack_size}")

top_element = Chishibe_stack[-1]
print(f"The top element in Chishibe's stack is {top_element}!")

"""