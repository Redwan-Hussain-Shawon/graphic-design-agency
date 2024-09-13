import { NextResponse } from "next/server";

export async function GET(){
    return NextResponse.json({
        heading:"Leading Graphic Design Experts In Bangladesh",
        description:"Againsoft is a premier graphic design company in Bangladesh, known for its perfect blend of professionalism and creativity. Our team of expert designers excels at turning your business ideas into visually compelling designs that resonate with your target audience. We understand that every business is unique, which is why we offer custom graphic design services tailored to your specific needs. By combining art, technology, and communication, our designs use typography, imagery, color, and layout to convey your message effectively. From logos and banners to business cards, brochures, advertisements, and infographics, we create designs that leave a lasting impression. Trust Againsoft to elevate your brand with smart, innovative designs that set you apart in the competitive market",
        image:'https://www.againsoft.com/image/cache/catalog/website/graphics-design/Leading-Graphic-Design-Experts-900x900.jpg.webp'
    })
}