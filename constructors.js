function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cuteStatement = function() {
  console.log(`${this.owner} loves ${this.name}`)
}

Cat.prototype.meow = function() {
  console.log("meow")
}


function Student(fName, lName) {
  this.fName = fName;
  this.lName = lName;
  this.courses = [];
}

Student.prototype.name = function() {
  console.log(`${this.fName} ${this.lName}`)
}

Student.prototype.enroll = function(Course) {
  this.courses.push(Course);
  Course.students.push(this);
}

Student.prototype.courseLoad = function() {
  let load = {};
  for (course in this.courses) {
    load[course.department] += course.credits;
  }
  console.log(load);
}


function Course(name, dept, credits) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.students = [];
}

Course.prototype.students = function(){
  for (student in this.students) {
    console.log(student.fName);
  }
}

Course.prototype.addStudent = function(student){
  student.enroll(this);
}


course1 = new Course('calc', 'math', 4)
student = new Student('frank', 'bi');
// console.log(student.fName);
// student.name();
// student.courses.push(course1);
// course1.students.push(student);

student.enroll(course1);
