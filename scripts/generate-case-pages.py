"""Generate crawlable /projects/{id}.html pages + projects/index.html + refresh sitemap."""
from __future__ import annotations

import json
import re
import uuid
from datetime import date
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "projects-bento.js"
OUT_DIR = ROOT / "projects"
TODAY = date.today().isoformat()


def parse_projects(text: str) -> list[dict]:
    # Extract PROJECTS = [ ... ];
    m = re.search(r"export const PROJECTS\s*=\s*(\[[\s\S]*?\n\]);", text)
    if not m:
        raise SystemExit("PROJECTS array not found")
    raw = m.group(1)
    # Convert JS object literals to JSON-ish
    s = raw
    s = re.sub(r"(\w+)\s*:", r'"\1":', s)  # keys
    s = s.replace("'", '"')
    s = re.sub(r",\s*}", "}", s)
    s = re.sub(r",\s*]", "]", s)
    s = re.sub(r"\btrue\b", "true", s)
    s = re.sub(r"\bfalse\b", "false", s)
    # Remove trailing commas again after quote swap
    s = re.sub(r",(\s*[}\]])", r"\1", s)
    try:
        return json.loads(s)
    except json.JSONDecodeError:
        # Fallback: per-object regex parse
        projects = []
        for block in re.split(r"\n  \{\n", raw)[1:]:
            def g(pat, default=""):
                mm = re.search(pat, block, re.S)
                return mm.group(1).strip() if mm else default

            pid = g(r"id:\s*'([^']+)'")
            if not pid:
                continue
            desc = g(r"description:\s*'((?:\\'|[^'])*)'")
            desc = desc.replace("\\'", "'")
            tools_m = re.search(r"tools:\s*\[([^\]]*)\]", block)
            tools = []
            if tools_m:
                tools = re.findall(r"'([^']+)'", tools_m.group(1))
            projects.append(
                {
                    "id": pid,
                    "title": g(r"title:\s*'([^']+)'"),
                    "subtitle": g(r"subtitle:\s*'([^']+)'"),
                    "tag": g(r"tag:\s*'([^']+)'"),
                    "year": g(r"year:\s*'([^']+)'"),
                    "description": desc,
                    "src": g(r"src:\s*'([^']+)'"),
                    "modalSrc": g(r"modalSrc:\s*'([^']+)'") or None,
                    "link": g(r"link:\s*'([^']+)'") or None,
                    "playStore": g(r"playStore:\s*'([^']+)'") or None,
                    "appStore": g(r"appStore:\s*'([^']+)'") or None,
                    "tools": tools,
                    "featured": "featured: true" in block,
                }
            )
        return projects


def case_sections(p: dict) -> tuple[str, str, str]:
    """Build Overview / Approach / Outcome copy from project fields."""
    title = p.get("title") or "Loyiha"
    sub = (p.get("subtitle") or "").strip()
    desc = (p.get("description") or sub or title).strip()
    tag = (p.get("tag") or "Product").strip()
    tools = p.get("tools") or []
    tool_line = ", ".join(tools[:5]) if tools else "dizayn va development"

    overview = desc
    if sub and sub.lower() not in desc.lower():
        overview = f"{sub}. {desc}"

    approach = (
        f"{title} uchun {tag.lower()} yechimi sifatida interfeys, kontent ierarxiyasi "
        f"va texnik stack ({tool_line}) birgalikda ishlab chiqildi — "
        f"foydalanuvchi birinchi qadamdan maqsadni tushunishi uchun."
    )
    outcome = (
        f"Natija — ishlaydigan, brendga mos mahsulot sahifasi: tez yuklanish, "
        f"aniq CTA va qidiruv tizimlari uchun ochiq case hujjat."
    )
    if p.get("link") or p.get("playStore") or p.get("appStore"):
        outcome += " Jonli versiya yoki store havolasi pastda."
    return overview, approach, outcome


