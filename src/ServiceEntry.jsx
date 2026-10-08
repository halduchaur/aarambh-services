import { memo } from "react";
import { Link } from "./i18nRouting";
import CategoryGlyph from "./CategoryGlyph";

// One catalogue entry. The title is the real link; a stretched ::after makes
// the whole card clickable while keeping a clean accessible name.
const ServiceEntry = memo(function ServiceEntry({ service, language, copy }) {
    const name = service.name?.[language] ?? service.name?.en;
    const summary = service.summary?.[language] ?? service.summary?.en;
    const category = service.category?.[language] ?? service.category?.en;
    const price = service.price?.[language] ?? service.price?.en;
    const tag = service.tag;
    const tagKey = tag?.en?.toLowerCase().replace(/[^a-z]/g, "");

    return (
        <article className="sv-entry">
            <div className="sv-entry-top">
                <span className="sv-entry-cat">
                    <CategoryGlyph category={service.category?.en} size={15} />
                    {category}
                </span>
                {tag && <span className={`sv-tag sv-tag-${tagKey}`}>{tag[language] ?? tag.en}</span>}
            </div>

            <div className="sv-entry-main">
                <div className="sv-entry-thumb">
                    <img src={service.image} alt="" width="88" height="88" loading="lazy" decoding="async" />
                </div>
                <div className="sv-entry-text">
                    <h3 className="sv-entry-title">
                        <Link to={`/services/${service.id}`} className="sv-entry-link">{name}</Link>
                    </h3>
                    <p className="sv-entry-sum">{summary}</p>
                </div>
            </div>

            <div className="sv-entry-foot">
                <div className="sv-price">
                    <small>{copy.starting_at}</small>
                    <strong>{price}</strong>
                </div>
                <span className="sv-more" aria-hidden="true">
                    {copy.view_details}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                </span>
            </div>
        </article>
    );
});

export default ServiceEntry;
