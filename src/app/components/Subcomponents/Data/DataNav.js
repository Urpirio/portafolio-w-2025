import LinkAboutMe from "@/app/func/LinkAboutme";
import LinkContact from "@/app/func/LinkContact";
import LinkHome from "@/app/func/LinkHome";
import Linkproyect from "@/app/func/LinkProyects";
import LinkServices from "@/app/func/LinkServices";

const DataNav = [
    {
        Nav: 'Home',
        Link: LinkHome,
    },
    {
        Nav: 'About',
        Link: LinkAboutMe,
    },
    {
        Nav: 'Proyects',
        Link: Linkproyect,
    },
    {
        Nav: 'Services',
        Link: LinkServices,
    }
];
export default DataNav;