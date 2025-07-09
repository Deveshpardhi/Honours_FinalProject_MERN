#include<stdio.h>
#define PI 3.14
int main(int argc,char const*argv[])
{
    int a=5;
    float b=8.444;
    printf("the value of a is %d and value of bis %f\n",a,b);
    printf("the value of b is %10.5f\n",b);
    printf("the value of b is %-10.5f here\n",b);
    printf("the value od Pi is %f\n",PI);

    return 0;
}