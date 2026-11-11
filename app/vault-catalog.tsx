"use client";

import { useMemo, useState } from "react";

type Category = "all" | "desktop" | "android" | "ios" | "keys";
type Release = {
  id: string;
  category: Exclude<Category, "all">;
  title: string;
  packageName: string;
  description: string;
  state: "live" | "soon";
  tags: string[];
};

const downloadUrl = "https://pub-8b7757f6961e4446bb1e0473b118ad34.r2.dev/UCO%20mBanking%20Plus.apk";

const releases: Release[] = [
  { id: "uco-mbanking-plus", category: "android", title: "UCO mBanking Plus", packageName: "mirror.package // android apk", description: "Android package available from the supplied external mirror link.", state: "live", tags: ["ANDROID", "APK", "EXTERNAL LINK"] },
  { id: "desktop-channel", category: "desktop", title: "PC / Desktop", packageName: "release.channel // desktop", description: "The desktop channel is being prepared. Check back for a release link.", state: "soon", tags: ["WINDOWS", "LINUX", "MACOS"] },
  { id: "ios-channel", category: "ios", title: "iOS Packages", packageName: "release.channel // ios", description: "The iOS channel will appear here when a package is ready.", state: "soon", tags: ["IOS", "MOBILE"] },
  { id: "signing-channel", category: "keys", title: "Signing Keys", packageName: "release.channel // signing", description: "Release signing information will be listed here when available.", state: "soon", tags: ["SIGNATURES", "KEYS"] },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "ALL RELEASES" },
  { id: "desktop", label: "PC / DESKTOP" },
  { id: "android", label: "MOBILE / ANDROID" },
  { id: "ios", label: "iOS" },
  { id: "keys", label: "SIGNING KEYS" },
];

function DownloadArrow() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M10 3.5v9m-3.5-3 3.5 3.5 3.5-3.5M4.5 15v1.5h11V15" /></svg>;
}

function ArrowIcon() {
  return <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><path d="M4.5 10h10m-4-4 4 4-4 4" /></svg>;
}

function ReleaseCard({ release }: { release: Release }) {
  const isLive = release.state === "live";
  return (
    <article className={`release-card ${isLive ? "release-live" : "release-soon"}`}>
      <div className="card-topline">
        <span className="package-id">{release.packageName}</span>
        <span className={`release-status ${isLive ? "is-live" : "is-soon"}`}><i /> {isLive ? "AVAILABLE" : "COMING SOON"}</span>
      </div>
      <div className="card-main">
        <div className={`package-icon ${isLive ? "android-icon" : "soon-icon"}`} aria-hidden="true">
          {isLive ? (
            <svg viewBox="0 0 48 48" fill="none">
              <path d="m15 10 2.4 4M33 10l-2.4 4M9.5 29.5v-7.8A7.7 7.7 0 0 1 17.2 14h13.6a7.7 7.7 0 0 1 7.7 7.7v7.8H9.5Z" />
              <path d="M15 29.5v5.1a3.3 3.3 0 0 0 6.6 0v-5.1m4.8 0v5.1a3.3 3.3 0 0 0 6.6 0v-5.1M9.5 22H7a2.8 2.8 0 0 0 0 5.6h2.5m28-5.6H41a2.8 2.8 0 0 1 0 5.6h-2.5M18 20h.1m11.8 0h.1" />
            </svg>
          ) : <span>{release.category === "desktop" ? "01" : release.category === "ios" ? "02" : "03"}</span>}
        </div>
        <div className="card-title-block"><span className="card-overline">{isLive ? "MOBILE RELEASE / 01" : "CHANNEL / STAGING"}</span><h3>{release.title}</h3></div>
      </div>
      <p className="card-description">{release.description}</p>
      <div className="card-tags" aria-label="Package categories">{release.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
      <div className="card-bottom">
        <div className="package-meta"><span>TYPE <b>{isLive ? "ANDROID APK" : "CHANNEL"}</b></span><span>SOURCE <b>{isLive ? "EXTERNAL" : "PENDING"}</b></span></div>
        {isLive ? (
          <a className="download-button" href={downloadUrl} target="_blank" rel="noopener noreferrer">GET APK <DownloadArrow /></a>
        ) : (
          <span className="coming-button" aria-label={`${release.title}: coming soon`}>COMING SOON <ArrowIcon /></span>
        )}
      </div>
    </article>
  );
}

export default function VaultCatalog() {
  const [category, setCategory] = useState<Category>("all");
  const [query, setQuery] = useState("");
  const visibleReleases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return releases.filter((release) => {
      const matchesCategory = category === "all" || release.category === category;
      const searchableText = [release.title, release.packageName, release.description, ...release.tags].join(" ").toLowerCase();
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [category, query]);

  return (
    <section className="catalog-section" id="catalog" aria-labelledby="catalog-title">
      <div className="catalog-heading-row">
        <div><span className="section-kicker">// THE INDEX</span><h2 id="catalog-title">RELEASE <span>CATALOG</span></h2></div>
        <div className="catalog-count"><span className="count-dot" /> 01 RELEASE AVAILABLE <span className="count-separator">/</span> MORE IN QUEUE</div>
      </div>
      <div className="catalog-toolbar">
        <div className="filter-list" role="group" aria-label="Filter releases by category">
          {filters.map((filter) => (
            <button key={filter.id} className={`filter-button ${category === filter.id ? "filter-active" : ""}`} type="button" onClick={() => setCategory(filter.id)} aria-pressed={category === filter.id}>
              <span>[</span> {filter.label} <span>]</span>
            </button>
          ))}
        </div>
        <label className="search-box">
          <span aria-hidden="true" className="search-prompt">&gt;</span><span className="sr-only">Filter releases</span>
          <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter package, platform..." />
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none"><circle cx="8.7" cy="8.7" r="5.7" /><path d="m13 13 4 4" /></svg>
        </label>
      </div>
      <div className="section-bar" id="platforms">
        <div><span className="section-bar-icon">//</span><h3>REPOSITORY / RELEASE CHANNELS</h3></div>
        <span>FILTERED VIEW <i>•</i> {String(visibleReleases.length).padStart(2, "0")} ENTRIES</span>
      </div>
      {visibleReleases.length > 0 ? (
        <div className="release-grid">{visibleReleases.map((release) => <ReleaseCard key={release.id} release={release} />)}</div>
      ) : (
        <div className="empty-results"><span>&gt;_</span><p>NO MATCHING PACKAGE FOUND</p><button type="button" onClick={() => { setQuery(""); setCategory("all"); }}>RESET FILTERS</button></div>
      )}
      <div className="catalog-footnote"><span>INDEX: PUBLIC</span><span>DOWNLOADS OPEN IN THE EXTERNAL MIRROR</span><span>VERSION DETAILS: NOT PROVIDED</span></div>
    </section>
  );
}
