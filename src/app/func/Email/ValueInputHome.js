


export let NameFormHome;
export let EmailFormHome;
export let NumberFormHome;
export let CompanyFormHome;
export let AboutProyectFormHome;
const ValueInputHome = () => {

    // const NameValue = document.getElementById('NameValue');
    NameFormHome = document.getElementById('nameFormHome').value;
    EmailFormHome = document.getElementById('emailFormHome').value;
    // console.log(EmailFormHome)
    NumberFormHome = document.getElementById('numberFormHome').value;
    // console.log(NumberFormHome)
    CompanyFormHome = document.getElementById('companyFormHome').value;
    // console.log(CompanyFormHome)
    AboutProyectFormHome = document.getElementById('aboutProyectFormHome').value;
    // console.log(AboutProyectFormHome)
};
export default ValueInputHome;