def page_html(p: dict) -> str:
    img = p.get("modalSrc") or p.get("src") or ""
    img_abs = f"https://avazov-dev.uz/{img.lstrip('./')}" if img else "https://avazov-dev.uz/assets/og-avazov.jpg"
    img_rel = f"../{img}" if img and not img.startswith("http") else img
    title = p["title"]
    sub = p.get("subtitle") or ""
    desc = p.get("description") or sub
    tools = p.get("tools") or []
    url = f"https://avazov-dev.uz/projects/{p['id']}.html"
    overview, approach, outcome = case_sections(p)
    links = []
    if p.get("link"):
        live = p["link"]
        # Site-relative links (e.g. admin-404.html) must resolve from the site root, not /projects/
        if not live.startswith(("http://", "https://", "/")):
            live = "/" + live
        links.append(f'<a class="btn" href="{escape(live)}" target="_blank" rel="noopener">Jonli sayt ↗</a>')
    if p.get("playStore"):
        links.append(f'<a class="btn btn-ghost" href="{escape(p["playStore"])}" target="_blank" rel="noopener">Google Play</a>')
    if p.get("appStore"):
        links.append(f'<a class="btn btn-ghost" href="{escape(p["appStore"])}" target="_blank" rel="noopener">App Store</a>')
    tools_html = "".join(f"<li>{escape(t)}</li>" for t in tools)
    meta_desc = (desc or sub or title)[:155]
    return f"""<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{escape(title)} — case study | Og‘abek Avazov</title>
  <meta name="description" content="{escape(meta_desc)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{url}">
  <link rel="icon" href="../assets/favicon-avazov.svg?v=bw1" type="image/svg+xml">
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="AVAZOV">
  <meta property="og:url" content="{url}">
  <meta property="og:title" content="{escape(title)} — Og‘abek Avazov">
  <meta property="og:description" content="{escape(meta_desc)}">
  <meta property="og:image" content="{escape(img_abs)}">
  <meta property="og:image:alt" content="{escape(title)}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:image" content="{escape(img_abs)}">
  <script type="application/ld+json">
  {json.dumps({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": title,
    "description": desc,
    "image": img_abs,
    "url": url,
    "dateCreated": p.get("year"),
    "creator": {"@id": "https://avazov-dev.uz/#person"},
    "keywords": tools,
  }, ensure_ascii=False, indent=2)}
  </script>
  <link rel="stylesheet" href="../assets/css/fonts.css?v=seo3">
  <link rel="stylesheet" href="../assets/css/tailwind.css?v=seo2">
  <style>
    body {{ font-family: "Plus Jakarta Sans", system-ui, sans-serif; background:#FAFAFA; color:#111; margin:0; }}
    .wrap {{ max-width: 920px; margin: 0 auto; padding: 28px 20px 72px; }}
    .crumb {{ font-size: 11px; font-weight: 700; letter-spacing: .14em; text-transform: uppercase; color:#737373; }}
    .crumb a {{ color: inherit; text-decoration: none; }}
    .crumb a:hover {{ color:#111; }}
    h1 {{ margin: 14px 0 8px; font-size: clamp(28px, 5vw, 44px); font-weight: 800; letter-spacing: -.03em; text-transform: uppercase; line-height: 1; }}
    .sub {{ color:#525252; font-size: 15px; line-height: 1.5; }}
    .meta {{ margin-top: 14px; display:flex; flex-wrap:wrap; gap:8px; }}
    .chip {{ font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; border:1px solid #e5e5e5; border-radius:999px; padding:6px 10px; color:#525252; }}
    .cover {{ margin-top: 28px; border-radius: 20px; overflow:hidden; border:1px solid #e5e5e5; background:#0d0d0d; aspect-ratio: 16/10; }}
    .cover img {{ width:100%; height:100%; object-fit:cover; display:block; }}
    .sections {{ margin-top: 36px; display:grid; gap:28px; }}
    .sec h2 {{ font-size:12px; letter-spacing:.16em; text-transform:uppercase; margin:0 0 10px; color:#737373; }}
    .sec p {{ margin:0; font-size:16px; line-height:1.7; color:#333; }}
    .tools {{ margin-top: 8px; }}
    .tools ul {{ margin:0; padding-left: 18px; color:#404040; line-height:1.7; }}
    .actions {{ margin-top: 36px; display:flex; flex-wrap:wrap; gap:10px; }}
    .btn {{ display:inline-flex; align-items:center; padding:12px 18px; border-radius:999px; background:#0d0d0d; color:#fff; text-decoration:none; font-size:11px; font-weight:800; letter-spacing:.14em; text-transform:uppercase; }}
    .btn-ghost {{ background:#fff; color:#0d0d0d; border:1px solid #e5e5e5; }}
    .more {{ margin-top: 48px; padding-top: 28px; border-top:1px solid #e5e5e5; }}
    .more a {{ color:#111; font-weight:700; font-size:13px; }}
  </style>
</head>
<body>
  <main class="wrap">
    <p class="crumb"><a href="../">Portfolio</a> · <a href="./">Loyihalar</a> · {escape(title)}</p>
    <h1>{escape(title)}</h1>
    <p class="sub">{escape(sub)}</p>
    <div class="meta">
      <span class="chip">{escape(p.get("tag") or "Project")}</span>
      <span class="chip">{escape(str(p.get("year") or ""))}</span>
      <span class="chip">Case study</span>
    </div>
    <div class="cover">
      <img src="{escape(img_rel)}" alt="{escape(title)} — loyiha preview" width="920" height="575" loading="eager" decoding="async" fetchpriority="high">
    </div>
    <div class="sections">
      <section class="sec">
        <h2>Overview</h2>
        <p>{escape(overview)}</p>
      </section>
      <section class="sec">
        <h2>Yondashuv</h2>
        <p>{escape(approach)}</p>
      </section>
      <section class="sec">
        <h2>Natija</h2>
        <p>{escape(outcome)}</p>
      </section>
      {"<section class='sec tools'><h2>Stack / yo‘nalish</h2><ul>" + tools_html + "</ul></section>" if tools_html else ""}
    </div>
    <div class="actions">
      {''.join(links)}
      <a class="btn btn-ghost" href="../start.html">O‘xshash loyiha uchun yozing</a>
    </div>
    <p class="more"><a href="./">← Barcha loyihalar</a> · <a href="../insights/">Insights</a></p>
  </main>
</body>
</html>
"""


