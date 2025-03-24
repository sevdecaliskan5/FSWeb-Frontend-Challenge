export default function Profile() {
  return (
    <section className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl font-medium tracking-wide pb-10">Profile</h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg text-pink-500 font-semibold pb-4">
            Basic Information
          </h3>
          <dl className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <dt className="font-bold">Doğum Tarihi</dt> <dd>05.02.1996</dd>
            <dt className="font-bold">İkamet Şehri</dt> <dd>İzmir</dd>
            <dt className="font-bold">Eğitim Durumu</dt>
            <dd>Pamukkale Üniversitesi, İnşaat Mühendisliği, 2019</dd>
            <dt className="font-bold">Tercih Ettiği Rol</dt>
            <dd>Frontend, UI</dd>
          </dl>
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="text-lg font-semibold pb-4">About Me</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I am a front-end developer with a strong passion for crafting
            scalable and user-friendly web applications. I enjoy working with
            modern UI frameworks and love transforming designs into fully
            functional products.
          </p>
        </div>
      </div>
    </section>
  );
}
