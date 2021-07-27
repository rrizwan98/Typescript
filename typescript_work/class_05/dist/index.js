"use strict";
// var message:string = "This is typescript string variable";
// var numberic:number = 10;
// var floating_value:number = 420.8;
// var condition:boolean = true;
// var condition_02:any = "Do not use this variable";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log()message
// console.log(numberic)
// console.log(floating_value)
// console.log(condition)
// console.log(condition_02)
// let id: number;
// let s_name:string;
// let email:string;
// function student_Id_Card(f_id: number , f_name: string , f_email:string): void{
//     this.id=f_id;
//     this.sname=f_name;
//     this.s_email=f_email
// }
// function PrintDetails(): void{
//     var id:number=1;
//     var s_name:string="Raza";
//     var email:string="rrizwan1998@gmail.com";
//     console.log("This is Student_Id \t"+id)
//     console.log("Student_Name \t"+ s_name)
//     console.log("student email \t"+ email)
// }
// student_Id_Card(id,s_name,email);
// PrintDetails();
// class student {
//     id: number;
//     student_name: string;
//     email: string;
//     student_Id_Card(f_id: number, f_name: string, f_email: string): void {
//         this.id = f_id;
//         this.student_name = f_name;
//         this.email = f_email
//     }
//     PrintDetails(): void { 
//         console.log("This is Student_Id \t" + this.id);
//         console.log("Student_Name \t" + this.student_name);
//         console.log("student email \t" + this.email)
//     }
// }
// let student01 = new student();
// student01.student_Id_Card(1,"Raza","rrizwan1998@.com");
// student01.PrintDetails();
// the above code is used in constructor
class student {
    constructor(f_id, f_name, f_email) {
        this.id = f_id;
        this.student_name = f_name;
        this.email = f_email;
    }
    PrintDetails() {
        console.log("This is Student_Id \t" + this.id);
        console.log("Student_Name \t" + this.student_name);
        console.log("student email \t" + this.email);
    }
}
let student01 = new student(1, "Raza", "rrizwan1998@.com");
console.log(student01);
student01.PrintDetails();
