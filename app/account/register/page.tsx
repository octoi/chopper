'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { trpc } from '@/lib/trpc';

export default function RegisterPage() {
  const registerMutation = trpc.user.register.useMutation();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();

    registerMutation.mutate({
      username,
      name,
      password,
      profile: encodeURI(
        `https://avatars.dicebear.com/api/identicon/${username}.svg`
      ),
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className='text-3xl font-semibold'>Register</h1>
      <p className='mt-2'>Create an account on Chopper</p>
      <Input
        type='text'
        placeholder='johndoe'
        className='mt-5 w-full'
        required
        value={username}
        setValue={setUsername}
      />
      <Input
        type='text'
        placeholder='John Doe'
        className='mt-5 w-full'
        required
        value={name}
        setValue={setName}
      />
      <Input
        type='password'
        placeholder='password'
        className='mt-3 w-full'
        required
        value={password}
        setValue={setPassword}
      />
      <Button className='mt-5' type='submit'>
        Submit
      </Button>
    </form>
  );
}
