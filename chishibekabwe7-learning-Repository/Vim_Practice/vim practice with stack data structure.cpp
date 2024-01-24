#include <iostream>
#include <stack>
using namespace std;

int main (){
    //Declaring a stack
    stack<int> mystack_cj;

    //Adding elements to our stack
    mystack_cj.push(1);
    mystack_cj.push(2);
    mystack_cj.push(3);
    mystack_cj.push(4);
    mystack_cj.push(5);

    //Removing the top element from our stack
    mystack_cj.pop();

    //Checking if the stack is empty
    if(mystack_cj.empty()){
        cout<<"cj's stack is empty"<<endl;
    }
    else{
        cout<<"cj's stack is not empty"<<endl;
    }

    //Checking the size of the array
    int stackSize = mystack_cj.size();
    cout<<"The size of the stack is "<<stackSize<<endl;

    //Checking the top element of the array
    int topElement = mystack_cj.top();
    cout<<"cj's top element is "<<topElement<<endl;










    
    return 0;
}