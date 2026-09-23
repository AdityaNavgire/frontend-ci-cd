import './App.css'

type IconName = 'grid' | 'chart' | 'folder' | 'settings' | 'bell' | 'arrow' | 'more'

function Icon({ name }: { name: IconName }) {
  const paths = {
    grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    chart: <><path d="M4 19V5" /><path d="M4 19h16" /><path d="m7 15 4-4 3 2 5-6" /></>,
    folder: <path d="M3 7.5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" />,
    settings: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.12 2.12-.06-.06a1.7 1.7 0 0 0-1.88-.34 1.7 1.7 0 0 0-1.03 1.56V20.3h-3v-.08A1.7 1.7 0 0 0 10.68 18.66a1.7 1.7 0 0 0-1.88.34l-.06.06-2.12-2.12.06-.06A1.7 1.7 0 0 0 7.02 15a1.7 1.7 0 0 0-1.56-1.03h-.08v-3h.08A1.7 1.7 0 0 0 7.02 9.94a1.7 1.7 0 0 0-.34-1.88l-.06-.06 2.12-2.12.06.06a1.7 1.7 0 0 0 1.88.34 1.7 1.7 0 0 0 1.03-1.56v-.08h3v.08a1.7 1.7 0 0 0 1.03 1.56 1.7 1.7 0 0 0 1.88-.34l.06-.06 2.12 2.12-.06.06a1.7 1.7 0 0 0-.34 1.88 1.7 1.7 0 0 0 1.56 1.03h.08v3h-.08A1.7 1.7 0 0 0 19.4 15Z" /></>,
    bell: <><path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    more: <><circle cx="5" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="19" cy="12" r="1" fill="currentColor" /></>,
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

const metrics = [['Total revenue', '$48,574', '+12.5%', 'positive'], ['Active customers', '2,420', '+8.2%', 'positive'], ['Conversion rate', '3.68%', '-0.4%', 'negative']]

function App() {
  return <main className="dashboard-shell">
    <aside className="sidebar"><a className="brand" href="#dashboard"><span>F</span>flowbase</a><nav aria-label="Main navigation"><a className="nav-link active" href="#dashboard"><Icon name="grid" />Overview</a><a className="nav-link" href="#analytics"><Icon name="chart" />Analytics</a><a className="nav-link" href="#projects"><Icon name="folder" />Projects</a></nav><a className="nav-link settings" href="#settings"><Icon name="settings" />Settings</a><div className="profile"><div className="avatar">AM</div><div><strong>Alex Morgan</strong><small>Admin account</small></div><span className="profile-more">•••</span></div></aside>
    <section className="dashboard-content" id="dashboard"><header className="topbar"><div><p className="eyebrow">Tuesday, October 24</p><h1>Good morning, Alex</h1></div><div className="top-actions"><button className="icon-button" aria-label="Notifications"><Icon name="bell" /><i /></button><button className="new-button">+ New project</button></div></header>
      <section className="metrics" aria-label="Key metrics">{metrics.map(([label, value, change, tone]) => <article className="metric-card" key={label}><p>{label}</p><div><strong>{value}</strong><span className={tone}>{change}</span></div><small>Compared to last month</small></article>)}<article className="metric-card visitors"><p>Visitors overview</p><div><strong>18,292</strong><span className="positive">+18.4%</span></div><div className="mini-bars" aria-hidden="true">{Array.from({ length: 12 }, (_, index) => <i key={index} />)}</div></article></section>
      <section className="dashboard-grid"><article className="panel performance" id="analytics"><div className="panel-heading"><div><h2>Revenue performance</h2><p>Overview of your revenue this month</p></div><button className="period-button">This month⌄</button></div><div className="chart-value"><strong>$48,574</strong><span className="positive">↗ 12.5%</span></div><div className="chart" aria-label="Revenue trend chart"><div className="chart-labels"><span>$15k</span><span>$10k</span><span>$5k</span><span>$0</span></div><svg viewBox="0 0 620 190" preserveAspectRatio="none" role="img"><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="#7769e9" stopOpacity=".2" /><stop offset="1" stopColor="#7769e9" stopOpacity="0" /></linearGradient></defs><path className="area" d="M0 153 L52 139 L104 147 L155 98 L207 119 L258 76 L310 98 L362 52 L413 83 L465 70 L517 28 L568 47 L620 16 V190 H0Z" /><path className="line" d="M0 153 L52 139 L104 147 L155 98 L207 119 L258 76 L310 98 L362 52 L413 83 L465 70 L517 28 L568 47 L620 16" /></svg><div className="chart-days"><span>Oct 1</span><span>Oct 5</span><span>Oct 10</span><span>Oct 15</span><span>Oct 20</span><span>Oct 25</span><span>Oct 30</span></div></div></article>
        <article className="panel tasks"><div className="panel-heading"><div><h2>Upcoming tasks</h2><p>Stay on top of your schedule</p></div><button className="plain-button">View all <Icon name="arrow" /></button></div><div className="task-list">{[['purple','Review design proposals','Today · 10:00 AM'],['amber','Team planning meeting','Tomorrow · 9:30 AM'],['teal','Prepare monthly report','Friday · 2:00 PM']].map(([tone,title,time]) => <div className="task" key={title}><span className={`task-dot ${tone}`} /><div><strong>{title}</strong><small>{time}</small></div><button aria-label="More options"><Icon name="more" /></button></div>)}</div></article></section>
      <section className="panel projects" id="projects"><div className="panel-heading"><div><h2>Recent projects</h2><p>Continue where you left off</p></div><button className="plain-button">View all <Icon name="arrow" /></button></div><div className="project-list">{[['violet','◈','Website redesign','12 tasks · Updated 2h ago','75%'],['coral','⌘','Mobile app launch','8 tasks · Updated yesterday','48%'],['blue','✦','Brand guidelines','16 tasks · Updated Oct 20','92%']].map(([colour,icon,title,info,percent]) => <div key={title}><span className={`project-icon ${colour}`}>{icon}</span><p><strong>{title}</strong><small>{info}</small></p><b>{percent}</b><em><i style={{ width: percent }} /></em></div>)}</div></section>
    </section>
  </main>
}

export default App
