import bcrypt from 'bcrypt';
import { z } from 'zod';
import { publicProcedure, router } from '../trpc';
import { PrismaClient } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { generateToken } from '@/lib/jwt';

const prisma = new PrismaClient();

export const userRouter = router({
  register: publicProcedure
    .input(
      z.object({
        username: z.string(),
        name: z.string(),
        password: z.string(),
        profile: z.string(),
      })
    )
    .query(async ({ input }) => {
      try {
        input.password = await bcrypt.hash(input.password, 10);

        const user = await prisma.user.create({
          data: {
            username: input.username,
            name: input.name,
            password: input.password,
            profile: input.profile,
          },
          select: {
            id: true,
            name: true,
            username: true,
            profile: true,
            bio: true,
          },
        });

        // return data with jwt token
        return {
          user,
          token: generateToken(user),
        };
      } catch (err: any) {
        if (err?.code === 'P2002') {
          throw new TRPCError({
            code: 'PRECONDITION_FAILED',
            message: `${input.username} already exist`,
            cause: err,
          });
        } else {
          throw new TRPCError({
            code: 'BAD_REQUEST',
            message: 'failed to register user',
            cause: err,
          });
        }
      }
    }),
});
