import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const navItems = [
  { label: '精选合集', href: '#selection' },
  { label: '代表作品', href: '#featured' },
  { label: '其他代表作品', href: '#other-works' },
  { label: '调色静帧演示', href: '#color-stills' },
  { label: '拍摄过的素材', href: '#shot-materials' },
  { label: '以及', href: '#memory' },
]

const otherWorks = [
  {
    id: 'other-weeds',
    number: '01',
    title: '野草',
    displayTitle: '《野草》',
    role: '担任:导演',
    image: '/assets/other-weeds.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746249&mid=NK0mw6RpVNDwW1na',
  },
  {
    id: 'other-wild-growth',
    number: '02',
    title: '野蛮生长',
    displayTitle: '《野蛮生长》',
    role: '担任:DP摄影指导',
    image: '/assets/other-wild-growth.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746255&mid=jlyzw0zjLXKQB198',
  },
  {
    id: 'other-liangshan',
    number: '03',
    title: '“绣”出凉山',
    displayTitle: '《“绣”出凉山》',
    role: '担任:导演',
    image: '/assets/other-liangshan.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746238&mid=2MmN45kEBpY7X0zL',
  },
  {
    id: 'other-black-white-grid',
    number: '04',
    title: '黑白格',
    displayTitle: '《黑白格》',
    role: '担任:摄影助理',
    image: '/assets/other-black-white-grid.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746829&mid=O5vZQVJmNLEQDEMW',
  },
  {
    id: 'other-fate-journey',
    number: '05',
    title: '缘分的奇妙之旅',
    displayTitle: '《缘分的奇妙之旅》',
    role: '担任:DP摄影指导',
    image: '/assets/other-fate-journey.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746254&mid=9WxJ7lVGxpq481kM',
  },
  {
    id: 'other-xun',
    number: '06',
    title: '荨',
    displayTitle: '《荨》',
    role: '担任:摄影助理',
    image: '/assets/other-xun.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746250&mid=bKG8QdM1LgP7RJMy',
  },
  {
    id: 'other-ulysses-list',
    number: '07',
    title: '尤利西斯的清单',
    displayTitle: '《尤利西斯的清单》',
    role: '担任:DP摄影指导',
    image: '/assets/other-ulysses-list.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746251&mid=n2k9QAVMEPe718MZ',
  },
  {
    id: 'other-home-letters',
    number: '08',
    title: '家书',
    displayTitle: '《家书》',
    role: '担任:A机掌机',
    image: '/assets/other-home-letters.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746253&mid=GKL87NomLAlwojJz',
  },
  {
    id: 'other-father-night',
    number: '09',
    title: '关于父亲的一夜',
    displayTitle: '《关于父亲的一夜》',
    role: '担任:跟焦员',
    image: '/assets/other-father-night.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746257&mid=DaLZwPqm8bR4nrjY',
  },
  {
    id: 'other-road-end',
    number: '10',
    title: '一直开到路的尽头',
    displayTitle: '《一直开到路的尽头》',
    role: '担任:灯光助理',
    image: '/assets/other-road-end.jpg',
    embedSrc: 'https://player.xinpianchang.com/?aid=13746258&mid=v9GZQRo8kL57WnAR',
  },
]

const colorFrameSets = [
  ['/assets/color-frame-1.jpg', '/assets/color-frame-2.jpg', '/assets/color-frame-3.jpg'],
  ['/assets/color-frame-4.jpg', '/assets/color-frame-5.jpg', '/assets/color-frame-6.jpg'],
]

const dayNightFrameSets = [
  ['/assets/day-night-1.jpg', '/assets/day-night-2.jpg', '/assets/day-night-3.jpg'],
  ['/assets/day-night-4.jpg', '/assets/day-night-5.jpg', '/assets/day-night-6.jpg'],
  ['/assets/day-night-7.jpg', '/assets/day-night-8.jpg', '/assets/day-night-9.jpg'],
]

const thumbnailFrames = Array.from({ length: 12 }, (_, index) => `/assets/thumb-frame-${index + 1}.jpg`)

const blackPlayOtherWorkIds = new Set(['other-weeds', 'other-wild-growth', 'other-fate-journey', 'other-xun', 'other-home-letters'])

