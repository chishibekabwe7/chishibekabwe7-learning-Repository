/*Data Query Language DQL*/
show databases;
use mysampledatabase;
show tables;
select * from customers;
select * from employees;
select distinct * from customers;
select Customer_ID,First_Name,Last_Name from customers where Customer_ID in(1,2,3);
select Customer_ID,First_Name,Last_Name from customers where Customer_ID not in(1,2,3);
select Full_Name,city,country from customers where country in ('Zambia');
select Customer_ID,Full_Name from customers order by Customer_ID;
select Customer_ID,Full_Name from customers order by Customer_ID desc;
select Customer_ID,Full_Name,addressLine1 from customers where Customer_ID is null;
select Customer_ID,Full_Name,addressLine1 from customers where Customer_ID is not null;
select * from customers limit 50;
select Customer_ID as ID,Full_Name as NickName from customers;
select Phone_Number as Mobile_Phone_Number,state as Province from customers;


/*Data Manipulation Language DML*/
insert into customers (Customer_ID,Full_Namb,Last_Name,First_Name,Phone_Number,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit,Gender)
values(4,'Mfuta Kabwe','Kabwe','First_Name','0961132425','Roan Section 1','House NO:9','city','Copperbelt','10101','Zambia',null,null,'Male'); 
insert into customers (Customer_ID,Full_Name,Last_Name,First_Name,Phone_Number,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit,Gender)
values(5,'Abraham Mumbi','Mumbi','Abraham','0764807145','Roan Section 1','House NO:...','Luanshya','Copperbelt','10101','Zambia',null,null,'Male'); 
update customers set state='CopperBelt' where Customer_ID = 1;
update customers set state='CopperBelt' where Customer_ID = 2;
update customers set state='CopperBelt' where Customer_ID = 3;
update customers set First_Name ='Mfuta',city='Luanshya' where Customer_ID = 4;


/*Data Definition Language DDL*/
create database Expense_Tracker_DB;
create table Categories (
Category_ID int auto_increment Not null,
Category_Name varchar(255),
primary key(Category_ID)
);
create table Expenses (
Expense_ID int auto_increment not null,
Category_ID int,
Amount varchar(255),
Date varchar(255),
Description varchar(255),
primary key (Expense_ID),
foreign key(Category_ID) references Categories(Category_ID)
);
insert into Categories(Category_ID,Category_Name)values(1,'Groceries'),
(2,'Utilities'),(3,'Rent/Mortgage'),(4,'Transportation'),(5,'Dining Out'),(6,'Entertainment'),(7,'Healthcare');
insert into Expenses(Expense_ID,Category_ID,Amount,Date,Description) values (1,1,'100.50','2024-01-15','Weekly groceries'),(2,4,'30.00','2024-01-16','Gas for the car'),(3,5,'50.00','2024-01-18','Dinner with friends'),(4,2,'150.00','2024-01-20','Electricity bill'),(5,3,'1200.00','2024-01-25','Monthly rent'),(6,6,'25.00','2024-01-28','Movie night ');
select * from Expenses;
drop table Categories;
drop database Expense_Tracker_DB;


/*===========================Author ChishibeKabwe7  @Github===================================================*/