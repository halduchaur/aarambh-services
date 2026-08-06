const ServiceIcon = ({ category }) => {
    switch (category) {
        case "business":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18" /></svg>
            );

        case "vehicle":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 16V11l2-5h12l2 5v5" /><path d="M4 16h16M6 16v3M18 16v3" /><circle cx="7.5" cy="16" r="1.4" /><circle cx="16.5" cy="16" r="1.4" /></svg>
            );

        case "health":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M20.8 8.6c0 5-8.8 11.4-8.8 11.4S3.2 13.6 3.2 8.6a5 5 0 0 1 8.8-3.2 5 5 0 0 1 8.8 3.2Z" /><path d="M9 11h2l1-2 1 3 1-1.5h1.5" /></svg>
            );

        case "darshan":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2 8 8h8l-4-6Z" /><path d="M6 22V10h12v12M9 22v-6h6v6M3 22h18" /></svg>
            )

        case "employment":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="12" rx="2" /><path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18" /></svg>
            )

        case "insurance":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6L12 3Z" /><path d="m9.5 12 1.8 1.8 3.2-3.6" /></svg>
            )

        case "travel":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M10.5 3.5 3 12l3 1 1.5 3 3.5-4.5M13.5 20.5 21 12l-3-1-1.5-3-3.5 4.5" /><path d="M9 15 3 21M15 9l6-6" /></svg>
            )

        case "identity":
        case "certificates":
        case "transport":
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2.5" y="5" width="19" height="14" rx="2.2" />
                    <circle cx="8.5" cy="12" r="2.2" />
                    <path d="M5.3 16.5c.6-1.6 1.9-2.5 3.2-2.5s2.6.9 3.2 2.5M14.5 9.5h4M14.5 13h4" />
                </svg>
            )

        default:
            return (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="4" width="7" height="7" rx="1.5" />
                    <rect x="14" y="4" width="7" height="7" rx="1.5" />
                    <rect x="3" y="13" width="7" height="7" rx="1.5" />
                    <rect x="14" y="13" width="7" height="7" rx="1.5" />
                </svg>
            );
    }
}

export default ServiceIcon;