function Nav() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="/" aria-label="無尽探索 無限進步">
          <span className="brand-name">朱瑞哲</span>
          <img className="brand-hover-image" src="/assets/brand-hover.png" alt="無尽探索 無限進步" />
        </a>
        <nav className="nav-links" aria-label="主导航">
          {navItems.map((item) => (
            <a className="nav-link" key={item.label} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function SectionTitle({ english, chinese }) {
  return (
    <div className="section-title">
      <p>{english}</p>
      <h2>{chinese}</h2>
    </div>
  )
}

function goBackToPortfolio(fallbackHash = '#selection') {
  if (window.history.length > 1) {
    window.history.back()
    return
  }

  window.location.href = `/${fallbackHash}`
}

function openOnDoubleClick(event, href) {
  event.preventDefault()
  window.location.href = href
}

function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal-on-scroll')

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      },
    )

    revealItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])
}

function PlayIcon({ variant = 'light' }) {
  const src = variant === 'black' ? '/assets/play-icon-black.png' : '/assets/play-icon.png'

  return <img className="play-icon" src={src} alt="" aria-hidden="true" />
}

function ClapHand() {
  return <img className="clap-hand" src="/assets/clap-hand.png" alt="" aria-hidden="true" />
}

function OtherWorks() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = otherWorks[activeIndex]
  const previous = otherWorks[(activeIndex - 1 + otherWorks.length) % otherWorks.length]
  const next = otherWorks[(activeIndex + 1) % otherWorks.length]

  const move = (direction) => {
    setActiveIndex((current) => (current + direction + otherWorks.length) % otherWorks.length)
  }

  return (
    <section className="other-works reveal-on-scroll" id="other-works">
      <SectionTitle english="OTHER WORKS" chinese="其他代表作品" />
      <div className="other-carousel">
        <div className="side-preview side-preview-left" aria-hidden="true">
          <img src={previous.image} alt="" />
        </div>
        <button className="carousel-arrow carousel-arrow-left" type="button" aria-label="上一张" onClick={() => move(-1)}>
          ‹
        </button>
        <a className="other-main-card" href={`/${active.id}/`} onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, `/${active.id}/`)}>
          <span className="work-number">{active.number}</span>
          <img className="other-main-image" src={active.image} alt={active.displayTitle} />
          <PlayIcon variant={blackPlayOtherWorkIds.has(active.id) ? 'black' : 'light'} />
        </a>
        <button className="carousel-arrow carousel-arrow-right" type="button" aria-label="下一张" onClick={() => move(1)}>
          ›
        </button>
        <div className="side-preview side-preview-right" aria-hidden="true">
          <span className="side-number">{next.number}</span>
          <img src={next.image} alt="" />
        </div>
      </div>
      <div className="other-caption">
        <div className="other-caption-inner">
          <span className="c-mark" aria-hidden="true"></span>
          <div className="other-caption-text">
            <span>{active.role}</span>
            <strong>{active.displayTitle}</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function FilmStage({ frames, effect, dissolveFrames }) {
  return (
    <div className="film-stage">
      {effect === 'dissolve' &&
        dissolveFrames?.map((frame, index) => (
          <img key={`dissolve-${frame}-${index}`} className={`film-frame film-frame-${index + 1} dissolve-frame`} src={frame} alt="" />
        ))}
      {frames.map((frame, index) => (
        <img key={`${frame}-${index}`} className={`film-frame film-frame-${index + 1}`} src={frame} alt="" />
      ))}
      <img className="film-strip" src="/assets/film-strip.png" alt="" aria-hidden="true" />
      <span className="film-flash" aria-hidden="true"></span>
    </div>
  )
}

function DayNightDemo() {
  const [activeSet, setActiveSet] = useState(0)
  const [effect, setEffect] = useState('')
  const [dissolveTarget, setDissolveTarget] = useState(null)
  const frames = dayNightFrameSets[activeSet]
  const dissolveFrames = dissolveTarget === null ? null : dayNightFrameSets[dissolveTarget]

  const changeSet = (targetSet) => {
    if (effect) return

    if (activeSet === targetSet) {
      setDissolveTarget(0)
      setEffect('dissolve')
      window.setTimeout(() => setActiveSet(0), 760)
      window.setTimeout(() => {
        setEffect('')
        setDissolveTarget(null)
      }, 780)
      return
    }

    setEffect('flash')
    window.setTimeout(() => setActiveSet(targetSet), 220)
    window.setTimeout(() => setEffect(''), 720)
  }

  return (
    <div className={`film-demo day-night-demo ${effect}`}>
      <FilmStage frames={frames} effect={effect} dissolveFrames={dissolveFrames} />
      <div className="dual-toggle-row">
        <button className="color-toggle day-night-toggle" type="button" onClick={() => changeSet(1)} aria-label="切换到第一组日转夜静帧">
          <img className="color-button-image" src="/assets/color-button.png" alt="TRY" />
          <ClapHand />
        </button>
        <button className="color-toggle day-night-toggle" type="button" onClick={() => changeSet(2)} aria-label="切换到第二组日转夜静帧">
          <img className="color-button-image" src="/assets/color-button.png" alt="TRY" />
          <ClapHand />
        </button>
      </div>
    </div>
  )
}

