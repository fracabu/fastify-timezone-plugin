
---

## fastify-timezone-plugin

A **Fastify** plugin that provides routes to list supported timezones and get the current time in a specific timezone.

### Available Routes

- **GET /timezones**: Returns a list of all supported timezones.
- **GET /current-time/:timezone**: Returns the current time in the specified timezone.  
  **Note:** When specifying a timezone in the URL, replace the `/` with `%2F` (URL encoding for `/`). For example, to get the current time in "Europe/Rome", use:  
  `/current-time/Europe%2FRome`.

## Installation

You can install the plugin via npm:

```bash
npm install fastify-timezone-plugin
```

## Usage

Here’s an example of how to register the plugin in your Fastify project:

```js
import Fastify from 'fastify';
import timezonePlugin from 'fastify-timezone-plugin';

const fastify = Fastify({
  logger: true,
});

// Register the plugin
fastify.register(timezonePlugin);

// Start the server
fastify.listen({ port: 3000 }, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});
```

### Example Routes

- **GET /timezones**  
  This route responds with a JSON array of timezones:

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
  Returns the current time for the specified timezone.  
  **Important**: Use `%2F` in place of `/` in the timezone name (e.g., `Europe%2FRome`):

  ```json
  {
    "timezone": "Europe/London",
    "currentTime": "2024-09-07T14:12:03+01:00"
  }
  ```

## Contributing

If you want to contribute or suggest new features, feel free to open a **pull request** or create an **issue** on the project’s GitHub repository.

## License

This project is licensed under the **ISC License**.

---

