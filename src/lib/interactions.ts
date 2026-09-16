import { copyCitation } from "./copy.mjs";

// Progressive enhancement: links open full images when JavaScript is unavailable.
let activePreview: HTMLElement | null = null;
let pinned = false;
let closeTimer: ReturnType<typeof setTimeout> | undefined;
const hidePreview = () => {
  clearTimeout(closeTimer);
  activePreview?.querySelector<HTMLElement>('[data-preview-panel]')?.setAttribute('hidden', '');
  activePreview?.querySelector('[data-preview-trigger]')?.setAttribute('aria-expanded', 'false');
  activePreview = null;
  pinned = false;
};
const positionPreview = () => {
  if (!activePreview) return;
  const anchor = activePreview.querySelector<HTMLElement>('[data-preview-trigger]')!;
  const panel = activePreview.querySelector<HTMLElement>('[data-preview-panel]')!;
  const rect = anchor.getBoundingClientRect();
  const left = Math.max(12, Math.min(rect.left, window.innerWidth - panel.offsetWidth - 12));
  const below = rect.bottom + 4;
  const top = below + panel.offsetHeight <= window.innerHeight - 12 ? below : Math.max(12, rect.top - panel.offsetHeight - 4);
  panel.style.left = `${left}px`;
  panel.style.top = `${top}px`;
};
const showPreview = (wrapper: HTMLElement) => {
  clearTimeout(closeTimer);
  if (activePreview !== wrapper) hidePreview();
  activePreview = wrapper;
  wrapper.querySelector<HTMLElement>('[data-preview-panel]')!.hidden = false;
  wrapper.querySelector('[data-preview-trigger]')!.setAttribute('aria-expanded', 'true');
  positionPreview();
};
document.querySelectorAll<HTMLElement>('[data-image-preview]').forEach(wrapper => {
  const trigger = wrapper.querySelector<HTMLAnchorElement>('[data-preview-trigger]')!;
  trigger.setAttribute('role', 'button');
  wrapper.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse' && !pinned) showPreview(wrapper);
    clearTimeout(closeTimer);
  });
  wrapper.addEventListener('pointerleave', () => {
    if (!pinned) closeTimer = setTimeout(() => { if (activePreview === wrapper) hidePreview(); }, 180);
  });
  trigger.addEventListener('focus', () => showPreview(wrapper));
  wrapper.addEventListener('focusout', event => {
    if (!wrapper.contains(event.relatedTarget as Node | null)) hidePreview();
  });
  trigger.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (activePreview === wrapper && pinned) hidePreview();
    else { showPreview(wrapper); pinned = true; }
  });
  trigger.addEventListener('keydown', event => {
    if (event.key === ' ') { event.preventDefault(); trigger.click(); }
  });
});
const dismissOutsidePreview = (event: Event) => {
  if (activePreview && !activePreview.contains(event.target as Node)) hidePreview();
};
document.addEventListener('pointerdown', dismissOutsidePreview);
// Also handle activation from assistive technology and click-only input clients.
document.addEventListener('click', dismissOutsidePreview);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && activePreview) {
    const trigger = activePreview.querySelector<HTMLElement>('[data-preview-trigger]');
    trigger?.focus();
    hidePreview();
  }
});
document.addEventListener('toggle', event => {
  if (event.target instanceof HTMLDetailsElement && !event.target.open && activePreview && event.target.contains(activePreview)) hidePreview();
}, true);
window.addEventListener('resize', positionPreview);
window.addEventListener('scroll', positionPreview, { passive: true });

document
  .querySelectorAll<HTMLAnchorElement>("[data-language-link]")
  .forEach((link) => {
    const keepHash = () => {
      const target = new URL(link.href);
      target.hash = window.location.hash;
      link.href = target.href;
    };
    keepHash();
    window.addEventListener("hashchange", keepHash);
  });
document
  .querySelectorAll<HTMLButtonElement>("[data-copy]")
  .forEach((button) => {
    button.addEventListener("click", async () => {
      const panel = button.closest(".disclosure-content");
      const text = panel?.querySelector("code")?.textContent || "";
      const status = panel?.querySelector<HTMLElement>(".copy-status");
      button.disabled = true;
      const copied = await copyCitation(text, navigator.clipboard);
      button.disabled = false;
      if (status) {
        status.textContent = copied
          ? button.dataset.success || "Copied"
          : button.dataset.failure || "Select text to copy.";
        status.classList.toggle("error", !copied);
      }
    });
  });
document.querySelectorAll<HTMLVideoElement>("[data-video]").forEach((video) => {
  const failure = () => {
    const fallback = video
      .closest("[data-video-frame]")
      ?.querySelector<HTMLElement>(".video-error");
    if (fallback) fallback.hidden = false;
  };
  video.addEventListener("error", failure);
  video.querySelector("source")?.addEventListener("error", failure);
  if (video.error || video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE)
    failure();
});
const sections = [...document.querySelectorAll<HTMLElement>("[data-section]")];
const links = [
  ...document.querySelectorAll<HTMLAnchorElement>("[data-section-link]"),
];
if (sections.length && links.length) {
  let queued = false;
  const update = () => {
    queued = false;
    const current = sections.reduce(
      (selected, section) =>
        section.getBoundingClientRect().top <= 180 ? section.id : selected,
      sections[0].id,
    );
    for (const link of links) {
      if (link.dataset.sectionLink === current)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    }
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}
