#include <stdio.h>
#define LIMIT

//The limited number of elements inside the stack is 100
int stack[LIMIT];
int top = -1; //Adding -1 to indicate the array is empty

// Function to push elements into the array
void push(){
    int element;
    //Checking if the stack is full,so that we cannot add any elements
    if(top == [LIMIT -1]){
        printf("Stack Overflow: Cannot Push element\n");
    }
    else{
        //if not, take the elements from the user
        printf("Enter the element to be inserted: ");
    scanf("%d",&element);
    top++;
    stack[top] = element;
    }
}
int main () {
    int i;
    //Call the function
    push();
    
}