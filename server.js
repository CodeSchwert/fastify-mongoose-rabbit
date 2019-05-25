require('make-promises-safe')
const fastify = require('fastify', {
  logging: true
})()

fastify.get('/', async (request, reply) => {
  console.log('GET /', request);
  return { hello: 'world' }
})

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
