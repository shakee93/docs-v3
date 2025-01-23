import { Github } from 'nextra/icons';
import { FaGithub } from 'react-icons/fa';

export default {
  index: {
    title: 'Home',
    theme: {
      layout: 'raw',
      sidebar: false,
    },
    type: 'page',
    "display": "hidden"
  },
  features: {
    title: 'Features',
    type: 'page',
    href: 'https://docs.rapidload.io/features',
    // "display": "hidden"
  },
  pricing: {
    title: 'Pricing',
    type: 'page',
    href: 'https://docs.rapidload.io/pricing',
    // "display": "hidden"
  },
  contactus: {
    title: 'Contact Us',
    type: 'page',
    href: 'https://docs.rapidload.io/contactus',
    // "display": "hidden"
  },
  support: {
    title: 'Support',
    type: 'page',
    href: 'https://docs.rapidload.io/support',
    // "display": "hidden"
  },
  "version": {
    "title": "Version",
    "type": "menu",
    "items": {
      "version2.0": {
        "title": "Version 2.0",
        "type": "page",
        "href": "https://docs.rapidload.io/",
        "newWindow": true
      }
    }
  },
  github: {
    title: <svg width="16" height="21" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.3189 0.595459H14.5628L9.66175 6.01786L15.4278 13.3966H10.9135L7.37766 8.92064L3.33157 13.3966H1.08679L6.32887 7.59638L0.797852 0.595459H5.42731L8.62303 4.68566L12.3189 0.595459ZM11.5326 12.0971H12.7761L4.75067 1.82702H3.41752L11.5326 12.0971Z" fill="black"/>
    </svg>,
    type: 'page',
    href: 'https://github.com/rapidload-io/docs',
  },

}