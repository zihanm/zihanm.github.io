# SWIFT cheat sheet

define a function

```swift
func turnRight(){
  
}
```

for loops

```swift
for i in 1...4{
  
}
```

if statement

```swift
if CONDITION {
	
}else if CONDITION2{

}else{
  
}
```

logical operator

`&&`	`||`  `!`

while loops

```swift
while CONDITION{
	
}
```



Define a varible with `var`; define a constant with `let`

type 有 properties 和 methods



## Trying out Xcode ...

- You must import SwiftUI because it defines the `Color` structure used for the `favoriteColor` property.

```swift
import SwiftUI

struct Person {
   var name: String
   var age: Int
   var favoriteColor: Color
}
```



像v-for一样渲染列表

- SwiftUI `ForEach` view structure to dynamically generate rows from an array
  - `ForEach` 需要能够identify individual item
