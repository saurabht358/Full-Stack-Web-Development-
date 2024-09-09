let userName = "Saurabh"
let employeeName = userName;
// console.log("User Name:",userName," and Employee Name:",employeeName)
employeeName = "jiten";
// console.log("User Name:",userName," and Employee Name:",employeeName)

let subjects = {
    "saurabh":"java",
    "jiten":"CA",
    "pranil":"AI"
}

console.log(subjects)
let subjects2 = subjects
subjects2.pranil = "Data Science"
console.log(subjects)
console.log(subjects2)