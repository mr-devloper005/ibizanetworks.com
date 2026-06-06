'use client'

import { Building2, MapPin, Phone } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Business onboarding', body: 'Add a listing, verify operational details, and make the profile useful for local customers.' },
    { icon: Phone, title: 'Listing support', body: 'Request edits for phone numbers, websites, hours, categories, service areas, and profile content.' },
    { icon: MapPin, title: 'Coverage requests', body: 'Need a new city, category, or business type represented? Send the details and we will review it.' },
  ]

  return (
    <EditableSiteShell className="bg-[var(--slot4-page-bg)] text-[var(--slot4-page-text)]">
      <main className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] opacity-70">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-4 text-5xl font-black leading-tight tracking-[-0.05em]">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm font-semibold leading-8 text-[var(--slot4-muted-text)]">{pagesContent.contact.description}</p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                  <lane.icon className="h-5 w-5" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[var(--editable-border)] bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <EditableContactLeadForm />
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
