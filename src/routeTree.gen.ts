/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as AuthImport } from './routes/_auth'
import { Route as R404Import } from './routes/404'
import { Route as AuthenticatedDashboardImport } from './routes/_authenticated/dashboard'
import { Route as AuthenticatedAccountImport } from './routes/_authenticated/account'
import { Route as AuthSignoutImport } from './routes/_auth/signout'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()
const AuthSignupLazyImport = createFileRoute('/_auth/signup')()
const AuthSigninLazyImport = createFileRoute('/_auth/signin')()

// Create/Update Routes

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const AuthRoute = AuthImport.update({
  id: '/_auth',
  getParentRoute: () => rootRoute,
} as any)

const R404Route = R404Import.update({
  path: '/404',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const AuthSignupLazyRoute = AuthSignupLazyImport.update({
  path: '/signup',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/signup.lazy').then((d) => d.Route))

const AuthSigninLazyRoute = AuthSigninLazyImport.update({
  path: '/signin',
  getParentRoute: () => AuthRoute,
} as any).lazy(() => import('./routes/_auth/signin.lazy').then((d) => d.Route))

const AuthenticatedDashboardRoute = AuthenticatedDashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthenticatedAccountRoute = AuthenticatedAccountImport.update({
  path: '/account',
  getParentRoute: () => AuthenticatedRoute,
} as any)

const AuthSignoutRoute = AuthSignoutImport.update({
  path: '/signout',
  getParentRoute: () => AuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/404': {
      id: '/404'
      path: '/404'
      fullPath: '/404'
      preLoaderRoute: typeof R404Import
      parentRoute: typeof rootRoute
    }
    '/_auth': {
      id: '/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      id: '/_authenticated'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/_auth/signout': {
      id: '/_auth/signout'
      path: '/signout'
      fullPath: '/signout'
      preLoaderRoute: typeof AuthSignoutImport
      parentRoute: typeof AuthImport
    }
    '/_authenticated/account': {
      id: '/_authenticated/account'
      path: '/account'
      fullPath: '/account'
      preLoaderRoute: typeof AuthenticatedAccountImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_authenticated/dashboard': {
      id: '/_authenticated/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthenticatedDashboardImport
      parentRoute: typeof AuthenticatedImport
    }
    '/_auth/signin': {
      id: '/_auth/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof AuthSigninLazyImport
      parentRoute: typeof AuthImport
    }
    '/_auth/signup': {
      id: '/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof AuthSignupLazyImport
      parentRoute: typeof AuthImport
    }
  }
}

// Create and export the route tree

interface AuthRouteChildren {
  AuthSignoutRoute: typeof AuthSignoutRoute
  AuthSigninLazyRoute: typeof AuthSigninLazyRoute
  AuthSignupLazyRoute: typeof AuthSignupLazyRoute
}

const AuthRouteChildren: AuthRouteChildren = {
  AuthSignoutRoute: AuthSignoutRoute,
  AuthSigninLazyRoute: AuthSigninLazyRoute,
  AuthSignupLazyRoute: AuthSignupLazyRoute,
}

const AuthRouteWithChildren = AuthRoute._addFileChildren(AuthRouteChildren)

interface AuthenticatedRouteChildren {
  AuthenticatedAccountRoute: typeof AuthenticatedAccountRoute
  AuthenticatedDashboardRoute: typeof AuthenticatedDashboardRoute
}

const AuthenticatedRouteChildren: AuthenticatedRouteChildren = {
  AuthenticatedAccountRoute: AuthenticatedAccountRoute,
  AuthenticatedDashboardRoute: AuthenticatedDashboardRoute,
}

const AuthenticatedRouteWithChildren = AuthenticatedRoute._addFileChildren(
  AuthenticatedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/404': typeof R404Route
  '': typeof AuthenticatedRouteWithChildren
  '/signout': typeof AuthSignoutRoute
  '/account': typeof AuthenticatedAccountRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/signin': typeof AuthSigninLazyRoute
  '/signup': typeof AuthSignupLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/404': typeof R404Route
  '': typeof AuthenticatedRouteWithChildren
  '/signout': typeof AuthSignoutRoute
  '/account': typeof AuthenticatedAccountRoute
  '/dashboard': typeof AuthenticatedDashboardRoute
  '/signin': typeof AuthSigninLazyRoute
  '/signup': typeof AuthSignupLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/404': typeof R404Route
  '/_auth': typeof AuthRouteWithChildren
  '/_authenticated': typeof AuthenticatedRouteWithChildren
  '/_auth/signout': typeof AuthSignoutRoute
  '/_authenticated/account': typeof AuthenticatedAccountRoute
  '/_authenticated/dashboard': typeof AuthenticatedDashboardRoute
  '/_auth/signin': typeof AuthSigninLazyRoute
  '/_auth/signup': typeof AuthSignupLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/404'
    | ''
    | '/signout'
    | '/account'
    | '/dashboard'
    | '/signin'
    | '/signup'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/404'
    | ''
    | '/signout'
    | '/account'
    | '/dashboard'
    | '/signin'
    | '/signup'
  id:
    | '__root__'
    | '/'
    | '/404'
    | '/_auth'
    | '/_authenticated'
    | '/_auth/signout'
    | '/_authenticated/account'
    | '/_authenticated/dashboard'
    | '/_auth/signin'
    | '/_auth/signup'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  R404Route: typeof R404Route
  AuthRoute: typeof AuthRouteWithChildren
  AuthenticatedRoute: typeof AuthenticatedRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  R404Route: R404Route,
  AuthRoute: AuthRouteWithChildren,
  AuthenticatedRoute: AuthenticatedRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/404",
        "/_auth",
        "/_authenticated"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/404": {
      "filePath": "404.tsx"
    },
    "/_auth": {
      "filePath": "_auth.tsx",
      "children": [
        "/_auth/signout",
        "/_auth/signin",
        "/_auth/signup"
      ]
    },
    "/_authenticated": {
      "filePath": "_authenticated.tsx",
      "children": [
        "/_authenticated/account",
        "/_authenticated/dashboard"
      ]
    },
    "/_auth/signout": {
      "filePath": "_auth/signout.tsx",
      "parent": "/_auth"
    },
    "/_authenticated/account": {
      "filePath": "_authenticated/account.tsx",
      "parent": "/_authenticated"
    },
    "/_authenticated/dashboard": {
      "filePath": "_authenticated/dashboard.tsx",
      "parent": "/_authenticated"
    },
    "/_auth/signin": {
      "filePath": "_auth/signin.lazy.tsx",
      "parent": "/_auth"
    },
    "/_auth/signup": {
      "filePath": "_auth/signup.lazy.tsx",
      "parent": "/_auth"
    }
  }
}
ROUTE_MANIFEST_END */
