(function () {
  // Teks dan gambar di DEFAULT_DATA menjadi sumber konten yang ditampilkan.
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
      brandName: "Portofolio.",
      greeting: "Hi, I'm Iqbal Fadil",
      name: "Iqbal Fadil",
      roleTitle: "Information Systems Student",
      heroBio:
        "Mahasiswa S1 Sistem Informasi Universitas Ahmad Dahlan (UAD) Yogyakarta yang memadukan estetika fotografi, sinematografi, dan desain grafis dengan pengembangan sistem web modern.",
      aboutSummary:
        "Berdomisili di Banguntapan, Bantul, Yogyakarta. Saya percaya karya terbaik lahir dari perpaduan kepekaan visual yang jujur dan arsitektur teknologi yang terstruktur. Aktif memimpin inovasi riset mahasiswa di PKM Center UAD serta berkontribusi di berbagai gerakan kreatif dan kepemudaan.",
      location: "Banguntapan, Bantul, Yogyakarta, Indonesia",
      email: "iqbalfadil.work@gmail.com",
      instagramUrl: "https://instagram.com/fadilif_",
      tiktokUrl: "https://tiktok.com",
      githubUrl: "https://github.com/afsansnusa",
      youtubeUrl: "https://youtube.com",
      portraitUrl: "./img/fadil.JPG",
      aboutPhotoUrl: "./img/iqbal.jpeg",
      stats: [
        { value: "4+", label: "Bidang Karya" },
        { value: "Sem 3", label: "S1 SI UAD" },
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

    works: [
      {
        id: "work-1",
        title: "Dokumentasi Bazar Murah & Jalan Sehat MA Al-Furqan Kebumen",
        category: "Videografi",
        year: "2023",
        subtitle: "Visual Essay & Liputan Dokumenter Kampus 4 UAD",
        description:
          "Dokumentasi video kegiatan bazar murah dan jalan sehat di MA Al-Furqan Kebumen. Menggunakan teknik sinematografi dinamis, transisi halus, dan grading warna Rec.709 untuk menghasilkan aftermovie yang menarik.",
        imageUrl: "./img/dok1.jpg",
        tags: ["Capcut", "Canon 650D"],
        metaExif: "1080p 24fps · Rec.709 · 04:32 Min",
        role: "Director, Videographer & Editor",
        link: "https://youtube.com",
      },
      {
        id: "work-2",
        title: "Desain Feed IG Struktural KPUM FAST 2026",
        category: "Desain Grafis",
        year: "2026",
        subtitle:
          "Feed IG Struktural Komisi Pemilihan Umum Mahasiswa FAST UAD 2026",
        description:
          "Seri desain feed Instagram untuk memperkenalkan struktur kepengurusan KPUM FAST UAD 2026. Menggunakan grid editorial yang konsisten, tipografi modern, dan palet warna institusional untuk menciptakan identitas visual yang profesional.",
        imageUrl: "./img/feedig.png",
        tags: ["Canva", "Editorial Grid"],
        metaExif: "A2 Print & Carousel Series · 300 DPI",
        role: "Graphic Designer & Visual Storyteller",
        link: "https://instagram.com",
      },
      {
        id: "work-3",
        title: "Landing Page KPUM FAST 2026",
        category: "Project Coding",
        year: "2026",
        subtitle: "Arsitektur Database Relasional & Aplikasi Web Kampus",
        description:
          "Perancangan Entity Relationship Diagram (ERD) ter-normalisasi lengkap dengan purwarupa aplikasi SIAKAD berbasis web untuk pengelolaan KRS mahasiswa, penjadwalan kuliah, dan manajemen nilai dosen.",
        imageUrl: "./img/webkpum.png",
        tags: ["HTML/CSS", "JavaScript"],
        metaExif: "18 Tabel Relasional · Role-Based Auth",
        role: "Frontend Developer & UI/UX Designer",
        link: "https://afsansnusa.github.io/portofolioku/",
      },
      {
        id: "work-4",
        title: "Susunan batu dalam mata air",
        category: "Fotografi",
        year: "2026",
        subtitle: "Fotografi Batu dan Air di mata air",
        description:
          "Fotografi close-up batuan di mata air dengan komposisi simetris dan pencahayaan alami. Menggunakan teknik depth of field untuk menonjolkan tekstur batu dan refleksi cahaya pada permukaan air.",
        imageUrl: "./img/alam.jpg",
        tags: ["Canon 1200D", "Lightroom", "Nature"],
        metaExif: "24mm · f/5.6 · 1/500s · ISO 100",
        role: "Photographer & Colorist",
        link: "https://instagram.com",
      },
      {
        id: "work-5",
        title: "Video Perkenalan P2K UAD 2025 style Cinematic",
        category: "Videografi",
        year: "2026",
        subtitle: "Video Perkenalan P2K UAD 2025 dengan Gaya Sinematik",
        description:
          "Sebuah video perkenalan untuk Program Pengenalan Kampus (P2K) Universitas Ahmad Dahlan 2025. Menggunakan teknik sinematografi sinematik, transisi kreatif, dan scoring musik yang imersif untuk menciptakan pengalaman visual yang menarik bagi mahasiswa baru.",
        imageUrl: "./img/p2k.jpg",
        tags: ["Redmi A1", "Capcut", "Cinematic Style"],
        metaExif: "24mm · f/5.6 · 1/500s · ISO 100",
        role: "Videographer & Editor",
        link: "https://github.com",
      },
      {
        id: "work-6",
        title: "Poster Hari Pancasila",
        category: "Desain Grafis",
        year: "2026",
        subtitle: "Poster Hari Besar — Youth Ranger Indonesia",
        description:
          "Seri desain poster untuk memperingati Hari Pancasila dari Youth Ranger Indonesia Regional Yogyakarta. Mengombinasikan tipografi modern, ilustrasi simbolis, dan palet warna nasional untuk menyampaikan pesan persatuan.",
        imageUrl: "./img/poster.png",
        tags: ["Canva", "Typography"],
        metaExif: "1080x1350px · Multi-Slide Visual",
        role: "Visual Designer",
        link: "https://instagram.com",
      },
      {
        id: "work-7",
        title: "Poster Acara LP4Y",
        category: "Desain Grafis",
        year: "2026",
        subtitle:
          "Poster Informasi Pendaftaran Acara LP4Y Cilincing Jakarta Utara",
        description:
          "Seri desain poster untuk menginformasikan pendaftaran acara LP4Y di Cilincing, Jakarta Utara. Menggunakan ilustrasi vektor, tipografi tegas, dan palet warna kontras untuk menarik perhatian audiens muda.",
        imageUrl: "./img/poster2.png",
        tags: ["Canva", "Campaign"],
        metaExif: "1080x1350px · One-Page Visual",
        role: "Visual Designer",
        link: "https://instagram.com",
      },
      {
        id: "work-8",
        title: "Film Pendek Guyub Rukun",
        category: "Videografi",
        year: "2023",
        subtitle: "Film Pendek Toleransi Beragama",
        description:
          "Sebuah film pendek yang mengangkat tema toleransi beragama di Indonesia. Menggunakan teknik sinematografi naratif, sound design yang imersif, dan color grading untuk menciptakan suasana emosional yang mendalam.",
        imageUrl: "./img/filpen1.jpg",
        tags: ["Capcut", "Redmi note 10 Pro"],
        metaExif: "1080p 24fps · 04:32 Min",
        role: "Director, Videographer & Editor",
        link: "https://youtube.com",
      },
      {
        id: "work-9",
        title: "Human Interest Story — Dokumentasi Kegiatan di Alam",
        category: "Fotografi",
        year: "2026",
        subtitle: "Fotografi Human Interest Story",
        description:
          "Fotografi human interest story yang menampilkan interaksi manusia dengan alam. Menggunakan komposisi candid, pencahayaan alami, dan fokus pada ekspresi emosional subjek untuk menyampaikan narasi visual yang kuat.",
        imageUrl: "./img/foto1.jpg",
        tags: ["Canon 1200D", "Lightroom", "Nature"],
        metaExif: "24mm · f/5.6 · 1/500s · ISO 100",
        role: "Photographer & Colorist",
        link: "https://instagram.com",
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
  const siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
  let activeWorkCategory = "Semua";
  let showAllWorks = false;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
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
              <div class="timeline-sub">${escapeHtml(exp.organization)} · ${escapeHtml(exp.type)}</div>
              <p class="timeline-desc">${escapeHtml(exp.description)}</p>
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
    const footerEmail = document.getElementById("footer-email");
    footerEmail.href = `mailto:${p.email}`;
    footerEmail.textContent = p.email;
    document.getElementById("footer-copy-name").textContent = p.name;
    document.getElementById("footer-ig").href =
      "https://instagram.com/fadilif_";
    document.getElementById("footer-tt").href = p.tiktokUrl;
    document.getElementById("footer-gh").href = "https://github.com/afsansnusa";
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
                    <div class="project-tags" aria-label="Perangkat dan catatan karya">
                      ${(work.tags || [])
                        .slice(0, 3)
                        .map((tag) => escapeHtml(tag))
                        .join(" · ")}
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

  // Initialize App
  renderAll();
})();
