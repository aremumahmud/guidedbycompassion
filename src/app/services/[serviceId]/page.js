import Services from '../../../views/Services';

const serviceIds = [
    'personal-care',
    'companion-care',
    'respite-care',
    'in-facility-care',
    'specialized-care',
    'end-of-life-care',
];

export function generateStaticParams() {
    return serviceIds.map((serviceId) => ({ serviceId }));
}

export default function Page() {
    return <Services />;
}
