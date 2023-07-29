'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1 className='text-3xl font-semibold'>Register</h1>
      <p className='mt-2'>Create an account on Chopper</p>
      <Input
        type='email'
        placeholder='john@email.com'
        className='mt-5 w-full'
        required
        value={email}
        setValue={setEmail}
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
