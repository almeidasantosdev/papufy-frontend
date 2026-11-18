# Papufy Frontend

Interface web do Papufy, um marketplace de serviços e bicos. A pessoa publica um pedido ou um perfil profissional, busca por categoria e cidade, conversa no chat e acompanha carteira, notificações e publicações.

O app é mobile-first, feito em React, TypeScript, Vite e Tailwind. A autenticação, os anúncios e o chat em tempo real dependem de uma API externa.

## O que dá para fazer

- Buscar anúncios e abrir o perfil público de um usuário
- Anunciar um pedido de serviço ou um perfil profissional (eletricista, encanador, diarista, design, aulas e outras categorias)
- Conversar por chat, ver notificações e gerenciar as próprias publicações
- Acessar carteira e perfil autenticados

## Como rodar

```bash
npm install
npm run dev
```

Em produção a build exige `VITE_API_URL` em HTTPS. O deploy usado neste repositório é a Vercel: https://papufy-frontend.vercel.app

```
VITE_API_URL=https://sua-api.onrender.com
VITE_WS_URL=wss://sua-api.onrender.com/ws
```
