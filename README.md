# react-equation-generator

### Live URL: https://react-equation-generator.herokuapp.com/

## Requirements 

#: <b>build a processor to take the numbers and calculate all the equation to the target number from them.</b>

Create a CSV file with the following numbers: 3, 4, 8, 7, 12

The target number is 532 but should be allowed to change.

You may only use (),+,-,*,/

You can use each symbol many times

You can only use each number once

You do not need to use all the numbers


## Steps to run the project
```
- Clone the repository
- Install the required dependency: `npm install`
- Run the project: `npm start`
```

## Technical Specification

Following stack has been used in the project
- [React](https://reactjs.org/)
- [React Papa Parse](https://react-papaparse.js.org/)

### Output
# Request
steps:
1. Enter Target number in Field ex. 532
2. Upload sample.csv file (attached with this repo having data as 3, 4, 8, 7, 12) by clicking on "Browse_file". 

screenshot:1

![image](https://user-images.githubusercontent.com/44355278/124954180-74a73080-e033-11eb-8470-537057a7953f.png)

screenshot:2 

Target Number is mandatory.

![image](https://user-images.githubusercontent.com/44355278/124954408-a6b89280-e033-11eb-8941-65de1f8eafb6.png)

# Response
screenshot:1 

Upload csv file and wait for file to process. 

![image](https://user-images.githubusercontent.com/44355278/124954570-da93b800-e033-11eb-9416-19073ea6508c.png)

screenshot:2 

Get all generated equations in response.

![image](https://user-images.githubusercontent.com/44355278/124954696-fb5c0d80-e033-11eb-95ec-65cf65b04c94.png)
