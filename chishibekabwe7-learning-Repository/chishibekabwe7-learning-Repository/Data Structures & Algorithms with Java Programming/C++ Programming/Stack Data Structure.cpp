#include <iostream>
#include <stack>
using namespace std;

int main(){
    //Declaring a Stack Data Structure
    stack<int> MyStack_Chishibe;

    //Adding elements to out Stack
    MyStack_Chishibe.push(10);
    MyStack_Chishibe.push(20);
    MyStack_Chishibe.push(30);
    MyStack_Chishibe.push(40);

    //Removing elements from our Stack
    MyStack_Chishibe.pop();  //Removes the top element

    //Accesing the elements with a variable
    int topElement = MyStack_Chishibe.top();
    cout<<"The top element is "<<topElement<<" in Chishibe's Stack"<<endl;

    //Checking if the stack is empty
    if(MyStack_Chishibe.empty()){
        cout<<"Chishibe's stack is empty"<<endl;
    }
    else{
        cout<<"Chishibe's stack is not empty"<<endl;
    }

    //Checking the size of the stack
    int stackSize = MyStack_Chishibe.size();
    cout<<"Chishibe's stack size is "<<stackSize<<endl;

    return 0;
}