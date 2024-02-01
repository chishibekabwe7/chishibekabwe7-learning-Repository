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


