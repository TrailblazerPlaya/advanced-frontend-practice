import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
interface LangSwitcherProps {
    className?: string | undefined;
}
export const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggleLng = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <Button
            className={classNames("", {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggleLng}
        >
            {t("Язык")}
        </Button>
    );
};
