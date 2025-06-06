import { useEffect, useState } from 'react'
import { mens_kurta } from '../../../Data/mens_kurta'
import ProductCard from './productcard'
import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { filters, singleFilter } from './FilterData'
import { FormControl, FormControlLabel, FormLabel, Pagination, Radio, RadioGroup } from '@mui/material'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { findProducts } from '../../../state/product/Action'



const sortOptions = [
  
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Product() {
  const location=useLocation();
  const Navigate=useNavigate();
  const param=useParams();
  const dispatch=useDispatch();

  const decodedQueryString=decodeURIComponent(location.search);
  const searchParams=new URLSearchParams(decodedQueryString);
  const colorValue=searchParams.get('color');
  const sizeValue=searchParams.get('size');
  const priceValue=searchParams.get('price');
  const discount=searchParams.get('discount');
  const sortValue=searchParams.get('sort');
  const pageNumber=searchParams.get('page')||1;
  const stock=searchParams.get('stock');
  const {product}=useSelector(store=>store)
  const handlePaginationChange=(value)=>{
    const searchParams=new URLSearchParams(location.search);
    searchParams.set('page',value);
    const query=searchParams.toString();
    Navigate({search:`${query}`})
  }
  const handleFilter=(value,sectionId)=>{
    const searchParams=new URLSearchParams(location.search);

    let filterValue=searchParams.getAll(sectionId);
    if(filterValue.length>0 && filterValue[0].split(",").includes(value)){
      filterValue=filterValue[0].split(",").filter((item)=>item!==value);
      if(filterValue.length===0){
        searchParams.delete(sectionId);
      }
  }
  else{
    filterValue.push(value);
  }
  if(filterValue.length>0 ){
    searchParams.set(sectionId,filterValue.join(","));
    
  }
  const query=searchParams.toString();
    Navigate({search:`?${query}`});
}
const handleRadioFIlterChange=(e,sectionId) => {
  const searchParams=new URLSearchParams(location.search);
  searchParams.set(sectionId,e.target.value);
  const query=searchParams.toString();
  Navigate({search:`?${query}`});
}


useEffect(() => {
  const [minPrice, maxPrice] = priceValue === null ? [0, 10000] : priceValue.split("-").map(Number);
  const data = {
    category: param.lavelThree,
    colors: colorValue ? colorValue.split(",") : [],
    sizes: sizeValue ? sizeValue.split(",") : [],
    minPrice: minPrice || 0,
    maxPrice: maxPrice || 10000,
    minDiscount: discount || 0,
    sort: sortValue,
    pageNumber: pageNumber - 1,
    pageSize: 10,
    stock: stock,
  };

  dispatch(findProducts(data));
}, [
  param.ab,
  colorValue,
  sizeValue,
  priceValue,
  discount,
  sortValue,
  pageNumber,
  stock,]);


  return (
    <div className="bg-white w-full">
      <div>
        <main className="mx-auto px-4 sm:px-6 lg:px-25 ">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                            'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5">
              {/* Filters */}
             <div>
              <div className='py-10 flex justify-between item-center'>
              <h1 className='text-lg opacity-50 font-bold'>Filters</h1>
              <FilterAltIcon/>
              </div>
             
              
              <form className="hidden lg:block">
                

                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium text-gray-900">{section.name}</span>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.map((option, optionIdx) => (
                          <div key={option.value} className="flex items-center">
                            <input
                            onChange={()=>handleFilter(option.value,section.id)}
                              defaultValue={option.value}
                              defaultChecked={option.checked}
                              id={`filter-${section.id}-${optionIdx}`}
                              name={`${section.id}[]`}
                              type="checkbox"
                              className="size-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            />
                            <label htmlFor={`filter-${section.id}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </DisclosurePanel>
                  </Disclosure>
                ))}
                {singleFilter.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b border-gray-200 py-6">
                    
                    <h3 className="-my-3 flow-root">
                      <DisclosureButton className="group flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        {/* <span className="font-medium "></span> */}
                        <FormLabel sx={{color:"black"}}className='text-gray-900'id="demo-radio-buttons-group-label">{section.name}</FormLabel>
                        <span className="ml-6 flex items-center">
                          <PlusIcon aria-hidden="true" className="size-5 group-data-[open]:hidden" />
                          <MinusIcon aria-hidden="true" className="size-5 [.group:not([data-open])_&]:hidden" />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                      <FormControl>
                      <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                          >
                        {section.options.map((option, optionIdx) => (
                          
                          <>
                            <FormControlLabel onChange={(e)=>handleRadioFIlterChange(e,section.id)}  value={option.value} control={<Radio />} label={option.label}/>
                            
                            
                            </>
                        
                        ))}
                        </RadioGroup>
                        </FormControl>
                      </div>
                    </DisclosurePanel>
                    
                  </Disclosure>
                ))}
              </form>
              </div>

              {/* Product grid */}
              {/* <div className="lg:col-span-3 w-full overflow-hidden">Your content</div> */}
              <div className="grid grid-cols-4 gap-3 w-[70rem]">
      {mens_kurta.map((item) => 
      <div className=" w-[15rem] ">
        <ProductCard  product={item}/>
        </div>
      )}
    </div>
          
      
    
            </div>
          </section>
          <section className="w-full px=[3.6rem">
            <div className="px-4 py-5 flex justify-center">
            <Pagination count={10} color="secondary" onChange={handlePaginationChange}/>
            </div>
          </section>
        </main>
      </div>
    </div>
    
  )
}
