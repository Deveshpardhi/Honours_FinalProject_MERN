#include<stdio.h>
int main()
{
    int a[50][50],b[50][50],mul[50][50],i,j,k,r,c;

    printf("enter no of rows n columns:");
    scanf("%d %d",&r,&c);

    printf("enter elements of matrix A:");
    for ( i = 0; i < r; i++)
    {
        for (j=0;j<c;j++)
        {
            printf("elemet-[%d][%d]:",i,j);
            scanf("%d",&a[i][j]);
        }
        
    }
    printf("Matrix A:");
     for ( i = 0; i < r; i++)
    {
        printf("\n");
        for (j=0;j<c;j++)
      { 
        printf("%d",a[i][j]);
      }    
}

printf("enter elements of matrix B:");
    for ( i = 0; i < r; i++)
    {
        for (j=0;j<c;j++)
        {
            printf("elemet-[%d][%d]:",i,j);
            scanf("%d",&b[i][j]);
        }
        
    }
    printf("Matrix B:");
     for ( i = 0; i < r; i++)
    {
        printf("\n");
        for (j=0;j<c;j++)
      { 
        printf("%d",b[i][j]);
      }    
}

 for ( i = 0; i < r; i++)
 {
    for (j=0;j<c;j++)
    {
        mul[i][j]=0;
        for (k=0;k<r;k++)
        {
            mul[i][j]+=a[i][k]*b[k][j];
        }
        
    }
    printf("\n");
 }
 for ( i = 0; i < r; i++)
    {
        for (j=0;j<c;j++)
        {
           printf("%d",mul[i][j]);
        }
        printf("\n");
    }
 


return 0;
}