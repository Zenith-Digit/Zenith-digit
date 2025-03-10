"use client"
import React from 'react'
import GardePage from '@/components/pageGarde/GardePage';
import { BlueCard } from '@/components/cards/BlueCard';
import WebDev from '@/components/webDev/WebDev';
import { SiMicrosoftbing } from "react-icons/si";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import wireframe from '@/images/wir.jpg'
import design from '@/images/fig.jpg'
import Image from 'next/image'



export default function CardHoverEffectDemo() {
  return (
    <>
      <GardePage title='Service' />
      <h1 className='text-[#00fefb] text-4xl font-bold m-8 text-center'>Nos Services</h1>
      <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Nous proposons une variété de services adaptés à vos exigences. Que vous ayez besoin de développement web, de création d&apos;interfaces contemporaines ou d&apos;optimisation de vos projets numériques, notre expertise est à votre service.
        Avec une approche personnalisée, nous assurons des solutions créatives, performantes et en phase avec vos ambitions. Comptez sur notre expérience pour concrétiser vos idées.</p>
      <div className="border-b-4 border-[#00fefb]">
        <BlueCard />
      </div>
      <WebDev />
      <div className='border-b-4 border-[#00fefb] '>
        <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Référencement SEO
        </h2>
        <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Améliorez votre présence sur Internet avec un référencement SEO efficace. Générez davantage de visiteurs, renforcez votre classement sur les moteurs de recherche et accroissez votre notoriété pour atteindre un public élargi.</p>
        <div className='flex justify-around md:justify-between w-full md:w-5/6 mx-auto my-10'>
          <svg xmlns="http://www.w3.org/2000/svg" aria-label="Baidu" viewBox="0 0 512 512" id="baidu" className='w-16'>
            <rect width="512" height="512" fill="#fff" rx="15%"></rect>
            <path fill="#2319dc" d="m131 251c41-9 35-58 34-68-2-17-21-45-48-43-33 3-37 50-37 50-5 22 10 70 51 61m76-82c22 0 40-26 40-58s-18-58-40-58c-23 0-41 26-41 58s18 58 41 58m96 4c31 4 50-28 54-53 4-24-16-52-37-57s-48 29-50 52c-3 27 3 54 33 58m120 41c0-12-10-47-46-47s-41 33-41 57c0 22 2 53 47 52s40-51 40-62m-46 102s-46-36-74-75c-36-57-89-34-106-5-18 29-45 48-49 53-4 4-56 33-44 84 11 52 52 51 52 51s30 3 65-5 65 2 65 2 81 27 104-25c22-53-13-80-13-80"></path>
            <path fill="#fff" d="m214 266v34h-28s-29 3-39 35c-3 21 4 34 5 36 1 3 10 19 33 23h53v-128zm-1 107h-21s-15-1-19-18c-3-7 0-16 1-20 1-3 6-11 17-14h22zm38-70v68s1 17 24 23h61v-91h-26v68h-25s-8-1-10-7v-61z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" aria-label="Yahoo!" viewBox="0 0 512 512" id="yahoo" className='w-16'>
            <rect width="512" height="512" fill="#5f01d1" rx="15%"></rect>
            <path d="M203 404h-62l25-59-69-165h63l37 95 37-95h62m58 76h-69l62-148h69"></path>
            <circle cx="303" cy="308" r="38"></circle>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="google" className='w-16'>
            <path fill="#fbbb00" d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"></path>
            <path fill="#518ef8" d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"></path>
            <path fill="#28b446" d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"></path>
            <path fill="#f14336" d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"></path>
          </svg>
          <SiMicrosoftbing className='text-6xl text-[#2D6CEE]' />
          <FaMeta className='text-6xl text-[#0A85FA]' />
        </div>
      </div>
      <div className='border-b-4 border-[#00fefb]'>
        <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Design UX/UI
        </h2>
        <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Nous concevons des interfaces modernes et intuitives pour offrir à vos utilisateurs une expérience fluide et engageante, tout en renforçant votre image de marque.</p>
        <div className=' md:flex justify-around md:justify-between w-full md:w-5/6 mx-auto my-10'>
          <Image src={wireframe} alt='' className='w-80 mx-auto my-6' />
          <Image src={design} alt='' className='w-80 mx-auto my-6' />
        </div>
        <div>
        </div>
      </div>
      <div className='border-b-4 border-[#00fefb] '>
        <h2 className="text-[#00fefb] text-4xl font-bold m-8 text-center">Reseau Sociaux
        </h2>
        <p className='w-5/6 mx-auto py-8 text-center text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-wide'>Nous sommes actifs sur diverses plateformes afin de maintenir le lien avec vous. Abonnez-vous pour être au courant de nos dernières nouvelles, de nos projets en développement, et bien d&apos;autres choses ! Restez à jour, engagez-vous avec nous et intégrez notre communauté.</p>
        <div className='flex justify-around md:justify-between w-full md:w-5/6 mx-auto my-10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" id="facebook" className='w-16'>
            <path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path>
            <path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path>
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3364.7 3364.7" className='w-16'>
            <defs>
              <radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse">
                <stop offset=".09" stop-color="#fa8f21" /><stop offset=".78" stop-color="#d82d7e" />
              </radialGradient>
              <radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse">
                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" /><stop offset="1" stop-color="#8c3aaa" />
              </radialGradient>
            </defs>
            <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)" /><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)" /><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#fff" />
          </svg>
          <FaXTwitter className='text-6xl' />
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className='w-16'>
            <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path>
            <path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" className='w-16'>
            <path fill="#212121" fill-rule="evenodd" d="M10.904,6h26.191C39.804,6,42,8.196,42,10.904v26.191 C42,39.804,39.804,42,37.096,42H10.904C8.196,42,6,39.804,6,37.096V10.904C6,8.196,8.196,6,10.904,6z" clip-rule="evenodd"></path><path fill="#ec407a" fill-rule="evenodd" d="M29.208,20.607c1.576,1.126,3.507,1.788,5.592,1.788v-4.011 c-0.395,0-0.788-0.041-1.174-0.123v3.157c-2.085,0-4.015-0.663-5.592-1.788v8.184c0,4.094-3.321,7.413-7.417,7.413 c-1.528,0-2.949-0.462-4.129-1.254c1.347,1.376,3.225,2.23,5.303,2.23c4.096,0,7.417-3.319,7.417-7.413L29.208,20.607L29.208,20.607 z M30.657,16.561c-0.805-0.879-1.334-2.016-1.449-3.273v-0.516h-1.113C28.375,14.369,29.331,15.734,30.657,16.561L30.657,16.561z M19.079,30.832c-0.45-0.59-0.693-1.311-0.692-2.053c0-1.873,1.519-3.391,3.393-3.391c0.349,0,0.696,0.053,1.029,0.159v-4.1 c-0.389-0.053-0.781-0.076-1.174-0.068v3.191c-0.333-0.106-0.68-0.159-1.03-0.159c-1.874,0-3.393,1.518-3.393,3.391 C17.213,29.127,17.972,30.274,19.079,30.832z" clip-rule="evenodd"></path><path fill="#fff" fill-rule="evenodd" d="M28.034,19.63c1.576,1.126,3.507,1.788,5.592,1.788v-3.157 c-1.164-0.248-2.194-0.856-2.969-1.701c-1.326-0.827-2.281-2.191-2.561-3.788h-2.923v16.018c-0.007,1.867-1.523,3.379-3.393,3.379 c-1.102,0-2.081-0.525-2.701-1.338c-1.107-0.558-1.866-1.705-1.866-3.029c0-1.873,1.519-3.391,3.393-3.391 c0.359,0,0.705,0.056,1.03,0.159V21.38c-4.024,0.083-7.26,3.369-7.26,7.411c0,2.018,0.806,3.847,2.114,5.183 c1.18,0.792,2.601,1.254,4.129,1.254c4.096,0,7.417-3.319,7.417-7.413L28.034,19.63L28.034,19.63z" clip-rule="evenodd"></path><path fill="#81d4fa" fill-rule="evenodd" d="M33.626,18.262v-0.854c-1.05,0.002-2.078-0.292-2.969-0.848 C31.445,17.423,32.483,18.018,33.626,18.262z M28.095,12.772c-0.027-0.153-0.047-0.306-0.061-0.461v-0.516h-4.036v16.019 c-0.006,1.867-1.523,3.379-3.393,3.379c-0.549,0-1.067-0.13-1.526-0.362c0.62,0.813,1.599,1.338,2.701,1.338 c1.87,0,3.386-1.512,3.393-3.379V12.772H28.095z M21.635,21.38v-0.909c-0.337-0.046-0.677-0.069-1.018-0.069 c-4.097,0-7.417,3.319-7.417,7.413c0,2.567,1.305,4.829,3.288,6.159c-1.308-1.336-2.114-3.165-2.114-5.183 C14.374,24.749,17.611,21.463,21.635,21.38z" clip-rule="evenodd"></path>
          </svg>
        </div>
      </div>
    </>
  );
}