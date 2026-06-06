import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, MapPin, Search, ShieldCheck, Star, TrendingUp } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc, editablePalette as pal } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'
import { slot4BrandConfig } from '@/editable/theme/brand.config'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

const learningCards = [
  {
    title: 'Local SEO 2026: Ranking Today, AI-Recommended Tomorrow',
    body: 'Build a complete profile with categories, service areas, reviews, photos, and consistent contact details.',
  },
  {
    title: 'Top Free Business Listing Citation Sites',
    body: 'Strengthen local visibility by keeping your listing information accurate across trusted directories.',
  },
  {
    title: 'Business Profile Optimization Checklist',
    body: 'Use clear descriptions, current hours, quality images, and direct calls to action to help customers decide.',
  },
]

const testimonials = [
  ['Trinity Wellness', 'They helped make our business profile look professional and easy for customers to understand.'],
  ['WayBetter Landscaping', 'The listing layout is clean, fast, and focused on calls from nearby customers.'],
  ['Triad Homes Real Estate', 'Everything important is finally in one place: service area, photos, details, and contact options.'],
]

function getExcerpt(post?: SitePost | null, limit = 120) {
  const content = post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
  const raw =
    (typeof content.description === 'string' && content.description) ||
    (typeof content.summary === 'string' && content.summary) ||
    post?.summary ||
    ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function taskLabel(task: TaskKey) {
  return SITE_CONFIG.tasks.find((item) => item.key === task)?.label || task
}

function contentOf(post: SitePost) {
  return post.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function field(post: SitePost, keys: string[]) {
  const content = contentOf(post)
  for (const key of keys) {
    const value = content[key]
    if (typeof value === 'string' && value.trim()) return value.trim()
  }
  return ''
}

function BusinessMiniCard({ post, href }: { post: SitePost; href: string }) {
  const location = field(post, ['location', 'city', 'address']) || 'Local business'
  return (
    <Link href={href} className="group grid min-h-[112px] gap-4 rounded-lg border border-[var(--editable-border)] bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg sm:grid-cols-[80px_minmax(0,1fr)]">
      <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-[var(--slot4-media-bg)]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="min-w-0 self-center">
        <h3 className="line-clamp-2 text-base font-black leading-tight tracking-[-0.03em] text-[var(--slot4-page-text)]">{post.title}</h3>
        <p className="mt-2 flex items-center gap-1 text-sm font-semibold text-[var(--slot4-muted-text)]"><MapPin className="h-3.5 w-3.5 text-[var(--slot4-accent)]" /> {location}</p>
      </div>
    </Link>
  )
}

function LearningCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white shadow-sm">
      <div className="flex aspect-[16/8] items-center justify-center bg-[var(--slot4-dark-bg)] p-6 text-center text-white">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">Local SEO</p>
          <h3 className="mt-3 text-2xl font-black leading-tight">{title.split(':')[0]}</h3>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-black leading-tight tracking-[-0.03em]">{title}</h3>
        <p className="mt-3 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{body}</p>
      </div>
    </article>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute }: HomeSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(164deg,#eaf4ff_0_58%,#ffffff_58%_100%)]">
      <div className="mx-auto grid max-w-[var(--editable-container)] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          <p className={`${dc.type.eyebrow} text-[var(--slot4-accent)]`}>{pagesContent.home.hero.badge}</p>
          <h1 className="mt-4 max-w-2xl text-6xl font-black leading-[1.02] tracking-[-0.06em] text-[var(--slot4-page-text)] sm:text-7xl lg:text-8xl">
            {pagesContent.home.hero.title.map((line) => <span key={line} className="block">{line}</span>)}
          </h1>
          <p className="mt-6 max-w-2xl text-base font-semibold leading-8 text-[var(--slot4-muted-text)]">{pagesContent.home.hero.description}</p>

          <form action="/search" className="mt-7 grid max-w-3xl overflow-hidden rounded-lg border border-[var(--editable-border)] bg-white shadow-md sm:grid-cols-[1fr_1fr_64px]">
            <label className="flex items-center gap-3 border-b border-[var(--editable-border)] px-4 py-4 sm:border-b-0 sm:border-r">
              <span className="text-sm font-black">What</span>
              <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
            </label>
            <label className="flex items-center gap-3 px-4 py-4 sm:border-r sm:border-[var(--editable-border)]">
              <span className="text-sm font-black">Where</span>
              <input name="location" placeholder="Philadelphia, PA" className="min-w-0 flex-1 bg-transparent text-sm font-semibold outline-none placeholder:text-slate-400" />
            </label>
            <button className="flex h-14 items-center justify-center bg-[var(--slot4-accent-fill)] text-white" aria-label="Search businesses">
              <Search className="h-6 w-6" />
            </button>
          </form>
        </div>

        <div className="relative min-h-[360px]">
          <div className="absolute inset-x-4 bottom-4 top-6 rotate-[-14deg] rounded-lg bg-white shadow-[0_24px_80px_rgba(9,10,43,0.10)]" />
          <div className="relative mx-auto grid max-w-lg grid-cols-3 gap-4 p-6">
            {['Dentist', 'Cafe', 'Roofing', 'Salon', 'Plumber', 'Venue'].map((label, index) => (
              <div key={label} className={`rounded-lg border border-[var(--editable-border)] bg-white p-4 shadow-sm ${index % 2 ? 'mt-10' : ''}`}>
                <Building2 className="h-7 w-7 text-[var(--slot4-accent)]" />
                <p className="mt-8 text-sm font-black">{label}</p>
                <p className="mt-1 text-xs font-bold text-[var(--slot4-muted-text)]">Near you</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(0, 9)
  if (!railPosts.length) return null
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-[-0.04em]">Claim Your Free Business Listing</h2>
          <p className="mt-3 text-sm font-semibold text-[var(--slot4-muted-text)]">Boost local visibility, strengthen citations, and get found by more customers in under 60 seconds.</p>
          <Link href="/create" className="mt-6 inline-flex rounded-full bg-[var(--slot4-accent-fill)] px-10 py-4 text-sm font-black text-white shadow-md">Get Your Free Business Listing <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-sm font-black text-[var(--slot4-muted-text)]"><span className="h-3 w-3 bg-[var(--slot4-accent-fill)]" /> What our customers are saying</p>
            <h2 className="mt-3 max-w-2xl text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">Our dedication to helping businesses succeed shows in local listing results.</h2>
          </div>
          <div className="grid gap-4">
            {testimonials.map(([name, quote]) => (
              <article key={name} className="rounded-lg border border-[var(--editable-border)] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-1 text-[var(--slot4-accent)]">{Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}</div>
                <h3 className="mt-2 text-sm font-black">{name}</h3>
                <p className="mt-1 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{quote}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-black tracking-[-0.03em]">Recently Updated Businesses</h2>
          <Link href={primaryRoute} className="hidden text-sm font-black text-[var(--slot4-accent)] hover:underline sm:inline">View all {taskLabel(primaryTask).toLowerCase()}</Link>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {railPosts.map((post) => <BusinessMiniCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  return (
    <section className="bg-[var(--slot4-panel-bg)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-black text-[var(--slot4-muted-text)]"><span className="h-3 w-3 bg-[var(--slot4-accent-fill)]" /> Take it further</p>
            <h2 className="mt-3 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl">Use listing details to build trust across local search.</h2>
            <p className="mt-5 text-base font-semibold leading-8 text-[var(--slot4-muted-text)]">Complete profiles help customers understand your services before they call. Add categories, hours, service areas, photos, and contact details that stay easy to scan.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              [ShieldCheck, 'Verified details', 'Keep contact and location information clear.'],
              [TrendingUp, 'More visibility', 'Make services easier to discover in search.'],
              [CheckCircle2, 'Better decisions', 'Help customers compare with confidence.'],
            ].map(([Icon, title, body]) => (
              <article key={String(title)} className="rounded-lg border border-[var(--editable-border)] bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-[var(--slot4-accent)]" />
                <h3 className="mt-8 text-xl font-black tracking-[-0.03em]">{title as string}</h3>
                <p className="mt-3 text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{body as string}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const categoryPosts = timeSections.flatMap((section) => section.posts).length ? timeSections.flatMap((section) => section.posts) : posts.slice(9)
  const morePosts = categoryPosts.slice(0, 6)
  return (
    <section className={pal.warmBg}>
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="flex items-center gap-2 text-sm font-black text-[var(--slot4-muted-text)]"><span className="h-3 w-3 bg-[var(--slot4-accent-fill)]" /> Browse by category</p>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em]">Find the right local service faster.</h2>
            <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {['Restaurant', 'Roofing Contractor', 'Real Estate Agency', 'Cleaning Service', 'Hair Salon', 'Plumber', 'Electrician', 'Florist', 'Auto Repair Shop'].map((label) => (
                <Link key={label} href={`/search?q=${encodeURIComponent(label)}`} className="rounded-lg border border-[var(--editable-border)] bg-white px-4 py-3 text-sm font-black shadow-sm hover:border-[var(--slot4-accent)]">{label}</Link>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {morePosts.map((post) => <BusinessMiniCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section id="get-app" className="bg-[var(--slot4-panel-bg)]">
      <div className="mx-auto max-w-[var(--editable-container)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm font-black text-[var(--slot4-muted-text)]"><span className="h-3 w-3 bg-[var(--slot4-accent-fill)]" /> Local SEO Learning Center</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">Learn how better listings bring better local discovery.</h2>
          </div>
          <Link href="/create" className="hidden rounded-full bg-[var(--slot4-dark-bg)] px-6 py-3 text-sm font-black text-white sm:inline-flex">Create listing</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {learningCards.map((card) => <LearningCard key={card.title} {...card} />)}
        </div>
        <div className="mt-12 rounded-lg border border-[var(--editable-border)] bg-white p-8 text-center shadow-sm">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--slot4-accent)]">{slot4BrandConfig.siteName}</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em]">{pagesContent.home.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-7 text-[var(--slot4-muted-text)]">{pagesContent.home.cta.description}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href={pagesContent.home.cta.primaryCta.href} className="rounded-full bg-[var(--slot4-accent-fill)] px-7 py-3 text-sm font-black text-white">{pagesContent.home.cta.primaryCta.label}</Link>
            <Link href={pagesContent.home.cta.secondaryCta.href} className="rounded-full border border-[var(--editable-border)] px-7 py-3 text-sm font-black">{pagesContent.home.cta.secondaryCta.label}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
