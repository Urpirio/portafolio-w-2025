
export let ServicesNameF;
export let ServicesEmailF;
export let ServicesPnumberF;
export let ServicesCompanyF;
export let ServicesAboutProyect;

const FormInputValueServices = () => {

  ServicesNameF = document.getElementById('NameF').value;
  ServicesEmailF = document.getElementById('EmailF').value;
  ServicesPnumberF = document.getElementById('PnumberF').value;
  ServicesCompanyF = document.getElementById('CompanyF').value;
  ServicesAboutProyect =  document.getElementById('AboutProyect').value;

};
export default FormInputValueServices;