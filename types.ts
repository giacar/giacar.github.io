export interface TimelineItemData {
  id: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  location?: string;
  iconType: 'work' | 'education' | 'certification';
  tags?: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}