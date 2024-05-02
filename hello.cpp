#include<iostream>
using namespace std;
int main(){
    int air_quality, count;
    cout<<"enter 1 for entering value and 2 for exit: "<<endl;
    cin>>count;
    while(count!=2){
        cout<<"Enter the air quality index: "<<endl;
        cin>>air_quality;
        switch(air_quality){
            case 0 ... 50:
                cout<<"Good air quality"<<endl;
                break;
            case 51 ... 100:
                cout<<"Moderate air quality "<<endl;
                break;
            case 101 ... 150:
                cout<<"Unhealthy for sensitive groups "<<endl;
                break;
            case 151 ... 200:
                cout<<"Unhealthy air quality "<<endl;
                break;
            case 201 ... 300:
                cout<<"Very unhealthty quality"<<endl;
                break;
            case 301 ... 500:
                cout<<"Hazardous air quality "<<endl;
                break;
            default:
                cout<<"Error"<<endl;
        }
        cout<<"Enter 1 for entering value and 2 for exit: "<<endl;
        cin>>count;
    }
    
    return 0;
}