# 数据库操作

## 创建表

字段名称+类型

```sql
CREATE TABLE user1(
  id int PRIMARY KEY,	#主键
	name VARCHAR(4) not null, #有需求的创建，不能为空
  age int COMMENT '年龄' DEFAULT 18,	#可以注释一下；或者设置一个默认值
  birthday datetime);
```

## 查看所有表

```sql
show tables;
```

## 查看表结构

```sql
desc user1;
```

## 删除表

慎重操作，但一般没有权限

```sql
drop table user1;
```

## 修改表

```sql
alter table user1 rename user2;	#修改名称

alter table user2 add mobile VARCHAR(11);	#增加列(默认放在最后)
alter table user2 add address VARCHAR FIRST;	#增加列（放在第一个）
-- 增加列，放在指定位置
alter table tset_table add age int(4) default 20 after id;	#到某列后

alter table user2 drop mobile;	#删除列
```

其它参考：

1. https://blog.csdn.net/tuzhg/article/details/78522486



# 数据表操作

数据库e.g. Student(Sid, Sname, Sage, Ssex)

```sql
create table Student(
	Sid varchar(10),
	Sname varchar(10),
  Sage datetime,
	Ssex varchar(10));
```

## 插入数据

```sql
-- 一条一条插入
INSERT into table_name VALUES('01', '赵磊','1990/01/01', '男')
INSERT into table_name VALUES('02', '李四','1990/01/01', '男')
INSERT into table_name VALUES('03', '王武','1990/01/01', '男')

-- 一个INSERT，同时插入多条
INSERT into table_name VALUES
('01', '赵磊','1990/01/01', '男'),
('02', '李四','1990/01/01', '男'),
('03', '王武','1990/01/01', '男');
```

## 查询

常用的SQL语句/关键字

```sql
select *	#选什么字段
FROM some_table_name	#从哪里选
WHERE some_condition	#什么条件
GROUP BY some_field	#分组；或者用了聚合函数的时候【e.g. /多表查询/子查询/where子查询/返回多行多列子查询】
having some_field/some_condition	#GROUP BY之后的条件，不能再用WHERE
ORDER BY some_field	#排序
LIMIT	#限制显示的条数
```

### 查询单个字段

```sql
select name 
from employee;
```

### 查询多个字段

```sql
select name, no
from employee;
```

### 查询所有字段

```sql
select *
from employee;
```

### 查询不重复字段

```sql
select distinct job	#distinct关键字
from employee;
```

### 包含数字运算的查询

```sql
select sal*12 as total_sal	#可以写一个别名
from employee;
```

### 条件记录查询

比较运算：	> < >= <= <>

```sql
select sal
from employee
where job = 'clert';	#只看文员的工资
```

逻辑运算：	not and or

```sql
select *
from employee
where job = 'clerk' and sal > 800;	#文员，并且工资800
```

```sql
select *
from employee
where sal >= 1000 and sal <=2000;

-- 或者

select *
from employee
where sal BETWEEN 1000 and 2000;	#between和and是左闭右闭
```

```sql
select *
from employee
where comm is not null;
```

模糊匹配

```sql
-- 查询员工姓名以A开头的员工信息
select *
from employee
where name like 'A%';	#like关键字，%表示后面有多个字符
```

```sql
-- 查询员工姓名的第二个字母是m的员工信息
select *
from employee
where name like '_m%';	#_表示一个字符
```

### 排序

```sql
-- 查询员工的姓名和工资，并且按照工资降序排序
select name, sal
from employee
order by sal desc;	#默认升序;desc关键字在这里表示降序
```

### 限制记录查询

```sql
-- 查询奖金为空的员工信息并且显示两条
select *
from employee
where comm is null
limit 2;
```

### 统计函数

sum()

avg()

max()

min()

```sql
-- 查询领取奖金最多的数据
select max(comm)
from employee;
```

count()：计数函数

```sql
-- 放入列名的话，不计入null的
select count(name) as total_num
from employee;

-- 放入*的话，计算整个表的行数
select count(*) as total_num
from employee;
```

### 分组查询

```sql
-- 每一个工种发了多少钱
select sum(sal) as total_sal
from employee
GROUP BY job;

-- 每一个工种发了多少钱，并且找出总工资大于5000元的团队
select sum(sal) as total_sal
from employee
GROUP BY job
having sum(sal) > 5000;	#是在GROUP BY的基础上
```

### 时间和日期函数

```sql
select now();	#返回当前的日期和时间
select curdate();	#只返回当前的日期
```

### if 语句

if (condition, true, false)

```sql
-- 根据工资水平，增加一列；为用户画像打标签
select *, if(sal > 2000, '高收入', '低收入') as sal_level
from employee;
```

### case when

case 

​	when 'condition_1' then 'result_1'

​	when 'condition_2' then 'result_2'

​	...

​	when 'condition_n' then 'result_n'

​	else 'default'

end as 'new_field'

```sql
select *,
case
when sal <1000 then '低收入'
when sal >=1000 and sal<2000 then '中等收入'
when sal >=2000 and sal<3000 then '较高收入'
else '高收入'
end as sal_level	#一定有end，可以不用as
from employee;
```

### sql的执行顺序

```sql
-- e.g.
select job, sum(sal) as total_sal	#5，找什么
from employee											#1，知道在哪里取，找到表
where hiredate > '1985-01-01'			#2，大概率不会取全表，需要一个条件，做过滤
group by job											#3，分组
having total_sal > 1500						#4，对分组出来的小表做进一层过滤
order by total_sal desc						#6，对结果排序
limit 2;													#7，排出来的结果里，要几条；限制输出
```

