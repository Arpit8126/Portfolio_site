import { SocialLink } from '@/types/social';
import {Github, Linkedin, Twitter, Instagram, Code} from 'lucide-react';


export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/Arpit8126',
    label: 'GitHub',
    icon: Github,
    colorClass: 'text-gray-900 hover:text-black',
  },
  {
    href: 'https://leetcode.com/u/arpit_8126_/',
    label: 'LeetCode',
    icon: Code, // Using Code icon as LeetCode placeholdera
    colorClass: 'text-orange-600 hover:text-orange-800',
  },
  {
    href: 'https://www.linkedin.com/in/arpit-pandey-9b3a23312/',
    label: 'LinkedIn',
    icon: Linkedin,
    colorClass: 'text-blue-700 hover:text-blue-900',
  },
];
