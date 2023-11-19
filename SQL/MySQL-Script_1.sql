show databases;
/*Company_Database*/
create database Company_DB;
use Company_DB;
create table Department (
Department_ID int auto_increment ,
Name varchar(255),
Locations varchar(255),
primary key(Department_ID)
);
/*A git change*/
create table Project(
Project_ID int auto_increment,
Name varchar(255),
primary key(Project_ID)
);

create table employee (
Employee_ID int auto_increment,
First_Name varchar(255),
Last_Name varchar(255),
Initials varchar(255),
Gender varchar(255),
Birth_date varchar(255),
Street varchar(255),
Postal_Code varchar(255),
City varchar(255),
primary key(Employee_ID)
);
show tables;
show databases;
drop database College_Student_DB ;


/*Course Database*/
create database Courses_DB;
use Courses_DB;
create table Student(
Student_ID int ,
First_Name varchar(255),
Last_Name  varchar(255),
Age int,
primary key(Student_ID)
);
create table Course (
Course_ID int,
Course_Name varchar(20),
primary Key(Course_ID)
);

select * from Student;
select * from Course;
insert into Student(Student_ID,First_Name,Last_Name,Age)
values(
1,'CHISHIBE','KABWE',19
);
insert into Course(Course_ID,Course_Name)
values(1,'WEB DEVELOPMET');
