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


