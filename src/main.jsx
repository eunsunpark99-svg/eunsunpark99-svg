import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Film,
  Layers3,
  Mail,
  Wand2,
} from 'lucide-react';
import './styles.css';

const heroWorks = [
  { artist: 'Doi Seo', title: 'Still World', date: '6.18-8.1', palette: 'bone' },
  { artist: 'Kim Hye', title: 'Quiet Index', date: '6.21-8.4', palette: 'cyan' },
  { artist: 'Lee June', title: 'Room for Light', date: '6.24-8.7', palette: 'rose' },
  { artist: 'Park Sol', title: 'After Image', date: '6.27-8.10', palette: 'ink' },
  { artist: 'Han Yul', title: 'Layered Air', date: '6.30-8.13', palette: 'olive' },
  { artist: 'Cho Min', title: 'Pale Signal', date: '7.3-8.16', palette: 'violet' },
  { artist: 'Yoon Rae', title: 'Line Archive', date: '7.6-8.19', palette: 'amber' },
  { artist: 'Jang One', title: 'Open Surface', date: '7.9-8.22', palette: 'blue' },
  { artist: 'Seo Doi', title: 'World Without Map', date: '7.12-8.25', palette: 'bone' },
  { artist: 'Moon A', title: 'Soft Frame', date: '7.15-8.28', palette: 'cyan' },
  { artist: 'Lim Ho', title: 'Low Horizon', date: '7.18-8.31', palette: 'rose' },
  { artist: 'Baek Eon', title: 'Object Study', date: '7.21-9.3', palette: 'ink' },
  { artist: 'Kwon Na', title: 'Daily Passage', date: '7.24-9.6', palette: 'olive' },
  { artist: 'Shin Woo', title: 'Folded Time', date: '7.27-9.9', palette: 'violet' },
  { artist: 'Oh Rin', title: 'Glass Field', date: '7.30-9.12', palette: 'amber' },
  { artist: 'Jeon I', title: 'Flat Garden', date: '8.2-9.15', palette: 'blue' },
  { artist: 'Yoo Sae', title: 'Between Walls', date: '8.5-9.18', palette: 'bone' },
  { artist: 'Nam Ki', title: 'Night Paper', date: '8.8-9.21', palette: 'cyan' },
  { artist: 'Ryu Won', title: 'Archive Note', date: '8.11-9.24', palette: 'rose' },
  { artist: 'Chae Lin', title: 'Standing Wave', date: '8.14-9.27', palette: 'olive' },
];

const works = [
  {
    title: 'Reservation Manager',
    category: 'React Practice App',
    description:
      '예약자 이름, 날짜, 시간, 인원 수를 입력하고 예약을 등록, 수정, 삭제할 수 있는 React 실습 앱입니다.',
    metric: 'React app',
    tone: 'teal',
    url: 'https://eunsunpark99-svg.github.io/reservation-app/',
  },
  {
    title: 'Brand Launch Film',
    category: 'Generative Commercial',
    description:
      'A short AI commercial package built around product messaging and crisp scene design.',
    metric: '12 scenes',
    tone: 'teal',
  },
  {
    title: 'Music Visual Loop',
    category: 'Realtime Visualizer',
    description:
      'A rhythmic loop system for performances, social clips, and event screens.',
    metric: '4K loop',
    tone: 'coral',
  },
  {
    title: 'Architecture Mood',
    category: 'Concept Visualization',
    description:
      'Cinematic spatial previews for brand mood, lighting, and material direction.',
    metric: '9 cuts',
    tone: 'gold',
  },
];

const process = [
  {
    icon: Bot,
    title: 'Brief',
    text: 'Goals, audience, and references are translated into a clear visual direction.',
  },
  {
    icon: Wand2,
    title: 'Prompt',
    text: 'Scene prompts and art direction boards define the look before production.',
  },
  {
    icon: Layers3,
    title: 'Edit',
    text: 'Generated clips are edited, color tuned, and prepared for delivery.',
  },
];

