export const DEFAULT_SITE_ICON_PATH = '/icon.png';
const LEGACY_SITE_ICON_ROUTE = '/api/site-icon';

function normalizeIconUrl(iconUrl?: string | null): string | null {
  const value = iconUrl?.trim();

  if (!value) {
    return null;
  }

  if (value === LEGACY_SITE_ICON_ROUTE) {
    console.warn('[SiteIcon] Ignoring legacy /api/site-icon path.');
    return null;
  }

  return value;
}

export async function resolveSiteIconSrc(): Promise<string> {
  const resolvedRuntimeIcon = normalizeIconUrl(process.env.SITE_ICON_RESOLVED_URL);
  if (resolvedRuntimeIcon) {
    return resolvedRuntimeIcon;
  }

  const runtimeIconUrl = normalizeIconUrl(
    process.env.SITE_ICON_URL?.trim() || process.env.NEXT_PUBLIC_SITE_ICON_URL?.trim(),
  );
  if (runtimeIconUrl) {
    return runtimeIconUrl;
  }

  return DEFAULT_SITE_ICON_PATH;
}
