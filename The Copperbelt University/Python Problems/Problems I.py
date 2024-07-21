#!/usr/bin/env python3

#1. Sum of two number
N1 = 3
N2 = 43
Sum = N1 + N2
print(Sum)

#2. Maximum of two numbers
A = 3
B = 1
if A>B:
    print(f"{A} is larger than {B}")
else:
    print(f"{B} is larger than {A}")

#3. Maximum of three nummbers
def max_of_three(Num1,Num2,Num3):
    if Num1 >= Num2 and Num1 >= Num3:
        return print(f"{Num1} is the maximum value")
    elif Num2 >= Num1 and Num2 >= Num3:
        return print(f"{Num2} is the maximum value")
    else:
        return print(f"{Num3} is the maximum value")
    
max_of_three(23,324,32)
max_of_three(20,23,24)

#4. Find out whether a number is even of odd 

#Method One
Number = 45
if Number % 2 == 0:
    print(f"{Number} is an even number")
else:
    print(f"{Number} is an odd number")

#Method Two
def whether_even_odd(Number):
    if Number % 2 == 0:
        return print(f"{Number} is an even value")
    else:
        return print(f"{Number} is an odd value")
whether_even_odd(20)


        
        




