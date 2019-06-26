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
    route: '',
    icon: 'view_quilt'
  },
  {
    title: 'Nested Menu',
    route: '',
    icon: 'view_list',
    subMenu: [
      {
        title: 'Data table', route: 'newInvoice', icon: 'view_module',
        subMenu: [
          {title: 'Data table', route: 'data-table'},
          {title: 'Sub sub item 2', route: ''}
        ]
      },
      {title: 'Sub item 2', route: 'allInvoice', icon: 'dashboard'}
    ]
  },
  {
    title: 'Landing',
    route: 'landing',
    icon: 'view_quilt'
  },
];
