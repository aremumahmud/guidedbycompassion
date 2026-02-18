import { Suspense } from 'react';
import Application from '../../../views/Application';

export default function Page() {
    return (
        <Suspense>
            <Application />
        </Suspense>
    );
}
