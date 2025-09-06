npm i

docker compose up -d

npm run dev

## Configuração do ambiente

Crie um arquivo `.env` na raiz deste projeto com a URL do banco (compatível com o `docker-compose.yml`):

```
DATABASE_URL="postgresql://ukas:12345678@localhost:5432/ukas_db?schema=public"
```

Depois de subir o Postgres, sincronize o schema do Prisma:

```
npx prisma migrate dev
```

## Endpoints

- `GET /users` – lista usuários ativos (exclui soft-deleted)
- `POST /users` – cria usuário
- `PATCH /users/:email` – atualiza email
- `PATCH /users/:email/delete` – soft delete

- `GET /tasks` – lista tarefas ativas (exclui soft-deleted)
- `POST /tasks` – cria tarefa
- `PATCH /tasks/:id/title` – atualiza título
- `PATCH /tasks/:id/description` – atualiza descrição
- `PATCH /tasks/:id/completed` – atualiza status de conclusão
- `PATCH /tasks/:id/delete` – soft delete
