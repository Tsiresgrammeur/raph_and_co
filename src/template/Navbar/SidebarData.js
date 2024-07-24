import React from 'react';
import { SiGoogleclassroom } from 'react-icons/si';
import { GiTeacher } from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Users',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Photos',
    icon: <SiGoogleclassroom/>,
    cName: 'nav-text'
  },
  {
    title: 'Configuration',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
];