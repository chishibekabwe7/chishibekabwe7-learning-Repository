import java.util.LinkedList;
import java.util.Queue;
public class queue_practice{
    public static void main(String[] args){
        //Declaring the Queue
        Queue<String> my_Queue = new  LinkedList<String>();
        //enqueueing elements to out queue
        my_Queue.offer("bell air");
        my_Queue.offer("swagger");
        my_Queue.offer("Stranger things");
        my_Queue.offer("Grown-ish");
        my_Queue.offer("Wednesday");

        //dequeueing elements from our queue
        my_Queue.poll();
        my_Queue.poll();
        my_Queue.poll();

        //Checking if queue is empty
        System.out.println(my_Queue.isEmpty());
        
        //Checking the size of the queue
        System.out.println(my_Queue.size());

        //Checking if queue contains an object
        System.out.println(my_Queue.contains("Wednesday"));

        //printing our queue
        System.out.println(my_Queue);


    };
}