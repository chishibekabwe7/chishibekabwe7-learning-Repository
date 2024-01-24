#include <stdio.h>
int main (){
    //Arrays
    //Declaring an array
    int myNumbers[] = {1,2,3};

    //Adding Elements to the array
    myNumbers[4] = 100;
    myNumbers[5] = 5;
    myNumbers[6] = 6;
    myNumbers[7] = 7;
    myNumbers[8] = 8;
    myNumbers[9] = 9;
    myNumbers[10] = 10;


    //Changing the index of an array
    myNumbers[4] =4;

    //Outputing the array
    for(int myNumbers = 0; myNumbers < 4; myNumbers++){
        printf("%i\n",myNumbers);
    }

    //Accessing the elements of the Array
    printf("%i\n",myNumbers[0]);
    printf("%i\n",myNumbers[1]);
    
    return 0;
}