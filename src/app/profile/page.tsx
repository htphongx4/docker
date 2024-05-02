'use client';

import { useFetchProfileQuery } from '@/api/auth';

export default function Profile() {
  const { data } = useFetchProfileQuery({ token: 'auth_token' });

  return (
    <div>
      <h1>Your Email: {data?.email}</h1>
    </div>
  );
}
