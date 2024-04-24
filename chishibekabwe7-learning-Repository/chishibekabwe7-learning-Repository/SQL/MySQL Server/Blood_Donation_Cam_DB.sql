show databases;
create database blood_Donation_Camp_DB;
use blood_Donation_Camp_DB;
use Demo_DB;
create table users (
id int auto_increment,
name varchar(255),
email varchar(255),
phone varchar(255),
bgroup varchar (255),
primary key(id)
);
show tables;
select * from users;
select * from mysql.user;