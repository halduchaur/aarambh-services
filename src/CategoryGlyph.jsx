// Original, hand-drawn category glyphs (simple 24px line icons) for the
// Services directory. Plain geometry only — no third-party icon sets.
const GLYPHS = {
    all: (
        <>
            <rect x="4" y="4" width="6.5" height="6.5" rx="1.4" />
            <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.4" />
            <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.4" />
            <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.4" />
        </>
    ),
    Identity: (
        <>
            <rect x="4.5" y="3.5" width="15" height="17" rx="2.4" />
            <circle cx="12" cy="10" r="2.5" />
            <path d="M7.8 17c.7-2 2.4-3 4.2-3s3.5 1 4.2 3" />
        </>
    ),
    Certificates: (
        <>
            <path d="M6 3.5h8.2L19 8.3V20.5H6z" />
            <path d="M14 3.5v5h5" />
            <path d="M9.3 13h6M9.3 16.4h4" />
        </>
    ),
    Business: (
        <>
            <rect x="3.5" y="8" width="17" height="12" rx="2" />
            <path d="M9 8V6.4A1.4 1.4 0 0 1 10.4 5h3.2A1.4 1.4 0 0 1 15 6.4V8" />
            <path d="M3.5 13.2h17" />
        </>
    ),
    Transport: (
        <>
            <path d="M4.2 14.2 5.8 9.3a2 2 0 0 1 1.9-1.4h8.6a2 2 0 0 1 1.9 1.4l1.6 4.9" />
            <rect x="3.2" y="14.2" width="17.6" height="4.4" rx="1.6" />
            <circle cx="7.6" cy="16.4" r=".7" fill="currentColor" />
            <circle cx="16.4" cy="16.4" r=".7" fill="currentColor" />
        </>
    ),
    Travel: (
        <>
            <circle cx="12" cy="12" r="8.5" />
            <path d="M3.5 12h17" />
            <path d="M12 3.5c2.4 2.4 3.6 5.2 3.6 8.5s-1.2 6.1-3.6 8.5c-2.4-2.4-3.6-5.2-3.6-8.5S9.6 5.9 12 3.5Z" />
        </>
    ),
    Insurance: (
        <>
            <path d="M12 3.3 5 6.2v5.4c0 4.2 2.9 7.6 7 9.1 4.1-1.5 7-4.9 7-9.1V6.2l-7-2.9Z" />
            <path d="m9 12 2.2 2.2L15.2 10" />
        </>
    ),
    Employment: (
        <>
            <rect x="5" y="4.5" width="14" height="16.5" rx="2" />
            <path d="M9 4.5h6V7H9z" />
            <path d="m8.6 13.4 2.2 2.2 4.6-4.6" />
        </>
    ),
    Darshan: (
        <>
            <path d="M12 3.2c1.5 1.8 2.5 3.3 2.5 4.9h-5c0-1.6 1-3.1 2.5-4.9Z" />
            <path d="M7 20.5v-9h10v9" />
            <path d="M10.2 20.5v-3.6a1.8 1.8 0 0 1 3.6 0v3.6" />
            <path d="M4 20.5h16" />
        </>
    ),
    Health: (
        <>
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
            <path d="M12 9.6v4M10 11.6h4" />
        </>
    ),
};

const CategoryGlyph = ({ category = "all", size = 20 }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
    >
        {GLYPHS[category] || GLYPHS.all}
    </svg>
);

export default CategoryGlyph;
