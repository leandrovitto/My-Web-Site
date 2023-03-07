import { Lang } from "@/@types/lang.enum";

import enTech from "../../content/techskills/_en_techskills";
import itTech from "../../content/techskills/_it_techskills";

export const getTechskills = async (lang: string | undefined) => {
    if (lang === Lang.IT) {
        return itTech;
    } else {
        return enTech;
    }
};