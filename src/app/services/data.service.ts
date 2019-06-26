import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  private menu = [
    {
      name: 'Home', route: 'dashboard', icon: 'dashboard',
      items: []
    },
    {
      name: 'Nested Menu', route: 'home.dash', icon: 'view_list',
      items: [
        {
          name: 'Sub item 1', route: 'newInvoice', icon: 'view_module',
          subitems: [
            {name: 'Sub sub item 1', route: 'charts'},
            {name: 'Sub sub item 2', route: ''}
          ]
        },
        {name: 'Sub item 2', route: 'allInvoice', icon: 'dashboard', subitems: []}
      ]
    },
    {
      name: 'DataTables', route: 'dataTable', icon: 'assessment',
      items: []
    },
    {
      name: 'Apps', route: 'dashboard', icon: 'apps',
      items: [
        {name: 'Media', route: 'charts', icon: 'dashboard', subitems: []},
        {name: 'Chat', route: '', icon: 'dashboard', subitems: []},
        {name: 'Messages', route: '', icon: 'dashboard', subitems: []},
        {name: 'Social', route: '', icon: 'dashboard', subitems: []}
      ]
    },
    {
      name: 'Widgets', route: 'dashboard', icon: 'images',
      items: []
    },
    {
      name: 'Material', route: 'dashboard', icon: 'pie_chart',
      items: [
        {name: 'Media', route: 'charts', icon: 'dashboard', subitems: []},
        {name: 'Chat', route: '', icon: 'dashboard', subitems: []},
        {name: 'Messages', route: '', icon: 'dashboard', subitems: []},
        {name: 'Social', route: '', icon: 'dashboard', subitems: []}
      ]
    },
    {
      name: 'Pages', route: 'dashboard', icon: 'person',
      items: [
        {name: 'Media', route: 'charts', icon: 'dashboard', subitems: []},
        {name: 'Chat', route: '', icon: 'dashboard', subitems: []},
        {name: 'Messages', route: '', icon: 'dashboard', subitems: []},
        {name: 'Social', route: '', icon: 'dashboard', subitems: []}
      ]
    },
    {name: 'Charts', route: 'charts', icon: 'grain', items: []},
    {name: 'Invoice', route: 'allInvoice', icon: 'bubble_chart', items: []},
    {
      name: 'Routing', route: 'home.routing', icon: 'map',
      items: [
        {name: 'Sub Item 1', route: 'charts', icon: 'dashboard', subitems: []},
        {name: 'Sub Item 2', route: '', icon: 'dashboard', subitems: []}
      ]
    },
    {name: 'Docs', route: 'charts', icon: 'grain', items: []},
    {name: 'Login', route: 'charts', icon: 'grain', items: []},
    {name: 'Registration', route: 'charts', icon: 'grain', items: []},
    {name: 'Sign Up', route: 'charts', icon: 'grain', items: []},
    {name: '404', route: 'charts', icon: 'grain', items: []},
  ];

  private messages = [
    {from: 'Tushar', subject: 'Example Subject', content: 'Hellow Era...'},
    {from: 'Era', subject: 'Example Subject', content: 'Hellow Mr'},
    {from: 'Galib', subject: 'Example Subject', content: 'Doctor shaheb kemon asen'},
    {from: 'Rocky', subject: 'Example Subject', content: 'Are vai koyen na. choltase konorokom'},
  ];


  constructor() {
  }

  getMenuData() {
    return this.menu;
  }

  getMessages() {
    return this.messages;
  }

}
