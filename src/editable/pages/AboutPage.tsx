import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[var(--slot4-page-bg)] px-4 py-14 text-[var(--slot4-page-text)] sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[var(--editable-container)] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg border border-[var(--editable-border)] bg-white p-8 shadow-sm lg:p-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] opacity-55">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.05em]">About {slot4BrandConfig.siteName}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 opacity-70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 opacity-75">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-black tracking-[-0.04em]">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 opacity-70">{value.description}</p>
              </div>
            ))}
            <div className="rounded-lg border border-[var(--editable-border)] bg-[var(--slot4-panel-bg)] p-6">
              <h2 className="text-xl font-black tracking-[-0.04em]">What complete listings include</h2>
              <div className="mt-4 grid gap-2 text-sm font-bold opacity-75">
                {['Business description and services', 'Address, phone, website, and hours', 'Photos, service areas, and category context', 'Clear actions for calling, visiting, and browsing'].map((item) => <p key={item}>{item}</p>)}
              </div>
            </div>
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
