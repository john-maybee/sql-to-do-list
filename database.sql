-- first query when creating the task_table
CREATE TABLE "task_table" (
	"id" serial primary key,
	"task" varchar(80) not null,
	"status" varchar(40) not null
);