function ThumbnailFilmStrip() {
  return (
    <div className="thumbnail-film-stage">
      {thumbnailFrames.map((frame, index) => (
        <img key={frame} className={`thumbnail-frame thumbnail-frame-${index + 1}`} src={frame} alt="" />
      ))}
      <img className="double-film-strip" src="/assets/double-film-strip.png" alt="" aria-hidden="true" />
    </div>
  )
}

function ColorStills() {
  const [graded, setGraded] = useState(false)
  const [effect, setEffect] = useState('')
  const frames = colorFrameSets[graded ? 1 : 0]
  const dissolveFrames = colorFrameSets[0]

  const toggleFrames = () => {
    if (effect) return

    if (!graded) {
      setEffect('flash')
      window.setTimeout(() => setGraded(true), 220)
      window.setTimeout(() => setEffect(''), 720)
      return
    }

    setEffect('dissolve')
    window.setTimeout(() => setGraded(false), 760)
    window.setTimeout(() => setEffect(''), 780)
  }

  return (
    <section className="color-stills reveal-on-scroll" id="color-stills">
      <SectionTitle english="COLOR STILLS" chinese="调色静帧演示" />
      <div className={`film-demo ${effect}`}>
        <FilmStage frames={frames} effect={effect} dissolveFrames={dissolveFrames} />
        <button className="color-toggle" type="button" onClick={toggleFrames} aria-label="切换调色静帧">
          <img className="color-button-image" src="/assets/color-button.png" alt="TRY" />
          <ClapHand />
        </button>
      </div>
      <DayNightDemo />
      <ThumbnailFilmStrip />
    </section>
  )
}

function ShotMaterials() {
  return (
    <section className="shot-materials reveal-on-scroll" id="shot-materials">
      <SectionTitle english="SHOT MATERIALS" chinese="拍摄过的素材" />
      <a className="shot-materials-card" href="/shot-materials/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/shot-materials/')}>
        <img className="shot-materials-image" src="/assets/shot-materials-33.jpg" alt="拍摄过的素材" />
        <img className="shot-materials-type" src="/assets/shot-materials-type.png" alt="星空与深空摄影 延时摄影&自然风光 星空 自然 时间" />
        <PlayIcon />
      </a>
    </section>
  )
}

function MemorySection() {
  return (
    <section className="memory-section reveal-on-scroll" id="memory">
      <SectionTitle english="AND" chinese="以及" />
      <a className="memory-card" href="/memory/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/memory/')}>
        <img className="memory-image" src="/assets/memory.jpg" alt="回忆" />
        <img className="memory-type" src="/assets/memory-type.png" alt="回忆" />
      </a>
    </section>
  )
}

