"use client"

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { DateRangePicker } from '@/components/ui/date-range-picker';
import { Menu, Search, Bell, Plus, BarChart3, Settings, ChevronLeft } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from '@/components/ui/input';
import Link from 'next/link';

export default function Header({ setSidebarOpen }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  // Format the current path for display
  const formatPathname = (path) => {
    if (path === '/dashboard') return 'Dashboard';
    return path.split('/').pop().split('-').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <header className="bg-card z-10 py-3 px-4 md:px-6 shadow-sm border-b border-border flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(prev => !prev)}
          className="md:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>

        {pathname === '/dashboard' ? <Link href="/dashboard" className="flex items-center space-x-2">
          <BarChart3 className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">SEO Tracker</span>
        </Link> : <Link href="/dashboard" className="flex items-center space-x-2">
          <ChevronLeft className="h-6 w-6 text-primary" />
          <span className="text-sm font-semibold">Back to Dashboard</span>
        </Link>}
      </div>

      <div className="flex items-center space-x-4">
        {/* Search */}
        {/* <div className={`relative ${searchOpen ? 'w-64' : 'w-auto'}`}>
          {searchOpen ? (
            <div className="relative">
              <Input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-1.5 w-full"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            </div>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}
        </div> */}

        {/* Date Range Picker */}
        <DateRangePicker />

        {pathname == '/dashboard' &&
          <Link href="/goals-setting">
            <Button variant="ghost" size="icon" className="relative">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
        }

        {/* Notifications */}
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <Settings className="h-5 w-5" />
              <span className="absolute top-1 right-1.5 h-2 w-2 rounded-full bg-destructive"></span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="py-2 px-4 text-sm text-muted-foreground">
              <p>No new notifications</p>
            </div>
          </DropdownMenuContent>
        </DropdownMenu> */}

        {/* Add new */}
        {/* <Button size="sm" className="hidden md:flex">
          <Plus className="h-4 w-4 mr-1" /> New Project
        </Button> */}
      </div>
    </header >
  );
}