function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(8);
  const currentWork = heroWorks[currentIndex];

  const showWork = (index) => {
    setCurrentIndex(index);
  };

  const showPrevious = () => {
    setCurrentIndex((index) => (index === 0 ? heroWorks.length - 1 : index - 1));
  };

  const showNext = () => {
    setCurrentIndex((index) => (index + 1) % heroWorks.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % heroWorks.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="neolook-hero" aria-label="Featured artwork slideshow">
      <figure className={`artwork-panel ${currentWork.palette}`}>
        <div className="artwork-image" aria-hidden="true" />
        <figcaption>
          <div className="artist-label">
            <strong>Seo Doi</strong>
            <span>{currentWork.artist}</span>
          </div>
          <p>{currentWork.title}</p>
          <div className="poster-title">
            <span>2026</span>
            <strong>OCI YOUNG</strong>
            <strong>CREATIVES</strong>
          </div>
          <div className="date-label">
            <strong>{currentWork.date}</strong>
            <span>ARTISTOUR</span>
            <span>7.11 3PM SAT</span>
          </div>
        </figcaption>
      </figure>

      <div className="slide-footer">
        <div className="slide-controls" aria-label="Artwork controls">
          <button type="button" onClick={showPrevious}>
            backward
          </button>

          <span className="control-arrow arrow-left" aria-hidden="true" />

          <button
            type="button"
            className="current-page-button"
            onClick={() => showWork(currentIndex)}
            aria-label={`Current artwork ${currentIndex + 1}`}
          >
            {String(currentIndex + 1).padStart(2, '0')}/{heroWorks.length}
          </button>

          <span className="control-arrow arrow-right" aria-hidden="true" />

          <button type="button" onClick={showNext}>
            forward
          </button>
        </div>

        <div className="slide-numbers" aria-label="Artwork page numbers">
          {heroWorks.map((work, index) => (
            <button
              type="button"
              className={index === currentIndex ? 'active' : ''}
              key={work.title}
              onClick={() => showWork(index)}
              aria-label={`Show artwork ${index + 1}`}
              aria-current={index === currentIndex ? 'true' : undefined}
            >
              {String(index + 1).padStart(2, '0')}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#top">
          <Clapperboard size={22} />
          <span>AI Motion Lab</span>
        </a>

        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI Video Director Portfolio</p>

          <h1>Ideas become cinematic AI video.</h1>

          <p className="lead">
            Generative AI, editing, and motion design come together for brand campaigns,
            reels, and visual systems that can move quickly from concept to launch.
          </p>

          <div className="actions">
            <a className="primary-button" href="#work">
              <Film size={18} />
              View work
            </a>

            <a className="ghost-button" href="mailto:hello@example.com">
              <Mail size={18} />
              Contact
            </a>
          </div>
        </div>

        <HeroSlideshow />
      </section>

      <section className="stats" aria-label="Key stats">
        <div>
          <strong>48+</strong>
          <span>AI video assets</span>
        </div>

        <div>
          <strong>15 sec</strong>
          <span>short-form package</span>
        </div>

        <div>
          <strong>4K</strong>
          <span>delivery ready</span>
        </div>
      </section>

      <section className="section" id="work">
        <div className="section-heading">
          <p className="eyebrow">Selected Work</p>

          <h2>Video outcomes ready for campaigns and screens.</h2>
        </div>

        <div className="work-grid">
          {works.map((work) => (
            <article className={`work-card ${work.tone}`} key={work.title}>
              <div className="thumb">
                <span>{work.category}</span>
              </div>

              <div className="work-card-body">
                <div>
                  <p>{work.metric}</p>
                  <h3>{work.title}</h3>
                </div>

                <a
                  href={work.url || '#contact'}
                  target={work.url ? '_blank' : undefined}
                  rel={work.url ? 'noreferrer' : undefined}
                  aria-label={`Open ${work.title}`}
                >
                  <ArrowUpRight size={20} />
                </a>
              </div>

              <p className="work-desc">{work.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-band" id="process">
        <div className="section-heading">
          <p className="eyebrow">Workflow</p>

          <h2>From brief to delivery in one clear flow.</h2>
        </div>

        <div className="process-grid">
          {process.map(({ icon: Icon, title, text }) => (
            <article className="process-item" key={title}>
              <div className="icon-box">
                <Icon size={22} />
              </div>

              <h3>{title}</h3>

              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <p className="eyebrow">Collaboration</p>

          <h2>Preparing a new video project?</h2>
        </div>

        <a className="primary-button" href="mailto:hello@example.com">
          <Mail size={18} />
          hello@example.com
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);