import { BookingCard } from "@/components/BookingCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import routes from "@/data/routes.json";

export function BookHotels() {
  return (
    <section className="mb-[80px]">
      <div className="mx-auto mb-[20px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] md:mb-[40px]">
        <SectionTitle
          title={"Explore East & West Africa"}
          subTitle={
            "Planning your next escape? Discover premium stays in Kenya, Nigeria, and Rwanda, and make your journey unforgettable."
          }
          className={"flex-[0_0_50%]"}
        />
        <Button asChild variant={"outline"}>
          <Link scroll={false} href={"#"}>See all</Link>
        </Button>
      </div>
      <div className="grid gap-[16px] sm:grid-cols-2 xl:grid-cols-4">
      <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Mombasa, Kenya"}
          subTitle={"A coastal escape"}
          cost={700}
          btnHref={`${routes.hotels.path}/${123}/book`}
          btnTitle={"Book a Hotel"}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Lagos, Nigeria"}
          subTitle={"Vibrant city vibes"}
          cost={600}
          btnHref={`${routes.hotels.path}/${123}/book`}
          btnTitle={"Book a Hotel"}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1534974790529-3af7cf1c4075?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Kigali, Rwanda"}
          subTitle={"Serenity in the hills"}
          cost={350}
          btnHref={`${routes.hotels.path}/${123}/book`}
          btnTitle={"Book a Hotel"}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1606298246186-08868ab77562?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Naivasha, Kenya"}
          subTitle={"Lakeside tranquility"}
          cost={700}
          btnHref={`${routes.hotels.path}/${123}/book`}
          btnTitle={"Book a Hotel"}
        />
      </div>
    </section>
  );
}
