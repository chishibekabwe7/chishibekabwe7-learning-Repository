#include <iostream>
using namespace std;
int main (){
    //Declaring the array with the size of 10
    int arr[10];

    //Initialize array elements
    arr[0] = 10;
    arr[1] = 9;
    arr[2] = 8;
    arr[3] = 7;
    arr[4] = 6;
    arr[5] = 5;
    arr[6] = 4;
    arr[7] = 3;
    arr[8] = 2;
    arr[9] = 1;


    //Declare and initialise with one step
    int arr2[10] = {1,2,3,4,5,6,7,8,9,10};

    //Accessing the elements
    cout<<arr[7]<<endl;
    int value = arr[5];
    cout<<value<<endl;

    //Iterating through the arrays
    for (int i = 0; i < 10; i++ ) {
        cout<<arr[i]<<endl;
    }


    return 0;
}