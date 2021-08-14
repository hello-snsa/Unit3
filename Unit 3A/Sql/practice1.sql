show databases;
select DATABASE(); -- shows which database is in use -- 

create database demo;
use demo;


create table demo1
(id int auto_increment primary key ,col1 int, col2 int);

describe demo1;

insert into demo1
(col1,col2)
values (100,200);

select * from demo1;

create table demo2
(id int auto_increment primary key ,col10 int, col20 int);

insert into demo2
(col10,col20)
values (201,202);

select * from demo2;

describe demo2;

alter table demo2
add  demo1_id int ,
 add foreign key (demo1_id)
references demo1(id);


SET FOREIGN_KEY_CHECKS = 0;
drop table demo1;
SET FOREIGN_KEY_CHECKS = 1;


alter table demo2
add foreign key(demo1_id)
references demo1(id)
on delete set null;

-- on delete cascade ;



