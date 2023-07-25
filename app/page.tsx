'use client';

import { trpc } from '@/lib/trpc';

export default function HomePage() {
  const result = trpc.user.hello.useQuery();

  return <div></div>;
}
