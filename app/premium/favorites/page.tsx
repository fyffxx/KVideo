import { Suspense } from 'react';
import {
  FavoritesPageContent,
  FavoritesPageFallback,
} from '@/components/favorites/FavoritesPageContent';

// Route segment config must live in a Server Component.
// Dynamic + edge runtime so the Vercel build emits a lambda for this route
// and next-on-pages can run it on Cloudflare.
export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default function PremiumFavorites() {
  return (
    <Suspense fallback={<FavoritesPageFallback isPremium />}>
      <FavoritesPageContent isPremium />
    </Suspense>
  );
}
