#include<stdio.h>
int gcd();

int gcd(int p ,int q)
{
    if (p>q)
    {
       return gcd(q,p);
    }
    else if (q==0)
    {
        return p;
    }
    else
    return gcd(p,q%p);
       
}
void main()
{
    int p,q,n;
    printf("enetr 2 no:");
    scanf("%d %d",&p,&q);
    //n=gcd(p,q);
    printf("gcd=%d",gcd(p,q));
}