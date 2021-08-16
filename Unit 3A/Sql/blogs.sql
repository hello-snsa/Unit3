show databases ;
create database blog;
use blog;
select database();
show tables;
describe posts;
select * from posts;

-- Creating Tables
create table posts
(id int auto_increment primary key,
title varchar(50),
content varchar(500),
times timestamp default now()
);

select * from posts;
describe posts;


create table author
( id int auto_increment primary key,
first_name varchar(20) not null,
last_name varchar(20),
post_id int,
foreign key (post_id) references posts(id)
ON DELETE CASCADE
);

select * from author;
describe author;

create table comments
( id int auto_increment primary key,
comments varchar (500) not null,
post_id int not null,
foreign key (post_id) references posts(id)
 ON DELETE CASCADE
);

select * from comments;


create table tags
(id int auto_increment primary key,
tag int not null
);



select * from tags;
describe tags;

alter table posts
add author_id int ,
add foreign key (author_id)
references author(id) 
ON DELETE CASCADE,
add tag_id int ,
add foreign key(tag_id) 
references tags(id)
ON DELETE set null;

select * from posts;

-- Inserting data

show tables;


insert into author
(first_name,last_name)
values
("Ali","Snsa"),
("MD","Ali"),
("MD","Snsa"),
("Ravi","Kumar"),
("kajal","Kumari");

select * from author;

insert into tags
(tag)
values
("Greetings"),
("morning wish"),
("Good by"),
("take care"),
("angry");

select * from tags;

insert into posts
(title,content,author_id,tag_id)
values
("hello","hello there this is  my first post",1,2),
-- where author_id=1 && tag_id= 2,
("hey there ","Good Morning!!! how are you guys ",2,1),
("be healthy soon","Dear friend Get well soon",3,4),
("I hate you","I hate the people who disturb me",3,5),
("Hello Again","Hey there I am back !!!",1,1),
("checking it","I will delete this post",4,5);

select * from posts;


insert into comments
(comments,post_id)
values
("hey Ali! welcome to this app.",1),
("very Good Morning",2),("Have a greeate day ahead",2),
("I also wish her well",3),
("Haa haa ! you are right",4),("why so0 hate",4),("I hate you too",4),
("Welcome back",5),
("then delete It",6);

select * from comments;

# using join

select * from posts;
describe posts;

select * from author;

select author.id as authorID,author.first_name,author.last_name , posts.*
from  posts
right Join author
on author.id=posts.author_id ;


# Q1: we can find all posts and comments of an author

select * from comments;

select author.id as authorID,author.first_name,author.last_name , posts.title, posts.content, posts.times as date, comments.comments
from  posts
 Join author
on author.id=posts.author_id 
 join comments
on comments.post_id=posts.id
;


# Q2: a post can have multiple comments.
 
select *  from posts;
select * from comments;

select posts.id as 'Post Id' ,posts.title,posts.content,comments.comments
from posts
 Join comments
on comments.post_id= posts.id;


# Q3: A post should consists of 1 or more tags.

select * from tags;
select * from posts;

select posts.id as 'Post Id' ,posts.title,posts.content,tags.tag AS Tag
from posts
 join tags
on posts.tag_id = tags.id;

# Q4:  If an author is deleted all its posts and comments should be deleted.

select * from author;
select * from comments;
select * from posts;
describe posts;
select * from tags;
describe  tags;

delete from author
where id=1;

# Q5: If a tag is deleted then that tag should be removed from the post and that post will not get deleted but will no longer be linked to that tag.

select * from tags;

delete from tags
where id=5;

-- check from below code
select posts.id as 'Post Id' ,posts.title,posts.content,tags.tag AS Tag
from posts
 join tags
on posts.tag_id = tags.id;


# update

select * from tags;

insert into tags
(tag)
values
("Angry");

select * from tags;

UPDATE tags
SET id=5
WHERE id=6;

select * from tags;

insert into tags
(tag)
values
("Restless");

select * from tags;




