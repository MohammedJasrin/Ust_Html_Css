// var firstName = "Jasrin";
// firstName="Mohammed"
// console.log(firstName)
// let loc ="Trivandrum"
// console.log(loc)
// let pincode = 695582
// console.log(pincode);
// var data = new Date()
// console.log(data.getDate())
// let language : any;
// language=[4,5,5,3,1]
// console.log(language)
// language = "Malayalam";
// console.log(language)
// function dataentry(){
//     document.writeln(``)
// }
// alert("hai")
// var mark= parseInt(prompt("Please Enter Your mark"))
// if (mark>80){
//     document.writeln(`<h1> Congratulations you got distinction </h1>`)
// }
// else{
//     document.writeln(`<h1> Sorry but no distinction </h1>`)
// }
// let fruits =[12,34,54,44,10,34]                                      Random filter and mapping
// console.log(fruits)
// console.log(fruits.length)
// fruits.push(10)
// var new_fruits = fruits.filter((fruit)=>fruit>25)
// console.log(new_fruits)
// var mappedData = fruits.map((n)=>n*2);
// console.log(mappedData)
// for(var i=5;i>0;i--)
// {
//     for(var j=i;j>0;j--)
//     {
//         document.writeln("*")
//     }
//     document.writeln(`<br>`)
// }
// function topright(){
// document.writeln(`<div>`)
// for(var i=5;i>0;i--)
//     { 
//         for(var j=i;j>0;j--)
//         {
//             document.writeln("*")
//         }
//         document.writeln(`<br>`)
//     }
// document.writeln(`</div>`)
// }
// topright()
// let teachers ={ "data":[{"Name":"Mohammed","Age":22,"Subject":"English"},              objects
//                     {"Name":"Jasrin","Age":23,"Subject":"Malayalam"},
//                     {"Name":"Karthik","Age":25,"Subject":"Hindi"}
//     ]
//  }
// var malayalamteacher =  teachers.data.filter(teach=>teach.Subject=="Malayalam")
// console.log(malayalamteacher)
// console.log("The Teacher teaching malayalam is "+ malayalamteacher[0].Name)
// const add =(a:number,b:number = 10, c?:number)=>{
//     console.log(a+b)    
// }
// const a = add
// a(10,20,30);
// let pet={"type":"Dog","name":"Bruno","Breed":"German Shepard","age":5}
// console.log(pet.name)
// // pet ={"weight":25.5,"color":"Black"}
// let pet2={"type":"cat","name":"Tom","Breed":"Persian"}
// console.log(pet2)
//class
var Student = /** @class */ (function () {
    function Student(studentId, firstName, age) {
        this.studentId = studentId;
        this.age = age;
        this.firstName = firstName;
    }
    Student.prototype.printRecord = function () {
        console.log(this.studentId, this.firstName, this.age);
    };
    return Student;
}());
var student1 = new Student("1011", "Mohammed Jasrin", 22);
// student1.studentId="101";
// student1.firstName="Mohammed Jasrin"
// student1.age=22;
console.log(student1);
student1.printRecord();
