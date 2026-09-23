import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink/20 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 text-sm text-ink/60 sm:px-6">
        <span className="font-display">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <div className="flex gap-4">
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-rose-deep">
            Email
          </a>
          <a href={profile.social.linkedin} className="transition-colors hover:text-rose-deep">
            LinkedIn
          </a>
          <a href={profile.social.github} className="transition-colors hover:text-rose-deep">
            GitHub
          </a>
          <a href={profile.resumeUrl} className="transition-colors hover:text-rose-deep">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
