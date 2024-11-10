
# 🌐 fastify-timezone-plugin

**fastify-timezone-plugin** è un plugin per [Fastify](https://www.fastify.io/) che fornisce delle rotte per elencare i fusi orari supportati e ottenere l'ora corrente in uno specifico fuso orario.

## 📋 Rotte Disponibili

- **GET /timezones**: Restituisce una lista di tutti i fusi orari supportati.
- **GET /current-time/:timezone**: Restituisce l'ora corrente nel fuso orario specificato.  
  **Nota**: Quando specifichi un fuso orario nell'URL, sostituisci il carattere `/` con `%2F` (codifica URL per `/`). Ad esempio, per ottenere l'ora corrente in "Europe/Rome", usa:  
  `/current-time/Europe%2FRome`.

## 🚀 Installazione

Per installare il plugin, utilizza npm:

```bash
npm install fastify-timezone-plugin
```

## 🛠️ Utilizzo

Ecco un esempio di come registrare il plugin nel tuo progetto Fastify:

```javascript
import Fastify from 'fastify';
import timezonePlugin from 'fastify-timezone-plugin';

const fastify = Fastify({
  logger: true,
});

// Registra il plugin
fastify.register(timezonePlugin);

// Avvia il server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server in ascolto su ${address}`);
});
```

### 🌐 Esempi di Rotte

- **GET /timezones**  
  Questa rotta risponde con un array JSON di fusi orari supportati:

  ```json
  {
    "timezones": [
      "Europe/London",
      "America/New_York",
      "Asia/Tokyo",
      ...
    ]
  }
  ```

- **GET /current-time/:timezone**  
  Restituisce l'ora corrente per il fuso orario specificato.  
  **Importante**: Usa `%2F` al posto di `/` nel nome del fuso orario (ad es., `Europe%2FRome`):

  ```json
  {
    "timezone": "Europe/London",
    "currentTime": "2024-09-07T14:12:03+01:00"
  }
  ```

## 🤝 Contributi

Se desideri contribuire o suggerire nuove funzionalità, sentiti libero di aprire una **pull request** o creare una **issue** sul repository GitHub del progetto.

## 📄 Licenza

Questo progetto è distribuito sotto la licenza **ISC**.
```

