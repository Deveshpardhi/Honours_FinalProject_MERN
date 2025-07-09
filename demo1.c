#include<stdio.h> 
#include <stdbool.h> 
 
void swap(int* xp, int* yp) 
{ 
    int temp = *xp; 
    *xp = *yp; 
    *yp = temp; 
} 
  
 
int main(){ 
    int n; 
    printf("Enter the number of processes: "); 
    scanf("%d",&n); 
     
    int at[n], bt[n], p[n], wt[n], ta[n]; 
     
    printf("Enter the Arrival time, Burst time and priority of the processes: \n"); 
    for(int i = 0; i<n;i++){ 
        printf("Arrival time of process %d: ", i+1); 
        scanf("%d",&at[i]); 
        printf("Burst time of process %d: ", i+1); 
        scanf("%d",&bt[i]); 
        printf("Priority of process %d: ", i+1); 
        scanf("%d",&p[i]); 
    } 
     
    
    int time = 0; 
    int i, j; 
    bool swapped; 
    for (i = 0; i < n - 1; i++) { 
        swapped = false; 
        for (j = 0; j < n - i - 1; j++) { 
            if (p[j] > p[j + 1]) { 
                swap(&at[j], &at[j + 1]); 
                swap(&bt[j], &bt[j + 1]); 
                swap(&p[j], &p[j + 1]); 
                swapped = true; 
            } 
             
            else if (p[j] == p[j + 1] && at[j] > at[j + 1]) { 
                swap(&at[j], &at[j + 1]); 
                swap(&bt[j], &bt[j + 1]); 
                swap(&p[j], &p[j + 1]); 
                swapped = true; 
            } 
        } 
  
        if (swapped == false) 
            break; 
    } 
     
    
    printf("Gantt Chart:\n"); 
    printf("-----------\n"); 
     
     
    for (int i = 0; i < n; i++) { 
        wt[i] = time - at[i]; 
        if (wt[i] < 0) 
            wt[i] = 0; 
         
        printf("| P%d ", i + 1); 
        time += bt[i]; 
        ta[i] = wt[i] + bt[i]; 
    } 
    printf("|\n"); 
     
    printf("0   "); 
    for (int i = 0; i < n; i++) { 
        printf("    %d ", time); 
    } 
    printf("\n"); 
     
    float sum = 0, sum2 = 0; 
    for(int  i = 0; i < n; i++){ 
        sum += wt[i]; 
        sum2 += ta[i]; 
    } 
     
    printf("\nAverage waiting time: %f\n", sum / n); 
    printf("Average turnaround time: %f\n", sum2 / n); 
     
    return 0;
}