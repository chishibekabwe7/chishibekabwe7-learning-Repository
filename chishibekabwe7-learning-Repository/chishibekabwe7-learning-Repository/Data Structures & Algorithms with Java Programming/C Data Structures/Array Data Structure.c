#include <stdio.h>
int main (){
    //Array Initialization
    int arr[] = {1,2,3,4,5};

    //Adding elements to the array
    arr[5] = 6;
    arr[6] = 7;
    arr[7] = 8;
    arr[8] = 9;
    arr[9] = 10;
    arr[10] = 11;
    arr[11]= 12;

    //Changing the index of an array
    arr[0] = -1;
    arr[1] = -2;
    arr[2] = -3;
    arr[3] = -4;
    arr[4] = -5;

    //Outputing the array with a for loop
    for(int i=0; i<12; i++){
        printf("%i\n",arr[i]);
    }

    //Accessing a single element
    printf("%d\n",arr[6]);
    printf("%d\n",arr[7]);
    printf("%d\n",arr[8]);


    return 0;
}