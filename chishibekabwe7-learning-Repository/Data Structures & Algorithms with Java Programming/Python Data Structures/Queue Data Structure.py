#!/usr/bin/env python3

#Declaring a Queue Data Structure with a list
my_queue = []

#Enqueueing elements
my_queue.append(10.00)
my_queue.append(20.00)
my_queue.append(30.00)
my_queue.append(40.00)
my_queue.append(50.00)
my_queue.append(60.00)
my_queue.append(70.00)
my_queue.append(80.00)
my_queue.append(90.00)
my_queue.append(100.00)

#Dequeue elements
my_queue.pop()
my_queue.pop()
my_queue.pop()
my_queue.pop()

#Dequeued element and storing it in a variable
Dequeued_element = my_queue.pop()
print(f"{Dequeued_element} was recently dequeued from Chishibe's queue")

#Checking the length of the queue
queue_length = len(my_queue)
print(f"The length of Chishibe's queue is {queue_length}")

#Checking if queue is empty
if my_queue:
    print("Chishibe's queue is not empty")
else:
    print("Chishibe's queue is empty")

#Accessing the top element with a variable
top_element = my_queue[-1]
print(f"The top element in Chishibe's queue is {top_element}")