function HomePage() {
  useScrollReveal()
  const heroMarkRef = useRef(null)
  const heroMotionRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    frame: 0,
  })

  useEffect(() => {
    return () => {
      if (heroMotionRef.current.frame) {
        window.cancelAnimationFrame(heroMotionRef.current.frame)
      }
    }
  }, [])

  const renderHeroMarkMotion = () => {
    const mark = heroMarkRef.current
    if (!mark) return

    const motion = heroMotionRef.current
    motion.currentX += (motion.targetX - motion.currentX) * 0.12
    motion.currentY += (motion.targetY - motion.currentY) * 0.12

    const x = Math.abs(motion.currentX) < 0.001 ? 0 : motion.currentX
    const y = Math.abs(motion.currentY) < 0.001 ? 0 : motion.currentY
    const leftDepth = Math.max(0, -x)
    const rightDepth = Math.max(0, x)
    const verticalDepth = Math.abs(y)

    mark.style.setProperty('--hero-x', x.toFixed(4))
    mark.style.setProperty('--hero-y', y.toFixed(4))
    mark.style.setProperty('--hero-left-depth', leftDepth.toFixed(4))
    mark.style.setProperty('--hero-right-depth', rightDepth.toFixed(4))
    mark.style.setProperty('--hero-vertical-depth', verticalDepth.toFixed(4))

    if (Math.abs(motion.targetX - motion.currentX) > 0.002 || Math.abs(motion.targetY - motion.currentY) > 0.002) {
      motion.frame = window.requestAnimationFrame(renderHeroMarkMotion)
      return
    }

    motion.currentX = motion.targetX
    motion.currentY = motion.targetY
    motion.frame = 0
  }

  const startHeroMarkMotion = () => {
    const motion = heroMotionRef.current
    if (!motion.frame) {
      motion.frame = window.requestAnimationFrame(renderHeroMarkMotion)
    }
  }

  const updateHeroMarkStretch = (event) => {
    const mark = heroMarkRef.current
    if (!mark) return

    const rect = mark.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const dx = Math.max(-1, Math.min(1, (event.clientX - centerX) / (rect.width * 0.78)))
    const dy = Math.max(-1, Math.min(1, (event.clientY - centerY) / (rect.height * 1.35)))

    heroMotionRef.current.targetX = dx
    heroMotionRef.current.targetY = dy
    startHeroMarkMotion()
  }

  const resetHeroMarkStretch = () => {
    heroMotionRef.current.targetX = 0
    heroMotionRef.current.targetY = 0
    startHeroMarkMotion()
  }

  return (
    <>
      <Nav />
      <main>
        <section className="hero" aria-label="首页视频" onPointerMove={updateHeroMarkStretch} onPointerLeave={resetHeroMarkStretch}>
          <video className="hero-video" src="/assets/hero-video.mp4" autoPlay muted loop playsInline />
          <button className="hero-mark" type="button" aria-label="无尽探索 无限进步" ref={heroMarkRef}>
            <span className="hero-mark-layer hero-mark-layer-left" aria-hidden="true"></span>
            <span className="hero-mark-layer hero-mark-layer-right" aria-hidden="true"></span>
            <span className="hero-mark-text">無尽探索 無限進步</span>
          </button>
        </section>

        <section className="selection reveal-on-scroll" id="selection">
          <SectionTitle english="SELECTION" chinese="精选合集" />
          <a className="selection-card" href="/selection/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/selection/')}>
            <span className="play-image-frame">
              <img src="/assets/selection-cover.jpg" alt="精选合集" />
              <PlayIcon />
            </span>
          </a>
        </section>

        <section className="featured reveal-on-scroll" id="featured">
          <SectionTitle english="FEATURED WORKS" chinese="代表作品" />
          <div className="featured-grid">
            <a className="work-card" href="/wild-grass/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/wild-grass/')}>
              <span className="play-image-frame work-image-frame">
                <img src="/assets/wild-grass.jpg" alt="故事片代表作《野草》" />
                <PlayIcon />
              </span>
              <div className="featured-caption">
                <span className="featured-mark" aria-hidden="true"></span>
                <div className="featured-caption-text">
                  <span>担任:导演</span>
                  <strong>故事片代表作《野草》</strong>
                </div>
              </div>
            </a>
            <a className="work-card" href="/heart-home/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/heart-home/')}>
              <span className="play-image-frame work-image-frame">
                <img src="/assets/heart-home.jpg" alt="故事片代表作《何以栖心》" />
                <PlayIcon variant="black" />
              </span>
              <div className="featured-caption">
                <span className="featured-mark" aria-hidden="true"></span>
                <div className="featured-caption-text">
                  <span>担任:DP摄影指导</span>
                  <strong>故事片代表作《何以栖心》</strong>
                </div>
              </div>
            </a>
          </div>
          <a className="work-card work-card-wide" href="/under-sky/" onClick={(event) => event.preventDefault()} onDoubleClick={(event) => openOnDoubleClick(event, '/under-sky/')}>
            <span className="play-image-frame work-image-frame">
              <img src="/assets/under-sky.jpg" alt="纪录片代表作《苍穹之下》" />
              <PlayIcon />
            </span>
            <div className="featured-caption featured-caption-wide">
              <span className="featured-mark" aria-hidden="true"></span>
              <div className="featured-caption-text">
                <span>担任:导演</span>
                <strong>纪录片代表作《苍穹之下》</strong>
              </div>
            </div>
          </a>
        </section>
        <OtherWorks />
        <ColorStills />
        <ShotMaterials />
        <MemorySection />
      </main>
    </>
  )
}

