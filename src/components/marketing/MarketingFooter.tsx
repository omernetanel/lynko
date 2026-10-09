import Image from "next/image";

const YEYE_LOGO_URL = "https://yeye.co.il/credit/yeye.png";

function SiteCredit() {
  return (
    <a
      href="https://yeye.co.il"
      target="_blank"
      rel="noopener"
      dir="ltr"
      className="inline-flex items-center gap-[0.5em] text-xs text-muted-foreground no-underline opacity-60 transition-opacity hover:opacity-100 focus-visible:opacity-100"
    >
      Site by
      <span
        aria-hidden="true"
        className="inline-block aspect-[616/160] h-[0.95em] bg-current"
        style={{
          WebkitMask: `url(${YEYE_LOGO_URL}) center / contain no-repeat`,
          mask: `url(${YEYE_LOGO_URL}) center / contain no-repeat`,
        }}
      />
      <span className="sr-only">YEYE Digital</span>
    </a>
  );
}

export function MarketingFooter() {
  return (
    <footer className="relative border-t border-border/60">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <div dir="ltr">
            <Image src="/lynkologow.png" alt="LYNKO" width={151} height={36} className="h-5 w-auto opacity-80" />
          </div>
          <p className="text-sm text-muted-foreground">
            Book with LYNKO - מערכת ניהול תורים חכמה לעסקים קטנים ובינוניים.
          </p>
        </div>
        <SiteCredit />
      </div>
    </footer>
  );
}
