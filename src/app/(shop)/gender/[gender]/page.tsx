export const revalidate = 60; //60 segundos

/* Todos son server components, a menos que esté especificado como un 'use client' */

import { getPaginatedProductWithImages } from "@/actions";
import { Title, ProductGrid, Pagination } from "@/components";

import { Gender } from "@/generated/prisma";
import { redirect } from "next/navigation";

interface Props {
  params: Promise<{ gender: string }>;
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function GenderByPage({ params, searchParams }:Props) {
  const { gender } = await params;

  const resolvedSearchParams = await searchParams;

  const page = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page)
    : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductWithImages({ page, gender: gender as Gender });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  const labels: Record<string, string> = {
    men: "para hombres",
    women: "para mujeres",
    kid: "para niños",
    unisex: "para todos",
  };

  // if( id === 'kids') {
  //     notFound();
  // }

  return (
    <>
      <Title
        title={`Artículos ${labels[gender]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
