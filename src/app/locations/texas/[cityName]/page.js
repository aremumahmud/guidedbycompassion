// This route is permanently redirected to /home-care/texas/[cityName]
// via next.config.mjs redirects. This file is kept as a fallback only.
import { redirect } from 'next/navigation';

export default async function Page({ params }) {
    const { cityName } = await params;
    redirect(`/home-care/texas/${cityName}`);
}
