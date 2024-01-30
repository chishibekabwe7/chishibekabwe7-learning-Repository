#include <iostream>
using namespace std;
int main (){
    //Declaring the array and adding elements at declaration
    int arr[10] = {1,2,3,4,5};
    
    //Accessing elements of our array
    cout<<"The first element is "<<arr[0]<<endl;

    //Adding more elements with indexing
    arr[5] = 6;
    arr[6] = 7;
    arr[7] = 8;
    arr[8] = 9;
    arr[9] = 10;

    //Accessing the element with a variable
    int my_element = arr[9];
    cout<<"The last element in my array is "<<my_element<<endl;

    //Looping through the array
    for(int i = 0; i<10; i++){
        cout<<arr[i]<<endl;
    }



    
    return 0;
}