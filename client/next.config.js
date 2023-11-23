/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['app', 'components', 'utils', 'packages', 'hooks', 'hocs', 'redux'],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `
      @import 'styles/breakpoints.scss';
      @import 'styles/mixins.scss';
    `,
  },
}

module.exports = nextConfig
