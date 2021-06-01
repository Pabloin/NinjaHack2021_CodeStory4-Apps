import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS_ORIG: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];





export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'OPCIONES',
    group: true,
  },
  {
    title: 'Busca',
    icon: 'lock-outline',
    children: [
      {
        title: 'Busca Texto',
        link: '/pages/forms/busca',
      },
      {
        title: 'Busca Avanzado',
        link: '/pages/forms/busca',
      }
    ],
  },
  {
    title: 'Sube',
    icon: 'lock-outline',
    children: [
      {
        title: 'Sube link',
        link: '/pages/forms/sube',
      },
      {
        title: 'Sube Dataset',
        link: '/pages/forms/sube',
      }
    ],
  },
  {
    title: 'Analiza',
    icon: 'lock-outline',
    children: [
      {
        title: 'Opcion 1',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Opcion 2',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Opcion 3',
        link: '/pages/forms/analiza',
      }
    ],
  },
  {
    title: 'PERFIL',
    group: true,
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
