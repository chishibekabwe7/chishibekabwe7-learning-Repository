/* (1) Data Definition Language */

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


/* (2) Data Query Language */

/*Using the database classicmodels*/
show databases;
use mysampledatabase;
show tables;

/*  'SELECT'  */       /* WHERE */      /*FROM*/
select * from customers;
select * from employees;
select * from orderdetails;
select * from orders;
select * from payments;
select * from productlines;
select * from products;
select distinct * from customers;
select * from customers where Full_Name in('CHISHIBE KABWE','JR Ichipatala');
select * from customers where Full_Name not in('CHISHIBE KABWE','JR Ichipatala');
select Full_Name,Last_Name from customers order by Full_Name desc;

/* NULL VALUES*/
select addressLine2 from customers where addressLine2 is null;
select addressLine2 from customers where addressLine2 is not null;

/*LIMIT*/
select * from orders
limit 300;

/*LIKE*/
select * from customers where First_Name like 'c%';
select * from customers where First_Name like '%a';
select * from customers where First_Name like '%sh%';
select * from customers where First_Name like '_______e';
select * from customers where First_Name not like 'c%';

/*ALIAS*/
select Full_Name as Nick_Name,Customer_ID as ID from customers;

/* FUNCTIONS */
select min(buyPrice) as SmallestPrice from products;
select max(buyPrice) as LargestPrice from products;
select sum(buyPrice) as accumulatedTotal from products;
select count(buyPrice) as numberOfOrders from products;
select avg(buyPrice) as averageValue from products;

/* Date */
select * from orders where orderDate = '2003-01-09';

/* (3) Data Manipulation Language */

/* INSERT */
select * from customers;
insert into customers ( Customer_ID ,Full_Name,Last_Name,First_Name,Phone_Number,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit)
values('3','Mumena Luwisha','Luwisha','Mumena','0960163254','Roan Section 6','House NO: ___','Luanshya',null,'10101','Zambia',null,null);

/* UPDATE */
update customers set Phone_Number = '0760555162',addressLine1 = 'Roan Section 1',
addressLine2 = 'House NO:___',  city ='Luanshya',  postalCode='10101', country='Zambia', salesRepEmployeeNumber=null,creditLimit = null where Customer_ID='2';
update customers set Gender = 'Male' where Customer_ID = 1;

/* DELETE */
delete from customers where Customer_ID = '112';
/* Deletes the entire table */
delete from customers;

/* (4) Data Control Language */

/*Checking for users on the Database server*/
select * from mysql.user;

/*Creating a New user*/
create user 'DBA_Deputy'@'%' identified by '335598';

/* The Super priviledge */
grant grant option on *.* to 'DBA_Deputy'@'%';

/* Refreshing Changes made */
flush privileges;

/* Granting permissions to a user */
grant select ,create on customers to 'DBA_Deputy'@'%';
grant all privileges on *.*  to 'DBA_Deputy'@'%';

/* Revoking permissions from a user */
revoke select ,create on customers from 'DBA_Deputy'@'%';
revoke all privileges on *.* from 'Junior_DBA'@'%';

/* Renaming a user */
rename user 'DBA_Deputy' to 'Junior_DBA';

/* deleting a user */
drop user 'Junior_DBA'@'%';


