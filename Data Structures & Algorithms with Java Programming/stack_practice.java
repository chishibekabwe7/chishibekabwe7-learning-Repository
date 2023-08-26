import java.util.Stack;
public class stack_practice{
    public static void main(String[] args){
     //Declaring the stack   
    Stack<String> mystack = new  Stack<String>();

    //Checking if the stack is empty
    System.out.println(mystack.empty());

    //Adding elements to stack
    mystack.push("1");
    mystack.push("2");
    mystack.push("3");
    mystack.push("4");
    mystack.push("5");

    //Checking the first element of our stack
    System.out.println(mystack.peek());
    //Removing first two elements of stack
    mystack.pop();
    mystack.pop();
    mystack.pop();
    //Printing out the Stack
    System.out.println(mystack);
    //Check the top element with a variable
    String top_element = mystack.pop();
    System.out.println(top_element);
    


    };
}