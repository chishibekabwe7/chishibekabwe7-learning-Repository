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

