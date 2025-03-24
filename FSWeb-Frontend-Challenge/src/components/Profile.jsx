import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";
import { content } from "../data/content"; 


export default function Profile() {
  const { darkMode } = useTheme();
  const { language } = useLanguage();

  const profileContent = content[language].profile; //content dosyasindaki profil kismini cekiyoruz

  return (
    <section className="px-10 py-10 md:px-40 md:py-20 flex flex-col items-center">
      <h2 className="text-4xl font-medium tracking-wide pb-10">{profileContent.aboutMe}</h2>

      <div className="grid md:grid-cols-2 gap-10 w-full max-w-4xl">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
          <h3 className="text-lg text-pink-500 font-semibold pb-4">
          {profileContent.basicInfo}
          </h3>
          <dl className="grid grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
            <dt className="font-bold">{profileContent.birthDate}</dt> <dd>05.02.1996</dd>
            <dt className="font-bold">{profileContent.city}</dt> <dd>İzmir</dd>
            <dt className="font-bold">{profileContent.education}</dt>
            <dd>{profileContent.educationDetails}</dd>
            <dt className="font-bold">{profileContent.preferredRole}</dt>
            <dd>Frontend, UI</dd>
          </dl>
        </div>

        <div className="text-start flex flex-col justify-center">
          <h3 className="text-lg font-semibold pb-4">{profileContent.aboutMe}</h3>
          <p className="text-gray-700 dark:text-gray-300">
          {profileContent.aboutDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
