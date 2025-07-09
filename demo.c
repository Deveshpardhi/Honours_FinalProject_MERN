
#include <stdio.h>

 
 struct student{
    char name[30];
    int rollno;
    float marks[3], total,per;
} ;
 
int main()
{
    //number of students
    int n=3,i,j;
   

    //array to store structure values of all students
     struct student stud[n],temp;
 
    //Taking each student detail as input
    printf("Enter %d students Details \n \n",n);
    for( i=0; i<n; i++){
        printf("Student %d:- \n",i+1);


        printf("Name: ");
        scanf("%s",stud[i].name);

        
        printf("Roll Number: ");
        scanf("%d",&stud[i].rollno);

    for( j=0;j<3;j++)
{
        printf("Marks: ");
        scanf("%f",&stud[i].marks[j]);
}
        
               
        printf("\n");
    }
    
    
 
    // Calculation of total marks
    for( i=0; i<n; i++)
    {
 stud[i].total=0;
for(int j=0;j<3;j++)
{
stud[i].total =stud[i].total+stud[i].marks[j];

}
stud[i].per=(stud[i].total/300)*100;
}


        

    
        for( i=1; i<=n-1; i++)
    {
    
    for( j=0; j<n-i; j++)
    {
        if(stud[j].per>stud[j+1].per)
        {
            temp=stud[j];
            stud[j]=stud[j+1];
            stud[j+1]=temp;
        }
    }
    }
    
    //Displaying Student  details
   printf(" Display the Student details and Total marks\n");
    for( i=0; i<n; i++){
        printf("Name \t: ");
        printf("%s \n",stud[i].name);
 
        printf("Roll Number \t: ");
        printf("%d \n",stud[i].rollno);
 
        

printf(" Total Marks \t: ");
 printf("%.2f \n",stud[i].total);
 
 
 printf(" Percentage: \t: ");
 printf("%.2f \n",stud[i].per);
        

        printf("\n");
        
    }
    

 
    return 0;
}
