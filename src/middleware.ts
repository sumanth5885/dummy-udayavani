import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const protectedPaths = ['/dashboard', '/profile', '/admin', '/' , '/client'];
const publicPaths = ['/login'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('authToken')?.value;

  // const isProtected = protectedPaths.some((path) =>
  //   pathname === path || pathname.startsWith(path + '/')
  // );

  // const isPublic = publicPaths.some((path) =>
  //   pathname === path || pathname.startsWith(path + '/')
  // );

  
  // if (isPublic && token) {
  //   console.log("Already authenticated, redirecting to home...");
  //   return NextResponse.redirect(new URL('/', request.url));
  // }

  
  // if (isProtected && !token) {
  //   console.log("Unauthenticated access to protected route, redirecting to login...");
  //   return NextResponse.redirect(new URL('/login', request.url));
  // }

  
  return NextResponse.next();
}

export const config = {
  matcher: ['/:path*'],
};
