## USER MODEL
```json
{
  "userId": "string",
  "userName": "string",
  "userPhone": "string",
  "userEmail": "string",
  "userPassword": "string",
  "userProducts": []
}
```
## CATEGORY MODEL
```json
{
  "categoryId": "string",
  "categoryName": "string"
}
```
## PRODUCT MODEL

```json
{
  "categoryId": "string",
  "productId": "string",
  "productName": "string",
  "productDescription": "string",
  "productPrice": "number",
  "productRating": "number", 
  "productImages": []
}
```
## ORDER MODEL

```json
{
  "orderId": "string",
  "orderDate": "string",
  "orderPrice": "number",
  "userId": "string",
  "userName": "string",
  "userPhone": "string",
  "products": [{}, {}, {}]
}
```