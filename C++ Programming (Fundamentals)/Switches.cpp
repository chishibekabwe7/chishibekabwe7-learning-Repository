#include <iostream>
using namespace std;

int main (){

    int day = 4;
    switch (day)
    {
    case 1: /* constant-expression */
        cout<<"Monday";/* code */
        break;
        
    case 2: /* constant-expression */
        cout<<"Tuesday";/* code */
        break;

    case 3: /* constant-expression */
        cout<<"Wednesday";/* code */
        break;

    case 4: /* constant-expression */
        cout<<"Thursday";/* code */
        break;

    case 5: /* constant-expression */
        cout<<"Friday";/* code */
        break;

    case 6: /* constant-expression */
        cout<<"Saturday";/* code */
        break;

    default:
       cout<<"Sunday";
        break;
    }
    return 0;
}