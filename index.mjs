import moment from 'moment-timezone';

export default function (fastify, opts, done) {
  // Rotta di test per assicurarti che il plugin funzioni
  fastify.get('/test', async (request, reply) => {
    return { message: 'Test route works!' };
  });

  // Rotta per ottenere tutti i fusi orari
  fastify.get('/timezones', async (request, reply) => {
    fastify.log.info('Timezones route accessed');
    return { timezones: moment.tz.names() };
  });

  fastify.get('/current-time/:timezone', async (request, reply) => {
    const { timezone } = request.params;
    fastify.log.info(`Requested timezone: ${timezone}`);
  
    if (!moment.tz.zone(timezone)) {
      reply.code(400).send({ error: 'Invalid timezone' });
      return;
    }
  
    const currentTime = moment().tz(timezone).format();
    return { timezone, currentTime };
  });
  

  done();
}

