module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69f8a81cfd0b2aff49c3f0b9a614f477'),
  },
});
