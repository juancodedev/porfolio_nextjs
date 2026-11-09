import Image from "next/image"

const Photo = () => {
    return (
        <Image
            src="/assets/new_profile.webp"
            priority
            width={260}
            height={312}
            sizes="(min-width: 1024px) 260px, 200px"
            alt="Juan Muñoz"
            className="h-[240px] w-[200px] rounded-2xl object-cover object-top lg:h-[312px] lg:w-[260px]"
        />
    )
}

export default Photo
