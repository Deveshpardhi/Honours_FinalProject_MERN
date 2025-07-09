#include<stdio.h>
int fib();
void main()
{
 int n;
 printf("enter no of terms:");
 scanf("%d",&n);
 fib(n);
// return 00;
}

int fib(int n)
{
  unsigned int f=0,s=1;
  unsigned int c;

  printf("fibonachi series:%d\n",0);
  int temp;
  do
  {
    c=f+s;
    printf("%u\n",c);
    temp=s;
    s=c;
    f=temp;
    n--;
  } while (n>1);
  
return ;
}