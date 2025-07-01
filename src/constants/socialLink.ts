import { SocialLink } from '@/types/social';
import {Github, Linkedin, Twitter, Instagram, Code} from 'lucide-react';


export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/AbdulMalek-swe',
    label: 'GitHub',
    icon: Github,
    colorClass: 'text-gray-900 hover:text-black',
  },
  {
    href: 'https://leetcode.com/u/FantusCoder/',
    label: 'LeetCode',
    icon: Code, // Using Code icon as LeetCode placeholder
    colorClass: 'text-orange-600 hover:text-orange-800',
  },
  {
    href: 'https://www.linkedin.com/in/abdulmalek-swe/',
    label: 'LinkedIn',
    icon: Linkedin,
    colorClass: 'text-blue-700 hover:text-blue-900',
  },
  {
    href: 'https://x.com/585Swe',
    label: 'Twitter',
    icon: Twitter,
    colorClass: 'text-sky-500 hover:text-sky-700',
  },
  {
    href: 'https://www.instagram.com/sarkar.abdulmalek/',
    label: 'Instagram',
    icon: Instagram,
    colorClass: 'text-pink-600 hover:text-pink-800',
  },
];
