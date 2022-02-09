## AUTH DATA
### SIGN IN
``` http request
POST /auth/sign-in
```
##### DATA TO SEND:
```json
{
  "userEmail": "string",
  "userPassword": "string"
}
```
##### DATA VALIDATION:
```
userEmail
    - can not be empty
userPassword
    - can not be empty      
```
##### VALID DATA EXAMPLE:
```json
{
  "userEmail": "deathStar@galaxy.com",
  "userPassword": "Qwerty123456!"
}      
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'You have been successfully signed-in'
    details:    ''
    data:
                {
                    userToken:      string
                    userId:         string
                    userName:       string
                    userPhone:      string
                    userEmail:      string
                    userProducts:   array
                }
}
ERROR        
{
    code:       400
    status:     'error'
    message:    'User was not found'
    details:    'Check your Email and Password'
    data:       null    
}
```

### SIGN UP
``` http request
POST /auth/sign-up
```
##### DATA TO SEND:
```json
{
  "userName": "string",
  "userPhone": "string",
  "userEmail": "string",
  "userPassword": "string",
  "userConfirmPassword": "string",
  "userProducts": []
}
```
##### DATA VALIDATION:
```
userName
    - can not be empty
    - at least 2 characters
    - only latin characters
    - no more than 255 characters
userPhone
    - can not be empty
    - correct universal phone format
userEmail
    - can not be empty
    - must be in correct email format
userPassword
    - can not be empty
    - at least 8 characters
    - no more than 40 characters
    - at least one uppercase character
    - at least one lowercase character
    - at least one figure character
    - at least one punctuation character  
userConfirmPassword
    - must match with userPassword value          
```
##### VALID DATA EXAMPLE:
```json
{
  "userName": "Vader",
  "userPhone": "+380631112233",
  "userEmail": "deathStar@galaxy.com",
  "userPassword": "80uhye2h7yh3092",
  "userConfirmPassword": "80uhye2h7yh3092",
  "userProducts": [ image_01.png, image_02.png, image_03.png ]
}      
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'User ${userName} has been successfully signed-up'
    details:    ''
    data:
                {
                    userId:         string
                    userName:       string
                    userPhone:      string
                    userEmail:      string
                    userProducts:   array
                }
}
ERROR        
{
    code:       400
    status:     'error'
    message:    'User already exists'
    details:    'Only one email can be used within one account'
    data:       null    
}
```

