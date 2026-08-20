'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Search, UserPlus, LogIn, X, PlusCircle, ChevronRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()

  const navLinks = useMemo(() => {
    const taskLinks = SITE_CONFIG.tasks.filter((t) => t.enabled).map((t) => ({ label: t.label, href: t.route }))
    const configured = globalContent.nav?.primaryLinks || []
    const merged = configured.length ? configured : [{ label: 'Home', href: '/' }, ...taskLinks]
    return merged.slice(0, 5)
  }, [])

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(`${href}/`))

  return (
    <header className="sticky top-0 z-50 bg-[var(--slot4-surface-bg)]/92 backdrop-blur-2xl">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center gap-3 lg:h-[72px]">
          <Link href="/" className="group flex shrink-0 items-center gap-2.5">
            <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110" />
            <span className="hidden text-lg font-black tracking-[-0.04em] text-[var(--slot4-page-text)] sm:block">{slot4BrandConfig.siteName}</span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={`relative px-3.5 py-2 text-[13px] font-bold tracking-[-0.01em] transition-colors ${isActive(item.href) ? 'text-[var(--slot4-page-text)]' : 'text-[var(--slot4-muted-text)] hover:text-[var(--slot4-page-text)]'}`}>
                {item.label}
                {isActive(item.href) ? <span className="absolute inset-x-2 -bottom-[1px] h-0.5 rounded-full bg-[var(--slot4-accent-fill)]" /> : null}
              </Link>
            ))}
          </div>

          <form action="/search" className="mx-auto hidden min-w-0 flex-1 md:flex md:max-w-md lg:max-w-lg">
            <label className={`flex w-full items-center gap-2 rounded-full border bg-[var(--slot4-page-bg)] px-4 py-2 transition-all duration-200 ${searchFocused ? 'border-[var(--slot4-accent-fill)] shadow-[0_0_0_3px_var(--slot4-accent-soft)]' : 'border-[var(--editable-border)]'}`}>
              <Search className="h-4 w-4 shrink-0 text-[var(--slot4-soft-muted-text)]" />
              <input
                name="q"
                type="search"
                placeholder="Search businesses, services, locations..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="min-w-0 flex-1 bg-transparent text-sm font-medium text-[var(--slot4-page-text)] outline-none placeholder:text-[var(--slot4-soft-muted-text)]"
              />
              <button type="submit" className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--slot4-accent-fill)] text-white transition hover:opacity-90" aria-label="Search">
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </label>
          </form>

          <div className="ml-auto flex shrink-0 items-center gap-2">
            {session ? (
              <>
                <span className="hidden max-w-[140px] truncate rounded-full bg-[var(--slot4-panel-bg)] px-3.5 py-1.5 text-xs font-bold text-[var(--slot4-page-text)] sm:inline-flex">{session.name}</span>
                <Link href="/create" className="hidden items-center gap-1.5 rounded-full bg-[var(--slot4-accent-fill)] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:opacity-90 sm:inline-flex">
                  <PlusCircle className="h-3.5 w-3.5" /> Add Listing
                </Link>
                <button type="button" onClick={logout} className="hidden rounded-full border border-[var(--editable-border)] px-3 py-1.5 text-xs font-bold text-[var(--slot4-muted-text)] transition hover:bg-[var(--slot4-panel-bg)] sm:inline-flex">Logout</button>
              </>
            ) : (
              <>
                <Link href="/login" className="hidden items-center gap-1.5 rounded-full px-3 py-2 text-sm font-bold text-[var(--slot4-muted-text)] transition hover:text-[var(--slot4-page-text)] sm:inline-flex">
                  <LogIn className="h-3.5 w-3.5" /> Login
                </Link>
                <Link href="/signup" className="hidden items-center gap-1.5 rounded-full bg-[var(--slot4-dark-bg)] px-4 py-2 text-sm font-bold text-[var(--slot4-dark-text)] shadow-sm transition hover:opacity-90 sm:inline-flex">
                  <UserPlus className="h-3.5 w-3.5" /> Sign Up Free
                </Link>
              </>
            )}
            <button type="button" onClick={() => setOpen((v) => !v)} className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--editable-border)] text-[var(--slot4-page-text)] transition hover:bg-[var(--slot4-panel-bg)] lg:hidden" aria-label="Toggle menu">
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[var(--editable-border)] to-transparent" />

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[var(--slot4-surface-bg)] lg:hidden">
          <div className="mx-auto max-w-[var(--editable-container)] px-4 py-4 sm:px-6">
            <form action="/search" className="flex items-center gap-2 rounded-xl border border-[var(--editable-border)] bg-[var(--slot4-page-bg)] px-3 py-2.5">
              <Search className="h-4 w-4 shrink-0 text-[var(--slot4-soft-muted-text)]" />
              <input name="q" type="search" placeholder="Search businesses..." className="min-w-0 flex-1 bg-transparent text-sm font-medium outline-none placeholder:text-[var(--slot4-soft-muted-text)]" />
            </form>

            <div className="mt-3 grid gap-1">
              {[{ label: 'Home', href: '/' }, ...navLinks.filter((l) => l.href !== '/'), { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }].map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-bold transition ${isActive(item.href) ? 'bg-[var(--slot4-panel-bg)] text-[var(--slot4-page-text)]' : 'text-[var(--slot4-muted-text)] hover:bg-[var(--slot4-panel-bg)]'}`}>
                  {item.label}
                  <ChevronRight className="h-3.5 w-3.5 opacity-40" />
                </Link>
              ))}
            </div>

            <div className="mt-3 grid gap-2 border-t border-[var(--editable-border)] pt-3">
              {session ? (
                <>
                  <Link href="/create" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-lg bg-[var(--slot4-accent-fill)] py-2.5 text-sm font-bold text-white">
                    <PlusCircle className="h-4 w-4" /> Add Listing
                  </Link>
                  <button type="button" onClick={() => { logout(); setOpen(false) }} className="rounded-lg border border-[var(--editable-border)] py-2.5 text-sm font-bold text-[var(--slot4-muted-text)]">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/signup" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-lg bg-[var(--slot4-dark-bg)] py-2.5 text-sm font-bold text-[var(--slot4-dark-text)]">
                    <UserPlus className="h-4 w-4" /> Sign Up Free
                  </Link>
                  <Link href="/login" onClick={() => setOpen(false)} className="flex items-center justify-center gap-2 rounded-lg border border-[var(--editable-border)] py-2.5 text-sm font-bold text-[var(--slot4-muted-text)]">
                    <LogIn className="h-4 w-4" /> Login
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
