#include <stdio.h>

 
 struct student{
    char name[30];
    int rollno;
    float marks;
} ;
 
int main()
{
    //number of students
    int n=3, i, j;
   

    //array to store structurenh values of all students
     struct student stud[n],temp;
 
    //Taking each student detail as input
    printf("Enter %d students Details \n \n",n);
    for( i=0; i<n; i++){
        printf("Student %d:- \n",i+1);


        printf("Name: ");
        scanf("%s",stud[i].name);

        
        printf("Roll Number: ");
        scanf("%d",&stud[i].rollno);

   

        printf("Marks: ");
        scanf("%f",&stud[i].marks);

        
               
        printf("\n");
    }
    
    for( i=1; i<=n-1; i++)
    {
    
    for( j=0; j<n-i; j++)
    {
        if(stud[j].marks>stud[j+1].marks)
        {
            temp=stud[j];
            stud[j]=stud[j+1];
            stud[j+1]=temp;
        }
    }
    }

    
    
    
 
    //Displaying Employee details
   printf(" Display the Student details and Total marks\n");
    for( i=0; i<n; i++){
        printf("Name \t: ");
        printf("%s \n",stud[i].name);
 
        printf("Roll Number \t: ");
        printf("%d \n",stud[i].rollno);
 
        


printf("  Marks \t: ");
 printf("%.2f \n",stud[i].marks);
        

        printf("\n");
        
    }
 
    return 0;
}
