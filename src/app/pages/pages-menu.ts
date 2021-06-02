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
    title: 'Crece!',
    icon: 'lock-outline',
    children: [
      {
        title: 'Tips!',
        link: '/pages/forms/sube',
      },
      {
        title: 'Invierte',
        link: '/pages/forms/sube',
      }
    ],
  },
  {
    title: 'Cuida ...',
    icon: 'lock-outline',
    children: [
      {
        title: 'Tips!',
        link: '/pages/forms/busca',
      },
      {
        title: 'Ahorro',
        link: '/pages/forms/busca',
      }
    ],
  },
  {
    title: 'tip!Coins',
    icon: 'lock-outline',
    children: [
      {
        title: 'Saldo',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Simula',
        link: '/pages/forms/analiza',
      },
      {
        title: 'Regala',
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
