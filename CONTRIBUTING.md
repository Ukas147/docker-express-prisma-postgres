## Contribuição

Regras objetivas para este repositório.

### Commits (Conventional Commits em português)
- Use: `tipo(escopo): resumo curto` (imperativo, ≤ 72 chars)
- Tipos comuns: `feat`, `fix`, `refactor`, `docs`, `chore`, `test`, `build`.
- Escopos exemplos: `api`, `repo`, `db`, `readme`.
- Commits atômicos por contexto (um assunto por commit).
- Corpo (opcional) com bullets: mudanças, motivo, impacto/breaking.

Exemplo:
```
feat(api): separar rotas PATCH de tarefas em endpoints distintos

- Evita conflito em /:id
- Novas rotas: /tasks/:id/title e /tasks/:id/description
```

### Branches e PRs
- Crie uma branch por tarefa: `feature/<slug>` ou `fix/<slug>`.
- Abra PR com descrição objetiva (o quê/por quê/como validar).
- Não faça squash local; preserve commits atômicos.

### Estilo e fluxo
- Mensagens, descrições e docs: em português, diretas e sem rodeios.
- Após mudanças de schema Prisma: inclua migrações (`prisma migrate`).
- Configure variáveis `.env` quando necessário e documente no README.