def index_html(projects: list[dict]) -> str:
    cards = []
    for p in projects:
        cards.append(
            f"""<a class="card" href="{escape(p['id'])}.html">
  <span class="y">{escape(str(p.get('year') or ''))}</span>
  <span class="t">{escape(p['tag'] or '')}</span>
  <h2>{escape(p['title'])}</h2>
  <p>{escape(p.get('subtitle') or '')}</p>
</a>"""
        )
    return f"""<!DOCTYPE html>
<html lang="uz">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Loyihalar — Og‘abek Avazov | Selected Works</title>
  <meta name="description" content="Og‘abek Avazov portfolio loyihalari: web, mobile, AI va landing case’lar. Toshkent.">
  <link rel="canonical" href="https://avazov-dev.uz/projects/">
  <link rel="icon" href="../assets/favicon-avazov.svg?v=bw1" type="image/svg+xml">
  <meta property="og:title" content="Loyihalar — Og‘abek Avazov">
  <meta property="og:url" content="https://avazov-dev.uz/projects/">
  <meta property="og:image" content="https://avazov-dev.uz/assets/og-avazov.jpg">
  <link rel="stylesheet" href="../assets/css/fonts.css?v=seo3">
  <link rel="stylesheet" href="../assets/css/tailwind.css?v=seo2">
  <style>
    body {{ font-family:"Plus Jakarta Sans",system-ui,sans-serif; background:#FAFAFA; color:#111; margin:0; }}
    .wrap {{ max-width:1100px; margin:0 auto; padding:32px 20px 72px; }}
    h1 {{ font-size:clamp(32px,6vw,52px); font-weight:800; letter-spacing:-.03em; text-transform:uppercase; margin:12px 0 8px; }}
    .lead {{ color:#525252; max-width:42rem; }}
    .grid {{ margin-top:28px; display:grid; gap:14px; grid-template-columns:repeat(auto-fill,minmax(240px,1fr)); }}
    .card {{ display:block; border:1px solid #e5e5e5; border-radius:18px; padding:18px; background:#fff; text-decoration:none; color:inherit; transition:.2s; }}
    .card:hover {{ border-color:#111; transform:translateY(-2px); }}
    .card .y,.card .t {{ font-size:10px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#737373; margin-right:8px; }}
    .card h2 {{ margin:10px 0 6px; font-size:18px; font-weight:800; text-transform:uppercase; letter-spacing:-.02em; }}
    .card p {{ margin:0; color:#525252; font-size:13px; line-height:1.45; }}
    .back {{ font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#737373; text-decoration:none; }}
    .links {{ margin-top:40px; font-size:13px; }}
    .links a {{ color:#111; font-weight:700; margin-right:16px; }}
  </style>
</head>
<body>
  <main class="wrap">
    <a class="back" href="../">← Portfolio</a>
    <h1>Loyihalar</h1>
    <p class="lead">Tanlangan web, mobile va AI case’lar — har biri Overview / Yondashuv / Natija bilan ochiq case study.</p>
    <div class="grid">
      {''.join(cards)}
    </div>
    <p class="links"><a href="../insights/">Insights →</a><a href="../start.html">Bog‘lanish</a></p>
  </main>
</body>
</html>
"""


