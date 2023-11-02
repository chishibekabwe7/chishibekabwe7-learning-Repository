/*Creating the Database*/
create database JOINS_DB;


/*Creating cricket table*/
create table cricket (
cricket_id int auto_increment,
name varchar(30), primary key(cricket_id)
);

/*Creating football table*/
create table football (
football_id int auto_increment,
name varchar(30), primary key(football_id)
);

/*Insert values into the tables*/
insert into cricket (name)
value('Stuart'),('Michael'),('Johnson'),('Hayden'),('Fleming');
insert into football (name)
value('Stuart'),('Johnson'),('Hayden'),('Langer'),('Astle');

/*Checking the tables*/
select * from cricket;
select * from football;

/*INNER JOIN*/
select cricket.cricket_id,cricket.name,football.football_id,football.name from cricket inner join football on cricket.name = football.name;
select * from cricket inner join football on cricket.cricket_id = football.football_id;

/*Using Classicmodels Database*/
use mysampledatabase;

/*INNER JOINS*/
select productcode, productname, textdescription from products inner join productlines using(productline); 
select customers.full_name,orders.orderNumber,orders.orderDate,orders.status from customers inner join orders on customers.Customer_id = orders.customerNumber;
select employees.lastName,employees.firstName,customers.salesRepEmployeeNumber from employees inner join customers on employees.employeeNumber = customers.salesRepEmployeeNumber;
select products.productName,products.quantityInStock,orderdetails.orderNumber from products inner join orderdetails on products.productCode = orderdetails.productCode;
select customers.Full_Name,orders.orderNumber from customers inner join orders on customers.customer_ID = orders.customerNumber;



/*LEFT JOINs*/
select customers.Full_Name,orders.orderNumber,orders.orderDate from customers left join orders on customers.customer_ID = orders.customerNumber;
select productlines.productLine,products.productName from productlines left join products on productlines.productLine = products.productLine;
/*Checking the tables*/
show tables;
select * from productlines;
select * from orderdetails;
select * from products;
select * from customers;
select * from employees;
select * from orders;
