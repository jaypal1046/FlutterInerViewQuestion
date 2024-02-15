'use client';

import Link from 'next/link';
import { AiOutlineHome, AiOutlineClose,AiOutlineStock, AiFillSignal} from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { FaAngleRight, FaCheck, FaCheckDouble } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';
import { SiHelpscout, SiSinglestore } from 'react-icons/si';
import { RiStockLine,  } from 'react-icons/ri';
import React, { useContext } from 'react';

import { MenuContext } from './MenuContext';

// async function getIndices() {
//   const res = await fetch("https://jaypal1046.pythonanywhere.com/getIndices",{
//       next:{
//           revalidate: 30 //use 30 to opt  out of using catch
//       }
//   });
//   return res.json();
// }

// async function getStock() {
//   const res = await fetch("https://jaypal1046.pythonanywhere.com/getStock",{
//       next:{
//           revalidate: 30 //use 30 to opt  out of using catch
//       }
//   });
//   return res.json();
// }

export default async function  MainLayout({ children }) {
  const { open } = useContext(MenuContext);
  const { opens, toggle } = useContext(MenuContext);
  // const indices = await getIndices();
  // const stocks = await getStock();
  const closeSeideBarHandler = () => {
    toggle();
  };
  return (
    <div className='flex'>
      <div className='flex-8 h-auto'>
      
      <ul>
      

        <li className='flex justify-start items-center bg-blue-200  rounded-xl  p-2'>
          <AiOutlineHome className='mr-2' />
          <Link href='' onClick={closeSeideBarHandler}>
            INDICES
          </Link>
        </li>

        {/* <>
        {indices["data"].map((index) => (
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <RiStockLine className='mr-2' />
          <Link href= {`../pass-arvind-1046/${index.symbol}`} onClick={closeSeideBarHandler}>
            {index.symbol}
          </Link>
        </li>
        ))
        
        }
        
        </> */}

        
       
        
        <li className='flex justify-start items-center bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          < AiFillSignal  className='mr-2' />
          <Link href='../pass-arvind-1046/indices/NIFTY_50' onClick={closeSeideBarHandler}>
            Stocks
          </Link>
        </li>



        {/* <>
        {stocks["data"].map((stock) => (
          <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <AiOutlineStock className='mr-2' />
          <Link href={`../pass-arvind-1046/${stock.symbol}`} onClick={closeSeideBarHandler}>
          {stock.symbol}
          </Link>
        </li>
      
        ))
        
        }
        
        </> */}
        
        

      </ul>
  
      </div>
      <div className={`${open ? 'max-lg:blur-xl pointer-events-none' : ''} flex-1`}>

        <main className='min-w-full'>{children}</main>
      </div>
    
    </div>
  );
};


