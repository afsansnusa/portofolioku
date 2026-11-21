(function () {
  const STORAGE_KEY = "iqbal_fadil_vanilla_portfolio_v1";

  // Gunakan URL lengkap atau path relatif dari index.html, misalnya "./img/foto-baru.jpg".
  // Setiap karya baru harus memiliki id unik.
  const PORTFOLIO_IMAGES = {
    profile: "img/fadil.JPG",
    about: "img/iqbal.jpeg",
    works: {
      "work-1":
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
      "work-2": "./img/invite.png",
      "work-3":
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
      "work-4":
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
      "work-5":
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
      "work-6": "./img/poster.png",
    },
  };

  const DEFAULT_DATA = {
    profile: {
      brandName: "Portfolio.",
      greeting: "Hi, I'm Iqbal Fadil",
      name: "Iqbal Fadil",
      roleTitle: "Information Systems Student & Multidisciplinary Creator",
      heroBio:
        "Mahasiswa S1 Sistem Informasi Universitas Ahmad Dahlan (UAD) Yogyakarta yang memadukan estetika fotografi, sinematografi, dan desain grafis dengan pengembangan sistem web modern.",
      aboutSummary:
        "Berdomisili di Banguntapan, Bantul, Yogyakarta. Saya percaya karya terbaik lahir dari perpaduan kepekaan visual yang jujur dan arsitektur teknologi yang terstruktur. Aktif memimpin inovasi riset mahasiswa di PKM Center UAD serta berkontribusi di berbagai gerakan kreatif dan kepemudaan.",
      location: "Banguntapan, Bantul, Yogyakarta, Indonesia",
      email: "iqbalfadil.work@gmail.com",
      instagramUrl: "https://instagram.com/fadilif_",
      tiktokUrl: "https://tiktok.com",
      githubUrl: "https://github.com",
      youtubeUrl: "https://youtube.com",
      portraitUrl: PORTFOLIO_IMAGES.profile,
      aboutPhotoUrl: PORTFOLIO_IMAGES.about,
      stats: [
        { value: "4+", label: "Bidang Karya" },
        { value: "3rd Sem", label: "S1 SI UAD" },
        { value: "10+", label: "Project & Event" },
      ],
    },
    education: [
      {
        id: "edu-1",
        period: "2025 — Sekarang",
        institution: "Universitas Ahmad Dahlan (UAD), Yogyakarta",
        degree: "S1 Sistem Informasi — Fakultas Sains & Teknologi Terapan",
        notes:
          "Fokus pada analisis sistem informasi, pemodelan basis data relasional (ERD), pengembangan web, dan manajemen proyek digital.",
      },
      {
        id: "edu-2",
        period: "2022 — 2025",
        institution: "Madrasah Aliyah Al-Furqan, Kebumen",
        degree: "Ilmu Pengetahuan Alam & Tim Media Kreatif Sekolah",
        notes:
          "Menginisiasi portal informasi digital sekolah, dokumentasi acara, serta publikasi visual kegiatan siswa.",
      },
    ],
    experience: [
      {
        id: "exp-1",
        period: "2026 — Sekarang",
        role: "Ketua Departemen Sains & Teknologi (Saintek)",
        organization: "PKM Center Universitas Ahmad Dahlan",
        type: "Organisasi Kampus",
        description:
          "Memimpin inkubasi proposal riset & teknologi mahasiswa, mengoordinasikan pendampingan teknis PKM bidang Saintek, serta membangun jejaring kolaborasi lintas prodi.",
      },
      {
        id: "exp-2",
        period: "2026 — Sekarang",
        role: "Volunteer Divisi Media & Kreatif",
        organization: "Youth Ranger Indonesia — Regional Yogyakarta",
        type: "Komunitas & Sosial",
        description:
          "Memproduksi konten visual kampanye kepemudaan, liputan dokumenter aksi sosial, serta desain komunikasi visual untuk audiens muda Yogyakarta.",
      },
      {
        id: "exp-3",
        period: "2026",
        role: "Panitia Inti — Koordinator Publikasi & Dokumentasi",
        organization: "Ruang Berbagi Ilmu 2026",
        type: "Kepanitiaan",
        description:
          "Merancang identitas visual acara, mengarahkan tim liputan foto & video kelas inspirasi, dan menyusun arsip dokumenter pasca-kegiatan.",
      },
      {
        id: "exp-4",
        period: "2026",
        role: "Liaison Officer (LO) Dokumentasi",
        organization: "UKM Day — P2K Universitas Ahmad Dahlan 2026",
        type: "Kepanitiaan",
        description:
          "Mengelola alur liputan visual pameran Unit Kegiatan Mahasiswa bagi ribuan mahasiswa baru UAD.",
      },
    ],
    skills: [
      {
        id: "sk-1",
        name: "Photoshop & Lightroom",
        category: "Fotografi",
        badge: "Lr",
        badgeBg: "#001E36",
        badgeText: "#31A8FF",
      },
      {
        id: "sk-2",
        name: "Premiere Pro & Video",
        category: "Videografi",
        badge: "Pr",
        badgeBg: "#00005B",
        badgeText: "#9999FF",
      },
      {
        id: "sk-3",
        name: "Graphic Design & Figma",
        category: "Desain Grafis",
        badge: "Ai",
        badgeBg: "#330000",
        badgeText: "#FF9A00",
      },
      {
        id: "sk-4",
        name: "HTML/CSS & JavaScript",
        category: "Coding",
        badge: "JS",
        badgeBg: "#18181B",
        badgeText: "#FACC15",
      },
      {
        id: "sk-5",
        name: "React & Modern Web",
        category: "Coding",
        badge: "RC",
        badgeBg: "#0F172A",
        badgeText: "#38BDF8",
      },
      {
        id: "sk-6",
        name: "Laravel & PHP",
        category: "Coding",
        badge: "Lv",
        badgeBg: "#2A0A0A",
        badgeText: "#F97316",
      },
      {
        id: "sk-7",
        name: "Python & SQL / ERD",
        category: "Coding",
        badge: "DB",
        badgeBg: "#052E16",
        badgeText: "#4ADE80",
      },
      {
        id: "sk-8",
        name: "Google Apps Script",
        category: "Coding",
        badge: "GS",
        badgeBg: "#1E293B",
        badgeText: "#FB923C",
      },
    ],
    works: [
      {
        id: "work-1",
        title: "Dokumentasi & Vlog Museum Muhammadiyah UAD",
        category: "Videografi",
        year: "2026",
        subtitle: "Visual Essay & Liputan Dokumenter Kampus 4 UAD",
        description:
          "Karya videografi dokumenter bergaya visual-essay yang merekam perjalanan sejarah persyarikatan di Museum Muhammadiyah Kampus 4 Universitas Ahmad Dahlan. Memadukan pergerakan gimbal yang halus, ambient sound design, dan color grading sinematik.",
        imageUrl: PORTFOLIO_IMAGES.works["work-1"],
        tags: ["Premiere Pro", "Canon 650D", "Gimbal 4K"],
        metaExif: "1080p 24fps · Rec.709 · 04:32 Min",
        role: "Director, Videographer & Editor",
        link: "https://youtube.com",
      },
      {
        id: "work-2",
        title: "Infografis: Ketika Alam Berbicara, Karya Menyuarakan",
        category: "Desain Grafis",
        year: "2026",
        subtitle: "Kampanye Visual Kesadaran Pencemaran Ekosistem Sungai",
        description:
          "Desain infografis editorial yang menerjemahkan data kualitas air sungai dan dampak limbah menjadi narasi visual yang menggugah. Mengusung hierarki tipografi kuat dan ilustrasi vektor organik untuk kampanye publik.",
        imageUrl: PORTFOLIO_IMAGES.works["work-2"],
        tags: ["Illustrator", "Figma", "Editorial Grid"],
        metaExif: "A2 Print & Carousel Series · 300 DPI",
        role: "Graphic Designer & Visual Storyteller",
        link: "https://instagram.com",
      },
      {
        id: "work-3",
        title: "Sistem Informasi Akademik (SIAKAD) & ERD Modeling",
        category: "Project Coding",
        year: "2026",
        subtitle: "Arsitektur Database Relasional & Aplikasi Web Kampus",
        description:
          "Perancangan Entity Relationship Diagram (ERD) ter-normalisasi lengkap dengan purwarupa aplikasi SIAKAD berbasis web untuk pengelolaan KRS mahasiswa, penjadwalan kuliah, dan manajemen nilai dosen.",
        imageUrl: PORTFOLIO_IMAGES.works["work-3"],
        tags: ["Laravel", "MySQL", "ERD System"],
        metaExif: "18 Tabel Relasional · Role-Based Auth",
        role: "System Analyst & Fullstack Developer",
        link: "https://github.com",
      },
      {
        id: "work-4",
        title: "Golden Hour & Street Architecture Yogyakarta",
        category: "Fotografi",
        year: "2026",
        subtitle: "Kompetisi Motret #5 — Eksplorasi Cahaya & Geometris Ruang",
        description:
          "Seri fotografi arsitektur dan ruang kota Yogyakarta saat golden hour. Mengeksplorasi garis geometris bangunan modern, bayangan kontras, dan perspektif low-angle yang dramatis.",
        imageUrl: PORTFOLIO_IMAGES.works["work-4"],
        tags: ["Canon 650D", "Lightroom", "Architecture"],
        metaExif: "24mm · f/5.6 · 1/500s · ISO 100",
        role: "Photographer & Colorist",
        link: "https://instagram.com",
      },
      {
        id: "work-5",
        title: "Web Landing Page & Admin Panel MA Al-Furqan Kebumen",
        category: "Project Coding",
        year: "2026",
        subtitle: "Portal Resmi Sekolah & Sistem PPDB Berbasis Cloud",
        description:
          "Pengembangan website landing page responsif dengan panel administrasi ringan berbasis Google Apps Script dan Blogger XML untuk pengelolaan berita sekolah dan pendaftaran siswa baru secara real-time.",
        imageUrl: PORTFOLIO_IMAGES.works["work-5"],
        tags: ["HTML/CSS", "Apps Script", "JavaScript"],
        metaExif: "Lighthouse Score 98/100 · Cloud Sheet DB",
        role: "Lead Web Developer & UI Designer",
        link: "https://github.com",
      },
      {
        id: "work-6",
        title: "Kampanye Visual Hari Udara Bersih Internasional",
        category: "Desain Grafis",
        year: "2025",
        subtitle: "Poster & Konten Edukasi Lingkungan — Youth Ranger Indonesia",
        description:
          "Seri desain poster kampanye digital untuk memperingati Hari Udara Bersih Internasional bersama Youth Ranger Indonesia Regional Yogyakarta. Mengombinasikan tipografi modern dan pesan aksi hijau.",
        imageUrl: "./img/poster.png",
        tags: ["Photoshop", "Figma", "Campaign"],
        metaExif: "1080x1350px · Multi-Slide Visual",
        role: "Visual Designer",
        link: "https://instagram.com",
      },
      {
        id: "work-7",
        title: "Kampanye Visual Hari Udara Bersih Internasional",
        category: "Desain Grafis",
        year: "2025",
        subtitle: "Poster & Konten Edukasi Lingkungan — Youth Ranger Indonesia",
        description:
          "Seri desain poster kampanye digital untuk memperingati Hari Udara Bersih Internasional bersama Youth Ranger Indonesia Regional Yogyakarta. Mengombinasikan tipografi modern dan pesan aksi hijau.",
        imageUrl: "./img/poster2.png",
        tags: ["Photoshop", "Figma", "Campaign"],
        metaExif: "1080x1350px · Multi-Slide Visual",
        role: "Visual Designer",
        link: "https://instagram.com",
      },
    ],
    messages: [
      {
        id: "msg-1",
        firstName: "Raka",
        lastName: "Pratama",
        email: "raka.pratama@uad.ac.id",
        category: "Videografi & Dokumentasi",
        body: "Halo Iqbal, kami dari panitia Seminar Nasional Saintek UAD tertarik mengajak kolaborasi untuk liputan dokumentasi foto dan aftermovie acara bulan depan.",
        createdAt: "19 Nov 2026, 15:40",
        read: false,
      },
    ],
  };

  const WORK_CATEGORIES = [
    "Semua",
    "Fotografi",
    "Videografi",
    "Desain Grafis",
    "Project Coding",
  ];

  // App State
  let siteData = loadSiteData();
  siteData.profile.portraitUrl = PORTFOLIO_IMAGES.profile;
  siteData.profile.aboutPhotoUrl = PORTFOLIO_IMAGES.about;
  let activeWorkCategory = "Semua";
  let showAllWorks = false;

  function loadSiteData() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        const savedWorks = Array.isArray(parsed.works) ? parsed.works : [];
        const savedWorksById = new Map(
          savedWorks
            .filter((work) => work && typeof work.id === "string")
            .map((work) => [work.id, work]),
        );
        const works = DEFAULT_DATA.works.map((defaultWork) => {
          const savedWork = savedWorksById.get(defaultWork.id);
          savedWorksById.delete(defaultWork.id);
          return savedWork
            ? { ...defaultWork, ...savedWork, imageUrl: defaultWork.imageUrl }
            : { ...defaultWork };
        });

        return {
          ...DEFAULT_DATA,
          ...parsed,
          profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
          works: [...works, ...savedWorksById.values()],
        };
      }
    } catch (err) {
      console.error(err);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveSiteData() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(siteData));
    } catch (err) {
      console.error(err);
    }
  }

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  let toastTimer = null;
  function showToast(msg, isError = false) {
    const box = document.getElementById("toast-box");
    const icon = document.getElementById("toast-icon");
    const text = document.getElementById("toast-text");
    icon.textContent = isError ? "⚠" : "✔";
    icon.style.color = isError ? "#F87171" : "#FB923C";
    text.textContent = msg;
    box.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove("show"), 3400);
  }

  // ======================================================================
  // RENDER PUBLIC WEBSITE
  // ======================================================================
  function renderAll() {
    const p = siteData.profile;

    // Navbar & Hero
    document.getElementById("nav-brand").innerHTML =
      `${escapeHtml(p.brandName.replace(".", ""))}<span class="dot">.</span>`;
    document.getElementById("hero-greeting").textContent = p.greeting;
    document.getElementById("hero-role").textContent = p.roleTitle;
    document.getElementById("hero-bio").textContent = p.heroBio;
    document.getElementById("hero-portrait-img").src = p.portraitUrl;

    document.getElementById("hero-ig-link").href = p.instagramUrl;
    document.getElementById("hero-tt-link").href = p.tiktokUrl;
    document.getElementById("hero-gh-link").href = p.githubUrl;
    document.getElementById("hero-yt-link").href = p.youtubeUrl;

    // About Me
    document.getElementById("about-photo-img").src =
      p.aboutPhotoUrl || p.portraitUrl;
    document.getElementById("about-summary-text").textContent = p.aboutSummary;

    const statsRow = document.getElementById("about-stats-row");
    statsRow.innerHTML = p.stats
      .map(
        (st) => `
            <div>
              <div class="stat-val">${escapeHtml(st.value)}</div>
              <div class="stat-lbl">${escapeHtml(st.label)}</div>
            </div>`,
      )
      .join("");

    // Education & Experience
    document.getElementById("education-list-container").innerHTML =
      siteData.education
        .map(
          (edu) => `
            <div class="timeline-item">
              <div class="timeline-item-top">
                <span class="timeline-title">${escapeHtml(edu.institution)}</span>
                <span class="timeline-badge font-mono">${escapeHtml(edu.period)}</span>
              </div>
              <div class="timeline-sub">${escapeHtml(edu.degree)}</div>
              ${edu.notes ? `<p class="timeline-desc">${escapeHtml(edu.notes)}</p>` : ""}
            </div>`,
        )
        .join("");

    document.getElementById("experience-list-container").innerHTML =
      siteData.experience
        .map(
          (exp) => `
            <div class="timeline-item">
              <div class="timeline-item-top">
                <span class="timeline-title">${escapeHtml(exp.role)}</span>
                <span class="timeline-badge font-mono">${escapeHtml(exp.period)}</span>
              </div>
              <div class="timeline-sub" style="color: var(--text-muted);">${escapeHtml(exp.organization)} · <span class="font-mono">${escapeHtml(exp.type)}</span></div>
              <p class="timeline-desc">${escapeHtml(exp.description)}</p>
            </div>`,
        )
        .join("");

    // Skills
    document.getElementById("skills-grid-container").innerHTML = siteData.skills
      .map(
        (sk) => `
            <div class="skill-card">
              <span class="skill-badge font-mono" style="background:${escapeHtml(sk.badgeBg || "#18181B")}; color:${escapeHtml(sk.badgeText || "#FB923C")};">
                ${escapeHtml(sk.badge)}
              </span>
              <div>
                <div class="skill-name">${escapeHtml(sk.name)}</div>
                <div class="skill-cat">${escapeHtml(sk.category)}</div>
              </div>
            </div>`,
      )
      .join("");

    // Works Filter & Grid
    renderWorksSection();

    // Footer
    document.getElementById("footer-brand-name").innerHTML =
      `${escapeHtml(p.name)}<span class="dot">.</span>`;
    document.getElementById("footer-desc").textContent =
      `Portofolio karya Fotografi, Videografi, Desain Grafis, dan Project Coding oleh ${p.name} — Mahasiswa Sistem Informasi UAD Yogyakarta.`;
    document.getElementById("footer-location").textContent = p.location;
    document.getElementById("footer-copy-name").textContent = p.name;
    document.getElementById("footer-ig").href = p.instagramUrl;
    document.getElementById("footer-tt").href = p.tiktokUrl;
    document.getElementById("footer-gh").href = p.githubUrl;
    document.getElementById("footer-yt").href = p.youtubeUrl;
  }

  function renderWorksSection() {
    const pillsWrap = document.getElementById("work-filter-pills");
    pillsWrap.innerHTML = WORK_CATEGORIES.map((cat) => {
      const count =
        cat === "Semua"
          ? siteData.works.length
          : siteData.works.filter((w) => w.category === cat).length;
      const activeClass = activeWorkCategory === cat ? "active" : "";
      return `<button type="button" class="filter-pill ${activeClass}" data-cat="${escapeHtml(cat)}">
            <span>${escapeHtml(cat)}</span>
            <span class="filter-count font-mono">${count}</span>
          </button>`;
    }).join("");

    pillsWrap.querySelectorAll(".filter-pill").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeWorkCategory = btn.getAttribute("data-cat");
        showAllWorks = false;
        renderWorksSection();
      });
    });

    const filtered =
      activeWorkCategory === "Semua"
        ? siteData.works
        : siteData.works.filter((w) => w.category === activeWorkCategory);

    const displayed = showAllWorks ? filtered : filtered.slice(0, 6);
    const grid = document.getElementById("projects-grid-container");

    if (displayed.length === 0) {
      grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: rgba(255,255,255,0.75); padding: 2.5rem 0;">Belum ada karya pada kategori “${escapeHtml(activeWorkCategory)}”.</p>`;
    } else {
      grid.innerHTML = displayed
        .map(
          (work) => `
              <article class="project-card">
                <div>
                  <div class="project-thumb" data-work-id="${escapeHtml(work.id)}">
                    <img src="${escapeHtml(work.imageUrl)}" alt="${escapeHtml(work.title)}" />
                    <div class="project-cat-badge">
                      <span class="accent-bright">●</span>
                      <span>${escapeHtml(work.category)}</span>
                    </div>
                    <div class="project-year-badge font-mono">${escapeHtml(work.year)}</div>
                  </div>
                  <div class="project-body">
                    <h3 class="project-title" data-work-id="${escapeHtml(work.id)}">${escapeHtml(work.title)}</h3>
                    <p class="project-desc">${escapeHtml(work.description)}</p>
                    <div class="project-tags">
                      ${(work.tags || [])
                        .slice(0, 3)
                        .map(
                          (t) =>
                            `<span class="project-tag font-mono">${escapeHtml(t)}</span>`,
                        )
                        .join("")}
                    </div>
                  </div>
                </div>
                <div class="project-actions">
                  <button type="button" class="btn-card-detail" data-work-id="${escapeHtml(work.id)}">
                    <svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/></svg>
                    Detail
                  </button>
                  <a href="${escapeHtml(work.link || "#projects")}" ${work.link ? 'target="_blank" rel="noreferrer"' : ""} class="btn-card-visit" data-visit-id="${escapeHtml(work.id)}">Lihat Karya ↗</a>
                </div>
              </article>`,
        )
        .join("");
    }

    grid.querySelectorAll("[data-work-id]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-work-id");
        const found = siteData.works.find((w) => w.id === id);
        if (found) openWorkModal(found);
      });
    });

    grid.querySelectorAll("[data-visit-id]").forEach((el) => {
      el.addEventListener("click", (e) => {
        const id = el.getAttribute("data-visit-id");
        const found = siteData.works.find((w) => w.id === id);
        if (found && !found.link) {
          e.preventDefault();
          openWorkModal(found);
        }
      });
    });

    const moreWrap = document.getElementById("show-more-works-wrap");
    const moreBtn = document.getElementById("btn-toggle-all-works");
    if (filtered.length > 6) {
      moreWrap.style.display = "block";
      moreBtn.textContent = showAllWorks
        ? "Tampilkan Lebih Ringkas"
        : `Lihat Semua Karya (${filtered.length}) ↗`;
    } else {
      moreWrap.style.display = "none";
    }
  }

  // ======================================================================
  // MODALS & PUBLIC INTERACTIONS
  // ======================================================================
  function openWorkModal(work) {
    document.getElementById("modal-work-cat").textContent = work.category;
    document.getElementById("modal-work-year").textContent = work.year;
    document.getElementById("modal-work-img").src = work.imageUrl;
    document.getElementById("modal-work-title").textContent = work.title;
    document.getElementById("modal-work-subtitle").textContent =
      work.subtitle || "";
    document.getElementById("modal-work-desc").textContent =
      work.description || "";
    document.getElementById("modal-work-role").textContent =
      work.role || "Creator";
    document.getElementById("modal-work-exif").textContent =
      work.metaExif || "High Resolution";
    document.getElementById("modal-work-tags").textContent = (
      work.tags || []
    ).join(", ");

    const linkWrap = document.getElementById("modal-work-link-wrap");
    const linkEl = document.getElementById("modal-work-link");
    if (work.link) {
      linkWrap.style.display = "flex";
      linkEl.href = work.link;
    } else {
      linkWrap.style.display = "none";
    }
    document.getElementById("work-detail-modal").classList.add("open");
  }

  document.getElementById("close-work-modal").addEventListener("click", () => {
    document.getElementById("work-detail-modal").classList.remove("open");
  });

  document
    .getElementById("work-detail-modal")
    .addEventListener("click", (e) => {
      if (e.target.id === "work-detail-modal") {
        e.target.classList.remove("open");
      }
    });

  // CV Modal
  document.getElementById("open-cv-btn").addEventListener("click", () => {
    const p = siteData.profile;
    document.getElementById("cv-name").textContent = p.name;
    document.getElementById("cv-role").textContent = p.roleTitle;
    document.getElementById("cv-bio").textContent =
      `${p.heroBio} ${p.aboutSummary}`;
    document.getElementById("cv-email").textContent = p.email;

    document.getElementById("cv-edu-list").innerHTML = siteData.education
      .map(
        (
          e,
        ) => `<div style="padding:0.65rem; border-radius:0.75rem; background:var(--subcard-bg); border:1px solid var(--subcard-border); margin-bottom:0.5rem;">
              <div style="font-weight:700; font-size:0.75rem;">${escapeHtml(e.institution)}</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">${escapeHtml(e.degree)}</div>
              <div class="font-mono" style="font-size:0.62rem; color:#EA580C; margin-top:0.2rem;">${escapeHtml(e.period)}</div>
            </div>`,
      )
      .join("");

    document.getElementById("cv-exp-list").innerHTML = siteData.experience
      .slice(0, 3)
      .map(
        (
          ex,
        ) => `<div style="padding:0.65rem; border-radius:0.75rem; background:var(--subcard-bg); border:1px solid var(--subcard-border); margin-bottom:0.5rem;">
              <div style="font-weight:700; font-size:0.75rem;">${escapeHtml(ex.role)}</div>
              <div style="font-size:0.68rem; color:var(--text-muted);">${escapeHtml(ex.organization)}</div>
              <div class="font-mono" style="font-size:0.62rem; color:#EA580C; margin-top:0.2rem;">${escapeHtml(ex.period)}</div>
            </div>`,
      )
      .join("");

    document.getElementById("cv-modal").classList.add("open");
  });

  document.getElementById("close-cv-modal").addEventListener("click", () => {
    document.getElementById("cv-modal").classList.remove("open");
  });

  document.getElementById("cv-modal").addEventListener("click", (e) => {
    if (e.target.id === "cv-modal") e.target.classList.remove("open");
  });

  // About Me Tabs
  function setAboutView(tab) {
    const btnProf = document.getElementById("tab-btn-profile");
    const btnTime = document.getElementById("tab-btn-timeline");
    const viewProf = document.getElementById("about-view-profile");
    const viewTime = document.getElementById("about-view-timeline");

    if (tab === "profile") {
      btnProf.classList.add("active");
      btnTime.classList.remove("active");
      viewProf.style.display = "grid";
      viewTime.style.display = "none";
    } else {
      btnTime.classList.add("active");
      btnProf.classList.remove("active");
      viewProf.style.display = "none";
      viewTime.style.display = "flex";
    }
  }

  document
    .getElementById("tab-btn-profile")
    .addEventListener("click", () => setAboutView("profile"));
  document
    .getElementById("tab-btn-timeline")
    .addEventListener("click", () => setAboutView("timeline"));

  // Show More Works Toggle
  document
    .getElementById("btn-toggle-all-works")
    .addEventListener("click", () => {
      showAllWorks = !showAllWorks;
      renderWorksSection();
    });

  // Theme Toggle
  document.getElementById("theme-toggle-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    document.getElementById("theme-icon").innerHTML = isDark
      ? '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>'
      : '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></svg>';
  });

  // Mobile Menu Toggle
  const mobileDropdown = document.getElementById("mobile-dropdown");
  document
    .getElementById("mobile-menu-toggle")
    .addEventListener("click", () => {
      mobileDropdown.classList.toggle("open");
    });
  mobileDropdown.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => mobileDropdown.classList.remove("open"));
  });

  // Contact Form Submit
  document
    .getElementById("public-contact-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      const firstName = document.getElementById("c-first-name").value.trim();
      const lastName = document.getElementById("c-last-name").value.trim();
      const email = document.getElementById("c-email").value.trim();
      const category = document.getElementById("c-category").value;
      const body = document.getElementById("c-body").value.trim();

      if (!firstName || !email || !body) {
        showToast("Mohon isi nama depan, email, dan pesan Anda.", true);
        return;
      }

      siteData.messages.unshift({
        id: `msg-${Date.now()}`,
        firstName,
        lastName,
        email,
        category,
        body,
        createdAt: new Date().toLocaleString("id-ID", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        read: false,
      });
      saveSiteData();
      e.target.reset();
      showToast("Pesan tersimpan di browser ini.");
    });

  // Initialize App
  renderAll();
})();
