      (function () {
        const STORAGE_KEY = "iqbal_fadil_vanilla_portfolio_v1";

        const DEFAULT_DATA = {
          profile: {
            brandName: "Portfolio.",
            greeting: "Hi, I'm Iqbal Fadil",
            name: "Iqbal Fadil",
            roleTitle:
              "Information Systems Student & Multidisciplinary Creator",
            heroBio:
              "Mahasiswa S1 Sistem Informasi Universitas Ahmad Dahlan (UAD) Yogyakarta yang memadukan estetika fotografi, sinematografi, dan desain grafis dengan pengembangan sistem web modern.",
            aboutSummary:
              "Berdomisili di Banguntapan, Bantul, Yogyakarta. Saya percaya karya terbaik lahir dari perpaduan kepekaan visual yang jujur dan arsitektur teknologi yang terstruktur. Aktif memimpin inovasi riset mahasiswa di PKM Center UAD serta berkontribusi di berbagai gerakan kreatif dan kepemudaan.",
            location: "Banguntapan, Bantul, Yogyakarta, Indonesia",
            email: "iqbalfadil.work@gmail.com",
            instagramUrl: "https://instagram.com",
            tiktokUrl: "https://tiktok.com",
            githubUrl: "https://github.com",
            youtubeUrl: "https://youtube.com",
            portraitUrl:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
            aboutPhotoUrl:
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=85",
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
              degree:
                "S1 Sistem Informasi — Fakultas Sains & Teknologi Terapan",
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
              imageUrl:
                "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=85",
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
              imageUrl:
                "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=85",
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
              imageUrl:
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
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
              subtitle:
                "Kompetisi Motret #5 — Eksplorasi Cahaya & Geometris Ruang",
              description:
                "Seri fotografi arsitektur dan ruang kota Yogyakarta saat golden hour. Mengeksplorasi garis geometris bangunan modern, bayangan kontras, dan perspektif low-angle yang dramatis.",
              imageUrl:
                "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
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
              imageUrl:
                "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=85",
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
              subtitle:
                "Poster & Konten Edukasi Lingkungan — Youth Ranger Indonesia",
              description:
                "Seri desain poster kampanye digital untuk memperingati Hari Udara Bersih Internasional bersama Youth Ranger Indonesia Regional Yogyakarta. Mengombinasikan tipografi modern dan pesan aksi hijau.",
              imageUrl:
                "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=85",
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
        let activeWorkCategory = "Semua";
        let showAllWorks = false;
        let isAdminAuthenticated = false;
        let activeAdminTab = "profile";
        let editingWorkId = null;

        function loadSiteData() {
          try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
              const parsed = JSON.parse(raw);
              return {
                ...DEFAULT_DATA,
                ...parsed,
                profile: { ...DEFAULT_DATA.profile, ...(parsed.profile || {}) },
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
          document.getElementById("about-summary-text").textContent =
            p.aboutSummary;

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
          document.getElementById("skills-grid-container").innerHTML =
            siteData.skills
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
                  <button type="button" class="btn-card-detail" data-work-id="${escapeHtml(work.id)}">👁 Detail</button>
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

        document
          .getElementById("close-work-modal")
          .addEventListener("click", () => {
            document
              .getElementById("work-detail-modal")
              .classList.remove("open");
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

        document
          .getElementById("close-cv-modal")
          .addEventListener("click", () => {
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
        document
          .getElementById("theme-toggle-btn")
          .addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            document.getElementById("theme-icon").textContent = isDark
              ? "☀️"
              : "🌙";
          });

        // Mobile Menu Toggle
        const mobileDropdown = document.getElementById("mobile-dropdown");
        document
          .getElementById("mobile-menu-toggle")
          .addEventListener("click", () => {
            mobileDropdown.classList.toggle("open");
          });
        mobileDropdown.querySelectorAll("a").forEach((a) => {
          a.addEventListener("click", () =>
            mobileDropdown.classList.remove("open"),
          );
        });

        // Contact Form Submit
        document
          .getElementById("public-contact-form")
          .addEventListener("submit", (e) => {
            e.preventDefault();
            const firstName = document
              .getElementById("c-first-name")
              .value.trim();
            const lastName = document
              .getElementById("c-last-name")
              .value.trim();
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
            showToast(
              "Pesan berhasil dikirim! Tersimpan di Kotak Masuk Admin.",
            );
          });

        // ======================================================================
        // HIDDEN ADMIN ACCESS & CMS WORKSPACE
        // ======================================================================
        function triggerAdminAccess() {
          if (isAdminAuthenticated) {
            openAdminWorkspace();
          } else {
            document.getElementById("pin-input-field").value = "";
            document.getElementById("pin-error-msg").style.display = "none";
            document.getElementById("pin-modal").classList.add("open");
          }
        }

        // Keyboard shortcut Ctrl + Shift + A
        window.addEventListener("keydown", (e) => {
          if (
            (e.ctrlKey || e.metaKey) &&
            e.shiftKey &&
            e.key.toLowerCase() === "a"
          ) {
            e.preventDefault();
            triggerAdminAccess();
          }
        });

        // Double-click © in Footer
        document
          .getElementById("secret-admin-trigger")
          .addEventListener("dblclick", triggerAdminAccess);

        document
          .getElementById("close-pin-modal")
          .addEventListener("click", () => {
            document.getElementById("pin-modal").classList.remove("open");
          });

        document
          .getElementById("pin-login-form")
          .addEventListener("submit", (e) => {
            e.preventDefault();
            const val = document.getElementById("pin-input-field").value.trim();
            if (val === "1234") {
              isAdminAuthenticated = true;
              document.getElementById("pin-modal").classList.remove("open");
              openAdminWorkspace();
              showToast(
                "Mode Admin aktif. Semua perubahan tersimpan otomatis.",
              );
            } else {
              const errEl = document.getElementById("pin-error-msg");
              errEl.textContent = "PIN salah. Gunakan PIN default: 1234";
              errEl.style.display = "block";
            }
          });

        document
          .getElementById("btn-demo-admin")
          .addEventListener("click", () => {
            isAdminAuthenticated = true;
            document.getElementById("pin-modal").classList.remove("open");
            openAdminWorkspace();
            showToast("Masuk ke Mode Demo Admin CMS.");
          });

        function openAdminWorkspace() {
          document.getElementById("admin-cms-modal").classList.add("open");
          renderAdminTab();
        }

        document
          .getElementById("admin-close-btn")
          .addEventListener("click", () => {
            document.getElementById("admin-cms-modal").classList.remove("open");
          });

        document
          .getElementById("admin-lock-btn")
          .addEventListener("click", () => {
            isAdminAuthenticated = false;
            document.getElementById("admin-cms-modal").classList.remove("open");
            showToast("Keluar dari Mode Admin.");
          });

        document
          .getElementById("admin-export-btn")
          .addEventListener("click", () => {
            const blob = new Blob([JSON.stringify(siteData, null, 2)], {
              type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `iqbal-fadil-portfolio-${new Date().toISOString().slice(0, 10)}.json`;
            a.click();
            URL.revokeObjectURL(url);
            showToast("File JSON backup berhasil diunduh.");
          });

        document.querySelectorAll(".admin-tab-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            document
              .querySelectorAll(".admin-tab-btn")
              .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            activeAdminTab = btn.getAttribute("data-tab");
            renderAdminTab();
          });
        });

        function handleFileToBase64(file, callback) {
          if (!file) return;
          if (file.size > 2.5 * 1024 * 1024) {
            showToast(
              "Ukuran gambar maksimal 2.5MB agar tersimpan optimal di browser.",
              true,
            );
            return;
          }
          const reader = new FileReader();
          reader.onload = (ev) => {
            callback(ev.target.result);
            showToast("Gambar lokal berhasil dimuat.");
          };
          reader.readAsDataURL(file);
        }

        function renderAdminTab() {
          const unread = siteData.messages.filter((m) => !m.read).length;
          document.getElementById("admin-tab-msg-btn").textContent =
            `5. Pesan Masuk${unread > 0 ? ` (${unread})` : ""}`;
          const container = document.getElementById("admin-tab-content");

          // 1. PROFILE TAB
          if (activeAdminTab === "profile") {
            const p = siteData.profile;
            container.innerHTML = `
            <div style="max-width: 46rem;">
              <form id="admin-profile-form" class="admin-box" style="display:flex; flex-direction:column; gap:0.85rem;">
                <div style="font-size:0.85rem; font-weight:800; color:#EA580C;">Edit Informasi Utama &amp; Hero</div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:0.75rem;">
                  <div>
                    <label style="font-size:0.72rem; font-weight:700;">Greeting Hero</label>
                    <input type="text" id="ap-greeting" class="admin-input" value="${escapeHtml(p.greeting)}" />
                  </div>
                  <div>
                    <label style="font-size:0.72rem; font-weight:700;">Nama Lengkap</label>
                    <input type="text" id="ap-name" class="admin-input" value="${escapeHtml(p.name)}" />
                  </div>
                </div>
                <div>
                  <label style="font-size:0.72rem; font-weight:700;">Headline / Role</label>
                  <input type="text" id="ap-role" class="admin-input" value="${escapeHtml(p.roleTitle)}" />
                </div>
                <div>
                  <label style="font-size:0.72rem; font-weight:700;">Foto Profil Hero (URL atau Upload File)</label>
                  <div style="display:flex; gap:0.5rem; align-items:center; margin-top:0.25rem;">
                    <input type="text" id="ap-portrait" class="admin-input" value="${escapeHtml(p.portraitUrl)}" />
                    <label style="padding:0.55rem 0.9rem; border-radius:0.75rem; background:#18181B; color:#fff; font-size:0.72rem; font-weight:600; cursor:pointer; white-space:nowrap;">
                      Upload
                      <input type="file" id="ap-portrait-file" accept="image/*" style="display:none;" />
                    </label>
                  </div>
                </div>
                <div>
                  <label style="font-size:0.72rem; font-weight:700;">Bio Singkat Hero</label>
                  <textarea id="ap-herobio" rows="2" class="admin-input">${escapeHtml(p.heroBio)}</textarea>
                </div>
                <div>
                  <label style="font-size:0.72rem; font-weight:700;">Narasi About Me</label>
                  <textarea id="ap-about" rows="3" class="admin-input">${escapeHtml(p.aboutSummary)}</textarea>
                </div>
                <button type="submit" class="btn-primary-pill" style="width:fit-content;">Simpan Perubahan Profil</button>
              </form>

              <div class="admin-box" style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:0.75rem;">
                <div>
                  <div style="font-size:0.8rem; font-weight:700;">Backup &amp; Reset Data</div>
                  <div style="font-size:0.7rem; color:#71717A;">Import file JSON atau kembalikan ke data awal.</div>
                </div>
                <div style="display:flex; gap:0.5rem;">
                  <label style="padding:0.5rem 0.9rem; border-radius:0.75rem; border:1px solid #D4D4D8; font-size:0.72rem; font-weight:600; cursor:pointer;">
                    ⬆ Import JSON
                    <input type="file" id="admin-import-file" accept=".json" style="display:none;" />
                  </label>
                  <button type="button" id="admin-reset-btn" style="padding:0.5rem 0.9rem; border-radius:0.75rem; border:1px solid #FCA5A5; background:#FEF2F2; color:#DC2626; font-size:0.72rem; font-weight:600; cursor:pointer;">
                    ↺ Reset Default
                  </button>
                </div>
              </div>
            </div>
          `;

            document
              .getElementById("ap-portrait-file")
              .addEventListener("change", (e) => {
                handleFileToBase64(e.target.files[0], (b64) => {
                  document.getElementById("ap-portrait").value = b64;
                });
              });

            document
              .getElementById("admin-profile-form")
              .addEventListener("submit", (e) => {
                e.preventDefault();
                siteData.profile.greeting =
                  document.getElementById("ap-greeting").value;
                siteData.profile.name =
                  document.getElementById("ap-name").value;
                siteData.profile.roleTitle =
                  document.getElementById("ap-role").value;
                siteData.profile.portraitUrl =
                  document.getElementById("ap-portrait").value;
                siteData.profile.heroBio =
                  document.getElementById("ap-herobio").value;
                siteData.profile.aboutSummary =
                  document.getElementById("ap-about").value;
                saveSiteData();
                renderAll();
                showToast("Profil berhasil diperbarui.");
              });

            document
              .getElementById("admin-import-file")
              .addEventListener("change", (e) => {
                const file = e.target.files[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = (ev) => {
                  try {
                    const parsed = JSON.parse(ev.target.result);
                    if (parsed.profile && Array.isArray(parsed.works)) {
                      siteData = parsed;
                      saveSiteData();
                      renderAll();
                      renderAdminTab();
                      showToast("Data berhasil dipulihkan dari JSON.");
                    }
                  } catch {
                    showToast("Format JSON tidak valid.", true);
                  }
                };
                reader.readAsText(file);
              });

            document
              .getElementById("admin-reset-btn")
              .addEventListener("click", () => {
                siteData = JSON.parse(JSON.stringify(DEFAULT_DATA));
                localStorage.removeItem(STORAGE_KEY);
                renderAll();
                renderAdminTab();
                showToast("Konten dikembalikan ke pengaturan default.");
              });
          }

          // 2. TIMELINE TAB
          if (activeAdminTab === "timeline") {
            container.innerHTML = `
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:1.5rem;">
              <div>
                <h3 style="font-size:1rem; font-weight:800; margin-bottom:0.75rem;">Riwayat Pendidikan</h3>
                <form id="admin-add-edu-form" class="admin-box" style="display:flex; flex-direction:column; gap:0.55rem;">
                  <input type="text" id="ae-period" class="admin-input" placeholder="Periode (cth: 2025 — Sekarang)" required />
                  <input type="text" id="ae-inst" class="admin-input" placeholder="Nama Institusi" required />
                  <input type="text" id="ae-deg" class="admin-input" placeholder="Program Studi / Jurusan" required />
                  <textarea id="ae-notes" rows="2" class="admin-input" placeholder="Catatan singkat..."></textarea>
                  <button type="submit" class="btn-primary-pill" style="width:fit-content;">+ Tambah Pendidikan</button>
                </form>
                ${siteData.education
                  .map(
                    (
                      edu,
                    ) => `<div class="admin-box" style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
                      <div>
                        <div class="font-mono" style="font-size:0.65rem; color:#EA580C; font-weight:700;">${escapeHtml(edu.period)}</div>
                        <div style="font-weight:700; font-size:0.82rem;">${escapeHtml(edu.institution)}</div>
                        <div style="font-size:0.72rem; color:#52525B;">${escapeHtml(edu.degree)}</div>
                      </div>
                      <button type="button" data-del-edu="${escapeHtml(edu.id)}" style="border:none; background:none; color:#EF4444; cursor:pointer; font-weight:700;">✕</button>
                    </div>`,
                  )
                  .join("")}
              </div>

              <div>
                <h3 style="font-size:1rem; font-weight:800; margin-bottom:0.75rem;">Pengalaman &amp; Kepanitiaan</h3>
                <form id="admin-add-exp-form" class="admin-box" style="display:flex; flex-direction:column; gap:0.55rem;">
                  <input type="text" id="ax-period" class="admin-input" placeholder="Periode (cth: 2026)" required />
                  <input type="text" id="ax-role" class="admin-input" placeholder="Peran / Jabatan" required />
                  <input type="text" id="ax-org" class="admin-input" placeholder="Nama Organisasi / Event" required />
                  <input type="text" id="ax-type" class="admin-input" placeholder="Kategori (Organisasi / Kepanitiaan)" value="Organisasi Kampus" />
                  <textarea id="ax-desc" rows="2" class="admin-input" placeholder="Deskripsi kontribusi..."></textarea>
                  <button type="submit" class="btn-primary-pill" style="width:fit-content;">+ Tambah Pengalaman</button>
                </form>
                ${siteData.experience
                  .map(
                    (
                      exp,
                    ) => `<div class="admin-box" style="display:flex; justify-content:space-between; align-items:flex-start; gap:0.5rem;">
                      <div>
                        <div class="font-mono" style="font-size:0.65rem; color:#EA580C; font-weight:700;">${escapeHtml(exp.period)} · ${escapeHtml(exp.type)}</div>
                        <div style="font-weight:700; font-size:0.82rem;">${escapeHtml(exp.role)}</div>
                        <div style="font-size:0.72rem; color:#52525B;">${escapeHtml(exp.organization)}</div>
                      </div>
                      <button type="button" data-del-exp="${escapeHtml(exp.id)}" style="border:none; background:none; color:#EF4444; cursor:pointer; font-weight:700;">✕</button>
                    </div>`,
                  )
                  .join("")}
              </div>
            </div>
          `;

            document
              .getElementById("admin-add-edu-form")
              .addEventListener("submit", (e) => {
                e.preventDefault();
                siteData.education.unshift({
                  id: `edu-${Date.now()}`,
                  period: document.getElementById("ae-period").value,
                  institution: document.getElementById("ae-inst").value,
                  degree: document.getElementById("ae-deg").value,
                  notes: document.getElementById("ae-notes").value,
                });
                saveSiteData();
                renderAll();
                renderAdminTab();
                showToast("Riwayat pendidikan ditambahkan.");
              });

            document
              .getElementById("admin-add-exp-form")
              .addEventListener("submit", (e) => {
                e.preventDefault();
                siteData.experience.unshift({
                  id: `exp-${Date.now()}`,
                  period: document.getElementById("ax-period").value,
                  role: document.getElementById("ax-role").value,
                  organization: document.getElementById("ax-org").value,
                  type: document.getElementById("ax-type").value,
                  description: document.getElementById("ax-desc").value,
                });
                saveSiteData();
                renderAll();
                renderAdminTab();
                showToast("Pengalaman baru ditambahkan.");
              });

            container.querySelectorAll("[data-del-edu]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-del-edu");
                siteData.education = siteData.education.filter(
                  (i) => i.id !== id,
                );
                saveSiteData();
                renderAll();
                renderAdminTab();
              });
            });

            container.querySelectorAll("[data-del-exp]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-del-exp");
                siteData.experience = siteData.experience.filter(
                  (i) => i.id !== id,
                );
                saveSiteData();
                renderAll();
                renderAdminTab();
              });
            });
          }

          // 3. SKILLS TAB
          if (activeAdminTab === "skills") {
            container.innerHTML = `
            <div style="max-width: 44rem;">
              <form id="admin-add-skill-form" class="admin-box" style="display:flex; flex-direction:column; gap:0.75rem;">
                <div style="font-size:0.82rem; font-weight:800; color:#EA580C;">+ Tambah Skill Baru</div>
                <div style="display:grid; grid-template-columns: 2fr 1fr 1fr; gap:0.6rem;">
                  <input type="text" id="as-name" class="admin-input" placeholder="Nama Skill (cth: DaVinci Resolve)" required />
                  <input type="text" id="as-cat" class="admin-input" placeholder="Kategori (cth: Videografi)" value="Coding" />
                  <input type="text" id="as-badge" class="admin-input font-mono" maxlength="4" placeholder="Kode (DR)" value="NEW" />
                </div>
                <button type="submit" class="btn-primary-pill" style="width:fit-content;">Simpan Skill</button>
              </form>

              <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.75rem;">
                ${siteData.skills
                  .map(
                    (
                      sk,
                    ) => `<div class="admin-box" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0;">
                      <div style="display:flex; align-items:center; gap:0.6rem;">
                        <span class="font-mono" style="width:1.85rem; height:1.85rem; border-radius:0.5rem; background:${escapeHtml(sk.badgeBg)}; color:${escapeHtml(sk.badgeText)}; font-size:0.7rem; font-weight:700; display:flex; align-items:center; justify-content:center;">${escapeHtml(sk.badge)}</span>
                        <div>
                          <div style="font-weight:700; font-size:0.78rem;">${escapeHtml(sk.name)}</div>
                          <div style="font-size:0.68rem; color:#71717A;">${escapeHtml(sk.category)}</div>
                        </div>
                      </div>
                      <button type="button" data-del-sk="${escapeHtml(sk.id)}" style="border:none; background:none; color:#EF4444; cursor:pointer; font-weight:700;">✕</button>
                    </div>`,
                  )
                  .join("")}
              </div>
            </div>
          `;

            document
              .getElementById("admin-add-skill-form")
              .addEventListener("submit", (e) => {
                e.preventDefault();
                siteData.skills.push({
                  id: `sk-${Date.now()}`,
                  name: document.getElementById("as-name").value.trim(),
                  category:
                    document.getElementById("as-cat").value.trim() || "Coding",
                  badge:
                    document.getElementById("as-badge").value.trim() || "SK",
                  badgeBg: "#18181B",
                  badgeText: "#FB923C",
                });
                saveSiteData();
                renderAll();
                renderAdminTab();
                showToast("Skill baru ditambahkan.");
              });

            container.querySelectorAll("[data-del-sk]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-del-sk");
                siteData.skills = siteData.skills.filter((s) => s.id !== id);
                saveSiteData();
                renderAll();
                renderAdminTab();
              });
            });
          }

          // 4. WORKS TAB
          if (activeAdminTab === "works") {
            const editingWork = editingWorkId
              ? siteData.works.find((w) => w.id === editingWorkId)
              : null;
            container.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:1rem;">
              <form id="admin-work-form" class="admin-box" style="display:flex; flex-direction:column; gap:0.75rem; border:2px solid rgba(234,88,12,0.35);">
                <div style="font-size:0.82rem; font-weight:800; color:#EA580C;">
                  ${editingWork ? "✎ Edit Karya Terpilih" : "+ Tambah Karya / Project Baru"}
                </div>
                <div style="display:grid; grid-template-columns: 2fr 1fr 1fr; gap:0.65rem;">
                  <input type="text" id="aw-title" class="admin-input" placeholder="Judul Karya *" required value="${editingWork ? escapeHtml(editingWork.title) : ""}" />
                  <select id="aw-cat" class="admin-input">
                    ${[
                      "Fotografi",
                      "Videografi",
                      "Desain Grafis",
                      "Project Coding",
                    ]
                      .map(
                        (c) =>
                          `<option value="${c}" ${editingWork && editingWork.category === c ? "selected" : ""}>${c}</option>`,
                      )
                      .join("")}
                  </select>
                  <input type="text" id="aw-year" class="admin-input" placeholder="Tahun" value="${editingWork ? escapeHtml(editingWork.year) : "2026"}" />
                </div>
                <div style="display:grid; grid-template-columns: 2fr 1fr; gap:0.65rem;">
                  <input type="text" id="aw-sub" class="admin-input" placeholder="Subjudul / Konteks" value="${editingWork ? escapeHtml(editingWork.subtitle) : ""}" />
                  <input type="text" id="aw-role" class="admin-input" placeholder="Peran (cth: Fotografer)" value="${editingWork ? escapeHtml(editingWork.role) : ""}" />
                </div>
                <div style="display:flex; gap:0.5rem; align-items:center;">
                  <input type="text" id="aw-img" class="admin-input" placeholder="URL Gambar Thumbnail" value="${editingWork ? escapeHtml(editingWork.imageUrl) : "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"}" />
                  <label style="padding:0.55rem 0.9rem; border-radius:0.75rem; background:#18181B; color:#fff; font-size:0.72rem; font-weight:600; cursor:pointer; white-space:nowrap;">
                    Upload Gambar
                    <input type="file" id="aw-img-file" accept="image/*" style="display:none;" />
                  </label>
                </div>
                <div style="display:grid; grid-template-columns: 1fr 1fr; gap:0.65rem;">
                  <input type="text" id="aw-tags" class="admin-input" placeholder="Tags (pisahkan koma)" value="${editingWork ? escapeHtml((editingWork.tags || []).join(", ")) : "Canon 650D, Lightroom"}" />
                  <input type="url" id="aw-link" class="admin-input" placeholder="Link Eksternal (opsional)" value="${editingWork ? escapeHtml(editingWork.link || "") : ""}" />
                </div>
                <textarea id="aw-desc" rows="2" class="admin-input" placeholder="Deskripsi karya...">${editingWork ? escapeHtml(editingWork.description) : ""}</textarea>
                <div style="display:flex; gap:0.5rem;">
                  <button type="submit" class="btn-primary-pill">${editingWork ? "Simpan Perubahan" : "Tambahkan Karya"}</button>
                  ${editingWork ? '<button type="button" id="aw-cancel-edit" class="btn-outline-pill">Batal Edit</button>' : ""}
                </div>
              </form>

              <div>
                ${siteData.works
                  .map(
                    (
                      w,
                    ) => `<div class="admin-box" style="display:flex; justify-content:space-between; align-items:center; gap:0.75rem;">
                      <div style="display:flex; align-items:center; gap:0.75rem;">
                        <img src="${escapeHtml(w.imageUrl)}" alt="" style="width:3.8rem; height:2.8rem; border-radius:0.6rem; object-fit:cover;" />
                        <div>
                          <span style="padding:0.15rem 0.5rem; border-radius:9999px; background:#FFEDD5; color:#EA580C; font-size:0.62rem; font-weight:700;">${escapeHtml(w.category)} · ${escapeHtml(w.year)}</span>
                          <div style="font-weight:700; font-size:0.82rem; margin-top:0.15rem;">${escapeHtml(w.title)}</div>
                        </div>
                      </div>
                      <div style="display:flex; gap:0.4rem;">
                        <button type="button" data-edit-work="${escapeHtml(w.id)}" style="padding:0.35rem 0.7rem; border-radius:0.6rem; border:1px solid #D4D4D8; background:#FAFAFA; font-size:0.72rem; font-weight:600; cursor:pointer;">Edit</button>
                        <button type="button" data-del-work="${escapeHtml(w.id)}" style="padding:0.35rem 0.7rem; border-radius:0.6rem; border:1px solid #FCA5A5; background:#FEF2F2; color:#DC2626; font-size:0.72rem; font-weight:600; cursor:pointer;">Hapus</button>
                      </div>
                    </div>`,
                  )
                  .join("")}
              </div>
            </div>
          `;

            document
              .getElementById("aw-img-file")
              .addEventListener("change", (e) => {
                handleFileToBase64(e.target.files[0], (b64) => {
                  document.getElementById("aw-img").value = b64;
                });
              });

            if (document.getElementById("aw-cancel-edit")) {
              document
                .getElementById("aw-cancel-edit")
                .addEventListener("click", () => {
                  editingWorkId = null;
                  renderAdminTab();
                });
            }

            document
              .getElementById("admin-work-form")
              .addEventListener("submit", (e) => {
                e.preventDefault();
                const payload = {
                  title: document.getElementById("aw-title").value.trim(),
                  category: document.getElementById("aw-cat").value,
                  year:
                    document.getElementById("aw-year").value.trim() || "2026",
                  subtitle: document.getElementById("aw-sub").value.trim(),
                  role:
                    document.getElementById("aw-role").value.trim() ||
                    "Creator",
                  imageUrl: document.getElementById("aw-img").value.trim(),
                  tags: document
                    .getElementById("aw-tags")
                    .value.split(",")
                    .map((t) => t.trim())
                    .filter(Boolean),
                  link: document.getElementById("aw-link").value.trim(),
                  description: document.getElementById("aw-desc").value.trim(),
                  metaExif: "High Resolution",
                };

                if (editingWorkId) {
                  siteData.works = siteData.works.map((w) =>
                    w.id === editingWorkId ? { ...w, ...payload } : w,
                  );
                  editingWorkId = null;
                  showToast("Karya berhasil diperbarui.");
                } else {
                  siteData.works.unshift({
                    id: `work-${Date.now()}`,
                    ...payload,
                  });
                  showToast("Karya baru ditambahkan.");
                }
                saveSiteData();
                renderAll();
                renderAdminTab();
              });

            container.querySelectorAll("[data-edit-work]").forEach((b) => {
              b.addEventListener("click", () => {
                editingWorkId = b.getAttribute("data-edit-work");
                renderAdminTab();
              });
            });

            container.querySelectorAll("[data-del-work]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-del-work");
                siteData.works = siteData.works.filter((w) => w.id !== id);
                saveSiteData();
                renderAll();
                renderAdminTab();
                showToast("Karya dihapus.");
              });
            });
          }

          // 5. MESSAGES TAB
          if (activeAdminTab === "messages") {
            container.innerHTML = `
            <div style="max-width: 44rem;">
              <h3 style="font-size:1rem; font-weight:800; margin-bottom:0.75rem;">Kotak Masuk Formulir Kontak</h3>
              ${
                siteData.messages.length === 0
                  ? '<div class="admin-box" style="text-align:center; color:#71717A; font-size:0.8rem;">Belum ada pesan masuk.</div>'
                  : siteData.messages
                      .map(
                        (
                          m,
                        ) => `<div class="admin-box" style="border-left:${!m.read ? "4px solid #EA580C" : "1px solid #E4E4E7"};">
                          <div style="display:flex; justify-content:space-between; font-size:0.82rem; font-weight:700;">
                            <span>${escapeHtml(m.firstName)} ${escapeHtml(m.lastName)} <span class="font-mono" style="font-weight:400; color:#71717A; font-size:0.72rem;">(${escapeHtml(m.email)})</span></span>
                            <span class="font-mono" style="font-size:0.68rem; color:#71717A;">${escapeHtml(m.createdAt)}</span>
                          </div>
                          <div style="font-size:0.72rem; font-weight:600; color:#EA580C; margin:0.2rem 0;">Kategori: ${escapeHtml(m.category)}</div>
                          <p style="font-size:0.78rem; color:#3F3F46; line-height:1.55;">${escapeHtml(m.body)}</p>
                          <div style="display:flex; gap:1rem; margin-top:0.65rem; font-size:0.72rem; font-weight:600;">
                            ${!m.read ? `<button type="button" data-read-msg="${escapeHtml(m.id)}" style="border:none; background:none; color:#EA580C; cursor:pointer; font-weight:700;">Tandai Sudah Dibaca</button>` : ""}
                            <button type="button" data-del-msg="${escapeHtml(m.id)}" style="border:none; background:none; color:#EF4444; cursor:pointer; font-weight:600;">Hapus Pesan</button>
                          </div>
                        </div>`,
                      )
                      .join("")
              }
            </div>
          `;

            container.querySelectorAll("[data-read-msg]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-read-msg");
                siteData.messages = siteData.messages.map((m) =>
                  m.id === id ? { ...m, read: true } : m,
                );
                saveSiteData();
                renderAdminTab();
              });
            });

            container.querySelectorAll("[data-del-msg]").forEach((b) => {
              b.addEventListener("click", () => {
                const id = b.getAttribute("data-del-msg");
                siteData.messages = siteData.messages.filter(
                  (m) => m.id !== id,
                );
                saveSiteData();
                renderAdminTab();
              });
            });
          }
        }

        // Initialize App
        renderAll();
      })();
    