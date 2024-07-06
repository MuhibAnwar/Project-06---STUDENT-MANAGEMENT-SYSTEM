import inquirer from 'inquirer';
class Student {
    name;
    id;
    balance;
    courses;
    static counter = 10000;
    constructor(name) {
        this.id = Student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    enrollCourse(course) {
        this.courses.push(course);
    }
    viewBalance() {
        console.log(`Balance for ${this.name} is ${this.balance}`);
    }
    payFees(amount) {
        this.balance -= amount;
        console.log(`${this.name} has been deducted ${amount} from their balance`);
    }
    studentStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Courses: ${this.courses}`);
        console.log(`Balance: ${this.balance}`);
        console.log('----------------------');
    }
}
class StudentManage {
    students;
    constructor() {
        this.students = [];
    }
    addStudent(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`STUDENT: ${name} added successfully. STUDENT ID: ${student.id}`);
    }
    findSTUDENT(studentID) {
        return this.students.find(std => std.id === studentID);
    }
    enrollStudent(studentID, course) {
        let student = this.students.find(std => std.id === studentID);
        if (student) {
            student.enrollCourse(course);
            console.log(`${student.name} enrolled successfully in ${course}`);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    viewBalance(studentID) {
        let student = this.students.find(std => std.id === studentID);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    payFEES(studentID, amount) {
        let student2 = this.findSTUDENT(studentID);
        if (student2) {
            student2.payFees(amount);
        }
        else {
            console.log(`Student with ID ${studentID} not found.`);
        }
    }
    showSTATUS(studentID) {
        let student = this.students.find(std => std.id === studentID);
        if (student) {
            student.studentStatus();
        }
    }
}
// MAIN FUNCTION
async function main() {
    console.log("WELCOME TO THE STUDENT MANAGEMENT SYSTEM");
    console.log("---------------------------------------");
    let newstudent = new StudentManage();
    while (true) {
        let choices = await inquirer.prompt({
            name: "choice",
            type: "list",
            message: "WHAT DO YOU WANT TO DO?",
            choices: ["ADD STUDENT", "ENROLL COURSE", "VIEW BALANCE", "PAY FEES", "SHOW STATUS", "EXIT"]
        });
        switch (choices.choice) {
            case "ADD STUDENT":
                let name = await inquirer.prompt({
                    name: "name",
                    type: "input",
                    message: "ENTER THE NAME OF THE STUDENT"
                });
                newstudent.addStudent(name.name);
                break;
            case "ENROLL COURSE":
                let id = await inquirer.prompt({
                    name: "id",
                    type: "number",
                    message: "ENTER THE ID OF THE STUDENT"
                });
                let course = await inquirer.prompt({
                    name: "course",
                    type: "input",
                    message: "ENTER THE COURSE TO BE ENROLLED"
                });
                newstudent.enrollStudent(id.id, course.course);
                break;
            case "VIEW BALANCE":
                let balanceinput = await inquirer.prompt({
                    name: "balanceinput",
                    type: "number",
                    message: "ENTER THE ID OF THE STUDENT"
                });
                newstudent.viewBalance(balanceinput.balanceinput);
                break;
            case "PAY FEES":
                let fees = await inquirer.prompt({
                    name: "fees",
                    type: "number",
                    message: "ENTER THE ID OF THE STUDENT"
                });
                let amount = await inquirer.prompt({
                    name: "amount",
                    type: "number",
                    message: "ENTER THE AMOUNT TO BE PAID"
                });
                newstudent.payFEES(fees.fees, amount.amount);
                break;
            case "SHOW STATUS":
                let showinput = await inquirer.prompt({
                    name: "showinput",
                    type: "number",
                    message: "ENTER THE ID OF THE STUDENT"
                });
                newstudent.showSTATUS(showinput.showinput);
                break;
            case "EXIT":
                console.log("THANKS FOR USING THE SYSTEM");
                return; // Exit the while loop
        }
    }
}
main();
console.log("THANK YOU FOR VISITNG MY SYSTEM , I HOPE YOU LIKE IT");
console.log("---------------------------------------");
let feedback = await inquirer.prompt([{
        name: "feedback",
        type: "list",
        message: "WHAT YOUR EXPERIENCE WITH US?",
        choices: ["GOOD", "WORK ON IT"]
    }]);
console.log("THANKS FOR YOUR FEEDBACK", feedback.feedback);
