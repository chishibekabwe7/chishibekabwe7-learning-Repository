#This is a  CamelCase variable
myVar = 'Chishibe Kabwe'
print(myVar)

#This is a SnakeCase variable
My_Var = 'Kabwe Chishibe'
print(My_Var)

#This is Pascal variable
MyVar = 'Chishibe Martin Kabwe'
print(MyVar)

# kebab naming convertion is not supported by python
"""
#This is a kebab case variable
My-Var ='CJ'

"""

#Note A Typical variable is global
x = 'Global Variable'
def myfunc():
    print("This is a "+ x)
myfunc()

#This is a private variable
def myfunction():
    global y
    y = 'Private Variable'
myfunction()
print('This is a ' + y)