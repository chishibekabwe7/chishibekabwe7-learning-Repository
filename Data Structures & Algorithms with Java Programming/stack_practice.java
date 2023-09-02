import java.util.Stack;
public class stack_practice{
public static void main(String[] args){
    //Declaring our stack
Stack<String> my_stack = new Stack<String>();
   //Adding elements to our stack
   my_stack.push("0");
   my_stack.push("1");
   my_stack.push("2");
   my_stack.push("3");
   //Printing our stack to the console
   System.out.println(my_stack);
   //Checking is stack is empty
   System.out.println(my_stack.empty());
   //Checking out first value in our stack
   System.out.println(my_stack.peek());
   //Removing some elements from our stack
   my_stack.pop();
   my_stack.pop();
   my_stack.pop();
  //Checking the items of our stack with a variable
  String my_element = my_stack.peek();
  System.out.println(my_element);
  //Search for a specific element in our stack
  System.out.println(my_stack.search("0"));
  //Using a for loop to push multiple elements in our stack
  for(int i=0; i<4; i++){
      my_stack.push("These are multiple values");
  }
  System.out.println(my_stack);
  //Uses of stacks
  //1. They are used in text editors for undo and redo
  //2. They are used in browsers to move forward and back  


};
}