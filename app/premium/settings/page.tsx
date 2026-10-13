import PremiumSettingsPage from './PremiumSettingsPage';

// Route segment config must live in a Server Component.
// Dynamic + edge runtime so the Vercel build emits a lambda for this route
// and next-on-pages can run it on Cloudflare.
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function PremiumSettings() {
  return <PremiumSettingsPage />;
}
