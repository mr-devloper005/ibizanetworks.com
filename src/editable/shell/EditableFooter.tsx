'use client'

import Link from 'next/link'
import type { CSSProperties } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export function EditableFooter() {
  const footerVars = { '--editable-footer-bg': '#f7f9fc', '--editable-footer-text': '#090a2b' } as CSSProperties
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer style={footerVars} className="border-t border-[var(--editable-border)] bg-[var(--editable-footer-bg)] text-[var(--editable-footer-text)]">
      <div className="mx-auto flex max-w-[var(--editable-container)] flex-wrap items-center justify-center gap-5 border-b border-[var(--editable-border)] px-4 py-10 text-center sm:px-6 lg:px-8">
        {['Google Reviews', 'Ads Agency', '18 Years', 'A+ Rating', 'Bing Ads'].map((item) => (
          <div key={item} className="rounded-lg border border-[var(--editable-border)] bg-white px-6 py-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] opacity-50">Trusted</p>
            <p className="mt-1 text-lg font-black">{item}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white">
              <img src="/favicon.png?v=20260413" alt={slot4BrandConfig.siteName} className="h-18 w-13 object-contain" />
            </span>
            <span className="text-lg font-black tracking-[-0.04em]">{slot4BrandConfig.siteName}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 opacity-70">{globalContent.footer?.description || SITE_CONFIG.description}</p>
          <Link href="/create" className="mt-5 inline-flex rounded-full bg-[var(--slot4-accent-fill)] px-6 py-3 text-sm font-black text-white shadow-sm">Free Business Listing</Link>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Company</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About Us', '/about'],
              ['Contact', '/contact'],
              ['Search Directory', '/search'],
              ['Business Listings', '/listing'],
              ['Create Listing', '/create'],
            ].map(([label, href]) => (
              <Link key={href} href={href} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
          </div>
        </div>

        <div>
          
          <h3 className="text-xs font-black uppercase tracking-[0.22em] opacity-55">Directory</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold opacity-75 hover:opacity-100">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
            {(session ? [['Add Listing', '/create']] : [['Business Login', '/login'], ['Sign up', '/signup']]).map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold opacity-75 hover:opacity-100">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold opacity-75 hover:opacity-100">Logout {session.name}</button> : null}
          </div>
          
        </div>

        
      </div>

      <div className="border-t border-[var(--editable-border)] px-4 py-5 text-center text-xs font-bold opacity-55">
        Copyright (c) {year} {slot4BrandConfig.siteName}. All rights reserved.
      </div>
    </footer>
  )
}
