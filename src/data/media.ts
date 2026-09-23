// Shared optional fields for attaching supporting evidence to any entry —
// a gallery of photos (event photos, certificates, screenshots) and/or a
// link to a related LinkedIn post. Both are optional; omit them and the
// card renders with no media row at all.
export type SupportingMedia = {
  images?: Array<{ src: string; alt: string }>;
  linkedinUrl?: string;
};
