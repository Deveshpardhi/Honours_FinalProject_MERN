#include<stdio.h>
void main()
{
    FILE*fp;
    char ch;
    int roll_no;
    //clrscr();
    fp=fopen("student.txt","r");
    if (fp==NULL)
    {
        printf("file couldn not open:");
        exit(1);
    }
    do
    {
        ch=fgetc(fp);
        putch(ch);

    } while (ch!=EOF);
    

    fclose(fp);
   // getch();
    

}