import axios from 'axios';

const URLAPI = 'https://squid-app-jci62.ondigitalocean.app';
interface Bien {
  id?: Number;
  cod: Number;
  cod_ant: Number;
  tipo: String;
  nombre: String;
  serie: String;
  marca: String;
  monto: Number;
}

export const useBien = () => {
  const agregarBien = async (bien: Bien) => {
    try {
      await axios.post(`${URLAPI}/bien`, bien);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  const borrarBien = async (cod: Number) => {
    try {
      await axios.delete(`${URLAPI}/bien/${cod}`);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };
  return { agregarBien, borrarBien };
};
