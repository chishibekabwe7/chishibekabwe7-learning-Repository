/*=================================================================[ AUTHOR CHISHIBE KABWE @CHISHIBE'S ORGANZIATION (GITHUB) ]=================================================================*/
show databases;
use classicmodels_db;
show tables;
select * from customers;
select * from employees;
select * from offices;
select * from orderdetails;
select * from orders;
select * from payments;
select * from productlines;
select * from products;

/*Data Definition Language DDL*/
CREATE DATABASE CHISHIBES_ORGANIZATION;
DROP DATABASE CHISHIBES_ORGANIZATION; 

CREATE TABLE PROJECTS (
PROJECT_ID INT AUTO_INCREMENT NOT NULL,
PROJECT_NAME VARCHAR(255),
START_DATE DATE,
END_DATE DATE,
STATUS VARCHAR(255),
PRIMARY KEY (PROJECT_ID),
UNIQUE (PROJECT_ID)
);

CREATE TABLE SERVICES (
SERVICES_ID INT AUTO_INCREMENT NOT NULL,
SERVICES_NAME VARCHAR(255),
DESCRIPTION VARCHAR(255),
PRIMARY KEY (SERVICES_ID)
);



CREATE TABLE CLIENTS (
CLIENT_ID INT AUTO_INCREMENT NOT NULL,
CLIENT_NAME VARCHAR(255),
CONTACT_EMAIL VARCHAR(255),
CONTACT_PHONE VARCHAR(255),
PRIMARY KEY (CLIENT_ID)
);
/*DROP TABLE CLIENTS;*/
/*DROP TABLE SERVICES;*/
/*DROP TABLE PROJECTS;*/

CREATE VIEW MY_VIEW AS SELECT CONTACTLASTNAME,CONTACTFIRSTNAME FROM CUSTOMERS;
CREATE OR REPLACE VIEW MY_VIEW AS SELECT CONTACTLASTNAME,CONTACTFIRSTNAME,CITY FROM CUSTOMERS;
DROP VIEW MY_VIEW;





/*Data Manipulation Language DML*/
insert into customers(customerNumber,customerName,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit)
values(1,'CHISHIBE KABWE','KABWE','CHISHIBE','+260 966498398','Section 1/9','Roan Township','Luanshya',null,'10101','Zambia',null,null);
insert into customers(customerNumber,customerName,contactLastName,contactFirstName,phone,addressLine1,addressLine2,city,state,postalCode,country,salesRepEmployeeNumber,creditLimit)
values(2,'MFUTA KABWE','KABWE','MFUTA','+260 961132425','Section 1/9','Roan Township','Luanshya',null,'10101','Zambia',null,null);
update customers set  customerName = "Chishibe's Organization", customerNumber = 3, contactLastName = "KABWE",contactFirstName= "CHISHIBE",phone="+260 966498398",addressLine1="Section 1/9",addressLine2="Roan Township",city="Luanshya",state=null,postalCode="10101",country="Zambia",salesRepEmployeeNumber=null,creditLimit=null where customerNumber = 103;
update customers set  customerName = "CHISHIBE'S ORGANIZATION", customerNumber = 3, contactLastName = "KABWE",contactFirstName= "CHISHIBE",phone="+260 966498398",addressLine1="Section 1/9",addressLine2="Roan Township",city="Luanshya",state=null,postalCode="10101",country="Zambia",salesRepEmployeeNumber=null,creditLimit=null where customerNumber = 3;
DELETE FROM CUSTOMERS WHERE CUSTOMERNUMBER = 112;
ALTER TABLE CUSTOMERS ADD GENDER VARCHAR(255);
ALTER TABLE CUSTOMERS ADD EXE VARCHAR(255);
ALTER TABLE CUSTOMERS DROP COLUMN EXE;


/*Data Query Language DQL*/
select distinct *  FROM customers;
select  * from customers where country in ('USA','Poland','Germany');
select country from customers where country in ('USA','Poland','Germany');
select * from customers where city not in ('Stavern','Las Vegas','Nantes');
select * from customers order by customerNumber;
select * from customers order by customerNumber desc;
select customerName,state from customers where state is null;
select customerName,state from customers where state is not null;
SELECT * FROM CUSTOMERS LIMIT 100;
SELECT * FROM CUSTOMERS LIMIT 2;
SELECT CUSTOMERNAME FROM CUSTOMERS WHERE CONTACTLASTNAME LIKE '%E';
SELECT CUSTOMERNAME FROM CUSTOMERS WHERE CONTACTLASTNAME LIKE 'M%';
SELECT CITY FROM CUSTOMERS WHERE CITY LIKE 'L%A';
SELECT CUSTOMERNAME AS FULL_NAME, CONTACTLASTNAME AS LAST_NAME,CONTACTFIRSTNAME AS FIRST_NAME FROM CUSTOMERS;
SHOW DATABASES;
SHOW TABLES;
USE CLASSICMODELS_DB;
USE CHISHIBES_ORGANIZATION;
SELECT * FROM PAYMENTS;
SELECT MAX(AMOUNT) FROM PAYMENTS;
SELECT MIN(AMOUNT) FROM PAYMENTS;
SELECT COUNT(AMOUNT) FROM PAYMENTS;
SELECT AVG(AMOUNT) FROM PAYMENTS;
SELECT SUM(AMOUNT) FROM PAYMENTS;
SELECT * FROM PAYMENTS WHERE PAYMENTDATE = '2004-10-19';
SELECT * FROM MY_VIEW;
SELECT * FROM EMPLOYEES;
SELECT CONTACTFIRSTNAME FROM CUSTOMERS UNION ALL SELECT FIRSTNAME FROM EMPLOYEES;
SELECT PHONE FROM CUSTOMERS WHERE PHONE = '6265557265' UNION ALL SELECT PHONE FROM OFFICES WHERE PHONE = '+1 650 219 4782';
SELECT * FROM OFFICES WHERE OFFICECODE BETWEEN 2 AND 6 ;
SELECT * FROM OFFICES WHERE OFFICECODE NOT BETWEEN 2 AND 6 ;
SELECT COUNT(CUSTOMERNUMBER),CITY FROM CUSTOMERS GROUP BY CITY ORDER BY CITY DESC;


/*Data Control Language DCL*/
SELECT * FROM MYSQL.USER;
CREATE USER 'CJ'@'%' IDENTIFIED BY '335598';
GRANT SELECT ON CUSTOMERS TO 'CJ'@'%';
GRANT GRANT option ON *.* TO 'CJ'@'%';
grant all privileges on *.* to 'CJ'@'%';
REVOKE SELECT ON CUSTOMERS FROM 'CJ'@'%';
/*=================================================================[ AUTHOR CHISHIBE KABWE @CHISHIBE'S ORGANZIATION (GITHUB) ]=================================================================*/
