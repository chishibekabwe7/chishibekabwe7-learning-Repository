show databases;
create database SQL_Joins_DB;
use SQL_Joins_DB;
show tables;
create table employee (
emp_id varchar(255),
emp_name varchar(255),
salary varchar(255),
dept_id varchar(255),
manager_id varchar(255),
primary key (emp_id)
);
drop table employee;
create table department(
dept_id  varchar(255) not null,
dept_name varchar(255),
primary key (dept_id)
);
create table manager(
manager_id varchar(20),
manager_name varchar(50),
dept_id varchar(20),
primary key (manager_id)
);
create table projects(
project_id varchar(20),
project_name varchar(100),
team_member_id varchar(20),
primary key(project_id)
);

 insert into employee (emp_id,emp_name,salary,dept_id,manager_id)
 values('E6','Robin','35000','D10','M3');
 select * from employee;
 
 insert into department (dept_id,dept_name)
 values('D4','Admin');
 
 insert into manager (manager_id,manager_name,dept_id)
 values('M4','Cory','D1');
 
 insert into projects(project_id,project_name,team_member_id)
 values('P1','Data Migration','E2');
 truncate table projects;
 select * from projects;
 truncate table projects;
 insert into projects(project_id,project_name,team_member_id)
 values('P2','ETL Tool','M4');
 alter table projects drop primary key;
 
 select * from employee;
 select * from department;
 select * from manager;
 select * from projects;
 
 

