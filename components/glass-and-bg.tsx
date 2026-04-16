export function GlassAndBackground() {
  return (
    <>
      <svg width={0} height={0} style={{ position: "absolute" }} aria-hidden>
        <defs>
          <filter
            id="glass-distortion"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.006 0.006"
              numOctaves={2}
              seed={92}
              result="noise"
            />
            <feGaussianBlur in="noise" stdDeviation={2} result="blurred" />
            <feDisplacementMap
              in="SourceGraphic"
              in2="blurred"
              scale={65}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
      <div className="bg-blob" aria-hidden />
      <div className="bg-blob2" aria-hidden />
      <div className="bg-blob3" aria-hidden />
      <div className="bg-particles" aria-hidden>
        <div className="particle p-1" />
        <div className="particle p-2" />
        <div className="particle p-3" />
        <div className="particle p-4" />
        <div className="particle p-5" />
      </div>
    </>
  );
}
