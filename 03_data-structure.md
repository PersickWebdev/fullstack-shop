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
GET /user/get
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
  "userName": "string",
  "userPhone": "string",
  "userEmail": "string",
  "userProducts": []
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