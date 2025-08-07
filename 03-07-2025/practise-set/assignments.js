// Q-1 Create 3 objects. Each object should have these properties:
// name, age, salary, education

// Then calculate and print:
// 1. The average age of all 3 people 
// 2. The total salary of all 3 people


//  const harry = {
//             name : 'harry',
//             age : 20,
//             salary : 5000,
//             education : '12th pass'
//         }
//         const dany = {
//             name : 'dany',
//             age : 18,
//             salary : 4000,
//             education : '10th pass'
//         }
//         const dev = {
//             name : 'dev',
//             age : 22,
//             salary : 10000,
//             education : 'b tech'
//         }
//         let average_age = (harry.age + dany.age + dev.age)/3
//         console.log(average_age)
//         let totalsalary = harry.salary + dany.salary + dev.salary
//         console.log(totalsalary)



// Q-2 Create 2 objects with age and salary 
// Increase the age of both by 2
// Increase the salary of both by 10,000


        // const harry_info = {
        //     age : 25,
        //     salary : 50000 
        // }
        // const dev_info = {
        //     age : 20,
        //     salary : 30000
        // }
        // let increasing_age = harry_info.age += 2 , increase_age = dev_info.age += 2;
        // console.log('harry age',increasing_age,'dev age',increase_age);
 
        // let increasing_salary = harry_info.salary += 10000;
        // let increase_salary = dev_info.salary += 10000;
        // console.log('harry salary',increasing_salary,'dev salary',increase_salary);




// Q-3 Create 3 student objects with these properties: 
// name, marks1, marks2, marks3
// - find the average marks of each students by calculating their total marks 
// then store the average marks of each students in array - called student-marks

    
        // const kuldeep = {
        //     name: "kuldeep",
        //     marks1: 20,
        //     marks2: 10,
        //     marks3: 25
        // }
        // const raghav = {
        //     name: "raghav",
        //     marks1: 5,
        //     marks2: 8,
        //     marks3: 7
        // }
        // const harry = {
        //     name: "harry",
        //     marks1: 20,
        //     marks2: 40,
        //     marks3: 50
        // }
        // let kuldeep_average_marks = (kuldeep.marks1 + kuldeep.marks2 + kuldeep.marks3)/3
        // console.log('kuldeep average marks :',kuldeep_average_marks)

        // let raghav_average_marks = (raghav.marks1 + raghav.marks2 + raghav.marks3)/3
        // console.log('raghav average marks :',raghav_average_marks)

        // let harry_average_marks = (harry.marks1 + harry.marks2 + harry.marks3)/3
        // console.log('harry average marks :',harry_average_marks)

        // const students_marks = [ kuldeep_average_marks , raghav_average_marks , harry_average_marks]




// Q-4 Create an object called `classroom`
// It should have a property `students` that is an array of 3 student objects
// Each student object should have:
// -name, hobbies (an array of 3 hobbies), city
// Print the second hobby of the third student

//  const classroom = {
//             students: [
//                 {
//                     name: "harry",
//                     hobby: ["dancing", "singing", "reading"],
//                     city: "indore"
//                 },
//                  {
//                     name: "dev",
//                     hobby: ["cricket", "gaming", "driving"],
//                     city: "dewas"

//                 },
//                  {
//                     name: "kartik",
//                     hobby: ["basketball", "football", "listening"],
//                     city: "banglore"
//                 }
//             ]
//         }

//         console.log(classroom.students[2].hobby[1])




// Q-5 Create an array called my-info which have 2 objects
// each object have cityname, address, roll-number
// then swap the value of one object with another

//  const my_info = [
//             {
//                 cityname : "bhopal",
//                 address : "5 kuldeep nagar",
//                 roll_number : 2749
//             },
//             {
//                 city_name : "indore",
//                 address : "laxman nagar",
//                 roll_number : 56795665
//             }
//         ]

//         let temp = my_info[0]
//         my_info[0] = my_info[1]
//         my_info[1] = temp
//         console.log(my_info[0])