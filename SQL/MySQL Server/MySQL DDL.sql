/*Creating a table*/
create table family_and_friends (
ID int auto_increment not null,
First_Name varchar(255) not null,
Last_Name varchar(255) not null,
Age varchar(255),
Gender varchar(255),
DOB varchar(255),
Phone_Number int (255),
city varchar(255),
addressLine1 varchar(255),
addressLine2 varchar(255),
Nationality varchar(255),
primary key(ID),
unique(Phone_Number)
);

/*Deleting a table*/
drop table family_and_friends;

/*Creating a Database*/
create database family_and_friends;

/*deleting a database*/
drop database family_and_friends;

/*Using the database schema*/
use family_and_friends;

/*Viewing the tables*/
show tables;

/*Viewing the database schema's*/
show databases;

/* ALTER */
alter table customers add column Gender varchar(255);
alter table customers drop column Gender;

/* DROP */
drop table customers;
drop database Demo_DB;


/* Delete entire table data withing deleting the table */
truncate table customers;

/* VIEWS */
create view customerView as select Customer_ID,Full_Name,Last_Name from customers where city = 'Luanshya';
select * from customerView;

/* UNION */
select First_Name from customers union select firstName from employees;
select First_Name from customers union all select firstName from employees;
