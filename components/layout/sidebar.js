'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useAuth } from '@/components/providers/auth-provider';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ModeToggle } from '@/components/theme/mode-toggle';
import {
  LayoutDashboard,
  BarChart3,
  Target,
  Key,
  LineChart,
  FileText,
  ExternalLink,
  Network,
  Link2,
  X,
  User,
  ChevronDown,
  ChevronRight,
  PlusCircle,
  Goal,
  Link2Icon,
  Info,
  ChartBar,
  Search,
  UserPen,
  Settings,
  Edit,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/project-dashboard' },
  // { icon: BarChart3, label: 'Projects', href: '/projects' },
  { icon: Target, label: 'Goals', href: '/goals' },
  {
    icon: Key,
    label: 'Keywords',
    href: '/keywords',
    children: [
      { icon: PlusCircle, label: 'Add Keywords', href: '/keywords' },
      { icon: LineChart, label: 'Tracking', href: '/tracking' },
      { icon: FileText, label: 'Reports', href: '/reports' },
    ],
  },
  { icon: ExternalLink, label: 'On-Page Factors', href: '/on-page-factors' },
  { icon: Network, label: 'Backlink Strategy', href: '/backlink-strategy' },
  { icon: Link2, label: 'Backlinks', href: '/backlinks' },
  { icon: ChartBar, label: 'Analytics', href: '/analytics' },
  { icon: Search, label: 'GSC', href: '/gsc' },
  { icon: UserPen, label: 'Internal Blogs', href: '/internal-blogs' },
  { icon: Edit, label: 'External Blogs', href: '/external-blogs' },
  { icon: Settings, label: 'Project Details', href: '/project-detail' },
];

const settingNavItems = [
  { icon: Goal, label: 'Goals', href: '/goals-setting' },
  { icon: Link2Icon, label: 'Backlinks', href: '/backlinks-setting' },
]

export default function Sidebar({ open, setOpen, currentPath }) {
  const { user, logout } = useAuth();
  const pathname = usePathname();
  const itemsToRender = pathname?.startsWith('/goals-setting') || pathname?.startsWith('/backlinks-setting') ? settingNavItems : navItems;

  const hasActiveChild = navItems.find(
    (item) =>
      item.children?.some((child) => currentPath === child.href)
  );
  const [openSubmenu, setOpenSubmenu] = useState(!!hasActiveChild);

  useEffect(() => {
    if (hasActiveChild) {
      setOpenSubmenu(true);
    }
  }, [currentPath]);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 flex flex-col',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link href="/dashboard" className="flex items-center space-x-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">SEO Tracker</span>
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setOpen(false)} className="md:hidden">
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1 py-2">
          <nav className="px-2 space-y-1">
            {itemsToRender.map((item) => {
              const isParentActive = currentPath === item.href;
              const isChildActive = item.children?.some((child) => currentPath === child.href);

              if (item.children) {
                return (
                  <div key={item.href}>
                    <button
                      onClick={() => setOpenSubmenu((prev) => !prev)}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors',
                        isParentActive || isChildActive
                          ? 'bg-primary text-primary-foreground'
                          : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                      )}
                    >
                      <div className="flex items-center">
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.label}
                      </div>
                      {openSubmenu ? (
                        <ChevronDown className="h-4 w-4" />
                      ) : (
                        <ChevronRight className="h-4 w-4" />
                      )}
                    </button>
                    {openSubmenu && (
                      <div className="pl-8 space-y-1 mt-1">
                        {item.children.map((child) => {
                          const isChildPage = currentPath === child.href;
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={cn(
                                'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                                isChildPage
                                  ? 'bg-primary text-primary-foreground'
                                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                              )}
                            >
                              <child.icon className="mr-2 h-4 w-4" />
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors',
                    isParentActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                  )}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </ScrollArea>

        <div className="p-4 border-t border-border space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-primary h-8 w-8 rounded-full flex items-center justify-center text-primary-foreground">
              <User className="h-4 w-4" />
            </div>
            <div className="text-sm">
              <p className="font-medium">{user?.name || 'User'}</p>
              <p className="text-muted-foreground text-xs truncate">{user?.email || 'user@example.com'}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <ModeToggle />
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
