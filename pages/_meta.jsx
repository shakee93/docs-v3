
export default {
 
  "rapidload-3-migration": {
    title: 'RapidLoad 3.0 Migration',
    sidebar: true,
      order: 1,
  },

  "getting-started": {
    title: 'Getting Started',
    sidebar: true,
    order: 2,
  },


  "using-plugin": {
    title: 'Using Plugin',
    sidebar: true,
    order: 3,
  },
  "custom-settings": {
    title: 'Custom Settings',
    sidebar: true,
    order: 4
  },

  "general-settings": {
    title: "General Settings",
    sidebar: true,
    order: 5
  },
  "manage-accounts": {
    title: 'Manage Accounts',
    sidebar: true,
    order: 6,
  },

  faq: {
    title: 'FAQ',
    sidebar: true,
    order: 7,
  },


  //Navbar
  index: {
    title: 'Home',
    theme: {
      layout: 'raw',
      sidebar: false,
      footer: false,
    },
    type: 'page',
    "display": "hidden"
  },

  "version": {
    "title": "Version",
    "type": "menu",
    "items": {
      "version2.0": {
        "title": "Version 2.0",
        "type": "page",
        "href": "https://docs.rapidload.io/v2",
        "newWindow": true
      },
      "version1.0": {
        "title": "Version 1.0",
        "type": "page",
        "href": "https://rapidload.zendesk.com/hc/en-us/categories/360006008913-Wordpress-Plugin",
        "newWindow": true
      }

    }
  },

  Download: {
    title: 'Download',
    type: 'page',
    href: 'https://wordpress.org/plugins/unusedcss/',
    // "display": "hidden"
  },
  Account: {
    title: 'Account',
    type: 'page',
    href: 'https://app.rapidload.io/',
    // "display": "hidden"
  },
  SignUp: {
    title: 'Sign Up',
    type: 'page',
    href: 'https://rapidload.io/signup/',
    // "display": "hidden"
  },
  Twitter: {
    title: <svg width="16" height="21" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.3189 0.595459H14.5628L9.66175 6.01786L15.4278 13.3966H10.9135L7.37766 8.92064L3.33157 13.3966H1.08679L6.32887 7.59638L0.797852 0.595459H5.42731L8.62303 4.68566L12.3189 0.595459ZM11.5326 12.0971H12.7761L4.75067 1.82702H3.41752L11.5326 12.0971Z" fill="black" />
    </svg>,
    type: 'page',
    href: 'https://x.com/_rapidload',
  },
}