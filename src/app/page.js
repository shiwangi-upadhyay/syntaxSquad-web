import { redirect } from 'next/navigation';

export default function Home() {
  // Automatically redirect users from the root '/' to '/signup'
  redirect('/signup');
}