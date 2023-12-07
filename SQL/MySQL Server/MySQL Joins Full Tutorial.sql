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
select products.productName,;
select productcode, productname, textdescription from products inner join productlines using(productline); 
select customers.full_name,orders.orderNumber,orders.orderDate,orders.status from customers inner join orders on customers.Customer_id = orders.customerNumber;
select employees.lastName,employees.firstName,customers.salesRepEmployeeNumber from employees inner join customers on employees.employeeNumber = customers.salesRepEmployeeNumber;
select products.productName,products.quantityInStock,orderdetails.orderNumber from products inner join orderdetails on products.productCode = orderdetails.productCode;
select customers.Full_Name,orders.orderNumber from customers inner join orders on customers.customer_ID = orders.customerNumber;
select products.productName, sum(orderdetails.quantityOrdered * orderdetails.priceEach) as totalSales from products inner join orderdetails on products.productCode=orderdetails.productCode group by products.productCode;
select offices.officeCode,employees.lastName,employees.firstName from offices inner join employees on offices.officeCode = employees.officeCod;
select products.productName,productlines.textDescription from products inner join productlines on products.productLine = productlines.productLine;

/*LEFT JOINs*/
select customers.Full_Name,orders.orderNumber,orders.orderDate from customers left join orders on customers.customer_ID = orders.customerNumber;
select productlines.productLine,products.productName from productlines left join products on productlines.productLine = products.productLine;
select customers.Full_Name,orders.orderNumber,orders.orderDate from customers left join orders on customers.customer_ID = orders.customerNumber;
select orders.orderNumber,orderdetails.productCode,orderdetails.quantityOrdered,orderdetails.priceEach from orders left join orderdetails on orders.orderNumber=orderdetails.orderNumber where orderDate='2003-10-21';
/*RIGHT JOINS*/
select customers.Full_Name,orders.orderNumber from customers right join orders on customers.customer_ID = orders.customerNumber;
select employees.employeeNumber,employees.firstName,employees.lastName,customers.customer_ID,customers.First_Name,customers.Last_Name from customers right join employees on customers.salesRepEmployeeNumber = employees.employeeNumber;


/*FULL OUTER JOIN*/
select customers.Full_Name,orders.orderNumber from customers left join orders on customers.customer_ID=orders.customerNumber
 union select customers.Full_Name,orders.orderNumber from customers right join orders on customers.customer_ID=orders.customerNumber;
 select customers.customer_ID,customers.First_Name,customers.Last_Name, orders.orderNumber from customers left join orders on customers.customer_ID=orders.customerNumber
 union select customers.customer_ID,customers.First_Name,customers.Last_Name, orders.orderNumber from customers right join orders on customers.customer_ID=orders.customerNumber;
 
 /*SELF JOINS*/
 select 
	e1.employeeNumber as employeeNumber,
    e1.firstName as employeeFirstName,
    e1.lastName as employeeLastName,
    e2.employeeNumber as managersNumber,
    e2.firstName as managerFirstName,
    e2.lastName as managerLastName
from
    employees e1
left join
    employees e2
on
    e1.reportsTo = e2.employeeNumber;    
    
/*Checking the tables*/
show tables;
select * from offices;
select * from productlines;
select * from orderdetails;
select * from products;
select * from customers;
select * from employees;
select * from orders;
show tables;
