#include <stdio.h>
int main (){
    int day = 6;
    switch (day)
    {
    case 1: /* constant-expression */
        printf("Monday");/* code */
        break;
        
    case 2: /* constant-expression */
        printf("Tuesday");/* code */
        break;

    case 3: /* constant-expression */
        printf("Wednesday");/* code */
        break;

    case 4: /* constant-expression */
        printf("Thursday");/* code */
        break;

    case 5: /* constant-expression */
        printf("Friday");/* code */
        break;

    case 6: /* constant-expression */
        printf("Saturday");/* code */
        break;

    default:
       printf("Sunday");
        break;
    }
    return 0;
}