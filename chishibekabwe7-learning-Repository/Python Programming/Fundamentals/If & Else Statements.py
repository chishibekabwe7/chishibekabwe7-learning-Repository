a = 24
b = 30
if b > a:
  print("b is greater than a")
elif a == b:
  print("b and a are equal")
else:
    print("b is not greater than a")

"""
Indentation
Python relies on indentation (whitespace at the beginning of a line) to define scope in the code. Other programming languages often use curly-brackets for this purpose.

Example
If statement, without indentation (will raise an error):

a = 33
b = 200
if b > a:
print("b is greater than a") # you will get an error

"""

#And Keyword
x = 200
y = 33
z = 500
if x > y and z > x:
  print("Both conditions are True")

#Or Keyword
d = 200
e = 33
f = 500
if d > e or d > f:
  print("At least one of the conditions is True")
  
#The pass Statement
#if statements cannot be empty, but if you for some reason have an if statement with no content, put in the pass statement to avoid getting an error.

#Example
g = 33
h = 200

if h > g:
  pass  