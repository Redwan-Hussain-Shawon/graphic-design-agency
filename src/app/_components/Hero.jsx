async function getHeroData(){
    const respone = await fetch('http://localhost:3000/api/hero',{
        method:'GET',
        cache: 'no-store'
    });
    return respone.json();

}

async function  Hero() {
    let data = await getHeroData();
  return (
    <div className="py-3 px-6">
        <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
                <div className="mt-10">
                    <h1 className="text-3xl font-bold leading-[42px]">{data.heading}</h1>
                    <p className="text-[15px] leading-8 text-gray-500 mt-4">{data.description}</p>
                </div>
                <div>
                    <img src={data.image} alt="" />
                </div>
            </div>
        </div>
</div>
  )
}

export default Hero