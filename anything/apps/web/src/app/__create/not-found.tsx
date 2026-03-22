import type { Route } from './+types/not-found';
import { data, useNavigate } from 'react-router';
import { SITE_NAME } from '@/app/seo/site';
import AnimatedGradientBackground from '@/components/ui/animated-gradient-background';

export async function loader({ params }: Route.LoaderArgs) {
  const splat = params['*'] ?? '';
  const path = splat ? `/${splat.replace(/^\/+/, '')}` : '/';
  return data({ path }, { status: 404 });
}

export function meta() {
  return [
    { title: `Page not found | ${SITE_NAME}` },
    {
      name: 'description',
      content:
        'This URL is not on TelivAI Solutions. Return home for AI development, enterprise products, IT staffing, and contact options.',
    },
    { name: 'robots', content: 'noindex' },
  ];
}

export default function NotFoundPage({
  loaderData,
}: {
  loaderData: Awaited<ReturnType<typeof loader>>;
}) {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatedGradientBackground
        Breathing={true}
        startingGap={120}
        breathingRange={8}
        animationSpeed={0.03}
        topOffset={-10}
        gradientColors={[
          "#0A0A0A",
          "#1a1a2e",
          "#7c3aed",
          "#a855f7",
          "#c084fc",
          "#7c3aed",
          "#0A0A0A",
        ]}
        gradientStops={[30, 45, 55, 65, 75, 85, 100]}
      />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <p className="text-[10rem] md:text-[14rem] font-bold leading-none bg-gradient-to-b from-white/90 to-white/10 bg-clip-text text-transparent select-none">
          404
        </p>

        <h1 className="text-2xl md:text-4xl font-semibold text-white mt-2 mb-4">
          Page Not Found
        </h1>

        <p className="text-gray-400 text-base md:text-lg max-w-md mb-10 leading-relaxed">
          The page{' '}
          <span className="text-[#a855f7] font-medium">
            {loaderData.path}
          </span>{' '}
          doesn't exist. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-3 rounded-xl font-semibold text-white border border-white/10 hover:bg-white/5 transition-all"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
