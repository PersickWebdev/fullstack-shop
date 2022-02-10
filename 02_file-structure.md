## SERVER
##### DEPENDENCIES:
```
- express
- @types/express
- sequelize
- pg
- jsonwebtoken
- bcryptjs
- nodemon
- cors
- ts-node
- typescript
- sequelize-typescript
- reflect-metadata
- dotenv
```
##### FILE STRUCTURE:
```
- index.ts
+ client/
+ dist/
+ src/
    + config/
        - database.ts
        - settings.ts
    + models/
        - UserModel.ts
        - CategoryModel.ts
        - ProductModel.ts
        - OrderModel.ts
    + routes/
        - authRoutes.ts
        - userRoutes.ts
        - categoryModel.ts
        - productRoutes.ts
        - orderModel.ts
    + utils/    
- package.json
- package-lock.json
- tsconfig.json
- .gitignore
```

## CLIENT
##### DEPENDENCIES:
```
- react-router-dom
- @types/react-router-dom
- axios
- @types/axios
- redux
- react-redux
- redux-devtools-extension
- redux-thunk
```