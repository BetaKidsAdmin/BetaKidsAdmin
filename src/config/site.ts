export const locale = process.env.NEXT_PUBLIC_LOCALE ?? 'en-US';
export const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Beta Kids®';
export const siteDescription = process.env.NEXT_PUBLIC_SITE_DESCRIPTION ?? 'Beta Kids® is a brand new immune system support supplement for children! This small, delicious fruit-flavored chewable provides a daily dose of proven immune support with natural ingredients and no added sugar. It is effective and completely safe for kids.';
export const siteLogo = process.env.NEXT_PUBLIC_SITE_LOGO_URL ?? '/images/betakids-logo-black.png';
export const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://localhost:3000';
export const siteContactEmail = process.env.NEXT_PUBLIC_SITE_CONTACT_EMAIL;
export const siteCopyrightText = '© 2022, Beta Kids';