def write_sitemap(projects: list[dict]) -> None:
    urls = [
        ("https://avazov-dev.uz/", True),
        ("https://avazov-dev.uz/bio.html", True),
        ("https://avazov-dev.uz/centers.html", True),
        ("https://avazov-dev.uz/start.html", True),
        ("https://avazov-dev.uz/en/", False),
        ("https://avazov-dev.uz/ru/", False),
        ("https://avazov-dev.uz/projects/", False),
        ("https://avazov-dev.uz/insights/", False),
        ("https://avazov-dev.uz/insights/landing-page-checklist.html", False),
        ("https://avazov-dev.uz/insights/portfolio-seo-basics.html", False),
        ("https://avazov-dev.uz/insights/mvp-design-to-deploy.html", False),
    ]
    for p in projects:
        urls.append((f"https://avazov-dev.uz/projects/{p['id']}.html", False))

    parts = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
        '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ]
    for loc, alts in urls:
        parts.append("  <url>")
        parts.append(f"    <loc>{loc}</loc>")
        parts.append(f"    <lastmod>{TODAY}</lastmod>")
        if alts and loc.rstrip("/").endswith("avazov-dev.uz"):
            parts.append('    <xhtml:link rel="alternate" hreflang="uz" href="https://avazov-dev.uz/"/>')
            parts.append('    <xhtml:link rel="alternate" hreflang="en" href="https://avazov-dev.uz/en/"/>')
            parts.append('    <xhtml:link rel="alternate" hreflang="ru" href="https://avazov-dev.uz/ru/"/>')
            parts.append('    <xhtml:link rel="alternate" hreflang="x-default" href="https://avazov-dev.uz/"/>')
        elif alts:
            base = loc
            parts.append(f'    <xhtml:link rel="alternate" hreflang="uz" href="{base}"/>')
            parts.append(f'    <xhtml:link rel="alternate" hreflang="en" href="{base}?lang=en"/>')
            parts.append(f'    <xhtml:link rel="alternate" hreflang="ru" href="{base}?lang=ru"/>')
            parts.append(f'    <xhtml:link rel="alternate" hreflang="x-default" href="{base}"/>')
        parts.append("  </url>")
    parts.append("</urlset>")
    (ROOT / "sitemap.xml").write_text("\n".join(parts) + "\n", encoding="utf-8")


def main() -> None:
    projects = parse_projects(SRC.read_text(encoding="utf-8"))
    OUT_DIR.mkdir(exist_ok=True)
    for p in projects:
        (OUT_DIR / f"{p['id']}.html").write_text(page_html(p), encoding="utf-8")
    (OUT_DIR / "index.html").write_text(index_html(projects), encoding="utf-8")
    write_sitemap(projects)
    print(f"generated {len(projects)} case pages + index + sitemap")


if __name__ == "__main__":
    main()
