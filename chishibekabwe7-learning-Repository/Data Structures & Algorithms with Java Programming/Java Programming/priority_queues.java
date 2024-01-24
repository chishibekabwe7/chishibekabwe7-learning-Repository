import java.util.PriorityQueue;
import java.util.Queue;
public class priority_queues {
   public static void main (String[] args){
   //This a a FIFO data structure which servers elements with the highest priorities first, before elements with lower priority
   //Declaring a PriorityQueue
   //Queue<String> queue = new PriorityQueue<>(Collection.reverseOrder())
   Queue<Double> my_priority_Queue = new PriorityQueue<>();
   //enqueing elements to our queue
   my_priority_Queue.offer(3.0); 
   my_priority_Queue.offer(2.5);
   my_priority_Queue.offer(4.0);
   my_priority_Queue.offer(1.5);
   my_priority_Queue.offer(2.0);
   //Outputing elements out to the console
   while(!my_priority_Queue.isEmpty());{
       System.out.println(my_priority_Queue.poll());
   }
   
   
    
   };
}
