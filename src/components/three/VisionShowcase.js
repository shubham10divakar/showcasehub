import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useGraphicsCapability from './useGraphicsCapability';
import leafImg from '../../images/ProjectsImages/plantdiseasedetection.jpg';
import './VisionShowcase.css';

const VisionScene = lazy(() => import('./VisionScene'));

/**
 * Home-page section showcasing the AI / Computer Vision research as an
 * interactive 3D "live detection" visual. Falls back to the source image with a
 * CSS bounding-box overlay when 3D is unavailable (reduced motion / no WebGL).
 */
export default function VisionShowcase() {
  const { enabled, isMobile, ready } = useGraphicsCapability();
  const stageRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Only render the canvas loop while the stage is on screen.
  useEffect(() => {
    if (!enabled) return undefined;
    const el = stageRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '120px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled]);

  return (
    <section className="vision-section">
      <div className="vision-badge">
        <span className="vision-badge-dot" /> Computer Vision Research
      </div>
      <h2 className="vision-title">Deep Learning for Plant Disease Detection</h2>
      <p className="vision-subtitle">
        Published methods (SMOTE-DL, COLEN) classifying crop-leaf disease from images using
        EfficientNet ensembles and color-space analysis — 24+ citations across IEEE &amp; Springer.
      </p>

      <div className="vision-stage" ref={stageRef}>
        {ready && enabled ? (
          <Suspense
            fallback={
              <div className="vision-loading">
                <span className="vision-loading-dot" /> Initializing detector…
              </div>
            }
          >
            <VisionScene isMobile={isMobile} frameloop={inView ? 'always' : 'never'} />
          </Suspense>
        ) : (
          // Static fallback — the (already annotated) sample with label pills.
          <div className="vision-fallback">
            <img src={leafImg} alt="Plant disease detection sample" className="vision-fallback-img" />
            <span className="vision-fallback-pill vision-fallback-pill--blight">Leaf Blight · 98%</span>
            <span className="vision-fallback-pill vision-fallback-pill--scorch">Leaf Scorch · 95%</span>
          </div>
        )}
      </div>

      <div className="vision-actions">
        <Link to="/publications" className="vision-btn">
          Read the Publications
        </Link>
      </div>
    </section>
  );
}
