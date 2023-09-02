import java.util.Queue;
import java.util.LinkedList;
public class queue_practice{
    public static void main(String[] args){
       //Declaring a queue data structure
       Queue<String> queue = new LinkedList<String>();
       //enqueing elements to our queue
       queue.offer("Mfuta");
       queue.offer("Catherine");     
       queue.offer("Malama");
       queue.offer("Chilufya");
       queue.offer("Chishibe");
       //Printing out our queue elements to the console
       System.out.println(queue);
       //Removing elements from our queue using a for loop
       for(int i=0; i<4; i++){
           queue.poll();
        }
      //Printing out to the console
      System.out.println(queue);
      //Checking if queue is empty
      System.out.println(queue.isEmpty());
      //Checking the size of our queue
      System.out.println(queue.size());
      //Uses of queues
      //1. Keyboard buffer
      //2. Print Jobs
        };
  }
