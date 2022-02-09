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
  "productImages": []
}
```
## ORDER MODEL

```json
{
  "orderId": "string",
  "orderDate": "string",
  "orderPrice": "number",
  "categoryId": "string",
  "categoryName": "string",
  "productId": "string",
  "productName": "string",
  "productPrice": "string"
}
```