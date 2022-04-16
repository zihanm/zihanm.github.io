# UniCloud云开发使用笔记

## 表相关

### 表的访问和渲染

```js
var _self = this
const db = uniCloud.database().collection('表名称')
let data = db.get()
data.then(function(res){
  for(let i in res.result.data){
    if(res.result.data[i].mem_code === uni.getStorageSync('mem_code')){
      _self.familyMemberAdded.push(res.result.data[i])
    }
  }
})
```

### 表的增添

```js
var tempList = {
  relationship: this.editRelationship,
  phoneNum: this.editPhoneNum,
  gender: this.editGender,
  mem_code: uni.getStorageSync('mem_code')
}
const db = uniCloud.database().collection('family')
db.add(tempList).then(e=>{
  console.log(e)
})
```

### 表的修改

```js
const db = uniCloud.database().collection('family')
let item = this.familyMemberAdded[this.editingIndex]
let id = this.familyMemberAdded[this.editingIndex]._id
delete item._id
db.doc(id).update(item).then(e=>{
  console.log(e)
})
```

### 表的删除

```js
const db = uniCloud.database().collection('family')
let id = this.familyMemberAdded[this.editingIndex]._id
db.doc(id).remove({}).then(res=>{console.log(res)}).catch(msg=>{console.log(msg)});
```



来自uniCloud文档

https://uniapp.dcloud.net.cn/uniCloud/hellodb

| 类型     | 接口    | 说明                                                         |
| -------- | ------- | ------------------------------------------------------------ |
| 写       | add     | 新增记录（触发请求）                                         |
| 计数     | count   | 获取符合条件的记录条数                                       |
| 读       | get     | 获取数据表中的记录，如果有使用 where 语句定义查询条件，则会返回匹配结果集 (触发请求) |
| 引用     | doc     | 获取对该数据表中指定 id 的记录的引用                         |
| 查询条件 | where   | 通过指定条件筛选出匹配的记录，可搭配查询指令（eq, gt, in, ...）使用 |
|          | skip    | 跳过指定数量的文档，常用于分页，传入 offset。clientDB组件有封装好的更易用的分页，[另见](https://uniapp.dcloud.net.cn/uniCloud/uni-clientdb-component) |
|          | orderBy | 排序方式                                                     |
|          | limit   | 返回的结果集(文档数量)的限制，有默认值和上限值               |
|          | field   | 指定需要返回的字段                                           |
