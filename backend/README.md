# Backend 

## Rodando o projeto 

1. Instale dependências 

`npm install`

2. Compile o TypeScript

`npx tsc`

3. Inicie o projeto

`npm run dev`

## Rotas do projeto

- GET [http://localhost:4000/](http://localhost:4000/)

`Response`
```Json
[
  {
    "id": 1,
    "name": "Leite",
    "quantity": 2,
    "bought": false,
    "createdAt": "2024-08-07T12:34:56.789Z",
    "updatedAt": "2024-08-07T12:34:56.789Z"
  },
  {
    "id": 2,
    "name": "Pão",
    "quantity": 1,
    "bought": true,
    "createdAt": "2024-08-07T12:35:56.789Z",
    "updatedAt": "2024-08-07T12:35:56.789Z"
  }
]

```

- POST [http://localhost:4000/](http://localhost:4000/)
  
`Request`
```Json
{
  "name": "Nome do Item",
  "quantity": 2
}
```
`Response`
```Json
{
    "id": 3,
    "name": "Nome do Item",
    "quantity": 2,
    "bought": true,
    "createdAt": "2024-08-07T00:00:00.000Z",
    "updatedAt": "2024-08-07T00:00:00.000Z"
}
```

- PUT [http://localhost:4000/:id](http://localhost:4000/:id)
  
`Request`
```Json
{
  "name": "Nome do Item",
  "quantity": 2,
  "bought": true
}

```
`Response`
```Json
{
    "id": 3,
    "name": "Nome do Item",
    "quantity": 2,
    "bought": true,
    "createdAt": "2024-08-07T00:00:00.000Z",
    "updatedAt": "2024-08-07T00:00:00.000Z"
}
```

- DELETE [http://localhost:4000/:id](http://localhost:4000/:id)
  
`Response`
```Json
{
    "message": "Item successfully deleted."
}
```

