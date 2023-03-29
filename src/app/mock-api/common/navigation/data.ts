/* eslint-disable */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
  {
    id: 'apps',
    title: 'Applications',
    subtitle: 'Custom made application designs',
    type: 'group',
    icon: 'heroicons_outline:home',
    children: [
      {
        id: 'apps.mailbox',
        title: 'Mailbox',
        type: 'basic',
        icon: 'heroicons_outline:mail',
        link: '/apps/mailbox',
        badge: {
          title: '27',
          classes: 'px-2 bg-pink-600 text-white rounded-full',
        },
      },
    ],
  },
];

export const compactNavigation: FuseNavigationItem[] = [
  {
    id: 'apps',
    title: 'Apps',
    tooltip: 'Apps',
    type: 'aside',
    icon: 'heroicons_outline:qrcode',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
export const futuristicNavigation: FuseNavigationItem[] = [
  {
    id: 'apps',
    title: 'APPS',
    type: 'group',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
export const horizontalNavigation: FuseNavigationItem[] = [
  {
    id: 'apps',
    title: 'Apps',
    type: 'group',
    icon: 'heroicons_outline:qrcode',
    children: [], // This will be filled from defaultNavigation so we don't have to manage multiple sets of the same navigation
  },
];
