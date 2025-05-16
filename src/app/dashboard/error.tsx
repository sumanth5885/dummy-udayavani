"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function Error({ error }: { error: Error & { digest?: string } }) {
  const router = useRouter();

  useEffect(() => {
    toast.error(error.message || 'Something went wrong');
 
  }, [error]);

  return null; 
}
