module.exports = {
  schema: '/schema.graphql',
  extensions: {
    endpoints: {
      default: {
        url: 'https://api.github.com/graphql',
        headers: { Authorization: `Bearer ${process.env.API_KEY}` },
      },
    },
  },
  introspect: true,
}
