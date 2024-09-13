import ServiceList from "./ServiceList.json";

async function ServiceCategory() {
  const result = ServiceList.graphics_services;
  return (
    <div className="bg-gray-100 p-12">
      <div className="container">
        <h2 className="text-4xl font-semibold text-center mb-1">
          Againsoft Provides
        </h2>
        <h5 className="text-center font-medium text-2xl mb-4">
          Professional <span className="text-primary">Graphics Design</span>{" "}
          Services On
        </h5>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {result.map((item) => (
            <div className="flex gap-3 flex-col bg-white p-5 items-center rounded">
              <img className="w-16" src={item.image_src} alt="" />
              <h3 className="text-center">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServiceCategory;
