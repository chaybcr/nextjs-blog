/** @type {import('next').NextConfig} */

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb_username:'chaybcr',
    mongodb_password:'Chaitu1',
    mongodb_clustername:'cluster0',
    mongodb_database:'nextJsBlog'
  }
}

module.exports = (phase) =>{

  if(phase === PHASE_DEVELOPMENT_SERVER){
    return nextConfig
  }

  return nextConfig;
}
