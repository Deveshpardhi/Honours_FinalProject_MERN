#include<stdio.h>
int main(){
        int n,sum=0,m,x;
        printf("enter value=");
        scanf("%d",&n);
        x=n;
        while (n>0)
        {
            m=n%10;
            sum=sum+(m*m*m);
            n=n/10;
        }
         if (sum==x)
             printf("amstrom");
         else
              printf("not amstrom");

        return 0;
}

