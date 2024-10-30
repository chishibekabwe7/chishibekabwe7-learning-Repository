#!/bin/python3
print("Welcome to Python") #Welcome to Python
print("First Line\nSecond Line") #Multiline
#Declare,assign and use a variable
age = 20
print(f"Hello there you are {age} years old.")
#Undeclared Variable
"""
Age 
print(f"You are {Age} years old")

Outputs a syntax error
"""
#Declaring more than one variable
num1=5
num2=3
print(f"The first number is {num1}")
print(f"The second number is {num2}")
#Variable Arithmetic
sum
sum = num1 + num2 
print(f"The sum is {sum}")

#Exercises
#Question 1 Solutions
print('i)    "Variable Rules"')
print("ii)   Declare")
print("iii)  Initialize")
#Question 2 Solutions
def Sales_Region_Program ():
    Sales_Data = [
        ["Region","Quantity","Amount"],
        ["North",250,200000],
        ["East",300,400000],
        ["West",265,210000],
        ["South",320,430000]
    ]
    print("Sales_Region")
    for rows in Sales_Data:
        print(f"{rows[0]:<10} {rows[1]:<10} {rows[2]}")
Sales_Region_Program()
#Question 3
def VariablesOne():
    x = 0 + 1
    y = 5 + 1
    y = x+y
    print(y)
VariablesOne()
#Question 4
#My own way
print(f"    *   ")
print(f"   ***  ")
print(f"  ***** ")
print(" ******* ")
print("  *****  ")
print("   ***   ")
print("    *    ")
#Standard Way
pattern = [
    "   *   ",
    "  ***  ",
    " ***** ",
    "*******",
    " ***** ",
    "  ***  ",
    "   *   ",
]
for x in pattern:
    print(x)




