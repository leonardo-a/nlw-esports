interface GameBannerProps {
    bannerUrl: string;
    title: string;
    adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href='#' className='relative rounded-lg overflow-hidden flex-shrink-0 xl:flex-shrink'>
          <img className="w-full xl:w-[260px] h-full xl:h-[285px]" src={props.bannerUrl} />
          <div className='w-full pt-16 pb-4 px-4 bg-desc-gradient absolute bottom-0 right-0 left-0'>
            <strong className='font-bold text-white block'>{props.title}</strong>
            <span className='text-sm text-zinc-300 block'>{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    )
}