// `app/page.js` is the UI for the root `/` URL
export default function Page() {
  return (
    <div className=' bg-transparent'>
      <div className=' max-w-[326px]  xl:max-w-[350px] bg-white mx-auto  rounded-[15px] overflow-hidden mt-[147px] z-[100] xl:mt-[173px]'>
        <div className=" bg-[url('/images/bg-pattern-card.svg')] w-full pt-[43%] relative after:avator"></div>
        <div className=' text-center pt-[72px]  pb-[28px] border-b-[1px] border-dark-gray'>
          <h1 className=' font-bold'>
            Victor Crest{' '}
            <span className=' font-normal  text-blue-grayish-dark'>26</span>
          </h1>
          <p className=' text-sm text-blue-grayish-dark'> London</p>
        </div>
        <div className=' py-[24px] px-[46px]  flex justify-between'>
          <div className='text-center '>
            <p className=' font-bold  text-blue-desaturated-very-dark'>80K</p>
            <p className='text-[10px] text-blue-grayish-dark'>Followers</p>
          </div>
          <div className='text-center '>
            <p className=' font-bold  text-blue-desaturated-very-dark'>803K</p>
            <p className='text-[10px] text-blue-grayish-dark'>Likes</p>
          </div>
          <div className='text-center '>
            <p className=' font-bold  text-blue-desaturated-very-dark'>1.4K</p>
            <p className='text-[10px] text-blue-grayish-dark'>Photos</p>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/bg-pattern-bottom.svg')] w-[100%] h-[100%] bg-no-repeat absolute -bottom-[40%] -right-[40%] -z-10 xl:-bottom-[50%] xl:-right-[50%] "></div>
      <div className="bg-[url('/images/bg-pattern-top.svg')] w-[100%] h-[100%] bg-no-repeat absolute  -top-[60%] -left-[50%] -z-10 xl:-top-[50%] xl:-left-[20%]"></div>
    </div>
  );
}