上述代码的顺序为：找表==》要什么==〉输出结果

from - where - group by - having - select - order by - limit

### 多表查询

#### 纵向连接

关键字：UNION 和 UNION all

注意：上下两个表的字段必须一致

```sql
-- union all, 不管重不重复，上下放在一起
select id, name, age from student1
union all
select id, name, age from teacher1;

-- union, 剔除重复值
select id, name, age from student1
union
select id, name, age from teacher1;
```

#### 横向连接

##### 内连接

两个表的交集，生成第三个表

```sql
-- 显示有成绩的学生id及学生姓名
select sc.*, student.Sname
from student
inner join 	#inner 可以省略，直接写join
sc
on student.SId = sc.SId	#匹配交集
```

##### 外连接

###### 左外连接

以左表为基础，匹配右表。匹配上的，展示；匹配不上的，不展示。左表一定都展示

```sql
-- 在成绩表中匹配学生姓名信息
select s.*, t.Sname
from sc s	#from的时候，加一个空格，可以写别名
left join 	#sc这张表会全部出来
student t
on s.Sid = t.Sid
```

###### 右外连接

以右表为基础，匹配左表。匹配上的，展示；匹配不上的，不展示。右表一定都展示

#### 子查询

当一个查询是另一个查询的条件，内层的查询是子查询/内查询；外层的查询是父查询/主查询

关键字：in any all 或者 exists

##### where子查询

###### 返回单行单列子查询

子查询返回结果是一个值的时候

```sql
-- 查询雇员表中工资比smith高的全部雇员信息
-- 分开写
select sal 
from employee 
where name = 'smith'	#先知道smith的工资，比如返回800

select *
from employee
where sal > 800;

-- 放在一起写
select *
from employee
where sal > (select sal from employee where name = 'smith');
```

###### 返回单行多列子查询

子查询返回结果是多个值

```sql
-- 查询雇员表中工资和职位与smith一样的雇员信息
-- 分开写
select sal,job
from employee 
where name = 'smith'	#先知道smith的工资，比如返回800,clert

select *
from employee
where job = 'clert' and sal = 800;

-- 放在一起写
select *
from employee
where (sal, job) = (select sal, job from employee where name = 'smith');
```

###### 返回多行单列子查询

一般用in any all 等关键字

关键字in

```sql
-- 查询雇员表中的记录，这些数据的部门编号必须在部门表中出现
-- 分开写
select deptno
from dept;	#比如返回10， 20， 30， 40 

select *
from employee
where deptno = 10 or deptno = 20 or deptno = 30 or deptno = 40;

-- 放在一起写
select *
from employee
where deptno in (select deptno from dept);
```

关键字any

```sql
-- 查询雇员中的姓名和工资，这些雇员的工资不低于职位为manager的工资
-- 分开写
select sal
from employee 
where job = 'manager'；	#比如返回 2450, 2850, 2975

select name, sal
from employee
where sal >= 2450;

-- 放在一起写
select name, sal
from employee
where sal >= any(select sal	from employee where job = 'manager');	#大于他们中的一个就行
```

关键字all

```sql
-- 查询雇员中的姓名和工资，这些雇员的工资不低于所有的职位为manager的工资
select name, sal
from employee
where sal >= all(select sal	from employee where job = 'manager');	#大于他们所有的
```

##### from子查询

###### 返回多行多列子查询

返回的是小表

```sql
-- 查询雇员表中的部门号、部门名称、部门地址、雇员人数和平均工资
-- 需要的字段不是在一个表中，需要关联表：左连接、右链接
select e.deptno, d.name, d.loc, count(e.no) as em_no, avg(e.sal) as avg_sal
from employee e
left join
dept d
on e.deptno = d.deptno
group by e.deptno, d.name, d.loc;	#用到了聚合函数，需要分组其它非聚合字段

-- 用子查询来写，把大的表变成小的表，再做关联；提高效率
select d.name, e.deptno, d.loc, e.em_no, e.avg_sal
from dept d
inner join
(select deptno, count(no) as em_no, avg(sal) as avg_sal
from employee
group by deptno) e
on d.deptno = e.deptno;
```

### MySQL排序问题

#### 简单无分组排序

关键字 order by

```sql
-- 查询雇员表中的姓名和工资，并按照工资降序排序
select name, sal
from employee
order by sal desc;
```

窗口函数

直接排序：row_number()

```sql
-- 查询雇员表中的姓名和工资，并按照工资降序排序，并生成一列序号
select name, sal, row_number() over(order by sal desc) as sal_row
from employee;
```

相同排名不占位：dense_rank()

```sql
-- 查询雇员表中的姓名和工资，并按照工资降序排序，并生成一列序号
select name, sal, dense_rank() over(order by sal desc) as sal_row
from employee;
```

相同排名占位：rank()

```sql
-- 查询雇员表中的姓名和工资，并按照工资降序排序，并生成一列序号
select name, sal, rank() over(order by sal desc) as sal_row
from employee;
```

#### 分组排序

关键字：partition by

```sql
-- 将雇员表中的数据按照部门编号分组，然后同一小组内部的员工按照工资排序
-- 直接排序
select *, row_number() over(partition by deptno order by sal desc) as sal_row
from employee;
```