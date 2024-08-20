import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter';

import prisma from '~/lib/prisma';

const runtimeConfig = useRuntimeConfig()

export default NuxtAuthHandler({
  adapter: PrismaAdapter(prisma),
  secret: runtimeConfig.authSecret,
  providers: [
    // @ts-expect-error Use .default here for it to work during SSR.
    GithubProvider.default({
      clientId: runtimeConfig.gitHubId,
      clientSecret: runtimeConfig.gitHubSecret
    }),
    //@ts-ignore
    EmailProvider.default({
      server: {
        host: runtimeConfig.emailServerHost,
        port: runtimeConfig.emailServerPort,
        auth: {
          user: runtimeConfig.emailServerUser,
          pass: runtimeConfig.emailServerPassword,
        },
      },
      from: runtimeConfig.emailFrom,
    })
  ],

  pages: {
    signIn: '/',
    verifyRequest: '/email-envoye'
  }
})
