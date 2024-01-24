#include <iostream>
using namespace std;
int main (){
    //Arrays

    //Declaring an array
    int myNumbers[] = {1,2,3};

    //Adding Elements to the array
    // myNumbers[4] = 100;
    // myNumbers[5] = 5;
    // myNumbers[6] = 6;
    // myNumbers[7] = 7;
    // myNumbers[8] = 8;
    // myNumbers[9] = 9;
    // myNumbers[10] = 10;


    //Changing the index of an array
    //myNumbers[4] =4;

    //Outputing the array
    for(int myNumbers = 0; myNumbers < 4; myNumbers++){
        cout<<myNumbers<<endl;
    }

    //Accessing the elements of the Array
    cout<<myNumbers[0]<<endl;
    cout<<myNumbers[1]<<endl;
    
    return 0;
}