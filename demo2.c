#include <stdio.h>
#include<stdlib.h>

struct strADT{
    int *arr;
    int max;
    int l;
};

void display(struct  strADT *s){

    for (int i = 0; i < s->l; i++)
    {
        printf("Elementss :%d \n",s->arr[i]);
    }
    
}

void insert(struct  strADT *s){

    int a,p;
    printf("Enter number to insert:");
    scanf("%d",&a);

    printf("At position:");
    scanf("%d",&p);

    p=p-1;

    for (int i = s->l; i >p; i--)
    {
         s->arr[i] = s->arr[i - 1];
    }
    
    s->arr[p]=a;

    
    for (int i = 0; i < s->l; i++)
    {
        printf("Elements :%d \n",s->arr[i]);
    }
    
}

void sort(struct  strADT *s){
    int temp,min;
    

    for(int i=0;i<s->l-1;i++){
        min=i;
        for (int j=i+1;j<s->l;j++)
        {
            if(s->arr[j]<s->arr[min]){
                min=j;
            }
            
        }
        temp=s->arr[i];
            s->arr[i]=s->arr[min];
            s->arr[min]=temp;
        
        
    }
    for (int i = 0; i < s->l; i++)
    {
        printf("Elements :%d \n",s->arr[i]);
    }
}

void modify(struct  strADT *s){

    int a,d,i,flag=0;
    printf("Replace the element:");
    scanf("%d",&d);
    printf("Element to insert:");
    scanf("%d",&a);

    for ( i = 0; i < s->l; i++)
    {
        if(s->arr[i]==d){
            //printf("Element found at position: %d",i+1);
            break;
            flag=1;
        }
        if(flag==0){
       printf("Element not found")  ;   
}
    }
    

    s->arr[i]=a;

    for (int i = 0; i < s->l; i++)
    {
        printf("Elements :%d \n",s->arr[i]);
    }
    
}

void delete(struct  strADT *s){
    int d,arr1[100];
    printf("Element to delete from position:");
    scanf("%d",&d);
    d=d-1;

    for (int i = d; i <s->l-1; i++)
    {
        s->arr[i]=s->arr[i+1];
    }
    
    
    for (int i = 0; i < s->l; i++)
    {
        printf("Elements :%d \n",s->arr[i]);
    }
}

void search(struct  strADT *s){
    int n,flag=0;

    printf("Enter element to search:");
    scanf("%d",&n);

    for (int i = 0; i < s->l; i++)
    {
        if(s->arr[i]==n){
            printf("Element found at position: %d\n",i+1);
            flag=1;
            break;
            
        }
          
}
    if(flag==0){
       printf("Element not found\n")  ; 
    }
    
}

int main() {

    struct strADT *s;  
    int e,a1,flag=0;

    printf("Enter size of array:");
    scanf("%d",&s->max);
    

    s->arr=(int*)malloc(s->max*sizeof(int));

    printf("Enter length:");
    scanf("%d",&s->l);

    printf("Enter %d elements:",s->l);
    for (int i = 0;i <s->l; i++)
    {
        scanf("%d",&s->arr[i]);
    }


    a1:    

    printf("Enter 1 to display array.\nEnter 2 to insert element in array.\nEnter 3 to delete an element from an array.\nEnter 4 to modify an array.\nEnter 5 to sort an array.\nEnter 6 to searchan element form an array.\n");
    printf("Enter:");
    scanf("%d",&e);
    switch (e)
    {
    case 1:
        display(s);
        break;

    case 2:
        insert(s);
        break;
    
    case 3:
        delete(s);
        break;

    case 4:
        modify(s);
        break;

    case 5:
        sort(s);
        break;

    case 6:
        search(s);
        break;

    default:
        printf("Enter valid input.");
        break;
    }
    
    printf("Do you want to continue enter 1:");
    scanf("%d",&flag);
    if(flag==1){
        goto a1;
    }

    
      

    return 0 ;
}