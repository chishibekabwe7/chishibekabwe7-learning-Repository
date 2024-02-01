#include <stdio.h>
int main () {
    //Snake case variable
    char My_var[] = "This is a Snake case variale";
    printf("%s\n",My_var);

    //This is a Camel case Variable
    char myVar2[] = "This is a Camel case variable";
    printf("%s\n",myVar2);
    
    
    
   //This is a Pascal case Variable
    char MyVar3[] = "This is a Pascal case variable";
    printf("%s\n",MyVar3);

    /*
    Kebab case is not susport by C programming
   //This is a kebab case variable 
   char My-Var4 = "This is a kebab case variable";
   prinf("%s\n,My-Var4");
    */
    

    return 0;
}