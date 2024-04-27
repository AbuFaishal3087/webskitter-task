/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // BASE_URL: 'localhost:3000',
        // NODE_ENV : "development",
        DEVELOPMENT_URL : "",
        FILE_URI : "",
        API_END_POINT : "http://34.228.39.159:8000/api",
        // IMAGE_END_POINT:'http://34.228.39.159:8000',//old
        IMAGE_END_POINT:'https://hrm-dev-files.s3.amazonaws.com/info',
        PRODUCTION_API_END_POINT:"",
      },
      experimental: {
        appDir: true,
      },
      images:{
        domains:[
          '34.228.39.159'
        ]
      }
}

module.exports = nextConfig
