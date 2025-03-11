'use client'
import React, {FC, useEffect, useState} from 'react';
import {useAppStore} from "@/shared/store/AppStore";
import CardProduct from "@/widgets/CardProduct";
import {getCoursesList} from "@/shared/api";
import CardProductSkeleton from "@/widgets/CardProduct/CardProductSkeleton";
import {enhanceProductsWithData} from "@/shared/helpers";

interface ComponentProps {
  query: string
}

const SearchContent:FC<ComponentProps> = ({query}) => {
  const { products, setProducts } = useAppStore()
  const [loading,setLoading] = useState<boolean>(false)
  console.log('products',products)
  console.log('query',query)

  const getProducts = async () => {
    setLoading(true)
    try {
      const response = await getCoursesList();
      if(response) {
        const updatedProducts = enhanceProductsWithData(response);
        setProducts(updatedProducts)
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(!products && query) {
      getProducts()
    }
  }, [query])

  const filteredProducts = (query && products) ? products?.filter(item => item.name?.toLowerCase().includes(query)) : products

  if(loading) {
    return (
      <div className="flex gap-[2.08vw]">
        {Array.from({ length: 4 }).map((_, index) => (
          <CardProductSkeleton key={index} />
        ))}
      </div>
    )
  }

  return (
    <div className="flex flex-wrap gap-[20px]">
      {(filteredProducts && filteredProducts.length > 0)
        ? filteredProducts
          .map(item => <CardProduct key={item.id} product={item} />)
        : <p> Nothing found</p>
      }
    </div>
  );
};

export default SearchContent;