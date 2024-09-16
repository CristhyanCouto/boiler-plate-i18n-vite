import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { Button } from "./components/ui/button";

function App() {

  const { t } = useTranslation();

  return (
    <div className="p-5 max-w-4xl justify-center align-center text-center">
      <div>
        <br /><p>{t('countExample', {count: 1,})}</p>
      </div>

      <div className="flex justify-center gap-4">

        <div>
          <Button onClick={
            () => i18next.changeLanguage('pt', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key'); // -> same as i18next.t
          })}
          >
            PT
          </Button>
        </div>

        <div>
        <Button onClick={
            () => i18next.changeLanguage('en', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            t('key'); // -> same as i18next.t
          })}
          >
            EN
          </Button>
        </div>

      </div>

    </div>
  )
}

export default App
