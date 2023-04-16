/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    PGHOST:'ep-super-truth-325031.us-east-2.aws.neon.tech',
    PGDATABASE:'neondb',
    PGUSER:'ahmedraza61000',
    PGPASSWORD:'3NVzQjRb6oJT',
  }
}

module.exports = nextConfig
