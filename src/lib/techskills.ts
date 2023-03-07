import { Lang } from "@/@types/lang.enum";
import englishTech from "../../content/techskills/_en_techskills";

//Projects API
export const getTechskills = async (lang: string | undefined) => {
    if (lang === Lang.IT) {
        return englishTech;
    } else {
        return englishTech;
    }
};