## USER DATA
### GET ONE
``` http request
GET /user/get/userId
```
##### DATA TO SEND:
```json
{
  "userId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-  
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:
                {
                    userId:         string
                    userName:       string
                    userPhone:      string
                    userEmail:      string
                    userProducts:   array
                }
}
ERROR        
{
    code:       404
    status:     'error'
    message:    'User was not found'
    details:    'Check userId'
    data:       null    
}
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null    
}
```
### GET ALL
``` http request
GET /user/get-all
```
##### DATA TO SEND:
```
-
```
##### DATA VALIDATION:
```
-       
```
##### VALID DATA EXAMPLE:
```
-  
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       user[]
}
ERROR        
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null    
}
```
### EDIT
``` http request
PUT /user/edit/userId
```
##### DATA TO SEND:
```json
{
  "userId": "string",
  "userName": "string",
  "userPhone": "string",
  "userEmail": "string",
  "userProducts": []
}
```
##### DATA VALIDATION:
```
userName
    - can not be empty
    - at least 2 characters
    - only latin characters
    - no more than 255 characters
userPhone
    - can not be empty
    - correct universal phone format
userEmail
    - can not be empty
    - must be in correct email format
```
##### VALID DATA EXAMPLE:
```json
{
  "userId": "string",
  "userName": "Mail",
  "userPhone": "+380673334455",
  "userEmail": "deathStar@galaxy.com",
  "userProducts": [ image_01.png, image_02.png, image_03.png ]
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:
                user[]
}
ERROR        
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null    
}
```
### DELETE
``` http request
DELETE /user/delete/userId
```
##### DATA TO SEND:
```json
{
  "userId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    'User ${userName} has been successfully deleted'
    details:    ''
    data:       null
}
ERROR        
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null    
}
```
## PRODUCT DATA
### GET ALL
```http request
GET /product/get-all
```
##### DATA TO SEND:
```
-
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       product[]
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### GET ONE
```http request
GET /product/get/productId
```
##### DATA TO SEND:
```json
{
    "productId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       
                {
                    productId:          string
                    categoryId:         string
                    productName:        string
                    productDescription: string
                    productPrice:       number
                    productImages:      .png[]
                }
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### ADD
```http request
POST /product/add
```
##### DATA TO SEND:
```json
{
  "categoryId": "string",
  "productId": "string",
  "productName": "string",
  "productDescription": "string",
  "productPrice": "number",
  "productImages": []
}
```
##### DATA VALIDATION:
```
categoryId
    - can not be empty
productId
    - can not be empty
productName
    - can not be empty
    - only latin characters
    - no more than 255 characters 
productDescription
    - can not be empty
productPrice
    - can not be empty
    - can not be 0
productImages
    - can not be empty
    - al least 3 files (.png)              
```
##### VALID DATA EXAMPLE:

```json
{
  "categoryId": "Phones",
  "productId": "string",
  "productName": "iPhone",
  "productDescription": "Cool device",
  "productPrice": "$ 1300",
  "productImages": [ image_01.png, image_02.png, image_03.png ]
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'Product ${productName} has been successfully added'
    details:    ''
    data:       
                {
                    productId:          string
                    categoryId:         string
                    productName:        string
                    productDescription: string
                    productPrice:       number
                    productImages:      .png[]
                }
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### EDIT
```http request
PUT /product/edit/productId
```
##### DATA TO SEND:
```json
{
  "categoryId": "string",
  "productId": "string",
  "productName": "string",
  "productDescription": "string",
  "productPrice": "number",
  "productImages": []
}
```
##### DATA VALIDATION:
```
categoryId
    - can not be empty
productId
    - can not be empty
productName
    - can not be empty
    - only latin characters
    - no more than 255 characters 
productDescription
    - can not be empty
productPrice
    - can not be empty
    - can not be 0
productImages
    - can not be empty
    - al least 3 files (.png)      
```
##### VALID DATA EXAMPLE:
```json
{
  "categoryId": "Cars",
  "productId": "string",
  "productName": "Tesla",
  "productDescription": "Cool car",
  "productPrice": "$ 25000",
  "productImages": [ images_01.png, images_02.png, images_03.png ]
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'Product ${productName} has been successfully edited'
    details:    ''
    data:       
                {
                    productId:          string
                    categoryId:         string
                    productName:        string
                    productDescription: string
                    productPrice:       number
                    productImages:      .png[]
                }
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### DELETE
```http request
DELETE /product/delete/productId
```
##### DATA TO SEND:
```json
{
  "productId": "string"
}
```
##### DATA VALIDATION:
```
-     
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    'Product ${productName} has been successfully deleted'
    details:    ''
    data:       null
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
## CATEGORY DATA
### GET ALL
```http request
GET /category/get-all
```
##### DATA TO SEND:
```
-
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       category[]
}
ERROR
{
    code:       500
    status:     'error'
    message:    ''
    details:    ''
    data:       null
}
```
### GET ONE
```http request
GET /category/get/categoryId
```
##### DATA TO SEND:

```json
{
  "categoryId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       
                {
                    categoryId:     string
                    categoryName:   string
                }
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### ADD
```http request
POST /category/add
```
##### DATA TO SEND:

```json
{
  "categoryId": "string",
  "categoryName": "string"
}
```
##### DATA VALIDATION:
```
categoryId
    - created automatically
categoryName
    - can not be empty
    - no more than 255 characters
```
##### VALID DATA EXAMPLE:

```json
{
  "categoryId": "2137yhe",
  "categoryName": "Books"
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    ''
    details:    ''
    data:       
                {
                    categoryId:     string
                    categoryName:   string
                }
}
ERROR
{
    code:       400
    status:     'error'
    message:    'Category ${categoryName} already exists'
    details:    'You can not create two categories with the same name'
    data:       null
}
```
### EDIT
```http request
PUT /category/edit/categoryId
```
##### DATA TO SEND:

```json
{
  "categoryId": "string",
  "categoryName": "string"
}
```
##### DATA VALIDATION:
```
categoryId
    - created automatically
categoryName
    - can not be empty
    - no more than 255 characters
```
##### VALID DATA EXAMPLE:

```json
{
  "categoryId": "2yhe",
  "categoryName": "Sweets"
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    ''
    details:    ''
    data:       
                {
                    categoryId:     string
                    categoryName:   string
                }
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### DELETE
```http request
DELETE /category/delete/categoryId
```
##### DATA TO SEND:

```json
{
  "categoryId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    'Category ${categoryName} has been successfully deleted'
    details:    ''
    data:       null
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
## ORDER DATA
### GET ONE
```http request
GET /order/get/userId
```
##### DATA TO SEND:

```json
{
  "userId": "string"
}
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:   
                {
                    userId:         string,
                    orderId:        string,
                    orderDate:      string,
                    orderPrice:     number,
                    products:       product[]
                }     
}
ERROR
{
    code:       404
    status:     'error'
    message:    ''
    details:    ''
    data:       null
}

{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### GET ALL
```http request
GET /order/get
```
##### DATA TO SEND:

```
-
```
##### DATA VALIDATION:
```
-
```
##### VALID DATA EXAMPLE:
```
-
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    ''
    details:    ''
    data:       order[]    
}
ERROR
{
    code:       404
    status:     'error'
    message:    'No orders found'
    details:    'Add your order'
    data:       null
}

{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### ADD
```http request
POST /order/add
```
##### DATA TO SEND:

```json
{
  "userId": "string",
  "orderId": "string",
  "orderDate": "string",
  "orderPrice": "number",
  "products": [{}, {}, {}]
}
```
##### DATA VALIDATION:
```
userId
    - can not be empty
orderId
    - will be created automatically
orderDate
    - can not be empty
    - string in local format 
productPrice
    - can not be empty
    - can not be 0
products
    - can not be empty           
```
##### VALID DATA EXAMPLE:

```json
{
  "userId": "625asd",
  "orderId": "9eygd673ue67",
  "orderPrice": "300",
  "products": [
    {}, {}, {}
  ]
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'Order has been successfully created'
    details:    ''
    data:       
                {
                    userId:         string,
                    orderId:        string,
                    orderPrice:     number,
                    products:       product[]
                }    
}
ERROR
{
    code:       404
    status:     'error'
    message:    'No orders found'
    details:    'Add your order'
    data:       null
}

{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### EDIT
```http request
PUT /order/edit/orderId
```
##### DATA TO SEND:

```json
{
  "orderId": "string",
  "orderDate": "string",
  "orderPrice": "number",
  "products": [{}, {}, {}]
}
```
##### DATA VALIDATION:
```
userId
    - can not be empty
orderId
    - will be created automatically
orderDate
    - can not be empty
    - string in local format 
productPrice
    - can not be empty
    - can not be 0
products
    - can not be empty           
```
##### VALID DATA EXAMPLE:

```json
{
  "orderId": "string",
  "orderData": "string",
  "orderPrice": "300",
  "products": [{}, {}, {}]
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       201
    status:     'success'
    message:    'Order has been successfully edited'
    details:    ''
    data:       
                {
                    userId:         string,
                    orderId:        string,
                    orderPrice:     number,
                    products:       product[]
                }    
}
ERROR
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```
### DELETE
```http request
DELETE /order/delete/orderId
```
##### DATA TO SEND:

```json
{
  "orderId": "string",
  "userId": "string"
}
```
##### DATA VALIDATION:
```
userId
    - can not be empty
orderId
    - can not be empty        
```
##### VALID DATA EXAMPLE:

```json
{
  "orderId": "string",
  "userId": "string"
}
```
##### RESPONSE:
```
SUCCESS
{
    code:       200
    status:     'success'
    message:    'Order has been successfully deleted'
    details:    ''
    data:       null   
}
ERROR
{
    code:       404
    status:     'error'
    message:    'No user with such id was found'
    details:    ''
    data:       null
}
{
    code:       500
    status:     'error'
    message:    'Server error'
    details:    'Try again later'
    data:       null
}
```