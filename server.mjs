import Fastify from 'fastify';
import timezonePlugin from './index.mjs';

const fastify = Fastify({
  logger: true
});

// Registra il plugin per i fusi orari
fastify.register(timezonePlugin);

// Rotta di test
fastify.get('/', async (request, reply) => {
  return { message: 'Server is running' };
});

// Avvia il server
const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    fastify.log.info('Server running at 3000');
    fastify.log.info(fastify.printRoutes());
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
