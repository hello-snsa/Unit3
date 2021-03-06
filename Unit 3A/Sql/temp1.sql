create database blog;
show databases;
use 	blog;

create table posts 
(
	id int auto_increment primary key, 
	title varchar(50) not null,
	content varchar(10000),
	post_time timestamp, 
	 author varchar(100)
 );
 
select * from posts;

create table authors 
(
id int auto_increment primary key,
first_name varchar(50) not null,
last_name varchar(50)
);
select * from authors;

create table comments
(
id int auto_increment primary key,
post_id int not null, 
foreign key(post_id) 
references posts(id)
);
select * from comments;

create table tags
(
id int auto_increment primary key,
tag varchar(20) not null
);

select * from tags;

insert into posts 
(
title,content,post_time,author
)
values
(
"hello world",
"Hello everyone this is my first sql assignment",
"2021-08-13 12:04:00",
"ali"
);

insert into posts 
(
title,content,post_time,author
)
values
(
"hey there",
"Hey there!! How are you all",
"2021-08-13 12:20:00",
"ali"
);


insert into posts 
(
title,content,post_time,author
)
values
(
"repeating data",
"This is just some random content",
"2021-08-13 12:22:00",
"snsa"
);

insert into posts 
(
title,content,post_time,author
)
values
(
"again repeating data",
"This is just another random content",
"2021-08-13 12:22:00",
"md"
);

insert into posts 
(
title,content,post_time,author
)
values
(
"final random data",
"This is the final content",
"2021-08-13 12:25:00",
"md"
);

select * from posts;

update posts set content="This is an updated content" where id=5;

select * from posts;

delete from posts where id= 4;

select * from posts;

select * from authors;

ALTER TABLE comments
  ADD  comments varchar(50) NOT NULL
    AFTER id;

select * from comments;

ALTER TABLE comments
  drop  tag_id ;
  
  select * from comments;
  
 
   
  ALTER TABLE posts
   ADD  tag_id int,
  ADD CONSTRAINT  tag_id  FOREIGN KEY (tag_id) references tags(id);
  
  select * from posts;
  
  
   ALTER TABLE authors
  ADD CONSTRAINT  posts_id  FOREIGN KEY (posts_id) references posts(id),
  ADD CONSTRAINT  comments_id  FOREIGN KEY (comments_id) references comments(id);
  ;
  
  
   select * from authors;
   describe authors;
   
   ALTER TABLE tags
   ADD posts_id int,
   ADD CONSTRAINT  posts_id  FOREIGN KEY (posts_id) references posts(id);
   
    select * from tags;
   
  
  drop table authors;
  
  create table authors 
(
id int auto_increment primary key,
first_name varchar(50) not null,
last_name varchar(50),
posts_id int,
comments_id int,
foreign key(posts_id) references posts(id),
foreign key(comments_id) references comments(id)
);

select * from authors;


-- adding authors data

 describe authors;
 insert into authors ;
 
 select * from posts;








-- find all posts and comments of an author


 
  
  
  
  
  
  

ALTER TABLE tbl_name DROP FOREIGN KEY fk_symbol;