function DetailPage({ english, title, embedSrc, image, imageAlt = '', imageVariant = '', description, backTarget = '#selection', hideCopy = false }) {
  return (
    <>
      <Nav />
      <main className="detail-page">
        <div className="detail-inner">
          <button className="back-button" type="button" onDoubleClick={() => goBackToPortfolio(backTarget)}>
            返回作品集
          </button>
          <div className="detail-heading">
            <p>{english}</p>
            <h1>{title}</h1>
          </div>
          {embedSrc ? (
            <div className="detail-video-frame">
              <iframe className="detail-video detail-embed" src={embedSrc} title={title} allowFullScreen allow="autoplay; fullscreen; picture-in-picture; encrypted-media" frameBorder="0"></iframe>
            </div>
          ) : image ? (
            <div className={`detail-image-frame ${imageVariant ? `detail-image-frame-${imageVariant}` : ''}`}>
              <img className={`detail-image ${imageVariant ? `detail-image-${imageVariant}` : ''}`} src={image} alt={imageAlt || title} />
            </div>
          ) : (
            <div className="video-placeholder">视频素材待补充</div>
          )}
          {!hideCopy && (
            <section className="detail-copy">
              <h2>作品简介</h2>
              <p>{description}</p>
            </section>
          )}
        </div>
      </main>
    </>
  )
}

function App() {
  const path = window.location.pathname

  if (path.startsWith('/selection')) {
    return (
      <DetailPage
        english="SELECTION"
        title="精选合集"
        embedSrc="https://player.xinpianchang.com/?aid=13746217&mid=E6WlQgl3EL17gdJz"
        description="精选合集。"
        backTarget="#selection"
        hideCopy
      />
    )
  }

  if (path.startsWith('/wild-grass')) {
    return (
      <DetailPage
        english="FEATURED WORKS"
        title="野草"
        embedSrc="https://player.xinpianchang.com/?aid=13746210&mid=O5vZQVJmD00QDEMW"
        description="故事片代表作《野草》，担任:导演。"
        backTarget="#featured"
      />
    )
  }

  if (path.startsWith('/shot-materials')) {
    return (
      <DetailPage
        english="SHOT MATERIALS"
        title="拍摄过的素材"
        embedSrc="https://player.xinpianchang.com/?aid=13746239&mid=NK0mw6RpZMDwW1na"
        description="星空与深空摄影、延时摄影和自然风光素材合集。"
        backTarget="#shot-materials"
      />
    )
  }

  if (path.startsWith('/memory')) {
    return (
      <DetailPage
        english="AND"
        title="回忆"
        image="/assets/memory-film.png"
        imageAlt="胶片回忆"
        imageVariant="memory"
        description="回忆。"
        backTarget="#memory"
      />
    )
  }

  if (path.startsWith('/heart-home')) {
    return (
      <DetailPage
        english="FEATURED WORKS"
        title="何以栖心"
        embedSrc="https://player.xinpianchang.com/?aid=13746229&mid=rVo9wyBRero4l5PG"
        description="故事片代表作《何以栖心》，担任:DP摄影指导。"
        backTarget="#featured"
      />
    )
  }

  if (path.startsWith('/under-sky')) {
    return (
      <DetailPage
        english="FEATURED WORKS"
        title="苍穹之下"
        embedSrc="https://player.xinpianchang.com/?aid=13746256&mid=Xl5M7nMox16QkKEg"
        description="纪录片代表作《苍穹之下》，担任:导演。"
        backTarget="#featured"
      />
    )
  }

  const otherWork = otherWorks.find((work) => path.startsWith(`/${work.id}`))
  if (otherWork) {
    return (
      <DetailPage
        english="OTHER WORKS"
        title={otherWork.title}
        embedSrc={otherWork.embedSrc}
        description={`${otherWork.displayTitle}，${otherWork.role}。`}
        backTarget="#other-works"
      />
    )
  }

  return <HomePage />
}

createRoot(document.getElementById('root')).render(<App />)
