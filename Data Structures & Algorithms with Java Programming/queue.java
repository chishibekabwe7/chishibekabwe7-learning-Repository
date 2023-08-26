import java.util.Queue;
import java.util.LinkedList;
public class queue{
    public static void main(String[] args){
    //Declaring a Queue    
    Queue<String> queue = new LinkedList<String>();
    //enqueeuing elements to our queue
    queue.offer("Karen");
    queue.offer("Chad");
    queue.offer("Steve");
    queue.offer("Harold");

    //Dequeueing element from our queue
    queue.poll();
    queue.poll();
    queue.poll();

    //Printing elements of our Queue
    System.out.println(queue);

    //Checking if queue is empty
    System.out.println(queue.isEmpty());

    //Checking the size of our queue
    System.out.println(queue.size());
    
    //Checking if queue contans an object
    System.out.println(queue.contains("Harold"));

    //Use of Queues
    //1. Keyboard Buffer (Letter should appear on the screen in the way they are pressed)
    //2. Printer Queue (Printer jobs should be completed in order)
    //3. Used in LinkedLists, PriorityQueues, Breadth-first search

    


    //Checking the first element from our stack
    //System.out.println(queue.peek()); 
    
    
    };
}