const { PHASE_DEVELOPMENT_SERVER } = require('next/dist/shared/lib/constants')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // MongoClient.connect('mongodb+srv://ferdy:Sealteam1@nextjs.pk4ybwx.mongodb.net/?retryWrites=true&w=majority')
    return {
    env:{
      mongodb_user : 'ferdy',
      mongodb_pwd  : 'Sealteam1',
      mongodb_cluster  : 'nextjs',
      mongodb_db  : 'blog-dev',
    },
    reactStrictMode: true,
      future: {
          webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
          // Looks like backward compatibility approach.
      },
      webpack(config) {
          config.resolve.fallback = {
              ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
              // by next.js will be dropped. Doesn't make much sense, but how it is
              fs: false, // the solution
          };
  
          return config;
      },
    }    
  }
  return {
    env:{
      mongodb_user : 'ferdy',
      mongodb_pwd  : 'Sealteam1',
      mongodb_cluster  : 'nextjs',
      mongodb_db  : 'blog',
    },
    reactStrictMode: true,
      future: {
          webpack5: true, // by default, if you customize webpack config, they switch back to version 4. 
          // Looks like backward compatibility approach.
      },
      webpack(config) {
          config.resolve.fallback = {
              ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
              // by next.js will be dropped. Doesn't make much sense, but how it is
              fs: false, // the solution
          };
  
          return config;
      },
    }  
};