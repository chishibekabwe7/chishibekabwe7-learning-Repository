#!/usr/bin/env python3
#Defining the node
class node:
    def __init__(self,data):
        self.data = data
        self.next = None


class SinglyLinkedList:

#Defining the head and tail of the sinlgy linked list
    def __init__(self):
        self.head = None
        self.tail = None 

#Creating a function addNode() that will add new nodes to the list
    def addNode(self,data):

#Creating a new node to the list
        newNode = Node(data)

#Checks if the list is empty
if (self.head == None):  
#If the list is empty, both head and tail will pint to new node
    self.head = newNode
    self.tail = newNode
else:
#newNode will be added after tail such that tail's next point to newNode    
    self.tail.next = newNode
#newNode will become new tail of the list
    self.tail = newNode
    
    #display() will display all the nodes present in the list
    def display(self):
    #Node current will point to head
        current = self.head
        
        if(self.head == None):
            print("List is empty")
            return
        print("Nodes of singly linked list: ")
        while(current != None):
            #Prints each node by incrementing pointer
            print(current.data),
            current = current.next
sList = SinglyLinkedList()    
#Adding nodes to the list
sList.addNode(1)
sList.addNode(2)
sList.addNode(3)
sList.addNode(4)
sList.addNode(5)

#Displaying the present nodes in the list
sList.display()

  
