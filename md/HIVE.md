# Hadoop核心组建

HDFS：块级别的分布式文件存储系统

MapReduce：分布式计算框架（大任务分成小任务）

Yarn：作业调度与资源管理器

# 分区表

将大量的数据按照不同的条件分成不同的文件夹，只查询一个小文件夹

用分区字段

```sql
where some_condition
```

# 常见函数

## 基础操作

查看HIVE中的函数

```bash
show functions;
```

查看HIVE中函数描述

```bash
desc function sum;
```

## 时间函数

## 条件函数

if

case when

# 窗口函数

## 累计聚合函数

sum(...A...) over(partition by ...B... order by ...C... rows between ...D1... and ...D2...)

avg(...A...) over(partition by ...B... order by ...C... rows between ...D1... and ...D2...)

- A是需要被加工的字段
- B是分组的字段
- C是排序的字段
- D是计算的行数范围
  - rows between unboudned preceding and current row：包括本行和之前所有的行【默认】
  - rows between current bow and unbounded following ：包括本行和之后的所有行
  - rows between 3 preceding and current row ：包括本行以内和前三行
  - rows between 3 preceding and 1 following：从前三行到下一行（5行）

```sql
-- 对2018年公司的支付总额按月度累计计算
select a.month, a.total_amount, 
	sum(a.total_amount) over(order by a.month)	#月度累计求和
from
(select month(dt) month, sum(pay_amount) total_amount		#dt是一个分区字段，用month()函数取出月份
from user_trade
where year(dt) = 2018	#用year()函数取出年份
group by month(dt))a;

-- 对2017年和2018年公司的支付总额按照月度累计进行分析，按年度进行汇总
select a.year, a.month, a.total_amount,
	sum(a.total_amount) over(partition by a.year order by a.month)	#再累计
from
(select year(dt) year,	#先拿出每年每月的支付总额
				month(dt) month,
 				sum(pay_amount) total_amount
 from user_trade
 where year(dt) in (2017, 2018)
 group by year(dt), month(dt) month)a;
 
 -- 对2018年每个月的近三个月进行移动地平均支付金额
 select a.month, a.total_amount,
 	avg(a.total_amount) over(order by a.month rows between 2 preceding and current row)	#当前行往前推两行
 from 
 (select month(dt) month, sum(pay_amount) total_amount
 from user_trade
 where year(dt) = 2018
 group by month(dt))a;
```

## 分区窗口函数

## 切片窗口函数函数

ntile(n) over(partition by ...A... order by ...B...)

用于将分组数据按照顺序切成n片，返回当前切片值

- n：切分的片数
- A：分组的字段名称
- B：排序的字段名称

```sql
-- 将2019年1月的支付用户，按照支付金额分成5组
select user_name, sum(pay_amount) total_amount,
	ntile(5) over (order by sum(pay_amount) desc)	#分成5组
from user_trade
where substr(dt, 1, 7) = '2019-01'	#取出dt中的第一个至第七个字符，变成yyyy-mm
group by user_name;

-- 选出2019年退款金额排名前10%的用户
select a.user_name, a.total_refund, a.lv
from 
(select user_name, sum(refund_amount) total_refund,
	ntile(10) over(order by sum(refund_amount) desc) lv
from user_refund
where year(dt) = 2019
group by user_name)a
where a.1v = 1;
```

## 偏移分析窗口函数

