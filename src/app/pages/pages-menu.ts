import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
    {
        title: 'USERS',
        icon: '',
        link: '',
        group: true,
    },
    {
        title: 'Users',
        icon: 'people-outline',
        link: '/pages/users/employee'
    },
    {
        title: 'Clients',
        icon: 'person-outline',
        link: '/pages/users/client',
    },
    {
        title: 'Announcements',
        group: true,
    },
    {
        title: 'Announcements',
        icon: 'radio-outline',
        link: '/pages/announcements-management/announcements'
    },
    {
        title: 'Announcement Request',
        icon: 'radio-outline',
        link: '/pages/announcement-request/request'
    }



];
