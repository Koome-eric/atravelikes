import { BookingCard } from "@/components/BookingCard";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BookFlights() {
  return (
    <section className="mx-auto mb-[80px]">
      <div className="mx-auto mb-[20px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] md:mb-[40px]">
        <SectionTitle
          title={"Explore Africa's beauty"}
          subTitle={
            "Are you ready for a true African adventure? Whether it's wildlife safaris or vibrant cityscapes, we’ve got the perfect options to make your travel unforgettable."
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
          placeName={"Nairobi"}
          subTitle={"A safari adventure awaits"}
          cost={700}
          btnTitle={"Book Hotel"}
          btnHref={"/hotels"}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFyaXN8ZW58MHx8MHx8fDA%3D"
          }
          placeName={"Zanzibar"}
          subTitle={"Island paradise adventure"}
          cost={600}
          btnTitle={"Book Hotel"}
          btnHref={"/hotels"}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1534974790529-3af7cf1c4075?q=80&w=1087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Cape Town"}
          subTitle={"Explore the beauty of the coast"}
          cost={350}
          btnTitle={"Book Hotel"}
          btnHref={"/hotels."}
        />
        <BookingCard
          bgImg={
            "https://images.unsplash.com/photo-1606298246186-08868ab77562?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          placeName={"Accra"}
          subTitle={"Vibrant street life and culture"}
          cost={700}
          btnTitle={"Book Hotel"}
          btnHref={"/hotels."}
        />
      </div>
    </section>
  );
}
