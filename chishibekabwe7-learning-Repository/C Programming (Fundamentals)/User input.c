#include <stdio.h>

int main (){
    int myNum;

    //Ask a user to type a number
    printf("Type a number: \n");

    //Get and Save the number the user types
    scanf("%i",&myNum);

    //Outputing the number the user typed
    printf("Your number is: %i",myNum);
    
    return 0;
}