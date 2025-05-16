import { MetadataRoute } from "next";

export default async function sitemap():Promise<MetadataRoute.Sitemap>{
return [
    {
        url:`${process.env.NEXT_PUBLIC_API_URL}/client`,
    },
    {
        url:`${process.env.NEXT_PUBLIC_API_URL}/dashboard`,
    }
]
}