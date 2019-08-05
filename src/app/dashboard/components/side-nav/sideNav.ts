export interface SideNavMenuItem {
  title: string;
  route: string;
  icon?: string;
  queryParams?: object;
  subMenu?: SideNavMenuItem[];
}


export const sideNavMenuItems: Array<SideNavMenuItem> = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    icon: 'view_quilt'
  },
  {
    title: 'Statistics',
    route: '/dashboard/statistics',
    icon: 'view_quilt'
  },
  {
    title: 'Invoice',
    route: '/dashboard/data-table',
    icon: 'view_quilt'
  },
  {
    title: 'Purchase Orders',
    route: '/dashboard',
    icon: 'view_quilt'
  },
  {
    title: 'Credit Memos',
    route: '/dashboard',
    icon: 'work_outline'
  },
  {
    title: 'Estimates',
    route: '/dashboard',
    icon: 'view_quilt'
  },
  {
    title: 'Clients',
    route: '/dashboard',
    icon: 'view_quilt'
  },
  {
    title: 'Items',
    route: '/dashboard',
    icon: 'view_quilt'
  },
  {
    title: 'Settings',
    route: '/dashboard',
    icon: 'settings',
    subMenu: [
      {
        title: 'Company info', route: '/dashboard', icon: 'view_module',
      },
      {
        title: 'Trading info', route: '/dashboard', icon: 'dashboard'
      },
      {
        title: 'Email setup', route: '/dashboard', icon: 'dashboard'
      },
      {
        title: 'Team member', route: '/dashboard', icon: 'dashboard'
      },
      {
        title: 'Other settings', route: '/dashboard', icon: 'dashboard'
      }
    ]
  },
  {
    title: 'Nebular',
    route: 'nebular',
    icon: 'table_chart',
  },
  {
    title: 'Reports',
    route: '',
    icon: 'bubble_chart'
  },
  {
    title: 'Help',
    route: '',
    icon: 'help_outline'
  },
];
