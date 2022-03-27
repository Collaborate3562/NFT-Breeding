import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import fileFill from '@iconify/icons-eva/file-fill';
// routes

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'My Assets',
    path: '/assets',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  {
    title: 'Research',
    path: '/research',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />
  },
  // {
  //   title: 'Resell',
  //   path: '/resell',
  //   icon: <Icon icon={homeFill} {...ICON_SIZE} />
  // },
  { title: 'Dashboard', path: '/dashboard', icon: <Icon icon={fileFill} {...ICON_SIZE} /> }
];

export default menuConfig;
