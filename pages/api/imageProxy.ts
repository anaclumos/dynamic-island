import { withImageProxy } from '@blazity/next-image-proxy'

export default withImageProxy({ whitelistedPatterns: [/^https?:\/\/(.*).mzstatic.com/] })
