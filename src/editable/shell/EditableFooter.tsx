'use client'

import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((t) => t.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()
  const columns = globalContent.footer?.columns || []

  return (
    <footer className="bg-[var(--slot4-dark-bg)] text-[var(--slot4-dark-text)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 sm:px-6 lg:px-8">

        <div className="grid gap-6 border-b border-white/10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['18+ Years', 'Industry experience'],
            ['A+ Rated', 'Business trust score'],
            ['Verified Listings', 'Quality assured data'],
            ['Local Focus', 'Community driven results'],
          ].map(([title, sub]) => (
            <div key={title} className="flex items-center gap-4 rounded-xl border border-white/8 bg-white/5 px-5 py-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--slot4-accent-fill)]/15 text-[var(--slot4-accent)]">
                <span className="text-lg font-black">{(title as string)[0]}</span>
              </span>
              <div>
                <p className="text-sm font-black">{title}</p>
                <p className="text-xs font-medium text-white/50">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 border-b border-white/10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5">
              <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-9 w-9 object-contain" />
              <span className="text-xl font-black tracking-[-0.04em]">{slot4BrandConfig.siteName}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">{globalContent.footer?.description || SITE_CONFIG.description}</p>
            <Link href="/create" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--slot4-accent-fill)] px-5 py-2.5 text-sm font-bold text-white transition hover:opacity-90">
              List Your Business <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">{col.title}</h3>
              <div className="mt-4 grid gap-2.5">
                {col.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm font-medium text-white/65 transition hover:text-white">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-white/40">Directory</h3>
            <div className="mt-4 grid gap-2.5">
              {taskLinks.map((task) => (
                <Link key={task.key} href={task.route} className="inline-flex items-center gap-1.5 text-sm font-medium text-white/65 transition hover:text-white">
                  {task.label} <ArrowUpRight className="h-3 w-3" />
                </Link>
              ))}
              {session ? (
                <>
                  <Link href="/create" className="text-sm font-medium text-white/65 transition hover:text-white">Add Listing</Link>
                  <button type="button" onClick={logout} className="text-left text-sm font-medium text-white/65 transition hover:text-white">Logout</button>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-medium text-white/65 transition hover:text-white">Business Login</Link>
                  <Link href="/signup" className="text-sm font-medium text-white/65 transition hover:text-white">Sign Up</Link>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs font-medium text-white/35">&copy; {year} {slot4BrandConfig.siteName}. All rights reserved.</p>
          <p className="text-xs font-medium text-white/35">{globalContent.footer?.bottomNote || ''}</p>
        </div>
      </div>
    </footer>
  )
}
