import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  Bot,
  Clapperboard,
  Film,
  Layers3,
  Mail,
  Play,
  Sparkles,
  Wand2,
} from 'lucide-react';
import './styles.css';

const works = [
  {
    title: 'Brand Launch Film',
    category: 'Generative Commercial',
    description: '제품 메시지를 30초 쇼릴로 압축한 AI 콘셉트 영상.',
    metric: '12 scenes',
    tone: 'teal',
  },
  {
    title: 'Music Visual Loop',
    category: 'Realtime Visualizer',
    description: '비트 변화에 맞춰 반복 재생되는 숏폼 배경 영상.',
    metric: '4K loop',
    tone: 'coral',
  },
  {
    title: 'Architecture Mood',
    category: 'Concept Visualization',
    description: '공간 브랜딩을 위한 시네마틱 무드 프리뷰.',
    metric: '9 cuts',
    tone: 'gold',
  },
];

const process = [
  { icon: Bot, title: 'Brief', text: '목표, 타깃, 톤을 영상 언어로 정리합니다.' },
  { icon: Wand2, title: 'Prompt', text: '샷 단위 프롬프트와 레퍼런스 보드를 설계합니다.' },
  { icon: Layers3, title: 'Edit', text: '생성 컷을 편집, 보정, 사운드와 함께 완성합니다.' },
];

function ReelVisual() {
  const frames = ['A01', 'B04', 'C12', 'D07'];

  return (
    <div className="reel-visual" aria-label="AI 영상 쇼릴 미리보기">
      <div className="preview-stage">
        <div className="scanner" />
        <div className="play-chip">
          <Play size={16} fill="currentColor" />
          <span>Showreel</span>
        </div>
        <div className="frame-main">
          <div className="orbital-ring" />
          <div className="video-core">
            <Sparkles size={26} />
          </div>
        </div>
      </div>
      <div className="timeline">
        {frames.map((frame, index) => (
          <div className="clip" key={frame}>
            <span>{frame}</span>
            <i style={{ '--delay': `${index * 0.18}s` }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <main>
      <nav className="topbar" aria-label="주요 메뉴">
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
          <h1>아이디어를 움직이는 영상으로 바꿉니다.</h1>
          <p className="lead">
            생성형 AI, 편집, 모션 디자인을 결합해 브랜드 캠페인부터 숏폼
            비주얼까지 빠르게 프로토타입하고 완성합니다.
          </p>
          <div className="actions">
            <a className="primary-button" href="#work">
              <Film size={18} />
              작업 보기
            </a>
            <a className="ghost-button" href="mailto:hello@example.com">
              <Mail size={18} />
              문의하기
            </a>
          </div>
        </div>
        <ReelVisual />
      </section>

      <section className="stats" aria-label="주요 성과">
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
          <h2>캠페인에 바로 붙일 수 있는 영상 결과물</h2>
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
                <a href="#contact" aria-label={`${work.title} 문의하기`}>
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
          <h2>기획부터 납품까지 한 흐름으로</h2>
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
          <h2>새로운 영상 프로젝트를 준비 중인가요?</h2>
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
